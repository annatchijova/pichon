# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Proposed next version: **2.0.0** (see `docs/adr/0001`).

### Added

- Full localization of the gallery and the standalone game into Spanish,
  English, Russian and Paloma, with a language switcher on both surfaces.
- Per-language artwork captions, canvas badges and page metadata.
- Static security posture: strict Content-Security-Policy and hardening
  headers via `vercel.json`, `robots.txt`, and `.well-known/security.txt`.
- `SECURITY.md`, `CONTRIBUTING.md`, this changelog, and ADR 0001 recording
  the adopted commit, changelog and versioning conventions.

### Changed

- Renamed the npm package from the AI Studio template name to `pichon`.
- Upgraded the build and runtime stack (Vite, React, Tailwind, TypeScript,
  lucide-react, motion) and removed template cruft.
- Reworked the game into a four-language quiz whose content and language
  switch repaint mid-play; the inline script moved to `public/juego.js`.
- READMEs (es/en/ru/paloma) updated to the static-only build and deploy
  model.

### Removed

- Server-only dependencies (`express`, `dotenv`, `@google/genai`,
  `@types/express`, `esbuild`, `tsx`, `autoprefixer`).
- `.env.example` and all environment-variable expectations: the project
  is 100 % static.
- AI Studio server capability flags from `metadata.json`.

### Security

- Deployed site now serves a strict Content-Security-Policy and hardening
  headers (`vercel.json`).
- No inline scripts: the game logic is first-party `public/juego.js`.
- Dependency audit is clean (`npm run audit`).
