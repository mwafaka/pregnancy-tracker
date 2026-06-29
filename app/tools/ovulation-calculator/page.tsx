import dynamic from "next/dynamic";
import { SkeletonLoader } from "@/components/shared/skeleton-loader";
import { generateMetadata } from "@/seo/metadata";
import { generateToolSchema, generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG } from "@/constants";

const OvulationCalculator = dynamic(
  () => import("@/components/calculators/ovulation-calculator").then((m) => m.OvulationCalculator),
  { loading: () => <SkeletonLoader variant="card" /> }
);

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
      <section className="mb-8 space-y-4">
        <h1 className="text-3xl font-display font-bold gradient-text">Ovulation Calculator</h1>
        <p className="text-muted-foreground leading-relaxed">
          Our ovulation calculator helps you identify your most fertile days by predicting when ovulation is likely to occur. Based on your cycle length and the first day of your last period, it estimates your ovulation date and 6-day fertile window — the days when conception is most likely.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Ovulation typically occurs about 14 days before your next period. The fertile window spans the 5 days before ovulation plus ovulation day itself. Sperm can survive up to 5 days in the reproductive tract, making this the optimal time for conception.
        </p>
        <p className="text-sm text-muted-foreground">
          All calculations are performed locally in your browser. No data is stored or transmitted.
        </p>
      </section>
      <OvulationCalculator />
    </div>
  );
}
