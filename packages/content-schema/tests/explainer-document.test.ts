import { describe, expect, it } from "vitest";

import {
  parseExplainerDocument,
  validateExplainerDocument,
} from "../src/index.js";

const validExplainer = {
  schema_version: "1.0.0",
  paper_id: "paper_schema_test",
  paper_version: "v1",
  language: "en",
  audience: "TECHNICAL_GENERALIST",
  title: "Schema test explainer",
  central_claim: { text: "A source-backed test claim.", claim_id: "claim_core" },
  editorial_status: "REVIEW_REQUIRED",
  reading_paths: {
    FIVE_MIN: ["why", "mechanism", "evidence", "limitations"],
    TWENTY_MIN: ["why", "change", "mechanism", "example", "evidence", "limitations"],
    DEEP: ["why", "change", "mechanism", "example", "evidence", "limitations", "review"],
  },
  tldr: ["Why it exists.", "How it works.", "What remains uncertain."],
  blocks: [
    ["why", "WHY_IT_EXISTS"],
    ["change", "WHAT_IT_CHANGES"],
    ["mechanism", "HOW_IT_WORKS"],
    ["example", "WORKED_EXAMPLE"],
    ["evidence", "EVIDENCE"],
    ["limitations", "LIMITATIONS"],
    ["review", "CRITICAL_REVIEW"],
  ].map(([id, type]) => ({
    id,
    type,
    question: `What does ${id} explain?`,
    paragraphs: [`Source-backed ${id} explanation.`],
    claim_ids: ["claim_core"],
    source_refs: ["source_paper"],
    reading_depths: [
      ...(validPathIncludes("FIVE_MIN", id) ? ["FIVE_MIN"] : []),
      ...(validPathIncludes("TWENTY_MIN", id) ? ["TWENTY_MIN"] : []),
      "DEEP",
    ],
  })),
  claims: Array.from({ length: 6 }, (_, index) => ({
    id: index === 0 ? "claim_core" : `claim_${index}`,
    text: `Atomic test claim ${index}.`,
    epistemic_status: "OBSERVED",
    importance: index === 0 ? "CORE" : "SUPPORTING",
    confidence: 1,
    source_refs: ["source_paper"],
    verification_status: "VERIFIED",
  })),
  source_refs: [
    {
      id: "source_paper",
      source_kind: "PAPER",
      label: "Test paper",
      url: "https://example.com/paper",
      locator: "Section 1",
    },
  ],
  visuals: [
    {
      id: "visual_flow",
      after_block_id: "mechanism",
      after_paragraph_id: "mechanism_p1",
      type: "PIPELINE_FLOW",
      title: "Test flow",
      question: "How does the test flow work?",
      items: [
        { label: "Input", detail: "Start with evidence." },
        { label: "Output", detail: "Produce a reviewable claim." },
      ],
      claim_ids: ["claim_core"],
      source_refs: ["source_paper"],
      interpretation: "The flow preserves provenance.",
      limitations: ["This is a schema fixture, not a scientific result."],
      alt_text: "Evidence flows into a reviewable claim.",
      fallback: "Input: evidence. Output: a reviewable claim.",
    },
  ],
  glossary: [
    { term: "Evidence", definition: "Support for a claim.", source_refs: ["source_paper"] },
    { term: "Claim", definition: "An atomic statement.", source_refs: ["source_paper"] },
  ],
  revision_notes: ["Initial schema fixture."],
};

describe("ExplainerDocument schema", () => {
  it("accepts a complete source-backed document", () => {
    expect(validateExplainerDocument(validExplainer)).toBe(true);
    expect(parseExplainerDocument(validExplainer).paper_id).toBe("paper_schema_test");
  });

  it("rejects a document without visual limitations", () => {
    const invalid = structuredClone(validExplainer);
    invalid.visuals[0].limitations = [];

    expect(validateExplainerDocument(invalid)).toBe(false);
    expect(() => parseExplainerDocument(invalid)).toThrow("Invalid ExplainerDocument");
  });

  it("rejects dangling claim references", () => {
    const invalid = structuredClone(validExplainer);
    invalid.blocks[0].claim_ids = ["missing_claim"];

    expect(validateExplainerDocument(invalid)).toBe(false);
    expect(() => parseExplainerDocument(invalid)).toThrow(
      "block why claim references unknown id missing_claim",
    );
  });

  it("rejects a visual placed after an unknown block", () => {
    const invalid = structuredClone(validExplainer);
    invalid.visuals[0].after_block_id = "missing_block";

    expect(validateExplainerDocument(invalid)).toBe(false);
    expect(() => parseExplainerDocument(invalid)).toThrow(
      "visual visual_flow references unknown placement block missing_block",
    );
  });

  it("rejects a visual placed after an unknown paragraph", () => {
    const invalid = structuredClone(validExplainer);
    invalid.visuals[0].after_paragraph_id = "mechanism_p9";

    expect(validateExplainerDocument(invalid)).toBe(false);
    expect(() => parseExplainerDocument(invalid)).toThrow(
      "visual visual_flow references unknown placement paragraph mechanism_p9",
    );
  });

  it("rejects reading paths without mechanism and caveats", () => {
    const invalid = structuredClone(validExplainer);
    invalid.reading_paths.FIVE_MIN = ["why", "evidence"];

    expect(validateExplainerDocument(invalid)).toBe(false);
    expect(() => parseExplainerDocument(invalid)).toThrow(
      "FIVE_MIN reading path omits HOW_IT_WORKS",
    );
  });

  it("accepts grouped, bounded values and visual-local relationships", () => {
    const grouped = structuredClone(validExplainer);
    grouped.visuals[0].items = [
      {
        label: "Measured input",
        detail: "A disclosed source value.",
        value: 52.5,
        value_end: 53.5,
        value_label: "52.5–53.5%",
        group: "Measured results",
        role: "MEASURED",
        domain_min: 50,
        domain_max: 55,
        node_id: "measured_input",
      },
      {
        label: "Weighted merge",
        detail: "The input is aggregated with an explicit weight.",
        group: "Aggregation",
        role: "DERIVED",
        node_id: "weighted_merge",
        input_ids: ["measured_input"],
        annotations: [
          { label: "Shared outcome", detail: "One trajectory-level signal." },
          { label: "Local credit", detail: "A turn-aligned signal." },
        ],
      },
    ];

    expect(validateExplainerDocument(grouped)).toBe(true);
  });

  it("rejects incomplete numeric domains and dangling visual inputs", () => {
    const invalid = structuredClone(validExplainer);
    invalid.visuals[0].items = [
      {
        label: "Input",
        detail: "An incomplete plot definition.",
        value: 1,
        domain_min: 0,
        node_id: "input",
      },
      {
        label: "Output",
        detail: "A relationship to an absent node.",
        input_ids: ["missing_node"],
      },
    ];

    expect(validateExplainerDocument(invalid)).toBe(false);
    expect(() => parseExplainerDocument(invalid)).toThrow(
      "must declare both domain bounds",
    );
  });
});

function validPathIncludes(depth: "FIVE_MIN" | "TWENTY_MIN", blockId: string): boolean {
  const paths = {
    FIVE_MIN: ["why", "mechanism", "evidence", "limitations"],
    TWENTY_MIN: ["why", "change", "mechanism", "example", "evidence", "limitations"],
  };
  return paths[depth].includes(blockId);
}
