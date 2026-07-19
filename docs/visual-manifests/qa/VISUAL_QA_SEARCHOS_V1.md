# VISUAL_QA — SearchOS-V1

Independent review of `VISUAL_MANIFEST_SEARCHOS_V1.md`, `searchos-v1.json`, and the visual implementation in `0c7c6d3`. All 17 prose paragraph IDs are scored.

## Aggregate scores

- `data_visualization_engineer`: **8/10**
- `visual_implementer`: **7/10**
- Engineer distribution: 8×1, 9×16
- Implementer distribution: 5×1, 6×1, 7×1, 8×3, 9×4, 10×7

The engineer correctly identifies schema completion, the evidence/control loop, scheduling, system-level results, and the joint skill ablation as visual relationships. The implementation is source-bounded and accessible, but the schema visual does not encode the paragraph about role separation, the five-paragraph control-loop scope places its figure before the examples, and the zero-based dot plot makes the small skill-ablation deltas visually weak.

Rendered verification: desktop and mobile Playwright projects visited this page, verified figure containment, visible limitations/evidence, at least three visual forms, and no document-level overflow. The in-app browser was unavailable, so this paper has no independently inspected screenshot; responsive scoring uses rendered checks, DOM, and CSS. This is not publication approval.

## Paragraph scores

| Paragraph | Decision / delivered visual | Engineer | Implementer | Concrete evidence and actionable finding |
|---|---|---:|---:|---|
| `sos_why_p1` | NO / prose only | 9 | 10 | Completeness, provenance, contradictions, and failure memory are requirements rather than a measured topology at this point. No premature architecture figure is attached. |
| `sos_why_p2` | NO / prose only | 9 | 10 | Duplicate effort, disagreement, gaps, and idle slots are clear failure examples. Prose-only is preserved. |
| `sos_change_p1` | YES / shared `visual_searchos_schema_completion` after `sos_change_p2` | 9 | 9 | The transformation from request to entity-attribute tables, explicit cell state, and citation binding materially reduces cognitive load. The lanes preserve missing/conflicting status and open-set/provenance limits. |
| `sos_change_p2` | YES / shared `visual_searchos_schema_completion` after this paragraph | 8 | 6 | The paragraph's main relationship is orchestrator ownership, local browse roles, writer readout, and shared-record coordination. The schema-completion visual shows shared state but none of those role boundaries. Add the actor-to-store topology or narrow this paragraph out of the shared scope. |
| `sos_mechanism_p1` | YES / shared `visual_searchos_control_loop` after `sos_mechanism_p3` | 9 | 8 | The loop includes Frontier Task, Evidence Graph/Coverage Map, and Failure Memory, but the four stores are distributed across step details rather than shown as linked durable state. It is accurate, though less inspectable than the approved store relation graph. |
| `sos_mechanism_p2` | YES / shared `visual_searchos_control_loop` after `sos_mechanism_p3` | 9 | 9 | Context projection, worker search, schema/span evidence gate, and atomic evidence/coverage update appear in the correct order with a return transition. The URL-is-not-truth limitation is explicit. |
| `sos_mechanism_p3` | YES / shared `visual_searchos_control_loop` after this paragraph | 9 | 9 | Sensor inputs, possible transitions, and continuous dispatch are encoded in the last and first loop nodes. Static HTML conveys the cycle without requiring animation. |
| `sos_example_p1` | YES / shared `visual_searchos_control_loop` placed before this paragraph | 9 | 7 | The loop covers a ready unresolved cell, relevant context, and continuous assignment, but it appears before the worked example and never shows the known-company/missing-attribute state. Add example-specific labels or place the shared visual after the example scope. |
| `sos_example_p2` | YES / shared `visual_searchos_control_loop` placed before this paragraph | 9 | 8 | Candidate extraction, binding, source anchoring, atomic updates, and redirect/stop behavior are all in the loop. Placement before the example and omission of the single-cell state reduce adjacency, but the mechanism remains faithful. |
| `sos_evidence_p1` | YES / `visual_searchos_benchmark_results` after this paragraph | 9 | 8 | Paired system/baseline values for three metrics are appropriate. The dot plot retains exact labels and limitations, but a single zero-based axis mixes WideSearch item/row F1 and GISA set F1 and provides no within-pair connector; use three paired panels or deltas. |
| `sos_evidence_p2` | YES / `visual_searchos_dispatch_comparison` after this paragraph | 9 | 9 | Batch versus continuous dispatch is a real method comparison, and the cards preserve runtime, utilization, item F1, 10-case scope, and the non-component-causal boundary. The visible details retain exact two-decimal values even though the generic value formatter is unused. |
| `sos_evidence_p3` | YES / `visual_searchos_skill_ablation` after this paragraph | 9 | 5 | The four values are source-faithful and the joint-removal limitation is clear. `DotPlot` forces a zero baseline, so 78.3→80.3 occupies only about 2.5% of the track and 53.1→56.5 about 4.3%; the visual barely communicates the deltas named in its title. Use paired deltas or a disclosed bounded axis. |
| `sos_limitations_p1` | NO / prose only | 9 | 10 | Best-of-three reporting, absent variance, model configuration, and cost fairness are explicit protocol limits. No figure is attached. |
| `sos_limitations_p2` | NO / prose only | 9 | 10 | Provenance-versus-truth, missing citation correctness, representative interventions, and benchmark fit are heterogeneous boundaries. Prose-only is appropriate. |
| `sos_limitations_p3` | NO / prose only | 9 | 10 | V1 future-work scope is a short list and does not need a roadmap visual. No figure is attached. |
| `sos_review_p1` | NO / prose only | 9 | 10 | The bounded engineering synthesis is already supported by earlier mechanism and evidence visuals. No duplicate figure is attached. |
| `sos_review_p2` | NO / prose only | 9 | 10 | Component attribution remains unestablished; a visual could falsely imply decomposition evidence. The prose-only decision is correct. |

## Cross-paper findings for this paper

1. `sos_change_p2` is only partially served by the schema-completion figure; actor ownership and role separation are absent.
2. The broad control-loop scope is factually stronger than other shared scopes, but the figure still appears before its worked-example paragraphs. Example labels or placement should make that coverage explicit.
3. The shared zero-baseline `DotPlot` is a poor form for the small skill-ablation deltas, even though exact text and fallback preserve accessibility.
4. The scheduling comparison is especially effective: it preserves condition, scope, multiple outcomes, limitations, and static behavior without overclaiming component causality.

This report scores the candidate only and does not approve publication.
