import { IVFDueDateCalculator } from "@/components/calculators/ivf-calculator";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "IVF Due Date Calculator",
  description: "Calculate your IVF due date, egg retrieval date, implantation date, and pregnancy test date based on embryo transfer. Free IVF date calculator.",
  path: "/tools/ivf-calculator",
});

export default function IVFDueDateCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <IVFDueDateCalculator />
    </div>
  );
}
