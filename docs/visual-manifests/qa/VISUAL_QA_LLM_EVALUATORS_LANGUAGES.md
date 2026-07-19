# Blind visual QA — LLM Evaluators are Biased across Languages

- Fixture: `packages/test-fixtures/explainers/llm-evaluators-languages.json`
- Manifest revision reviewed: `9`
- Paragraphs scored: `16`
- Engineer decision/proposal average: `8.25/10`
- Implemented visual quality average: `6.44/10`
- Minimum paragraph score: `4/10`

## Independent assessment

All ten placements use original paper figures with strong provenance, but the document substantially over-reuses them: Figure 4 appears four times and the Figures 5-7 set appears twice. Intrinsic widths preserve tiny labels, while the very wide single figures and three-image strips impose a large horizontal-inspection burden at both desktop and 390px.

- Desktop and 390px legibility: original files render at intrinsic pixel width, so labels are not downscaled into illegibility. The tradeoff is figure-local horizontal travel; tall originals also expand the document substantially.
- Keyboard, focus, and scroll: every source viewport is a named focusable region with a visible 3px focus outline and native ArrowRight scrolling. SVG containers are focusable and become 680px-wide local scrollers at mobile width.
- Document overflow: focused Playwright checks confirmed figure overflow stays local and the document itself does not exceed the viewport at desktop or mobile width.
- Provenance: source visuals expose locator, attribution, linked license, modifications, claim links, source locators, specific alt text, and an equivalent hidden-text fallback.
- Paragraph match: source figures and SVGs are placed immediately after their target paragraphs. Shared placements are credited only where the same figure genuinely serves both adjacent paragraphs.
- Forbidden structures: no custom implementation reduces to a single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels. Original figures are retained as evidence rather than cosmetically redrawn.
- Repetition burden: Very high: Figure 4 is shown four times; Figures 1 and 3 recur in a later set; Figures 5-7 are each shown twice. Paragraph match is usually sound, but the repeated full originals weaken pacing.
- Multi-image sets: Two three-image sets retain each image at its own natural width instead of equal-width compression. That protects legibility but creates extremely long horizontal tracks, especially on mobile.
- HTML/CSS-led share: `0/10 (0%)`. The implemented primary media are 10 source assets and 0 SVGs; CSS supplies presentation and scrolling, not the visual explanation itself.

## Paragraph scores

| Paragraph | Engineer decision / proposal | Rationale | Implemented quality | Rationale |
|---|---:|---|---:|---|
| `language_why_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Pairwise accuracy asks whether an evaluator ranks a preferred response above a rejected one. | 6/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_why_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Many real uses depend on absolute scores instead: a safety gate accepts content above a threshold, and reinforcement learning consumes scalar rewards. | 6/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_change_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. The study keeps semantic content aligned across 23 professionally translated and human-validated language versions, then examines pointwise score dis… | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_change_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. The authors also connect score shifts to Common Crawl language prevalence, test two additional large judges, measure threshold outcomes, and decompos… | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_mechanism_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Suppose an evaluator adds a language-conditioned baseline to every response score. | 5/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_mechanism_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. A global threshold exposes the mismatch: languages receiving higher baseline scores accept more responses even when their pairwise accuracy looks sim… | 5/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_mechanism_p3` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Summed response negative log-likelihood serves as one uncertainty proxy, with attribute-head disagreement, predictive variance, and semantic entropy… | 6/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_example_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. For Skywork-LLaMA-8B, the paper rounds English to 93% pairwise accuracy and 23% acceptance, and Ukrainian to 87% pairwise accuracy and 67% acceptance. | 5/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_example_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The paper also wraps Hindi Safety content in an English frame. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `language_evidence_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. All eight core evaluators show statistically significant differences in mean scores across languages by one-way ANOVA. | 6/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_evidence_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Under one global median threshold, the aggregate reward-model analysis reports a maximum acceptance gap of 43.0 percentage points. | 5/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_evidence_p3` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Uncertainty measures correlate positively with score at the language level, but nested regressions retain significant language effects after controll… | 5/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_limitations_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The data are translated benchmark items, not naturally authored multilingual conversations or culturally specific judgments. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `language_limitations_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The uncertainty-score association does not establish uncertainty as the cause of the shift. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `language_review_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. The strongest result is a measurement warning: high pairwise accuracy does not certify that raw evaluator scores are comparable across languages. | 4/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `language_review_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Per-language centering is a useful diagnostic and partial mitigation, not a full solution. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |

## Findings

1. All ten placements use original paper figures with strong provenance, but the document substantially over-reuses them: Figure 4 appears four times and the Figures 5-7 set appears twice. Intrinsic widths preserve tiny labels, while the very wide single figures and three-image strips impose a large horizontal-inspection burden at both desktop and 390px.
2. The revision-9 intrinsic-width viewport solves source-label legibility and document-overflow containment, but it does not by itself solve inspection effort or repeated-source pacing.
3. Focus, keyboard scrolling, provenance, fallbacks, and paragraph placement are consistently implemented and verified in the rendered interface.

## Focused checks

- `pnpm --filter @paper-atlas/web test -- explainer-visual.test.tsx papers.test.ts` — passed (2 files, 8 tests).
- `pnpm --filter @paper-atlas/web test:visual` — passed (6 Playwright tests across desktop Chromium and 390px mobile Chromium).
- Direct renderer/CSS inspection — source images retain natural dimensions; multi-image sets use a max-content flex row; all overflow is contained in figure-local regions.
