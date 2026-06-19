#!/usr/bin/env bash
set -Eeuo pipefail

DOMAIN="exos.tech"
SITE_ROOT="/var/www/${DOMAIN}"
SSH_KEY="${HOME}/.ssh/exos"
REMOTE="ubuntu@exos.tech"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ARCHIVE="$(mktemp -t exos-site-update.XXXXXX.tar.gz)"

usage() {
  cat <<EOF
Usage:
  ./update.sh

Builds the Exos landing page and updates the existing Caddy-served site.

Remote target: ${REMOTE}
SSH key: ${SSH_KEY}
Site root: ${SITE_ROOT}
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

echo "Uploading update to ${REMOTE}..."
ssh -i "$SSH_KEY" "$REMOTE" "mkdir -p /tmp/exos-update"
scp -i "$SSH_KEY" "$ARCHIVE" "$REMOTE:/tmp/exos-update/site.tar.gz"

echo "Installing updated assets..."
ssh -i "$SSH_KEY" "$REMOTE" "DOMAIN='$DOMAIN' SITE_ROOT='$SITE_ROOT' bash -s" <<'REMOTE_SCRIPT'
set -Eeuo pipefail

if ! command -v sudo >/dev/null 2>&1; then
  echo "sudo is required on the remote VM" >&2
  exit 1
fi

if ! command -v caddy >/dev/null 2>&1; then
  echo "Caddy is not installed. Run ./deploy.sh first." >&2
  exit 1
fi

sudo mkdir -p "$SITE_ROOT"
sudo find "$SITE_ROOT" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
sudo tar -xzf /tmp/exos-update/site.tar.gz -C "$SITE_ROOT"
sudo chown -R caddy:caddy "$SITE_ROOT" 2>/dev/null || sudo chown -R www-data:www-data "$SITE_ROOT"
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy || sudo systemctl restart caddy
rm -rf /tmp/exos-update
REMOTE_SCRIPT

echo "Update complete: https://${DOMAIN}"
