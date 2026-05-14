import { WeightGainCalculator } from "@/components/calculators/weight-gain-calculator";
import { generateMetadata } from "@/seo/metadata";
import { generateToolSchema, generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG } from "@/constants";

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
      <WeightGainCalculator />
    </div>
  );
}
