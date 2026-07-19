# Blind visual QA — SearchOS V1 (revision 6)

## Scope and aggregate scores

- Paragraphs audited: 17/17; implemented visuals: 3.
- Data-visualization-engineer: aggregate **8/10**; paragraph mean **144/17 = 8.471**; minimum **7/10**.
- Visual-implementer: aggregate **8/10**; paragraph mean **164/17 = 9.647**; minimum **6/10**.
- Proposed HTML/CSS-led treatments: **0/9 (0%)**. Selected HTML/CSS-led unique visual IDs: **0/3 (0%)**.
- Rendered inspection: desktop and mobile Chromium rendered all three SVGs at the three mechanism paragraphs. Mobile scrollers are keyboard focusable, keep SVG width at 680 px, and do not cause page overflow. Every figure exposes title/description, fallback, evidence, and limitation.

## Paragraph-level audit

| Paragraph | DVE | Implementer | Auditable basis |
|---|---:|---:|---|
| `sos_why_p1` | 9 | 10 | Research-state requirements are an inventory until formalized later; no decorative figure. |
| `sos_why_p2` | 9 | 10 | Conversation-history failure modes are concise prose. |
| `sos_change_p1` | 8 | 10 | Table/citation-matrix structure is meaningful, but the later SOCM figure addresses the core state relation. |
| `sos_change_p2` | 8 | 10 | Role separation could become a stock architecture; no redundant figure. |
| `sos_mechanism_p1` | 9 | 9 | YES names linked typed stores and schema-centered dependencies. The rendered graph shows a multi-edge state topology and preserves evidence/span, coverage, task, and failure relations. |
| `sos_mechanism_p2` | 9 | 9 | YES names conjunction, rejection states, and atomic dual update. The SVG faithfully branches two checks into an AND gate, commit, two stores, and distinct rejection paths. |
| `sos_mechanism_p3` | 9 | 6 | YES warrants controller branching plus asynchronous dispatch. The SVG's slot-release branch reaches `ready unresolved gap`, then curves into the `correction` outcome; it does not depict a separate dispatch/execution target and therefore conflates readiness with one policy action. |
| `sos_example_p1` | 8 | 10 | The example would repeat the state graph as a chain; no figure. |
| `sos_example_p2` | 8 | 10 | The evidence gate and sensor figures already serve the operation; no duplicate. |
| `sos_evidence_p1` | 7 | 10 | Multi-metric benchmark gains support a shared-scale comparison, but the NO rationale is generic. |
| `sos_evidence_p2` | 7 | 10 | Paired runtime/utilization/F1 changes are joint quantitative structure; a normalized or coordinated view was not seriously considered. |
| `sos_evidence_p3` | 8 | 10 | Joint skill removal has comparable before/after scores, but causal attribution is limited; prose-only is reasonable. |
| `sos_limitations_p1` | 9 | 10 | Run-selection and budget fairness caveats are prose-level. |
| `sos_limitations_p2` | 9 | 10 | Citation correctness and causal limits must not be inferred visually. |
| `sos_limitations_p3` | 9 | 10 | Future-work inventory has no warranted structure. |
| `sos_review_p1` | 9 | 10 | Synthesis is already supported by three mechanism figures. |
| `sos_review_p2` | 9 | 10 | Attribution limitation is best stated directly. |

## Implemented-visual topology classification

| Visual | Desktop/mobile result and evidence fidelity | Single chain | Item + value list | Repeated metric cards | Repeated dot tracks |
|---|---|---:|---:|---:|---:|
| `visual_searchos_socm_state_graph` | Four stores constrain schema cells through labeled relations; legible, source-bounded, and structurally non-trivial. | No | No | No | No |
| `visual_searchos_evidence_gate` | Two checks converge through conjunction; accepted and rejected states branch distinctly and dual stores update. | No | No | No | No |
| `visual_searchos_sensor_policy_dispatch` | Three sensor inputs fan to five policy outcomes, with a second slot/readiness branch. The latter incorrectly feeds the correction outcome instead of a distinct dispatch target. | No | No | No | No |

## Findings

1. Add an explicit dispatch/execution node for the free-slot/ready-gap conjunction; do not route it into `correction`.
2. The SOCM and evidence-gate figures are faithful, useful, accessible, and non-prohibited.
3. Benchmark and paired scheduling evidence supports quantitative views that the generic NO rationales do not adequately assess.
