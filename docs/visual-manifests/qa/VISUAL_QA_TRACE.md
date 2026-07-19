# VISUAL_QA — TRACE

Independent review of `VISUAL_MANIFEST_TRACE.md`, `trace.json`, and the visual implementation in `0c7c6d3`. All 16 prose paragraph IDs are scored.

## Aggregate scores

- `data_visualization_engineer`: **8/10**
- `visual_implementer`: **7/10**
- Engineer distribution: 8×1, 9×15
- Implementer distribution: 4×1, 6×1, 8×3, 9×5, 10×6

The engineer identifies the outcome-blindness problem, controlled change, turn-credit mechanism, worked trajectory, and quantitative comparisons well. The implementation is the strongest visually inspected page in this review: desktop and mobile full-page screenshots show a coherent hierarchy and stacked mobile behavior. Its main shortcomings are a result plot incorrectly claimed for the training-conditions paragraph and a zero-based ablation plot that weakens small differences.

Rendered verification: both Playwright projects passed all page assertions and produced full-page TRACE screenshots. The desktop screenshot shows each figure adjacent to its explanatory section with consistent hierarchy; the iPhone 13 screenshot shows one-column cards/timelines and no page overflow. The in-app browser itself was unavailable, so inspection was limited to these generated screenshots plus rendered DOM checks. This is not publication approval.

## Paragraph scores

| Paragraph | Decision / delivered visual | Engineer | Implementer | Concrete evidence and actionable finding |
|---|---|---:|---:|---|
| `trace_why_p1` | YES / `trace_visual_outcome_blindness` after this paragraph | 9 | 9 | Unequal decisions inside one failed trajectory are the core relationship. The three lanes preserve outcome-only assignment, local distinctions, and the still-failed terminal boundary without inventing credit values. |
| `trace_why_p2` | NO / prose only | 9 | 10 | Step labels, judges, critics, repeated rollouts, and known-answer prompting are an explicit research question. No redundant figure is attached. |
| `trace_change_p1` | YES / `trace_visual_credit_assignment_change` after this paragraph | 9 | 9 | Held-fixed system components versus changed credit construction are correctly separated and source-bounded. The method comparison adds real experimental-control meaning. |
| `trace_change_p2` | NO / prose only | 9 | 10 | This paragraph repeats and bounds the held-fixed components already visualized immediately above. No second figure is attached; the `NO` decision appropriately avoids duplication. |
| `trace_mechanism_p1` | YES / shared `trace_visual_credit_flow` after `trace_mechanism_p3` | 9 | 8 | Prefix splitting, frozen-model probing, and stable-reference status appear in the operation path. The figure does not explicitly distinguish average gold-answer log probability from the later normalized value until the next node, but remains faithful. |
| `trace_mechanism_p2` | YES / shared `trace_visual_credit_flow` after `trace_mechanism_p3` | 9 | 9 | Log-ratio state value, adjacent subtraction, and positive/zero/negative progress are in ordered nodes and equivalent text. No numeric trajectory is invented. |
| `trace_mechanism_p3` | YES / shared `trace_visual_credit_flow` after this paragraph | 9 | 9 | The path preserves one-step telescoping, short look-ahead, combination with final advantage, and the exact-guarantee boundary. Static sequence is the right form. |
| `trace_example_p1` | YES / shared `trace_visual_worked_trajectory` after `trace_example_p2` | 9 | 8 | Search, decisive page, unrelated branch, and wrong answer are all present in the timeline, though the figure appears after the next paragraph and omits the explicit outcome-only whole-trajectory comparison. |
| `trace_example_p2` | YES / shared `trace_visual_worked_trajectory` after this paragraph | 9 | 9 | Conditional positive/zero/negative local credit and negative final outcome are explicit. The limitations correctly label the example illustrative and non-quantitative. |
| `trace_evidence_p1` | YES / shared `trace_visual_main_results` after `trace_evidence_p2` | 8 | 4 | Training setup could warrant a conditions table, but the delivered dot plot contains none of the paragraph's offline corpus, 60 tool turns, shared browser actions, training algorithms, terminal reward, or interface. This paragraph is falsely marked implemented by the result plot. |
| `trace_evidence_p2` | YES / shared `trace_visual_main_results` after this paragraph | 9 | 8 | All eight base/GRPO/TRACE values are present with exact labels and warnings about separate result slices. One zero-based track mixes BrowseComp-Plus base-to-TRACE and four-benchmark GRPO-to-TRACE comparisons; grouped panels would make valid within-slice comparisons clearer. |
| `trace_evidence_p3` | YES / `trace_visual_credit_ablation` after this paragraph | 9 | 6 | The ablation values and single-run/no-uncertainty boundary are complete. The zero baseline compresses 30.0–35.5 into the last 15.5% of the track, weakening the directional differences the question asks readers to compare; use a disclosed bounded scale or deltas. The learning-curve observation is also omitted. |
| `trace_limitations_p1` | NO / prose only | 9 | 10 | Known short answers versus code patches and open-ended outputs is a clear domain boundary, not a result topology. No figure is attached. |
| `trace_limitations_p2` | NO / prose only | 9 | 10 | Backbone/domain coverage, proxy causality, and uncontrolled external systems are heterogeneous limitations. Prose-only is preserved. |
| `trace_review_p1` | NO / prose only | 9 | 10 | The controlled conclusion is already supported by the mechanism and result visuals. No duplicate synthesis graphic is attached. |
| `trace_review_p2` | NO / prose only | 9 | 10 | The generalization gap and need for new targets/evidence are explicit. No figure is attached. |

## Cross-paper findings for this paper

1. `trace_evidence_p1` is not implemented by `trace_visual_main_results`; the figure contains outcomes, not training conditions or held-fixed harness evidence.
2. The common dot-plot grammar needs grouping and scale policies. It mixes different slices in the main result and suppresses small ablation differences through a zero baseline.
3. The generated desktop and mobile screenshots show a stable, readable static layout with figures remaining within paragraph sections and no page overflow. Mobile stacking does not depend on motion or pointer input.
4. The outcome-blindness, credit-flow, and worked-trajectory visuals add genuine explanatory structure and preserve the crucial “local progress does not redefine final failure” boundary.

This report scores the candidate only and does not approve publication.
