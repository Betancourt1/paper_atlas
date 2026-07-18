import type {
  ExplainerDocument,
  PaperSummary,
} from "@paper-atlas/content-schema";
import {
  explainerFixtures,
  paperSummaryFixtures,
} from "@paper-atlas/test-fixtures";

const papersById = new Map(
  paperSummaryFixtures.map((paper) => [paper.id, paper]),
);
const explainersByPaperId = new Map(
  explainerFixtures.map((explainer) => [explainer.paper_id, explainer]),
);

export function getPaperById(id: string): PaperSummary | undefined {
  return papersById.get(id);
}

export function getExplainerByPaperId(
  paperId: string,
): ExplainerDocument | undefined {
  return explainersByPaperId.get(paperId);
}

export function listPapers(): readonly PaperSummary[] {
  return paperSummaryFixtures;
}
