# Blind visual QA — Pretraining Data Can Be Poisoned through Computational Propaganda

- Fixture: `packages/test-fixtures/explainers/computational-propaganda.json`
- Manifest revision reviewed: `9`
- Paragraphs scored: `16`
- Engineer decision/proposal average: `8.88/10`
- Implemented visual quality average: `8.88/10`
- Minimum paragraph score: `8/10`

## Independent assessment

Two original figures and one custom conditional tree form a restrained visual set. The originals remain inspectable at source scale, and the SVG makes the changing denominators and source discrepancy easier to understand without collapsing into a stock pipeline.

- Desktop and 390px legibility: original files render at intrinsic pixel width, so labels are not downscaled into illegibility. The tradeoff is figure-local horizontal travel; tall originals also expand the document substantially.
- Keyboard, focus, and scroll: every source viewport is a named focusable region with a visible 3px focus outline and native ArrowRight scrolling. SVG containers are focusable and become 680px-wide local scrollers at mobile width.
- Document overflow: focused Playwright checks confirmed figure overflow stays local and the document itself does not exceed the viewport at desktop or mobile width.
- Provenance: source visuals expose locator, attribution, linked license, modifications, claim links, source locators, specific alt text, and an equivalent hidden-text fallback.
- Paragraph match: source figures and SVGs are placed immediately after their target paragraphs. Shared placements are credited only where the same figure genuinely serves both adjacent paragraphs.
- Forbidden structures: no custom implementation reduces to a single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels. Original figures are retained as evidence rather than cosmetically redrawn.
- Repetition burden: Low: no original asset is repeated, and the three visuals perform distinct explanatory jobs.
- Multi-image sets: No multi-image source set is used.
- HTML/CSS-led share: `0/3 (0%)`. The implemented primary media are 2 source assets and 1 SVG; CSS supplies presentation and scrolling, not the visual explanation itself.

## Paragraph scores

| Paragraph | Engineer decision / proposal | Rationale | Implemented quality | Rationale |
|---|---:|---|---:|---|
| `propaganda_why_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Pretraining corpora contain more web text than people can inspect. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_why_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Earlier demonstrations often targeted known sources or assumed access to the victim's data pipeline. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_change_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. HalfLife replaces the binary question 'can content be posted?' with an end-to-end inclusion model. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_change_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. That decomposition can reject superficially plausible vectors. | 8/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `propaganda_mechanism_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. HalfLife defines three gates. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_mechanism_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The paper estimates the conditional probability at each gate using sampled crawl data and sandboxed replacements, then combines the stages into a doc… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_mechanism_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Corpus inclusion is still only an intermediate outcome. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_example_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Start with a page identified as having a comment interface. | 8/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `propaganda_example_p2` | 9/10 | The relational proposal matches the paragraph's reconstructive job. The resulting documents then pass through Dolma 3-style heuristic, English-language, quality, and deduplication filters. | 9/10 | The SVG exposes the warranted relationships, remains keyboard-scrollable at 390px, and avoids prohibited stock structures. |
| `propaganda_evidence_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The inclusion analysis scans 181,857 pages from 200 WARC files in Common Crawl CC-MAIN-2025-51. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_evidence_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. For model effects, the authors pretrain OLMo-3-like models from 65M to 1.3B parameters with controlled poison token rates of 0.001%, 0.01%, or 0.1%. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_evidence_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Clean supervised fine-tuning reduces the measured effect: at 0.1% poison, post-SFT shifts range from 0.9 to 7.4 points. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_limitations_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Common Crawl is a proxy for production collection, and the tested curation path is one open Dolma 3-style pipeline. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_limitations_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The authors avoid live injection and validate the vector in sandboxes. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_review_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The paper supports treating third-party page fragments as a real data-provenance concern. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `propaganda_review_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The phrase 'can be poisoned at scale' should remain bounded by the threat model. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |

## Findings

1. Two original figures and one custom conditional tree form a restrained visual set. The originals remain inspectable at source scale, and the SVG makes the changing denominators and source discrepancy easier to understand without collapsing into a stock pipeline.
2. The revision-9 intrinsic-width viewport solves source-label legibility and document-overflow containment, but it does not by itself solve inspection effort or repeated-source pacing.
3. Focus, keyboard scrolling, provenance, fallbacks, and paragraph placement are consistently implemented and verified in the rendered interface.

## Focused checks

- `pnpm --filter @paper-atlas/web test -- explainer-visual.test.tsx papers.test.ts` — passed (2 files, 8 tests).
- `pnpm --filter @paper-atlas/web test:visual` — passed (6 Playwright tests across desktop Chromium and 390px mobile Chromium).
- Direct renderer/CSS inspection — source images retain natural dimensions; multi-image sets use a max-content flex row; all overflow is contained in figure-local regions.
