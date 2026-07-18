import type { Metadata } from "next";
import Link from "next/link";

import { formatAuthorLine } from "@paper-atlas/ui";

import { listPapers } from "../../lib/papers";

export const metadata: Metadata = {
  title: "Papers",
  description: "Curated research entries available in Paper Atlas.",
};

export default function PapersPage() {
  const papers = listPapers();

  return (
    <main id="main-content" className="paper-index">
      <header className="paper-index__header">
        <p className="paper-index__eyeline">July 11–17, 2026</p>
        <h1>Research digest</h1>
        <p>
          Seven supplied research entries, plus the original M0 baseline. Each
          record is validated against the same PaperSummary contract.
        </p>
      </header>

      <ol className="paper-list" aria-label="Available research entries">
        {papers.map((paper, index) => (
          <li className="paper-list__item" key={paper.id}>
            <p className="paper-list__metadata">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{paper.published_year}</span>
              <span>{paper.source.type === "ARXIV" ? "arXiv" : "Release"}</span>
            </p>
            <div className="paper-list__content">
              <h2>
                <Link href={`/papers/${paper.id}`}>{paper.title}</Link>
              </h2>
              <p className="paper-list__summary">{paper.summary}</p>
              <p className="paper-list__authors">
                {formatAuthorLine(paper.authors)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
