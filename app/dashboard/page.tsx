"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Activity, Calendar, FileText, Settings, Bell, Heart, Baby } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedStat } from "@/components/shared/animated-stat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyState } from "@/components/shared/empty-state";
import { TimelineProgress } from "@/components/shared/timeline-progress";
import { staggerContainer, fadeInUp } from "@/animations";
import { PREGNANCY_DURATION_WEEKS } from "@/constants";
import { calculateDueDate } from "@/calculators";
import { formatDate } from "@/lib/utils";

export default function DashboardPage() {
  const [lmpDate, setLmpDate] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateDueDate> | null>(null);

  const handleCalculate = useCallback(() => {
    if (!lmpDate) return;
    try {
      const parsed = new Date(lmpDate);
      if (!isNaN(parsed.getTime())) {
        setResult(calculateDueDate(parsed));
      }
    } catch { /* skip */ }
  }, [lmpDate]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
        <motion.div variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Track your pregnancy journey at a glance</p>
        </motion.div>

        {!result ? (
          <motion.div variants={fadeInUp}>
            <GlassCard className="max-w-md">
              <h2 className="font-display font-semibold mb-2">Set Up Your Pregnancy</h2>
              <p className="text-sm text-muted-foreground mb-4">Enter the first day of your last menstrual period to get started.</p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="lmp">Last Menstrual Period</Label>
                  <Input id="lmp" type="date" value={lmpDate} onChange={(e) => setLmpDate(e.target.value)} />
                </div>
                <Button onClick={handleCalculate} className="w-full gap-2">
                  <Heart className="w-4 h-4" />
                  Start Tracking
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        ) : (
          <>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <AnimatedStat value={result.currentWeek} label="Current Week" />
              <AnimatedStat value={formatDate(result.dueDate)} label="Due Date" delay={0.1} />
              <AnimatedStat value={result.weeksRemaining} label="Weeks Left" delay={0.2} />
              <AnimatedStat value={`T${result.currentTrimester}`} label="Trimester" delay={0.3} />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlassCard>
                <TimelineProgress current={result.currentWeek} total={PREGNANCY_DURATION_WEEKS} />
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Tabs defaultValue="tracker" className="w-full">
                <TabsList className="grid grid-cols-4 w-full max-w-md">
                  <TabsTrigger value="tracker"><Activity className="w-4 h-4" /></TabsTrigger>
                  <TabsTrigger value="notes"><FileText className="w-4 h-4" /></TabsTrigger>
                  <TabsTrigger value="appointments"><Calendar className="w-4 h-4" /></TabsTrigger>
                  <TabsTrigger value="reminders"><Bell className="w-4 h-4" /></TabsTrigger>
                </TabsList>

                <TabsContent value="tracker" className="mt-4">
                  <GlassCard>
                    <h3 className="font-display font-semibold mb-4">Pregnancy Tracker</h3>
                    <div className="space-y-3">
                      {result.milestones.filter((_, i) => i < 5).map((m, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                          <div>
                            <div className="text-sm font-medium">Week {m.week}</div>
                            <div className="text-xs text-muted-foreground">{m.title}</div>
                          </div>
                          <Baby className="w-4 h-4 text-peach-400" />
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </TabsContent>

                <TabsContent value="notes" className="mt-4">
                  <EmptyState icon={<FileText className="w-8 h-8" />} title="No health notes yet" description="Start tracking your symptoms and questions." />
                </TabsContent>

                <TabsContent value="appointments" className="mt-4">
                  <EmptyState icon={<Calendar className="w-8 h-8" />} title="No appointments scheduled" description="Add your prenatal appointments to stay organized." />
                </TabsContent>

                <TabsContent value="reminders" className="mt-4">
                  <EmptyState icon={<Bell className="w-8 h-8" />} title="No reminders set" description="Set reminders for medications and prenatal vitamins." />
                </TabsContent>
              </Tabs>
            </motion.div>
          </>
        )}
      </motion.div>

      <div className="disclaimer-banner mt-8">
        <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
        <p>This dashboard is for informational tracking only and is not a substitute for professional prenatal care.</p>
      </div>
    </div>
  );
}
