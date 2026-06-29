import type { MetadataRoute } from "next";
import { SITE_CONFIG, CALCULATOR_ROUTES } from "@/constants";

const symptomSlugs = [
  "nausea",
  "fatigue",
];

const nutritionSlugs = [
  "foods-to-avoid",
  "prenatal-vitamins",
];

const contentSlugs = [
  "understanding-pregnancy-trimesters",
];

const buildDate = new Date("2025-06-29");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    { url: baseUrl, lastModified: buildDate, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/tools`, lastModified: buildDate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/pregnancy-week-by-week`, lastModified: buildDate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/symptoms`, lastModified: buildDate, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/nutrition`, lastModified: buildDate, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/trimester`, lastModified: buildDate, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const calculatorPages = CALCULATOR_ROUTES.map((calc) => ({
    url: `${baseUrl}/tools/${calc.slug}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const weekPages = Array.from({ length: 40 }, (_, i) => ({
    url: `${baseUrl}/pregnancy-week-by-week/week-${i + 1}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const trimesterPages = [
    { url: `${baseUrl}/trimester/first-trimester`, lastModified: buildDate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/trimester/second-trimester`, lastModified: buildDate, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/trimester/third-trimester`, lastModified: buildDate, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const symptomPages = symptomSlugs.map((slug) => ({
    url: `${baseUrl}/symptoms/${slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const nutritionPages = nutritionSlugs.map((slug) => ({
    url: `${baseUrl}/nutrition/${slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const contentPages = contentSlugs.map((slug) => ({
    url: `${baseUrl}/content/${slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const legalPages = [
    { url: `${baseUrl}/privacy`, lastModified: buildDate, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/impressum`, lastModified: buildDate, changeFrequency: "yearly" as const, priority: 0.2 },
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
