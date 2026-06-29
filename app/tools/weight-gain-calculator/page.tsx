import dynamic from "next/dynamic";
import { SkeletonLoader } from "@/components/shared/skeleton-loader";
import { generateMetadata } from "@/seo/metadata";
import { generateToolSchema, generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG } from "@/constants";

const WeightGainCalculator = dynamic(
  () => import("@/components/calculators/weight-gain-calculator").then((m) => m.WeightGainCalculator),
  { loading: () => <SkeletonLoader variant="card" /> }
);

export const metadata = generateMetadata({
  title: "Pregnancy Weight Gain Calculator",
  description: "Track your pregnancy weight gain against IOM-recommended ranges based on your pre-pregnancy BMI. Free, evidence-based weight gain tracker.",
  path: "/tools/weight-gain-calculator",
});

const toolSchema = generateToolSchema({
  name: "Pregnancy Weight Gain Calculator",
  description: "Track pregnancy weight gain against IOM-recommended ranges based on pre-pregnancy BMI.",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_CONFIG.url },
  { name: "Pregnancy Tools", url: `${SITE_CONFIG.url}/tools` },
  { name: "Pregnancy Weight Gain Calculator", url: `${SITE_CONFIG.url}/tools/weight-gain-calculator` },
]);

export default function WeightGainCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([toolSchema, breadcrumbSchema]) }}
      />
      <section className="mb-8 space-y-4">
        <h1 className="text-3xl font-display font-bold gradient-text">Pregnancy Weight Gain Calculator</h1>
        <p className="text-muted-foreground leading-relaxed">
          Our pregnancy weight gain calculator helps you track healthy weight gain throughout your pregnancy based on IOM (Institute of Medicine) guidelines. By entering your pre-pregnancy weight, height, and current pregnancy information, you can see how your gain compares to recommended ranges for your BMI category.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Recommended weight gain varies by pre-pregnancy BMI: underweight (28-40 lbs), normal weight (25-35 lbs), overweight (15-25 lbs), and obese (11-20 lbs). The calculator shows your current gain, target range, and weekly rate to help you stay on track.
        </p>
        <p className="text-sm text-muted-foreground">
          All calculations are performed locally in your browser. No data is stored or transmitted.
        </p>
      </section>
      <WeightGainCalculator />
    </div>
  );
}
