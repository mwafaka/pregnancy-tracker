"use client";

import { ArrowRight, Shield, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingGradient } from "@/components/shared/floating-gradient";
import { useLocale } from "@/context/locale-context";

export function LandingHero() {
  const { t, dir } = useLocale();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <FloatingGradient className="top-20 -left-48" color1="rgba(248, 176, 122, 0.25)" speed="slow" />
      <FloatingGradient className="bottom-20 -right-48" color1="rgba(167, 122, 238, 0.2)" speed="slow" />
      <FloatingGradient className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]" color1="rgba(254, 104, 167, 0.15)" size="md" speed="slow" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
        <div className="text-center flex flex-col items-center justify-center">
          <div className="animate-fade-in inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 lg:mb-8 text-sm">
            <Shield className="w-4 h-4 text-peach-500" />
            <span className="text-muted-foreground">{t("hero.medicallyReviewed")}</span>
          </div>

          <h1 className="animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-4 lg:mb-6" style={{ animationDelay: "0s" }}>
            {t("hero.title1")}
            <br />
            <span className="gradient-text">{t("hero.title2")}</span>
            <br />
            {t("hero.title3")}
          </h1>

          <p className="animate-fade-in-up text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-6 lg:mb-8 leading-relaxed" style={{ animationDelay: "0.15s" }}>
            {t("hero.subtitle")}
          </p>

          <div className="animate-fade-in-up flex flex-col sm:flex-row items-center gap-3 lg:gap-4" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gap-2 rounded-xl h-12 px-8 text-base w-full sm:w-auto" asChild>
              <a href="/onboarding">
                {t("hero.getStarted")}
                <ArrowRight className={`w-5 h-5 ${dir === "rtl" ? "rotate-180" : ""}`} />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl h-12 px-8 text-base w-full sm:w-auto" asChild>
              <a href="/onboarding">
                <Clock className="w-5 h-5" />
                {t("hero.setUpPregnancy")}
              </a>
            </Button>
          </div>

          <div className="animate-fade-in flex flex-wrap items-center justify-center gap-4 lg:gap-6 mt-8 lg:mt-12 text-sm text-muted-foreground" style={{ animationDelay: "0.45s" }}>
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              {t("hero.fdaCompliant")}
            </span>
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              {t("hero.hipaaReady")}
            </span>
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              {t("hero.expertReviewed")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
