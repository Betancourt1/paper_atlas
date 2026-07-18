import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { formatAuthorLine } from "@paper-atlas/ui";

import { getPaperById } from "../../../lib/papers";

type PaperPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PaperPageProps): Promise<Metadata> {
  const { id } = await params;
  const paper = getPaperById(id);
  return paper ? { title: paper.title, description: paper.summary } : {};
}

export default async function PaperPage({ params }: PaperPageProps) {
  const { id } = await params;
  const paper = getPaperById(id);

  if (!paper) {
    notFound();
  }

  const sourceLabel =
    paper.source.type === "ARXIV" ? "arXiv" : paper.source.type;
  const authorLine = formatAuthorLine(paper.authors);

  return (
    <main id="main-content" className="paper-page">
      <article className="paper-summary" aria-labelledby="paper-title">
        <p className="paper-metadata">
          {paper.published_year} <span aria-hidden="true">·</span> {sourceLabel}{" "}
          <span aria-hidden="true">·</span> Version {paper.version.slice(1)}
        </p>

        <h1 id="paper-title">{paper.title}</h1>
        <p className="paper-abstract">{paper.summary}</p>
        <p className="paper-authors">{authorLine}</p>
        <p className="paper-status">Published</p>

        <div className="paper-actions" aria-label="Paper links">
          <a href={paper.source.url.toString()}>Read paper</a>
          <a
            href={`http://localhost:8000/v1/papers/${paper.id}`}
            data-testid="source-fixture-link"
          >
            View source fixture
          </a>
        </div>

        <section className="fixture-provenance" aria-labelledby="provenance-title">
          <h2 id="provenance-title">Fixture provenance</h2>
          <dl>
            <div>
              <dt>Source</dt>
              <dd>
                {sourceLabel}:{paper.source.identifier}
              </dd>
            </div>
            <div>
              <dt>Schema</dt>
              <dd>PaperSummary v{paper.schema_version.split(".")[0]}</dd>
            </div>
          </dl>
        </section>
      </article>
    </main>
  );
}

