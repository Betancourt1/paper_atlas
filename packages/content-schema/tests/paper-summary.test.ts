import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { parsePaperSummary, validatePaperSummary } from "../src/index.js";

const fixturePath = fileURLToPath(
  new URL("../../test-fixtures/papers/paper-summary.json", import.meta.url),
);
const fixture: unknown = JSON.parse(readFileSync(fixturePath, "utf8"));

describe("PaperSummary", () => {
  it("validates the canonical fixture", () => {
    expect(validatePaperSummary(fixture)).toBe(true);
    expect(parsePaperSummary(fixture).id).toBe(
      "paper_attention_is_all_you_need",
    );
  });

  it("rejects unknown fields", () => {
    expect(validatePaperSummary({ ...parsePaperSummary(fixture), extra: true })).toBe(
      false,
    );
  });
});

