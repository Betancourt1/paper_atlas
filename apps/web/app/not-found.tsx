import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyeline">404</p>
      <h1>Paper not found</h1>
      <p>The requested fixture is not part of this M0 build.</p>
      <Link href="/papers/paper_attention_is_all_you_need">
        Open the available paper
      </Link>
    </main>
  );
}

