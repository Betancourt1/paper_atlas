# Blind VISUAL_QA — Inkling: Reading the Model Card Across Checkpoints and Claims

Revision reviewed: current revision 18 fixture, manifest, renderer, and fresh 1440×1000 plus 390×844 Chromium renders. Prior QA reports, coordinator prompts, git history, and thresholds were not consulted.

Verdict: PASS. Minimum paragraph score: 9/10 in both independent passes. No blocking visual, evidence, provenance, or responsive-fit defect found.

## Paragraph scores

| Paragraph | Pass A: evidence fidelity | Pass B: rendered communication | Specific evidence |
|---|---:|---:|---|
| ink_why_p1 | 9/10 | 9/10 | States “The release frames Inkling as a broad base model for customization rather than a model optimized to lead every benchmark. Its inte…” Claims: ink_005; sources: source_inkling_model_card, source_inkling_release. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_why_p2 | 9/10 | 9/10 | States “That positioning matters because the provider explicitly says Inkling is not the strongest model overall. The proposed value is th…” Claims: ink_005; sources: source_inkling_model_card, source_inkling_release. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_change_p1 | 9/10 | 9/10 | States “Inkling combines a large sparse model with native text, image, and audio input and makes the weights available in original and qua…” Claims: ink_001, ink_002, ink_003, ink_005, ink_008; sources: source_inkling_model_card, source_inkling_release, source_inkling_aup. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_change_p2 | 9/10 | 9/10 | States “The release also exposes an effort control intended to trade generated tokens for performance. This is a product and training clai…” Claims: ink_001, ink_002, ink_003, ink_005, ink_008; sources: source_inkling_model_card, source_inkling_release, source_inkling_aup. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_mechanism_p1 | 10/10 | 10/10 | States “Inkling is a decoder-only autoregressive Transformer with 66 layers. Its feed-forward backbone is a sparse mixture of experts: eac…” Claims: ink_002, ink_003, ink_006; sources: source_inkling_model_card, source_inkling_release. Rendered beside visual_inkling_sparse_routing_field (SVG; source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16). |
| ink_mechanism_p2 | 9/10 | 9/10 | States “The release says local and global attention layers are interleaved at a 5-to-1 ratio with 8 key-value heads. Images and audio are …” Claims: ink_002, ink_003, ink_006; sources: source_inkling_model_card, source_inkling_release. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_mechanism_p3 | 9/10 | 9/10 | States “The provider reports pretraining on 45 trillion tokens across text, images, audio, and video, followed by synthetic supervised fin…” Claims: ink_002, ink_003, ink_006; sources: source_inkling_model_card, source_inkling_release. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_example_p1 | 9/10 | 9/10 | States “Start by choosing a checkpoint, not by reading the phrase open weights as a hardware promise. In the content-addressed model-card …” Claims: ink_004, ink_012; sources: source_inkling_model_card, source_inkling_hf_bf16, source_inkling_hf_nvfp4. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_example_p2 | 9/10 | 9/10 | States “The quantized option reduces memory requirements, but the release does not identify the precision behind the main benchmark table …” Claims: ink_004, ink_012; sources: source_inkling_model_card, source_inkling_hf_bf16, source_inkling_hf_nvfp4. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_evidence_p1 | 9/10 | 9/10 | States “In the content-addressed provider-page retrievals from 2026-07-18, the main benchmark table reports Inkling at effort 0.99. Select…” Claims: ink_007, ink_008, ink_009, ink_011; sources: source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_evidence_p2 | 9/10 | 9/10 | States “The release states that the benchmark runs use temperature 1.0 and that coding evaluations allow trajectories up to 256K tokens. S…” Claims: ink_007, ink_008, ink_009, ink_011; sources: source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_evidence_p3 | 9/10 | 9/10 | States “The effort-sweep chart supports the narrower provider interpretation that performance can be traded against generated tokens. Its …” Claims: ink_007, ink_008, ink_009, ink_011; sources: source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_limitations_p1 | 9/10 | 9/10 | States “The provider says Inkling can hallucinate, fail to follow instructions, degrade in long multi-turn conversations, reproduce demogr…” Claims: ink_003, ink_009, ink_010, ink_011, ink_012; sources: source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16, source_inkling_aup. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_limitations_p2 | 9/10 | 9/10 | States “The one-million-token statement describes supported capacity, not demonstrated accuracy throughout that window. Tinker currently e…” Claims: ink_003, ink_009, ink_010, ink_011, ink_012; sources: source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16, source_inkling_aup. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_limitations_p3 | 9/10 | 9/10 | States “Training disclosure remains high level. The sources give broad categories and a 45-trillion-token release claim but not the datase…” Claims: ink_003, ink_009, ink_010, ink_011, ink_012; sources: source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16, source_inkling_aup. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_limitations_p4 | 9/10 | 9/10 | States “The model card, release page, and Acceptable Use Policy remain mutable live pages, but the exact official HTML retrieved on 2026-0…” Claims: ink_003, ink_009, ink_010, ink_011, ink_012; sources: source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16, source_inkling_aup. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_review_p1 | 9/10 | 9/10 | States “The release supports a strong descriptive conclusion: Inkling is a very large sparse multimodal model with downloadable checkpoint…” Claims: ink_001, ink_005, ink_011, ink_012; sources: source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16, source_inkling_aup. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_review_p2 | 9/10 | 9/10 | States “Source boundaries are part of the evidence. The content-addressed website snapshot and initial checkpoint cards disagree on a few …” Claims: ink_001, ink_005, ink_011, ink_012; sources: source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16, source_inkling_aup. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |
| ink_review_p3 | 9/10 | 9/10 | States “The provider labels the model Apache 2.0, but its linked Model Acceptable Use Policy says that accessing or using the model materi…” Claims: ink_001, ink_005, ink_011, ink_012; sources: source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16, source_inkling_aup. Prose-only is appropriate; no separate complexity warrant exists and no stock graphic was inserted. |

## Visual and source-figure audit

| Visual | Placement | Medium | Source/provenance evidence | Responsive result |
|---|---|---|---|---|
| visual_inkling_sparse_routing_field | ink_mechanism_p1 | SVG | Custom SVG grounded in source_inkling_model_card, source_inkling_release, source_inkling_hf_bf16; manifest source-figure audit inspected. | Fits at desktop and 390px; no internal/page scrollbar, clipping, or ratio distortion. |

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

