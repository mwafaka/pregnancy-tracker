import type { MetadataRoute } from "next";
import { SITE_CONFIG, CALCULATOR_ROUTES } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/dashboard`, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${baseUrl}/tracker`, changeFrequency: "daily" as const, priority: 0.8 },
  ];

  const calculatorPages = CALCULATOR_ROUTES.map((calc) => ({
    url: `${baseUrl}/tools/${calc.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const weekPages = Array.from({ length: 40 }, (_, i) => ({
    url: `${baseUrl}/pregnancy-week-by-week/week-${i + 1}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const trimesterPages = [
    { url: `${baseUrl}/trimester/first-trimester`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/trimester/second-trimester`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/trimester/third-trimester`, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const contentPages = [
    { url: `${baseUrl}/symptoms/nausea`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/nutrition/foods-to-avoid`, changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return [...staticPages, ...calculatorPages, ...weekPages, ...trimesterPages, ...contentPages];
}
