# Blind visual QA — RoboTTT — revision 8

Scores are engineer decision / implemented result.

| Paragraph | Scores | Rationale |
| --- | --- | --- |
| `rttt_why_p1` | 9 / 9 | Long-horizon memory motivation avoids a stock timeline. |
| `rttt_why_p2` | 9 / 9 | Compute/memory trade-off remains precise prose. |
| `rttt_change_p1` | 9 / 6 | Shared Figures 2 and 4 are relevant, but the desktop two-image grid makes Figure 2 only 120px high. |
| `rttt_change_p2` | 10 / 6 | Original architecture/training figures are the right evidence; combined desktop presentation is too small for labels. |
| `rttt_mechanism_p1` | 9 / 9 | Backbone context is sufficiently explicit in prose. |
| `rttt_mechanism_p2` | 10 / 7 | Figure 2 directly supports fast-weight updates, though 33% desktop scale makes dense annotations difficult. |
| `rttt_mechanism_p3` | 10 / 6 | Figures 2 and 4 match recurrence and TBPTT, but the two-up layout again prevents comfortable inspection. |
| `rttt_example_p1` | 9 / 9 | Demonstration conditioning is clearer without a simple sequence. |
| `rttt_example_p2` | 9 / 9 | Trial outcome and scope are not reduced to a metric card. |
| `rttt_evidence_p1` | 10 / 7 | Figure 7 matches the main comparison, but wide labels are reduced to 32% on desktop. |
| `rttt_evidence_p2` | 10 / 8 | Figure 8 directly shows context scaling and remains the most legible source plot here. |
| `rttt_evidence_p3` | 9 / 9 | Mixed perturbation and DAgger results are not falsely unified. |
| `rttt_limitations_p1` | 9 / 9 | Heterogeneous limitations remain prose. |
| `rttt_limitations_p2` | 9 / 9 | Missing latency and uncertainty are correctly textual. |
| `rttt_review_p1` | 9 / 9 | The synthesis does not repeat the figures. |
| `rttt_review_p2` | 9 / 9 | External-validity boundary stays prose. |

Findings: source assets have complete provenance, alt/fallback text, evidence links, and no document overflow. Mobile uses intrinsic-size, focusable keyboard-scroll viewports with a visible hint. Desktop fitted-only display is weak for dense Figure 2 and especially the two-image Figure 2/4 combinations. No forbidden custom stock structure. HTML/CSS-led primary visuals: 0/5 (0%).
