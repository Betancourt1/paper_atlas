# VISUAL_QA — Computational Propaganda

- Input revision: `7`
- Coverage: `16 / 16` paragraphs
- Verdict: `PASS WITH IMPLEMENTATION FINDING`
- Aggregate `data_visualization_engineer`: `9.13 / 10`
- Aggregate `visual_implementer`: `9.56 / 10`
- HTML/CSS share: `0 / 3 = 0%` (passes the 30% cap)

Figures 7 (PDF page 18) and 3 (PDF page 14) are correctly selected as direct originals under CC BY 4.0, with exact attribution and modification records. The custom HalfLife tree has a valid conditional-branching warrant, exposes rejected complements and the 0.13% versus 0.15% discrepancy, and is not any forbidden stock form. The inspected 2069×1454 Figure 7 becomes too small when forced to phone-column width; add a keyboard-accessible source-image zoom/scroll treatment. Figure 3 is also wide (1240×475) and needs the same treatment.

| Paragraph | Engineer | Implementer | Evidence and actionable finding |
|---|---:|---:|---|
| `propaganda_why_p1` | 9 | 10 | `NO_MATCH`; prose frames the threat without converting it into a decorative chain. No action. |
| `propaganda_why_p2` | 9 | 10 | `NO_MATCH`; prose preserves the bounded motivation. No action. |
| `propaganda_change_p1` | 9 | 10 | `NO_MATCH`; no direct figure performs this exact distinction. No action. |
| `propaganda_change_p2` | 10 | 7 | Original Figure 7 directly shows poisoning impact across conditions; locator, CC BY 4.0 attribution, and unmodified status are present. Add mobile zoom/scroll. |
| `propaganda_mechanism_p1` | 9 | 10 | `NO_MATCH`; prose avoids an unsupported pipeline. No action. |
| `propaganda_mechanism_p2` | 9 | 10 | `NO_MATCH`; no stock list/card rendering is proposed. No action. |
| `propaganda_mechanism_p3` | 9 | 10 | `NO_MATCH`; the mechanism boundary is adequately textual. No action. |
| `propaganda_example_p1` | 10 | 7 | Original Figure 3 directly supplies stage-specific inclusion evidence and is precisely located; cropped-from-page modification is disclosed. Add mobile zoom/scroll. |
| `propaganda_example_p2` | 9 | 9 | Custom SVG branches at every conditional gate, labels surviving/rejected populations, and preserves the reported discrepancy; fallback and limitations are specific. No action. |
| `propaganda_evidence_p1` | 9 | 10 | `NO_MATCH`; prose is sufficient and no interchangeable metric cards appear. No action. |
| `propaganda_evidence_p2` | 9 | 10 | `NO_MATCH`; evidence statement remains correctly textual. No action. |
| `propaganda_evidence_p3` | 9 | 10 | `NO_MATCH`; no unsupported visual encoding is introduced. No action. |
| `propaganda_limitations_p1` | 9 | 10 | `NO_MATCH`; limitation is clearer as prose. No action. |
| `propaganda_limitations_p2` | 9 | 10 | `NO_MATCH`; prose preserves uncertainty. No action. |
| `propaganda_review_p1` | 9 | 10 | `NO_MATCH`; summary does not require another figure. No action. |
| `propaganda_review_p2` | 9 | 10 | `NO_MATCH`; final caveat remains prose-only. No action. |

Checks: `make harness-check` passed. Figures 7 and 3 and the custom SVG implementation/fallback were inspected. `make visual` was blocked by an existing Next development process holding the app lock after the sandbox also denied port 3100.
