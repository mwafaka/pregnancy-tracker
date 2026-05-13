"use client";

import { useEffect, type ReactNode } from "react";
import { useLocale } from "@/context/locale-context";

export function LocaleHtmlSetter({ children }: { children: ReactNode }) {
  const { locale, dir } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return <>{children}</>;
}
