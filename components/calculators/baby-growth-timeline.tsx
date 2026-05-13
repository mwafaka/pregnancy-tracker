"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Baby, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/glass-card";
import { WeekSlider } from "@/components/shared/week-slider";
import { TimelineProgress } from "@/components/shared/timeline-progress";
import { fadeIn, staggerContainer } from "@/animations";
import { calculateBabyGrowth } from "@/calculators";
import { PREGNANCY_DURATION_WEEKS } from "@/constants";

const MILESTONES: Record<number, string> = {
  4: "Implantation complete. Baby's neural tube is forming.",
  5: "Baby's heart begins to form and circulate blood.",
  6: "Heartbeat may be detected. Tiny buds for arms and legs appear.",
  7: "Brain is developing rapidly. Facial features begin to form.",
  8: "All major organs are forming. Baby's heart is beating.",
  9: "Fingers and toes are forming. Baby can move (too small to feel).",
  10: "Vital organs are fully formed. Bones begin to harden.",
  11: "Baby is now fully formed. Fingernails and hair follicles appear.",
  12: "Risk of miscarriage decreases significantly. Reflexes are developing.",
  13: "Vocal cords are forming. Baby can make sucking motions.",
  14: "Baby can make facial expressions. Gender may be visible on ultrasound.",
  15: "Baby's bones are becoming harder. Taste buds are forming.",
  16: "Eyes are moving slowly. Baby can hear your voice.",
  17: "Fat stores begin to develop. Umbilical cord grows stronger.",
  18: "Baby can yawn, stretch, and make facial expressions.",
  19: "Lanugo (fine hair) covers baby's body. Vernix starts forming.",
  20: "Halfway there! Baby can hear and may respond to sounds.",
  21: "Baby practices swallowing. Digestive system is working.",
  22: "Eyebrows and eyelids are fully formed. Baby has sleep cycles.",
  23: "Baby's lungs are developing blood vessels. Skin is less transparent.",
  24: "Lungs are developing rapidly. Taste buds are fully formed.",
  25: "Hair is becoming visible. Baby responds to familiar voices.",
  26: "Baby's eyes are forming. Lungs continue to mature.",
  27: "Baby can open and close eyes. REM sleep begins.",
  28: "Third trimester begins. Baby can blink and dream.",
  29: "Baby's bones are fully developed. Movement becomes stronger.",
  30: "Baby's head is growing. Lungs are still maturing.",
  31: "Baby can turn head. All five senses are functional.",
  32: "Baby is practicing breathing movements. Most babies are head-down.",
  33: "Baby's pupils constrict in response to light. Bones harden.",
  34: "Vernix thickens. Immune system develops rapidly.",
  35: "Baby's kidneys are fully developed. Lungs are nearly mature.",
  36: "Baby's organs are almost fully mature. Body is plumping up.",
  37: "Full term begins. Baby may descend into the pelvis.",
  38: "Baby continues to gain weight. Lanugo starts shedding.",
  39: "Baby is ready. Lungs and brain continue to mature.",
  40: "Full term! Baby is ready to meet the world.",
};

export function BabyGrowthTimeline() {
  const [week, setWeek] = useState(12);
  const growth = calculateBabyGrowth(week);

  const handleShare = useCallback(async () => {
    const milestone = MILESTONES[week] ?? "Your baby is growing and developing.";
    const text = `Week ${week} — Baby is the size of a ${growth.size}. Length: ${growth.length}, Weight: ${growth.weight}. ${milestone}`;
    try {
      await navigator.share({ title: `Baby Growth — Week ${week}`, text });
    } catch {
      await navigator.clipboard.writeText(text);
    }
  }, [week, growth]);

  const handleExport = useCallback(() => {
    const milestone = MILESTONES[week] ?? "Your baby is growing and developing.";
    const data = [
      `Baby Growth Timeline — Week ${week}`,
      `Size: ${growth.size}`,
      `Length: ${growth.length}`,
      `Weight: ${growth.weight}`,
      `Milestone: ${milestone}`,
    ].join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `baby-growth-week-${week}-${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [week, growth]);

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
      <motion.div variants={fadeIn}>
        <GlassCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/20 dark:to-lavender-900/20 flex items-center justify-center">
              <Baby className="w-5 h-5 text-peach-500" />
            </div>
            <div>
              <h2 className="font-display font-semibold">Baby Growth Timeline</h2>
              <p className="text-xs text-muted-foreground">Week by week development</p>
            </div>
          </div>

          <WeekSlider currentWeek={week} onWeekSelect={setWeek} />
          <TimelineProgress current={week} total={PREGNANCY_DURATION_WEEKS} className="mt-4" />
        </GlassCard>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={week}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -10 }}
        >
          <GlassCard glow>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-xs text-muted-foreground mb-1">Size</div>
                <div className="font-display text-lg font-bold gradient-text">{growth.size}</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-xs text-muted-foreground mb-1">Length</div>
                <div className="font-display text-lg font-bold">{growth.length}</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-xs text-muted-foreground mb-1">Weight</div>
                <div className="font-display text-lg font-bold">{growth.weight}</div>
              </div>
            </div>

            <div className="glass rounded-xl p-4">
              <div className="text-xs text-muted-foreground mb-1">Development Milestone</div>
              <p className="font-display text-base font-medium">
                {MILESTONES[week] ?? "Your baby is growing and developing."}
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2 justify-center">
        <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
          <Share2 className="w-4 h-4" />
          Share
        </Button>
        <Button variant="outline" size="sm" onClick={handleExport} className="gap-2">
          <Download className="w-4 h-4" />
          Export
        </Button>
      </div>

      <div className="disclaimer-banner">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>Growth estimates are averages. Every baby develops at their own pace. Always consult your healthcare provider for personalized pregnancy care and growth assessments.</p>
      </div>
    </motion.div>
  );
}
