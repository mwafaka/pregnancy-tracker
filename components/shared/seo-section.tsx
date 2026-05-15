import { SITE_CONFIG } from "@/constants";
import type { FAQItem } from "@/types";

interface SEOSectionProps {
  jsonLd?: Record<string, unknown>[];
  faqs?: FAQItem[];
  breadcrumbs?: { name: string; url: string }[];
}

export function SEOSection({ jsonLd, faqs, breadcrumbs }: SEOSectionProps) {
  const schemas: Record<string, unknown>[] = jsonLd ? [...jsonLd] : [];

  if (faqs && faqs.length > 0) {
    schemas.push({
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
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE_CONFIG.url}${item.url}`,
      })),
    });
  }

  if (schemas.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
