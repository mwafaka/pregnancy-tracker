"use client";

import { motion } from "framer-motion";
import { Apple, Droplets, AlertTriangle, Pill } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { FOOD_RECOMMENDATIONS, getTrimesterForWeek } from "@/constants";
import { useLocale } from "@/context/locale-context";

interface NutritionCardProps {
  currentWeek: number;
  waterIntake: number;
  onAddWater: () => void;
}

export function NutritionCard({ currentWeek, waterIntake, onAddWater }: NutritionCardProps) {
  const { t } = useLocale();
  const tri = getTrimesterForWeek(currentWeek);
  const foods = FOOD_RECOMMENDATIONS[tri];

  return (
    <GlassCard>
      <div className="flex items-center gap-2 mb-4">
        <Apple className="w-5 h-5 text-green-500" />
        <h3 className="font-display font-semibold text-lg">{t("dashboard.nutritionToday")}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2 flex items-center gap-1">
            <Apple className="w-3.5 h-3.5" /> {t("dashboard.recommended")}
          </p>
          <div className="space-y-1.5">
            {foods.recommended.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-2 text-sm"
              >
                <span className="text-green-500 mt-0.5">✓</span>
                <div>
                  <span className="font-medium">{item.food}</span>
                  <span className="text-muted-foreground"> — {item.reason}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2 flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" /> {t("dashboard.foodsToAvoid")}
          </p>
          <div className="space-y-1.5">
            {foods.avoid.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-red-400 mt-0.5">✕</span>
                <div>
                  <span className="font-medium">{item.food}</span>
                  <span className="text-muted-foreground"> — {item.reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2 flex items-center gap-1">
            <Pill className="w-3.5 h-3.5" /> {t("dashboard.importantNutrients")}
          </p>
          <div className="space-y-1.5">
            {foods.vitamins.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-lavender-500 mt-0.5">✦</span>
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-muted-foreground"> — {item.reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold flex items-center gap-1">
              <Droplets className="w-3.5 h-3.5" /> {t("dashboard.waterIntakeToday")}
            </p>
            <span className="font-display font-bold text-lg gradient-text">{waterIntake}/10</span>
          </div>
          <div className="flex gap-1.5">
            {Array.from({ length: 10 }, (_, i) => (
              <motion.button
                key={i}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  if (i < waterIntake) return;
                  for (let j = waterIntake; j <= i; j++) onAddWater();
                }}
                className={`flex-1 h-8 rounded-lg transition-all duration-300 ${
                  i < waterIntake
                    ? "bg-gradient-to-br from-blue-400 to-cyan-400 shadow-sm"
                    : "bg-muted hover:bg-muted/80"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1.5 text-center">
            {t("dashboard.tapToLogGlass")}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
