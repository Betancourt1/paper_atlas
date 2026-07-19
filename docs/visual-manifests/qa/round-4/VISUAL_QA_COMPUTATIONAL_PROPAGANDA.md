# Blind visual QA — Computational Propaganda (revision 6)

## Scope and aggregate scores

- Paragraphs audited: 16/16; implemented visuals: 1.
- Data-visualization-engineer: aggregate **9/10**; paragraph mean **136/16 = 8.500**; minimum **7/10**.
- Visual-implementer: aggregate **9/10**; paragraph mean **159/16 = 9.938**; minimum **9/10**.
- Proposed HTML/CSS-led treatments: **0/3 (0%)**. Selected HTML/CSS-led unique visual IDs: **0/1 (0%)**.
- Rendered inspection: desktop and mobile Chromium rendered the figure after `propaganda_example_p2`; mobile uses the focusable 680 px SVG scroller with no page overflow. Title, description, equivalent text, evidence, and limitation are present.

## Paragraph-level audit

| Paragraph | DVE | Implementer | Auditable basis |
|---|---:|---:|---|
| `propaganda_why_p1` | 9 | 10 | NO avoids turning crawler/extractor/filter possibilities into a simple chain; no figure rendered. |
| `propaganda_why_p2` | 9 | 10 | Threat-model boundaries are clearer in prose than an actor inventory. |
| `propaganda_change_p1` | 8 | 10 | The three gates are relational, but a bare sequence would be forbidden and the later tree supplies the useful structure. |
| `propaganda_change_p2` | 9 | 10 | The negative advertisement result and scope caveat are prose-level distinctions. |
| `propaganda_mechanism_p1` | 8 | 10 | NO avoids a three-step chain; the later denominator tree carries the warranted structure. |
| `propaganda_mechanism_p2` | 8 | 10 | Conditional denominators are meaningful, but the visual is appropriately deferred to the worked numerical paragraph. |
| `propaganda_mechanism_p3` | 9 | 10 | Separating inclusion from model influence is a conceptual boundary, not a needed extra diagram. |
| `propaganda_example_p1` | 9 | 10 | A sandbox replacement sequence would be a forbidden chain; no figure rendered. |
| `propaganda_example_p2` | 9 | 9 | YES names conditional branching, denominator changes, quantitative composition, and discrepancy. The SVG faithfully shows each survivor/reject split and both 0.13% and 0.15%. |
| `propaganda_evidence_p1` | 8 | 10 | The same figures are already encoded by the worked-example tree; no duplicate chart. |
| `propaganda_evidence_p2` | 7 | 10 | Model-size and poison-rate effects have a legitimate shared quantitative structure that the generic NO rationale does not assess; no banned list was added. |
| `propaganda_evidence_p3` | 7 | 10 | Base/post-SFT changes across rates and sizes could warrant one shared-scale chart; prose-only is faithful but weakly justified. |
| `propaganda_limitations_p1` | 9 | 10 | Proxy and pipeline scope limits are correctly prose-only. |
| `propaganda_limitations_p2` | 9 | 10 | Non-establishment claims should not be illustrated speculatively. |
| `propaganda_review_p1` | 9 | 10 | Methodological conclusion is concise in prose and already supported by the tree. |
| `propaganda_review_p2` | 9 | 10 | The bounded threat-model conclusion and unresolved discrepancy are best stated directly. |

## Implemented-visual topology classification

| Visual | Desktop/mobile result and evidence fidelity | Single chain | Item + value list | Repeated metric cards | Repeated dot tracks |
|---|---|---:|---:|---:|---:|
| `propaganda_visual_halflife_tree` | Clear branching survivor/rejection topology with changing denominators; rates and reported discrepancy match fixture evidence and remain legible in the mobile scroller. | No | No | No | No |

## Findings

1. The selected tree is useful and evidence-bounded; it does not imply a live attack and visibly preserves rejected complements.
2. The two model-effect evidence paragraphs received only generic NO rationales despite supporting shared-scale quantitative comparison; this is a planning-quality gap, not an implementation violation.
3. The mobile implementation is a controlled horizontal scroll, contrary to the record's “without a minimum width” wording.
