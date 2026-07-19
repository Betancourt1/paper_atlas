# VISUAL_QA round 2 — RoboTTT

- Manifest reviewed: `VISUAL_MANIFEST_ROBOTT.md`, revision `3`
- Implementation reviewed: commit `8e27467`
- Explainer reviewed: `packages/test-fixtures/explainers/robott.json`
- Fresh render review: 8 figures at 1440 × 1000 and 390 × 844; no page-level horizontal overflow; all shared scopes and placements matched. One result-comparison row collapsed its text column at both widths.
- Coverage: 16 / 16 paragraph IDs. Scores are independent 1–10 assessments; this report does not approve publication.

## Paragraph scores

| Paragraph | Engineer | Engineer evidence and actionable finding | Implementer | Implementer evidence and actionable finding |
| --- | ---: | --- | ---: | --- |
| `rttt_why_p1` | 10 | The shared `YES` plan correctly contrasts growing observation history with fixed-size recurrent fast weights and includes the retention objective. | 10 | `visual_robottt_history_memory` is placed after `p2` and visibly distinguishes retained frames, recurrent parameters, completed/failed/occluded state, and the latency boundary. |
| `rttt_why_p2` | 10 | The same plan keeps compute growth separate from the information-retention claim and avoids asserting absolute latency. | 10 | The parallel view explicitly marks latency as unmeasured and does not turn fixed-size state into a speed benchmark. No change is needed. |
| `rttt_change_p1` | 10 | `YES` faithfully plans observation projection, learned inner loss, gradient update, query retrieval, gated insertion, and current action. | 10 | `visual_robottt_current_action` renders all six operations in the correct source-supported order, with no full-history claim. Fallback and mobile order are complete. |
| `rttt_change_p2` | 10 | `YES` correctly separates per-chunk flow-matching noise from TBPTT gradient detachment while showing that fast-weight state continues. | 10 | `visual_robottt_training_timeline` shows independent noise, within-segment backpropagation, detached graph, carried state, and resumed segment as T0–T5. No change is needed. |
| `rttt_mechanism_p1` | 10 | The three-paragraph shared `YES` plan covers GR00T/VLM/DiT inputs, within-timestep attention, and across-timestep TTT state without conflating their roles. | 10 | `visual_robottt_fast_weight_cycle` is placed after `p3` and includes observation encoding, register/proprioception/action tokens, and within-step attention before the recurrent update. |
| `rttt_mechanism_p2` | 10 | The plan retains keys/values/query, two-layer MLP gradient update, tanh gate, and action denoising. | 10 | The control loop shows projection, update, query/gate, and denoising as distinct stages with selectable text and no motion dependency. |
| `rttt_mechanism_p3` | 10 | The shared plan explicitly carries state across timesteps/TBPTT boundaries while detaching gradients and resetting at rollout boundaries. | 10 | The final two loop stages visibly distinguish cross-timestep state from rollout reset, and the limitation rejects permanent memory/universal latency. No change is needed. |
| `rttt_example_p1` | 10 | The shared worked-example plan correctly treats human video as context, masks action loss, and postpones robot supervision until after reset. | 10 | `visual_robottt_masked_context` renders demonstration, state update, masked loss, reset, and robot action loss in order. No change is needed. |
| `rttt_example_p2` | 10 | The plan adds the bounded 6/10 versus 0/10 Circuit result and explicitly rejects arbitrary unseen-task imitation. | 10 | The timeline prints `6/10 vs 0/10` and states the configuration-level boundary. Shared placement and fallback are correct. |
| `rttt_evidence_p1` | 10 | `YES` correctly separates three-task average completion (42/56/79%) from per-task full-success counts (9/20, 13/20, 2/10, zero baseline Gear Bot successes). | 5 | `visual_robottt_main_results` contains every value, but the `RESULT_COMPARISON` grid lets the large `0 full successes` value collapse the Gear Bot baseline label/detail column to only a few pixels on desktop and mobile. The visible row overlaps and becomes unreadable. Stack long values below labels or guarantee a usable text column at both widths. |
| `rttt_evidence_p2` | 10 | `YES` keeps 43.9%, 45.6%, and 71.5% within the pre-DAgger condition and discloses the 40–75% local domain. | 10 | `visual_robottt_context_scaling` prints all three values, the 1K/8K conditions, and the pre-DAgger limitation on one honest axis. No change is needed. |
| `rttt_evidence_p3` | 10 | `YES` separates perturbation recovery from DAgger, keeps the shared GDN 18/20 result, and prevents a fast-weight-specific inference. | 10 | `visual_robottt_recovery_and_dagger` shows 15/20, 18/20, the matching GDN 18/20, and +33% in separate domains with explicit comparison boundaries. |
| `rttt_limitations_p1` | 9 | `NO` is correct for heterogeneous cost, objective, failure, backbone, setup, and task-family limits. The directed contingency map adds unsupported order; use a flat scope ledger if needed. | 10 | No figure is attached; limitations remain prose-only without an invented hierarchy. |
| `rttt_limitations_p2` | 9 | `NO` passes the removal test for trial counts, uncertainty, and latency caveats. Remove directed `then` edges from contingency treatments. | 10 | No visual is attached, so absent confidence intervals and latency measurements are not turned into fake comparisons. |
| `rttt_review_p1` | 9 | `NO` is appropriate for the concise mechanism/evidence synthesis. Its generic directed contingency is not content-specific; use a claim/support matrix only if later needed. | 10 | No visual duplicates the mechanism and scaling figures. The synthesis remains prose-only. |
| `rttt_review_p2` | 9 | `NO` correctly preserves missing-backbone/domain/uncertainty/latency evidence and the uninspected-memory caveat. The contingency map should be non-directional. | 10 | No figure is attached; plausible explanation and missing evidence remain visibly distinct prose. |

## Aggregate producer scores

- `data_visualization_engineer`: **9 / 10**. YES decisions, shared scopes, temporal/state topology, experimental-condition boundaries, and numeric domains are strong. Deductions are limited to generic directed contingencies on NO records.
- `visual_implementer`: **9 / 10**. Seven figures are faithful and responsive. The main-results figure has a severe visible layout failure for the Gear Bot baseline row at both tested widths.

## Consolidated actionable findings

1. Repair `RESULT_COMPARISON` so long value labels such as `0 full successes` cannot collapse the label/detail column; verify desktop and 390 px mobile.
2. Replace directed `then` maps in prose-only contingencies with non-directional evidence/scope structures.
