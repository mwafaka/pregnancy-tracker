import { OvulationCalculator } from "@/components/calculators/ovulation-calculator";
import { generateMetadata } from "@/seo/metadata";
import { generateToolSchema, generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG } from "@/constants";

export const metadata = generateMetadata({
  title: "Ovulation Calculator",
  description: "Calculate your fertile window and ovulation date. Free, private, and evidence-based ovulation tracker to help you plan or prevent pregnancy.",
  path: "/tools/ovulation-calculator",
});

const toolSchema = generateToolSchema({
  name: "Ovulation Calculator",
  description: "Calculate your fertile window and ovulation date based on your cycle.",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_CONFIG.url },
  { name: "Pregnancy Tools", url: `${SITE_CONFIG.url}/tools` },
  { name: "Ovulation Calculator", url: `${SITE_CONFIG.url}/tools/ovulation-calculator` },
]);

export default function OvulationCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([toolSchema, breadcrumbSchema]) }}
      />
      <OvulationCalculator />
    </div>
  );
}
