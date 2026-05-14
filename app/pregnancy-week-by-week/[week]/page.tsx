import { notFound } from "next/navigation";
import { GlassCard } from "@/components/shared/glass-card";
import { TimelineProgress } from "@/components/shared/timeline-progress";
import { Badge } from "@/components/ui/badge";
import { generateMetadata as generateBaseMetadata } from "@/seo/metadata";
import { calculateBabyGrowth } from "@/calculators";
import { PREGNANCY_DURATION_WEEKS, TRIMESTER_LABELS, SITE_CONFIG } from "@/constants";
import { Baby, Calendar, Apple, Ruler, Activity, Sparkles } from "lucide-react";

const weekContent: Record<number, { title: string; development: string; tips: string[]; symptoms: string[] }> = {
  4: {
    title: "Implantation and Early Development",
    development: "Your baby is now a blastocyst implanting in the uterine lining. The neural tube, which will become the brain and spinal cord, begins to form. The placenta starts developing to provide oxygen and nutrients.",
    tips: ["Start taking prenatal vitamins with folic acid", "Schedule your first prenatal appointment", "Avoid alcohol, smoking, and certain medications"],
    symptoms: ["Light spotting (implantation bleeding)", "Mild cramping", "Breast tenderness", "Fatigue"],
  },
  8: {
    title: "Major Organs Forming",
    development: "All major organs are beginning to form. The heart has four chambers and beats at about 150 bpm. Tiny fingers and toes are webbed. The eyes are visible and the ears are forming.",
    tips: ["Continue prenatal vitamins", "Stay hydrated", "Eat small, frequent meals to manage nausea"],
    symptoms: ["Morning sickness", "Food aversions", "Mood swings", "Frequent urination"],
  },
  12: {
    title: "End of First Trimester",
    development: "Baby's reflexes are developing. Fingers and toes are no longer webbed. The kidneys are producing urine. The risk of miscarriage drops significantly.",
    tips: ["Schedule your first trimester screening", "Start researching childbirth classes", "Consider telling your employer"],
    symptoms: ["Bloating", "Visible veins", "Changes in skin pigmentation", "Reduced nausea for some"],
  },
  16: {
    title: "Second Trimester Begins",
    development: "Baby can make facial expressions and may start sucking their thumb. The skeleton is hardening. The scalp hair pattern is forming. Joints are moving.",
    tips: ["Consider genetic testing if desired", "Start pregnancy-safe exercise routine", "Begin researching baby gear"],
    symptoms: ["Increased energy", "Visible baby bump", "Nasal congestion", "Round ligament pain"],
  },
  20: {
    title: "Halfway There",
    development: "Baby can hear your voice and may respond to sounds. Taste buds are forming. The skin is covered with vernix caseosa for protection. Hair and nails are growing.",
    tips: ["Schedule your anatomy scan ultrasound", "Start feeling for movements regularly", "Begin planning maternity leave"],
    symptoms: ["Braxton Hicks contractions (mild)", "Leg cramps", "Backache", "Increased appetite"],
  },
  24: {
    title: "Lungs Developing",
    development: "Baby's lungs are developing rapidly with surfactant production. The skin is pink and wrinkled. Eyebrows and eyelashes are present. The baby is practicing breathing movements.",
    tips: ["Take a glucose screening test", "Stay active with prenatal yoga", "Start nursery planning"],
    symptoms: ["Stretch marks", "Swollen ankles", "Sleep difficulties", "Itchy belly"],
  },
  28: {
    title: "Third Trimester Begins",
    development: "Baby can blink and experiences REM sleep. The brain is growing rapidly. The lungs can breathe air with support. The immune system is strengthening.",
    tips: ["Schedule your third trimester appointments", "Pack your hospital bag", "Complete childbirth education classes"],
    symptoms: ["Shortness of breath", "Heartburn", "Frequent urination", "Back pain"],
  },
  32: {
    title: "Getting Ready for Birth",
    development: "Baby is practicing breathing. Most babies turn head-down. Fingernails reach fingertips. The bones are fully formed but still soft. The baby is gaining weight rapidly.",
    tips: ["Tour the hospital or birth center", "Finalize birth plan", "Install car seat"],
    symptoms: ["Swelling in hands and feet", "Difficulty sleeping", "Braxton Hicks intensify", "Pelvic pressure"],
  },
  36: {
    title: "Final Preparations",
    development: "Baby's organs are nearly fully mature. The skin is smoother with fat deposits. The baby is settling into position for birth. The immune system receives antibodies.",
    tips: ["Keep hospital bag ready", "Prepare freezer meals", "Discuss labor pain management"],
    symptoms: ["Increased pelvic pressure", "Mild contractions", "Fatigue", "Anxiety about labor"],
  },
  40: {
    title: "Full Term",
    development: "Baby is fully developed and ready for birth. The lungs are mature. The baby's head is engaged in the pelvis. Most babies weigh 6-9 pounds and are 18-22 inches long.",
    tips: ["Stay in touch with your provider", "Rest when possible", "Watch for labor signs and contact your provider"],
    symptoms: ["Strong, regular contractions", "Water breaking", "Bloody show", "Nesting instinct"],
  },
};

interface Props {
  params: Promise<{ week: string }>;
}

export async function generateStaticParams() {
  return Array.from({ length: 40 }, (_, i) => ({ week: `week-${i + 1}` }));
}

export async function generateMetadata({ params }: Props) {
  const { week } = await params;
  const weekNum = parseInt(week.replace("week-", ""));
  if (isNaN(weekNum) || weekNum < 1 || weekNum > PREGNANCY_DURATION_WEEKS) return {};
  return generateBaseMetadata({
    title: `Pregnancy Week ${weekNum}`,
    description: `What to expect at ${weekNum} weeks pregnant. Baby development, symptoms, and tips for week ${weekNum} of pregnancy.`,
    path: `/pregnancy-week-by-week/week-${weekNum}`,
  });
}

export default async function WeekPage({ params }: Props) {
  const { week } = await params;
  const weekNum = parseInt(week.replace("week-", ""));
  if (isNaN(weekNum) || weekNum < 1 || weekNum > PREGNANCY_DURATION_WEEKS) notFound();

  const trimester = weekNum <= 13 ? 1 : weekNum <= 27 ? 2 : 3;
  const growth = calculateBabyGrowth(weekNum);
  const content = weekContent[weekNum];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
      { "@type": "ListItem", position: 2, name: "Pregnancy Week by Week", item: `${SITE_CONFIG.url}/pregnancy-week-by-week` },
      { "@type": "ListItem", position: 3, name: `Week ${weekNum}`, item: `${SITE_CONFIG.url}/pregnancy-week-by-week/week-${weekNum}` },
    ],
  };

  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `Pregnancy Week ${weekNum}`,
    description: content ? content.development : `What to expect at ${weekNum} weeks pregnant`,
    lastReviewed: new Date().toISOString().split("T")[0],
    specialty: "Obstetrics",
    about: { "@type": "Thing", name: `Week ${weekNum} of Pregnancy` },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, medicalSchema]),
        }}
      />
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm mb-4">
          <Calendar className="w-4 h-4 text-peach-500" />
          <span className="text-muted-foreground">{TRIMESTER_LABELS[trimester as 1 | 2 | 3].label}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">Week {weekNum}</h1>
        <p className="text-muted-foreground">{content?.title ?? "Your Baby's Development"}</p>
      </div>

      <TimelineProgress current={weekNum} total={PREGNANCY_DURATION_WEEKS} className="mb-8" />

      <div className="grid grid-cols-3 gap-4 mb-8">
        <GlassCard className="text-center p-4">
          <Apple className="w-5 h-5 text-peach-400 mx-auto mb-2" />
          <div className="text-xs text-muted-foreground mb-1">Size</div>
          <div className="font-display font-semibold text-sm">{growth.size}</div>
        </GlassCard>
        <GlassCard className="text-center p-4">
          <Ruler className="w-5 h-5 text-lavender-400 mx-auto mb-2" />
          <div className="text-xs text-muted-foreground mb-1">Length</div>
          <div className="font-display font-semibold text-sm">{growth.length}</div>
        </GlassCard>
        <GlassCard className="text-center p-4">
          <Activity className="w-5 h-5 text-pink-400 mx-auto mb-2" />
          <div className="text-xs text-muted-foreground mb-1">Weight</div>
          <div className="font-display font-semibold text-sm">{growth.weight}</div>
        </GlassCard>
      </div>

      {content && (
        <div className="space-y-8">
          <GlassCard>
            <div className="flex items-center gap-2 mb-4">
              <Baby className="w-5 h-5 text-peach-500" />
              <h2 className="font-display font-semibold text-lg">Baby's Development</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{content.development}</p>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-lavender-500" />
              <h2 className="font-display font-semibold text-lg">Wellness Tips</h2>
            </div>
            <ul className="space-y-2">
              {content.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-lavender-400 mt-1.5 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-pink-500" />
              <h2 className="font-display font-semibold text-lg">Common Symptoms</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {content.symptoms.map((symptom, i) => (
                <Badge key={i} variant="secondary" className="rounded-full">
                  {symptom}
                </Badge>
              ))}
            </div>
          </GlassCard>
        </div>
      )}

      <div className="disclaimer-banner mt-8">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>Every pregnancy is unique. The information provided is for educational purposes and should not replace professional medical advice. Always consult your healthcare provider with any concerns.</p>
      </div>
    </div>
  );
}
