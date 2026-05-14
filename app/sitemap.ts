import type { MetadataRoute } from "next";
import { SITE_CONFIG, CALCULATOR_ROUTES } from "@/constants";

const symptomSlugs = [
  "nausea",
  "fatigue",
  "breast-tenderness",
  "frequent-urination",
  "food-cravings",
  "mood-swings",
  "bloating",
  "constipation",
  "heartburn",
  "back-pain",
  "leg-cramps",
  "shortness-of-breath",
  "swollen-feet",
  "headaches",
  "dizziness",
  "braxton-hicks",
  "insomnia",
  "stretch-marks",
  "varicose-veins",
];

const nutritionSlugs = [
  "foods-to-avoid",
  "prenatal-vitamins",
  "first-trimester-nutrition",
  "second-trimester-nutrition",
  "third-trimester-nutrition",
  "hydration-during-pregnancy",
  "safe-exercise-during-pregnancy",
];

const contentSlugs = [
  "understanding-pregnancy-trimesters",
  "signs-of-labor",
  "preparing-for-childbirth",
  "newborn-essentials",
  "breastfeeding-basics",
  "postpartum-recovery",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/dashboard`, lastModified: now, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${baseUrl}/tracker`, lastModified: now, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/pregnancy-week-by-week`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/symptoms`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/nutrition`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/trimester`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/onboarding`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/settings`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  const calculatorPages = CALCULATOR_ROUTES.map((calc) => ({
    url: `${baseUrl}/tools/${calc.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const weekPages = Array.from({ length: 40 }, (_, i) => ({
    url: `${baseUrl}/pregnancy-week-by-week/week-${i + 1}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const trimesterPages = [
    { url: `${baseUrl}/trimester/first-trimester`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/trimester/second-trimester`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/trimester/third-trimester`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const symptomPages = symptomSlugs.map((slug) => ({
    url: `${baseUrl}/symptoms/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const nutritionPages = nutritionSlugs.map((slug) => ({
    url: `${baseUrl}/nutrition/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const contentPages = contentSlugs.map((slug) => ({
    url: `${baseUrl}/content/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const legalPages = [
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  return [
    ...staticPages,
    ...calculatorPages,
    ...weekPages,
    ...trimesterPages,
    ...symptomPages,
    ...nutritionPages,
    ...contentPages,
    ...legalPages,
  ];
}
