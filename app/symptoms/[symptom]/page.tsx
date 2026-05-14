import { notFound } from "next/navigation";
import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";
import { generateMetadata as generateBaseMetadata } from "@/seo/metadata";
import { SITE_CONFIG } from "@/constants";
import { AlertTriangle, Heart, Lightbulb, Stethoscope } from "lucide-react";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/seo/json-ld";

const symptoms: Record<string, { title: string; description: string; tips: string[]; whenToCall: string; trimester: string }> = {
  nausea: {
    title: "Nausea and Morning Sickness",
    description: "Nausea and vomiting affect up to 80% of pregnancies. Despite the name 'morning sickness,' it can occur at any time of day. It typically starts around week 6 and improves by week 12-14. The exact cause is not fully understood but is linked to rising hCG levels.",
    tips: ["Eat small, frequent meals throughout the day", "Keep crackers by your bedside and eat before getting up", "Avoid strong smells and trigger foods", "Stay hydrated with small sips of water", "Try ginger tea or ginger candies", "Get plenty of rest and fresh air"],
    whenToCall: "Contact your healthcare provider if you cannot keep any food or water down for 24 hours, lose weight, or have severe abdominal pain.",
    trimester: "First Trimester",
  },
  fatigue: {
    title: "Fatigue During Pregnancy",
    description: "Extreme fatigue is common in the first trimester due to hormonal changes, increased blood production, and the energy demands of growing a baby. Your body is working hard to support the pregnancy.",
    tips: ["Prioritize sleep — aim for 8-10 hours nightly", "Take short naps during the day when possible", "Maintain a balanced diet with iron-rich foods", "Gentle exercise like walking can boost energy", "Reduce caffeine intake, especially after 2 PM", "Ask for help with household tasks"],
    whenToCall: "Contact your provider if fatigue is accompanied by shortness of breath, dizziness, or if it persists beyond the first trimester.",
    trimester: "First Trimester",
  },
};

interface Props {
  params: Promise<{ symptom: string }>;
}

export async function generateStaticParams() {
  return Object.keys(symptoms).map((symptom) => ({ symptom }));
}

export async function generateMetadata({ params }: Props) {
  const { symptom } = await params;
  const data = symptoms[symptom];
  if (!data) return {};
  return generateBaseMetadata({
    title: `${data.title} During Pregnancy`,
    description: `Learn about ${data.title.toLowerCase()} during pregnancy. Evidence-based information, management tips, and when to contact your healthcare provider.`,
    path: `/symptoms/${symptom}`,
  });
}

export default async function SymptomPage({ params }: Props) {
  const { symptom } = await params;
  const data = symptoms[symptom];
  if (!data) notFound();

  const pageUrl = `${SITE_CONFIG.url}/symptoms/${symptom}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Pregnancy Symptoms", url: `${SITE_CONFIG.url}/symptoms` },
    { name: data.title, url: pageUrl },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${data.title.toLowerCase()}?`,
        acceptedAnswer: { "@type": "Answer", text: data.description },
      },
      {
        "@type": "Question",
        name: `How can I manage ${data.title.toLowerCase()}?`,
        acceptedAnswer: { "@type": "Answer", text: data.tips.join(". ") },
      },
      {
        "@type": "Question",
        name: `When should I contact my provider about ${data.title.toLowerCase()}?`,
        acceptedAnswer: { "@type": "Answer", text: data.whenToCall },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema]) }}
      />
      <div className="mb-8">
        <Badge variant="secondary" className="rounded-full mb-3">{data.trimester}</Badge>
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-3">{data.title}</h1>
        <p className="text-muted-foreground leading-relaxed">{data.description}</p>
      </div>

      <div className="space-y-6">
        <GlassCard>
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-peach-500" />
            <h2 className="font-display font-semibold">Management Tips</h2>
          </div>
          <ul className="space-y-2">
            {data.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-peach-400 mt-1.5 shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="border border-warning/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-warning mt-0.5 shrink-0" />
            <div>
              <h2 className="font-display font-semibold mb-2">When to Contact Your Provider</h2>
              <p className="text-sm text-muted-foreground">{data.whenToCall}</p>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="flex items-center gap-2 glass rounded-2xl p-4 mt-8">
        <Heart className="w-5 h-5 text-pink-400 shrink-0" />
        <p className="text-sm text-muted-foreground">
          Every pregnancy is unique. Speak with your healthcare provider about your specific symptoms and concerns.
        </p>
      </div>

      <div className="disclaimer-banner mt-6">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>This content is for educational purposes only and is not medical advice. Always consult your healthcare provider.</p>
      </div>
    </div>
  );
}
