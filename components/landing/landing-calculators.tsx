import Link from "next/link";
import {
  Calendar,
  CalendarDays,
  CalendarCheck,
  Heart,
  FlaskConical,
  Weight,
  Baby,
} from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";

const calculators = [
  { slug: "due-date-calculator", label: "Due Date Calculator", description: "Calculate your estimated due date based on your last menstrual period.", icon: Calendar },
  { slug: "pregnancy-week-calculator", label: "Pregnancy Week", description: "Find out which pregnancy week you are in and what to expect.", icon: CalendarDays },
  { slug: "ovulation-calculator", label: "Ovulation Calculator", description: "Track your fertile window and predict ovulation.", icon: CalendarCheck },
  { slug: "conception-calculator", label: "Conception Date", description: "Estimate when conception likely occurred.", icon: Heart },
  { slug: "ivf-calculator", label: "IVF Due Date", description: "Calculate important dates for your IVF journey.", icon: FlaskConical },
  { slug: "weight-gain-calculator", label: "Weight Gain Guide", description: "Track healthy weight gain throughout pregnancy.", icon: Weight },
  { slug: "baby-growth-timeline", label: "Baby Growth", description: "See how your baby is growing week by week.", icon: Baby },
];

export function LandingCalculators() {
  return (
    <section id="calculators" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4 animate-fade-in-up">Pregnancy Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Evidence-based calculators designed with your privacy and accuracy in mind.
            All calculations are performed locally in your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {calculators.map((calc, i) => {
            const Icon = calc.icon;
            return (
              <div key={calc.slug} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <Link href={`/tools/${calc.slug}`}>
                  <GlassCard className="h-full group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/20 dark:to-lavender-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-peach-500" />
                    </div>
                    <h3 className="font-display font-semibold mb-2 group-hover:text-peach-500 transition-colors">
                      {calc.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {calc.description}
                    </p>
                  </GlassCard>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
