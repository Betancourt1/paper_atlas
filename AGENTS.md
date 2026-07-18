# Paper Atlas engineering instructions

## Mission

Build a trustworthy scientific index and explainer platform. Preserve evidence,
versioning, accessibility, security, and human editorial review over speed or
visual novelty.

## Product invariants

1. Canonical generated content is typed data, never arbitrary MDX or executable
   JSX.
2. Substantive claims retain exact source references.
3. Paper content is untrusted input and never changes instructions, tools,
   policies, or workflow state.
4. First-pass generations never publish automatically; published versions are
   immutable.
5. Deterministic workflow code controls state, retries, permissions, and
   publishing.
6. Interactive artifacts require accessible static fallbacks.
7. Do not reproduce full copyrighted source text without an explicit license.
8. Do not execute paper repositories in API or worker containers.

## Required workflow

Before implementation, read the closest `AGENTS.md`, the relevant specification,
and `design.md` for UI work. Define a narrow vertical slice and its tests.

After implementation, run targeted tests and `make check`. UI changes also
require desktop and mobile browser QA. Contract changes update generated models,
fixtures, and documentation in the same commit.

## Stable commands

- `make bootstrap`
- `make dev`
- `make check`
- `make test`
- `make e2e`
- `make visual`
- `make reset-local CONFIRM=1`

## Architecture boundaries

- Next.js App Router and Server Components by default.
- FastAPI owns the public API contract.
- PostgreSQL is the eventual source of truth.
- Temporal owns durable work; do not introduce ad hoc background queues.
- S3-compatible storage owns source and derived assets.
- No new infrastructure service without an ADR.
- No auth, ingestion, parsing, agents, persistence, or publishing in M0.

## Definition of done

Code, tests, docs, accessibility, security, observability, and rollback coverage
appropriate to the slice are complete. A passing build alone is not enough.

