# Paper Atlas

Paper Atlas is a trustworthy scientific index and interactive explainer
platform. The repository contains the M0 platform contracts and the current
reviewed-explainer slice for eight papers.

Canonical `PaperSummary` and `ExplainerDocument` schemas generate TypeScript and
Python models, validate the editorial fixtures, are returned by FastAPI, and
are rendered by Next.js. Reviewed explainers still await a human publication
decision and are not labeled `Published`.

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

- Web: <http://localhost:3000/papers>
- API health: <http://localhost:8000/health>
- API fixture: <http://localhost:8000/v1/papers/paper_attention_is_all_you_need>
- API explainer: <http://localhost:8000/v1/papers/paper_attention_is_all_you_need/explainer>
- Temporal UI: <http://localhost:8080>
- MinIO console: <http://localhost:9001>

## Stable commands

```bash
make check
make test
make e2e
make visual
make harness-check
make reset-local CONFIRM=1
```

`make reset-local` removes only the Compose project containers and named
volumes. M1 ingestion, parsing, workflows, agents, auth, and persistence are
explicitly outside this milestone.

## Agent harness

The repository's Codex harness separates site engineering from scientific
editorial production. Its routing, roles, evidence handoffs, and publication
boundary are documented in [`docs/agent-harness.md`](docs/agent-harness.md).

The repository-scoped `paper-explainer` skill and custom agents are contributor
workflows. They do not imply that the future Temporal-based production agent
pipeline is already implemented.

### Visual explanation standard

Every difficult concept receives an explicit decision: reuse a permitted source
figure, configure an artifact, create a custom static illustration, create a
restrained explanatory animation, or use prose because no visual would help.
There is no one-visual-per-paper quota.

An illustration is necessary when removing it would force readers to mentally
reconstruct an important relationship and materially increase cognitive load
or misunderstanding. The form must match the relationship: process, feedback,
architecture, hierarchy, quantitative comparison, uncertainty, evidence
strength, spatial structure, or changing representation. Generic text boxes
that merely repeat the exposition do not count.

Every selected visual must name its pedagogical question and evidence, disclose
its limitations, sit beside the relevant explanation, and include equivalent
text plus appropriate mobile, keyboard, screen-reader, and reduced-motion
behavior. Animation is reserved for concepts whose time, order, accumulation,
feedback, or changing state cannot be explained as clearly in a static view.

Every new or materially revised explainer uses a paragraph-level visual
manifest. A `data_visualization_engineer` records a YES or NO decision for every
paragraph and supplies three distinct treatments with TikZ, Mermaid, and Python
code for each. A separate `visual_implementer` selects and records the delivered
treatment; SVG, CSS, and JavaScript are recommended web-native illustration
media. A blind `VISUAL_QA` then scores every paragraph and both producing agents
without being given the coordinator's retry policy.
