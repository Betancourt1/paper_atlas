# Blind VISUAL_QA collection summary — revision 6 — round 6

## Scope

This collection summary aggregates the eight independent round-6 paper reports. The review covered all 134 fixture paragraphs twice, all 33 proposed treatments, and all 11 selected rendered visuals. It used only the permitted current manifests, fixtures, implementation/schema/checker/tests, rendered routes, and directly linked evidence locators. It did not consult prior QA rounds, coordinator policies, publication contracts/templates, the agent harness, or a hidden acceptance threshold.

## Render evidence

`pnpm --filter @paper-atlas/web test:visual` completed with 4/4 tests passing:

- desktop Chromium at 1440×1000;
- mobile Chromium at 390×844;
- exact figure counts and approved paragraph placements;
- SVG title/description semantics, non-empty geometry, evidence and limitation UI;
- figure-specific geometry assertions;
- contained 680 px mobile canvases, keyboard-focusable scrollers, and no document-level horizontal overflow.

All 11 selected figures were then directly inspected in figure-only desktop and mobile captures. The mobile captures show the initial left-edge segment of each horizontally scrollable SVG; this is expected exploration behavior, not page clipping.

## Collection aggregates

| Measure | Result |
| --- | ---: |
| Papers | 8 |
| Paragraphs scored twice | 134 |
| DVE minimum | 9/10 |
| DVE mean | 9.08/10 |
| DVE holistic aggregate | 9/10 |
| Implementer minimum | 8/10 |
| Implementer mean | 9.91/10 |
| Implementer holistic aggregate | 9/10 |
| Proposed prohibited treatments | 0/33 |
| Selected prohibited outputs | 0/11 |
| Prose-only decisions faithfully rendered | 123/123 |

The holistic aggregates are independent judgments, not rounded means and not a pass/fail recommendation.

## Per-paper aggregates

| Paper | Paragraphs | Visuals | DVE min | DVE mean | DVE holistic | Implementer min | Implementer mean | Implementer holistic | Proposed prohibited | Selected prohibited |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Attention Is All You Need | 18 | 2 | 9 | 9.11 | 9 | 8 | 9.83 | 9 | 0/6 | 0/2 |
| Computational Propaganda | 16 | 1 | 9 | 9.06 | 9 | 9 | 9.94 | 9 | 0/3 | 0/1 |
| Inkling | 19 | 1 | 9 | 9.05 | 9 | 9 | 9.95 | 9 | 0/3 | 0/1 |
| LLM Evaluators across Languages | 16 | 1 | 9 | 9.06 | 9 | 9 | 9.94 | 9 | 0/3 | 0/1 |
| Partition, Prompt, Aggregate | 16 | 1 | 9 | 9.06 | 9 | 9 | 9.94 | 9 | 0/3 | 0/1 |
| RoboTTT | 16 | 1 | 9 | 9.06 | 9 | 9 | 9.94 | 9 | 0/3 | 0/1 |
| SearchOS-V1 | 17 | 3 | 9 | 9.18 | 9 | 9 | 9.82 | 9 | 0/9 | 0/3 |
| TRACE | 16 | 1 | 9 | 9.06 | 9 | 9 | 9.94 | 9 | 0/3 | 0/1 |

## Medium ratios

| Scope | HTML/CSS-led | Total | Ratio |
| --- | ---: | ---: | ---: |
| Proposed treatments, collection | 0 | 33 | 0.00% |
| Selected unique visual IDs, collection | 0 | 11 | 0.00% |

Per paper, proposed HTML/CSS-led ratios are 0/6 for Attention, 0/9 for SearchOS-V1, and 0/3 for each other paper. Selected HTML/CSS-led ratios are 0/2 for Attention, 0/3 for SearchOS-V1, and 0/1 for each other paper. Declared proposal media are SVG, generated asset, or JavaScript; all selected primary media are SVG. Equivalent prose fallbacks are counted under their SVG primary medium rather than as HTML/CSS-led primary treatments.

## Prohibited topology audit

No proposal or selected implementation matches any prohibited form:

- single interchangeable chain: 0 proposed, 0 selected;
- item-plus-metric list: 0 proposed, 0 selected;
- repeated same-metric cards: 0 proposed, 0 selected;
- repeated one-axis dot tracks/panels: 0 proposed, 0 selected.

Some figures contain local chains, rows, or repeated operators, but their actual explanatory topology depends on branching, convergence, feedback, normalization, shared constraints, skip dependencies, changing denominators, or atomic state transitions. Those elements are not interchangeable.

## Findings

1. `visual_attention_query_key_field` is complete and evidence-faithful, but its eight recombination strokes visibly cross several head-output nodes. This makes individual head-to-Concat paths harder to trace and produces the collection minimum implementer score of 8/10.
2. Mobile figures require intentional horizontal exploration. The initial view does not expose the full topology, but the canvas remains inside a focusable scroller, has no document-level overflow, and is paired with complete equivalent prose.
3. The other ten selected visuals match their chosen treatments, source-backed claims, limitations, placements, and actual non-prohibited topology at both tested viewport sizes.
4. All 123 NO decisions are faithfully implemented as prose-only paragraphs.
5. No pass/fail recommendation is made against any hidden acceptance threshold.

## Reports

- `docs/visual-manifests/qa/round-6/VISUAL_QA_ATTENTION_IS_ALL_YOU_NEED.md`
- `docs/visual-manifests/qa/round-6/VISUAL_QA_COMPUTATIONAL_PROPAGANDA.md`
- `docs/visual-manifests/qa/round-6/VISUAL_QA_INKLING.md`
- `docs/visual-manifests/qa/round-6/VISUAL_QA_LLM_EVALUATORS_LANGUAGES.md`
- `docs/visual-manifests/qa/round-6/VISUAL_QA_PARTITION_PROMPT_AGGREGATE.md`
- `docs/visual-manifests/qa/round-6/VISUAL_QA_ROBOTT.md`
- `docs/visual-manifests/qa/round-6/VISUAL_QA_SEARCHOS_V1.md`
- `docs/visual-manifests/qa/round-6/VISUAL_QA_TRACE.md`
