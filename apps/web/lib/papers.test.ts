import { describe, expect, it } from "vitest";

import { getExplainerByPaperId, getPaperById, listPapers } from "./papers";

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

describe("getExplainerByPaperId", () => {
  it("returns each source-backed explainer", () => {
    const explainer = getExplainerByPaperId("paper_trace");

    expect(explainer?.paper_version).toBe("v1");
    expect(explainer?.blocks).toHaveLength(7);
    expect(explainer?.editorial_status).toBe("REVIEWED");
  });

  it("returns undefined for an unknown paper", () => {
    expect(getExplainerByPaperId("paper_missing")).toBeUndefined();
  });
});
