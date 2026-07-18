# M0 bootstrap specification

## Vertical slice

Bootstrap the Paper Atlas monorepo and prove one contract end to end: a canonical
`PaperSummary` schema generates TypeScript and Python models, validates one
fixture, is returned by FastAPI, and is rendered by a minimal Next.js Server
Component route.

## Observable behavior

- `GET /health` returns a small service health payload.
- `GET /v1/papers/paper_attention_is_all_you_need` returns the validated fixture.
- `/papers/paper_attention_is_all_you_need` renders the same fixture with title,
  summary, authors, source metadata, publication state, and provenance.
- An unknown paper ID returns an RFC 9457-style `404` problem response.
- Desktop and mobile screenshots show the route without clipped content or
  hidden provenance.

## Exact file plan

```text
.
├── AGENTS.md
├── Makefile
├── README.md
├── compose.yaml
├── design.md
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── pyproject.toml
├── turbo.json
├── uv.lock
├── .github/workflows/ci.yml
├── apps
│   ├── api
│   │   ├── AGENTS.md
│   │   ├── package.json
│   │   ├── src/paper_atlas_api/{__init__,fixtures,main}.py
│   │   ├── src/paper_atlas_api/generated/paper_summary.py
│   │   └── tests/{test_contract,test_health,test_papers}.py
│   ├── web
│   │   ├── AGENTS.md
│   │   ├── app/{globals.css,layout,page}.tsx
│   │   ├── app/papers/[id]/page.tsx
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tests/paper-page.spec.ts
│   └── worker
│       ├── AGENTS.md
│       ├── package.json
│       └── src/paper_atlas_worker/{__init__,main}.py
├── artifacts/qa/concepts/{paper-desktop,paper-mobile}.png
├── docs/adr/ADR-001-platform-architecture.md
├── packages
│   ├── api-client/{package.json,src/index.ts,tsconfig.json}
│   ├── artifact-registry/{AGENTS.md,package.json,src/index.ts,tsconfig.json}
│   ├── content-schema
│   │   ├── package.json
│   │   ├── schema/paper-summary.schema.json
│   │   ├── src/{index,validate}.ts
│   │   ├── src/generated/paper-summary.ts
│   │   └── tests/paper-summary.test.ts
│   ├── design-tokens/{package.json,src/index.ts,tsconfig.json}
│   ├── test-fixtures
│   │   ├── package.json
│   │   ├── papers/paper-summary.json
│   │   └── src/index.ts
│   └── ui/{package.json,src/index.ts,tsconfig.json}
└── scripts/{check-generated.sh,generate-schema.sh}
```

Generated files are committed so clean consumers and CI can type-check without
running generation first. `scripts/check-generated.sh` regenerates them and
fails if the committed representations drift from the canonical schema.

## Dependencies and justification

### JavaScript and TypeScript

- `next`, `react`, `react-dom`: required web stack from the architecture.
- `turbo`, `typescript`: monorepo task graph and shared type checking.
- `ajv`, `ajv-formats`: runtime validation of fixtures against the canonical
  schema without introducing a second handwritten TypeScript contract.
- `json-schema-to-typescript`: deterministic TypeScript model generation.
- `vitest`: focused package unit and contract tests.
- `eslint`, `eslint-config-next`: framework-aware static checks.
- `@playwright/test`: desktop/mobile route verification and screenshot capture.

### Python

- `fastapi`, `uvicorn`: public API and local development server.
- `pydantic`: strict generated model validation.
- `datamodel-code-generator`: Pydantic v2 model generation from JSON Schema.
- `pytest`, `httpx`: API and cross-language contract tests.
- `ruff`, `mypy`: stable lint and type-check gates.

Temporal's Python SDK, SQLAlchemy, Alembic, the OpenAI Agents SDK, parser clients,
and storage SDKs are intentionally deferred because M0 has no workflow,
persistence, generation, or parsing behavior.

## Commands

- `make bootstrap`: install locked pnpm and uv dependencies, then generate schema
  bindings.
- `make dev`: start local infrastructure, FastAPI, and Next.js.
- `make check`: schema drift, lint, typecheck, unit, contract, and production
  build checks.
- `make test`: JavaScript/TypeScript and Python tests.
- `make reset-local`: stop local infrastructure and remove only named Compose
  volumes after an explicit confirmation variable.

## Acceptance tests

1. A clean install completes from the committed lockfiles.
2. Schema generation is reproducible and leaves no diff.
3. The valid fixture passes AJV and Pydantic validation.
4. An unknown field is rejected in both languages.
5. FastAPI `/health` returns `200` and a stable payload.
6. FastAPI returns the fixture for the known ID and `404` for an unknown ID.
7. The API payload equals the canonical fixture JSON.
8. The Next.js production build completes with the paper route.
9. Playwright verifies title, summary, source, and schema provenance at desktop
   and mobile sizes and writes both screenshots.
10. `make check` is the single local and CI gate.

## Risks and controls

- **Cross-language generator drift:** pin generators, commit outputs, and compare
  regenerated files in `make check`.
- **Fixture duplication:** keep one JSON file in `packages/test-fixtures`; Python
  and TypeScript load that file directly.
- **Frontend/backend coupling:** the M0 page reads the fixture at build time so a
  production build does not depend on a running API; the contract test proves
  the API returns the same bytes semantically.
- **Untrusted content:** M0 has no ingestion surface, HTML injection, MDX, tool
  use, or code execution.
- **Local infrastructure availability:** Compose configuration is validated in
  CI where possible; local execution requires a Docker daemon and Compose
  plugin, which are environment prerequisites rather than application code.
- **Visual overreach:** implement only the fixture route using the supplied
  semantic tokens and M0 concept references.

## Explicit non-goals

- M1 ingestion, uploads, SSRF handling, deduplication, parsing, or Temporal
  workflows.
- Database models, migrations, persistence, object storage clients, or auth.
- AI generation, agents, prompts, claims, explainers, or publication.
- Arbitrary MDX/JSX, paper repository execution, or custom artifacts.
- Search, taxonomy, editor/review UI, deployment configuration, or production
  secrets.
- Dark mode, full navigation destinations, or a generalized component library.

## Rollback

M0 adds only new repository files and local named volumes. Reverting the M0
commits removes application code. `make reset-local CONFIRM=1` removes only the
Compose project containers and its named volumes.
