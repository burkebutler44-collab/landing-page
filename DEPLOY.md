# Exos Landing Page Deploy

Deploy the built static site to `ubuntu@exos.tech` and configure Caddy for `exos.tech`:

```sh
./deploy.sh
```

After the first deploy, update only the site assets with:

```sh
./update.sh
```

The script:

- builds the Vite app locally
- packages `dist`
- copies the assets to the remote VM
- installs Caddy if needed
- writes `/etc/caddy/Caddyfile`
- serves `exos.tech` from `/var/www/exos.tech`
- redirects `www.exos.tech` to `exos.tech`

`update.sh` skips Caddy installation/configuration and only replaces the files in `/var/www/exos.tech`, then reloads Caddy.

The SSH user must be able to run `sudo`. DNS for `exos.tech` should point at the VM before running the script if you want Caddy to issue TLS automatically.

The deploy script uses this SSH private key:

```sh
~/.ssh/exos
```

The remote SSH target is hardcoded as:

```sh
ubuntu@exos.tech
```
