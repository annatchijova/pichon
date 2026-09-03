# Security Policy

PICHÓN is a fully static site — no backend, no accounts and no runtime
secrets. The attack surface is deliberately small: production serves
files from `dist/` behind the security headers and strict
Content-Security-Policy defined in `vercel.json`.

## Supported versions

The project has not shipped a tagged release stream yet. Security fixes
land on `main` and are released with the next version. Only that version
is supported.

| Version      | Supported |
|--------------|-----------|
| `main` (dev) | ✅         |
| Older        | ❌         |

## Reporting a vulnerability

Do **not** open a public issue for a vulnerability. Report it privately
instead:

- **Preferred:** a private security advisory at
  https://github.com/annatchijova/pichon/security/advisories/new
- **Alternative:** the contact listed in `public/.well-known/security.txt`

You should receive an acknowledgement within 72 hours. Because the site
is static, most reports concern third-party build dependencies or the
deployment configuration; please include the affected package and
version where relevant.

## Security measures

- Strict Content-Security-Policy and hardening headers via `vercel.json`.
- No inline scripts or external origins in `public/juego.html`; the game
  logic lives in a local `public/juego.js`.
- `robots.txt` and `.well-known/security.txt` published for crawlers and
  researchers.
- Dependency health is checked with `npm audit` before each release
  (`npm run audit`).
