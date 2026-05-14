"use client";

import { useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { motion } from "framer-motion";
import { CalendarDays, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DateSelect } from "@/components/shared/date-select";
import { ResultPanel } from "@/components/shared/result-panel";
import { GlassCard } from "@/components/shared/glass-card";
import { TimelineProgress } from "@/components/shared/timeline-progress";
import { fadeIn, staggerContainer } from "@/animations";
import { calculatePregnancyWeek } from "@/calculators";
import { lmpDateSchema, type LMPFormData } from "@/schemas";
import { PREGNANCY_DURATION_WEEKS } from "@/constants";

export function PregnancyWeekCalculator() {
  const [result, setResult] = useState<{ week: number; trimester: 1 | 2 | 3 } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { handleSubmit, control, formState: { errors, isSubmitting } } = useForm<LMPFormData>({
    resolver: zodResolver(lmpDateSchema),
  });

  const onSubmit = useCallback((data: LMPFormData) => {
    setError(null);
    setResult(null);
    try {
      const parsed = new Date(data.lmpDate);
      if (isNaN(parsed.getTime())) throw new Error("Invalid date");
      setResult(calculatePregnancyWeek(parsed));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed");
    }
  }, []);

  const handleShare = useCallback(async () => {
    if (!result) return;
    const text = `I'm in week ${result.week} of pregnancy (Trimester ${result.trimester}). Track your pregnancy at PregnancyTracker!`;
    try { await navigator.share({ title: "My Pregnancy Week", text }); }
    catch { await navigator.clipboard.writeText(text); }
  }, [result]);

  const trimesters = ["First", "Second", "Third"];

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={fadeIn}>
        <GlassCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/20 dark:to-lavender-900/20 flex items-center justify-center">
              <CalendarDays className="w-5 h-5 text-peach-500" />
            </div>
            <div>
              <h2 className="font-display font-semibold">Pregnancy Week Calculator</h2>
              <p className="text-xs text-muted-foreground">Find out your current pregnancy week</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Controller
              name="lmpDate"
              control={control}
              render={({ field }) => (
                <DateSelect
                  value={field.value}
                  onChange={field.onChange}
                  label="First day of last menstrual period"
                  error={errors.lmpDate?.message}
                />
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full gap-2 rounded-xl">
              <CalendarDays className="w-4 h-4" />
              {isSubmitting ? "Calculating..." : "Calculate Week"}
            </Button>
          </form>
        </GlassCard>
      </motion.div>

      {(result || error) && (
        <motion.div variants={fadeIn}>
          <ResultPanel success={!!result} error={error ?? undefined} onShare={handleShare}>
            {result && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4 text-center">
                    <div className="text-xs text-muted-foreground mb-1">Current Week</div>
                    <div className="font-display text-3xl font-bold gradient-text">Week {result.week}</div>
                  </div>
                  <div className="glass rounded-xl p-4 text-center">
                    <div className="text-xs text-muted-foreground mb-1">Trimester</div>
                    <div className="font-display text-3xl font-bold text-lavender-500">{trimesters[result.trimester - 1]}</div>
                  </div>
                </div>
                <TimelineProgress current={result.week} total={PREGNANCY_DURATION_WEEKS} />
              </div>
            )}
          </ResultPanel>
        </motion.div>
      )}

      <div className="disclaimer-banner">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>This calculator provides an estimate. Confirm your pregnancy week with your healthcare provider through clinical evaluation and ultrasound.</p>
      </div>
    </motion.div>
  );
}
