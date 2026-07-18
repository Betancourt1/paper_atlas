# ADR-001: Separate the public web, API, and durable worker planes

- Status: Accepted
- Date: 2026-07-18

## Context

Paper Atlas must preserve immutable scientific sources, normalized evidence,
versioned editorial content, and stable public presentation. Model output must
not directly control persistence, publishing, or executable frontend code.

## Decision

Use a pnpm/Turborepo monorepo with three application planes:

- Next.js App Router for public and editorial web surfaces;
- FastAPI for ingestion and editorial contracts;
- Python workers coordinated by Temporal for durable, retryable work.

PostgreSQL with pgvector is the eventual source of truth. S3-compatible object
storage holds source and derived assets. Docling will be the primary visual
parser and GROBID the complementary academic extractor. Typed schemas cross
language boundaries; generated content is rendered from approved AST nodes.

M0 includes only an in-memory fixture. The database, object store, Temporal, and
GROBID are present as local infrastructure contracts but are not called by
application code.

## Consequences

- Schema, API client, renderer, and fixtures can change atomically.
- Long-running behavior cannot be hidden in API processes.
- The public web can remain fast and deterministic while editorial work is slow.
- Local development has more services, so health checks and stable Make targets
  are required.
- Cross-language generation becomes a required drift gate.

## Alternatives rejected

- A single Next.js application: blurs durable work and public rendering.
- Free-form MDX generated per paper: weak provenance and unsafe execution.
- Celery or Redis as the canonical queue: duplicates Temporal's workflow role.
- Elasticsearch in M0: adds infrastructure before PostgreSQL search is measured.

## Rollback

M0 has no persisted application data or migrations. Revert the bootstrap commits
and remove the named local Compose volumes with `make reset-local CONFIRM=1`.
