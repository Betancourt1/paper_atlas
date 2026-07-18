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
    FIVE_MIN: ["why", "mechanism", "limitations"],
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
    reading_depths: ["DEEP"],
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
});
