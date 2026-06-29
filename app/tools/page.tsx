import { generateMetadata } from "@/seo/metadata";
import { generateBreadcrumbSchema } from "@/seo/json-ld";
import { SITE_CONFIG, CALCULATOR_ROUTES } from "@/constants";
import {
  Calendar,
  CalendarDays,
  CalendarCheck,
  Heart,
  FlaskConical,
  Weight,
  Baby,
} from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/glass-card";

export const metadata = generateMetadata({
  title: "Pregnancy Tools & Calculators",
  description: "Free, evidence-based pregnancy calculators and tools. Due date calculator, ovulation calculator, IVF date calculator, weight gain tracker, and baby growth timeline. All calculations are private and local.",
  path: "/tools",
});

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="w-6 h-6" />,
  CalendarDays: <CalendarDays className="w-6 h-6" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  Weight: <Weight className="w-6 h-6" />,
  Baby: <Baby className="w-6 h-6" />,
};

const toolDescriptions: Record<string, string> = {
  "due-date-calculator": "Calculate your estimated due date based on your last menstrual period using Naegele's rule.",
  "pregnancy-week-calculator": "Find out which pregnancy week you are in and what trimester.",
  "ovulation-calculator": "Track your fertile window and predict ovulation dates.",
  "conception-calculator": "Estimate when conception likely occurred from your due date.",
  "ivf-calculator": "Calculate key IVF dates including egg retrieval, implantation, and due date.",
  "weight-gain-calculator": "Track healthy pregnancy weight gain against IOM guidelines.",
  "baby-growth-timeline": "See your baby's size, length, weight, and milestones week by week.",
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_CONFIG.url },
  { name: "Pregnancy Tools", url: `${SITE_CONFIG.url}/tools` },
]);

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
          Pregnancy Tools & Calculators
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Evidence-based pregnancy calculators designed with your privacy in mind.
          All calculations are performed locally in your browser — nothing is stored or transmitted.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CALCULATOR_ROUTES.map((calc) => {
          const Icon = iconMap[calc.icon] ?? null;
          return (
            <Link key={calc.slug} href={`/tools/${calc.slug}`}>
              <GlassCard className="h-full group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/20 dark:to-lavender-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-peach-500">{Icon}</span>
                </div>
                <h2 className="font-display font-semibold mb-2 group-hover:text-peach-500 transition-colors">
                  {calc.label}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {toolDescriptions[calc.slug] ?? "Evidence-based pregnancy calculator."}
                </p>
              </GlassCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
}