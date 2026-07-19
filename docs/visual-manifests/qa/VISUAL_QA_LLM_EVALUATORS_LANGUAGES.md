# VISUAL_QA — LLM Evaluators across Languages

Independent review of `VISUAL_MANIFEST_LLM_EVALUATORS_LANGUAGES.md`, `llm-evaluators-languages.json`, and the visual implementation in `0c7c6d3`. All 16 prose paragraph IDs are scored.

## Aggregate scores

- `data_visualization_engineer`: **8/10**
- `visual_implementer`: **6/10**
- Engineer distribution: 8×2, 9×14
- Implementer distribution: 3×3, 5×2, 8×2, 9×5, 10×4

The engineer finds the paper's most important distinction—pairwise ordering versus pointwise calibration—and proposes useful threshold and score-decomposition visuals. The implementation succeeds for those conceptual mechanisms, but the worked examples are flattened into eight unrelated lanes and the shared evidence matrix silently drops six numeric `value` fields from the visible table. The hidden fallback and table `aria-label` retain those numbers for assistive technology, but sighted readers do not receive the claimed quantitative visual.

Rendered verification: both configured Playwright viewports visited the page, confirmed figure placement, evidence and limitations, form diversity, and no document-level overflow. The in-app browser was unavailable, so paper-specific screenshot inspection was not possible; responsive scores use the rendered DOM checks and CSS. This is not publication approval.

## Paragraph scores

| Paragraph | Decision / delivered visual | Engineer | Implementer | Concrete evidence and actionable finding |
|---|---|---:|---:|---|
| `language_why_p1` | YES / shared `language_visual_evaluation_modes` after `language_why_p2` | 9 | 9 | The cancellation of a common language offset under pairwise comparison is the central blind spot and merits a comparison. The pairwise card states that cancellation precisely and does not invent coordinates. |
| `language_why_p2` | YES / shared `language_visual_evaluation_modes` after this paragraph | 9 | 9 | Pointwise thresholds and scalar reward use are distinct downstream modes and the three-card comparison makes the assumption failure explicit. Limitations correctly avoid claiming production systems use one policy. |
| `language_change_p1` | YES / shared `language_visual_study_design` after `language_change_p2` | 9 | 8 | Aligned content, 23 languages, eight evaluators, and pointwise distributions form a useful study-design sequence. The delivered operation diagram combines this with later analyses but does not show the four benchmark families named here; add them or narrow the record. |
| `language_change_p2` | YES / shared `language_visual_study_design` after this paragraph | 9 | 9 | The five stages preserve prevalence, thresholds, uncertainty, and residual-language analysis without claiming causality. Static ordered markup and limitations are appropriate. |
| `language_mechanism_p1` | YES / shared `language_visual_pairwise_threshold` after `language_mechanism_p2` | 9 | 9 | The parallel view directly shows within-language cancellation versus across-language score shifts and avoids invented distributions. It is a strong source-bounded schematic. |
| `language_mechanism_p2` | YES / shared `language_visual_pairwise_threshold` after this paragraph | 9 | 9 | The third lane adds the shared threshold and states the acceptance consequence while preserving that the threshold is analytical, not necessarily deployed. |
| `language_mechanism_p3` | YES / `language_visual_score_decomposition` after this paragraph | 8 | 8 | A decomposition is helpful, but the manifest and delivered operation path can be misread causally. The figure's limitations correctly call components statistical rather than causal; visually separate the nested-regression test from the additive score terms instead of making it another sequential operation. |
| `language_example_p1` | YES / shared `language_visual_threshold_failures` after `language_example_p2` | 9 | 5 | The 93/87 pairwise figures, 23/67 acceptance rates, rounded 44-point example, and separate 43-point aggregate maximum need careful grouping. `ParallelView` renders each item as a separate numbered lane, flattening two paired metrics and the separate aggregate into one sequence. Group by example and comparison to prevent false equivalence. |
| `language_example_p2` | YES / shared `language_visual_threshold_failures` after this paragraph | 8 | 5 | The code-switch route is an ordered 44% classification → threshold choice → 50%/75% consequence, but the same eight-lane renderer mixes it with the English/Ukrainian example. Use two clearly bounded panels and an actual routing arrow, retaining the constructed-not-deployed limitation. |
| `language_evidence_p1` | YES / shared `language_visual_evidence_matrix` after `language_evidence_p3` | 9 | 3 | The evidence matrix is appropriate, but the renderer ignores `VisualItem.value`. Visible cells omit 8, −0.58, and −0.81 because their detail strings do not repeat those values. The numbers survive only in the hidden fallback/ARIA label. Render the value column explicitly. |
| `language_evidence_p2` | YES / shared `language_visual_evidence_matrix` after `language_evidence_p3` | 9 | 3 | The visible table omits the `34` value for the gap above 95% pairwise accuracy, while detail-only rows retain 19.6/14.0 and 32.7/29.7. This creates inconsistent source fidelity across rows. Add a semantic reported-value column and label each condition. |
| `language_evidence_p3` | YES / shared `language_visual_evidence_matrix` after this paragraph | 9 | 3 | The visible table omits the 33.4 before-correction and 11.6 after-correction values; only the 60.9% reduction remains in detail. Since the paragraph's main result is the change in those quantities, the delivered sighted visual fails its explanatory job despite accessible hidden fallback. |
| `language_limitations_p1` | NO / prose only | 9 | 10 | Translation, authorship, culture, and resource-proxy confounds are distinct scope qualifications. No figure is attached. |
| `language_limitations_p2` | NO / prose only | 9 | 10 | Causality, deployed safety, limited judge splits, and production policies are explicit boundaries, not a common topology. Prose-only is correct. |
| `language_review_p1` | NO / prose only | 9 | 10 | The measurement warning synthesizes prior visuals and does not need repetition. No figure is attached. |
| `language_review_p2` | NO / prose only | 9 | 10 | Centering requirements and residual limitations read clearly as a bounded conclusion. No figure is attached. |

## Cross-paper findings for this paper

1. `EvidenceMatrix` must render numeric `VisualItem.value` fields. Six source-backed values are absent from the visible table, including both correlations and both before/after mitigation gaps.
2. The threshold-failures figure has two different examples and a separate aggregate maximum, but `ParallelView` presents all eight records as equivalent lanes. The chosen grammar does not preserve grouping topology.
3. The conceptual visuals are otherwise strong: they avoid invented distributions, state the statistical-versus-causal boundary, preserve source links and fallback, and remain static under reduced motion.
4. Implementation records should not claim treatment-A fidelity with `NONE` deviations when an operation path or lane set replaces the manifest's paragraph-specific relation graph.

This report scores the candidate only and does not approve publication.
