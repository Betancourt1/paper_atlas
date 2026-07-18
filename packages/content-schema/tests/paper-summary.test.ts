import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { parsePaperSummary, validatePaperSummary } from "../src/index.js";

const fixtureDirectory = fileURLToPath(
  new URL("../../test-fixtures/papers/", import.meta.url),
);
const fixtures: unknown[] = readdirSync(fixtureDirectory)
  .filter((filename) => filename.endsWith(".json"))
  .map((filename) =>
    JSON.parse(readFileSync(`${fixtureDirectory}/${filename}`, "utf8")),
  );

describe("PaperSummary", () => {
  it("validates every fixture", () => {
    expect(fixtures).toHaveLength(8);
    expect(fixtures.every(validatePaperSummary)).toBe(true);
    expect(fixtures.map((fixture) => parsePaperSummary(fixture).id)).toContain(
      "paper_trace",
    );
  });

  it("rejects unknown fields", () => {
    expect(
      validatePaperSummary({ ...parsePaperSummary(fixtures[0]), extra: true }),
    ).toBe(false);
  });
});
