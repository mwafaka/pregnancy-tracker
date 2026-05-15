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
      <ConceptionCalculator />
    </div>
  );
}
