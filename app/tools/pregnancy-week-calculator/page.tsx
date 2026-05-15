import dynamic from "next/dynamic";
import { SkeletonLoader } from "@/components/shared/skeleton-loader";
import { generateMetadata } from "@/seo/metadata";
import { generateToolSchema, generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG } from "@/constants";

const PregnancyWeekCalculator = dynamic(
  () => import("@/components/calculators/pregnancy-week-calculator").then((m) => m.PregnancyWeekCalculator),
  { loading: () => <SkeletonLoader variant="card" /> }
);

export const metadata = generateMetadata({
  title: "Pregnancy Week Calculator",
  description: "Find out which week of pregnancy you are in. Calculate your current pregnancy week based on your last menstrual period.",
  path: "/tools/pregnancy-week-calculator",
});

const toolSchema = generateToolSchema({
  name: "Pregnancy Week Calculator",
  description: "Find out your current pregnancy week based on your last menstrual period.",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_CONFIG.url },
  { name: "Pregnancy Tools", url: `${SITE_CONFIG.url}/tools` },
  { name: "Pregnancy Week Calculator", url: `${SITE_CONFIG.url}/tools/pregnancy-week-calculator` },
]);

export default function PregnancyWeekPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([toolSchema, breadcrumbSchema]) }}
      />
      <PregnancyWeekCalculator />
    </div>
  );
}
