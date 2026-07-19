# Blind visual QA — RoboTTT (revision 6)

## Scope and aggregate scores

- Paragraphs audited: 16/16; implemented visuals: 1.
- Data-visualization-engineer: aggregate **8/10**; paragraph mean **134/16 = 8.375**; minimum **7/10**.
- Visual-implementer: aggregate **8/10**; paragraph mean **158/16 = 9.875**; minimum **8/10**.
- Proposed HTML/CSS-led treatments: **0/3 (0%)**. Selected HTML/CSS-led unique visual IDs: **0/1 (0%)**.
- Rendered inspection: desktop and mobile Chromium rendered the architecture SVG after `rttt_mechanism_p2`; mobile scrolling is keyboard focusable and contained. Title, description, fallback, evidence, and limitation are exposed.

## Paragraph-level audit

| Paragraph | DVE | Implementer | Auditable basis |
|---|---:|---:|---|
| `rttt_why_p1` | 9 | 10 | Memory requirements are clear in prose and a history chain would be stock. |
| `rttt_why_p2` | 9 | 10 | Cost/state tradeoff is conceptual without reported shared-scale data. |
| `rttt_change_p1` | 9 | 10 | The later architecture figure supplies the non-trivial recurrence; no duplicate figure. |
| `rttt_change_p2` | 8 | 10 | Two training ideas form an inventory without enough joint topology for a second visual. |
| `rttt_mechanism_p1` | 8 | 10 | Within/across-timestep distinction is clear and the next figure carries the architecture. |
| `rttt_mechanism_p2` | 9 | 8 | YES has gradient, parallel activation, gated merge, and recurrent-state warrants. The SVG clearly separates paths, but its “state continues” edge terminates near the downstream action path instead of visibly returning to a next-timestep fast-weight state. |
| `rttt_mechanism_p3` | 8 | 10 | TBPTT boundary and rollout initialization could be a state diagram, but prose avoids a simple sequence and remains accurate. |
| `rttt_example_p1` | 9 | 10 | Human demonstration sequence would be a forbidden chain; no figure. |
| `rttt_example_p2` | 8 | 10 | 6/10 versus 0/10 is too small a comparison to justify a stock value visual. |
| `rttt_evidence_p1` | 7 | 10 | Completion results across tasks and baselines support a shared-scale quantitative view; generic NO rationale is weak. |
| `rttt_evidence_p2` | 7 | 10 | Context scaling is a genuine shared-scale relationship, though mixed conditions require strong annotation; no banned panel was added. |
| `rttt_evidence_p3` | 7 | 10 | Recovery results and DAgger effect could be compared on one scale, but causal ambiguity complicates a visual; rationale remains generic. |
| `rttt_limitations_p1` | 9 | 10 | Scope and failure caveats are correctly prose-only. |
| `rttt_limitations_p2` | 9 | 10 | Missing latency and uncertainty data must not be implied visually. |
| `rttt_review_p1` | 9 | 10 | Mechanism/evidence synthesis is already served by the architecture figure. |
| `rttt_review_p2` | 9 | 10 | Needed future evidence is prose-level, not a visual claim. |

## Implemented-visual topology classification

| Visual | Desktop/mobile result and evidence fidelity | Single chain | Item + value list | Repeated metric cards | Repeated dot tracks |
|---|---|---:|---:|---:|---:|
| `visual_robottt_fast_weight_architecture` | Non-trivial parallel and feedback topology, legible at both viewports. Inner-loss gradient, query path, attention path, gate, and denoiser are distinct; recurrence endpoint is ambiguous. | No | No | No | No |

## Findings

1. Draw the recurrent fast-weight edge to an explicit next-timestep `W` state, not toward open space beside the action path.
2. The visual otherwise matches the selected architecture treatment and avoids implying unreported magnitudes.
3. Three quantitative evidence paragraphs were declined with generic rationale despite meaningful shared-scale structures.
