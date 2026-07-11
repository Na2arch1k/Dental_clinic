"use client";

import { clsx } from "clsx";
import { useLanguage } from "@/lib/i18n";
import type { Locale } from "@/lib/content/types";

const options: { code: Locale; label: string }[] = [
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const { locale, setLocale, content } = useLanguage();

  return (
    <div
      role="group"
      aria-label={content.languageSwitcher.aria}
      className={clsx(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5 text-xs font-semibold",
        dark ? "border-white/20" : "border-mist-300 bg-white/70 backdrop-blur",
        className,
      )}
    >
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLocale(option.code)}
          aria-pressed={locale === option.code}
          className={clsx(
            "rounded-full px-2.5 py-1.5 transition-colors duration-300",
            locale === option.code
              ? dark
                ? "bg-white/15 text-cyan-300"
                : "bg-deep-800 text-white"
              : dark
                ? "text-mist-300 hover:text-white"
                : "text-ink-700 hover:text-deep-900",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
