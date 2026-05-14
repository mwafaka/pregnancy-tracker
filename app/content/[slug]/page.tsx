import { notFound } from "next/navigation";
import Link from "next/link";
import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";
import { generateMetadata as generateBaseMetadata } from "@/seo/metadata";
import { Calendar, User, ChevronRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants";
import { generateBreadcrumbSchema } from "@/seo/json-ld";

const contentPages: Record<string, { title: string; description: string; content: string; category: string; author: string; date: Date }> = {
  "understanding-pregnancy-trimesters": {
    title: "Understanding Pregnancy Trimesters",
    description: "A comprehensive guide to the three trimesters of pregnancy, including developmental milestones and maternal changes.",
    content: `Pregnancy is divided into three trimesters, each lasting approximately 13-14 weeks. Understanding what happens in each trimester can help you prepare for the changes ahead.

First Trimester (Weeks 1-13): This is a period of rapid development. The fertilized egg implants in the uterus and begins growing into an embryo. All major organs begin to form. Common symptoms include fatigue, nausea, and breast tenderness.

Second Trimester (Weeks 14-27): Often called the 'golden period,' many women experience increased energy. The baby grows significantly, and you may feel the first movements (quickening) around 18-22 weeks.

Third Trimester (Weeks 28-40): The baby continues to grow and mature. You may experience more discomfort as the baby gets larger. Braxton Hicks contractions may begin, and you'll prepare for labor and delivery.`,
    category: "Guide",
    author: SITE_CONFIG.author,
    date: new Date("2024-12-01"),
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = contentPages[slug];
  if (!data) return {};
  return generateBaseMetadata({
    title: data.title,
    description: data.description,
    path: `/content/${slug}`,
  });
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "",
  description: "",
  author: { "@type": "Person", name: SITE_CONFIG.author },
  datePublished: "",
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/icon.svg` },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "" },
};

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const data = contentPages[slug];
  if (!data) notFound();

  const pageUrl = `${SITE_CONFIG.url}/content/${slug}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: data.category, url: `${SITE_CONFIG.url}/content` },
    { name: data.title, url: pageUrl },
  ]);

  const pageArticleSchema = {
    ...articleSchema,
    headline: data.title,
    description: data.description,
    datePublished: data.date.toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, pageArticleSchema]) }}
      />
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span>{data.title}</span>
      </div>

      <Badge variant="secondary" className="rounded-full mb-3">{data.category}</Badge>
      <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">{data.title}</h1>
      <p className="text-muted-foreground mb-8 text-lg">{data.description}</p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
        <span className="flex items-center gap-1">
          <User className="w-4 h-4" />
          {data.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {formatDate(data.date)}
        </span>
      </div>

      <GlassCard>
        <div className="prose-content">
          {data.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("**")) {
              const [title, ...rest] = paragraph.split("**: ");
              if (!title) return null;
              return (
                <div key={i} className="mb-6">
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {title.replace(/\*\*/g, "")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{rest.join("**: ")}</p>
                </div>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={i} className="mb-4 space-y-1">
                  {paragraph.split("\n").map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-peach-400 mt-1.5 shrink-0" />
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </GlassCard>

      <div className="disclaimer-banner mt-8">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>This content is for educational purposes only. Always consult your healthcare provider for medical advice specific to your situation.</p>
      </div>
    </div>
  );
}
