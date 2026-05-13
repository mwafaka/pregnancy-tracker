import { DueDateCalculator } from "@/components/calculators/due-date-calculator";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Due Date Calculator",
  description: "Calculate your estimated due date based on your last menstrual period. Free, private, and evidence-based pregnancy due date calculator.",
  path: "/tools/due-date-calculator",
});

export default function DueDateCalculatorPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <DueDateCalculator />
    </div>
  );
}
