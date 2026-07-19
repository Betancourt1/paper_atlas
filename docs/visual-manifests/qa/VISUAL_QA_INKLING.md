# Blind visual QA — Inkling: Reading the Model Card Across Checkpoints and Claims

- Fixture: `packages/test-fixtures/explainers/inkling.json`
- Manifest revision reviewed: `9`
- Paragraphs scored: `19`
- Engineer decision/proposal average: `9.00/10`
- Implemented visual quality average: `9.00/10`
- Minimum paragraph score: `9/10`

## Independent assessment

The single SVG is a focused aggregate routing view. It distinguishes selected, inactive, and always-active capacity without drawing hundreds of decorative expert marks or reducing the idea to a metric-card inventory.

- Desktop and 390px legibility: original files render at intrinsic pixel width, so labels are not downscaled into illegibility. The tradeoff is figure-local horizontal travel; tall originals also expand the document substantially.
- Keyboard, focus, and scroll: every source viewport is a named focusable region with a visible 3px focus outline and native ArrowRight scrolling. SVG containers are focusable and become 680px-wide local scrollers at mobile width.
- Document overflow: focused Playwright checks confirmed figure overflow stays local and the document itself does not exceed the viewport at desktop or mobile width.
- Provenance: source visuals expose locator, attribution, linked license, modifications, claim links, source locators, specific alt text, and an equivalent hidden-text fallback.
- Paragraph match: source figures and SVGs are placed immediately after their target paragraphs. Shared placements are credited only where the same figure genuinely serves both adjacent paragraphs.
- Forbidden structures: no custom implementation reduces to a single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels. Original figures are retained as evidence rather than cosmetically redrawn.
- Repetition burden: None: one visual appears once.
- Multi-image sets: No source-asset set is used.
- HTML/CSS-led share: `0/1 (0%)`. The implemented primary media are 0 source assets and 1 SVG; CSS supplies presentation and scrolling, not the visual explanation itself.

## Paragraph scores

| Paragraph | Engineer decision / proposal | Rationale | Implemented quality | Rationale |
|---|---:|---|---:|---|
| `ink_why_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The release frames Inkling as a broad base model for customization rather than a model optimized to lead every benchmark. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_why_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. That positioning matters because the provider explicitly says Inkling is not the strongest model overall. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_change_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Inkling combines a large sparse model with native text, image, and audio input and makes the weights available in original and quantized forms. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_change_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The release also exposes an effort control intended to trade generated tokens for performance. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_mechanism_p1` | 9/10 | The relational proposal matches the paragraph's reconstructive job. Inkling is a decoder-only autoregressive Transformer with 66 layers. | 9/10 | The SVG exposes the warranted relationships, remains keyboard-scrollable at 390px, and avoids prohibited stock structures. |
| `ink_mechanism_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The release says local and global attention layers are interleaved at a 5-to-1 ratio with 8 key-value heads. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_mechanism_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The provider reports pretraining on 45 trillion tokens across text, images, audio, and video, followed by synthetic supervised fine-tuning and large-… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_example_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Start by choosing a checkpoint, not by reading the phrase open weights as a hardware promise. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_example_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The quantized option reduces memory requirements, but the release does not identify the precision behind the main benchmark table or provide a BF16-v… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_evidence_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. In the content-addressed provider-page retrievals from 2026-07-18, the main benchmark table reports Inkling at effort 0.99. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_evidence_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The release states that the benchmark runs use temperature 1.0 and that coding evaluations allow trajectories up to 256K tokens. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_evidence_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The effort-sweep chart supports the narrower provider interpretation that performance can be traded against generated tokens. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_limitations_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The provider says Inkling can hallucinate, fail to follow instructions, degrade in long multi-turn conversations, reproduce demographic or cultural b… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_limitations_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The one-million-token statement describes supported capacity, not demonstrated accuracy throughout that window. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_limitations_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Training disclosure remains high level. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_limitations_p4` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The model card, release page, and Acceptable Use Policy remain mutable live pages, but the exact official HTML retrieved on 2026-07-18 is content-add… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_review_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The release supports a strong descriptive conclusion: Inkling is a very large sparse multimodal model with downloadable checkpoints and broad vendor-… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_review_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Source boundaries are part of the evidence. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ink_review_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The provider labels the model Apache 2.0, but its linked Model Acceptable Use Policy says that accessing or using the model materials is also conditi… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |

## Findings

1. The single SVG is a focused aggregate routing view. It distinguishes selected, inactive, and always-active capacity without drawing hundreds of decorative expert marks or reducing the idea to a metric-card inventory.
2. The revision-9 intrinsic-width viewport solves source-label legibility and document-overflow containment, but it does not by itself solve inspection effort or repeated-source pacing.
3. Focus, keyboard scrolling, provenance, fallbacks, and paragraph placement are consistently implemented and verified in the rendered interface.

## Focused checks

- `pnpm --filter @paper-atlas/web test -- explainer-visual.test.tsx papers.test.ts` — passed (2 files, 8 tests).
- `pnpm --filter @paper-atlas/web test:visual` — passed (6 Playwright tests across desktop Chromium and 390px mobile Chromium).
- Direct renderer/CSS inspection — source images retain natural dimensions; multi-image sets use a max-content flex row; all overflow is contained in figure-local regions.
