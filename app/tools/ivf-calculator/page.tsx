import { IVFDueDateCalculator } from "@/components/calculators/ivf-calculator";
import { generateMetadata } from "@/seo/metadata";
import { generateToolSchema, generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG } from "@/constants";

export const metadata = generateMetadata({
  title: "IVF Due Date Calculator",
  description: "Calculate your IVF due date, egg retrieval date, implantation date, and pregnancy test date based on embryo transfer. Free IVF date calculator.",
  path: "/tools/ivf-calculator",
});

const toolSchema = generateToolSchema({
  name: "IVF Due Date Calculator",
  description: "Calculate IVF due date, egg retrieval, implantation, and pregnancy test dates based on embryo transfer.",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_CONFIG.url },
  { name: "Pregnancy Tools", url: `${SITE_CONFIG.url}/tools` },
  { name: "IVF Due Date Calculator", url: `${SITE_CONFIG.url}/tools/ivf-calculator` },
]);

export default function IVFDueDateCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([toolSchema, breadcrumbSchema]) }}
      />
      <IVFDueDateCalculator />
    </div>
  );
}
