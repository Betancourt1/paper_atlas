# VISUAL_QA — TRACE

- Input revision: `7`
- Coverage: `16 / 16` paragraphs
- Verdict: `PASS WITH IMPLEMENTATION FINDING`
- Aggregate `data_visualization_engineer`: `9.31 / 10`
- Aggregate `visual_implementer`: `9.00 / 10`
- HTML/CSS share: `0 / 5 = 0%` (passes the 30% cap)

The source audit correctly uses original Figure 1 (PDF page 2) for the motivating and worked trajectories and Figures 3–4 (PDF pages 8–10) for learning/ablation evidence. Figure 2 is explicitly rejected as a rendered source for `trace_mechanism_p3` because its dominant single chain is forbidden; the custom DAG is a justified adaptation with adjacent edges, skip dependencies, and a separate global outcome anchor. It is not a forbidden chain. Exact CC BY 4.0 metadata, alt text, fallback, limitations, and modification records are present. The source rasters (up to 3200×1200) need keyboard-accessible mobile zoom/scroll instead of phone-column downscaling.

| Paragraph | Engineer | Implementer | Evidence and actionable finding |
|---|---:|---:|---|
| `trace_why_p1` | 10 | 7 | Original Figure 1 directly shows diverging positive/negative trajectories and turn-level motivation; exact page and license are present. Add mobile zoom/scroll. |
| `trace_why_p2` | 9 | 10 | `NO_MATCH`; prose preserves the bounded motivation. No action. |
| `trace_change_p1` | 10 | 7 | Figure 1 directly contrasts outcome-only and turn-sensitive paths. The 3200×1200 raster needs mobile inspection. |
| `trace_change_p2` | 9 | 10 | `NO_MATCH`; prose is sufficient. No action. |
| `trace_mechanism_p1` | 9 | 10 | `NO_MATCH`; no stock chain is introduced. No action. |
| `trace_mechanism_p2` | 9 | 10 | `NO_MATCH`; prose preserves the mathematical boundary. No action. |
| `trace_mechanism_p3` | 9 | 9 | `ADAPT_REQUIRED`, Figure 2 page 4; custom DAG replaces the forbidden single chain with adjacent, skip, and global-anchor dependencies. Semantic fallback is faithful. No action. |
| `trace_example_p1` | 10 | 7 | Figure 1 directly performs the worked-trajectory job and shares placement after p2. Add mobile source inspection. |
| `trace_example_p2` | 10 | 7 | Same original Figure 1 is correctly placed after this paragraph, with complete provenance. Add zoom/scroll. |
| `trace_evidence_p1` | 9 | 10 | `NO_MATCH`; prose is sufficient and avoids repeated one-axis panels. No action. |
| `trace_evidence_p2` | 9 | 10 | `NO_MATCH`; evidence statement remains textual. No action. |
| `trace_evidence_p3` | 10 | 7 | Original Figures 3–4 directly provide learning and tool-calling trends, with exact pages 8–10. Wide assets need mobile zoom/scroll. |
| `trace_limitations_p1` | 9 | 10 | `NO_MATCH`; limitation remains prose. No action. |
| `trace_limitations_p2` | 9 | 10 | `NO_MATCH`; no decorative metric cards. No action. |
| `trace_review_p1` | 9 | 10 | `NO_MATCH`; recap remains prose. No action. |
| `trace_review_p2` | 9 | 10 | `NO_MATCH`; closing boundary is textually clear. No action. |

Checks: `make harness-check` passed. Figures 1 and 4 were visually inspected, Figure 3 was checked through the asset/fixture, and the custom DAG code/fallback/mobile scroller were inspected. `make visual` was blocked by an existing Next development process holding the app lock after the sandbox also denied port 3100.
