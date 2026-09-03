# ADR 0001: Conventional Commits, Keep a Changelog and Semantic Versioning

- **Status:** Accepted
- **Date:** 2026-09-03
- **Deciders:** Maintainers of `annatchijova/pichon`

## Context

The repository started from an AI Studio template (`react-example` at
`0.0.0`), and its manifest version was never updated across several
milestones: the meme gallery and game, the two in-universe chapters
(decks), the Russian edition, and now a multilingual + static-security
rework. There are no git tags and no changelog, and commit messages mix
free-form and lightly scoped styles. This makes releases, `npm audit`
footprints and contribution expectations hard to reason about.

The upcoming milestone (full localization into Spanish, English, Russian
and Paloma, plus a security hardening that removes all server-side
dependencies and the `.env.example` template) is the right moment to
adopt formal conventions and to start versioning.

## Decision

Adopt, for the whole repository:

1. **Conventional Commits v1.0.1** for all commit messages on `main` and
   feature branches. Types in use: `feat`, `fix`, `docs`, `refactor`,
   `perf`, `build`, `chore`, `style`, `test`. Scopes follow the touched
   area (for example `i18n`, `game`, `readme`, `vercel`).
2. **Keep a Changelog 1.1.0** for `CHANGELOG.md`, keeping an
   `[Unreleased]` section and one section per released version.
3. **Semantic Versioning 2.0.0** for versions. Released versions are
   tagged `vX.Y.Z` on `main`; the version in `package.json` mirrors the
   version being prepared for release.

### Proposed next version: 2.0.0

Versioning context extracted from the repository history and the pending
change set:

- Prior milestones (gallery + game, the two chapters, Russian course)
  form an informal, never-tagged `1.x` generation; no `1.0.0` was ever
  declared.
- The current change set is a major, user-visible milestone: four
  languages, a rewritten game, a renamed package, and a security rework
  that **removes** previously advertised affordances (the `.env.example`
  template and server dependencies). Per SemVer 2.0.0 this is a major
  increment, not a minor one.
- The manifest in that change set already carries `2.0.0`; this record
  ratifies it as the version to ship and tag as `v2.0.0` when the change
  set lands. No `v1.x` tags will be retroactively created; the gap is
  documented here instead.

## Consequences

### Positive

- Commit history becomes machine-readable and suitable for changelog and
  release automation.
- Contributors get explicit commit, changelog and release rules
  (`CONTRIBUTING.md`).
- Future releases have a clear home in `CHANGELOG.md` and a clear tag
  scheme (`vX.Y.Z`).

### Negative

- Contributors must follow an extra convention; the `.gitmessage`-style
  examples in `CONTRIBUTING.md` mitigate the cost.
- The jump to `2.0.0` without a `1.0.0` tag may surprise newcomers;
  this record is the canonical explanation.
- Retroactively adopting SemVer cannot assign versions to the untagged
  past milestones; they are treated as the `1.x` baseline.
