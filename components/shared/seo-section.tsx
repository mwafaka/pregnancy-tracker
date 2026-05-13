"use client";

import { useEffect } from "react";
import { SITE_CONFIG } from "@/constants";
import type { FAQItem } from "@/types";

interface SEOSectionProps {
  jsonLd?: Record<string, unknown>[];
  faqs?: FAQItem[];
  breadcrumbs?: { name: string; url: string }[];
}

export function SEOSection({ jsonLd, faqs, breadcrumbs }: SEOSectionProps) {
  useEffect(() => {
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

    schemas.forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `seo-schema-${i}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, i) => {
        const el = document.getElementById(`seo-schema-${i}`);
        if (el) el.remove();
      });
    };
  }, [jsonLd, faqs, breadcrumbs]);

  return null;
}
