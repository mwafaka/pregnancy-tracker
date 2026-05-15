"use client";

import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/context/locale-context";
import Link from "next/link";

export function LandingCTA() {
  const { t, dir } = useLocale();

  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-br from-peach-200/10 to-lavender-200/10 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-peach-400 to-lavender-400 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              {t("cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="gap-2 rounded-xl h-12 px-8" asChild>
                  <Link href="/onboarding">
                    {t("cta.button")}
                    <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180" : ""}`} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl h-12 px-8" asChild>
                  <Link href="/tools/due-date-calculator">
                    {t("cta.quickCalculators")}
                  </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
