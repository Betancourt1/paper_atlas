# Blind VISUAL_QA — SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration

Revision reviewed: current revision 18 fixture, manifest, renderer, and fresh 1440×1000 plus 390×844 Chromium renders. Prior QA reports, coordinator prompts, git history, and thresholds were not consulted.

Verdict: PASS. Minimum paragraph score: 9/10 in both independent passes. No blocking visual, evidence, provenance, or responsive-fit defect found.

## Paragraph scores

| Paragraph | Pass A: evidence fidelity | Pass B: rendered communication | Specific evidence |
|---|---:|---:|---|
| sos_why_p1 | 9/10 | 9/10 | States “A long-horizon research task requires more than issuing good queries. The system must remember which entities and attributes are c…” Claims: sos_core, sos_socm; sources: sos_formulation_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_why_p2 | 9/10 | 9/10 | States “Conventional agents often keep this state in growing conversation histories. As evidence becomes buried, workers can duplicate eff…” Claims: sos_core, sos_socm; sources: sos_formulation_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_change_p1 | 9/10 | 9/10 | States “SearchOS converts a natural-language request into one or more related tables. Rows represent entities, columns represent requested…” Claims: sos_schema, sos_socm; sources: sos_formulation_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_change_p2 | 9/10 | 9/10 | States “The system then separates global coordination from local search. An orchestrator owns schema and task mutation, explore and search…” Claims: sos_schema, sos_socm; sources: sos_formulation_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_mechanism_p1 | 9/10 | 9/10 | States “Search-Oriented Context Management contains four linked stores. Frontier Task tracks dependency-aware work. The Evidence Graph sto…” Claims: sos_socm, sos_middleware, sos_scheduler; sources: sos_formulation_source, sos_middleware_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_mechanism_p2 | 10/10 | 10/10 | States “Before a model call, context middleware projects only the role-relevant portion of that state and adds selected skills. After brow…” Claims: sos_socm, sos_middleware, sos_scheduler; sources: sos_formulation_source, sos_middleware_source. Rendered beside visual_searchos_source_figure_2 (source asset; Figure 2, PDF page 4). |
| sos_mechanism_p3 | 10/10 | 10/10 | States “Sensor middleware measures changes in grounded coverage and evidence count, along with iteration, search, and time budgets. It can…” Claims: sos_socm, sos_middleware, sos_scheduler; sources: sos_formulation_source, sos_middleware_source. Rendered beside visual_searchos_source_figures_2_5 (source asset; Figure 5, PDF pages 12-13). |
| sos_example_p1 | 9/10 | 9/10 | States “Suppose a comparison request has a known company row but no verified value for one attribute. The Coverage Map marks that cell mis…” Claims: sos_schema, sos_middleware, sos_scheduler, sos_skills; sources: sos_formulation_source, sos_middleware_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_example_p2 | 9/10 | 9/10 | States “A page visit alone does not fill the cell. Evidence middleware must extract a candidate value, bind it to the correct row and attr…” Claims: sos_schema, sos_middleware, sos_scheduler, sos_skills; sources: sos_formulation_source, sos_middleware_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_evidence_p1 | 9/10 | 9/10 | States “On WideSearch, SearchOS reports 80.3 item F1 and 56.5 row F1, compared with 76.0 and 54.5 for the strongest baseline on each metri…” Claims: sos_main_results, sos_schedule_ablation, sos_skill_ablation; sources: sos_results_source, sos_ablations_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_evidence_p2 | 9/10 | 9/10 | States “A paired scheduling study on 10 WideSearch cases reports that continuous dispatch reduces average runtime from 629.13 to 476.34 se…” Claims: sos_main_results, sos_schedule_ablation, sos_skill_ablation; sources: sos_results_source, sos_ablations_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_evidence_p3 | 9/10 | 9/10 | States “A joint removal of all hierarchical skill layers lowers item F1 from 80.3 to 78.3 and row F1 from 56.5 to 53.1. The same study rep…” Claims: sos_main_results, sos_schedule_ablation, sos_skill_ablation; sources: sos_results_source, sos_ablations_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_limitations_p1 | 9/10 | 9/10 | States “The main evaluation uses GLM-5 for agent roles, Qwen3.5-35B-A3B for evidence extraction, and reports the best of three runs for ea…” Claims: sos_citation_truth, sos_budget_fairness, sos_middleware_causality, sos_schema_fit_inference, sos_generality; sources: sos_middleware_source, sos_results_source, sos_ablations_source, sos_scope_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_limitations_p2 | 9/10 | 9/10 | States “A URL and anchored excerpt preserve provenance but do not independently prove that the extracted value is true. Citation correctne…” Claims: sos_citation_truth, sos_budget_fairness, sos_middleware_causality, sos_schema_fit_inference, sos_generality; sources: sos_middleware_source, sos_results_source, sos_ablations_source, sos_scope_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_limitations_p3 | 9/10 | 9/10 | States “The authors scope V1 to externalized search state and leave large-scale skill synthesis, broader domains, multimodal search, and i…” Claims: sos_citation_truth, sos_budget_fairness, sos_middleware_causality, sos_schema_fit_inference, sos_generality; sources: sos_middleware_source, sos_results_source, sos_ablations_source, sos_scope_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_review_p1 | 9/10 | 9/10 | States “The paper provides bounded engineering evidence for making research state explicit. The schema, evidence gate, progress sensors, a…” Claims: sos_schedule_ablation, sos_skill_ablation, sos_explicit_state_interpretation, sos_middleware_causality, sos_recall_interpretation, sos_generality; sources: sos_results_source, sos_ablations_source, sos_scope_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| sos_review_p2 | 9/10 | 9/10 | States “The main benchmark comparison evaluates the complete system, so it cannot assign the overall gain to middleware, coverage-aware sc…” Claims: sos_schedule_ablation, sos_skill_ablation, sos_explicit_state_interpretation, sos_middleware_causality, sos_recall_interpretation, sos_generality; sources: sos_results_source, sos_ablations_source, sos_scope_source. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |

## Visual and source-figure audit

| Visual | Placement | Medium | Source/provenance evidence | Responsive result |
|---|---|---|---|---|
| visual_searchos_source_figure_2 | sos_mechanism_p2 | source asset | Figure 2, PDF page 4; Zhang et al., SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration (arXiv:2607.15257v1).; CC BY 4.0 | Fits at desktop and 390px; no internal/page scrollbar, clipping, or ratio distortion. |
| visual_searchos_source_figures_2_5 | sos_mechanism_p3 | source asset | Figure 5, PDF pages 12-13; Zhang et al., SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration (arXiv:2607.15257v1).; CC BY 4.0 | Fits at desktop and 390px; no internal/page scrollbar, clipping, or ratio distortion. |

Medium mix: 0/2 HTML/CSS-led (0%), 0 SVG, 2 original source asset. The HTML/CSS-led share is 0%, under the 30% cap.

Forbidden-structure check: PASS. No visual is a single chain of interchangeable elements, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels. Each YES decision carries a content-specific warrant; prose-only paragraphs remain NO without dummy alternatives.

## Render findings

- At 1440×1000 and 390×844, document scrollWidth equals viewport width on every page. Every active visual viewport has scrollWidth ≤ clientWidth and scrollHeight ≤ clientHeight.
- All source images remain fully inside their container and preserve natural aspect ratio (measured ratio delta < 0.02). Provenance, attribution, license, modifications, limitation, evidence links, and non-empty alt text render with each source asset.
- Every custom SVG uses preserveAspectRatio="xMidYMid meet"; all text bounding boxes remain inside the viewBox. Minimum rendered SVG text measured 8.45px desktop and 16.68px mobile; the 11px authored labels render at 9.29px desktop without collision or truncation.

## Checks run

- `make visual` — 6/6 Playwright visual tests passed across desktop and mobile projects.
- Fresh headless Chromium capture of all eight pages at 1440×1000 and 390×844, with DOM geometry, scroll extent, image ratio, SVG viewBox, label bounding-box, provenance, and alt-text inspection.
- Direct visual inspection of current rendered figures, with focused TRACE Figure 1 and dependency-DAG inspection.

