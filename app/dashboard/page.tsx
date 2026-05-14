"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CalendarDays } from "lucide-react";
import { usePregnancy } from "@/context/pregnancy-context";
import { useLocale } from "@/context/locale-context";
import { PregnancyProgress } from "@/components/dashboard/pregnancy-progress";
import { BabyGrowthCard } from "@/components/dashboard/baby-growth-card";
import { NutritionCard } from "@/components/dashboard/nutrition-card";
import { SymptomCheckin } from "@/components/dashboard/symptom-checkin";
import { WeeklyInsights } from "@/components/dashboard/weekly-insights";
import { BirthPlanCard } from "@/components/dashboard/birth-plan-card";
import { DateSelect } from "@/components/shared/date-select";
import { GlassCard } from "@/components/shared/glass-card";
import { FloatingGradient } from "@/components/shared/floating-gradient";
import { staggerContainer, fadeInUp } from "@/animations";

export default function DashboardPage() {
  const { t } = useLocale();
  const {
    profile,
    updateProfile,
    currentWeek,
    currentTrimester,
    computedDueDate,
    daysRemaining,
    weeksRemaining,
    todayEntry,
    updateTodayMood,
    updateTodaySymptoms,
    addWater,
    birthPlan,
    toggleBirthPlanItem,
    addBirthPlanItem,
    removeBirthPlanItem,
    resetBirthPlan,
    birthPlanProgress,
  } = usePregnancy();
  const [lmpDraft, setLmpDraft] = useState("");

  if (!profile.lmp) {
    return (
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <FloatingGradient className="top-20 -left-48" color1="rgba(248, 176, 122, 0.2)" speed="slow" />
        <FloatingGradient className="bottom-20 -right-48" color1="rgba(167, 122, 238, 0.15)" speed="slow" />
        <div className="max-w-lg w-full mx-auto px-4 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <GlassCard>
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-peach-200 to-lavender-200 dark:from-peach-800/40 dark:to-lavender-800/40 flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="w-7 h-7 text-peach-500" />
                </div>
                <h1 className="text-2xl font-display font-bold mb-1">{t("dashboard.title")}</h1>
                <p className="text-sm text-muted-foreground">{t("dashboard.enterLmp")}</p>
              </div>
              <DateSelect
                value={lmpDraft}
                onChange={setLmpDraft}
                label={t("onboarding.lmpLabel")}
                description={t("onboarding.lmpDesc")}
              />
              {lmpDraft && (
                <div className="mt-4">
                  <button
                    onClick={() => updateProfile({ lmp: lmpDraft })}
                    className="w-full h-11 rounded-xl bg-gradient-to-br from-peach-400 to-lavender-400 text-white text-sm font-medium hover:from-peach-500 hover:to-lavender-500 transition-all"
                  >
                    {t("common.calculate")}
                  </button>
                </div>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      <FloatingGradient className="top-40 -left-48" color1="rgba(248, 176, 122, 0.15)" speed="slow" />
      <FloatingGradient className="top-96 -right-48" color1="rgba(167, 122, 238, 0.12)" speed="slow" />

      <div className="max-w-2xl mx-auto px-4 py-8 relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-5">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-peach-200 to-lavender-200 dark:from-peach-800/40 dark:to-lavender-800/40 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-peach-600 dark:text-peach-300" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold">{t("dashboard.title")}</h1>
              <p className="text-xs text-muted-foreground">{t("dashboard.subtitle")}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <PregnancyProgress
              currentWeek={currentWeek}
              currentTrimester={currentTrimester}
              dueDate={computedDueDate}
              daysRemaining={daysRemaining}
              weeksRemaining={weeksRemaining}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <BabyGrowthCard currentWeek={currentWeek} />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <NutritionCard
              currentWeek={currentWeek}
              waterIntake={todayEntry.waterIntake}
              onAddWater={addWater}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SymptomCheckin
              currentWeek={currentWeek}
              todayMood={todayEntry.mood}
              todaySymptoms={todayEntry.symptoms}
              onMoodChange={updateTodayMood}
              onSymptomsChange={updateTodaySymptoms}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <BirthPlanCard
              items={birthPlan}
              progress={birthPlanProgress}
              onToggle={toggleBirthPlanItem}
              onAdd={addBirthPlanItem}
              onRemove={removeBirthPlanItem}
              onReset={resetBirthPlan}
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <WeeklyInsights currentWeek={currentWeek} />
          </motion.div>

          <div className="disclaimer-banner mt-6">
            <p className="font-semibold text-xs mb-1">{t("disclaimer.title")}</p>
            <p>{t("disclaimer.dashboard")}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
