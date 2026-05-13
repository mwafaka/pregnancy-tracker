"use client";

import { motion } from "framer-motion";
import { Sparkles, BookHeart } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { getWeeklyInsight } from "@/constants";

interface WeeklyInsightsProps {
  currentWeek: number;
}

export function WeeklyInsights({ currentWeek }: WeeklyInsightsProps) {
  const insight = getWeeklyInsight(currentWeek);

  return (
    <GlassCard glow>
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-peach-500" />
        <h3 className="font-display font-semibold text-lg">Your Week {currentWeek} Insights</h3>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Baby&apos;s Development</p>
          <p className="text-sm leading-relaxed">{insight.babyDevelopment}</p>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">What You May Feel</p>
          <p className="text-sm leading-relaxed">{insight.motherChanges}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl bg-gradient-to-r from-peach-50 to-lavender-50 dark:from-peach-950/30 dark:to-lavender-950/30 p-4"
        >
          <div className="flex items-start gap-3">
            <BookHeart className="w-5 h-5 text-lavender-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Tip</p>
              <p className="text-sm leading-relaxed">{insight.tip}</p>
            </div>
          </div>
        </motion.div>

        <div className="text-center pt-2 border-t border-border">
          <p className="text-sm italic text-muted-foreground leading-relaxed">
            &ldquo;{insight.emotionalMessage}&rdquo;
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
