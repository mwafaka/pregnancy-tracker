import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  locale?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex,
  locale = SITE_CONFIG.locale,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
}: GenerateMetadataProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const siteTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const defaultOgImage = "/opengraph-image";

  const metadata: Metadata = {
    title: siteTitle,
    description: description ?? SITE_CONFIG.description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
      languages: {
        en: SITE_CONFIG.url,
        ar: `${SITE_CONFIG.url}/ar`,
      },
    },
    openGraph: {
      title: title ?? siteTitle,
      description: description ?? SITE_CONFIG.description,
      url,
      siteName: SITE_CONFIG.name,
      locale,
      type,
      images: [
        {
          url: ogImage ?? defaultOgImage,
          width: 1200,
          height: 630,
          alt: description ?? SITE_CONFIG.description,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteTitle,
      description: description ?? SITE_CONFIG.description,
      images: [ogImage ?? defaultOgImage],
      site: SITE_CONFIG.social.twitter,
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
    other: {
      "application-name": SITE_CONFIG.name,
    },
    ...(SITE_CONFIG.keywords.length > 0 && {
      keywords: [...SITE_CONFIG.keywords, ...(keywords ?? [])].join(", "),
    }),
  };

  if (authors && authors.length > 0) {
    metadata.authors = authors.map((name) => ({ name }));
  }

  return metadata;
}
