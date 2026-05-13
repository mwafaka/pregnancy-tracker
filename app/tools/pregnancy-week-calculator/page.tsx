import { PregnancyWeekCalculator } from "@/components/calculators/pregnancy-week-calculator";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Pregnancy Week Calculator",
  description: "Find out which week of pregnancy you are in. Calculate your current pregnancy week based on your last menstrual period.",
  path: "/tools/pregnancy-week-calculator",
});

export default function PregnancyWeekPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <PregnancyWeekCalculator />
    </div>
  );
}
