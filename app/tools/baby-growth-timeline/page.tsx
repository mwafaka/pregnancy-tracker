import dynamic from "next/dynamic";
import { SkeletonLoader } from "@/components/shared/skeleton-loader";
import { generateMetadata } from "@/seo/metadata";
import { generateToolSchema, generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG } from "@/constants";

const BabyGrowthTimeline = dynamic(
  () => import("@/components/calculators/baby-growth-timeline").then((m) => m.BabyGrowthTimeline),
  { loading: () => <SkeletonLoader variant="card" /> }
);

export const metadata = generateMetadata({
  title: "Baby Growth Timeline",
  description: "Explore your baby's growth week by week. See size comparisons, length, weight, and development milestones throughout pregnancy.",
  path: "/tools/baby-growth-timeline",
});

const toolSchema = generateToolSchema({
  name: "Baby Growth Timeline",
  description: "Explore your baby's growth week by week with size comparisons and milestones.",
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_CONFIG.url },
  { name: "Pregnancy Tools", url: `${SITE_CONFIG.url}/tools` },
  { name: "Baby Growth Timeline", url: `${SITE_CONFIG.url}/tools/baby-growth-timeline` },
]);

export default function BabyGrowthTimelinePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([toolSchema, breadcrumbSchema]) }}
      />
      <BabyGrowthTimeline />
    </div>
  );
}
