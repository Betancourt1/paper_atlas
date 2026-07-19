# Blind visual QA — Inkling (revision 6)

## Scope and aggregate scores

- Paragraphs audited: 19/19; implemented visuals: 1.
- Data-visualization-engineer: aggregate **9/10**; paragraph mean **163/19 = 8.579**; minimum **7/10**.
- Visual-implementer: aggregate **7/10**; paragraph mean **186/19 = 9.789**; minimum **6/10**.
- Proposed HTML/CSS-led treatments: **0/3 (0%)**. Selected HTML/CSS-led unique visual IDs: **0/1 (0%)**.
- Rendered inspection: desktop and mobile Chromium rendered the sparse-routing figure after `ink_mechanism_p1`; the mobile figure is horizontally scrollable and keyboard focusable without page overflow. Semantic title/description, fallback, evidence links, and limitation are present.

## Paragraph-level audit

| Paragraph | DVE | Implementer | Auditable basis |
|---|---:|---:|---|
| `ink_why_p1` | 9 | 10 | Intended-use inventory does not justify a visual. |
| `ink_why_p2` | 9 | 10 | Positioning and caveat are concise prose claims. |
| `ink_change_p1` | 8 | 10 | Capacity versus active path is relational, but the later routing field supplies the warranted explanation. |
| `ink_change_p2` | 9 | 10 | Effort-control scope is a bounded claim, not a warranted chart without comparable points. |
| `ink_mechanism_p1` | 9 | 6 | YES correctly warrants sparse selection, always-on shared experts, and recombination. The SVG labels a 256-expert field but renders only 30 circles with six active, visually suggesting 6/30 unless the truncation is explicitly marked. |
| `ink_mechanism_p2` | 8 | 10 | The modality and local/global attention inventory would become a stock pipeline; no figure added. |
| `ink_mechanism_p3` | 9 | 10 | High-level training claims lack enough disclosed topology for a trustworthy figure. |
| `ink_example_p1` | 8 | 10 | Hardware requirements are exact but heterogeneous; prose preserves checkpoint and architecture conditions without an item-value list. |
| `ink_example_p2` | 9 | 10 | The missing quality comparison should not be visualized as if measured. |
| `ink_evidence_p1` | 7 | 10 | Cross-benchmark values are not one scale, so no chart is correct; however, the generic rationale should explicitly state that comparability problem. |
| `ink_evidence_p2` | 8 | 10 | Harness and evaluation caveats are prose-level provenance. |
| `ink_evidence_p3` | 8 | 10 | The effort sweep is source evidence, but checkpoint mismatch makes a new simplified chart risky; NO is reasonable. |
| `ink_limitations_p1` | 9 | 10 | Risk list has no non-trivial shared structure. |
| `ink_limitations_p2` | 9 | 10 | Capacity versus demonstrated accuracy and unmeasured quantization quality are direct caveats. |
| `ink_limitations_p3` | 9 | 10 | Missing disclosure cannot support an invented visual. |
| `ink_limitations_p4` | 9 | 10 | Version/hash provenance is best kept in text. |
| `ink_review_p1` | 9 | 10 | The bounded conclusion is already explicit and avoids a feature inventory. |
| `ink_review_p2` | 8 | 10 | Source disagreement could be tabulated, but prose preserves exact snapshot boundaries without overclaiming. |
| `ink_review_p3` | 9 | 10 | License-versus-use-policy qualification is correctly prose-only. |

## Implemented-visual topology classification

| Visual | Desktop/mobile result and evidence fidelity | Single chain | Item + value list | Repeated metric cards | Repeated dot tracks |
|---|---|---:|---:|---:|---:|
| `visual_inkling_sparse_routing_field` | Branching router field plus shared-expert branch and recombination is useful and not prohibited. Its sample grid does not visually encode that 226 experts are omitted, weakening fidelity to “6 of 256.” | No | No | No | No |

## Findings

1. Mark the routed-expert field as a sampled/truncated field or render a faithful 256-cell field; the current 30-circle topology conflicts with the prominent “256 routed experts” label.
2. The 41B active-path endpoint and two always-on shared experts are clear, and the limitation correctly avoids inventing expert identities or probabilities.
3. Mobile behavior is controlled scrolling rather than scale-to-container as the implementation record states.
