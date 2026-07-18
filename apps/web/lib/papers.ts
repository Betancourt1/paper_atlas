import type { PaperSummary } from "@paper-atlas/content-schema";
import { paperSummaryFixtures } from "@paper-atlas/test-fixtures";

const papersById = new Map(
  paperSummaryFixtures.map((paper) => [paper.id, paper]),
);

export function getPaperById(id: string): PaperSummary | undefined {
  return papersById.get(id);
}

export function listPapers(): readonly PaperSummary[] {
  return paperSummaryFixtures;
}
