"use client";

import { createContext, useContext, useState } from "react";
import Link from "next/link";
import { dict, LANG_LABELS, LANGS, type Lang } from "./dict";

const LangContext = createContext<Lang>("en");

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang(): Lang {
  return useContext(LangContext);
}

export function useT() {
  const lang = useLang();
  return dict[lang];
}

// Language switcher — sets a cookie and reloads.
export function LangSwitcher() {
  const current = useLang();
  const set = (lang: Lang) => {
    // 1 year cookie
    document.cookie = `jyotish-lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    // Full reload so server components re-render with new cookie
    if (typeof window !== "undefined") window.location.reload();
  };
  return (
    <div className="flex items-center rounded-md border border-ink-500 bg-ink-700 overflow-hidden text-xs">
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => {
            if (l !== current) set(l);
          }}
          className={
            "px-2 py-1 transition-colors " +
            (l === current
              ? "bg-gold-400 text-ink-900 font-semibold"
              : "text-ink-200 hover:bg-ink-600")
          }
          aria-pressed={l === current}
          title={LANG_LABELS[l]}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}

// Mobile hamburger menu — receives links as JSON string since it crosses server→client boundary
export function MobileMenu({ linksJson }: { linksJson: string }) {
  const [open, setOpen] = useState(false);
  const links: { href: string; label: string }[] = JSON.parse(linksJson);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-md bg-ink-700 border border-ink-500 text-ink-200 hover:text-gold-200 transition-colors"
        aria-label="Menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="fixed inset-0 top-[57px] z-40 bg-ink-900/95 backdrop-blur md:hidden">
          <nav className="max-w-md mx-auto px-6 py-6">
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-lg text-ink-100 hover:text-gold-200 hover:bg-ink-700 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
