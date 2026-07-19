# Blind VISUAL_QA — Inkling: Reading the Model Card Across Checkpoints and Claims — round 6

## Scope and method

This is an independent, blind review of revision 6 using only the permitted manifest, explainer fixture, current relevant renderer/schema/checker/tests, directly linked evidence locators, and the rendered local route. No prior QA report, coordinator policy, publication threshold, or paper-explainer workflow material was consulted.

Rendered verification: `pnpm --filter @paper-atlas/web test:visual` completed with 4/4 Playwright tests passing across 1440×1000 desktop Chromium and 390×844 mobile Chromium. All 1 selected figure was also inspected directly at both sizes. Mobile SVGs use the declared contained 680 px horizontal canvas; the default left-edge view is not document clipping, and the scroller is keyboard-focusable.

## Aggregates

| Measure | Result |
| --- | ---: |
| Paragraphs scored twice | 19 |
| DVE minimum | 9/10 |
| DVE mean | 9.05/10 |
| DVE holistic aggregate | 9/10 |
| Implementer minimum | 9/10 |
| Implementer mean | 9.95/10 |
| Implementer holistic aggregate | 9/10 |
| Proposed prohibited treatments | 0/3 |
| Selected prohibited outputs | 0/1 |
| Prose-only decisions | 18/19 |

The holistic scores are independent judgments, not rounded paragraph means and not a publication recommendation.

## Medium ratios

- Proposed treatments: 0/3 HTML/CSS-led (0.00%). Declared primary media are SVG, generated asset, or JavaScript; none is declared HTML/CSS-led.
- Selected unique visual IDs: 0/1 HTML/CSS-led (0.00%). Every selected primary medium is SVG.
- Accessible equivalent prose is treated as fallback for the SVG primary medium and is not counted as HTML/CSS-led primary treatment.

## Actual rendered topology audit

| Visual | Placement | Actual topology | Prohibited form | Treatment/evidence check |
| --- | --- | --- | --- | --- |
| `visual_inkling_sparse_routing_field` | `ink_mechanism_p1` | partitioned routed pool plus shared bypass and recombination | No | One token activates sparse routed capacity plus shared experts |

No proposed treatment or rendered output matches a single interchangeable chain, item-plus-metric list, repeated same-metric cards, or repeated one-axis dot tracks/panels. Local sequential edges occur inside some graphs, but branching, convergence, feedback, shared constraints, or skip dependencies make the elements non-interchangeable.

## Paragraph-level scores

| Paragraph | Decision | DVE | DVE evidence | Implementer | Implementer evidence |
| --- | --- | ---: | --- | ---: | --- |
| `ink_why_p1` | NO | 9 | The fixture states “The release frames Inkling as a broad base model for customization rather than a model optimized to lead every benc…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_why_p2` | NO | 9 | The fixture states “That positioning matters because the provider explicitly says Inkling is not the strongest model overall. The propo…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_change_p1` | NO | 9 | The fixture states “Inkling combines a large sparse model with native text, image, and audio input and makes the weights available in o…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_change_p2` | NO | 9 | The fixture states “The release also exposes an effort control intended to trade generated tokens for performance. This is a product an…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_mechanism_p1` | YES | 10 | The paragraph has sparse hierarchy, exact routed/shared cardinalities, and recombination; the proposals use an aggregate partition, complete occupancy field, or containment hierarchy. | 9 | The rendered SVG explicitly partitions 256 routed experts into 6 selected and 250 inactive, keeps 2 shared experts on a separate always-active branch, and recombines the active branches into the 41B path; no sampled expert marks misstate cardinality. |
| `ink_mechanism_p2` | NO | 9 | The fixture states “The release says local and global attention layers are interleaved at a 5-to-1 ratio with 8 key-value heads. Images…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_mechanism_p3` | NO | 9 | The fixture states “The provider reports pretraining on 45 trillion tokens across text, images, audio, and video, followed by synthetic…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_example_p1` | NO | 9 | The fixture states “Start by choosing a checkpoint, not by reading the phrase open weights as a hardware promise. In the content-addres…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_example_p2` | NO | 9 | The fixture states “The quantized option reduces memory requirements, but the release does not identify the precision behind the main b…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_evidence_p1` | NO | 9 | The fixture states “In the content-addressed provider-page retrievals from 2026-07-18, the main benchmark table reports Inkling at effo…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_evidence_p2` | NO | 9 | The fixture states “The release states that the benchmark runs use temperature 1.0 and that coding evaluations allow trajectories up to…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_evidence_p3` | NO | 9 | The fixture states “The effort-sweep chart supports the narrower provider interpretation that performance can be traded against generat…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_limitations_p1` | NO | 9 | The fixture states “The provider says Inkling can hallucinate, fail to follow instructions, degrade in long multi-turn conversations, r…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_limitations_p2` | NO | 9 | The fixture states “The one-million-token statement describes supported capacity, not demonstrated accuracy throughout that window. Tin…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_limitations_p3` | NO | 9 | The fixture states “Training disclosure remains high level. The sources give broad categories and a 45-trillion-token release claim but…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_limitations_p4` | NO | 9 | The fixture states “The model card, release page, and Acceptable Use Policy remain mutable live pages, but the exact official HTML retr…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_review_p1` | NO | 9 | The fixture states “The release supports a strong descriptive conclusion: Inkling is a very large sparse multimodal model with download…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_review_p2` | NO | 9 | The fixture states “Source boundaries are part of the evidence. The content-addressed website snapshot and initial checkpoint cards dis…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |
| `ink_review_p3` | NO | 9 | The fixture states “The provider labels the model Apache 2.0, but its linked Model Acceptable Use Policy says that accessing or using t…” The manifest keeps this bounded claim prose-only, cites its claims/sources, and identifies that a visual would reduce to an unnecessary stock sequence, inventory, or value list. | 10 | No figure is rendered after this paragraph. The route-level count matches the manifest exactly, so the prose-only decision is faithfully implemented on desktop and mobile. |

## Evidence-fidelity notes

- `visual_inkling_sparse_routing_field`: Inkling is a 66-layer decoder-only sparse mixture-of-experts Transformer with 975 billion total parameters, 41 billion active parameters, 6 of 256 routed experts per token, and 2 shared experts. Source locators: source_inkling_model_card: Retrieved 2026-07-18; official HTML SHA-256 fe653ffb5f4b9f54f011491f60cd8d6b9885d667484880d4566d76827f22a7e9 (65,631 bytes). Sections 1-6: identity, architecture, modalities, hardware, training, evaluations, safety. Live URL remains mutable. source_inkling_release: Retrieved 2026-07-18; official HTML SHA-256 cb28c6a6c8c47c68f55f2c636481bf35a1b9f5a349e5f00148c583fafbc138fc (222,133 bytes). July 15 release sections on effort, multimodality, benchmarks, architecture, training, RL, availability. Live URL remains mutable. source_inkling_hf_bf16: Immutable initial Model release commit 91b051f1ec836e6d56596c624c3775b495d797b1; README sections 1, 3, 5-7 and BF16 weight files

The visible figure captions preserve the fixture interpretations and limitations, link to the cited claims and exact source locators, and provide equivalent text. No rendered mark was treated as a measured magnitude unless the fixture explicitly supplies that value.

## Findings

- Mobile figures intentionally require horizontal exploration. The direct captures show only the left portion at the initial scroll position, but Playwright verifies a 680 px SVG inside the viewport-contained, focusable scroller and no document-level horizontal overflow.
- Each SVG has a unique title and description, visible interpretation, visible limitation, visible evidence links, and equivalent fallback prose.
- All 18 NO paragraphs remain prose-only in the rendered route; no extra visual was inserted.
- This report makes no pass/fail recommendation against any hidden acceptance threshold.
