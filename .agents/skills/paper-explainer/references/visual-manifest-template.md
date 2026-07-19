# Visual manifest contract

Create one manifest per explainer at
`docs/visual-manifests/VISUAL_MANIFEST_{PAPER_NAME}.md`, where `PAPER_NAME` is
the uppercase stable paper slug. The manifest is an editorial artifact and is
versioned with the explainer.

## Required header

Record the paper ID, exact paper version, explainer fixture, evidence sources,
manifest revision, engineer status, implementer status, and the paragraph-ID
derivation rule. Paragraph IDs must be stable and map one-to-one to rendered
prose paragraphs.

## Required paragraph record

Repeat this structure for every prose paragraph, including prose-only decisions:

```markdown
## `{paragraph_id}`

- Location: `{block_id}`, paragraph {number}
- Text anchor: "{short excerpt}"
- Claims and sources: `{claim_ids and source references}`
- Visual needed: `YES | NO`
- Complexity warrant: `{specific non-trivial structure | NONE — prose is sufficient}`
- Forbidden-structure audit: `PASS | NO_VISUAL`
- Source-figure audit: `USE_ORIGINAL | ADAPT_REQUIRED | NO_MATCH`
- Original figure locator: `{Figure/panel/page and source reference | NONE}`
- License and reuse status: `PERMITTED | RESTRICTED | UNKNOWN | NOT_APPLICABLE` — {details}
- Decision rationale: {why a visual reduces reconstruction or why prose wins}
- Explanatory job: {process, architecture, comparison, uncertainty, etc.}

For `NO`, stop here and add the implementation record with `NOT_NEEDED`,
`NONE`, and `NO_VISUAL`. Do not add Treatment A, B, or C and do not write dummy
visual code.

For `YES`, `Complexity warrant` must name the specific complex argument,
non-trivial relationship, metaphor, complex process, quantitative structure,
uncertainty, hierarchy, spatial topology, or changing state. The
`Forbidden-structure audit` must be `PASS`, and the three treatments follow.
When `Source-figure audit` is `USE_ORIGINAL`, the exact original figure is
mandatory in all three treatments and the selected implementation. Each
treatment uses `source asset` as its primary medium and may differ through
crop, callouts, or surrounding explanatory context. `ADAPT_REQUIRED` requires
an exact locator and a concrete reuse, access, density, or scope reason.
`NO_MATCH` means the paper's original figures were checked and none directly
answers the pedagogical question.
`ADAPT_REQUIRED` may accompany NO when the original is unusable and no truthful
non-banned adaptation would improve the prose; the decision rationale must say
so.

### Treatment A — {distinct concept}

- Teaching purpose:
- Encoding and reading order:
- Evidence and limitations:
- Primary delivery medium: `HTML/CSS | SVG | JavaScript | source asset | generated asset`
- Recommended web medium: `SVG | CSS | JavaScript | HTML | source asset`
- Mobile, accessibility, and motion behavior:

#### TikZ
```tex
% Complete minimal, compilable example
```

#### Mermaid
```mermaid
%% Complete minimal diagram
```

#### Python
```python
# Complete minimal example that writes the proposed visual asset
```

### Treatment B — {distinct concept}

{Repeat all Treatment A fields and all three code examples.}

### Treatment C — {distinct concept}

{Repeat all Treatment A fields and all three code examples.}

### Implementation record

- Status: `PENDING | NOT_NEEDED | IMPLEMENTED | REWORK_REQUIRED`
- Selected treatment: `A | B | C | NONE`
- Selection rationale:
- Delivery medium: `HTML/CSS | SVG | JavaScript | source asset | generated asset | NONE`
- Visual ID and placement:
- Shared paragraph scope: `NONE` or the complete list of paragraph IDs served
- Changed files:
- Accessibility and fallback verification:
- Desktop and mobile verification:
- Evidence deviations: `NONE` or an explicit blocker returned to the engineer
```

The three treatments must be meaningfully different explanatory approaches,
not palette, orientation, or decoration variants. The three code forms are
reproducible specifications for each treatment; the implementer may translate
the selected treatment into CSS, JavaScript, or SVG when that is the clearest
web delivery.

Treatments exist only for YES decisions. A revision-6-or-later NO record fails
the contract if it contains Treatment A, B, or C. This prevents paragraph
coverage from generating speculative or decorative diagrams.

Across the complete paper manifest, no more than 30% of proposed treatments
may use `HTML/CSS` as their primary delivery medium. No more than 30% of the
selected unique visual IDs may use `HTML/CSS` as their delivery medium. Count a
shared visual once. HTML fallback content for another primary medium does not
count toward either cap. This structured primary-medium field is required for
new manifests and revision 5 or later.

A treatment is not acceptable when the same topology and wording could be used
for an unrelated paragraph by substituting labels. Use content-specific marks,
relationships, and data with concise complete labels; never put ellipsized
source prose into a visual. A single implemented visual may cover adjacent YES
paragraphs only when each record names the shared paragraph scope and points to
the same visual ID.

The following rendered structures are forbidden for proposals and
implementations, regardless of medium, orientation, styling, arrows, animation,
or interaction:

1. a single chain of interchangeable elements;
2. an item-plus-metric list;
3. repeated same-metric cards by segment or object;
4. repeated one-axis dot tracks or panels.

If these are the only available forms, choose `NO`. A process treatment must
encode non-trivial branching, concurrency, feedback, state transitions,
dependencies, failure conditions, or spatial structure. A chart must encode a
meaningful shared scale, distribution, uncertainty, joint relationship, or
another non-trivial quantitative structure.

## QA report

`VISUAL_QA` writes a separate report at
`docs/visual-manifests/qa/VISUAL_QA_{PAPER_NAME}.md`. It must contain the input
revision and, for every paragraph ID, an engineer score, implementer score,
evidence for each score, and actionable findings. It ends with separate
aggregate scores for `data_visualization_engineer` and `visual_implementer`.
The QA report never changes the manifest or implementation. It scores a
paragraph 1/10 for the responsible agent when a proposal or implementation uses
one of the four forbidden structures.
