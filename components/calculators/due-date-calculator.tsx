"use client";

import { useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalculatorInput } from "@/components/shared/calculator-input";
import { ResultPanel } from "@/components/shared/result-panel";
import { GlassCard } from "@/components/shared/glass-card";
import { fadeIn, staggerContainer } from "@/animations";
import { calculateDueDate } from "@/calculators";
import { lmpDateSchema, type LMPFormData } from "@/schemas";
import type { DueDateResult } from "@/types";
import { formatDate } from "@/lib/utils";
import { useLocale } from "@/context/locale-context";

export function DueDateCalculator() {
  const { t, locale } = useLocale();
  const [result, setResult] = useState<DueDateResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LMPFormData>({
    resolver: zodResolver(lmpDateSchema),
  });

  const onSubmit = useCallback((data: LMPFormData) => {
    setError(null);
    setResult(null);
    try {
      const parsed = new Date(data.lmpDate);
      if (isNaN(parsed.getTime())) throw new Error("Invalid date");
      const calcResult = calculateDueDate(parsed);
      setResult(calcResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed");
    }
  }, []);

  const handleShare = useCallback(async () => {
    if (!result) return;
    const text = `My estimated due date is ${formatDate(result.dueDate, locale)}. I'm currently in week ${result.currentWeek} (${result.weeksRemaining} weeks to go!)`;
    try {
      await navigator.share({ title: "My Due Date", text });
    } catch {
      await navigator.clipboard.writeText(text);
    }
  }, [result, locale]);

  const handleExport = useCallback(() => {
    if (!result) return;
    const data = [
      `${t("calculator.dueDate.estimatedDueDate")}: ${formatDate(result.dueDate, locale)}`,
      `${t("calculator.dueDate.conceptionDate")}: ${formatDate(result.conceptionDate, locale)}`,
      `${t("calculator.dueDate.currentWeek")}: ${result.currentWeek}`,
      `${t("calculator.dueDate.trimester")}: ${result.currentTrimester}`,
      `${t("calculator.dueDate.weeksRemaining")}: ${result.weeksRemaining}`,
    ].join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `due-date-results-${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [result, t, locale]);

  const trimesterLabels = [t("calculator.dueDate.trimester") + " 1", t("calculator.dueDate.trimester") + " 2", t("calculator.dueDate.trimester") + " 3"];

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={fadeIn}>
        <GlassCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/20 dark:to-lavender-900/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-peach-500" />
            </div>
            <div>
              <h2 className="font-display font-semibold">{t("calculator.dueDate.title")}</h2>
              <p className="text-xs text-muted-foreground">
                {t("calculator.dueDate.desc")}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <CalculatorInput
              label={t("calculator.dueDate.lmpLabel")}
              description={t("calculator.dueDate.lmpDesc")}
              type="date"
              error={errors.lmpDate?.message}
              icon={<Calendar className="w-4 h-4" />}
              {...register("lmpDate")}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full gap-2 rounded-xl">
              <Calendar className="w-4 h-4" />
              {isSubmitting ? t("common.calculating") : t("calculator.dueDate.button")}
            </Button>
          </form>
        </GlassCard>
      </motion.div>

      {(result || error) && (
        <motion.div variants={fadeIn}>
          <ResultPanel
            success={!!result}
            error={error ?? undefined}
            onShare={handleShare}
            onExport={handleExport}
          >
            {result && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">{t("calculator.dueDate.estimatedDueDate")}</div>
                  <div className="font-display text-xl font-bold gradient-text">
                    {formatDate(result.dueDate, locale)}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">{t("calculator.dueDate.conceptionDate")}</div>
                  <div className="font-display text-xl font-bold">
                    {formatDate(result.conceptionDate, locale)}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">{t("calculator.dueDate.currentWeek")}</div>
                  <div className="font-display text-xl font-bold text-peach-500">
                    {t("common.week")} {result.currentWeek}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">{t("calculator.dueDate.trimester")}</div>
                  <div className="font-display text-xl font-bold text-lavender-500">
                    {trimesterLabels[result.currentTrimester - 1]}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">{t("calculator.dueDate.weeksRemaining")}</div>
                  <div className="font-display text-xl font-bold">
                    {result.weeksRemaining} {t("common.weeks")}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">{t("calculator.dueDate.daysUntilDue")}</div>
                  <div className="font-display text-xl font-bold">{result.daysRemaining} {t("common.days")}</div>
                </div>
              </div>
            )}
          </ResultPanel>
        </motion.div>
      )}

      <div className="disclaimer-banner">
        <p className="font-semibold text-xs mb-1">{t("disclaimer.title")}</p>
        <p>{t("disclaimer.calculator")}</p>
      </div>
    </motion.div>
  );
}
