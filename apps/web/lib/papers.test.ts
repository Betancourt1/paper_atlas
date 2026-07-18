import { describe, expect, it } from "vitest";

import { getPaperById } from "./papers";

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

