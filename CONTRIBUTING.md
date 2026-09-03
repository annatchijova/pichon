# Contributing to PICHÓN

Thanks for helping the *Plataforma de Identificación y Contrainteligencia
Humano-Ornitológica Nacional*. The project is satire with a serious build:
static, dependency-light, and fully localized. Contributions of any size
are welcome.

## Ground rules

- Keep the project static. No server, no accounts, no runtime secrets.
- Keep the joke in bounds: it mocks how conspiracy theories work, not the
  people who believe them.
- The core languages are Spanish (default) and English for code and
  developer docs. UI copy also ships in Russian and Paloma.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000  (gallery)
# the game: http://localhost:3000/juego.html
```

Quality gates before opening a pull request:

```bash
npm run lint         # typecheck (tsc --noEmit)
npm run build        # production build to dist/
npm run audit        # dependency vulnerabilities
```

The `dist/` output is generated and never committed.

## Project layout

```
├── index.html               # gallery entry (Vite)
├── src/
│   ├── App.tsx              # gallery + meme editor
│   ├── i18n/                # localization dictionaries + Paloma generator
│   └── components/          # React components (e.g. LangSwitcher)
├── public/
│   ├── juego.html           # standalone game
│   ├── juego.js             # game logic (local, no inline scripts)
│   ├── *.pdf                # hosted decks
│   └── robots.txt, .well-known/
├── vercel.json              # build config + security headers
└── docs/adr/                # architecture decision records
```

## Making changes

### Localization

UI copy is dictionary-driven:

- Spanish strings are the base source of truth in `src/i18n/`.
- English and Russian are full overrides (`art.en.ts`, `art.ru.ts`, …).
- Paloma is generated deterministically — never translate into Paloma by
  hand; extend the generator in `src/i18n/paloma.ts` instead.
- The standalone game keeps its own dictionaries inside `public/juego.js`.
  Code identifiers, routes, proper nouns and numbers stay untranslated.

Add or update **all** languages in the same change, and update the tests
or manual checks for the affected surface.

### Commit messages

This repository follows **Conventional Commits v1.0.1**:

```
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

Types in use: `feat`, `fix`, `docs`, `refactor`, `perf`, `build`,
`chore`, `style`, `test`. Examples:

- `feat(i18n): add Dutch captions to the gallery`
- `fix(game): restore verdict logic for zero correct answers`
- `docs(readme): document the static deployment model`

### Changelog

User-visible changes are recorded in `CHANGELOG.md` following **Keep a
Changelog 1.1.0**, and releases follow **Semantic Versioning 2.0.0**.
Add a bullet under the relevant `[Unreleased]` subsection with each PR
that changes behavior.

### Security

Found a vulnerability? Do not open an issue. Follow the reporting
process in [`SECURITY.md`](SECURITY.md).

## Pull requests

1. Branch from `main` and give the branch a descriptive name.
2. Keep PRs focused: one logical change per pull request.
3. Run the quality gates above and confirm the gallery and the game in
   every language you changed.
4. Open the pull request against `main` and describe what changed and
   why, plus how you verified it.

Questions and planning docs live in the `deck/` folder and in
`docs/adr/`.
