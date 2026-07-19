# Blind visual QA — TRACE

Independent revision-12 review. `E` is engineer decision/proposal; `I` is implemented visual quality, both 1–10.

| Paragraph | E | I | Evidence |
|---|---:|---:|---|
| `trace_why_p1` | 9 | 9 | Outcome-only credit failure is a precise causal explanation. |
| `trace_why_p2` | 9 | 9 | Alternatives and TRACE's question are concise prose. |
| `trace_change_p1` | 10 | 5 | Original Figure 1 directly contrasts outcome-only and turn-level assignment with full provenance, but its wide layout becomes hard to read at 390 px. |
| `trace_change_p2` | 9 | 9 | Controlled-variable boundary is appropriately textual. |
| `trace_mechanism_p1` | 9 | 9 | Prefix scoring and frozen-reference role require exact prose. |
| `trace_mechanism_p2` | 9 | 9 | Log-ratio and temporal-difference semantics are clearer as definitions. |
| `trace_mechanism_p3` | 10 | 6 | The custom DAG shows adjacent, skip, and global dependencies without a stock chain; relationships survive mobile but labels are too small for comfortable reading. |
| `trace_example_p1` | 9 | 9 | The failed-trajectory example is easy to follow without a staged cartoon. |
| `trace_example_p2` | 9 | 9 | Local credit versus terminal failure is an essential textual qualification. |
| `trace_evidence_p1` | 9 | 9 | Shared harness controls are heterogeneous setup facts. |
| `trace_evidence_p2` | 9 | 9 | Benchmark gains are concise and avoid metric cards. |
| `trace_evidence_p3` | 10 | 3 | Original Figures 3–4 are the relevant learning dynamics and faithfully preserved, but the combined image renders only about 65 px high on mobile, making axes, legends, and traces unreadable. |
| `trace_limitations_p1` | 9 | 9 | Known-answer and task-form scope are qualitative. |
| `trace_limitations_p2` | 9 | 9 | Backbone, causal, and external-system limitations belong in prose. |
| `trace_review_p1` | 9 | 9 | Narrow controlled conclusion is explicit. |
| `trace_review_p2` | 9 | 9 | Generalization boundary and new-target requirement remain clear without illustration. |

## Render and policy findings

- All three visuals fit their containers at 1440×1000 and 390×844 with no internal/page scrollbar, clipping, or aspect-ratio distortion.
- Both source assets are directly relevant originals with complete provenance. The custom DAG is accessible, source-linked, and uses a responsive `viewBox`.
- No visual uses a forbidden single chain, item-plus-metric list, repeated cards, or repeated one-axis dot panels. HTML/CSS-led primary visuals: 0 of 3 (0%).
- The combined learning-curves source asset technically fits but fails practical mobile legibility; the DAG also needs content-specific mobile reflow or larger text.

## Checks

- Focused Playwright visual suite: 6 passed across desktop Chromium 1440×1000 and mobile Chromium 390×844.
- Geometry capture: 3/3 containers fit at both sizes; page width equals viewport width; source images retain natural aspect ratios.
