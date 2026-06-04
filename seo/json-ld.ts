import type { SEOMetadata, FAQItem } from "@/types";

export function generateSiteMetadata(overrides: Partial<SEOMetadata>): SEOMetadata {
  const base = {
    title: "Pregnancy-Trackers",
    description: "Track your pregnancy week by week with evidence-based tools and resources.",
    canonical: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pregnancy-trackers.com",
  };
  return { ...base, ...overrides };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateMedicalWebPageSchema({
  description,
  author,
  reviewer,
  lastReviewed,
}: {
  description: string;
  author?: string;
  reviewer?: string;
  lastReviewed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    ...(description && { description }),
    ...(author && {
      author: { "@type": "Person", name: author },
    }),
    ...(reviewer && {
      reviewer: { "@type": "Person", name: reviewer },
      lastReviewed: lastReviewed ?? new Date().toISOString(),
    }),
    mainContentOfPage: {
      "@type": "WebPageElement",
      specialty: "Obstetrics",
    },
  };
}

export function generateMedicalWebPageJsonLd(description: string, author?: string, reviewer?: string) {
  return generateMedicalWebPageSchema({ description, author, reviewer });
}

export function generateToolSchema({ name, description }: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    applicationCategory: "HealthApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript",
  };
}

export const defaultOpenGraph = {
  type: "website",
  locale: "en_US",
  siteName: "Pregnancy-Trackers",
};
