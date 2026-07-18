import type { Author } from "@paper-atlas/content-schema";

export function formatAuthorLine(authors: readonly Author[]): string {
  if (authors.length <= 3) {
    return new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(
      authors.map((author) => author.name),
    );
  }

  return `${authors[0]?.name ?? "Unknown author"} and collaborators`;
}

