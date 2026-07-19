# Blind visual QA — LLM Evaluators Across Languages — revision 8

Scores are engineer decision / implemented result.

| Paragraph | Scores | Rationale |
| --- | --- | --- |
| `language_why_p1` | 9 / 9 | The motivating distinction does not need a decorative comparison. |
| `language_why_p2` | 10 / 7 | Figure 4 directly separates pairwise agreement from absolute acceptance, but desktop labels are reduced to 41%. |
| `language_change_p1` | 10 / 5 | Figure 1 is the correct cross-language evidence, yet its 2780px source is displayed at 642px and fine labels are hard to inspect. |
| `language_change_p2` | 10 / 5 | Figure 3 matches evaluator-type variation; 22% desktop scale defeats detailed comparison. |
| `language_mechanism_p1` | 9 / 9 | Pairwise construction remains clearer in prose. |
| `language_mechanism_p2` | 10 / 7 | Original Figure 4 supports the ranking/threshold split, with good provenance but limited desktop inspection. |
| `language_mechanism_p3` | 9 / 4 | Figures 5–7 are relevant, but a three-image grid shrinks two assets to 95–138px high and makes their evidence unreadable on desktop. |
| `language_example_p1` | 9 / 7 | Figure 4 usefully grounds the example, though it repeats the same asset and remains reduced. |
| `language_example_p2` | 9 / 9 | The counterexample's logic is more precise in prose. |
| `language_evidence_p1` | 10 / 3 | Figures 1–3 are the right originals, but the three-image desktop grid renders them only 110–130px high; comparative details are not legible. |
| `language_evidence_p2` | 10 / 7 | Figure 4 matches the evidence and is fully attributed; desktop inspection is still fitted-only. |
| `language_evidence_p3` | 9 / 4 | Figures 5–7 match the finding, but the same tiny three-image grid prevents meaningful desktop inspection. |
| `language_limitations_p1` | 9 / 9 | Sampling and benchmark boundaries remain prose. |
| `language_limitations_p2` | 9 / 9 | Generalization caveats resist a stock list. |
| `language_review_p1` | 8 / 6 | Figure 4 is relevant but its fourth placement adds substantial repetition with no new focus. |
| `language_review_p2` | 9 / 9 | The bounded conclusion is correctly textual. |

Findings: provenance and accessible alternatives are complete; no page overflow. At 390px, originals remain at intrinsic pixel dimensions inside a focusable, ArrowRight-scrollable viewport with hint and visible focus. Desktop instead fits wide originals to 642px, and multi-image sets to 312px each, making several plots effectively uninspectable. Four placements of Figure 4 and repeated Figures 5–7 also make the page exceptionally long and repetitive. No custom forbidden stock structure. HTML/CSS-led primary visuals: 0/10 (0%).
