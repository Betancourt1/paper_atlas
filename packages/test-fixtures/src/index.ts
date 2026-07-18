import { parsePaperSummary } from "@paper-atlas/content-schema";
import fixture from "../papers/paper-summary.json" with { type: "json" };

export const paperSummaryFixture = parsePaperSummary(fixture);
