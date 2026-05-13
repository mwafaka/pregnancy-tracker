import { BabyGrowthTimeline } from "@/components/calculators/baby-growth-timeline";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Baby Growth Timeline",
  description: "Explore your baby's growth week by week. See size comparisons, length, weight, and development milestones throughout pregnancy.",
  path: "/tools/baby-growth-timeline",
});

export default function BabyGrowthTimelinePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <BabyGrowthTimeline />
    </div>
  );
}
