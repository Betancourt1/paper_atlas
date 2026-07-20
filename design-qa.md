# Design QA — conversation minimap

## Inputs

- Reference: `/var/folders/yg/rt8w41_56d30cbn9r6gbggyw0000gn/T/codex-clipboard-47662cc7-6269-4d2c-98c3-cb695cfac912.png`
- Desktop implementation: `artifacts/qa/page-minimap/desktop-active.png`
- Mobile implementation: `artifacts/qa/page-minimap/mobile.png`
- Full comparison: `/tmp/paper-atlas-minimap-full-comparison.png`
- Focused rail comparison: `/tmp/paper-atlas-minimap-focus-comparison.png`

## Viewports and state

- Desktop: 1440 × 1000, dark theme, `#trace_evidence` active.
- Mobile: 390 × 844, dark theme, top of `paper_trace`.

## Comparison findings

- The previous labeled 240 px index card was removed.
- The replacement matches the reference grammar: a transparent vertical rail,
  short muted section ticks, longer group ticks, and one 56 px active tick.
- The rail stays pinned to the right edge of the explainer grid without reducing
  the prose column beyond its existing responsive bounds.
- The rail is hidden at 720 px and below. The 390 px capture has no horizontal
  overflow and keeps the paper illustrations at their existing width.
- Labels remain available to assistive technology and as pointer tooltips even
  though the resting visual treatment is intentionally unlabeled.

## Interaction and accessibility

- Scroll position updates the active marker.
- Keyboard focus and Enter activation navigate to the selected section.
- Reduced-motion mode shortens marker transitions to 0.01 ms.
- Browser console errors: none.

## Iteration history

1. Rejected the first labeled table-of-contents treatment because it did not
   match the ChatGPT/Codex desktop reference.
2. Replaced it with the compact scroll-linked marker rail and compared both the
   full page and focused rail in combined reference/implementation images.
3. Verified exact marker geometry, keyboard behavior, desktop sticky behavior,
   and the mobile hidden state in Playwright.
4. Production QA exposed a third-party scroll-container misclassification. The
   click handler now uses native `scrollIntoView`, and the regression asserts
   the selected section reaches the viewport origin.

## Final result

passed
