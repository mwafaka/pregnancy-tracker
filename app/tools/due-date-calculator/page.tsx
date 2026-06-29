import dynamic from "next/dynamic";
import { SkeletonLoader } from "@/components/shared/skeleton-loader";
import { generateMetadata } from "@/seo/metadata";
import { generateToolSchema, generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG } from "@/constants";

const DueDateCalculator = dynamic(
  () => import("@/components/calculators/due-date-calculator").then((m) => m.DueDateCalculator),
  { loading: () => <SkeletonLoader variant="card" /> }
);

export const metadata = generateMetadata({
  title: "Due Date Calculator",
  description: "Calculate your estimated due date based on your last menstrual period. Free, private, and evidence-based pregnancy due date calculator.",
  path: "/tools/due-date-calculator",
});

const toolSchema = generateToolSchema({
  name: "Due Date Calculator",
  description: "Calculate your estimated due date based on your last menstrual period using Naegele's rule.",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_CONFIG.url },
  { name: "Pregnancy Tools", url: `${SITE_CONFIG.url}/tools` },
  { name: "Due Date Calculator", url: `${SITE_CONFIG.url}/tools/due-date-calculator` },
]);

export default function DueDateCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([toolSchema, breadcrumbSchema]) }}
      />
      <section className="mb-8 space-y-4">
        <h1 className="text-3xl font-display font-bold gradient-text">Due Date Calculator</h1>
        <p className="text-muted-foreground leading-relaxed">
          Our due date calculator uses the standard Naegele's rule — a 280-day pregnancy estimation method widely used by obstetricians. Based on the first day of your last menstrual period (LMP), it calculates your estimated due date, current pregnancy week, trimester, conception date, and how many weeks remain.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          While this calculator provides a reliable estimate, only about 5% of babies arrive exactly on their due date. Most are born between 38 and 42 weeks. Always confirm your due date with your healthcare provider through ultrasound and clinical evaluation.
        </p>
        <p className="text-sm text-muted-foreground">
          All calculations are performed locally in your browser. No data is stored or transmitted.
        </p>
      </section>
      <DueDateCalculator />
    </div>
  );
}
