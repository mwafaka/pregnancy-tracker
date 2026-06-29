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
      <section className="mb-8 space-y-4">
        <h1 className="text-3xl font-display font-bold gradient-text">Baby Growth Timeline</h1>
        <p className="text-muted-foreground leading-relaxed">
          Our baby growth timeline shows you how your baby develops week by week throughout pregnancy. From a tiny poppy seed at 4 weeks to a full-term watermelon at 40 weeks, see size comparisons, length, weight, and key developmental milestones for each stage.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Each week brings remarkable changes: the heart begins beating around week 6, all major organs form by week 12, the baby can hear your voice by week 20, and lungs mature in the final weeks. Scroll through the timeline to discover what is happening at every stage of your pregnancy.
        </p>
        <p className="text-sm text-muted-foreground">
          All calculations are performed locally in your browser. No data is stored or transmitted.
        </p>
      </section>
      <BabyGrowthTimeline />
    </div>
  );
}
