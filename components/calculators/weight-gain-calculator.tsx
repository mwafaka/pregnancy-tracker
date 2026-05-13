"use client";

import { useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Weight, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalculatorInput } from "@/components/shared/calculator-input";
import { ResultPanel } from "@/components/shared/result-panel";
import { GlassCard } from "@/components/shared/glass-card";
import { fadeIn, staggerContainer } from "@/animations";
import { calculateWeightGain } from "@/calculators";
import { weightGainSchema, type WeightGainFormData } from "@/schemas";
import type { WeightGainResult } from "@/types";

export function WeightGainCalculator() {
  const [result, setResult] = useState<WeightGainResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WeightGainFormData>({
    resolver: zodResolver(weightGainSchema),
  });

  const onSubmit = useCallback((data: WeightGainFormData) => {
    setError(null);
    setResult(null);
    try {
      const calcResult = calculateWeightGain(
        data.prePregnancyWeight,
        data.currentWeight,
        data.height,
        data.weeksPregnant
      );
      setResult(calcResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed");
    }
  }, []);

  const handleShare = useCallback(async () => {
    if (!result) return;
    const status = result.onTrack ? "on track" : "off track";
    const text = `Weight gain: ${result.currentGain} kg gained (recommended ${result.recommendedGain.min}-${result.recommendedGain.max} kg). Weekly rate: ${result.weeklyRate} kg/week — ${status}.`;
    try {
      await navigator.share({ title: "My Weight Gain Guide", text });
    } catch {
      await navigator.clipboard.writeText(text);
    }
  }, [result]);

  const handleExport = useCallback(() => {
    if (!result) return;
    const data = [
      `Current Gain: ${result.currentGain} kg`,
      `Recommended Range: ${result.recommendedGain.min}–${result.recommendedGain.max} kg`,
      `Weekly Rate: ${result.weeklyRate} kg/week`,
      `On Track: ${result.onTrack ? "Yes" : "No"}`,
    ].join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `weight-gain-results-${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [result]);

  const range = result ? result.recommendedGain.max - result.recommendedGain.min : 1;
  const gainPercent = result && range > 0
    ? Math.min(100, Math.max(0, ((result.currentGain - result.recommendedGain.min) / range) * 100))
    : 0;

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={fadeIn}>
        <GlassCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/20 dark:to-lavender-900/20 flex items-center justify-center">
              <Weight className="w-5 h-5 text-peach-500" />
            </div>
            <div>
              <h2 className="font-display font-semibold">Weight Gain Guide</h2>
              <p className="text-xs text-muted-foreground">
                Track your pregnancy weight gain against recommended ranges
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <CalculatorInput
              label="Pre-pregnancy weight (kg)"
              description="Your weight before becoming pregnant"
              type="number"
              step="0.1"
              min={30}
              max={300}
              error={errors.prePregnancyWeight?.message}
              icon={<Weight className="w-4 h-4" />}
              {...register("prePregnancyWeight", { valueAsNumber: true })}
            />

            <CalculatorInput
              label="Current weight (kg)"
              description="Your current weight"
              type="number"
              step="0.1"
              min={30}
              max={300}
              error={errors.currentWeight?.message}
              icon={<Weight className="w-4 h-4" />}
              {...register("currentWeight", { valueAsNumber: true })}
            />

            <CalculatorInput
              label="Height (cm)"
              description="Your height in centimeters"
              type="number"
              step="0.1"
              min={100}
              max={250}
              error={errors.height?.message}
              icon={<Weight className="w-4 h-4" />}
              {...register("height", { valueAsNumber: true })}
            />

            <CalculatorInput
              label="Weeks pregnant"
              description="How many weeks pregnant are you?"
              type="number"
              min={1}
              max={40}
              error={errors.weeksPregnant?.message}
              icon={<Weight className="w-4 h-4" />}
              {...register("weeksPregnant", { valueAsNumber: true })}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full gap-2 rounded-xl">
              <Weight className="w-4 h-4" />
              {isSubmitting ? "Calculating..." : "Calculate Weight Gain"}
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
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4 text-center">
                    <div className="text-xs text-muted-foreground mb-1">Current Gain</div>
                    <div className="font-display text-xl font-bold">
                      {result.currentGain} kg
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4 text-center">
                    <div className="text-xs text-muted-foreground mb-1">Recommended Range</div>
                    <div className="font-display text-xl font-bold">
                      {result.recommendedGain.min}–{result.recommendedGain.max} kg
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4 text-center">
                    <div className="text-xs text-muted-foreground mb-1">Weekly Rate</div>
                    <div className="font-display text-xl font-bold">
                      {result.weeklyRate} kg/week
                    </div>
                  </div>
                  <div className="glass rounded-xl p-4 text-center">
                    <div className="text-xs text-muted-foreground mb-1">Status</div>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      {result.onTrack ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-success" />
                          <span className="font-display text-lg font-bold text-success">On Track</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-5 h-5 text-warning" />
                          <span className="font-display text-lg font-bold text-warning">Off Track</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-4">
                  <div className="text-xs text-muted-foreground mb-2">Gain Progress</div>
                  <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(gainPercent, 100)}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`absolute inset-y-0 left-0 rounded-full ${
                        result.onTrack
                          ? "bg-gradient-to-r from-green-400 to-green-500"
                          : "bg-gradient-to-r from-amber-400 to-orange-500"
                      }`}
                    />
                    <div
                      className="absolute inset-y-0 border-r-2 border-foreground/40 z-10"
                      style={{ left: "50%" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{result.recommendedGain.min} kg (min)</span>
                    <span>{result.recommendedGain.max} kg (max)</span>
                  </div>
                </div>
              </div>
            )}
          </ResultPanel>
        </motion.div>
      )}

      <div className="disclaimer-banner">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>Weight gain recommendations are based on IOM (Institute of Medicine) guidelines and your pre-pregnancy BMI. Individual needs vary. Always consult your healthcare provider for personalized nutrition and weight management advice during pregnancy.</p>
      </div>
    </motion.div>
  );
}
