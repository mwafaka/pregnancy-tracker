import { notFound } from "next/navigation";
import Link from "next/link";
import { GlassCard } from "@/components/shared/glass-card";
import { PregnancyWeekCard } from "@/components/shared/pregnancy-week-card";
import { generateMetadata as generateBaseMetadata } from "@/seo/metadata";
import { SITE_CONFIG } from "@/constants";
import { generateBreadcrumbSchema } from "@/seo/json-ld";

const trimesters = {
  "first-trimester": { num: 1, label: "First Trimester", weeks: "1–13", description: "The first trimester spans from week 1 to week 13. This is a period of rapid development where all major organs begin to form." },
  "second-trimester": { num: 2, label: "Second Trimester", weeks: "14–27", description: "The second trimester spans from week 14 to week 27. Often considered the most comfortable period, with increased energy and a visible baby bump." },
  "third-trimester": { num: 3, label: "Third Trimester", weeks: "28–40", description: "The third trimester spans from week 28 to week 40. Your baby grows rapidly and prepares for birth." },
};

interface Props {
  params: Promise<{ trimester: string }>;
}

export async function generateStaticParams() {
  return ["first-trimester", "second-trimester", "third-trimester"].map((trimester) => ({ trimester }));
}

export async function generateMetadata({ params }: Props) {
  const { trimester } = await params;
  const data = trimesters[trimester as keyof typeof trimesters];
  if (!data) return {};
  return generateBaseMetadata({
    title: data.label,
    description: data.description,
    path: `/trimester/${trimester}`,
  });
}

export default async function TrimesterPage({ params }: Props) {
  const { trimester } = await params;
  const data = trimesters[trimester as keyof typeof trimesters];
  if (!data) notFound();

  const weekStart = data.num === 1 ? 1 : data.num === 2 ? 14 : 28;
  const weekEnd = data.num === 1 ? 13 : data.num === 2 ? 27 : 40;

  const weeks = Array.from({ length: weekEnd - weekStart + 1 }, (_, i) => weekStart + i);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Trimesters", url: `${SITE_CONFIG.url}/trimester` },
    { name: data.label, url: `${SITE_CONFIG.url}/trimester/${trimester}` },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="mb-8">
        <h1 className="text-4xl font-display font-bold gradient-text mb-3">{data.label}</h1>
        <p className="text-muted-foreground">{data.description}</p>
        <p className="text-sm text-muted-foreground mt-2">Weeks {data.weeks}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {weeks.map((week) => (
          <PregnancyWeekCard
            key={week}
            week={week}
            trimester={data.num as 1 | 2 | 3}
            size=""
            href={`/pregnancy-week-by-week/week-${week}`}
          />
        ))}
      </div>

      <div className="disclaimer-banner mt-8">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>This information is for educational purposes only. Always consult your healthcare provider for medical advice.</p>
      </div>
    </div>
  );
}
