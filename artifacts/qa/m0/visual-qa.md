# M0 paper route visual QA

- Date: 2026-07-18
- Route: `/papers/paper_attention_is_all_you_need`
- Desktop viewport: 1440 × 1000
- Mobile viewport: iPhone 13 profile, 390 CSS px wide
- Concept references: `artifacts/qa/concepts/paper-desktop.png` and
  `artifacts/qa/concepts/paper-mobile.png`
- Rendered baselines: `paper-desktop.png` and `paper-mobile.png`

## Verification

- In-app Browser: inspected desktop and mobile DOM and screenshots, exercised
  the mobile menu, and confirmed no console errors or warnings.
- Playwright: four tests passed against a production Next.js server across
  desktop and mobile Chromium, covering the paper route, unknown-paper state,
  keyboard menu state, provenance visibility, and horizontal overflow.
- `view_image`: compared both concept references to both rendered screenshots at
  original resolution.

## Fidelity ledger

| Area | Concept evidence | Render evidence | Result |
| --- | --- | --- | --- |
| Copy | Paper title, summary, actions, and provenance labels | All strings match | Pass |
| Layout | Open editorial column, thin rules, no card grid | Same hierarchy and container model | Pass |
| Typography | Serif title/content, sans UI | Self-hosted Source Serif 4 and Source Sans 3 | Pass |
| Palette | Warm canvas, dark ink, blue actions, green evidence | Exact semantic values from `design.md` | Pass |
| Desktop title | Single-line title at 1440 px | Single-line title after widening editorial measure | Pass |
| Mobile | Two-line title, stacked 44+ px actions, visible sources | Same responsive hierarchy without overflow | Pass |
| Interaction | Compact mobile menu | Keyboard-open and keyboard-close verified | Pass |
| Provenance | Source and schema remain in the main flow | Visible on desktop and mobile | Pass |

## Above-the-fold copy diff

- Intentional correction: concept metadata used the placeholder year `2024`;
  the rendered fixture uses the source-accurate year `2017`.
- Browser chrome shown by the generated concept is framing, not application UI.
- No application copy was added, removed, renamed, or reordered.

## Remaining deviations

None that affect the application design. The implementation was faithfully
verified against the concept and the authoritative `design.md` constraints.
