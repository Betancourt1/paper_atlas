# Blind visual QA — TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents

- Fixture: `packages/test-fixtures/explainers/trace.json`
- Manifest revision reviewed: `9`
- Paragraphs scored: `16`
- Engineer decision/proposal average: `8.69/10`
- Implemented visual quality average: `8.06/10`
- Minimum paragraph score: `5/10`

## Independent assessment

Four source-asset placements and one SVG cover the paper's credit-assignment story. Figure 1 is wide and repeated three times, so source-scale inspection is legible but repetitive. The custom dependency DAG is the clearest paragraph-specific visual; the Figures 3-4 set remains readable but horizontally demanding.

- Desktop and 390px legibility: original files render at intrinsic pixel width, so labels are not downscaled into illegibility. The tradeoff is figure-local horizontal travel; tall originals also expand the document substantially.
- Keyboard, focus, and scroll: every source viewport is a named focusable region with a visible 3px focus outline and native ArrowRight scrolling. SVG containers are focusable and become 680px-wide local scrollers at mobile width.
- Document overflow: focused Playwright checks confirmed figure overflow stays local and the document itself does not exceed the viewport at desktop or mobile width.
- Provenance: source visuals expose locator, attribution, linked license, modifications, claim links, source locators, specific alt text, and an equivalent hidden-text fallback.
- Paragraph match: source figures and SVGs are placed immediately after their target paragraphs. Shared placements are credited only where the same figure genuinely serves both adjacent paragraphs.
- Forbidden structures: no custom implementation reduces to a single interchangeable chain, item-plus-metric list, repeated metric cards, or repeated one-axis dot panels. Original figures are retained as evidence rather than cosmetically redrawn.
- Repetition burden: High: Figure 1 is shown three times. Each placement matches its paragraph, but the third full reproduction adds less value than a focused reference would.
- Multi-image sets: The Figures 3-4 pair keeps both originals at natural width. This protects labels while creating a long local scroll track on mobile.
- HTML/CSS-led share: `0/5 (0%)`. The implemented primary media are 4 source assets and 1 SVG; CSS supplies presentation and scrolling, not the visual explanation itself.

## Paragraph scores

| Paragraph | Engineer decision / proposal | Rationale | Implemented quality | Rationale |
|---|---:|---|---:|---|
| `trace_why_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. A search agent may make dozens of dependent decisions before answering. | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `trace_why_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Process supervision can provide finer feedback, but commonly needs step labels, an LLM judge, a learned critic, or repeated rollouts. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `trace_change_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. TRACE leaves final-answer verification in place but adds a trajectory-local signal at tool-call boundaries. | 6/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `trace_change_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. This is a change to credit assignment, not a new browser, backbone, training corpus, or final verifier. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `trace_mechanism_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. TRACE first splits a rollout after each tool action and returned observation. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `trace_mechanism_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The raw answer score is converted into a log-ratio value representing relative closure of the initial answer-likelihood gap. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `trace_mechanism_p3` | 9/10 | The relational proposal matches the paragraph's reconstructive job. One-step credits telescope, so inserting redundant intermediate steps cannot increase their endpoint sum. | 9/10 | The SVG exposes the warranted relationships, remains keyboard-scrollable at 390px, and avoids prohibited stock structures. |
| `trace_example_p1` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. Consider a trajectory that searches for a relevant source, opens a page containing decisive evidence, then follows an unrelated branch and submits th… | 5/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `trace_example_p2` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. The useful search and page opening can receive positive local credit if they make the gold answer more predictable. | 5/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `trace_evidence_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The authors train Qwen3-4B-Thinking-2507 and Qwen3-30B-A3B-Thinking-2507 in the same ReAct-style search harness. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `trace_evidence_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. On closed-web BrowseComp-Plus, TRACE moves the 4B base from 7.2 to 35.6 and the 30B-A3B base from 8.4 to 42.6. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `trace_evidence_p3` | 8/10 | The original-figure choice matches the paragraph's reconstructive job. In one 4B BrowseComp-Plus ablation, GRPO scores 30.0, raw log-probability delta 32.4, remaining-gap normalization 34.6, and log-ratio credit 35.5. | 7/10 | The source remains legible at intrinsic width with complete provenance, but local scrolling and repeated full-figure reuse reduce usability here. |
| `trace_limitations_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The experiments cover long-horizon search with short answers that can be compared with known ground truth. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `trace_limitations_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. Only two related Qwen3 backbones and one interaction domain are evaluated. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `trace_review_p1` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The controlled result supports a narrow conclusion: in the authors' search setup, adding their reference-model-based turn credit to outcome training… | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |
| `trace_review_p2` | 9/10 | Prose is the stronger treatment; a graphic would mostly restate the claim or force a forbidden stock structure. The paper does not establish a general solution to agent credit assignment. | 9/10 | No visual was implemented, preserving pacing and avoiding decorative repetition. |

## Findings

1. Four source-asset placements and one SVG cover the paper's credit-assignment story. Figure 1 is wide and repeated three times, so source-scale inspection is legible but repetitive. The custom dependency DAG is the clearest paragraph-specific visual; the Figures 3-4 set remains readable but horizontally demanding.
2. The revision-9 intrinsic-width viewport solves source-label legibility and document-overflow containment, but it does not by itself solve inspection effort or repeated-source pacing.
3. Focus, keyboard scrolling, provenance, fallbacks, and paragraph placement are consistently implemented and verified in the rendered interface.

## Focused checks

- `pnpm --filter @paper-atlas/web test -- explainer-visual.test.tsx papers.test.ts` — passed (2 files, 8 tests).
- `pnpm --filter @paper-atlas/web test:visual` — passed (6 Playwright tests across desktop Chromium and 390px mobile Chromium).
- Direct renderer/CSS inspection — source images retain natural dimensions; multi-image sets use a max-content flex row; all overflow is contained in figure-local regions.
