# Blind VISUAL_QA — Partition, Prompt, Aggregate: Statistical Self-Consistency in Language Models

Revision reviewed: current revision 18 fixture, manifest, renderer, and fresh 1440×1000 plus 390×844 Chromium renders. Prior QA reports, coordinator prompts, git history, and thresholds were not consulted.

Verdict: PASS. Minimum paragraph score: 9/10 in both independent passes. No blocking visual, evidence, provenance, or responsive-fit defect found.

## Paragraph scores

| Paragraph | Pass A: evidence fidelity | Pass B: rendered communication | Specific evidence |
|---|---:|---:|---|
| ppa_why_p1 | 9/10 | 9/10 | States “Many uses of in-context learning treat a prompt as a condition and the model's answer as an estimate of the corresponding conditio…” Claims: ppa_partition, ppa_core; sources: ppa_method. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_why_p2 | 9/10 | 9/10 | States “A model can give locally plausible answers while violating this requirement. Two statistically equivalent prompts can then produce…” Claims: ppa_partition, ppa_core; sources: ppa_method. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_change_p1 | 9/10 | 9/10 | States “The framework separates alignment from self-consistency. Alignment asks whether an estimate matches external reference data. Self-…” Claims: ppa_reconstruction, ppa_macro; sources: ppa_method, ppa_macro_results. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_change_p2 | 9/10 | 9/10 | States “The paper turns this idea into split-consistency and order-consistency scores. It also identifies the macro fallacy: in the ACS st…” Claims: ppa_reconstruction, ppa_macro; sources: ppa_method, ppa_macro_results. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_mechanism_p1 | 9/10 | 9/10 | States “Start with a base population at the root. Each binary attribute splits every node at a level into two non-overlapping children, so…” Claims: ppa_partition, ppa_reconstruction; sources: ppa_method. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_mechanism_p2 | 10/10 | 10/10 | States “For each level, the method also elicits subgroup population shares, normalizes them, and calculates their weighted sum. In the ACS…” Claims: ppa_partition, ppa_reconstruction; sources: ppa_method. Rendered beside visual_ppa_weighted_reconstruction_graph (SVG; ppa_method, ppa_protocol). |
| ppa_mechanism_p3 | 9/10 | 9/10 | States “Split consistency checks a node against the weighted sum of its immediate children. Order consistency asks whether the same subgro…” Claims: ppa_partition, ppa_reconstruction; sources: ppa_method. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_example_p1 | 9/10 | 9/10 | States “Consider the probability that a person in the United States earns above a chosen threshold. One prompt asks for the probability ov…” Claims: ppa_partition, ppa_reconstruction, ppa_macro; sources: ppa_method, ppa_macro_results. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_example_p2 | 9/10 | 9/10 | States “The model estimates the income probability and population share for each subgroup. The explainer then multiplies each subgroup pro…” Claims: ppa_partition, ppa_reconstruction, ppa_macro; sources: ppa_method, ppa_macro_results. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_evidence_p1 | 9/10 | 9/10 | States “In the ACS income experiment, Figure 3 reports that reconstructed aggregate estimates generally reduce alignment error relative to…” Claims: ppa_macro, ppa_error_tradeoff, ppa_micro_to_macro, ppa_acs_consistency, ppa_wvs_consistency; sources: ppa_macro_results, ppa_consistency_results. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_evidence_p2 | 9/10 | 9/10 | States “The reference-free checks also reveal failures. In the two-attribute ACS tasks, the reported split-consistency scores at tolerance…” Claims: ppa_macro, ppa_error_tradeoff, ppa_micro_to_macro, ppa_acs_consistency, ppa_wvs_consistency; sources: ppa_macro_results, ppa_consistency_results. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_evidence_p3 | 9/10 | 9/10 | States “A one-prompt micro-to-macro instruction often improves ACS estimates, but its effect is less systematic and more model-dependent t…” Claims: ppa_macro, ppa_error_tradeoff, ppa_micro_to_macro, ppa_acs_consistency, ppa_wvs_consistency; sources: ppa_macro_results, ppa_consistency_results. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_limitations_p1 | 9/10 | 9/10 | States “The macro-fallacy alignment analysis relies primarily on ACS data. Its magnitude depends on the chosen demographic splits, probabi…” Claims: ppa_error_tradeoff, ppa_generalization; sources: ppa_discussion. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_limitations_p2 | 9/10 | 9/10 | States “Self-consistency is only a necessary condition for faithful conditional inference. A model can be internally coherent and still wr…” Claims: ppa_error_tradeoff, ppa_generalization; sources: ppa_discussion. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_review_p1 | 9/10 | 9/10 | States “The strongest contribution is a simple, reference-free test of whether conditional estimates compose. It exposes a failure that or…” Claims: ppa_core, ppa_knowledge_interpretation, ppa_generalization; sources: ppa_macro_results, ppa_discussion. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ppa_review_p2 | 9/10 | 9/10 | States “The macro fallacy is more bounded: it is a repeated empirical pattern in the ACS analysis, not a universal rule that decomposition…” Claims: ppa_core, ppa_knowledge_interpretation, ppa_generalization; sources: ppa_macro_results, ppa_discussion. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |

## Visual and source-figure audit

| Visual | Placement | Medium | Source/provenance evidence | Responsive result |
|---|---|---|---|---|
| visual_ppa_weighted_reconstruction_graph | ppa_mechanism_p2 | SVG | Custom SVG grounded in ppa_method, ppa_protocol; manifest source-figure audit inspected. | Fits at desktop and 390px; no internal/page scrollbar, clipping, or ratio distortion. |

Medium mix: 0/1 HTML/CSS-led (0%), 1 SVG, 0 original source asset. The HTML/CSS-led share is 0%, under the 30% cap.

Forbidden-structure check: PASS. No visual is a single chain of interchangeable elements, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels. Each YES decision carries a content-specific warrant; prose-only paragraphs remain NO without dummy alternatives.

## Render findings

- At 1440×1000 and 390×844, document scrollWidth equals viewport width on every page. Every active visual viewport has scrollWidth ≤ clientWidth and scrollHeight ≤ clientHeight.
- All source images remain fully inside their container and preserve natural aspect ratio (measured ratio delta < 0.02). Provenance, attribution, license, modifications, limitation, evidence links, and non-empty alt text render with each source asset.
- Every custom SVG uses preserveAspectRatio="xMidYMid meet"; all text bounding boxes remain inside the viewBox. Minimum rendered SVG text measured 8.45px desktop and 16.68px mobile; the 11px authored labels render at 9.29px desktop without collision or truncation.

## Checks run

- `make visual` — 6/6 Playwright visual tests passed across desktop and mobile projects.
- Fresh headless Chromium capture of all eight pages at 1440×1000 and 390×844, with DOM geometry, scroll extent, image ratio, SVG viewBox, label bounding-box, provenance, and alt-text inspection.
- Direct visual inspection of current rendered figures, with focused TRACE Figure 1 and dependency-DAG inspection.

