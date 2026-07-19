# Blind VISUAL_QA — TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents

Revision reviewed: current revision 18 fixture, manifest, renderer, and fresh 1440×1000 plus 390×844 Chromium renders. Prior QA reports, coordinator prompts, git history, and thresholds were not consulted.

Verdict: PASS. Minimum paragraph score: 9/10 in both independent passes. No blocking visual, evidence, provenance, or responsive-fit defect found.

## Paragraph scores

| Paragraph | Pass A: evidence fidelity | Pass B: rendered communication | Specific evidence |
|---|---:|---:|---|
| trace_why_p1 | 9/10 | 9/10 | States “A search agent may make dozens of dependent decisions before answering. A failed trajectory can contain useful searches and docume…” Claims: trace_claim_outcome_blind, trace_claim_credit; sources: trace_source_intro, trace_source_method. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_why_p2 | 9/10 | 9/10 | States “Process supervision can provide finer feedback, but commonly needs step labels, an LLM judge, a learned critic, or repeated rollou…” Claims: trace_claim_outcome_blind, trace_claim_credit; sources: trace_source_intro, trace_source_method. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_change_p1 | 10/10 | 10/10 | States “TRACE leaves final-answer verification in place but adds a trajectory-local signal at tool-call boundaries. Instead of treating ev…” Claims: trace_claim_credit, trace_claim_outcome_anchor, trace_claim_controlled_setup; sources: trace_source_method, trace_source_experiments. Rendered beside trace_visual_source_figure_1_change (source asset; Figure 1, PDF page 2). |
| trace_change_p2 | 9/10 | 9/10 | States “This is a change to credit assignment, not a new browser, backbone, training corpus, or final verifier. In the controlled comparis…” Claims: trace_claim_credit, trace_claim_outcome_anchor, trace_claim_controlled_setup; sources: trace_source_method, trace_source_experiments. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_mechanism_p1 | 9/10 | 9/10 | States “TRACE first splits a rollout after each tool action and returned observation. For every resulting prefix, a frozen copy of the ini…” Claims: trace_claim_prefix_probe, trace_claim_td, trace_claim_telescope, trace_claim_outcome_anchor; sources: trace_source_method. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_mechanism_p2 | 9/10 | 9/10 | States “The raw answer score is converted into a log-ratio value representing relative closure of the initial answer-likelihood gap. The d…” Claims: trace_claim_prefix_probe, trace_claim_td, trace_claim_telescope, trace_claim_outcome_anchor; sources: trace_source_method. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_mechanism_p3 | 10/10 | 10/10 | States “One-step credits telescope, so inserting redundant intermediate steps cannot increase their endpoint sum. The reported objective a…” Claims: trace_claim_prefix_probe, trace_claim_td, trace_claim_telescope, trace_claim_outcome_anchor; sources: trace_source_method. Rendered beside trace_visual_credit_dependency_dag (SVG; trace_source_method). |
| trace_example_p1 | 9/10 | 9/10 | States “Consider a trajectory that searches for a relevant source, opens a page containing decisive evidence, then follows an unrelated br…” Claims: trace_claim_prefix_probe, trace_claim_td, trace_claim_outcome_anchor; sources: trace_source_intro, trace_source_method. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_example_p2 | 9/10 | 9/10 | States “The useful search and page opening can receive positive local credit if they make the gold answer more predictable. The unrelated …” Claims: trace_claim_prefix_probe, trace_claim_td, trace_claim_outcome_anchor; sources: trace_source_intro, trace_source_method. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_evidence_p1 | 9/10 | 9/10 | States “The authors train Qwen3-4B-Thinking-2507 and Qwen3-30B-A3B-Thinking-2507 in the same ReAct-style search harness. The training ques…” Claims: trace_claim_controlled_setup, trace_claim_browsecomp_gain, trace_claim_grpo_gain, trace_claim_ablation; sources: trace_source_experiments, trace_source_results. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_evidence_p2 | 9/10 | 9/10 | States “On closed-web BrowseComp-Plus, TRACE moves the 4B base from 7.2 to 35.6 and the 30B-A3B base from 8.4 to 42.6. Relative to outcome…” Claims: trace_claim_controlled_setup, trace_claim_browsecomp_gain, trace_claim_grpo_gain, trace_claim_ablation; sources: trace_source_experiments, trace_source_results. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_evidence_p3 | 10/10 | 10/10 | States “In one 4B BrowseComp-Plus ablation, GRPO scores 30.0, raw log-probability delta 32.4, remaining-gap normalization 34.6, and log-ra…” Claims: trace_claim_controlled_setup, trace_claim_browsecomp_gain, trace_claim_grpo_gain, trace_claim_ablation; sources: trace_source_experiments, trace_source_results. Rendered beside trace_visual_source_figures_3_4 (source asset; Figures 3-4, PDF page 9). |
| trace_limitations_p1 | 9/10 | 9/10 | States “The experiments cover long-horizon search with short answers that can be compared with known ground truth. The authors explicitly …” Claims: trace_claim_scope, trace_claim_proxy_not_causal; sources: trace_source_results, trace_source_limitations. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_limitations_p2 | 9/10 | 9/10 | States “Only two related Qwen3 backbones and one interaction domain are evaluated. A higher frozen-model probability is evidence about tha…” Claims: trace_claim_scope, trace_claim_proxy_not_causal; sources: trace_source_results, trace_source_limitations. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_review_p1 | 9/10 | 9/10 | States “The controlled result supports a narrow conclusion: in the authors' search setup, adding their reference-model-based turn credit t…” Claims: trace_claim_credit, trace_claim_grpo_gain, trace_claim_scope, trace_claim_proxy_not_causal; sources: trace_source_method, trace_source_results, trace_source_limitations. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| trace_review_p2 | 9/10 | 9/10 | States “The paper does not establish a general solution to agent credit assignment. The proxy depends on a known answer, the central ablat…” Claims: trace_claim_credit, trace_claim_grpo_gain, trace_claim_scope, trace_claim_proxy_not_causal; sources: trace_source_method, trace_source_results, trace_source_limitations. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |

## Visual and source-figure audit

| Visual | Placement | Medium | Source/provenance evidence | Responsive result |
|---|---|---|---|---|
| trace_visual_source_figure_1_change | trace_change_p1 | source asset | Figure 1, PDF page 2; Tao et al., TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents (arXiv:2607.13988v1).; CC BY 4.0 | Fits at desktop and 390px; no internal/page scrollbar, clipping, or ratio distortion. |
| trace_visual_source_figures_3_4 | trace_evidence_p3 | source asset | Figures 3-4, PDF page 9; Tao et al., TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents (arXiv:2607.13988v1).; CC BY 4.0 | Fits at desktop and 390px; no internal/page scrollbar, clipping, or ratio distortion. |
| trace_visual_credit_dependency_dag | trace_mechanism_p3 | SVG | Custom SVG grounded in trace_source_method; manifest source-figure audit inspected. | Fits at desktop and 390px; no internal/page scrollbar, clipping, or ratio distortion. |

Medium mix: 0/3 HTML/CSS-led (0%), 1 SVG, 2 original source asset. The HTML/CSS-led share is 0%, under the 30% cap.

Forbidden-structure check: PASS. No visual is a single chain of interchangeable elements, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels. Each YES decision carries a content-specific warrant; prose-only paragraphs remain NO without dummy alternatives.

## Render findings

- At 1440×1000 and 390×844, document scrollWidth equals viewport width on every page. Every active visual viewport has scrollWidth ≤ clientWidth and scrollHeight ≤ clientHeight.
- All source images remain fully inside their container and preserve natural aspect ratio (measured ratio delta < 0.02). Provenance, attribution, license, modifications, limitation, evidence links, and non-empty alt text render with each source asset.
- Every custom SVG uses preserveAspectRatio="xMidYMid meet"; all text bounding boxes remain inside the viewBox. Minimum rendered SVG text measured 8.45px desktop and 16.68px mobile; the 11px authored labels render at 9.29px desktop without collision or truncation.
- TRACE Figure 1 mobile: three intact strips render at 316px wide with natural dimensions 2195×615, 2195×704, and 1064×1184. The documented y=0..550 / y=540..1179 crops retain an 11-source-pixel connector overlap; the full question/prefix, both Dublin and Lisbon branches, and the complete plot with x/y axes, minus ticks, Step label, and both trajectories are visible.
- TRACE learning-dynamics mobile assets retain complete 4B/30B Figure 3 panel pairs and complete Figure 4 axes/series. The dependency DAG retains all local arrows, look-ahead arcs, four outcome branches, and labels.

## Checks run

- `make visual` — 6/6 Playwright visual tests passed across desktop and mobile projects.
- Fresh headless Chromium capture of all eight pages at 1440×1000 and 390×844, with DOM geometry, scroll extent, image ratio, SVG viewBox, label bounding-box, provenance, and alt-text inspection.
- Direct visual inspection of current rendered figures, with focused TRACE Figure 1 and dependency-DAG inspection.

