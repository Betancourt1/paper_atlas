import type { PaperSummary } from "@paper-atlas/content-schema";
import { paperSummaryFixture } from "@paper-atlas/test-fixtures";

export function getPaperById(id: string): PaperSummary | undefined {
  return id === paperSummaryFixture.id ? paperSummaryFixture : undefined;
}

