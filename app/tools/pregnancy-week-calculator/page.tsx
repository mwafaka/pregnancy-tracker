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
      <section className="mb-8 space-y-4">
        <h1 className="text-3xl font-display font-bold gradient-text">Pregnancy Week Calculator</h1>
        <p className="text-muted-foreground leading-relaxed">
          Our pregnancy week calculator tells you exactly how far along you are in your pregnancy. Based on the first day of your last menstrual period (LMP), it calculates your current pregnancy week and trimester.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Pregnancy is counted from the first day of your last period, which means you are considered about 2 weeks pregnant at the time of conception. The calculator uses standard 40-week pregnancy dating to determine your current stage and trimester.
        </p>
        <p className="text-sm text-muted-foreground">
          All calculations are performed locally in your browser. No data is stored or transmitted.
        </p>
      </section>
      <PregnancyWeekCalculator />
    </div>
  );
}
