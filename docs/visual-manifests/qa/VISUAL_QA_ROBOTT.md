# VISUAL_QA — RoboTTT

Independent review of `VISUAL_MANIFEST_ROBOTT.md`, `robott.json`, and the visual implementation in `0c7c6d3`. All 16 prose paragraph IDs are scored.

## Aggregate scores

- `data_visualization_engineer`: **8/10**
- `visual_implementer`: **7/10**
- Engineer distribution: 8×1, 9×15
- Implementer distribution: 2×1, 4×1, 8×4, 9×6, 10×4

The engineer identifies the fixed-size-state problem, fast-weight cycle, TBPTT timeline, masked demonstration context, and separate result conditions well. The implementation delivers four strong mechanism/example visuals, but the training timeline is incorrectly claimed for the fast-weight-change paragraph and the completion plot is incorrectly claimed for a perturbation/DAgger paragraph whose values are absent.

Rendered verification: both configured viewports visited this page, confirmed paragraph-contained figures, evidence and limitation blocks, at least three visual forms, and no document-level overflow. The in-app browser was unavailable, so paper-specific screenshot inspection was not possible; responsive scores rely on rendered checks, DOM, and CSS. This is not publication approval.

## Paragraph scores

| Paragraph | Decision / delivered visual | Engineer | Implementer | Concrete evidence and actionable finding |
|---|---|---:|---:|---|
| `rttt_why_p1` | YES / shared `visual_robottt_history_memory` after `rttt_why_p2` | 9 | 8 | Remembering stages, failures, and occluded observations is a real state problem. The visual's “Information objective” includes those examples, but the parallel-card grammar does not show loss or retention over time; it mainly serves the next scaling paragraph. |
| `rttt_why_p2` | YES / shared `visual_robottt_history_memory` after this paragraph | 9 | 9 | Full-history token growth versus fixed-size fast-weight state is a clear comparison. The visual preserves the unmeasured-latency boundary and avoids claiming perfect retention. |
| `rttt_change_p1` | YES / shared `visual_robottt_training_timeline` after `rttt_change_p2` | 9 | 4 | The fast-weight update/retrieval mechanism merits a visual, but the delivered TBPTT timeline does not show projected keys/values, gradient update of the small network, query retrieval, or current action prediction. This paragraph is not implemented by the declared figure. |
| `rttt_change_p2` | YES / shared `visual_robottt_training_timeline` after this paragraph | 9 | 9 | The timeline clearly shows independent per-chunk noise, within-segment gradients, detached boundaries, and carried state. It states the optimization-horizon and compute limitations and has a complete static fallback. |
| `rttt_mechanism_p1` | YES / shared `visual_robottt_fast_weight_cycle` after `rttt_mechanism_p3` | 9 | 8 | The VLM, DiT token inputs, within-timestep attention, and across-timestep TTT distinction are encoded, but the control loop compresses architectural lanes into one sequential cycle. Record that topology change. |
| `rttt_mechanism_p2` | YES / shared `visual_robottt_fast_weight_cycle` after `rttt_mechanism_p3` | 9 | 9 | Inner loss, MLP update, query processing, tanh gate, and action denoising appear in order and remain source-bounded. The return annotation makes the recurrent state explicit without motion. |
| `rttt_mechanism_p3` | YES / shared `visual_robottt_fast_weight_cycle` after this paragraph | 9 | 9 | The final node carries fast weights to the next observation, and limitations state rollout initialization and no permanent memory. The visible loop matches the paragraph's state transition. |
| `rttt_example_p1` | YES / shared `visual_robottt_masked_context` after `rttt_example_p2` | 9 | 9 | Human demonstration, context update, and masked action loss are clearly separated on the timeline. It correctly treats video as context rather than robot-action supervision. |
| `rttt_example_p2` | YES / shared `visual_robottt_masked_context` after this paragraph | 9 | 9 | Scene reset, generic instruction, conditioned robot trajectory, 6/10 versus 0/10, and the configuration-level boundary are all present. The timeline is an appropriate static fallback. |
| `rttt_evidence_p1` | YES / shared `visual_robottt_completion_results` after `rttt_evidence_p3` | 9 | 8 | The plot includes the 42/56/79 average completion comparison, but omits the per-task full-success counts and Gear Bot boundary named in the paragraph. Averages are clear; scope should be narrowed or those values added separately. |
| `rttt_evidence_p2` | YES / shared `visual_robottt_completion_results` after `rttt_evidence_p3` | 9 | 8 | The 43.9, 45.6, and 71.5 scaling conditions are present and labeled as pre-DAgger, with a warning not to combine them with the main task condition. The common zero-based dot scale is acceptable for the broad difference but lacks grouping connectors between the two experiments. |
| `rttt_evidence_p3` | YES / shared `visual_robottt_completion_results` after this paragraph | 8 | 2 | This paragraph reports 15/20 and 18/20 perturbation recovery, GDN's matching 18/20 tire recovery, and 33% DAgger improvement. None of those values appears in the completion plot. The shared-scope implementation claim is false; add a bounded perturbation/DAgger visual or mark the paragraph unimplemented. |
| `rttt_limitations_p1` | NO / prose only | 9 | 10 | Training cost, objective fit, failures, one backbone/setup, and three task families are heterogeneous scope limits. No figure is attached. |
| `rttt_limitations_p2` | NO / prose only | 9 | 10 | Trial counts, missing intervals, asymptotic per-step cost, and absent latency data are direct qualifications. No misleading latency chart is added. |
| `rttt_review_p1` | NO / prose only | 9 | 10 | The synthesis is already supported by the state, scaling, and mechanism visuals. Prose-only avoids a duplicate causal summary. |
| `rttt_review_p2` | NO / prose only | 9 | 10 | Missing backbones, embodiments, uncertainty, latency, and direct memory inspection are future-evidence needs, not a visual result. No figure is attached. |

## Cross-paper findings for this paper

1. `rttt_change_p1` and `rttt_evidence_p3` are declared implemented by visuals that do not contain their mechanisms or values.
2. The completion plot groups two explicitly different experiments on one axis. Labels and limitations protect interpretation, but stronger panel grouping is needed for sighted scanning.
3. The control-loop and masked-context timeline are the strongest implementations in the set: they add real topology/order, preserve limitations, need no interaction, and expose equivalent text.
4. All `NO` decisions remain prose-only and avoid redundant visuals.

This report scores the candidate only and does not approve publication.
