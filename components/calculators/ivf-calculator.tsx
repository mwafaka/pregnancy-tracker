"use client";

import { useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalculatorInput } from "@/components/shared/calculator-input";
import { ResultPanel } from "@/components/shared/result-panel";
import { GlassCard } from "@/components/shared/glass-card";
import { fadeIn, staggerContainer } from "@/animations";
import { calculateIVF } from "@/calculators";
import { ivfSchema, type IVFFormData } from "@/schemas";
import type { IVFResult } from "@/types";
import { formatDate } from "@/lib/utils";

export function IVFDueDateCalculator() {
  const [result, setResult] = useState<IVFResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IVFFormData>({
    resolver: zodResolver(ivfSchema),
    defaultValues: { embryoAge: 5 },
  });

  const onSubmit = useCallback((data: IVFFormData) => {
    setError(null);
    setResult(null);
    try {
      const parsed = new Date(data.transferDate);
      if (isNaN(parsed.getTime())) throw new Error("Invalid date");
      const calcResult = calculateIVF(parsed, data.embryoAge);
      setResult(calcResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed");
    }
  }, []);

  const handleShare = useCallback(async () => {
    if (!result) return;
    const text = `IVF Due Date: ${formatDate(result.dueDate)}. Transfer: ${formatDate(result.transferDate)}. Embryo age: ${result.embryoAge} days.`;
    try {
      await navigator.share({ title: "My IVF Due Date", text });
    } catch {
      await navigator.clipboard.writeText(text);
    }
  }, [result]);

  const handleExport = useCallback(() => {
    if (!result) return;
    const data = [
      `Retrieval Date: ${formatDate(result.retrievalDate)}`,
      `Transfer Date: ${formatDate(result.transferDate)}`,
      `Implantation Date: ${formatDate(result.implantationDate)}`,
      `Pregnancy Test Date: ${formatDate(result.pregnancyTestDate)}`,
      `Due Date: ${formatDate(result.dueDate)}`,
      `Embryo Age: ${result.embryoAge} days`,
    ].join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ivf-results-${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [result]);

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={fadeIn}>
        <GlassCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/20 dark:to-lavender-900/20 flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-peach-500" />
            </div>
            <div>
              <h2 className="font-display font-semibold">IVF Due Date Calculator</h2>
              <p className="text-xs text-muted-foreground">
                Calculate key dates based on embryo transfer
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <CalculatorInput
              label="Embryo transfer date"
              description="Enter the date of your embryo transfer"
              type="date"
              error={errors.transferDate?.message}
              icon={<FlaskConical className="w-4 h-4" />}
              {...register("transferDate")}
            />

            <CalculatorInput
              label="Embryo age at transfer (days)"
              description="Typically 3 (cleavage stage) or 5 (blastocyst)"
              type="number"
              min={3}
              max={6}
              error={errors.embryoAge?.message}
              icon={<FlaskConical className="w-4 h-4" />}
              {...register("embryoAge", { valueAsNumber: true })}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full gap-2 rounded-xl">
              <FlaskConical className="w-4 h-4" />
              {isSubmitting ? "Calculating..." : "Calculate IVF Dates"}
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
                  <div className="text-xs text-muted-foreground mb-1">Egg Retrieval Date</div>
                  <div className="font-display text-xl font-bold">
                    {formatDate(result.retrievalDate)}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Embryo Transfer Date</div>
                  <div className="font-display text-xl font-bold">
                    {formatDate(result.transferDate)}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Implantation Date</div>
                  <div className="font-display text-xl font-bold text-peach-500">
                    {formatDate(result.implantationDate)}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Pregnancy Test Date</div>
                  <div className="font-display text-xl font-bold text-lavender-500">
                    {formatDate(result.pregnancyTestDate)}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Estimated Due Date</div>
                  <div className="font-display text-xl font-bold gradient-text">
                    {formatDate(result.dueDate)}
                  </div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Embryo Age</div>
                  <div className="font-display text-xl font-bold">
                    {result.embryoAge} days
                  </div>
                </div>
              </div>
            )}
          </ResultPanel>
        </motion.div>
      )}

      <div className="disclaimer-banner">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>This calculator provides estimates based on standard IVF timelines. Individual results vary based on clinic protocols, embryo stage, and pregnancy progression. Always confirm key dates with your fertility specialist.</p>
      </div>
    </motion.div>
  );
}
