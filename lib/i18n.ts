export const locales = ["en-US"] as const;
export const defaultLocale = "en-US";

type Locale = (typeof locales)[number];

const messages: Record<Locale, Record<string, string>> = {
  "en-US": {
    "nav.home": "Home",
    "nav.calculators": "Calculators",
    "nav.weekByWeek": "Week by Week",
    "nav.dashboard": "Dashboard",
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.retry": "Try again",
    "common.share": "Share",
    "common.export": "Export",
    "common.calculate": "Calculate",
    "disclaimer.title": "Medical Disclaimer",
    "disclaimer.text": "This website provides general information and is not a substitute for professional medical advice. Always consult your healthcare provider for medical decisions.",
    "disclaimer.informational": "Informational only",
    "disclaimer.notMedicalAdvice": "Not medical advice",
    "disclaimer.consultProvider": "Consult your healthcare provider",
  },
};

export function t(key: string, locale: Locale = defaultLocale): string {
  return messages[locale]?.[key] ?? key;
}

export function getLocaleFromPath(path: string): Locale {
  const match = path.match(/^\/([a-z]{2}-[A-Z]{2})\//);
  if (match && locales.includes(match[1] as Locale)) return match[1] as Locale;
  return defaultLocale;
}
