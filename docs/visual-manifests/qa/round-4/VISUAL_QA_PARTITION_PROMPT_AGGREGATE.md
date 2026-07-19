# Blind visual QA — Partition, Prompt, Aggregate (revision 6)

## Scope and aggregate scores

- Paragraphs audited: 16/16; implemented visuals: 1.
- Data-visualization-engineer: aggregate **8/10**; paragraph mean **134/16 = 8.375**; minimum **7/10**.
- Visual-implementer: aggregate **6/10**; paragraph mean **155/16 = 9.688**; minimum **5/10**.
- Proposed HTML/CSS-led treatments: **0/3 (0%)**. Selected HTML/CSS-led unique visual IDs: **0/1 (0%)**.
- Rendered inspection: desktop and mobile Chromium rendered the reconstruction SVG after `ppa_mechanism_p2`; mobile uses the keyboard-focusable horizontal scroller with no page overflow. The figure has semantic title/description, fallback, evidence, and limitation.

## Paragraph-level audit

| Paragraph | DVE | Implementer | Auditable basis |
|---|---:|---:|---|
| `ppa_why_p1` | 9 | 10 | NO avoids prematurely restating the weighted identity; the mechanism figure later supplies it. |
| `ppa_why_p2` | 9 | 10 | Prompt-granularity inconsistency is clear in prose. |
| `ppa_change_p1` | 9 | 10 | Alignment versus self-consistency is a bounded distinction, not a needed comparison card. |
| `ppa_change_p2` | 8 | 10 | Score types and macro fallacy are introductory; no inventory visual added. |
| `ppa_mechanism_p1` | 7 | 10 | A complete binary partition is genuine hierarchy/spatial topology, so the NO decision deserved more analysis; absence remains preferable to a simplistic chain. |
| `ppa_mechanism_p2` | 9 | 5 | YES correctly warrants parallel weighted reconstruction, normalization, and invariance. The SVG instead draws `prior → estimate → ×` in each row; each multiplier receives only the estimate, so the prior is depicted as producing the estimate rather than as the second multiplicand. |
| `ppa_mechanism_p3` | 8 | 10 | Split/order checks are understandable in prose and would otherwise become an inventory. |
| `ppa_example_p1` | 8 | 10 | The tree example is spatially meaningful, but a second figure would be redundant; no chain rendered. |
| `ppa_example_p2` | 8 | 10 | The selected reconstruction figure already serves this operation; no duplicate figure. |
| `ppa_evidence_p1` | 7 | 10 | Gain versus partition depth is a shared-scale changing relationship; the generic NO rationale does not engage that opportunity. |
| `ppa_evidence_p2` | 7 | 10 | Cross-model/country consistency values support careful comparative structure, but a stock repeated panel was correctly avoided. |
| `ppa_evidence_p3` | 9 | 10 | The less-systematic micro-to-macro effect lacks sufficient detail for a new figure. |
| `ppa_limitations_p1` | 9 | 10 | Boundary conditions are clear prose. |
| `ppa_limitations_p2` | 9 | 10 | Necessary-not-sufficient qualification should remain textual. |
| `ppa_review_p1` | 9 | 10 | Contribution summary is already served by the reconstruction figure. |
| `ppa_review_p2` | 9 | 10 | Bounded macro-fallacy interpretation is prose-level. |

## Implemented-visual topology classification

| Visual | Desktop/mobile result and evidence fidelity | Single chain | Item + value list | Repeated metric cards | Repeated dot tracks |
|---|---|---:|---:|---:|---:|
| `visual_ppa_weighted_reconstruction_graph` | Three branches converge on a sum and compare with a direct root, so the whole output is not a prohibited chain. However, each branch incorrectly serializes prior and estimate instead of feeding both into multiplication. | No | No | No | No |

## Findings

1. Connect every prior and estimate independently to its multiplication operator. The current topology does not encode the weighted-product identity stated in the fixture.
2. The normalization bracket and separate root comparator are good, evidence-bounded additions.
3. The mechanism's partition hierarchy and the depth-gain evidence received generic NO rationales despite real structural warrants.
