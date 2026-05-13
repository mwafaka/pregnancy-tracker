import { WeightGainCalculator } from "@/components/calculators/weight-gain-calculator";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Pregnancy Weight Gain Calculator",
  description: "Track your pregnancy weight gain against IOM-recommended ranges based on your pre-pregnancy BMI. Free, evidence-based weight gain tracker.",
  path: "/tools/weight-gain-calculator",
});

export default function WeightGainCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <WeightGainCalculator />
    </div>
  );
}
