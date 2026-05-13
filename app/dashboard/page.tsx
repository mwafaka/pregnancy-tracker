"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Sparkles } from "lucide-react";
import { usePregnancy } from "@/context/pregnancy-context";
import { PregnancyProgress } from "@/components/dashboard/pregnancy-progress";
import { BabyGrowthCard } from "@/components/dashboard/baby-growth-card";
import { NutritionCard } from "@/components/dashboard/nutrition-card";
import { SymptomCheckin } from "@/components/dashboard/symptom-checkin";
import { WeeklyInsights } from "@/components/dashboard/weekly-insights";
import { BirthPlanCard } from "@/components/dashboard/birth-plan-card";
import { FloatingGradient } from "@/components/shared/floating-gradient";
import { staggerContainer, fadeInUp } from "@/animations";

export default function DashboardPage() {
  const router = useRouter();
  const {
    isOnboarded,
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

  useEffect(() => {
    if (!isOnboarded) {
      router.replace("/onboarding");
    }
  }, [isOnboarded, router]);

  if (!isOnboarded) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-peach-400 border-t-transparent animate-spin" />
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
              <h1 className="text-xl font-display font-bold">Your Pregnancy</h1>
              <p className="text-xs text-muted-foreground">Here&apos;s everything at a glance</p>
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
            <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
            <p>This dashboard is for informational tracking only and is not a substitute for professional prenatal care. Always consult your healthcare provider for medical decisions.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
