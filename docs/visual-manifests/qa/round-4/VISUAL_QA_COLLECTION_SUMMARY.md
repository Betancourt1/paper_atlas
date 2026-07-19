# Blind visual QA — revision 6 collection summary

## Collection scores

- Papers: **8**.
- Paragraph records: **134/134**, each with two explicit integer scores in the paper reports.
- Implemented unique visuals: **11**.
- Data-visualization-engineer: holistic aggregate **8/10**; exact paragraph mean **1129/134 = 8.425**; collection minimum **7/10**.
- Visual-implementer: holistic aggregate **8/10**; exact paragraph mean **1313/134 = 9.799**; collection minimum **5/10**.
- Prohibited proposals found: **0**.
- Prohibited rendered implementations found: **0**.
- Proposed HTML/CSS-led treatments: **0/33 (0%)**.
- Selected HTML/CSS-led unique visual IDs: **0/11 (0%)**.

The implementer paragraph mean is dominated by 123 correctly prose-only paragraphs. The holistic implementer aggregate weighs the fidelity of the 11 actual figures and therefore does not round the paragraph mean mechanically.

## Per-paper aggregates

| Paper | Paragraphs | Visuals | DVE aggregate | DVE exact mean | DVE min | Implementer aggregate | Implementer exact mean | Implementer min | Prohibited output |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Attention Is All You Need | 18 | 2 | 8 | 8.389 | 7 | 7 | 9.667 | 5 | 0 |
| Computational Propaganda | 16 | 1 | 9 | 8.500 | 7 | 9 | 9.938 | 9 | 0 |
| Inkling | 19 | 1 | 9 | 8.579 | 7 | 7 | 9.789 | 6 | 0 |
| LLM Evaluators Across Languages | 16 | 1 | 8 | 8.250 | 7 | 8 | 9.875 | 8 | 0 |
| Partition, Prompt, Aggregate | 16 | 1 | 8 | 8.375 | 7 | 6 | 9.688 | 5 | 0 |
| RoboTTT | 16 | 1 | 8 | 8.375 | 7 | 8 | 9.875 | 8 | 0 |
| SearchOS V1 | 17 | 3 | 8 | 8.471 | 7 | 8 | 9.647 | 6 | 0 |
| TRACE | 16 | 1 | 8 | 8.438 | 7 | 9 | 9.938 | 9 | 0 |

## Rendered inspection evidence

The repository's rendered visual test was run against desktop Chromium at 1440×1000 and mobile Chromium using the iPhone 13 profile. All four test cases passed. Across all eight paper routes, the checks established:

- each of the 11 figures appears exactly after its declared YES paragraph and no extra figure appears after a NO paragraph;
- every selected medium is SVG and every rendered SVG contains a non-empty title and description;
- the expected node, edge, text, accent, and boundary styles resolve in the browser;
- every figure exposes visible limitations and evidence links plus screen-reader equivalent text;
- desktop pages do not overflow horizontally;
- mobile figures use a keyboard-focusable horizontal scroller, retain at least 680 px SVG width, stay inside the viewport, and do not create document-level overflow.

The actual mobile CSS fixes SVG width at 680 px below 720 px. This behavior is compatible with the treatment instructions' controlled-scroll option, but it contradicts every implementation record's claim that the SVG scales without a minimum width.

## Actual topology classification for all 11 visuals

| Visual ID | Actual rendered topology | Single chain | Item + value list | Repeated metric cards | Repeated dot tracks |
|---|---|---:|---:|---:|---:|
| `visual_attention_query_key_field` | Query/key bipartite field converging to one shared sum and head output | No | No | No | No |
| `visual_attention_decoder_dependencies` | Masked-prefix/source convergence with output feedback | No | No | No | No |
| `propaganda_visual_halflife_tree` | Conditional survivor/rejection tree with discrepancy note | No | No | No | No |
| `visual_inkling_sparse_routing_field` | Router fan-out, shared branch, and recombination | No | No | No | No |
| `language_visual_ranking_acceptance_graph` | Two inputs branch to comparator and threshold outcomes | No | No | No | No |
| `visual_ppa_weighted_reconstruction_graph` | Three branches converge to a sum and root comparator | No | No | No | No |
| `visual_robottt_fast_weight_architecture` | Gradient update plus parallel activation paths and recurrent edge | No | No | No | No |
| `visual_searchos_socm_state_graph` | Four-store relation graph around schema cells | No | No | No | No |
| `visual_searchos_evidence_gate` | Two-condition conjunction, commit fork, and rejection paths | No | No | No | No |
| `visual_searchos_sensor_policy_dispatch` | Sensor convergence, five-way policy fan, and readiness branch | No | No | No | No |
| `trace_visual_credit_dependency_dag` | Adjacent state edges, skip arcs, and global outcome broadcast | No | No | No | No |

## Cross-collection findings

1. **Weighted reconstruction is topologically wrong.** `visual_ppa_weighted_reconstruction_graph` draws each prior feeding its estimate and only the estimate feeding multiplication. The visual must show prior and estimate as two independent multiplicands.
2. **Attention collapses row-wise outputs.** `visual_attention_query_key_field` depicts three queries but one shared weighted sum, omits visible value nodes, and overdraws the same sum node four times. It does not faithfully show one weighted value mixture per query.
3. **Sparse routing truncation is not disclosed in the marks.** The Inkling figure labels 256 routed experts but renders 30 circles, six active, which can be read as 6/30.
4. **SearchOS dispatch is conflated with correction.** The ready-gap branch curves into the `correction` outcome rather than a distinct dispatch/execution state.
5. **RoboTTT recurrence is ambiguous.** The fast-weight continuation edge does not terminate at an explicit next-timestep state.
6. **NO decisions are usually correct but often formulaic.** Quantitative evidence paragraphs in several papers support meaningful shared scales or joint relations; their rationales frequently dismiss visuals without assessing those structures. This lowers the engineer score without making prose-only implementation itself wrong.
7. **Accessibility and responsive containment are consistently strong.** Every rendered figure has semantic SVG metadata, equivalent text, evidence/limitation context, keyboard-focusable mobile scrolling, and no page overflow.

## Report paths

- `docs/visual-manifests/qa/round-4/VISUAL_QA_ATTENTION_IS_ALL_YOU_NEED.md`
- `docs/visual-manifests/qa/round-4/VISUAL_QA_COMPUTATIONAL_PROPAGANDA.md`
- `docs/visual-manifests/qa/round-4/VISUAL_QA_INKLING.md`
- `docs/visual-manifests/qa/round-4/VISUAL_QA_LLM_EVALUATORS_LANGUAGES.md`
- `docs/visual-manifests/qa/round-4/VISUAL_QA_PARTITION_PROMPT_AGGREGATE.md`
- `docs/visual-manifests/qa/round-4/VISUAL_QA_ROBOTT.md`
- `docs/visual-manifests/qa/round-4/VISUAL_QA_SEARCHOS_V1.md`
- `docs/visual-manifests/qa/round-4/VISUAL_QA_TRACE.md`
- `docs/visual-manifests/qa/round-4/VISUAL_QA_COLLECTION_SUMMARY.md`
