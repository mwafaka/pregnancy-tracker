"use client";

import { useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CalendarCheck, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalculatorInput } from "@/components/shared/calculator-input";
import { ResultPanel } from "@/components/shared/result-panel";
import { GlassCard } from "@/components/shared/glass-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fadeIn, staggerContainer } from "@/animations";
import { calculateOvulation } from "@/calculators";
import { ovulationSchema, type OvulationFormData } from "@/schemas";
import type { OvulationResult } from "@/types";
import { formatDate } from "@/lib/utils";
import { AVERAGE_CYCLE_LENGTH, AVERAGE_PERIOD_LENGTH } from "@/constants";

export function OvulationCalculator() {
  const [result, setResult] = useState<OvulationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<OvulationFormData>({
    resolver: zodResolver(ovulationSchema),
    defaultValues: { cycleLength: AVERAGE_CYCLE_LENGTH, periodLength: AVERAGE_PERIOD_LENGTH },
  });

  const onSubmit = useCallback((data: OvulationFormData) => {
    setError(null);
    setResult(null);
    try {
      const parsed = new Date(data.periodStart);
      if (isNaN(parsed.getTime())) throw new Error("Invalid date");
      setResult(calculateOvulation(parsed, data.cycleLength, data.periodLength));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed");
    }
  }, []);

  const handleShare = useCallback(async () => {
    if (!result) return;
    const text = `My ovulation date is estimated to be ${formatDate(result.ovulationDate)}. Fertile window: ${formatDate(result.fertileWindowStart)} - ${formatDate(result.fertileWindowEnd)}`;
    try { await navigator.share({ title: "My Ovulation Window", text }); }
    catch { await navigator.clipboard.writeText(text); }
  }, [result]);

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={fadeIn}>
        <GlassCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peach-100 to-lavender-100 flex items-center justify-center">
              <CalendarCheck className="w-5 h-5 text-peach-500" />
            </div>
            <div>
              <h2 className="font-display font-semibold">Ovulation Calculator</h2>
              <p className="text-xs text-muted-foreground">Track your fertile window</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <CalculatorInput label="Period start date" type="date" error={errors.periodStart?.message} icon={<CalendarCheck className="w-4 h-4" />} {...register("periodStart")} />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cycleLength">Cycle length (days)</Label>
                <Input id="cycleLength" type="number" min={21} max={45} error={errors.cycleLength?.message} {...register("cycleLength")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="periodLength">Period length (days)</Label>
                <Input id="periodLength" type="number" min={2} max={10} error={errors.periodLength?.message} {...register("periodLength")} />
              </div>
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full gap-2 rounded-xl">
              <CalendarCheck className="w-4 h-4" />
              {isSubmitting ? "Calculating..." : "Calculate Ovulation"}
            </Button>
          </form>
        </GlassCard>
      </motion.div>

      {(result || error) && (
        <motion.div variants={fadeIn}>
          <ResultPanel success={!!result} error={error ?? undefined} onShare={handleShare}>
            {result && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Ovulation Date</div>
                  <div className="font-display text-lg font-bold gradient-text">{formatDate(result.ovulationDate)}</div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Fertile Window</div>
                  <div className="font-display text-lg font-bold">{formatDate(result.fertileWindowStart)} - {formatDate(result.fertileWindowEnd)}</div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Next Period</div>
                  <div className="font-display text-lg font-bold">{formatDate(result.nextPeriodDate)}</div>
                </div>
                {result.implantationDate && (
                  <div className="glass rounded-xl p-4 text-center">
                    <div className="text-xs text-muted-foreground mb-1">Implantation (approx)</div>
                    <div className="font-display text-lg font-bold">{formatDate(result.implantationDate)}</div>
                  </div>
                )}
              </div>
            )}
          </ResultPanel>
        </motion.div>
      )}

      <div className="disclaimer-banner">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>This calculator provides estimates. Cycle lengths vary. Use ovulation test kits and consult your healthcare provider for fertility guidance.</p>
      </div>
    </motion.div>
  );
}
