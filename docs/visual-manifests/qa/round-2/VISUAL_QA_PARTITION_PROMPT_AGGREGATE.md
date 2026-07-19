# VISUAL_QA round 2 — Partition, Prompt, Aggregate

- Manifest reviewed: `VISUAL_MANIFEST_PARTITION_PROMPT_AGGREGATE.md`, revision `3`
- Implementation reviewed: commit `8e27467`
- Explainer reviewed: `packages/test-fixtures/explainers/partition-prompt-aggregate.json`
- Fresh render review: 7 figures at 1440 × 1000 and 390 × 844; no page-level horizontal overflow; all visual IDs and shared placements matched. One result-comparison item collapsed its text column at both widths.
- Coverage: 16 / 16 paragraph IDs. Scores are independent 1–10 assessments; this report does not approve publication.

## Paragraph scores

| Paragraph | Engineer | Engineer evidence and actionable finding | Implementer | Implementer evidence and actionable finding |
| --- | ---: | --- | ---: | --- |
| `ppa_why_p1` | 10 | `YES` correctly plans direct p(root) and complete-partition Σw_g p_g routes converging on the same target, with an equality check and no external-accuracy claim. | 10 | `visual_ppa_prompt_convergence` renders target, routes, partition inputs, weighted merge, and comparison in ordered levels with formulas visible and an explicit limitation. |
| `ppa_why_p2` | 9 | `NO` is appropriate because the prompt-granularity/order warning is concise prose. The generic directed contingency map adds unsupported clause order; use a non-directional inconsistency boundary if retained. | 10 | No figure is attached, so locally plausible but incompatible estimates remain prose-only without an invented scale. |
| `ppa_change_p1` | 10 | The shared `YES` decision correctly separates external alignment from reference-free split and order consistency. Three distinct treatments and code preserve the different questions. | 10 | `visual_ppa_three_checks` is placed after `p2` and clearly distinguishes the external-reference requirement from two invariance tests. No change is needed. |
| `ppa_change_p2` | 10 | The shared plan adds the macro-fallacy observation without treating it as a definition or universal decomposition rule. | 10 | The method comparison keeps the ACS observation in its own measured card and states that consistency checks do not imply external accuracy. No change is needed. |
| `ppa_mechanism_p1` | 10 | The shared hierarchy plan preserves exhaustive complementary branches at each depth and the subgroup-estimation job. | 10 | `visual_ppa_partition_hierarchy` visibly renders root, A/not-A, all four A/B complement leaves, and the reconstruction level in source order. No change is needed. |
| `ppa_mechanism_p2` | 10 | The plan includes normalized population shares, 50 ACS prior elicitations, Σw_g p_g, and comparison back to the root at every complete level. | 10 | The shared hierarchy prints `50 prior elicitations · Σ w_g p_g` and explains normalization/averaging before reconstruction. Placement and fallback are correct. |
| `ppa_mechanism_p3` | 10 | `YES` correctly separates immediate-child composition from condition-order invariance with both symbolic equalities visible. | 10 | `visual_ppa_consistency_invariances` shows p(parent) ?= Σchildren w p and p(A,B) ?= p(B,A) in different groups, with no accuracy claim. No change is needed. |
| `ppa_example_p1` | 10 | The shared worked-example plan names the US root, exhaustive 31–68/complement split, and four employment leaves without inventing population values. | 10 | `visual_ppa_acs_example` renders the complete hierarchy and keeps the threshold symbolic. Labels remain readable on mobile. No change is needed. |
| `ppa_example_p2` | 10 | The plan completes Σw_g p_g, root consistency, and a separate ACS alignment comparison; the symbolic treatment avoids fabricated probabilities. | 10 | The weighted-merge card includes the formula and distinguishes consistency from ACS alignment in its text and limitation. Shared placement is correct. |
| `ppa_evidence_p1` | 10 | `YES` correctly treats the depth result as qualitative: early positive gain, later decline, and no monotonic guarantee. It avoids invented coordinates from Figure 3. | 10 | `visual_ppa_depth_tradeoff` uses grouped qualitative cards rather than a fake numeric chart and keeps the non-monotonic boundary visible. No change is needed. |
| `ppa_evidence_p2` | 10 | `YES` preserves tolerance 0.02, four models, 0–0.33, five questions/two countries, “none uniformly consistent,” and separate synthetic tasks without implying a shared metric scale. | 5 | `visual_ppa_consistency_results` contains the correct values, but the `RESULT_COMPARISON` three-column item layout gives the WVS text column 0 px on desktop and mobile. “5 questions · 2 countries” collides with vertically crushed label/detail text, making the visible result unreadable despite fallback text. Stack large values below labels or enforce a nonzero text column and wrapping at both widths. |
| `ppa_evidence_p3` | 9 | `NO` is correct for the bounded, model-dependent micro-to-macro observation. The generic directed contingency can imply a sequence; use a flat protocol/effect ledger if visualized. | 10 | No visual is attached, avoiding an unsupported universal effect chart. No implementation change is needed. |
| `ppa_limitations_p1` | 9 | `NO` passes the removal test for ACS dependence, wording, normalization, and finer-partition caveats. The contingency map should be non-directional. | 10 | No figure is attached; independent limitations remain prose rather than an invented causal chain. |
| `ppa_limitations_p2` | 9 | `NO` correctly preserves the necessary-not-sufficient boundary and synthetic-task scope in prose. Remove directed `then` relations from contingency treatments. | 10 | No visual is attached, so internal consistency is not visually equated with truth or downstream benefit. |
| `ppa_review_p1` | 9 | `NO` is appropriate for the concise contribution statement. Its stock directed contingency is not content-specific; use a claim/support boundary only if needed. | 10 | No visual duplicates the method figures. The conclusion remains prose-only. |
| `ppa_review_p2` | 9 | `NO` correctly leaves the bounded macro-fallacy interpretation in prose. The contingency map should not sequence empirical pattern, author interpretation, and unobserved internals. | 10 | No figure is attached; the non-universal and internal-representation caveats stay explicit text. |

## Aggregate producer scores

- `data_visualization_engineer`: **9 / 10**. YES planning is topology-specific, symbolically honest, numerically complete, and careful about external alignment versus consistency. Deductions are limited to generic directed contingencies on NO records.
- `visual_implementer`: **9 / 10**. Six figures are faithful and responsive. The result-comparison layout failure in `ppa_evidence_p2` is severe for one paragraph because key WVS text is visibly collapsed at both tested widths.

## Consolidated actionable findings

1. Repair `RESULT_COMPARISON` so long value labels cannot collapse the label/detail column; verify the WVS row at 1440 and 390 px.
2. Replace directed `then` maps in prose-only contingencies with non-directional evidence/scope structures.
