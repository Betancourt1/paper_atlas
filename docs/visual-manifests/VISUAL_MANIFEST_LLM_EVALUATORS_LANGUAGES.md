# Visual manifest — LLM Evaluators are Biased across Languages

- Paper ID: `paper_llm_evaluators_languages`
- Exact paper version: `v1`
- Explainer fixture: `packages/test-fixtures/explainers/llm-evaluators-languages.json`
- Manifest revision: `10`
- Engineer status: `COMPLETE`
- Implementer status: `COMPLETE`
- Paragraph coverage: `16 / 16` prose paragraphs
- Paragraph-ID derivation: `{block.id}_p{1-based index in block.paragraphs}`; each fixture paragraph appears exactly once.
- Evidence sources:
  - `language_source_intro` — LLM Evaluators v1 framing and dataset; Pages 1–4, Sections 1–3.2
  - `language_source_effects` — LLM Evaluators v1 language effects; Pages 4–5, Sections 3.3.1–3.3.3, Figures 1–3, Appendix Table 6
  - `language_source_thresholds` — LLM Evaluators v1 threshold analysis and rounded worked example; Pages 5–7, Sections 3.4–3.5, Figure 4, Table 1, Appendix Table 15; Section 3.4 reports a 43.0-point aggregate maximum and separately describes rounded 23% versus 67% English/Ukrainian rates as a 44-point example
  - `language_source_uncertainty` — LLM Evaluators v1 uncertainty analysis; Pages 7–8, Sections 4–4.1, Equations 1–2, Figure 5, Table 2
  - `language_source_regressions` — LLM Evaluators v1 structural regressions; Pages 8–10, Sections 4.2–4.3, Equations 3–6, Figures 6–7, Appendix Tables 11–12
  - `language_source_calibration` — LLM Evaluators v1 calibration analysis; Pages 10 and 22–23, Section 5, Appendix D, Tables 13–15

Revision 10 scopes source reuse to distinct reconstructive questions. A reusable original is shown once for each genuinely complex explanatory job; later mentions remain prose unless they pose a new question. Multi-image strips are rejected when one exact original suffices.

## `language_why_p1`

- Location: `language_why`, paragraph 1
- Text anchor: "Pairwise accuracy asks whether an evaluator ranks a preferred response above a rejected one."
- Claims and sources: `language_claim_pairwise_blind`, `language_claim_gap`, `language_source_intro`, `language_source_thresholds`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `language_mechanism_p2`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Motivation and problem framing.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — the retained source placement already establishes the relationship.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_why_p2`

- Location: `language_why`, paragraph 2
- Text anchor: "Many real uses depend on absolute scores instead: a safety gate accepts content above"
- Claims and sources: `language_claim_pairwise_blind`, `language_claim_gap`, `language_source_intro`, `language_source_thresholds`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `language_mechanism_p2`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Motivation and problem framing.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — the retained source placement already establishes the relationship.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_change_p1`

- Location: `language_change`, paragraph 1
- Text anchor: "The study keeps semantic content aligned across 23 professionally translated and human-validated language versions,"
- Claims and sources: `language_claim_effect`, `language_claim_resource`, `language_claim_additional_judges`, `language_source_intro`, `language_source_effects`, `language_source_thresholds`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — cross-language evaluator accuracy distribution; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 1, PDF page 4, `language_source_effects`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Method distinction and scope.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 1, PDF page 4, `language_source_effects`. It preserves the original source asset and may annotate only cross-language evaluator accuracy distribution; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-1.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-1.png", label: "Original paper figure" }
  focus["Reading focus: cross-language evaluator accuracy distribution"]
  locator["Source locator: Figure 1, PDF page 4, language_source_effects"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("cross-language evaluator accuracy distribution")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 1, PDF page 4, `language_source_effects`. It preserves the original source asset and may annotate only cross-language evaluator accuracy distribution; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-1.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-1.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/llm-evaluators-languages/figure-1.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-1.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/llm-evaluators-languages/figure-1.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/llm-evaluators-languages/figure-1.png", label: "Complete original context" }
  locator["Detail remains located within Figure 1, PDF page 4, language_source_effects"]
  source --- detail
  source --- context
  detail --- locator
  context --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("cross-language evaluator accuracy distribution")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 1, PDF page 4, `language_source_effects`. It preserves the original source asset and may annotate only cross-language evaluator accuracy distribution; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-1.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-1.png", label: "Original paper figure" }
  callout1["1: locate the evidence-bearing marks"]
  callout2["2: follow the paper-specific relation"]
  callout3["3: retain the source limitation"]
  source --- callout1
  source --- callout2
  source --- callout3
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("cross-language evaluator accuracy distribution")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A preserves the one exact original assigned by revision 10 to this distinct explanatory question, unmodified at readable intrinsic scale inside the desktop and mobile inspection viewport; provenance remains exact and no rejected repeated placement is retained.
- Delivery medium: `source asset`
- Visual ID and placement: `language_visual_source_figure_1` — rendered immediately after `language_change_p1`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/llm-evaluators-languages.json`, `apps/web/public/paper-assets/llm-evaluators-languages/figure-1.png`
- Accessibility and fallback verification: `VERIFIED IN COMPONENT AND BROWSER` — every image retains specific alt text; the focusable viewport exposes native arrow-key scrolling and a visible inspection instruction at desktop and mobile widths; exact locator, attribution, license, modification metadata, and fallback remain present.
- Desktop and mobile verification: `VERIFIED` — Playwright at 1440 × 1000 and 390 × 844 confirms intrinsic-width images without equal-width grid normalization, contained figure-only overflow, focus indication, ArrowRight scrolling, the visible inspection hint, and no document-level horizontal overflow.
- Evidence deviations: `NONE`

## `language_change_p2`

- Location: `language_change`, paragraph 2
- Text anchor: "The authors also connect score shifts to Common Crawl language prevalence, test two additional"
- Claims and sources: `language_claim_effect`, `language_claim_resource`, `language_claim_additional_judges`, `language_source_intro`, `language_source_effects`, `language_source_thresholds`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — interaction between evaluator, language, and judgment outcome; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 3, PDF page 5, `language_source_effects`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Method distinction and scope.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 3, PDF page 5, `language_source_effects`. It preserves the original source asset and may annotate only interaction between evaluator, language, and judgment outcome; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-3.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-3.png", label: "Original paper figure" }
  focus["Reading focus: interaction between evaluator, language, and judgment outcome"]
  locator["Source locator: Figure 3, PDF page 5, language_source_effects"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-3.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("interaction between evaluator, language, and judgment outcome")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 3, PDF page 5, `language_source_effects`. It preserves the original source asset and may annotate only interaction between evaluator, language, and judgment outcome; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-3.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-3.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/llm-evaluators-languages/figure-3.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-3.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/llm-evaluators-languages/figure-3.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/llm-evaluators-languages/figure-3.png", label: "Complete original context" }
  locator["Detail remains located within Figure 3, PDF page 5, language_source_effects"]
  source --- detail
  source --- context
  detail --- locator
  context --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-3.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("interaction between evaluator, language, and judgment outcome")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 3, PDF page 5, `language_source_effects`. It preserves the original source asset and may annotate only interaction between evaluator, language, and judgment outcome; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-3.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-3.png", label: "Original paper figure" }
  callout1["1: locate the evidence-bearing marks"]
  callout2["2: follow the paper-specific relation"]
  callout3["3: retain the source limitation"]
  source --- callout1
  source --- callout2
  source --- callout3
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-3.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("interaction between evaluator, language, and judgment outcome")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A preserves the one exact original assigned by revision 10 to this distinct explanatory question, unmodified at readable intrinsic scale inside the desktop and mobile inspection viewport; provenance remains exact and no rejected repeated placement is retained.
- Delivery medium: `source asset`
- Visual ID and placement: `language_visual_source_figure_3` — rendered immediately after `language_change_p2`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/llm-evaluators-languages.json`, `apps/web/public/paper-assets/llm-evaluators-languages/figure-3.png`
- Accessibility and fallback verification: `VERIFIED IN COMPONENT AND BROWSER` — every image retains specific alt text; the focusable viewport exposes native arrow-key scrolling and a visible inspection instruction at desktop and mobile widths; exact locator, attribution, license, modification metadata, and fallback remain present.
- Desktop and mobile verification: `VERIFIED` — Playwright at 1440 × 1000 and 390 × 844 confirms intrinsic-width images without equal-width grid normalization, contained figure-only overflow, focus indication, ArrowRight scrolling, the visible inspection hint, and no document-level horizontal overflow.
- Evidence deviations: `NONE`

## `language_mechanism_p1`

- Location: `language_mechanism`, paragraph 1
- Text anchor: "Suppose an evaluator adds a language-conditioned baseline to every response score. Within one language,"
- Claims and sources: `language_claim_pairwise_blind`, `language_claim_uncertainty`, `language_claim_language_after_nll`, `language_source_uncertainty`, `language_source_regressions`, `language_source_calibration`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `language_mechanism_p2`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Score-translation invariance and threshold decision geometry.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — the retained source placement already establishes the relationship.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_mechanism_p2`

- Location: `language_mechanism`, paragraph 2
- Text anchor: "A global threshold exposes the mismatch: languages receiving higher baseline scores accept more responses"
- Claims and sources: `language_claim_pairwise_blind`, `language_claim_uncertainty`, `language_claim_language_after_nll`, `language_source_uncertainty`, `language_source_regressions`, `language_source_calibration`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — shared-score translation into language-specific acceptance decisions; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 4, PDF page 6, `language_source_thresholds`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Mechanism explanation.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 4, PDF page 6, `language_source_thresholds`. It preserves the original source asset and may annotate only shared-score translation into language-specific acceptance decisions; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-4.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-4.png", label: "Original paper figure" }
  focus["Reading focus: shared-score translation into language-specific acceptance decisions"]
  locator["Source locator: Figure 4, PDF page 6, language_source_thresholds"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-4.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("shared-score translation into language-specific acceptance decisions")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 4, PDF page 6, `language_source_thresholds`. It preserves the original source asset and may annotate only shared-score translation into language-specific acceptance decisions; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-4.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-4.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/llm-evaluators-languages/figure-4.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-4.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/llm-evaluators-languages/figure-4.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/llm-evaluators-languages/figure-4.png", label: "Complete original context" }
  locator["Detail remains located within Figure 4, PDF page 6, language_source_thresholds"]
  source --- detail
  source --- context
  detail --- locator
  context --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-4.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("shared-score translation into language-specific acceptance decisions")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 4, PDF page 6, `language_source_thresholds`. It preserves the original source asset and may annotate only shared-score translation into language-specific acceptance decisions; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-4.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-4.png", label: "Original paper figure" }
  callout1["1: locate the evidence-bearing marks"]
  callout2["2: follow the paper-specific relation"]
  callout3["3: retain the source limitation"]
  source --- callout1
  source --- callout2
  source --- callout3
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-4.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("shared-score translation into language-specific acceptance decisions")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A preserves the one exact original assigned by revision 10 to this distinct explanatory question, unmodified at readable intrinsic scale inside the desktop and mobile inspection viewport; provenance remains exact and no rejected repeated placement is retained.
- Delivery medium: `source asset`
- Visual ID and placement: `language_visual_ranking_acceptance_graph` — rendered immediately after `language_mechanism_p2`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/llm-evaluators-languages.json`, `apps/web/public/paper-assets/llm-evaluators-languages/figure-4.png`
- Accessibility and fallback verification: `VERIFIED IN COMPONENT AND BROWSER` — every image retains specific alt text; the focusable viewport exposes native arrow-key scrolling and a visible inspection instruction at desktop and mobile widths; exact locator, attribution, license, modification metadata, and fallback remain present.
- Desktop and mobile verification: `VERIFIED` — Playwright at 1440 × 1000 and 390 × 844 confirms intrinsic-width images without equal-width grid normalization, contained figure-only overflow, focus indication, ArrowRight scrolling, the visible inspection hint, and no document-level horizontal overflow.
- Evidence deviations: `NONE`

## `language_mechanism_p3`

- Location: `language_mechanism`, paragraph 3
- Text anchor: "Summed response negative log-likelihood serves as one uncertainty proxy, with attribute-head disagreement, predictive variance,"
- Claims and sources: `language_claim_pairwise_blind`, `language_claim_uncertainty`, `language_claim_language_after_nll`, `language_source_uncertainty`, `language_source_regressions`, `language_source_calibration`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — uncertainty proxy and evaluator-score relation; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 5, PDF page 8, `language_source_uncertainty`
- License and reuse status: `PERMITTED` — The paper's arXiv record identifies CC BY 4.0; preserve the authors, original caption, locator, and license link.
- Decision rationale: The original figure directly performs this paragraph's explanatory job. Displaying it materially reduces reconstruction, while replacing it with a custom redraw would discard evidence-bearing structure and violate the source-first rule.
- Explanatory job: Mechanism explanation.

### Treatment A — Full original with focus frame

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 5, PDF page 8, `language_source_uncertainty`. It preserves the original source asset and may annotate only uncertainty proxy and evaluator-score relation; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-5.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-5.png", label: "Original paper figure" }
  focus["Reading focus: uncertainty proxy and evaluator-score relation"]
  locator["Source locator: Figure 5, PDF page 8, language_source_uncertainty"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-5.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("uncertainty proxy and evaluator-score relation")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Original detail with context inset

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 5, PDF page 8, `language_source_uncertainty`. It preserves the original source asset and may annotate only uncertainty proxy and evaluator-score relation; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-5.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-5.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/llm-evaluators-languages/figure-5.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-5.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/llm-evaluators-languages/figure-5.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/llm-evaluators-languages/figure-5.png", label: "Complete original context" }
  locator["Detail remains located within Figure 5, PDF page 8, language_source_uncertainty"]
  source --- detail
  source --- context
  detail --- locator
  context --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-5.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("uncertainty proxy and evaluator-score relation")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Original with numbered reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 5, PDF page 8, `language_source_uncertainty`. It preserves the original source asset and may annotate only uncertainty proxy and evaluator-score relation; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/llm-evaluators-languages/figure-5.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/llm-evaluators-languages/figure-5.png", label: "Original paper figure" }
  callout1["1: locate the evidence-bearing marks"]
  callout2["2: follow the paper-specific relation"]
  callout3["3: retain the source limitation"]
  source --- callout1
  source --- callout2
  source --- callout3
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/llm-evaluators-languages/figure-5.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("uncertainty proxy and evaluator-score relation")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: Treatment A preserves the one exact original assigned by revision 10 to this distinct explanatory question, unmodified at readable intrinsic scale inside the desktop and mobile inspection viewport; provenance remains exact and no rejected repeated placement is retained.
- Delivery medium: `source asset`
- Visual ID and placement: `language_visual_source_figures_5_7_mechanism` — rendered immediately after `language_mechanism_p3`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/llm-evaluators-languages.json`, `apps/web/public/paper-assets/llm-evaluators-languages/figure-5.png`
- Accessibility and fallback verification: `VERIFIED IN COMPONENT AND BROWSER` — the retained image has specific alt text; the focusable viewport, fallback, locator, attribution, license, and modification metadata remain present.
- Desktop and mobile verification: `VERIFIED` — the retained original preserves intrinsic width inside figure-local overflow at 1440 × 1000 and 390 × 844, with focus, ArrowRight scrolling, a visible hint, and no document overflow.
- Evidence deviations: `NONE`

## `language_example_p1`

- Location: `language_example`, paragraph 1
- Text anchor: "For Skywork-LLaMA-8B, the paper rounds English to 93% pairwise accuracy and 23% acceptance, and"
- Claims and sources: `language_claim_gap`, `language_claim_english_ukrainian_rounding`, `language_claim_code_switch`, `language_claim_production_notshown`, `language_source_intro`, `language_source_thresholds`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `language_mechanism_p2`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Worked example.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — the retained source placement already establishes the relationship.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_example_p2`

- Location: `language_example`, paragraph 2
- Text anchor: "The paper also wraps Hindi Safety content in an English frame. An off-the-shelf language"
- Claims and sources: `language_claim_gap`, `language_claim_english_ukrainian_rounding`, `language_claim_code_switch`, `language_claim_production_notshown`, `language_source_intro`, `language_source_thresholds`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The worked example is short enough to follow in prose: The paper also wraps Hindi Safety content in an English frame. Rendering the same ordered actions would create a forbidden single chain; no additional quantitative or spatial relation is supported here.
- Explanatory job: Worked example.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_evidence_p1`

- Location: `language_evidence`, paragraph 1
- Text anchor: "All eight core evaluators show statistically significant differences in mean scores across languages by"
- Claims and sources: `language_claim_effect`, `language_claim_resource`, `language_claim_gap`, `language_claim_english_ukrainian_rounding`, `language_claim_high_accuracy_gap`, `language_claim_additional_judges`, `language_claim_uncertainty`, `language_claim_language_after_nll`, `language_claim_calibration`, `language_source_effects`, `language_source_thresholds`, `language_source_uncertainty`, `language_source_regressions`, `language_source_calibration`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `language_change_p1` and `language_change_p2`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Evaluation evidence.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — the retained source placement already establishes the relationship.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_evidence_p2`

- Location: `language_evidence`, paragraph 2
- Text anchor: "Under one global median threshold, the aggregate reward-model analysis reports a maximum acceptance gap"
- Claims and sources: `language_claim_effect`, `language_claim_resource`, `language_claim_gap`, `language_claim_english_ukrainian_rounding`, `language_claim_high_accuracy_gap`, `language_claim_additional_judges`, `language_claim_uncertainty`, `language_claim_language_after_nll`, `language_claim_calibration`, `language_source_effects`, `language_source_thresholds`, `language_source_uncertainty`, `language_source_regressions`, `language_source_calibration`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `language_mechanism_p2`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Evaluation evidence.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — the retained source placement already establishes the relationship.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_evidence_p3`

- Location: `language_evidence`, paragraph 3
- Text anchor: "Uncertainty measures correlate positively with score at the language level, but nested regressions retain"
- Claims and sources: `language_claim_effect`, `language_claim_resource`, `language_claim_gap`, `language_claim_english_ukrainian_rounding`, `language_claim_high_accuracy_gap`, `language_claim_additional_judges`, `language_claim_uncertainty`, `language_claim_language_after_nll`, `language_claim_calibration`, `language_source_effects`, `language_source_thresholds`, `language_source_uncertainty`, `language_source_regressions`, `language_source_calibration`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `language_mechanism_p3`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Evaluation evidence.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — the retained source placement already establishes the relationship.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_limitations_p1`

- Location: `language_limitations`, paragraph 1
- Text anchor: "The data are translated benchmark items, not naturally authored multilingual conversations or culturally specific"
- Claims and sources: `language_claim_cause_notshown`, `language_claim_production_notshown`, `language_source_uncertainty`, `language_source_regressions`, `language_source_thresholds`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: The data are translated benchmark items, not naturally authored multilingual conversations or culturally specific judgments. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
- Explanatory job: Evidence boundary and limitation.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_limitations_p2`

- Location: `language_limitations`, paragraph 2
- Text anchor: "The uncertainty-score association does not establish uncertainty as the cause of the shift. The"
- Claims and sources: `language_claim_cause_notshown`, `language_claim_production_notshown`, `language_source_uncertainty`, `language_source_regressions`, `language_source_thresholds`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: The uncertainty-score association does not establish uncertainty as the cause of the shift. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
- Explanatory job: Evidence boundary and limitation.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_review_p1`

- Location: `language_review`, paragraph 1
- Text anchor: "The strongest result is a measurement warning: high pairwise accuracy does not certify that"
- Claims and sources: `language_claim_pairwise_blind`, `language_claim_calibration`, `language_claim_cause_notshown`, `language_claim_production_notshown`, `language_source_thresholds`, `language_source_calibration`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `language_mechanism_p2`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Critical interpretation and claim boundary.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — the retained source placement already establishes the relationship.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`

## `language_review_p2`

- Location: `language_review`, paragraph 2
- Text anchor: "Per-language centering is a useful diagnostic and partial mitigation, not a full solution. It"
- Claims and sources: `language_claim_pairwise_blind`, `language_claim_calibration`, `language_claim_cause_notshown`, `language_claim_production_notshown`, `language_source_thresholds`, `language_source_calibration`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: Per-language centering is a useful diagnostic and partial mitigation, not a full solution. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
- Explanatory job: Critical interpretation and claim boundary.

### Implementation record

- Status: `NOT_NEEDED`
- Selected treatment: `NONE`
- Selection rationale: `NO_VISUAL` — prose is the approved treatment.
- Delivery medium: `NONE`
- Visual ID and placement: `NONE` — `NO_VISUAL`
- Shared paragraph scope: `NONE`
- Changed files: `NONE`
- Accessibility and fallback verification: `NO_VISUAL`
- Desktop and mobile verification: `NO_VISUAL`
- Evidence deviations: `NONE`
