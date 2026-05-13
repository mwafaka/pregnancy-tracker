import { OvulationCalculator } from "@/components/calculators/ovulation-calculator";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Ovulation Calculator",
  description: "Calculate your fertile window and ovulation date. Free, private, and evidence-based ovulation tracker to help you plan or prevent pregnancy.",
  path: "/tools/ovulation-calculator",
});

export default function OvulationCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <OvulationCalculator />
    </div>
  );
}
