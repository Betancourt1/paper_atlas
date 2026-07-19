import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type {
  Block,
  Claim,
  ExplainerDocument,
  PaperSummary,
  SourceRef,
} from "@paper-atlas/content-schema";
import { formatAuthorLine } from "@paper-atlas/ui";

import {
  getExplainerByPaperId,
  getPaperById,
  listPapers,
} from "../../../lib/papers";
import { ExplainerVisual } from "./explainer-visual";

type PaperPageProps = {
  params: Promise<{ id: string }>;
};

const blockLabels: Record<Block["type"], string> = {
  WHY_IT_EXISTS: "Why it exists",
  WHAT_IT_CHANGES: "What changes",
  HOW_IT_WORKS: "How it works",
  WORKED_EXAMPLE: "Worked example",
  EVIDENCE: "Evidence",
  LIMITATIONS: "Limitations",
  CRITICAL_REVIEW: "Critical review",
};

const epistemicLabels: Record<Claim["epistemic_status"], string> = {
  OBSERVED: "Observed in source",
  AUTHORS_INTERPRETATION: "Authors’ interpretation",
  EXPLAINER_INFERENCE: "Explainer inference",
  NOT_ESTABLISHED: "Not established",
  DISPUTED: "Disputed",
};

export function generateStaticParams() {
  return listPapers().map((paper) => ({ id: paper.id }));
}

export async function generateMetadata({ params }: PaperPageProps): Promise<Metadata> {
  const { id } = await params;
  const paper = getPaperById(id);
  const explainer = getExplainerByPaperId(id);
  return paper
    ? {
        title: paper.title,
        description: explainer?.central_claim.text ?? paper.summary,
      }
    : {};
}

export default async function PaperPage({ params }: PaperPageProps) {
  const { id } = await params;
  const paper = getPaperById(id);

  if (!paper) {
    notFound();
  }

  const explainer = getExplainerByPaperId(id);
  if (!explainer) {
    return <IndexedPaper paper={paper} />;
  }

  const claimsById = new Map(explainer.claims.map((claim) => [claim.id, claim]));
  const sourcesById = new Map(
    explainer.source_refs.map((source) => [source.id, source]),
  );
  const visualsByParagraphId = new Map<string, typeof explainer.visuals>();
  for (const visual of explainer.visuals) {
    const placedVisuals =
      visualsByParagraphId.get(visual.after_paragraph_id) ?? [];
    visualsByParagraphId.set(visual.after_paragraph_id, [
      ...placedVisuals,
      visual,
    ]);
  }

  return (
    <main id="main-content" className="paper-page">
      <article className="paper-explainer" aria-labelledby="paper-title">
        <PaperHeader paper={paper} explainer={explainer} />

        <nav className="reading-guide" aria-labelledby="reading-guide-title">
          <h2 id="reading-guide-title">Choose your reading depth</h2>
          <ol>
            <li>
              <a href={`#${explainer.reading_paths.FIVE_MIN[0]}`}>5 minutes</a>
              <span>Claim, mechanism, evidence, and limits</span>
            </li>
            <li>
              <a href={`#${explainer.reading_paths.TWENTY_MIN[0]}`}>20 minutes</a>
              <span>Full explanation with worked example</span>
            </li>
            <li>
              <a href="#claim-ledger">Deep dive</a>
              <span>Atomic claims, source locators, and glossary</span>
            </li>
            <li>
              <a href={paper.source.url.toString()}>Original paper</a>
              <span>Exact source version: {paper.version}</span>
            </li>
          </ol>
        </nav>

        <section className="explainer-tldr" aria-labelledby="tldr-title">
          <p className="section-eyebrow">The short version</p>
          <h2 id="tldr-title">What should you retain?</h2>
          <ul>
            {explainer.tldr.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="explainer-blocks">
          {explainer.blocks.map((block) => (
            <div key={block.id}>
              <ExplainerBlock
                block={block}
                claimsById={claimsById}
                sourcesById={sourcesById}
                visualsByParagraphId={visualsByParagraphId}
              />
            </div>
          ))}
        </div>

        <ClaimLedger explainer={explainer} sourcesById={sourcesById} />
        <Glossary explainer={explainer} />
        <References explainer={explainer} />
      </article>
    </main>
  );
}

function PaperHeader({
  paper,
  explainer,
}: {
  paper: PaperSummary;
  explainer: ExplainerDocument;
}) {
  const sourceLabel = paper.source.type === "ARXIV" ? "arXiv" : "Release";
  const isReviewed =
    paper.status === "REVIEWED" && explainer.editorial_status === "REVIEWED";

  return (
    <header className="paper-explainer__header">
      <p className="paper-metadata">
        {paper.published_year} <span aria-hidden="true">·</span> {sourceLabel}{" "}
        <span aria-hidden="true">·</span> Version {paper.version.slice(1)}
      </p>
      <h1 id="paper-title">{paper.title}</h1>
      <p className="paper-authors">{formatAuthorLine(paper.authors)}</p>
      <p className="paper-status">
        {isReviewed
          ? "Reviewed draft · awaiting publication approval"
          : "Draft · independent review required"}
      </p>

      <div className="central-claim" aria-labelledby="central-claim-title">
        <p id="central-claim-title">Central claim</p>
        <p>{explainer.central_claim.text}</p>
      </div>

      <p className="paper-index-summary">
        <span>Index summary:</span> {paper.summary}
      </p>
    </header>
  );
}

function ExplainerBlock({
  block,
  claimsById,
  sourcesById,
  visualsByParagraphId,
}: {
  block: Block;
  claimsById: Map<string, Claim>;
  sourcesById: Map<string, SourceRef>;
  visualsByParagraphId: Map<string, ExplainerDocument["visuals"]>;
}) {
  return (
    <section
      id={block.id}
      className={`explainer-block explainer-block--${block.type.toLowerCase()}`}
      aria-labelledby={`${block.id}-title`}
    >
      <div className="explainer-block__context">
        <p>{blockLabels[block.type]}</p>
        <ul aria-label="Included reading depths">
          {block.reading_depths.map((depth) => (
            <li key={depth}>{formatReadingDepth(depth)}</li>
          ))}
        </ul>
      </div>

      <div className="explainer-block__body">
        <h2 id={`${block.id}-title`}>{block.question}</h2>
        {block.paragraphs.map((paragraph, index) => {
          const paragraphId = `${block.id}_p${index + 1}`;
          return (
            <div className="explainer-paragraph" id={paragraphId} key={paragraphId}>
              <p>{paragraph}</p>
              {visualsByParagraphId.get(paragraphId)?.map((visual) => (
                <ExplainerVisual
                  key={visual.id}
                  visual={visual}
                  sourcesById={sourcesById}
                />
              ))}
            </div>
          );
        })}

        <div className="block-evidence" aria-label="Claims and evidence for this section">
          {block.claim_ids.map((claimId) => {
            const claim = claimsById.get(claimId);
            if (!claim) return null;

            return (
              <div className="block-evidence__claim" key={claim.id}>
                <p>
                  <span data-epistemic-status={claim.epistemic_status}>
                    {epistemicLabels[claim.epistemic_status]}
                  </span>
                  {claim.verification_status === "UNRESOLVED" ? (
                    <span>Unresolved</span>
                  ) : null}
                </p>
                <p>{claim.text}</p>
                <p className="source-links">
                  {claim.source_refs.map((sourceId) => {
                    const source = sourcesById.get(sourceId);
                    return source ? (
                      <a href={`#${source.id}`} key={source.id}>
                        {source.locator}
                      </a>
                    ) : null;
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClaimLedger({
  explainer,
  sourcesById,
}: {
  explainer: ExplainerDocument;
  sourcesById: Map<string, SourceRef>;
}) {
  return (
    <section id="claim-ledger" className="claim-ledger" aria-labelledby="claim-ledger-title">
      <p className="section-eyebrow">Deep dive</p>
      <h2 id="claim-ledger-title">Claim ledger</h2>
      <p>
        Every substantive statement is labeled by evidence type. “Not established”
        marks a boundary, not a result.
      </p>
      <ol>
        {explainer.claims.map((claim) => (
          <li id={`claim-${claim.id}`} key={claim.id}>
            <div>
              <span data-epistemic-status={claim.epistemic_status}>
                {epistemicLabels[claim.epistemic_status]}
              </span>
              <span>{Math.round(claim.confidence * 100)}% confidence</span>
            </div>
            <p>{claim.text}</p>
            <p className="source-links">
              {claim.source_refs.map((sourceId) => {
                const source = sourcesById.get(sourceId);
                return source ? (
                  <a href={`#${source.id}`} key={source.id}>
                    {source.label}
                  </a>
                ) : null;
              })}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Glossary({ explainer }: { explainer: ExplainerDocument }) {
  return (
    <section className="explainer-glossary" aria-labelledby="glossary-title">
      <p className="section-eyebrow">Terms</p>
      <h2 id="glossary-title">Glossary</h2>
      <dl>
        {explainer.glossary.map((entry) => (
          <div key={entry.term}>
            <dt>{entry.term}</dt>
            <dd>{entry.definition}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function References({ explainer }: { explainer: ExplainerDocument }) {
  const editorialState =
    explainer.editorial_status === "REVIEWED"
      ? "reviewed draft; human publication approval has not been recorded"
      : "draft; independent review is still required";

  return (
    <section className="explainer-references" aria-labelledby="references-title">
      <p className="section-eyebrow">Provenance</p>
      <h2 id="references-title">Sources and exact locators</h2>
      <ol>
        {explainer.source_refs.map((source) => (
          <li id={source.id} key={source.id}>
            <a href={source.url.toString()}>{source.label}</a>
            <span>{source.locator}</span>
          </li>
        ))}
      </ol>
      <p className="revision-note">
        Editorial state: {editorialState}. {explainer.revision_notes.at(-1)}
      </p>
    </section>
  );
}

function IndexedPaper({ paper }: { paper: PaperSummary }) {
  return (
    <article className="paper-explainer" aria-labelledby="paper-title">
      <header className="paper-explainer__header">
        <p className="paper-metadata">{paper.published_year}</p>
        <h1 id="paper-title">{paper.title}</h1>
        <p className="paper-abstract">{paper.summary}</p>
        <p className="paper-status">Explainer pending</p>
        <a href={paper.source.url.toString()}>Read the original paper</a>
      </header>
    </article>
  );
}

function formatReadingDepth(depth: Block["reading_depths"][number]): string {
  if (depth === "FIVE_MIN") return "5 min";
  if (depth === "TWENTY_MIN") return "20 min";
  return "Deep";
}
