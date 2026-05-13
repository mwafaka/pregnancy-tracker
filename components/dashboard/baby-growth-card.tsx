"use client";

import { motion } from "framer-motion";
import { Baby } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { BabyGrowthSVG } from "@/components/shared/baby-growth-svg";
import { calculateBabyGrowth } from "@/calculators";
import { FRUIT_COMPARISONS, getTrimesterForWeek } from "@/constants";

interface BabyGrowthCardProps {
  currentWeek: number;
}

export function BabyGrowthCard({ currentWeek }: BabyGrowthCardProps) {
  const growth = calculateBabyGrowth(currentWeek);
  const fruit = FRUIT_COMPARISONS[currentWeek] ?? { emoji: "🌸", fruit: growth.size };
  const trimester = getTrimesterForWeek(currentWeek);

  const stageLabel =
    trimester === 1 ? "Embryonic Stage" :
    trimester === 2 ? "Fetal Development" :
    "Nearly Ready!";

  return (
    <GlassCard>
      <div className="flex items-center gap-2 mb-4">
        <Baby className="w-5 h-5 text-peach-500" />
        <h3 className="font-display font-semibold text-lg">Your Baby This Week</h3>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5">
        <div className="relative shrink-0">
          <BabyGrowthSVG week={currentWeek} size={180} />
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider whitespace-nowrap"
          >
            {stageLabel}
          </motion.div>
        </div>

        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="text-xl"
            >
              {fruit.emoji}
            </motion.span>
            <div>
              <p className="text-xs text-muted-foreground">Size of a</p>
              <p className="text-lg font-display font-bold">{fruit.fruit}</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center sm:justify-start">
            <div className="rounded-xl bg-muted/50 px-3 py-2">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Length</p>
              <p className="font-semibold text-sm">{growth.length}</p>
            </div>
            <div className="rounded-xl bg-muted/50 px-3 py-2">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Weight</p>
              <p className="font-semibold text-sm">{growth.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
