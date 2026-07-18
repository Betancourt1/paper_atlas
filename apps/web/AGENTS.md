# Web instructions

- Follow the root `design.md` and preserve visible provenance and caveats.
- Use Server Components by default and isolate only real interaction.
- Do not introduce fetch waterfalls; M0 reads the fixture at build time.
- Use semantic tokens rather than arbitrary one-off colors.
- Avoid generic card grids, decorative gradients, glassmorphism, ornamental
  diagrams, and hidden evidence.
- Every interactive state requires Playwright coverage.
- Run desktop and mobile browser QA, keyboard checks, and `make check` before
  handoff.

