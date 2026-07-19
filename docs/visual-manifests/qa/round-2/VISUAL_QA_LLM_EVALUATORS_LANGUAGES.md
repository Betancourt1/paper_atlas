# VISUAL_QA round 2 — LLM Evaluators Are Biased across Languages

- Manifest reviewed: `VISUAL_MANIFEST_LLM_EVALUATORS_LANGUAGES.md`, revision `3`
- Implementation reviewed: commit `8e27467`
- Explainer reviewed: `packages/test-fixtures/explainers/llm-evaluators-languages.json`
- Fresh render review: 6 figures at 1440 × 1000 and 390 × 844; no page-level horizontal overflow; all shared scopes and placements matched their paragraph records.
- Coverage: 16 / 16 paragraph IDs. Scores are independent 1–10 assessments; this report does not approve publication.

## Paragraph scores

| Paragraph | Engineer | Engineer evidence and actionable finding | Implementer | Implementer evidence and actionable finding |
| --- | ---: | --- | ---: | --- |
| `language_why_p1` | 10 | The shared `YES` decision is necessary to distinguish invariant pairwise ordering from absolute-score decisions. The three treatments keep ranking, threshold, scalar reward, and validation boundary separate. | 10 | `language_visual_evaluation_modes` is placed after `p2` as declared and clearly states why a common offset cancels for rank. Grouping, fallback, and mobile stacking are complete. |
| `language_why_p2` | 10 | The same shared plan covers threshold acceptance and scalar-reward magnitude without conflating the decision surfaces or claiming causality. | 10 | The method comparison visibly separates pointwise threshold and scalar reward, then states that pairwise accuracy does not certify a shared scale. No change is needed. |
| `language_change_p1` | 10 | The shared study-design `YES` preserves 23 aligned languages, four benchmark families, and 4+4 core evaluators before later calibration analyses. Alternatives and code are complete. | 10 | `language_visual_study_design` includes 23 languages, four data families, and 4+4 evaluators as visible values in a readable operation sequence. No change is needed. |
| `language_change_p2` | 10 | The plan adds prevalence, shared thresholds, two additional judges, uncertainty/language terms, and a causal boundary while retaining the aligned-content premise. | 10 | The same visual includes all later analyses, `2 additional judges`, and a final association-not-causation boundary. Shared placement and responsive order are correct. |
| `language_mechanism_p1` | 10 | The shared `YES` plan makes offset cancellation within a language and absolute-scale shift across languages visually distinct. It does not invent score magnitudes. | 10 | `language_visual_pairwise_threshold` separates within-language and cross-language panels and explicitly keeps the final outcome model non-causal. No change is needed. |
| `language_mechanism_p2` | 10 | The plan correctly adds the global-threshold effect and additive score components without claiming the schematic is fitted causal structure. | 10 | The visual shows the single global threshold acting on shifted distributions and keeps the additive model as a boundary card. Fallback and mobile behavior are complete. |
| `language_mechanism_p3` | 10 | `YES` appropriately separates semantic content, uncertainty proxies, language baseline, residual noise, nested regression, within-language regression, result, and causal limit. | 10 | `language_visual_score_decomposition` renders score terms and statistical tests in distinct groups, retains all alternative uncertainty proxies, and states the significance/causality boundary. No change is needed. |
| `language_example_p1` | 10 | The shared example plan preserves 93/23, 87/67, the rounded 44 pp worked gap, and the separate 43.0 pp aggregate maximum. | 10 | `language_visual_threshold_examples` displays every English/Ukrainian value and explicitly labels 44 pp as rounded and 43.0 pp as a separate aggregate. No change is needed. |
| `language_example_p2` | 10 | The same plan keeps the code-switch construction separate with 44% routing, 50% calibrated acceptance, 75% English-threshold acceptance, and a production boundary. | 10 | The visual uses a separate group for the constructed code-switch case and states it is not observed deployed exploitation. All values and fallback text are visible. |
| `language_evidence_p1` | 10 | The three-paragraph shared evidence matrix is justified and specifies 8/8 evaluator effects plus Pearson −0.58 and Spearman −0.81 with their resource-proxy condition. | 10 | `language_visual_evidence_matrix` visibly prints 8 of 8 and both correlations, with source links and a non-ranked-row limitation. Placement after `p3` matches the declared scope. |
| `language_evidence_p2` | 10 | The plan preserves 43.0, 23→67/44, 34.0, 19.6/14.0, and 32.7/29.7 as distinct benchmark/model conditions rather than one series. | 10 | Every result and condition appears in its own matrix row; the rounded example is not merged with the aggregate maximum. Horizontal containment and static accessibility are intact. |
| `language_evidence_p3` | 10 | The plan adds 33.4→11.6 and −60.9% while retaining the residual distribution/language-item limitation. | 10 | The correction row exposes before, after, and reported reduction together; interpretation and limitation text prevent a full-calibration claim. No change is needed. |
| `language_limitations_p1` | 9 | `NO` is correct for translated-data and Common-Crawl-proxy caveats. The generic contingency map can impose unsupported direction among independent confounds; use a flat boundary matrix if visualized. | 10 | No figure is attached, so no causal hierarchy is invented. The limitations remain prose-only and responsive. |
| `language_limitations_p2` | 9 | `NO` passes the removal test for causal, deployment, split, and threshold caveats. Remove directed `then` edges from the contingency map if retained. | 10 | No visual is attached; association, deployment, and coverage limits remain explicit prose. No change is needed. |
| `language_review_p1` | 9 | `NO` is appropriate because the measurement warning is already concise. The stock directed contingency is not content-specific enough; use a rank-versus-absolute boundary only if later needed. | 10 | No extra figure duplicates the earlier evaluation-mode comparison. The conclusion remains prose-only. |
| `language_review_p2` | 9 | `NO` correctly leaves the partial-mitigation warning in prose. The contingency map should be non-directional because identification, residual gap, and interaction limits are parallel constraints. | 10 | No visual is attached; the 11.6-point residual and intervention uncertainty remain text without an implied universal solution. |

## Aggregate producer scores

- `data_visualization_engineer`: **9 / 10**. Every YES scope is evidence-specific, numerically complete, and uses an appropriate comparison, sequence, or matrix. The only recurring weakness is the generic directed contingency supplied for otherwise-correct NO decisions.
- `visual_implementer`: **10 / 10**. All six figures preserve selected treatments, shared scopes, values, conditions, source fidelity, limitations, accessible static fallbacks, and responsive containment in the fresh desktop/mobile renders.

## Consolidated actionable finding

- Replace directed `then` maps in prose-only contingencies with non-directional scope/evidence structures; no implementation finding was observed in the rendered YES work.
