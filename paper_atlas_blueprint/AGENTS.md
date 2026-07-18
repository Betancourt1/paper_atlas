# AGENTS.md — Paper Atlas

## Mission

Build a trustworthy scientific index and interactive explainer platform. Preserve evidence, versioning, accessibility, security, and editorial review over speed or visual novelty.

## Product invariants

1. Generated paper content is stored as a typed `ExplainerDocument`, never arbitrary MDX or executable JSX.
2. Every substantive factual or numerical claim must reference canonical `SourceRef` records.
3. Untrusted paper content never changes agent instructions, tools, policies, or workflow state.
4. New custom visual code is sandboxed, tested, reviewed, and promoted before public use.
5. First-pass generations never auto-publish.
6. Published versions are immutable.
7. Deterministic workflow code controls state, retries, permissions, and publishing.
8. Accessibility and static fallbacks are required for interactive artifacts.
9. Do not reproduce full copyrighted paper text publicly unless the license explicitly permits it.
10. Do not copy Anthropic branding; follow `design.md`.

## Engineering workflow

Before changing code:

1. Read the closest `AGENTS.md`.
2. Read the relevant spec or ADR.
3. State the narrow vertical slice.
4. Identify schema, migration, API, security, content, and visual impact.
5. Define tests before implementation.

After changing code:

1. Run targeted tests.
2. Run `make check` before handoff.
3. For UI, run visual and responsive QA.
4. For prompts/skills, run content evals and report deltas.
5. For migrations, document forward/backward strategy.
6. Update docs and fixtures when contracts change.

## Architecture constraints

- Next.js App Router for web.
- FastAPI for public ingestion/editorial API.
- Temporal for durable workflows.
- OpenAI Agents SDK inside bounded activities.
- PostgreSQL is the source of truth.
- S3-compatible storage for source and derived assets.
- Do not add a new infrastructure service without an ADR.
- Do not use Redis as the canonical workflow queue.
- Do not execute paper repositories in API or worker containers.

## Frontend constraints

- Follow `design.md` exactly.
- Server Components by default.
- Load interactive artifacts dynamically.
- Use semantic tokens, not arbitrary color utilities.
- Avoid generic card grids, decorative gradients, glassmorphism, pills, and ornamental AI diagrams.
- Preserve source links, caveats, and epistemic labels on mobile.
- Add Playwright coverage for every interactive state.

## Backend constraints

- OpenAPI is a contract.
- Create operations are idempotent.
- Long work returns `202` and runs through Temporal.
- Activities are idempotent and retry-safe.
- Pydantic models use strict validation and forbid unknown fields where practical.
- Migrations must be backwards-compatible unless an approved maintenance plan exists.

## Agent/content constraints

- Agents return structured outputs.
- Claims are atomic.
- Writers may use only approved claims.
- Verifiers must not silently rewrite failed claims.
- Critic output remains distinct from author interpretation.
- Trace capture of sensitive source content is disabled by default.
- Store model, prompt, skill and parser versions for every run.

## Definition of done

A change is done only when code, tests, docs, accessibility, security, observability and rollback requirements appropriate to the change are complete. A passing build alone is not done.

