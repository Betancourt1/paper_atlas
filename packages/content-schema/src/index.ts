export type {
  Block,
  Claim,
  ExplainerDocument,
  GlossaryTerm,
  SourceRef,
  Visual,
} from "./generated/explainer-document.js";
export type { Author, PaperSummary, Source } from "./generated/paper-summary.js";
export {
  getExplainerIntegrityErrors,
  parseExplainerDocument,
  parsePaperSummary,
  validateExplainerDocument,
  validatePaperSummary,
} from "./validate.js";
