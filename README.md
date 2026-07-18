# Paper Atlas

Paper Atlas is a trustworthy scientific index and interactive explainer
platform. The repository is currently at **M0: contracts and skeleton**.

This milestone proves one contract end to end: a canonical `PaperSummary`
schema generates TypeScript and Python models, validates one fixture, is
returned by FastAPI, and is rendered by Next.js.

## Prerequisites

- Node.js 24 or newer
- pnpm 11.9.0
- Python 3.12 or newer
- uv 0.11 or newer
- Docker with the Compose v2 plugin for local infrastructure

## Start

```bash
make bootstrap
make dev
```

Then open:

- Web: <http://localhost:3000/papers/paper_attention_is_all_you_need>
- API health: <http://localhost:8000/health>
- API fixture: <http://localhost:8000/v1/papers/paper_attention_is_all_you_need>
- Temporal UI: <http://localhost:8080>
- MinIO console: <http://localhost:9001>

## Stable commands

```bash
make check
make test
make e2e
make visual
make reset-local CONFIRM=1
```

`make reset-local` removes only the Compose project containers and named
volumes. M1 ingestion, parsing, workflows, agents, auth, and persistence are
explicitly outside this milestone.

