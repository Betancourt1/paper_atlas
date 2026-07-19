# VISUAL_QA round 2 — SearchOS-V1

- Manifest reviewed: `VISUAL_MANIFEST_SEARCHOS_V1.md`, revision `3`
- Implementation reviewed: commit `8e27467`
- Explainer reviewed: `packages/test-fixtures/explainers/searchos-v1.json`
- Fresh render review: 7 figures at 1440 × 1000 and 390 × 844; no page-level horizontal overflow; all IDs, shared scopes, and placements matched.
- Coverage: 17 / 17 paragraph IDs. Scores are independent 1–10 assessments; this report does not approve publication.

## Paragraph scores

| Paragraph | Engineer | Engineer evidence and actionable finding | Implementer | Implementer evidence and actionable finding |
| --- | ---: | --- | ---: | --- |
| `sos_why_p1` | 9 | `NO` is reasonable because the state/provenance/contradiction/retry needs are concise prose before the system design. The generic directed contingency map implies clause order; use a non-directional requirement map if needed. | 10 | No figure is attached, avoiding a premature generic agent pipeline. No implementation change is needed. |
| `sos_why_p2` | 9 | `NO` passes the removal test for conversation-history failure modes. The stock directed map should be replaced with a flat failure-mode structure if visualized. | 10 | No visual is attached; buried evidence, duplicated work, gaps, and idle slots remain prose-only. |
| `sos_change_p1` | 10 | `YES` correctly plans request → related-table schema → cell states → value/URL/span binding → inspectable record, with five explicit states and bounded provenance. | 10 | `visual_searchos_schema_topology` preserves the hierarchy and `Receives` relationships, prints five states, and binds value, URL, and supporting span without claiming truth. |
| `sos_change_p2` | 10 | `YES` is necessary for actor/record ownership. The plan distinguishes orchestrator mutations, scoped browsing, writer reads, and shared-record handoffs. | 10 | `visual_searchos_actor_ownership` visibly separates actors, Frontier Task, Evidence Graph, Coverage Map, Failure Memory, and writer synthesis with ownership/receiver labels. No change is needed. |
| `sos_mechanism_p1` | 10 | The three-paragraph shared `YES` scope correctly includes all four stores and their distinct contents before middleware/control behavior. | 10 | `visual_searchos_control_loop` is placed after `p3`; its steps and evidence text include Frontier Task, Evidence Graph, Coverage Map, and Failure Memory. |
| `sos_mechanism_p2` | 10 | The plan preserves role-relevant context projection, skill injection, cell binding, observed-span anchoring, and atomic Evidence/Coverage update. | 10 | The shared loop renders context projection, evidence gate, and atomic update as separate steps; its limitation rejects a controlled component-removal inference. |
| `sos_mechanism_p3` | 10 | The plan includes coverage/evidence sensors, budgets, state transitions, and continuous dispatch as a feedback loop rather than a one-shot pipeline. | 10 | The control-loop return and final dispatch stage visibly encode repeated scheduling without motion dependence. All decisions and stop/redirection options remain in text/fallback. |
| `sos_example_p1` | 10 | The shared worked-example plan correctly turns one missing cell into scoped work with relevant failure records and source-access skills. | 10 | `visual_searchos_missing_cell` is placed after `p2` and begins with missing state, scoped task, and context-aware dispatch in source order. |
| `sos_example_p2` | 10 | The plan requires row/attribute binding, observed-span anchoring, atomic state update, and redirect/stop behavior; it does not equate visiting a URL with evidence. | 10 | The operation diagram explicitly labels page browsing as a boundary, then gates value/span and updates evidence/coverage before control. No change is needed. |
| `sos_evidence_p1` | 10 | `YES` correctly separates WideSearch item F1, WideSearch row F1, and GISA set F1 into honest local domains with system/baseline pairs. | 10 | `visual_searchos_benchmark_results` visibly prints 76.0/80.3, 54.5/56.5, and 63.1/76.5 in separate metric panels, with no cross-panel magnitude claim. |
| `sos_evidence_p2` | 10 | `YES` retains the paired 10-case boundary and all runtime, utilization, and item-F1 values without treating the subset as the main benchmark. | 10 | `visual_searchos_dispatch_conditions` presents 629.13→476.34 s, 34.6→41.7%, and 79.66→86.75 with batch/continuous grouping and an explicit subset row. The table is horizontally contained and accessible on mobile. |
| `sos_evidence_p3` | 10 | `YES` correctly plots 80.3/78.3 and 56.5/53.1 on metric-specific local domains and preserves the joint-removal/no-layer-isolation boundary. | 10 | `visual_searchos_skill_ablation` keeps item and row F1 separate, labels joint removal, prints exact values, and states that the experiment cannot isolate one layer. |
| `sos_limitations_p1` | 9 | `NO` is correct for model-role, best-of-three, variance, and budget-fairness caveats. The directed contingency map adds unsupported order; use a flat protocol ledger. | 10 | No figure is attached, so absent variance/cost fairness is not converted into fabricated intervals or comparisons. |
| `sos_limitations_p2` | 9 | `NO` passes the removal test for provenance-versus-truth, citation metric, intervention, and benchmark-format caveats. Replace the directed contingency with parallel boundaries if needed. | 10 | No visual is attached; independent limitations remain prose rather than a causal chain. |
| `sos_limitations_p3` | 9 | `NO` is appropriate for the compact V1/future-work scope. The generic directed map is unnecessary; use a flat in-scope/out-of-scope list if visualized. | 10 | No figure is attached, preventing future-work items from appearing as implemented roadmap stages. |
| `sos_review_p1` | 9 | `NO` correctly leaves the bounded engineering synthesis in prose. The stock directed contingency is not content-specific; use a claim/evidence matrix only if needed. | 10 | No visual duplicates the architecture, control, and ablation figures. The conclusion remains prose-only. |
| `sos_review_p2` | 9 | `NO` correctly preserves whole-system attribution limits and interpretation status. The contingency map should be non-directional because candidate explanations are not sequential. | 10 | No figure is attached; component attribution and the coverage-aware interpretation remain visibly bounded prose. |

## Aggregate producer scores

- `data_visualization_engineer`: **9 / 10**. Every YES record is purpose-specific, topologically meaningful, numerically complete, source-bounded, and accessible in its specifications. The recurring deduction is the generic directed contingency supplied for NO decisions.
- `visual_implementer`: **10 / 10**. All seven figures preserve their selected treatments, shared scopes, topology, grouping, values, limitations, fallbacks, and responsive containment in fresh renders.

## Consolidated actionable finding

- Replace directed `then` maps in prose-only contingencies with non-directional requirement, scope, or evidence structures; no rendered implementation defect was observed.
