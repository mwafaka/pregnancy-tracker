"use client";

import {
  LineChart,
  Bell,
  CalendarCheck,
  BookOpen,
  Timer,
  Smartphone,
} from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { useLocale } from "@/context/locale-context";

const features = [
  { icon: LineChart, titleKey: "features.trackProgress", descKey: "features.trackProgressDesc" },
  { icon: Bell, titleKey: "features.smartReminders", descKey: "features.smartRemindersDesc" },
  { icon: CalendarCheck, titleKey: "features.appointments", descKey: "features.appointmentsDesc" },
  { icon: BookOpen, titleKey: "features.dailyInsights", descKey: "features.dailyInsightsDesc" },
  { icon: Timer, titleKey: "features.contractionTimer", descKey: "features.contractionTimerDesc" },
  { icon: Smartphone, titleKey: "features.worksOffline", descKey: "features.worksOfflineDesc" },
];

export function LandingFeatures() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4 animate-fade-in-up">{t("features.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={feature.titleKey} className="animate-fade-in-up" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                <GlassCard>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-100 to-pink-100 dark:from-lavender-900/20 dark:to-pink-900/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-lavender-500" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{t(feature.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
