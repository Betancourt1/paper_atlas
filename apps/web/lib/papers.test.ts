import { describe, expect, it } from "vitest";

import { getPaperById, listPapers } from "./papers";

describe("getPaperById", () => {
  it("returns the canonical fixture", () => {
    expect(getPaperById("paper_attention_is_all_you_need")?.title).toBe(
      "Attention Is All You Need",
    );
  });

  it("returns undefined for an unknown paper", () => {
    expect(getPaperById("paper_missing")).toBeUndefined();
  });
});

describe("listPapers", () => {
  it("returns the digest first and keeps the baseline fixture", () => {
    expect(listPapers()).toHaveLength(8);
    expect(listPapers()[0]?.id).toBe("paper_trace");
    expect(listPapers().at(-1)?.id).toBe(
      "paper_attention_is_all_you_need",
    );
  });
});
