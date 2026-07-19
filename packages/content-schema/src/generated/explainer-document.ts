/* Generated from explainer-document.schema.json. Do not edit directly. */

export type Identifier = string;
/**
 * @minItems 1
 */
export type ReferenceList = [Identifier, ...Identifier[]];

/**
 * A source-backed, reviewable Paper Atlas explainer.
 */
export interface ExplainerDocument {
  schema_version: "1.0.0";
  paper_id: string;
  paper_version: string;
  language: "en";
  audience: "TECHNICAL_GENERALIST";
  title: string;
  central_claim: CentralClaim;
  editorial_status: "REVIEW_REQUIRED" | "CHANGES_REQUESTED" | "REVIEWED";
  reading_paths: ReadingPaths;
  /**
   * @minItems 3
   * @maxItems 5
   */
  tldr: [string, string, string] | [string, string, string, string] | [string, string, string, string, string];
  /**
   * @minItems 7
   */
  blocks: [Block, Block, Block, Block, Block, Block, Block, ...Block[]];
  /**
   * @minItems 6
   */
  claims: [Claim, Claim, Claim, Claim, Claim, Claim, ...Claim[]];
  /**
   * @minItems 1
   */
  source_refs: [SourceRef, ...SourceRef[]];
  /**
   * @minItems 1
   */
  visuals: [Visual, ...Visual[]];
  /**
   * @minItems 2
   */
  glossary: [GlossaryTerm, GlossaryTerm, ...GlossaryTerm[]];
  revision_notes: string[];
}
export interface CentralClaim {
  text: string;
  claim_id: Identifier;
}
export interface ReadingPaths {
  FIVE_MIN: ReferenceList;
  TWENTY_MIN: ReferenceList;
  DEEP: ReferenceList;
}
export interface Block {
  id: Identifier;
  type:
    | "WHY_IT_EXISTS"
    | "WHAT_IT_CHANGES"
    | "HOW_IT_WORKS"
    | "WORKED_EXAMPLE"
    | "EVIDENCE"
    | "LIMITATIONS"
    | "CRITICAL_REVIEW";
  question: string;
  /**
   * @minItems 1
   */
  paragraphs: [string, ...string[]];
  claim_ids: ReferenceList;
  source_refs: ReferenceList;
  /**
   * @minItems 1
   */
  reading_depths: ["FIVE_MIN" | "TWENTY_MIN" | "DEEP", ...("FIVE_MIN" | "TWENTY_MIN" | "DEEP")[]];
}
export interface Claim {
  id: Identifier;
  text: string;
  epistemic_status: "OBSERVED" | "AUTHORS_INTERPRETATION" | "EXPLAINER_INFERENCE" | "NOT_ESTABLISHED" | "DISPUTED";
  importance: "CORE" | "SUPPORTING" | "CAVEAT";
  confidence: number;
  source_refs: ReferenceList;
  verification_status: "VERIFIED" | "UNRESOLVED";
}
export interface SourceRef {
  id: Identifier;
  source_kind: "PAPER" | "SUPPLEMENT" | "MODEL_CARD" | "RELEASE_NOTE" | "REPOSITORY";
  label: string;
  url: string;
  locator: string;
}
export interface Visual {
  id: Identifier;
  after_block_id: Identifier;
  after_paragraph_id: Identifier;
  delivery_medium: "HTML/CSS" | "SVG" | "JavaScript" | "source asset" | "generated asset";
  type:
    | "PIPELINE_FLOW"
    | "ARCHITECTURE_STEPPER"
    | "RESULT_COMPARISON"
    | "EVIDENCE_MATRIX"
    | "METHOD_COMPARISON"
    | "CONTROL_LOOP"
    | "PARTITION_TREE"
    | "TIMELINE"
    | "DOT_PLOT"
    | "PARALLEL_VIEW"
    | "OPERATION_DIAGRAM";
  title: string;
  question: string;
  /**
   * @minItems 2
   * @maxItems 8
   */
  items:
    | [VisualItem, VisualItem]
    | [VisualItem, VisualItem, VisualItem]
    | [VisualItem, VisualItem, VisualItem, VisualItem]
    | [VisualItem, VisualItem, VisualItem, VisualItem, VisualItem]
    | [VisualItem, VisualItem, VisualItem, VisualItem, VisualItem, VisualItem]
    | [VisualItem, VisualItem, VisualItem, VisualItem, VisualItem, VisualItem, VisualItem]
    | [VisualItem, VisualItem, VisualItem, VisualItem, VisualItem, VisualItem, VisualItem, VisualItem];
  claim_ids: ReferenceList;
  source_refs: ReferenceList;
  interpretation: string;
  /**
   * @minItems 1
   */
  limitations: [string, ...string[]];
  alt_text: string;
  fallback: string;
  source_asset?: SourceAsset;
}
export interface VisualItem {
  label: string;
  detail: string;
  value?: number;
  value_end?: number;
  value_label?: string;
  group?: string;
  role?: "MEASURED" | "DERIVED" | "DISPUTED" | "BOUNDARY" | "AGGREGATE";
  domain_min?: number;
  domain_max?: number;
  node_id?: Identifier;
  input_ids?: ReferenceList;
  /**
   * @minItems 2
   * @maxItems 3
   */
  annotations?: [VisualAnnotation, VisualAnnotation] | [VisualAnnotation, VisualAnnotation, VisualAnnotation];
}
export interface VisualAnnotation {
  label: string;
  detail: string;
  role?: "MEASURED" | "DERIVED" | "DISPUTED" | "BOUNDARY" | "AGGREGATE";
}
export interface SourceAsset {
  /**
   * @minItems 1
   * @maxItems 3
   */
  images:
    [SourceAssetImage] | [SourceAssetImage, SourceAssetImage] | [SourceAssetImage, SourceAssetImage, SourceAssetImage];
  /**
   * @minItems 1
   * @maxItems 3
   */
  mobile_images?:
    [SourceAssetImage] | [SourceAssetImage, SourceAssetImage] | [SourceAssetImage, SourceAssetImage, SourceAssetImage];
  locator: string;
  attribution: string;
  license_label: string;
  license_url: string;
  modifications: string;
}
export interface SourceAssetImage {
  path: string;
  alt_text: string;
}
export interface GlossaryTerm {
  term: string;
  definition: string;
  source_refs: ReferenceList;
}
