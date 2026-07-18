import {
  parsePaperSummary,
  type PaperSummary,
} from "@paper-atlas/content-schema";

export async function getPaperSummary(
  baseUrl: string,
  paperId: string,
  init?: RequestInit,
): Promise<PaperSummary> {
  const response = await fetch(
    `${baseUrl.replace(/\/$/, "")}/v1/papers/${encodeURIComponent(paperId)}`,
    init,
  );

  if (!response.ok) {
    throw new PaperAtlasApiError(response.status, await response.text());
  }

  return parsePaperSummary(await response.json());
}

export class PaperAtlasApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message || `Paper Atlas API request failed with ${status}`);
    this.name = "PaperAtlasApiError";
  }
}

