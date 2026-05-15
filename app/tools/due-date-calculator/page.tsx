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
      <DueDateCalculator />
    </div>
  );
}
