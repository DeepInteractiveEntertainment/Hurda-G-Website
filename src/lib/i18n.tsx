"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "tr";

/** A localized string: one value per supported language. */
export type L = { en: string; tr: string };
/** A localized list of strings. */
export type LList = { en: string[]; tr: string[] };

export const localize = (v: L, lang: Lang) => v[lang];

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Pick the active-language value from a localized string. */
  t: (v: L) => string;
  /** Pick the active-language value from a localized list. */
  tl: (v: LList) => string[];
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "hurda-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Hydrate saved / browser preference on mount.
  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (saved === "en" || saved === "tr") {
      setLangState(saved);
      document.documentElement.lang = saved;
      return;
    }
    const nav = typeof navigator !== "undefined" ? navigator.language : "en";
    const initial: Lang = nav.toLowerCase().startsWith("tr") ? "tr" : "en";
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    }
  };

  const value: Ctx = {
    lang,
    setLang,
    toggle: () => setLang(lang === "en" ? "tr" : "en"),
    t: (v: L) => v[lang],
    tl: (v: LList) => v[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
