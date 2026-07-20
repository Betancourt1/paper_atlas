"use client";

import { useState } from "react";
import ScrollSpy from "react-scrollspy-navigation";

export type PageMinimapItem = {
  id: string;
  label: string;
  tier: "primary" | "section";
};

export function PageMinimap({ items }: { items: PageMinimapItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <ScrollSpy
      activeClass="is-active"
      activeAttr
      behavior="auto"
      rootMargin="-20% 0px -70% 0px"
      onChangeActiveId={(currentId) => {
        if (currentId) {
          queueMicrotask(() => setActiveId(currentId));
        }
      }}
      onClickEach={(event, scrollToSection) => {
        const nextId = event.currentTarget.hash.slice(1);
        if (nextId) {
          setActiveId(nextId);
          window.history.pushState(null, "", `#${nextId}`);
        }
        scrollToSection();
      }}
    >
      <nav className="page-minimap" aria-label="Document minimap">
        <ol>
          {items.map((item) => (
            <li key={item.id}>
              <a
                className={`page-minimap__marker page-minimap__marker--${item.tier}`}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "location" : undefined}
                aria-label={item.label}
                title={item.label}
              >
                <span className="visually-hidden">{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </ScrollSpy>
  );
}
