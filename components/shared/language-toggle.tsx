"use client";

import { useLocale } from "@/context/locale-context";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

const nextLocale: Record<Locale, Locale> = {
  en: "de",
  de: "en",
};

const localeLabel: Record<Locale, string> = {
  en: "EN",
  de: "DE",
};

const ariaLabelKey: Record<Locale, string> = {
  en: "language.switchToGerman",
  de: "language.switchToEnglish",
};

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, setLocale } = useLocale();

  return (
    <button
      onClick={() => setLocale(nextLocale[locale])}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400",
        className,
      )}
      aria-label={ariaLabelKey[locale]}
    >
      <span className="text-xs font-bold">
        {localeLabel[locale]}
      </span>
    </button>
  );
}
