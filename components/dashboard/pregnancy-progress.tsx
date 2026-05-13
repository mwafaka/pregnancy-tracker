"use client";

import { motion } from "framer-motion";
import { Heart, CalendarDays } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { TimelineProgress } from "@/components/shared/timeline-progress";
import { PREGNANCY_DURATION_WEEKS, TRIMESTER_LABELS } from "@/constants";
import { formatDate } from "@/lib/utils";
import { useLocale } from "@/context/locale-context";

interface PregnancyProgressProps {
  currentWeek: number;
  currentTrimester: 1 | 2 | 3;
  dueDate: Date | null;
  daysRemaining: number;
  weeksRemaining: number;
}

export function PregnancyProgress({ currentWeek, currentTrimester, dueDate, daysRemaining, weeksRemaining }: PregnancyProgressProps) {
  const { t, locale } = useLocale();
  const trimesterInfo = TRIMESTER_LABELS[currentTrimester];

  return (
    <GlassCard>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              {t("dashboard.youreIn")}
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              {t("common.week")} <span className="gradient-text">{currentWeek}</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              {trimesterInfo.label} &middot; {trimesterInfo.weeks}
            </p>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 flex items-center justify-center"
          >
            <Heart className="w-6 h-6 text-pink-500" />
          </motion.div>
        </div>

        <TimelineProgress current={currentWeek} total={PREGNANCY_DURATION_WEEKS} />

        <div className="grid grid-cols-2 gap-4">
          {dueDate && (
            <div className="rounded-xl bg-muted/50 p-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <CalendarDays className="w-3.5 h-3.5" />
                {t("dashboard.dueDate")}
              </div>
              <div className="font-display font-semibold text-sm">
                {formatDate(dueDate, locale)}
              </div>
            </div>
          )}
          <div className="rounded-xl bg-muted/50 p-3">
            <div className="text-xs text-muted-foreground mb-1">
              {t("dashboard.daysToGo")}
            </div>
            <div className="font-display font-semibold text-sm">
              <span className="text-2xl gradient-text">{daysRemaining}</span> {t("common.days")}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
