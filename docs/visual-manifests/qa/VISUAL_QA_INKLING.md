# VISUAL_QA — Inkling

Independent review of `VISUAL_MANIFEST_INKLING.md`, `inkling.json`, and the visual implementation in `0c7c6d3`. All 19 prose paragraph IDs are scored, including every prose-only decision.

## Aggregate scores

- `data_visualization_engineer`: **8/10**
- `visual_implementer`: **7/10**
- Engineer distribution: 8×4, 9×15
- Implementer distribution: 3×1, 4×1, 7×1, 8×2, 9×4, 10×10

The engineer generally makes disciplined decisions around mutable vendor evidence, checkpoint identity, and incomparable benchmark families. The main engineering weakness is the same formulaic treatment set used across unrelated jobs. The implementation is strongest for source provenance, hardware, context boundaries, and total-versus-active parameters; it fails when the generic partition-tree renderer changes the MoE topology and when the multimodal-stack figure is claimed to implement a training-sequence paragraph it does not encode.

Rendered verification: desktop and iPhone 13 Playwright projects visited this page and verified figure containment, evidence and limitations, multiple visual forms, and no page-level horizontal overflow. The in-app browser was unavailable, so this paper lacks an independently inspected full-page screenshot; responsive craft is scored from the rendered checks, DOM, and CSS. This is not publication approval.

## Paragraph scores

| Paragraph | Decision / delivered visual | Engineer | Implementer | Concrete evidence and actionable finding |
|---|---|---:|---:|---|
| `ink_why_p1` | NO / prose only | 9 | 10 | The intended-use list and non-leadership positioning are already legible and do not form a measurable comparison. No figure is attached. |
| `ink_why_p2` | NO / prose only | 9 | 10 | Open weights, modalities, effort control, and fine-tuning are a bounded value proposition, not a relationship that needs a diagram. Prose-only is preserved. |
| `ink_change_p1` | YES / `visual_inkling_total_vs_active` after this paragraph | 9 | 9 | Separating 975B stored parameters from the 41B active token path prevents a common misunderstanding. The three lanes preserve sparse-compute and checkpoint-storage boundaries with equivalent text; the implementation should disclose that it replaces treatment A's relation graph with a parallel comparison. |
| `ink_change_p2` | NO / prose only | 9 | 10 | The effort-control claim and its non-dominance boundary are explicit. Avoiding a visual also avoids implying a measured effort curve for the released checkpoint. |
| `ink_mechanism_p1` | YES / `visual_inkling_moe_routing` after this paragraph | 9 | 4 | MoE routing is genuinely topological, but the generic `PartitionTree` renders every item after the root as a sibling branch. It therefore shows “Routed branch,” “Shared branch,” and “Active token path” at one level, although the active path should combine the routed and shared selections. Implement the actual convergence topology rather than reusing the partition grammar. |
| `ink_mechanism_p2` | YES / shared `visual_inkling_multimodal_stack` after `ink_mechanism_p3` | 8 | 8 | The modality front ends, shared hidden space, local/global attention, and text output benefit from a layered view. The stepper retains the 5:1 ratio, 8 KV heads, patch and audio descriptions, and source-description discrepancy, but places the figure after the next training paragraph and omits the paragraph's joint-processing relationship as an explicit convergence. |
| `ink_mechanism_p3` | YES / shared `visual_inkling_multimodal_stack` after this paragraph | 8 | 3 | A 45T-token pretraining → synthetic SFT → RL sequence could merit a visual. The delivered multimodal architecture does not show 45 trillion tokens, synthetic supervised fine-tuning, reinforcement learning, or the missing dataset inventory. This paragraph is incorrectly marked implemented with no deviations. |
| `ink_example_p1` | YES / `visual_inkling_checkpoint_hardware` after this paragraph | 9 | 9 | The BF16, W4A4, and W4A16 conditions are a real deployment comparison. The method cards preserve memory, GPU counts, SM100 constraint, commit pins, and missing quality parity. Generic “Approach A/B/C/D” labels are less precise than checkpoint/mode headings but do not obscure the evidence. |
| `ink_example_p2` | NO / prose only | 9 | 10 | The absence of precision attribution and BF16/NVFP4 quality comparison is an evidence gap, not a result to plot. No figure is attached. |
| `ink_evidence_p1` | YES / `visual_inkling_benchmark_snapshot` after this paragraph | 8 | 7 | A visual can help readers scan broad vendor coverage, but these benchmarks are not one scale. The result constellation explicitly warns against cross-family ranking, yet its large numeric styling still invites comparison and it omits the paragraph's 46.0 HLE-with-tools value. Include all selected values or narrow the paragraph scope, and visually separate families from a leaderboard. |
| `ink_evidence_p2` | NO / prose only | 8 | 10 | Temperature, trajectory length, internal harnesses, contamination handling, and formatting sensitivity are heterogeneous protocol caveats. Prose avoids implying they form a common evaluation pipeline; no figure is attached. |
| `ink_evidence_p3` | YES / `visual_inkling_evidence_boundaries` after this paragraph | 9 | 8 | The earlier HLE checkpoint and different forecasting checkpoint make evidence identity visual-worthy. The matrix includes those rows and broader checkpoint/precision boundaries, but the extra source surfaces dilute this paragraph's narrower point. A smaller checkpoint-to-result map would be more explanatory. |
| `ink_limitations_p1` | NO / prose only | 9 | 10 | The provider's failure modes and safeguards are a readable list without measurable relationships. No visual is attached. |
| `ink_limitations_p2` | YES / `visual_inkling_context_boundary` after this paragraph | 9 | 9 | The distinction among advertised 1M capacity, hosted 64K/256K access, demonstrated accuracy, and checkpoint parity is materially easier to understand as parallel scopes. The static lanes, limitations, retrieval-date caveat, and fallback are faithful. |
| `ink_limitations_p3` | NO / prose only | 9 | 10 | Missing dataset composition, rights, contamination, language distribution, and cutoff are absent evidence, not values to encode. Prose-only is correct. |
| `ink_limitations_p4` | NO / prose only | 9 | 10 | Hash/byte-count fixation and later-review requirements are provenance policy statements already made concrete in sources. No redundant figure is attached. |
| `ink_review_p1` | NO / prose only | 9 | 10 | The strong descriptive conclusion and four rejected overclaims read clearly and are supported by earlier visuals. No figure is attached. |
| `ink_review_p2` | YES / `visual_inkling_source_provenance` after this paragraph | 9 | 9 | The website snapshot, two immutable checkpoint commits, and unresolved discrepancies form a genuine evidence matrix. It preserves reproducibility without declaring a canonical winner and provides semantic table fallback and source links. |
| `ink_review_p3` | NO / prose only | 9 | 10 | Apache 2.0 labeling and the additional Acceptable Use Policy are two coexisting legal-source statements, not a visual hierarchy. No figure is attached. |

## Cross-paper findings for this paper

1. `PartitionTree` is not a valid renderer for the MoE visual: it flattens the active token path into a sibling of the routed and shared branches instead of showing their convergence.
2. `ink_mechanism_p3` is a substantive false-positive implementation record. Its declared training sequence is absent from `visual_inkling_multimodal_stack`.
3. The benchmark snapshot correctly warns against a shared scale but visually emphasizes large numeric values and drops HLE-with-tools 46.0. That weakens source completeness and can still read as a leaderboard.
4. Source fixation, limitations, static fallback, and accessibility are consistently strong across the purpose-built evidence and deployment visuals.

This report scores the candidate only and does not approve publication.
