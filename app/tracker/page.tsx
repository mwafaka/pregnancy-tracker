"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Baby, Calendar } from "lucide-react";
import { WeekSlider } from "@/components/shared/week-slider";
import { GlassCard } from "@/components/shared/glass-card";
import { HealthTipCard } from "@/components/shared/health-tip-card";
import { TimelineProgress } from "@/components/shared/timeline-progress";
import { PregnancyWeekCard } from "@/components/shared/pregnancy-week-card";
import { fadeInUp, staggerContainer } from "@/animations";
import { calculateBabyGrowth } from "@/calculators";
import { PREGNANCY_DURATION_WEEKS } from "@/constants";
import { formatDate } from "@/lib/utils";

export default function TrackerPage() {
  const today = new Date();
  const [selectedWeek, setSelectedWeek] = useState(20);

  const growth = calculateBabyGrowth(selectedWeek);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">Pregnancy Tracker</h1>
          <p className="text-muted-foreground">Track your baby's growth and your wellness journey</p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Baby className="w-5 h-5 text-peach-500" />
                <h2 className="font-display font-semibold">Week {selectedWeek}</h2>
              </div>
              <span className="text-xs text-muted-foreground">{formatDate(today)}</span>
            </div>
            <TimelineProgress current={selectedWeek} total={PREGNANCY_DURATION_WEEKS} />
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <WeekSlider currentWeek={selectedWeek} onWeekSelect={setSelectedWeek} />
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4">
          <GlassCard className="text-center p-4">
            <div className="text-xs text-muted-foreground mb-1">Baby Size</div>
            <div className="font-display font-semibold text-sm">{growth.size}</div>
          </GlassCard>
          <GlassCard className="text-center p-4">
            <div className="text-xs text-muted-foreground mb-1">Length</div>
            <div className="font-display font-semibold text-sm">{growth.length}</div>
          </GlassCard>
          <GlassCard className="text-center p-4">
            <div className="text-xs text-muted-foreground mb-1">Weight</div>
            <div className="font-display font-semibold text-sm">{growth.weight}</div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h3 className="font-display font-semibold text-lg mb-4">Wellness Tips for Week {selectedWeek}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HealthTipCard title="Nutrition" description="Focus on iron-rich foods and stay hydrated." category="nutrition" />
            <HealthTipCard title="Rest" description="Prioritize 7-9 hours of sleep. Use pillows for support." category="wellness" />
            <HealthTipCard title="Exercise" description="Gentle walking and prenatal yoga are excellent choices." category="wellness" />
            <HealthTipCard title="Hydration" description="Drink 8-10 glasses of water daily to support amniotic fluid." category="nutrition" />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-lavender-500" />
              <h3 className="font-display font-semibold">Upcoming Appointments</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              No appointments scheduled. Add your prenatal visits to receive timely reminders.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>

      <div className="disclaimer-banner mt-8">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>This tracker is for informational purposes. Always follow your healthcare provider's guidance.</p>
      </div>
    </div>
  );
}
