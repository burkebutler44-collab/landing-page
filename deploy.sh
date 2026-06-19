#!/usr/bin/env bash
set -Eeuo pipefail

DOMAIN="exos.tech"
SITE_ROOT="/var/www/${DOMAIN}"
SSH_KEY="${HOME}/.ssh/exos"
REMOTE="ubuntu@exos.tech"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ARCHIVE="$(mktemp -t exos-site.XXXXXX.tar.gz)"

usage() {
  cat <<EOF
Usage:
  ./deploy.sh

Deploys the Exos landing page to https://${DOMAIN} and configures Caddy.

Remote target: ${REMOTE}
SSH key: ${SSH_KEY}

The remote VM should be Debian/Ubuntu based and the SSH user must be able to run sudo.
Make sure ${DOMAIN} DNS points at the VM before running this if you want Caddy to issue TLS.
EOF
}

cleanup() {
  rm -f "$ARCHIVE"
}
trap cleanup EXIT

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

require_local() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Missing required local command: $1" >&2
    exit 1
  fi
}

require_local npm
require_local tar
require_local ssh
require_local scp

if [[ ! -f "$SSH_KEY" ]]; then
  echo "Missing SSH private key: $SSH_KEY" >&2
  exit 1
fi

cd "$SCRIPT_DIR"

echo "Building Exos landing page..."
npm run build

echo "Packaging dist assets..."
tar -C "$SCRIPT_DIR/dist" -czf "$ARCHIVE" .

echo "Copying assets to ${REMOTE}..."
ssh -i "$SSH_KEY" "$REMOTE" "mkdir -p /tmp/exos-deploy"
scp -i "$SSH_KEY" "$ARCHIVE" "$REMOTE:/tmp/exos-deploy/site.tar.gz"

echo "Installing assets and configuring Caddy on ${REMOTE}..."
ssh -i "$SSH_KEY" "$REMOTE" "DOMAIN='$DOMAIN' SITE_ROOT='$SITE_ROOT' bash -s" <<'REMOTE_SCRIPT'
set -Eeuo pipefail

if ! command -v sudo >/dev/null 2>&1; then
  echo "sudo is required on the remote VM" >&2
  exit 1
fi

if ! command -v caddy >/dev/null 2>&1; then
  if ! command -v apt-get >/dev/null 2>&1; then
    echo "Caddy is not installed, and this script only auto-installs on apt-based systems." >&2
    exit 1
  fi

  sudo apt-get update
  sudo apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
    | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
    | sudo tee /etc/apt/sources.list.d/caddy-stable.list >/dev/null
  sudo apt-get update
  sudo apt-get install -y caddy
fi

sudo mkdir -p "$SITE_ROOT"
sudo tar -xzf /tmp/exos-deploy/site.tar.gz -C "$SITE_ROOT"
sudo chown -R caddy:caddy "$SITE_ROOT" 2>/dev/null || sudo chown -R www-data:www-data "$SITE_ROOT"

sudo tee /etc/caddy/Caddyfile >/dev/null <<CADDYFILE
${DOMAIN} {
	root * ${SITE_ROOT}
	encode zstd gzip
	try_files {path} /index.html
	file_server

	header {
		X-Content-Type-Options nosniff
		Referrer-Policy strict-origin-when-cross-origin
		Permissions-Policy "camera=(), microphone=(), geolocation=()"
	}
}

www.${DOMAIN} {
	redir https://${DOMAIN}{uri} permanent
}
CADDYFILE

sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl enable caddy
sudo systemctl reload caddy || sudo systemctl restart caddy
rm -rf /tmp/exos-deploy
REMOTE_SCRIPT

echo "Deployment complete: https://${DOMAIN}"
