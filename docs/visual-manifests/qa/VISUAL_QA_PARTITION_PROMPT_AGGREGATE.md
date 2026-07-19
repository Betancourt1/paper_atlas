# VISUAL_QA — Partition, Prompt, Aggregate

- Input revision: `7`
- Coverage: `16 / 16` paragraphs
- Verdict: `PASS`
- Aggregate `data_visualization_engineer`: `9.00 / 10`
- Aggregate `visual_implementer`: `9.94 / 10`
- HTML/CSS share: `0 / 1 = 0%` (passes the 30% cap)

The paragraph-by-paragraph source audit identifies exact original figures even where they cannot be reused as the rendered treatment. Figure 1 is rejected where its dominant single-chain topology would violate the forbidden-form rule; Figures 3, 6, and 10 are also audited, with prose retained when their only supported rendering would remain forbidden or unnecessary. The one selected adaptation is warranted by weighted reconstruction: three prior-estimate products converge through a sum, a separate normalization constraint spans priors, and a comparator links the reconstruction to the direct root estimate. This is a dependency graph, not a single chain, item-plus-metric list, repeated cards, or repeated one-axis dot panels. The SVG has equivalent text and controlled mobile scrolling.

| Paragraph | Engineer | Implementer | Evidence and actionable finding |
|---|---:|---:|---|
| `ppa_why_p1` | 9 | 10 | `ADAPT_REQUIRED`, Figure 1 page 2; prose-only correctly avoids reproducing its forbidden single-chain topology. No action. |
| `ppa_why_p2` | 9 | 10 | `NO_MATCH`; prose sufficiently frames the motivation. No action. |
| `ppa_change_p1` | 9 | 10 | Figure 1 is audited but not rendered because the supported form is a forbidden chain; prose is correct. No action. |
| `ppa_change_p2` | 9 | 10 | `NO_MATCH`; the bounded distinction does not warrant a stock visual. No action. |
| `ppa_mechanism_p1` | 9 | 10 | Figure 1 audit is explicit; prose avoids an invalid chain. No action. |
| `ppa_mechanism_p2` | 9 | 9 | `ADAPT_REQUIRED`; the implemented weighted reconstruction graph has parallel products, normalization, convergence, and comparison. Fallback states the same relations. No action. |
| `ppa_mechanism_p3` | 9 | 10 | Figure 10 page 29 is audited; prose-only avoids an unsupported or forbidden rendering. No action. |
| `ppa_example_p1` | 9 | 10 | Figure 1 audit is recorded; prose is the correct form for this example. No action. |
| `ppa_example_p2` | 9 | 10 | Figure 1 audit is recorded; no dummy alternatives or stock chain are rendered. No action. |
| `ppa_evidence_p1` | 9 | 10 | Figure 3 pages 8–9 is audited; prose retains the evidence without repeated one-axis panels. No action. |
| `ppa_evidence_p2` | 9 | 10 | Figure 6 pages 15–16 is audited; prose-only decision avoids the forbidden source structure. No action. |
| `ppa_evidence_p3` | 9 | 10 | `NO_MATCH`; no unnecessary visual. No action. |
| `ppa_limitations_p1` | 9 | 10 | `NO_MATCH`; caveat remains prose. No action. |
| `ppa_limitations_p2` | 9 | 10 | `NO_MATCH`; prose preserves the limitation boundary. No action. |
| `ppa_review_p1` | 9 | 10 | `NO_MATCH`; recap avoids a decorative chain. No action. |
| `ppa_review_p2` | 9 | 10 | `NO_MATCH`; closing guidance remains text. No action. |

Checks: `make harness-check` passed. The custom weighted-reconstruction SVG, its manifest alternatives, fixture fallback, and mobile scroller CSS were inspected. `make visual` was blocked by an existing Next development process holding the app lock after the sandbox also denied port 3100.
