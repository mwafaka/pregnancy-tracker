import { ConceptionCalculator } from "@/components/calculators/conception-calculator";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Conception Date Calculator",
  description: "Estimate when conception likely occurred based on your due date. Free reverse due date calculator for pregnancy dating.",
  path: "/tools/conception-calculator",
});

export default function ConceptionCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <ConceptionCalculator />
    </div>
  );
}
