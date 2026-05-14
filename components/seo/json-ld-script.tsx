import { SITE_CONFIG } from "@/constants";

export function JsonLdScript() {
  const siteSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    headline: SITE_CONFIG.title,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
    },
    medicalSpecialty: "Obstetrics",
    relevantSpecialty: "Gynecology",
    reviewedBy: {
      "@type": "Person",
      name: SITE_CONFIG.reviewer,
    },
    lastReviewed: new Date().toISOString().split("T")[0],
    mainContentOfPage: {
      "@type": "WebPageElement",
      specialty: "Obstetrics",
    },
    about: {
      "@type": "Thing",
      name: "Pregnancy",
      description: "The process of pregnancy from conception to birth",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Pregnant women and their families",
    },
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by-nc/4.0/",
    inLanguage: "en",
    publisher: { "@type": "Organization", "@id": `${SITE_CONFIG.url}#organization` },
    mainEntity: { "@type": "WebApplication", "@id": `${SITE_CONFIG.url}#webapplication` },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}#organization`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    logo: `${SITE_CONFIG.url}/icon.svg`,
    sameAs: [
      `https://twitter.com/${SITE_CONFIG.social.twitter.replace("@", "")}`,
      `https://facebook.com/${SITE_CONFIG.social.facebook}`,
      `https://instagram.com/${SITE_CONFIG.social.instagram}`,
    ],
    knowsAbout: [
      { "@type": "Thing", name: "Pregnancy tracking" },
      { "@type": "Thing", name: "Due date calculation" },
      { "@type": "Thing", name: "Ovulation tracking" },
      { "@type": "Thing", name: "Prenatal health" },
    ],
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.author,
    },
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${SITE_CONFIG.url}#webapplication`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    applicationCategory: "HealthApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Due Date Calculator",
      "Ovulation Calculator",
      "Pregnancy Week by Week",
      "Weight Gain Tracker",
      "Symptom Tracker",
      "Baby Growth Timeline",
      "Conception Calculator",
      "IVF Calculator",
      "Birth Plan Builder",
      "Contraction Timer",
    ],
  };

  const jsonLd = [siteSchema, organizationSchema, webAppSchema];

  return (
    <script
      type="application/ld+json"
      id="schema-jsonld"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
