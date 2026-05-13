import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex,
}: GenerateMetadataProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const siteTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;

  return {
    title: siteTitle,
    description: description ?? SITE_CONFIG.description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title ?? siteTitle,
      description: description ?? SITE_CONFIG.description,
      url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteTitle,
      description: description ?? SITE_CONFIG.description,
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
    other: {
      "application-name": SITE_CONFIG.name,
    },
  };
}
