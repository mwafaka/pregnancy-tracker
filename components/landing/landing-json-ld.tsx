import { SITE_CONFIG } from "@/constants";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is the due date calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The due date calculator uses the standard 280-day Naegele's rule based on your last menstrual period. While generally accurate, only about 5% of babies arrive exactly on their due date. Most are born between 38-42 weeks. Always confirm with your healthcare provider.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All calculations are performed locally in your browser. We never store or transmit your personal health information. No account is required to use any of our calculators. Our platform is designed with privacy-first architecture.",
      },
    },
    {
      "@type": "Question",
      name: "When should I take a pregnancy test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For the most accurate result, wait until the first day of your missed period. Some sensitive tests may detect pregnancy earlier, but waiting reduces the chance of a false negative. Tests work by detecting hCG in your urine.",
      },
    },
    {
      "@type": "Question",
      name: "What weeks are each trimester?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pregnancy is divided into three trimesters: First trimester (weeks 1-13), Second trimester (weeks 14-27), and Third trimester (weeks 28-40). Each trimester brings different developmental milestones and physical changes.",
      },
    },
    {
      "@type": "Question",
      name: "How much weight should I gain during pregnancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recommended weight gain depends on your pre-pregnancy BMI. Underweight: 28-40 lbs, Normal weight: 25-35 lbs, Overweight: 15-25 lbs, Obese: 11-20 lbs. Your healthcare provider can give personalized guidance based on your health profile.",
      },
    },
    {
      "@type": "Question",
      name: "When will I feel the baby move?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most first-time parents feel movement (quickening) between 18-22 weeks. If you've been pregnant before, you may feel it earlier, around 16-18 weeks. Every pregnancy is different, and the timing varies.",
      },
    },
    {
      "@type": "Question",
      name: "What foods should I avoid during pregnancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avoid raw or undercooked meat, unpasteurized dairy, raw fish (sushi), high-mercury fish, raw eggs, alcohol, and limit caffeine to 200mg per day. Always wash produce thoroughly.",
      },
    },
    {
      "@type": "Question",
      name: "How does the ovulation calculator work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our ovulation calculator predicts your fertile window based on your cycle length and last menstrual period. It estimates ovulation day (typically 14 days before your next period) and the 6-day fertile window when conception is most likely.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": SITE_CONFIG.url,
  url: SITE_CONFIG.url,
  name: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  about: {
    "@type": "Thing",
    name: "Pregnancy Tracking and Tools",
  },
  specialty: "Obstetrics",
  lastReviewed: new Date().toISOString().split("T")[0],
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_CONFIG.url}/opengraph-image`,
    width: 1200,
    height: 630,
  },
};

const schemas = [faqSchema, breadcrumbSchema, webPageSchema];

export function LandingJsonLd() {
  return (
    <script
      type="application/ld+json"
      id="landing-schema-jsonld"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
