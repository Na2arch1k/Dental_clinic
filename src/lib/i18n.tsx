"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { uk } from "@/lib/content/uk";
import { en } from "@/lib/content/en";
import type { Locale, SiteContent } from "@/lib/content/types";

const dictionaries: Record<Locale, SiteContent> = { uk, en };
const STORAGE_KEY = "emal-locale";

type LanguageContextValue = {
  locale: Locale;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("uk");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "uk" || stored === "en") setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      content: dictionaries[locale],
      setLocale: setLocaleState,
      toggleLocale: () =>
        setLocaleState((current) => (current === "uk" ? "en" : "uk")),
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export function useContent() {
  return useLanguage().content;
}
