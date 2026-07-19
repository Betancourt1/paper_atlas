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

Paper Atlas does not accept four stock visual structures: a single chain of
interchangeable elements, an item-plus-metric list, repeated same-metric cards,
or repeated one-axis dot panels. Changing their orientation, medium, styling,
arrows, animation, or interaction does not make them acceptable. If those are
the only honest options, the paragraph stays prose-only. YES is reserved for a
complex argument, non-trivial relationship, explanatory metaphor, complex
process, quantitative structure, uncertainty, hierarchy, spatial topology, or
changing state that readers would otherwise have to reconstruct.

Every selected visual must name its pedagogical question and evidence, disclose
its limitations, sit beside the relevant explanation, and include equivalent
text plus appropriate mobile, keyboard, screen-reader, and reduced-motion
behavior. Animation is reserved for concepts whose time, order, accumulation,
feedback, or changing state cannot be explained as clearly in a static view.

Every visualization must fit fully within the available article width on
desktop and mobile, without its own horizontal scrollbar and without causing
page-level overflow. Preserve aspect ratio and source fidelity through
responsive SVG viewBoxes, bounded images, or a content-specific stacked or
reflowed layout. A figure that becomes illegible when fitted must be cropped to
a permitted relevant panel, redesigned when it is custom work, or omitted;
asking the reader to scroll sideways is not an acceptable sizing strategy.

Original paper figures are the first choice when they already make the point
the paragraph explains. If reuse is permitted, the original figure or relevant
panel must appear beside that explanation with its exact source locator,
attribution, and license status; a custom redraw is not an acceptable
substitute. A crop, annotation, or custom adaptation is used only when the
original cannot be reused, is inaccessible, or contains unrelated material
that would make the explanation less accurate. Original-figure priority does
not permit one of the four banned stock structures; use a truthful non-banned
adaptation or prose-only instead. Revision 7 manifests make this source-figure
audit explicit and mechanically checked.

Every new or materially revised explainer uses a paragraph-level visual
manifest. A `data_visualization_engineer` records a YES or NO decision for every
paragraph. YES decisions supply three distinct treatments with TikZ, Mermaid,
and Python code; NO decisions do not manufacture dummy visual alternatives. A
separate `visual_implementer` selects and records the delivered treatment; SVG,
CSS, and JavaScript are recommended web-native illustration media. A blind
`VISUAL_QA` then scores every paragraph and both producing agents without being
given the coordinator's retry policy. It assigns 1/10 to the responsible agent
when a proposal or implementation uses a forbidden stock structure.

Across one paper's complete proposal portfolio, no more than 30% of treatments
may name HTML/CSS as their primary medium. The same 30% cap applies to the
paper's selected unique visual IDs. An HTML fallback for an SVG, JavaScript,
source, or generated asset remains required when appropriate but does not count
as HTML/CSS-led. Every new manifest and every revision 5 or later must pass the
cap. Revision 6 and later also require a complexity warrant, the forbidden-form
audit, and no visual treatments for NO decisions; earlier manifests migrate on
their next revision.

An alternative is not valid merely because different prose can be substituted
into the same boxes. Visuals use content-specific relationships, marks, and
data, with complete labels rather than truncated paragraph text. A shared
visual may serve adjacent paragraphs only when the manifest explicitly records
their common explanatory job and visual ID.
