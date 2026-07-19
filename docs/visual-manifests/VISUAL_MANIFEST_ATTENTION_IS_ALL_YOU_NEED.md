# Visual manifest — Attention Is All You Need: What the Original Transformer Actually Changed

- Paper ID: `paper_attention_is_all_you_need`
- Exact paper version: `v7`
- Explainer fixture: `packages/test-fixtures/explainers/attention-is-all-you-need.json`
- Manifest revision: `11`
- Engineer status: `COMPLETE`
- Implementer status: `COMPLETE`
- Paragraph coverage: `18 / 18` prose paragraphs
- Paragraph-ID derivation: `{block.id}_p{1-based index in block.paragraphs}`; each fixture paragraph appears exactly once.
- Evidence sources:
  - `source_attention_arxiv_record` — arXiv record for Attention Is All You Need v7; Version history, abstract, DOI, full-text links, and license link; v7 dated August 2, 2023
  - `source_attention_arxiv_v7` — Attention Is All You Need, arXiv v7 PDF; Pages 1-10; Sections 1-7; Figures 1-2; Equation 1; Tables 1-4; version and figure-permission notice
  - `source_attention_neurips_paper` — Attention Is All You Need, official NIPS 2017 proceedings PDF; Pages 1-8; abstract, Sections 1-7, Tables 1-3; English-French result in abstract, Table 2, and Section 6.1
  - `source_attention_neurips_landing` — NIPS 2017 proceedings landing page for Attention Is All You Need; Proceedings identity and landing-page abstract, including its distinct 27.5 and 41.1 BLEU values
  - `source_attention_arxiv_license` — arXiv non-exclusive license to distribute; License terms granting arXiv a perpetual non-exclusive distribution right

Revision 11 corrects source-pixel semantics, removes a mismatched source figure, requires conditional inspection instructions, and returns the PPA hierarchy adaptation for visible two-depth invariance rework.

## `attn_why_p1`

- Location: `attn_why`, paragraph 1
- Text anchor: "Recurrent sequence models process positions through a chain of hidden states. That dependency makes"
- Claims and sources: `attn_002`, `source_attention_arxiv_v7`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The paragraph makes one bounded distinction in plain language: Recurrent sequence models process positions through a chain of hidden states. A visual would repeat that statement as a stock chain, list, or set of cards rather than reduce genuine mental reconstruction.
- Explanatory job: Motivation and problem framing.

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

## `attn_why_p2`

- Location: `attn_why`, paragraph 2
- Text anchor: "Attention already helped encoder-decoder systems retrieve information across a sequence, but it was usually"
- Claims and sources: `attn_002`, `source_attention_arxiv_v7`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The paragraph makes one bounded distinction in plain language: Attention already helped encoder-decoder systems retrieve information across a sequence, but it was usually combined with recurrence. A visual would repeat that statement as a stock chain, list, or set of cards rather than reduce genuine mental reconstruction.
- Explanatory job: Motivation and problem framing.

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

## `attn_change_p1`

- Location: `attn_change`, paragraph 1
- Text anchor: "The Transformer keeps an encoder-decoder structure but changes the operation used to exchange information"
- Claims and sources: `attn_002`, `attn_003`, `attn_006`, `attn_012`, `source_attention_arxiv_v7`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `attn_mechanism_p3`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Method distinction and scope.

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

## `attn_change_p2`

- Location: `attn_change`, paragraph 2
- Text anchor: "This shortens the maximum path between positions to a constant number of sequential operations"
- Claims and sources: `attn_002`, `attn_003`, `attn_006`, `attn_012`, `source_attention_arxiv_v7`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `attn_mechanism_p3`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Method distinction and scope.

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

## `attn_mechanism_p1`

- Location: `attn_mechanism`, paragraph 1
- Text anchor: "Tokens first become learned vectors, and sinusoidal position encodings are added so the model"
- Claims and sources: `attn_003`, `attn_004`, `attn_005`, `source_attention_arxiv_v7`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `attn_mechanism_p3`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
- Explanatory job: Mechanism explanation.

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

## `attn_mechanism_p2`

- Location: `attn_mechanism`, paragraph 2
- Text anchor: "For scaled dot-product attention, the model compares a query with every key using Q"
- Claims and sources: `attn_003`, `attn_004`, `attn_005`, `source_attention_arxiv_v7`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — Figure 2 visibly shows a Scaled Dot-Product Attention block with Q, K, and V entering MatMul, Scale, optional Mask, SoftMax, and a final MatMul, beside a Multi-Head Attention block with linear projections, parallel attention heads, concatenation, and a final linear layer; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 2, PDF page 4, `source_attention_arxiv_v7`
- License and reuse status: `PERMITTED` — The v7 PDF explicitly permits reuse of its figures for scholarly and journalistic use; preserve the authors, caption, and locator.
- Decision rationale: The source figure is relevant only for these visible pixels: Figure 2 visibly shows a Scaled Dot-Product Attention block with Q, K, and V entering MatMul, Scale, optional Mask, SoftMax, and a final MatMul, beside a Multi-Head Attention block with linear projections, parallel attention heads, concatenation, and a final linear layer. Treatments and fallback may not infer token-position graphs, threshold nodes, comparators, or causal edges absent from the source.
- Explanatory job: Visible Q/K/V attention blocks and multi-head concatenation.

### Treatment A — Complete Figure 2 attention blocks

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 2, PDF page 4, `source_attention_arxiv_v7`. It preserves the original source asset and may annotate only Figure 2 visibly shows a Scaled Dot-Product Attention block with Q, K, and V entering MatMul, Scale, optional Mask, SoftMax, and a final MatMul, beside a Multi-Head Attention block with linear projections, parallel attention heads, concatenation, and a final linear layer; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll if needed or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/attention/figure-2.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/attention/figure-2.png", label: "Original paper figure" }
  focus["Reading focus: Figure 2 visibly shows a Scaled Dot-Product Attention block with Q, K, and V entering MatMul, Scale, optional Mask, SoftMax, and a final MatMul, beside a Multi-Head Attention block with linear projections, parallel attention heads, concatenation, and a final linear layer"]
  locator["Source locator: Figure 2, PDF page 4, source_attention_arxiv_v7"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/attention/figure-2.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("Figure 2 visibly shows a Scaled Dot-Product Attention block with Q, K, and V entering MatMul, Scale, optional Mask, SoftMax, and a final MatMul, beside a Multi-Head Attention block with linear projections, parallel attention heads, concatenation, and a final linear layer")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Scaled dot-product block with complete-figure context

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 2, PDF page 4, `source_attention_arxiv_v7`. It preserves the original source asset and may annotate only Figure 2 visibly shows a Scaled Dot-Product Attention block with Q, K, and V entering MatMul, Scale, optional Mask, SoftMax, and a final MatMul, beside a Multi-Head Attention block with linear projections, parallel attention heads, concatenation, and a final linear layer; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll if needed or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/attention/figure-2.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/attention/figure-2.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/attention/figure-2.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/attention/figure-2.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/attention/figure-2.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/attention/figure-2.png", label: "Complete original context" }
  locator["Detail remains located within Figure 2, PDF page 4, source_attention_arxiv_v7"]
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

source = plt.imread(Path("apps/web/public/paper-assets/attention/figure-2.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("Figure 2 visibly shows a Scaled Dot-Product Attention block with Q, K, and V entering MatMul, Scale, optional Mask, SoftMax, and a final MatMul, beside a Multi-Head Attention block with linear projections, parallel attention heads, concatenation, and a final linear layer")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Complete Figure 2 with Q/K/V and concatenation reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 2, PDF page 4, `source_attention_arxiv_v7`. It preserves the original source asset and may annotate only Figure 2 visibly shows a Scaled Dot-Product Attention block with Q, K, and V entering MatMul, Scale, optional Mask, SoftMax, and a final MatMul, beside a Multi-Head Attention block with linear projections, parallel attention heads, concatenation, and a final linear layer; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll if needed or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/attention/figure-2.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/attention/figure-2.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/attention/figure-2.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("Figure 2 visibly shows a Scaled Dot-Product Attention block with Q, K, and V entering MatMul, Scale, optional Mask, SoftMax, and a final MatMul, beside a Multi-Head Attention block with linear projections, parallel attention heads, concatenation, and a final linear layer")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: The original Figure 2 is preserved, with title, alt text, and fallback limited to its visible labeled operations.
- Delivery medium: `source asset`
- Visual ID and placement: `visual_attention_query_key_field` — rendered immediately after `attn_mechanism_p2`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/attention-is-all-you-need.json`; `apps/web/app/papers/[id]/explainer-visual.tsx`; `apps/web/lib/explainer-visual.test.tsx`; `apps/web/tests/paper-page.spec.ts`
- Accessibility and fallback verification: `VERIFIED` — “Figure 2 shows Q, K, and V entering scaled dot-product attention, and parallel attention heads being concatenated before a final linear layer.”
- Desktop and mobile verification: `VERIFIED` — intrinsic-width viewport is contained and focusable; horizontal keyboard inspection is tested only when overflow exists.
- Evidence deviations: `NONE`

## `attn_mechanism_p3`

- Location: `attn_mechanism`, paragraph 3
- Text anchor: "The decoder also repeats 6 layers. Its self-attention masks future target positions, then encoder-decoder"
- Claims and sources: `attn_003`, `attn_004`, `attn_005`, `source_attention_arxiv_v7`
- Visual needed: `YES`
- Complexity warrant: Non-trivial source-figure relationship — Figure 1 visibly shows stacked encoder and decoder blocks, residual Add & Norm paths, feed-forward blocks, masked decoder multi-head attention, and encoder-decoder multi-head attention; prose would force readers to reconstruct the figure's linked components or quantitative structure.
- Forbidden-structure audit: `PASS`
- Source-figure audit: `USE_ORIGINAL`
- Original figure locator: Figure 1, PDF page 3, `source_attention_arxiv_v7`
- License and reuse status: `PERMITTED` — The v7 PDF explicitly permits reuse of its figures for scholarly and journalistic use; preserve the authors, caption, and locator.
- Decision rationale: The source figure is relevant only for these visible pixels: Figure 1 visibly shows stacked encoder and decoder blocks, residual Add & Norm paths, feed-forward blocks, masked decoder multi-head attention, and encoder-decoder multi-head attention. Treatments and fallback may not infer token-position graphs, threshold nodes, comparators, or causal edges absent from the source.
- Explanatory job: Visible encoder-decoder stacks, residual paths, masked attention, and cross-attention blocks.

### Treatment A — Complete Figure 1 encoder-decoder stacks

- Teaching purpose: Preserve the complete source figure and add one focus frame around the portion that answers this paragraph.
- Encoding and reading order: Read the untouched original first; the focus frame identifies the relevant region without suppressing its surrounding context.
- Evidence and limitations: Uses Figure 1, PDF page 3, `source_attention_arxiv_v7`. It preserves the original source asset and may annotate only Figure 1 visibly shows stacked encoder and decoder blocks, residual Add & Norm paths, feed-forward blocks, masked decoder multi-head attention, and encoder-decoder multi-head attention; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll if needed or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/attention/figure-1.png}};
  \draw[orange!80!black,line width=1.6pt]
        ([xshift=4mm,yshift=-4mm]source.north west)
        rectangle ([xshift=-4mm,yshift=4mm]source.south east);
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/attention/figure-1.png", label: "Original paper figure" }
  focus["Reading focus: Figure 1 visibly shows stacked encoder and decoder blocks, residual Add & Norm paths, feed-forward blocks, masked decoder multi-head attention, and encoder-decoder multi-head attention"]
  locator["Source locator: Figure 1, PDF page 3, source_attention_arxiv_v7"]
  source --- focus
  source --- locator
```

#### Python
```python
from pathlib import Path
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle

source = plt.imread(Path("apps/web/public/paper-assets/attention/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
ax.add_patch(Rectangle((0.04, 0.04), 0.92, 0.92, transform=ax.transAxes,
                       fill=False, linewidth=2, edgecolor="#d97706"))
ax.set_title("Figure 1 visibly shows stacked encoder and decoder blocks, residual Add & Norm paths, feed-forward blocks, masked decoder multi-head attention, and encoder-decoder multi-head attention")
ax.axis("off")
fig.savefig("source-treatment-a.png", bbox_inches="tight", dpi=180)
```

### Treatment B — Decoder stack detail with complete-figure context

- Teaching purpose: Show a legible detail while retaining the complete original as a context inset.
- Encoding and reading order: Read the enlarged source detail first, then use the inset to recover its exact position in the unmodified original.
- Evidence and limitations: Uses Figure 1, PDF page 3, `source_attention_arxiv_v7`. It preserves the original source asset and may annotate only Figure 1 visibly shows stacked encoder and decoder blocks, residual Add & Norm paths, feed-forward blocks, masked decoder multi-head attention, and encoder-decoder multi-head attention; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll if needed or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/attention/figure-1.png}};
  \begin{scope}
    \clip (-5,-2.3) rectangle (2.5,2.3);
    \node[inner sep=0] at (-1.25,0) {\includegraphics[width=12cm]{/paper-assets/attention/figure-1.png}};
  \end{scope}
  \node[anchor=south east,draw,fill=white,inner sep=1pt] at (source.south east)
       {\includegraphics[width=3.1cm]{/paper-assets/attention/figure-1.png}};
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/attention/figure-1.png", label: "Original paper figure" }
  detail@{ img: "/paper-assets/attention/figure-1.png", label: "Legible source detail" }
  context@{ img: "/paper-assets/attention/figure-1.png", label: "Complete original context" }
  locator["Detail remains located within Figure 1, PDF page 3, source_attention_arxiv_v7"]
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

source = plt.imread(Path("apps/web/public/paper-assets/attention/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
height, width = source.shape[:2]
detail = source[height // 5: 4 * height // 5, width // 5: 4 * width // 5]
ax.imshow(detail)
inset = ax.inset_axes([0.70, 0.04, 0.27, 0.27])
inset.imshow(source)
inset.set_title("Complete original", fontsize=8)
inset.axis("off")
ax.set_title("Figure 1 visibly shows stacked encoder and decoder blocks, residual Add & Norm paths, feed-forward blocks, masked decoder multi-head attention, and encoder-decoder multi-head attention")
ax.axis("off")
fig.savefig("source-treatment-b.png", bbox_inches="tight", dpi=180)
```

### Treatment C — Complete Figure 1 with masked attention, cross-attention, and Add & Norm reading key

- Teaching purpose: Keep the complete source figure and overlay a small numbered key that explains its paper-specific relationships.
- Encoding and reading order: Read the source figure in its own order; numbered callouts identify the evidence-bearing marks without redrawing them.
- Evidence and limitations: Uses Figure 1, PDF page 3, `source_attention_arxiv_v7`. It preserves the original source asset and may annotate only Figure 1 visibly shows stacked encoder and decoder blocks, residual Add & Norm paths, feed-forward blocks, masked decoder multi-head attention, and encoder-decoder multi-head attention; callouts add no new quantities, topology, or causal claims.
- Primary delivery medium: `source asset`
- Recommended web medium: `source asset`
- Mobile, accessibility, and motion behavior: Keep every source file unmodified and present each source asset at a readable intrinsic width inside a simple horizontally inspectable viewport at both desktop and mobile widths. Make every viewport keyboard-focusable with a visible focus indicator and support horizontal inspection by arrow keys; show the visible hint: “Scroll if needed or use arrow keys to inspect the original figure.” Never shrink a multi-image set into equal-width columns; keep each original readable within the figure-local inspection region. Contain all horizontal overflow inside the figure viewport so the page itself never scrolls sideways. Preserve the original caption, exact locator, attribution, license, and equivalent text explanation. No motion.

#### TikZ
```tex
\documentclass[tikz,border=4pt]{standalone}
\usepackage{graphicx}
\begin{document}
\begin{tikzpicture}
  \node[inner sep=0] (source) {\includegraphics[width=12cm]{/paper-assets/attention/figure-1.png}};
  \foreach \number/\position in {1/{source.north west},2/{source.east},3/{source.south west}} {
    \node[circle,fill=orange!80!black,text=white,inner sep=2pt] at \position {\number};
  }
\end{tikzpicture}
\end{document}
```

#### Mermaid
```mermaid
flowchart TB
  source@{ img: "/paper-assets/attention/figure-1.png", label: "Original paper figure" }
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

source = plt.imread(Path("apps/web/public/paper-assets/attention/figure-1.png"))
fig, ax = plt.subplots(figsize=(12, 7))
ax.imshow(source)
for number, position in enumerate(((0.08, 0.90), (0.90, 0.52), (0.08, 0.10)), 1):
    ax.annotate(str(number), position, xycoords="axes fraction", ha="center", va="center",
                color="white", bbox={"boxstyle": "circle", "facecolor": "#d97706"})
ax.set_title("Figure 1 visibly shows stacked encoder and decoder blocks, residual Add & Norm paths, feed-forward blocks, masked decoder multi-head attention, and encoder-decoder multi-head attention")
ax.axis("off")
fig.savefig("source-treatment-c.png", bbox_inches="tight", dpi=180)
```

### Implementation record

- Status: `IMPLEMENTED`
- Selected treatment: `A`
- Selection rationale: The original Figure 1 is preserved, with title, alt text, and fallback limited to its visible architecture blocks and paths.
- Delivery medium: `source asset`
- Visual ID and placement: `visual_attention_decoder_dependencies` — rendered immediately after `attn_mechanism_p3`.
- Shared paragraph scope: `NONE`
- Changed files: `packages/test-fixtures/explainers/attention-is-all-you-need.json`; `apps/web/app/papers/[id]/explainer-visual.tsx`; `apps/web/lib/explainer-visual.test.tsx`; `apps/web/tests/paper-page.spec.ts`
- Accessibility and fallback verification: `VERIFIED` — “Figure 1 shows stacked encoder and decoder blocks with Add & Norm residual paths, masked decoder attention, and encoder-decoder attention.”
- Desktop and mobile verification: `VERIFIED` — intrinsic-width viewport is contained and focusable; horizontal keyboard inspection is tested only when overflow exists.
- Evidence deviations: `NONE`

## `attn_example_p1`

- Location: `attn_example`, paragraph 1
- Text anchor: "Take a decoder position whose preceding target tokens are known. Its query is compared"
- Claims and sources: `attn_003`, `attn_004`, `attn_012`, `source_attention_arxiv_v7`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The worked example is short enough to follow in prose: Take a decoder position whose preceding target tokens are known. Rendering the same ordered actions would create a forbidden single chain; no additional quantitative or spatial relation is supported here.
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

## `attn_example_p2`

- Location: `attn_example`, paragraph 2
- Text anchor: "After masked self-attention, the decoder position forms another query and compares it with keys"
- Claims and sources: `attn_003`, `attn_004`, `attn_012`, `source_attention_arxiv_v7`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The worked example is short enough to follow in prose: After masked self-attention, the decoder position forms another query and compares it with keys from every encoded source position. Rendering the same ordered actions would create a forbidden single chain; no additional quantitative or spatial relation is supported here.
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

## `attn_evidence_p1`

- Location: `attn_evidence`, paragraph 1
- Text anchor: "For WMT 2014 translation, the authors used about 4.5 million English-German sentence pairs with"
- Claims and sources: `attn_007`, `attn_008`, `attn_009`, `attn_010`, `source_attention_arxiv_v7`, `source_attention_neurips_paper`, `source_attention_neurips_landing`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: Corpus size, vocabulary size, GPU count, training steps, and elapsed time are quantitatively related only as heterogeneous setup conditions; the source does not provide a common denominator, cost curve, throughput measure, or uncertainty that would support a joint chart. Normalizing them would invent comparability, while displaying them directly would be an item-plus-metric inventory. Prose preserves the distinct units and base/big conditions.
- Explanatory job: Evaluation evidence.

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

## `attn_evidence_p2`

- Location: `attn_evidence`, paragraph 2
- Text anchor: "ArXiv v7 Table 2 reports 28.4 BLEU for the big English-German model and 41.8"
- Claims and sources: `attn_007`, `attn_008`, `attn_009`, `attn_010`, `source_attention_arxiv_v7`, `source_attention_neurips_paper`, `source_attention_neurips_landing`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The paragraph already reports the bounded evidence directly: ArXiv v7 Table 2 reports 28.4 BLEU for the big English-German model and 41.8 for English-French. The available values do not add a supported distribution, uncertainty interval, or joint structure; an honest graphic would reduce to an item-plus-metric list, repeated metric marks, or decorative comparison. Prose is clearer.
- Explanatory job: Evaluation evidence.

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

## `attn_evidence_p3`

- Location: `attn_evidence`, paragraph 3
- Text anchor: "The newstest2013 development ablation reports 25.8 BLEU for the base configuration, 24.9 with one"
- Claims and sources: `attn_007`, `attn_008`, `attn_009`, `attn_010`, `source_attention_arxiv_v7`, `source_attention_neurips_paper`, `source_attention_neurips_landing`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: The four translation ablations do share a BLEU scale and could form one compact comparison, but the same paragraph then switches to parsing F1 under different data regimes. One combined chart would falsely imply a shared metric; separate panels would reproduce the forbidden repeated one-axis form, and no uncertainty is reported. Prose keeps the two experiments and their denominators separate.
- Explanatory job: Evaluation evidence.

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

## `attn_limitations_p1`

- Location: `attn_limitations`, paragraph 1
- Text anchor: "Full self-attention costs O(n squared times d) per layer. The paper argues it is"
- Claims and sources: `attn_006`, `attn_009`, `attn_012`, `source_attention_arxiv_v7`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: Full self-attention costs O(n squared times d) per layer. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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

## `attn_limitations_p2`

- Location: `attn_limitations`, paragraph 2
- Text anchor: "The experiments cover WMT translation and, in arXiv v7, English constituency parsing. They do"
- Claims and sources: `attn_006`, `attn_009`, `attn_012`, `source_attention_arxiv_v7`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: The experiments cover WMT translation and, in arXiv v7, English constituency parsing. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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

## `attn_limitations_p3`

- Location: `attn_limitations`, paragraph 3
- Text anchor: "Sinusoidal positional encodings are motivated by a hypothesis that they may extrapolate to longer"
- Claims and sources: `attn_006`, `attn_009`, `attn_012`, `source_attention_arxiv_v7`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: Sinusoidal positional encodings are motivated by a hypothesis that they may extrapolate to longer sequences, but the reported comparison only shows near-equal in-distribution development performance against learned positions. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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

## `attn_review_p1`

- Location: `attn_review`, paragraph 1
- Text anchor: "The durable contribution is narrower and clearer than the title: the paper shows that"
- Claims and sources: `attn_001`, `attn_008`, `attn_011`, `attn_012`, `source_attention_arxiv_record`, `source_attention_arxiv_v7`, `source_attention_neurips_paper`, `source_attention_neurips_landing`, `source_attention_arxiv_license`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The figures were checked; no additional original answers a distinct paragraph-specific reconstructive question after the retained placement.
- Decision rationale: The related original is already used once at `attn_mechanism_p3`, where it performs the complex explanatory job. Repeating the full figure here would add scrolling and visual repetition without reducing a new reconstruction burden; this paragraph remains clearer as prose.
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

## `attn_review_p2`

- Location: `attn_review`, paragraph 2
- Text anchor: "Training parallelism should not be confused with fully parallel generation. The decoder mask allows"
- Claims and sources: `attn_001`, `attn_008`, `attn_011`, `attn_012`, `source_attention_arxiv_record`, `source_attention_arxiv_v7`, `source_attention_neurips_paper`, `source_attention_neurips_landing`, `source_attention_arxiv_license`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: Training parallelism should not be confused with fully parallel generation. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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

## `attn_review_p3`

- Location: `attn_review`, paragraph 3
- Text anchor: "This explainer uses arXiv v7 as its canonical version and preserves the conflicting English-French"
- Claims and sources: `attn_001`, `attn_008`, `attn_011`, `attn_012`, `source_attention_arxiv_record`, `source_attention_arxiv_v7`, `source_attention_neurips_paper`, `source_attention_neurips_landing`, `source_attention_arxiv_license`
- Visual needed: `NO`
- Complexity warrant: NONE — prose is sufficient.
- Forbidden-structure audit: `NO_VISUAL`
- Source-figure audit: `NO_MATCH`
- Original figure locator: `NONE`
- License and reuse status: `NOT_APPLICABLE` — The paper's figures were checked; none directly performs this paragraph's explanatory job.
- Decision rationale: This paragraph is a claim boundary rather than a reconstructive structure: This explainer uses arXiv v7 as its canonical version and preserves the conflicting English-French results from the primary sources. Keeping the qualifiers in prose avoids inventing causal links or turning heterogeneous caveats into interchangeable cards or a stock list.
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
