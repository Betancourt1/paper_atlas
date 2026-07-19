# Blind visual QA — SearchOS-V1

Independent revision-12 review. `E` is engineer decision/proposal; `I` is implemented visual quality, both 1–10.

| Paragraph | E | I | Evidence |
|---|---:|---:|---|
| `sos_why_p1` | 9 | 9 | Research-state requirements are a heterogeneous set, not a comparable visual scale. |
| `sos_why_p2` | 9 | 9 | Failure modes are clearly explained without repeated cards. |
| `sos_change_p1` | 9 | 9 | Table and citation-matrix concept is concrete prose before architecture evidence. |
| `sos_change_p2` | 9 | 9 | Role separation is concise and does not require a generic org chart. |
| `sos_mechanism_p1` | 9 | 9 | Four stores are densely defined; a custom box list would be a forbidden stock structure. |
| `sos_mechanism_p2` | 10 | 5 | Original Figure 2 directly shows the state/evidence architecture with faithful provenance, but dense labels are difficult at mobile width. |
| `sos_mechanism_p3` | 10 | 4 | The original sensor-policy/dispatch figure is relevant and undistorted; its very wide 316×106 mobile rendering makes labels and fine relationships largely unreadable. |
| `sos_example_p1` | 9 | 9 | The missing-cell dispatch walkthrough is linear and concrete. |
| `sos_example_p2` | 9 | 9 | Acceptance, atomic update, and stop behavior remain precise in prose. |
| `sos_evidence_p1` | 9 | 9 | Benchmark metrics are already compact and should not become cards. |
| `sos_evidence_p2` | 9 | 9 | Paired scheduling results include subset scope in prose. |
| `sos_evidence_p3` | 9 | 9 | Joint-removal evidence cannot isolate a skill layer and is correctly unillustrated. |
| `sos_limitations_p1` | 9 | 9 | Best-of-three and budget-fairness limits need textual prominence. |
| `sos_limitations_p2` | 10 | 10 | Declining a visual avoids turning provenance into truth or representative cases into causal evidence. |
| `sos_limitations_p3` | 9 | 9 | Future-work scope is qualitative. |
| `sos_review_p1` | 9 | 9 | Bounded engineering synthesis is already supported by the originals. |
| `sos_review_p2` | 9 | 9 | Component attribution remains an interpretation and should not be diagrammed as causal. |

## Render and policy findings

- Both source figures fit completely at 1440×1000 and 390×844 with no internal/page scrollbar, clipping, or aspect-ratio distortion.
- Both are directly relevant originals with locator, attribution, license, modification record, evidence, and limitation text.
- No custom forbidden stock structure is introduced. HTML/CSS-led primary visuals: 0 of 2 (0%).
- Mobile fit is achieved by shrinking; Figure 5's combined wide layout is not legible enough to inspect labels or connections reliably.

## Checks

- Focused Playwright visual suite: 6 passed across both required viewports.
- Geometry capture: 2/2 containers fit at both sizes; page width equals viewport width.
