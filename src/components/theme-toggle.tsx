"use client";

import { useLayoutEffect } from "react";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

/** The visitor's stored choice, or the system preference when there is none. */
const resolve = (): Theme => {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // Storage can be unavailable (private mode); fall back to the system.
  }
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const paint = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
};

const store = (theme: Theme) => {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // The theme still applies for this page view.
  }
};

/**
 * Keeps <html data-theme> in step with the stored choice.
 * Switching language remounts the root layout, which drops attributes React
 * does not own; this re-applies the theme before that frame paints.
 */
export function ThemeSync() {
  useLayoutEffect(() => {
    paint(resolve());
    const system = matchMedia("(prefers-color-scheme: dark)");
    const follow = () => paint(resolve());
    system.addEventListener("change", follow);
    window.addEventListener("storage", follow);
    return () => {
      system.removeEventListener("change", follow);
      window.removeEventListener("storage", follow);
    };
  }, []);
  return null;
}

export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const next: Theme = resolve() === "dark" ? "light" : "dark";
    store(next);
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!document.startViewTransition || reduce) {
      paint(next);
      return;
    }
    document.startViewTransition(() => paint(next));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-10 place-items-center rounded-lg border border-line-strong text-[1.1rem] text-ink transition-colors hover:border-signal"
    >
      <SunIcon className="in-data-[theme=dark]:hidden" />
      <MoonIcon className="hidden in-data-[theme=dark]:block" />
    </button>
  );
}

/** Runs before first paint so the stored or system theme never flashes. */
export const themeScript = `(()=>{try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})()`;
