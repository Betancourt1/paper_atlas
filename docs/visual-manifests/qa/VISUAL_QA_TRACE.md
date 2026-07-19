# Blind visual QA — TRACE — revision 8

Scores are engineer decision / implemented result.

| Paragraph | Scores | Rationale |
| --- | --- | --- |
| `trace_why_p1` | 10 / 6 | Figure 1 directly contrasts outcome and turn credit, but its 3200px source is reduced to 642px on desktop. |
| `trace_why_p2` | 9 / 9 | Supervision alternatives remain prose rather than cards. |
| `trace_change_p1` | 10 / 6 | Figure 1 matches the local-credit change, though repeated fitted rendering is hard to inspect. |
| `trace_change_p2` | 9 / 9 | Controlled-variable boundary remains textual. |
| `trace_mechanism_p1` | 9 / 9 | Prefix probing avoids a generic step chain. |
| `trace_mechanism_p2` | 9 / 9 | The log-ratio definition remains more exact in prose. |
| `trace_mechanism_p3` | 10 / 9 | The custom dependency DAG distinguishes adjacent, skip, and global scopes and explicitly limits telescoping. |
| `trace_example_p1` | 9 / 6 | Shared Figure 1 is appropriate evidence, but the repeated wide source is still only 20% scale on desktop. |
| `trace_example_p2` | 9 / 6 | The original trajectory matches the worked example; fitted-only desktop rendering limits label inspection. |
| `trace_evidence_p1` | 9 / 9 | Controlled setup quantities remain prose. |
| `trace_evidence_p2` | 9 / 9 | Different baselines/scopes are not forced into one chart. |
| `trace_evidence_p3` | 10 / 3 | Figures 3–4 match learning dynamics, but the two-up desktop grid renders Figure 3 only 64px high and Figure 4 165px high. |
| `trace_limitations_p1` | 9 / 9 | Output-domain boundary stays prose. |
| `trace_limitations_p2` | 9 / 9 | Backbone, causality, and comparator caveats remain textual. |
| `trace_review_p1` | 9 / 9 | The bounded conclusion avoids repeating results. |
| `trace_review_p2` | 9 / 9 | Transfer and proxy limitations remain prose. |

Findings: no page overflow. Provenance, locator, attribution, license, modifications, alt/fallback text, claims, and sources are visible. Mobile gives intrinsic-size focusable keyboard-scroll inspection with a visible hint and focus ring. Desktop fitted-only inspection is inadequate for the very wide Figure 1 and especially the paired Figures 3–4. Figure 1 is repeated three times, lengthening the page without paragraph-specific focus. The custom DAG is readable and not a forbidden simple structure. HTML/CSS-led primary visuals: 0/5 (0%).

Checks: visual Playwright suite passed on desktop Chromium and 390px mobile Chromium (6/6). Validator and unit suites were not rerun in this blind pass.
