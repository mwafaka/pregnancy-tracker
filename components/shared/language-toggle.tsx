"use client";

import { useLocale } from "@/context/locale-context";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, setLocale, t } = useLocale();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ar" : "en")}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400",
        className,
      )}
      aria-label={locale === "en" ? t("language.switchToArabic") : t("language.switchToEnglish")}
    >
      <span className="text-xs font-bold">
        {locale === "en" ? "AR" : "EN"}
      </span>
    </button>
  );
}
