import { afterEach, describe, expect, it, vi } from "vitest";

import { getPaperSummary, PaperAtlasApiError } from "../src/index.js";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("getPaperSummary", () => {
  it("validates successful responses", async () => {
    const fixture = {
      schema_version: "1.0.0",
      id: "paper_example",
      slug: "example",
      title: "Example",
      summary: "A valid fixture.",
      authors: [{ id: "author_example", name: "Example Author" }],
      published_year: 2026,
      source: {
        type: "URL",
        identifier: "example",
        url: "https://example.com/paper",
      },
      version: "v1",
      status: "PUBLISHED",
    };
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(JSON.stringify(fixture), {
          status: 200,
          headers: { "content-type": "application/json" },
        }),
      ),
    );

    await expect(getPaperSummary("https://api.example.com/", fixture.id)).resolves.toEqual(
      fixture,
    );
  });

  it("exposes non-success responses", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response("not found", { status: 404 })),
    );

    await expect(getPaperSummary("https://api.example.com", "paper_missing")).rejects.toEqual(
      expect.objectContaining<Partial<PaperAtlasApiError>>({ status: 404 }),
    );
  });
});

