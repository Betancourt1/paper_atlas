# Blind VISUAL_QA — TRACE: Turn-level Reward Assignment via Credit Estimation for Long-Horizon Agents

## Result

- Paragraphs reviewed twice: **16 / 16**
- Pass A average (visual necessity and paragraph fit): **9.19 / 10**
- Pass B average (rendering, evidence, accessibility, provenance): **8.56 / 10**
- Combined average: **8.88 / 10**
- Minimum paragraph score: **3 / 10**

## Findings

- BLOCKING: trace_change_p1 mobile failure composite is incomplete. The repeated question begins mid-text at the left image edge, and the shared-to-failure connector enters from that clipped edge. The success composite and trajectory plot are complete.
- CSS containment passes, so overflow automation cannot detect this source-pixel clipping.

Across the collection, visible figures preserve natural aspect ratio and fit desktop (1440 × 1000) and mobile (390 × 844) containers without internal or page-level scrollbars. The four custom SVGs use branching or relational structures, not a single interchangeable chain, metric-card list, or repeated one-axis dot panels. The selected-medium mix is 4 SVG and 15 source assets; SVG is 21.1% of selected unique visual IDs. Source treatments expose alt text, exact locator, attribution, license, modifications, claim links, and source links.

## Paragraph-level blind scores

Pass A scores necessity and paragraph fit. Pass B scores rendered implementation and evidence discipline. Prose-only paragraphs score highly when prose is the clearest form.

| Paragraph | Pass A | Pass B | Paragraph-specific evidence |
|---|---:|---:|---|
| trace_why_p1 | 9 | 9 | Prose-only is appropriate for “A search agent may make dozens of dependent decisions before answering”; no multi-part spatial or quantitative reconstruction is required. |
| trace_why_p2 | 9 | 9 | Prose-only is appropriate for “Process supervision can provide finer feedback, but commonly needs step labels, an LLM judge, a learned critic, or repeate…”; no multi-part spatial or quantitative reconstruction is required. |
| trace_change_p1 | 10 | 3 | Original Figure 1 is warranted, but the mobile failure composite clips the repeated question at left and loses the start of its shared connector. |
| trace_change_p2 | 9 | 9 | Prose-only is appropriate for “This is a change to credit assignment, not a new browser, backbone, training corpus, or final verifier”; no multi-part spatial or quantitative reconstruction is required. |
| trace_mechanism_p1 | 9 | 9 | Prose-only is appropriate for “TRACE first splits a rollout after each tool action and returned observation”; no multi-part spatial or quantitative reconstruction is required. |
| trace_mechanism_p2 | 9 | 9 | Prose-only is appropriate for “The raw answer score is converted into a log-ratio value representing relative closure of the initial answer-likelihood gap”; no multi-part spatial or quantitative reconstruction is required. |
| trace_mechanism_p3 | 10 | 9 | SVG treatment “TRACE combines local, look-ahead, and outcome credit scopes” answers this paragraph’s reconstruction need; containment and provenance pass. |
| trace_example_p1 | 9 | 9 | Prose-only is appropriate for “Consider a trajectory that searches for a relevant source, opens a page containing decisive evidence, then follows an unre…”; no multi-part spatial or quantitative reconstruction is required. |
| trace_example_p2 | 9 | 9 | Prose-only is appropriate for “The useful search and page opening can receive positive local credit if they make the gold answer more predictable”; no multi-part spatial or quantitative reconstruction is required. |
| trace_evidence_p1 | 9 | 9 | Prose-only is appropriate for “The authors train Qwen3-4B-Thinking-2507 and Qwen3-30B-A3B-Thinking-2507 in the same ReAct-style search harness”; no multi-part spatial or quantitative reconstruction is required. |
| trace_evidence_p2 | 9 | 9 | Prose-only is appropriate for “On closed-web BrowseComp-Plus, TRACE moves the 4B base from 7.2 to 35.6 and the 30B-A3B base from 8.4 to 42.6”; no multi-part spatial or quantitative reconstruction is required. |
| trace_evidence_p3 | 10 | 8 | source asset treatment “Learning dynamics” answers this paragraph’s reconstruction need; containment and provenance pass, though fine source labels require close mobile reading. |
| trace_limitations_p1 | 9 | 9 | Prose-only is appropriate for “The experiments cover long-horizon search with short answers that can be compared with known ground truth”; no multi-part spatial or quantitative reconstruction is required. |
| trace_limitations_p2 | 9 | 9 | Prose-only is appropriate for “Only two related Qwen3 backbones and one interaction domain are evaluated”; no multi-part spatial or quantitative reconstruction is required. |
| trace_review_p1 | 9 | 9 | Prose-only is appropriate for “The controlled result supports a narrow conclusion: in the authors' search setup, adding their reference-model-based turn …”; no multi-part spatial or quantitative reconstruction is required. |
| trace_review_p2 | 9 | 9 | Prose-only is appropriate for “The paper does not establish a general solution to agent credit assignment”; no multi-part spatial or quantitative reconstruction is required. |

## Focused checks

- Playwright visual suite at desktop and mobile: **6 passed**.
- Page/container overflow, natural aspect ratio, image loading, alt text, provenance, SVG title/description, marker, and rendered-label-size assertions: **passed**.
- Direct pixels: SearchOS SOCM padded crop **passed**; TRACE success composite **passed**; TRACE failure composite **failed completeness** as described above.

