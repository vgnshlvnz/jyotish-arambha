"use client";

import { createContext, useContext } from "react";
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
