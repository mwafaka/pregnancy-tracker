"use client";

import { useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalculatorInput } from "@/components/shared/calculator-input";
import { ResultPanel } from "@/components/shared/result-panel";
import { GlassCard } from "@/components/shared/glass-card";
import { fadeIn, staggerContainer } from "@/animations";
import { calculateConception } from "@/calculators";
import { conceptionSchema, type ConceptionFormData } from "@/schemas";
import type { ConceptionResult } from "@/types";
import { formatDate } from "@/lib/utils";

export function ConceptionCalculator() {
  const [result, setResult] = useState<ConceptionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ConceptionFormData>({
    resolver: zodResolver(conceptionSchema),
  });

  const onSubmit = useCallback((data: ConceptionFormData) => {
    setError(null);
    setResult(null);
    try {
      const parsed = new Date(data.dueDate);
      if (isNaN(parsed.getTime())) throw new Error("Invalid date");
      setResult(calculateConception(parsed));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Calculation failed");
    }
  }, []);

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={fadeIn}>
        <GlassCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-lavender-100 flex items-center justify-center">
              <Heart className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <h2 className="font-display font-semibold">Conception Date Calculator</h2>
              <p className="text-xs text-muted-foreground">Estimate when conception likely occurred</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <CalculatorInput label="Estimated due date" type="date" error={errors.dueDate?.message} icon={<Heart className="w-4 h-4" />} {...register("dueDate")} />
            <Button type="submit" disabled={isSubmitting} className="w-full gap-2 rounded-xl">
              <Heart className="w-4 h-4" />
              {isSubmitting ? "Calculating..." : "Calculate Conception Date"}
            </Button>
          </form>
        </GlassCard>
      </motion.div>

      {(result || error) && (
        <motion.div variants={fadeIn}>
          <ResultPanel success={!!result} error={error ?? undefined}>
            {result && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Conception Date</div>
                  <div className="font-display text-lg font-bold gradient-text">{formatDate(result.conceptionDate)}</div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Due Date</div>
                  <div className="font-display text-lg font-bold">{formatDate(result.dueDate)}</div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Fertile Window</div>
                  <div className="font-display text-lg font-bold">{formatDate(result.fertileWindow.start)} - {formatDate(result.fertileWindow.end)}</div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Implantation (approx)</div>
                  <div className="font-display text-lg font-bold">{formatDate(result.implantationDate)}</div>
                </div>
                <div className="glass rounded-xl p-4 text-center sm:col-span-2">
                  <div className="text-xs text-muted-foreground mb-1">Pregnancy Test From</div>
                  <div className="font-display text-lg font-bold">{formatDate(result.pregnancyTestDate)}</div>
                </div>
              </div>
            )}
          </ResultPanel>
        </motion.div>
      )}

      <div className="disclaimer-banner">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>Conception dates are estimates. Sperm can survive up to 5 days, and ovulation timing varies. Consult your healthcare provider for accurate dating.</p>
      </div>
    </motion.div>
  );
}
