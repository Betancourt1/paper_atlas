---
name: paper-explainer
description: Research, plan visuals for, write, revise, or review a source-backed Paper Atlas paper explainer. Use for requests involving adding or trying papers, summarizing a paper, explaining research, creating paper figures or animations, changing explainer content, or preparing a paper for publication. Do not use for code-only site maintenance that cannot affect scientific content or publication state.
---

# Paper Explainer

Build a paper explainer through explicit evidence, visual, writing, and review
handoffs. Never substitute indexed metadata for an explanation.

## Start correctly

1. Read `references/publication-contract.md` in full.
2. Read `references/visual-manifest-template.md` in full.
3. Identify the requested outcome: index-only, explainer draft, revision, or
   publication candidate.
4. Treat “add/try these papers” in an explainer context as a full explainer
   request unless the user explicitly asks for indexing only.
5. If the available milestone cannot deliver the requested outcome, state the
   gap before changing files. Do not silently reduce scope.

## Run the editorial lane

For a new or materially changed explainer, coordinate these project agents in
order:

The older `visual_editor` role may assist with read-only visual ideation, but it
does not replace the paragraph manifest, implementation, or blind QA stages.

1. `paper_researcher` establishes the paper version and evidence dossier.
2. `explainer_writer` writes typed paragraph-level content from approved
   claims. Paragraph IDs must be stable before visual planning begins.
3. `data_visualization_engineer` writes
   `VISUAL_MANIFEST_{PAPER_NAME}.md` paragraph by paragraph. Every paragraph
   receives a YES or NO decision and justification. Only YES paragraphs receive
   three distinct acceptable treatments plus TikZ, Mermaid, and Python code;
   NO paragraphs remain prose-only and do not manufacture visual alternatives.
4. `visual_implementer` selects and builds one approved treatment for every YES
   decision, then records the choice and verification in the manifest. CSS,
   JavaScript, and SVG are recommended first-class delivery media.
5. A fresh `VISUAL_QA` independently scores every paragraph and both agents in
   a separate report without editing their work.
6. The coordinator applies the private retry gate below.
7. `publication_reviewer` independently evaluates the complete candidate.

Do not ask the writer to research missing claims or a reviewer to repair the
draft. Return failed stages to their owner. For a narrow revision, preserve the
paragraph-level audit and rerun every affected downstream stage. Always rerun
publication review.

## Apply the private visual retry gate

This section is for the coordinator and the two producing agents. Never include
it in a `VISUAL_QA` prompt or QA-facing report, and instruct `VISUAL_QA` not to
read coordinator orchestration or acceptance policy.

Accept the visual stage only when every paragraph-level engineer score, every
paragraph-level implementer score, and both aggregate agent scores are 10/10.
If any score is 9 or lower, rerun both `data_visualization_engineer` and
`visual_implementer` on the findings, then invoke a fresh `VISUAL_QA` without
disclosing the retry threshold. Never let either producer self-score or replace
the independent review.

## Gate visuals deliberately

After paragraph IDs exist, audit every paragraph and record one decision for
each: source figure, registered artifact, custom static illustration,
restrained animation, or prose-only. This paragraph audit necessarily covers
every difficult concept. Read the visual-plan section of
`references/publication-contract.md` for the selection rules.

Start with the original paper figures, not with a custom visual idea. For every
paragraph, record whether an original figure or panel directly makes the same
point. When it does and reuse is permitted, use that original source asset
beside the paragraph, with its exact figure/panel/page locator, attribution,
and license status. Every treatment must preserve the original figure as its
source asset, although treatments may differ through crops, callouts, or
context. Do not replace it with a redraw merely for visual consistency. Use an
adaptation only when reuse is restricted, the asset is inaccessible, or the
original combines unrelated material that would make the explanation less
accurate; record that exception explicitly. Source-figure priority never
overrides the four forbidden structures. If the original uses one of them,
record `ADAPT_REQUIRED` and either design a truthful non-banned adaptation or
choose prose-only when none exists.

Do not treat “one visual per paper” as a quality target. A visual is necessary
when removing it would force readers to reconstruct an important relationship
and materially increase cognitive load or misunderstanding.

Use YES only for complex arguments, non-trivial relationships, explanatory
metaphors, genuinely complex processes, quantitative structures, uncertainty,
hierarchies, spatial topologies, or changing state. A simple sequence,
inventory, or set of values remains prose. If the only honest illustration is
one of the following structures, record NO:

1. one interchangeable element leading to the next in a single chain;
2. a list of elements with one metric or value beside each;
3. repeated cards showing the same metric for different segments or objects;
4. repeated one-dimensional dot tracks or panels, one object or metric at a
   time.

These structures are forbidden regardless of orientation, medium, styling,
arrows, loops, animation, or interaction. Complex-process visuals must expose
branching, concurrency, feedback, state transitions, dependencies, failure
conditions, or spatial structure. Charts must expose a meaningful shared
scale, distribution, uncertainty, joint relationship, or another non-trivial
quantitative structure.

Place each approved visual beside the claim or mechanism it explains. Require
equivalent text, evidence, limitations, and accessible static behavior. Use
animation only when time, order, accumulation, feedback, or changing state is
itself part of the concept.

Every proposed and implemented visual must fit completely inside its available
container at desktop and mobile widths without internal or page-level
scrollbars. Preserve aspect ratio and source fidelity with responsive SVG
viewBoxes, bounded images, or a content-specific stacked or reflowed layout. If
a source figure becomes illegible when fitted, use a permitted relevant crop or
panel; if custom work becomes illegible, redesign it. When neither produces a
truthful, readable result, choose prose-only. Horizontal scrolling is not an
acceptable fallback for visualization sizing.

Treat SVG, CSS, and JavaScript as recommended web illustration media. Prefer
SVG or semantic HTML/CSS for static, responsive explanations and JavaScript
only when meaningful state or interaction is part of the explanatory job.

Across one paper's complete treatment portfolio, HTML/CSS may be the primary
medium for no more than 30% of proposed treatments. Apply the same cap to the
implemented set, counting each shared visual ID once. Require an explicit
primary medium for each treatment. Do not count an accessible HTML fallback
against SVG, JavaScript, source-asset, or generated-asset work. A new or
materially revised paper fails the visual stage when either ratio exceeds 30%.

Reject a proposed treatment when its topology and copy could explain an
unrelated paragraph merely by substituting labels. Diagrams use concise,
self-contained labels rather than truncated prose. One visual may cover
multiple adjacent YES paragraphs only when each manifest record declares the
shared scope and points to the same visual ID.

## Preserve the site/editorial boundary

Use `site_maintainer` only after editorial artifacts are ready when code or UI
integration is needed. It may render approved content but may not rewrite it.
Use `site_reviewer` for user-visible integration and publication-label checks.

An index record may contain metadata and an abstract-derived description, but
must be labeled `Indexed` or `Explainer pending`. Only a human-approved release
candidate may be labeled `Published`.

## Finish with evidence

Report the paper version, completed stages, unresolved evidence gaps, review
verdict, and exact user-visible state. Do not claim completion based only on a
valid schema, passing build, or existing route.
