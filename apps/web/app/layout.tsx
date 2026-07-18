import "@fontsource-variable/source-sans-3";
import "@fontsource-variable/source-serif-4";
import "./globals.css";

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Paper Atlas",
    template: "%s · Paper Atlas",
  },
  description: "A trustworthy scientific index and explainer platform.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/">
          Paper Atlas
        </Link>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          <Link href="/papers/paper_attention_is_all_you_need">Papers</Link>
          <span aria-disabled="true">Methods</span>
          <span aria-disabled="true">Benchmarks</span>
        </nav>
        <details className="mobile-navigation">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link href="/papers/paper_attention_is_all_you_need">Papers</Link>
            <span aria-disabled="true">Methods</span>
            <span aria-disabled="true">Benchmarks</span>
          </nav>
        </details>
      </div>
    </header>
  );
}

