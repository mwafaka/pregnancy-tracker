"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Baby, Calendar, Apple, Moon, Activity, Droplets } from "lucide-react";
import { WeekSlider } from "@/components/shared/week-slider";
import { GlassCard } from "@/components/shared/glass-card";
import { HealthTipCard } from "@/components/shared/health-tip-card";
import { TimelineProgress } from "@/components/shared/timeline-progress";
import { fadeInUp, staggerContainer } from "@/animations";
import { calculateBabyGrowth } from "@/calculators";
import { PREGNANCY_DURATION_WEEKS } from "@/constants";
import { formatDate } from "@/lib/utils";
import { useLocale } from "@/context/locale-context";

export default function TrackerPage() {
  const { t, locale } = useLocale();
  const today = new Date();
  const [selectedWeek, setSelectedWeek] = useState(20);

  const growth = calculateBabyGrowth(selectedWeek);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">{t("tracker.title")}</h1>
          <p className="text-muted-foreground">{t("tracker.subtitle")}</p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Baby className="w-5 h-5 text-peach-500" />
                <h2 className="font-display font-semibold">{t("common.week")} {selectedWeek}</h2>
              </div>
              <span className="text-xs text-muted-foreground">{formatDate(today, locale)}</span>
            </div>
            <TimelineProgress current={selectedWeek} total={PREGNANCY_DURATION_WEEKS} />
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <WeekSlider currentWeek={selectedWeek} onWeekSelect={setSelectedWeek} />
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
          <GlassCard className="text-center p-4">
            <div className="text-xs text-muted-foreground mb-1">{t("tracker.babySize")}</div>
            <div className="font-display font-semibold text-sm">{growth.size}</div>
          </GlassCard>
          <GlassCard className="text-center p-4">
            <div className="text-xs text-muted-foreground mb-1">{t("common.length")}</div>
            <div className="font-display font-semibold text-sm">{growth.length}</div>
          </GlassCard>
          <GlassCard className="text-center p-4">
            <div className="text-xs text-muted-foreground mb-1">{t("common.weight")}</div>
            <div className="font-display font-semibold text-sm">{growth.weight}</div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h3 className="font-display font-semibold text-lg mb-4">{t("tracker.wellnessTips").replace("{week}", String(selectedWeek))}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HealthTipCard icon={<Apple className="w-5 h-5" />} title={t("tracker.nutrition")} description={t("tracker.nutritionDesc")} category="nutrition" />
            <HealthTipCard icon={<Moon className="w-5 h-5" />} title={t("tracker.rest")} description={t("tracker.restDesc")} category="wellness" />
            <HealthTipCard icon={<Activity className="w-5 h-5" />} title={t("tracker.exercise")} description={t("tracker.exerciseDesc")} category="wellness" />
            <HealthTipCard icon={<Droplets className="w-5 h-5" />} title={t("tracker.hydration")} description={t("tracker.hydrationDesc")} category="nutrition" />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-lavender-500" />
              <h3 className="font-display font-semibold">{t("tracker.upcomingAppointments")}</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("tracker.noAppointments")}
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>

      <div className="disclaimer-banner mt-8">
        <p className="font-semibold text-xs mb-1">{t("disclaimer.title")}</p>
        <p>{t("disclaimer.tracker")}</p>
      </div>
    </div>
  );
}
