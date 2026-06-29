import dynamic from "next/dynamic";
import { SkeletonLoader } from "@/components/shared/skeleton-loader";
import { generateMetadata } from "@/seo/metadata";
import { generateToolSchema, generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG } from "@/constants";

const IVFDueDateCalculator = dynamic(
  () => import("@/components/calculators/ivf-calculator").then((m) => m.IVFDueDateCalculator),
  { loading: () => <SkeletonLoader variant="card" /> }
);

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
      <section className="mb-8 space-y-4">
        <h1 className="text-3xl font-display font-bold gradient-text">IVF Due Date Calculator</h1>
        <p className="text-muted-foreground leading-relaxed">
          Our IVF due date calculator calculates key dates for your IVF pregnancy based on your embryo transfer date and embryo age. Whether you had a day-3 (cleavage stage) or day-5 (blastocyst) transfer, the calculator determines your egg retrieval date, implantation date, pregnancy test date, and estimated due date.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          IVF pregnancies are dated from the embryo transfer rather than LMP. For a day-5 blastocyst transfer, the due date is approximately 261 days after transfer. For a day-3 transfer, add 263 days. This calculator follows standard ART (Assisted Reproductive Technology) dating guidelines.
        </p>
        <p className="text-sm text-muted-foreground">
          All calculations are performed locally in your browser. No data is stored or transmitted.
        </p>
      </section>
      <IVFDueDateCalculator />
    </div>
  );
}
