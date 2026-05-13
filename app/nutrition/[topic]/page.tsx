import { notFound } from "next/navigation";
import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";
import { generateMetadata as generateBaseMetadata } from "@/seo/metadata";
import { Apple, Banana, Carrot, Fish, Milk, XCircle } from "lucide-react";

const nutritionTopics: Record<string, { title: string; description: string; foods: { name: string; reason: string; icon: string }[]; safeAlternatives: string[] }> = {
  "foods-to-avoid": {
    title: "Foods to Avoid During Pregnancy",
    description: "During pregnancy, certain foods may pose risks to you or your baby due to bacteria, parasites, or high levels of certain compounds. Here is a guide to foods that are best avoided or limited.",
    foods: [
      { name: "Raw or undercooked meat", reason: "Risk of toxoplasmosis and other bacterial infections", icon: "meat" },
      { name: "Unpasteurized dairy", reason: "Risk of listeria infection", icon: "dairy" },
      { name: "Raw fish (sushi)", reason: "Risk of parasites and mercury content", icon: "fish" },
      { name: "High-mercury fish", reason: "Mercury can affect fetal brain development", icon: "fish" },
      { name: "Raw eggs", reason: "Risk of salmonella", icon: "egg" },
      { name: "Alcohol", reason: "Can cause fetal alcohol spectrum disorders", icon: "alcohol" },
      { name: "Excessive caffeine", reason: "Limit to 200mg per day", icon: "caffeine" },
      { name: "Unwashed produce", reason: "Risk of toxoplasmosis from soil", icon: "produce" },
    ],
    safeAlternatives: ["Cooked fish low in mercury (salmon, sardines)", "Pasteurized milk and cheese", "Fully cooked eggs", "Well-washed fruits and vegetables", "Herbal teas (caffeine-free)", "Decaf coffee in moderation"],
  },
  "prenatal-vitamins": {
    title: "Prenatal Vitamins Guide",
    description: "Prenatal vitamins help fill nutritional gaps and support your baby's development. Here are the key nutrients you need during pregnancy.",
    foods: [
      { name: "Folic Acid (400-800 mcg)", reason: "Prevents neural tube defects", icon: "supplement" },
      { name: "Iron (27 mg)", reason: "Supports increased blood volume", icon: "supplement" },
      { name: "Calcium (1000 mg)", reason: "Builds baby's bones and teeth", icon: "supplement" },
      { name: "Vitamin D (600 IU)", reason: "Supports immune function and bone health", icon: "supplement" },
      { name: "DHA (200-300 mg)", reason: "Supports brain and eye development", icon: "supplement" },
    ],
    safeAlternatives: ["Choose a reputable brand tested by third parties", "Take with food to reduce nausea", "Avoid supplements with excess vitamin A"],
  },
};

interface Props {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  return Object.keys(nutritionTopics).map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props) {
  const { topic } = await params;
  const data = nutritionTopics[topic];
  if (!data) return {};
  return generateBaseMetadata({
    title: data.title,
    description: data.description,
    path: `/nutrition/${topic}`,
  });
}

const iconMap: Record<string, React.ReactNode> = {
  meat: <XCircle className="w-5 h-5 text-destructive" />,
  dairy: <Milk className="w-5 h-5 text-destructive" />,
  fish: <Fish className="w-5 h-5 text-destructive" />,
  egg: <XCircle className="w-5 h-5 text-destructive" />,
  alcohol: <XCircle className="w-5 h-5 text-destructive" />,
  caffeine: <XCircle className="w-5 h-5 text-destructive" />,
  produce: <Apple className="w-5 h-5 text-destructive" />,
  supplement: <Banana className="w-5 h-5 text-peach-500" />,
};

export default async function NutritionPage({ params }: Props) {
  const { topic } = await params;
  const data = nutritionTopics[topic];
  if (!data) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Badge variant="secondary" className="rounded-full mb-3">Nutrition</Badge>
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-3">{data.title}</h1>
        <p className="text-muted-foreground leading-relaxed">{data.description}</p>
      </div>

      <div className="space-y-4 mb-8">
        {data.foods.map((food, i) => (
          <GlassCard key={i} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
              {iconMap[food.icon] ?? <Apple className="w-5 h-5 text-muted-foreground" />}
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm">{food.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{food.reason}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard>
        <div className="flex items-center gap-2 mb-4">
          <Carrot className="w-5 h-5 text-peach-500" />
          <h2 className="font-display font-semibold">Safe Alternatives</h2>
        </div>
        <ul className="space-y-2">
          {data.safeAlternatives.map((alt, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-lavender-400 mt-1.5 shrink-0" />
              {alt}
            </li>
          ))}
        </ul>
      </GlassCard>

      <div className="disclaimer-banner mt-6">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>Nutritional needs vary by individual. Always consult your healthcare provider before making significant dietary changes during pregnancy.</p>
      </div>
    </div>
  );
}
