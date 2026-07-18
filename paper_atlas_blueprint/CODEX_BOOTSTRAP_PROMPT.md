# Prompt inicial para Codex

Use este prompt después de crear un repositorio vacío y copiar dentro los documentos de este blueprint.

```text
You are the lead engineer bootstrapping Paper Atlas.

Read, in order:
1. AGENTS.md
2. 01-product-spec.md
3. architecture.md
4. content-model.md
5. design.md
6. agent-harness.md
7. api.md
8. codex-harness.md
9. skills.md
10. roadmap.md

Do not attempt to build the whole product in one pass.

Your first task is M0 only:
- create a pnpm + Turborepo monorepo;
- create apps/web, apps/api, apps/worker;
- create packages/content-schema, packages/api-client, packages/ui,
  packages/artifact-registry, packages/design-tokens and packages/test-fixtures;
- create hierarchical AGENTS.md files;
- create Docker Compose for Postgres/pgvector, Temporal, Temporal UI, MinIO and GROBID;
- implement one cross-language schema: PaperSummary;
- generate TypeScript and Python representations from the canonical schema;
- expose GET /health and GET /v1/papers/{id} using an in-memory fixture only;
- render the same fixture in a minimal Next.js paper route;
- add lint, typecheck, unit-test and contract-test commands;
- add Makefile targets: bootstrap, dev, check, test, reset-local;
- add ADR-001 documenting the chosen architecture;
- add CI.

Constraints:
- no AI generation yet;
- no arbitrary MDX;
- no auth implementation yet, but mark trust boundaries;
- no deployment configuration beyond local Docker and CI;
- do not add services not listed in architecture.md;
- follow design.md, but keep the first UI deliberately minimal;
- use Server Components by default;
- FastAPI owns the public API contract;
- all long-running work will later use Temporal; do not introduce Celery;
- do not execute untrusted code.

Before coding, write specs/M0-bootstrap.md with:
- exact file plan;
- dependency list and justification;
- commands;
- acceptance tests;
- risks;
- explicit non-goals.

Then implement M0, run all checks, capture one desktop and one mobile screenshot,
and produce a handoff report with remaining gaps. Do not proceed to M1.
```

## Prompts de slices posteriores

Cada nuevo prompt debe contener:

- milestone y slice exacto;
- comportamiento observable;
- contratos afectados;
- archivos probables;
- casos de error;
- tests obligatorios;
- no-go areas;
- criterio de terminado.

Ejemplo:

```text
Implement M1 slice 3 only: parse one stored PDF fixture with Docling and persist
PaperDocument blocks. Do not add agents, GROBID reconciliation, search, or publishing.
```

