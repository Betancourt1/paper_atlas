/* Generated from paper-summary.schema.json. Do not edit directly. */

/**
 * The minimal public paper contract used by Paper Atlas M0.
 */
export interface PaperSummary {
  schema_version: "1.0.0";
  id: string;
  slug: string;
  title: string;
  summary: string;
  /**
   * @minItems 1
   */
  authors: [Author, ...Author[]];
  published_year: number;
  source: Source;
  version: string;
  status: "INDEXED" | "EXPLAINER_PENDING" | "DRAFT" | "REVIEWED" | "PUBLISHED";
}
export interface Author {
  id: string;
  name: string;
}
export interface Source {
  type: "ARXIV" | "DOI" | "URL";
  identifier: string;
  url: string;
}
