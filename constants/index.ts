export const SITE_CONFIG = {
  name: "PregnancyTracker",
  title: "PregnancyTracker — Your Complete Pregnancy Companion",
  description:
    "Track your pregnancy week by week, calculate due dates, ovulation, and more. Evidence-based tools and resources for every stage of your journey.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pregnancytracker.com",
  locale: "en_US",
  type: "MedicalWebPage" as const,
  author: "PregnancyTracker Medical Team",
  reviewer: "Dr. Sarah Mitchell, OB-GYN",
  disclaimer:
    "This website provides general information and is not a substitute for professional medical advice. Always consult your healthcare provider for medical decisions.",
  legal: {
    informationalOnly: true,
    notMedicalAdvice: true,
    consultProvider: true,
  },
  social: {
    twitter: "@pregnancytracker",
  },
  version: "1.0.0",
} as const;

export const PREGNANCY_DURATION_WEEKS = 40;
export const PREGNANCY_DURATION_DAYS = 280;
export const AVERAGE_CYCLE_LENGTH = 28;
export const AVERAGE_PERIOD_LENGTH = 5;
export const LUTEAL_PHASE_LENGTH = 14;
export const FERTILE_WINDOW_DAYS = 6;
export const IMPLANTATION_DAYS = 9;
export const IVF_EMBRYO_AGE_DAYS = 5;

export const TRIMESTER_LABELS: Record<1 | 2 | 3, { label: string; weeks: string }> = {
  1: { label: "First Trimester", weeks: "Week 1–13" },
  2: { label: "Second Trimester", weeks: "Week 14–27" },
  3: { label: "Third Trimester", weeks: "Week 28–40" },
};

export const BMI_CATEGORIES = {
  underweight: { min: 0, max: 18.4, gain: { min: 12.5, max: 18 } },
  normal: { min: 18.5, max: 24.9, gain: { min: 11.5, max: 16 } },
  overweight: { min: 25, max: 29.9, gain: { min: 7, max: 11.5 } },
  obese: { min: 30, max: 99, gain: { min: 5, max: 9 } },
} as const;

export const WEEKLY_GAIN_RATES: Record<string, { min: number; max: number }> = {
  underweight: { min: 0.44, max: 0.58 },
  normal: { min: 0.35, max: 0.5 },
  overweight: { min: 0.23, max: 0.33 },
  obese: { min: 0.17, max: 0.27 },
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Calculators", href: "#calculators" },
  { label: "Week by Week", href: "/pregnancy-week-by-week/week-1" },
  { label: "Dashboard", href: "/dashboard" },
] as const;

export const CALCULATOR_ROUTES = [
  { slug: "due-date-calculator", label: "Due Date Calculator", icon: "Calendar" },
  { slug: "pregnancy-week-calculator", label: "Pregnancy Week Calculator", icon: "CalendarDays" },
  { slug: "ovulation-calculator", label: "Ovulation Calculator", icon: "CalendarCheck" },
  { slug: "conception-calculator", label: "Conception Calculator", icon: "Heart" },
  { slug: "ivf-calculator", label: "IVF Calculator", icon: "FlaskConical" },
  { slug: "weight-gain-calculator", label: "Weight Gain Calculator", icon: "Weight" },
  { slug: "baby-growth-timeline", label: "Baby Growth Timeline", icon: "Baby" },
] as const;

export const RESULTS_STORAGE_KEY = "pregnancy-tracker-results";
export const PROFILE_STORAGE_KEY = "pregnancy-tracker-profile";
export const THEME_STORAGE_KEY = "pregnancy-tracker-theme";
