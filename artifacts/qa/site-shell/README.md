# Site shell QA — July 19, 2026

## Scope

- right-side paper index;
- persistent light and dark themes;
- simplified header without the dropdown menu;
- repository link and GitHub mark in the footer.

## Rendered evidence

| Surface | Viewport | Evidence |
| --- | --- | --- |
| Paper index | 1440 × 1000, light | `paper-index-desktop-light.png` |
| Paper explainer and right rail | 1440 × 1000, light | `paper-desktop-light.png` |
| Dark theme | 1440 × 1000, dark | `paper-desktop-dark.png` |
| Paper explainer | 390 × 844, light | `paper-mobile-light.png` |
| Inline paper index | 390 × 844, light | `paper-mobile-index-light.png` |
| Footer and GitHub link | 1440 × 1000, light | `footer-desktop-light.png` |

The desktop rail remains sticky. Below 1000 px it becomes an inline index before
the explainer content, so it does not cover text or create page-level overflow.

## Interaction and accessibility

- Keyboard activation of the theme toggle changes the theme and the choice
  persists after reload.
- The theme defaults to the operating-system preference when no saved choice
  exists.
- The toggle and mobile index links preserve 44 px touch targets.
- Theme and index transitions are effectively removed when reduced motion is
  requested.
- Desktop and mobile Playwright checks verify the index target, theme state,
  GitHub destination, removed menu, and page-width overflow.

## Text audit

Added: “On this page,” the generated section labels, “A source-backed guide to
scientific papers,” and “GitHub repository.” Removed: the “Menu” control and the
disabled “Methods” and “Benchmarks” placeholders. Scientific explainer content
was not changed.

## Intentional deviations

The supplied screenshot is used as a hierarchy reference, not copied as an app
panel. Paper Atlas keeps its editorial palette and restrained borders. The
mobile treatment is inline rather than another corner drawer.
