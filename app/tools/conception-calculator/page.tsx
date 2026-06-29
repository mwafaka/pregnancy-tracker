import dynamic from "next/dynamic";
import { SkeletonLoader } from "@/components/shared/skeleton-loader";
import { generateMetadata } from "@/seo/metadata";
import { generateToolSchema, generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG } from "@/constants";

const ConceptionCalculator = dynamic(
  () => import("@/components/calculators/conception-calculator").then((m) => m.ConceptionCalculator),
  { loading: () => <SkeletonLoader variant="card" /> }
);

export const metadata = generateMetadata({
  title: "Conception Date Calculator",
  description: "Estimate when conception likely occurred based on your due date. Free reverse due date calculator for pregnancy dating.",
  path: "/tools/conception-calculator",
});

const toolSchema = generateToolSchema({
  name: "Conception Date Calculator",
  description: "Estimate when conception likely occurred based on your due date.",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_CONFIG.url },
  { name: "Pregnancy Tools", url: `${SITE_CONFIG.url}/tools` },
  { name: "Conception Date Calculator", url: `${SITE_CONFIG.url}/tools/conception-calculator` },
]);

export default function ConceptionCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([toolSchema, breadcrumbSchema]) }}
      />
      <section className="mb-8 space-y-4">
        <h1 className="text-3xl font-display font-bold gradient-text">Conception Date Calculator</h1>
        <p className="text-muted-foreground leading-relaxed">
          Our conception date calculator estimates when conception likely occurred by working backward from your due date. Conception typically happens around ovulation — about 14 days after the first day of your last menstrual period for a standard 28-day cycle.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The calculator also estimates your fertile window, approximate implantation date (6-12 days after ovulation), and when you can expect a positive pregnancy test. This reverse calculation is useful for dating a pregnancy when the exact LMP is unknown.
        </p>
        <p className="text-sm text-muted-foreground">
          All calculations are performed locally in your browser. No data is stored or transmitted.
        </p>
      </section>
      <ConceptionCalculator />
    </div>
  );
}
