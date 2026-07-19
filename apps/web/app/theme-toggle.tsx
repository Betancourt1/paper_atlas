"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const storageKey = "paper-atlas-theme";
const themeChangeEvent = "paper-atlas-theme-change";

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribeToTheme(onThemeChange: () => void) {
  window.addEventListener(themeChangeEvent, onThemeChange);
  return () => window.removeEventListener(themeChangeEvent, onThemeChange);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => "light");

  function toggleTheme() {
    const nextTheme: Theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Dark mode"
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Use light mode" : "Use dark mode"}
      onClick={toggleTheme}
    >
      <svg
        className="theme-toggle__icon theme-toggle__icon--sun"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.28 5.28l1.42 1.42M17.3 17.3l1.42 1.42M18.72 5.28 17.3 6.7M6.7 17.3l-1.42 1.42" />
      </svg>
      <svg
        className="theme-toggle__icon theme-toggle__icon--moon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20 15.3A8 8 0 0 1 8.7 4a8.25 8.25 0 1 0 11.3 11.3Z" />
      </svg>
    </button>
  );
}
