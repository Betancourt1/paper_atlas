# Blind visual QA — Partition, Prompt, Aggregate: Statistical Self-Consistency in Language Models

- Fixture: `packages/test-fixtures/explainers/partition-prompt-aggregate.json`
- Manifest revision reviewed: `9`
- Paragraphs scored: `16`
- Engineer decision/proposal average: `9.00/10`
- Implemented visual quality average: `9.00/10`
- Minimum paragraph score: `9/10`

## Independent assessment

The single SVG expresses weighted reconstruction and comparison to a direct root estimate as a real dependency graph. It avoids a simple chain and keeps the visual burden proportional to the explainer.

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
| `ppa_why_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Many uses of in-context learning treat a prompt as a condition and the model's answer as an estimate of the corresponding conditional distribution. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_why_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. A model can give locally plausible answers while violating this requirement. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_change_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The framework separates alignment from self-consistency. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_change_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The paper turns this idea into split-consistency and order-consistency scores. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_mechanism_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Start with a base population at the root. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_mechanism_p2` | 9/10 | The relational proposal matches the paragraph's reconstructive job. For each level, the method also elicits subgroup population shares, normalizes them, and calculates their weighted sum. | 9/10 | The SVG exposes the warranted relationships, remains keyboard-scrollable at 390px, and avoids prohibited stock structures. |
| `ppa_mechanism_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Split consistency checks a node against the weighted sum of its immediate children. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_example_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Consider the probability that a person in the United States earns above a chosen threshold. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_example_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The model estimates the income probability and population share for each subgroup. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_evidence_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. In the ACS income experiment, Figure 3 reports that reconstructed aggregate estimates generally reduce alignment error relative to direct prompting. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_evidence_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The reference-free checks also reveal failures. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_evidence_p3` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. A one-prompt micro-to-macro instruction often improves ACS estimates, but its effect is less systematic and more model-dependent than explicit aggreg… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_limitations_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The macro-fallacy alignment analysis relies primarily on ACS data. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_limitations_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Self-consistency is only a necessary condition for faithful conditional inference. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_review_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The strongest contribution is a simple, reference-free test of whether conditional estimates compose. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `ppa_review_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The macro fallacy is more bounded: it is a repeated empirical pattern in the ACS analysis, not a universal rule that decomposition always improves an… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |

## Findings

1. The single SVG expresses weighted reconstruction and comparison to a direct root estimate as a real dependency graph. It avoids a simple chain and keeps the visual burden proportional to the explainer.
2. The revision-9 intrinsic-width viewport solves source-label legibility and document-overflow containment, but it does not by itself solve inspection effort or repeated-source pacing.
3. Focus, keyboard scrolling, provenance, fallbacks, and paragraph placement are consistently implemented and verified in the rendered interface.

## Focused checks

- `pnpm --filter @paper-atlas/web test -- explainer-visual.test.tsx papers.test.ts` — passed (2 files, 8 tests).
- `pnpm --filter @paper-atlas/web test:visual` — passed (6 Playwright tests across desktop Chromium and 390px mobile Chromium).
- Direct renderer/CSS inspection — source images retain natural dimensions; multi-image sets use a max-content flex row; all overflow is contained in figure-local regions.
