"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Plus, X } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { SYMPTOMS, getWeeklyInsight } from "@/constants";

interface SymptomCheckinProps {
  currentWeek: number;
  todayMood: "great" | "good" | "okay" | "rough" | null;
  todaySymptoms: { name: string; severity: 1 | 2 | 3 }[];
  onMoodChange: (mood: "great" | "good" | "okay" | "rough" | null) => void;
  onSymptomsChange: (symptoms: { name: string; severity: 1 | 2 | 3 }[]) => void;
}

const MOODS = [
  { key: "great" as const, emoji: "😊", label: "Great" },
  { key: "good" as const, emoji: "🙂", label: "Good" },
  { key: "okay" as const, emoji: "😐", label: "Okay" },
  { key: "rough" as const, emoji: "😢", label: "Rough" },
];

export function SymptomCheckin({ currentWeek, todayMood, todaySymptoms, onMoodChange, onSymptomsChange }: SymptomCheckinProps) {
  const [showSelector, setShowSelector] = useState(false);
  const insight = getWeeklyInsight(currentWeek)!;

  const availableSymptoms = SYMPTOMS.filter(
    (s) => !todaySymptoms.some((ts) => ts.name === s)
  );

  const addSymptom = (name: string) => {
    if (todaySymptoms.some((s) => s.name === name)) return;
    onSymptomsChange([...todaySymptoms, { name, severity: 1 }]);
  };

  const removeSymptom = (name: string) => {
    onSymptomsChange(todaySymptoms.filter((s) => s.name !== name));
  };

  const setSeverity = (name: string, severity: 1 | 2 | 3) => {
    onSymptomsChange(todaySymptoms.map((s) => (s.name === name ? { ...s, severity } : s)));
  };

  return (
    <GlassCard>
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-lavender-500" />
        <h3 className="font-display font-semibold text-lg">How are you feeling?</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Your Mood</p>
          <div className="flex gap-2">
            {MOODS.map((m) => (
              <motion.button
                key={m.key}
                whileTap={{ scale: 0.9 }}
                onClick={() => onMoodChange(todayMood === m.key ? null : m.key)}
                className={`flex-1 flex flex-col items-center gap-1 rounded-xl py-3 px-2 transition-all ${
                  todayMood === m.key
                    ? "bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/40 dark:to-lavender-900/40 ring-2 ring-peach-400"
                    : "bg-muted/50 hover:bg-muted"
                }`}
              >
                <span className="text-2xl">{m.emoji}</span>
                <span className="text-xs font-medium">{m.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Symptoms {todaySymptoms.length > 0 && `(${todaySymptoms.length})`}
            </p>
            <button
              onClick={() => setShowSelector(!showSelector)}
              className="text-xs text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Add symptom
            </button>
          </div>

          <AnimatePresence>
            {showSelector && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mb-3"
              >
                <div className="flex flex-wrap gap-1.5 p-2 rounded-xl bg-muted/30">
                  {availableSymptoms.slice(0, 12).map((s) => (
                    <button
                      key={s}
                      onClick={() => addSymptom(s)}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      + {s}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2">
            {todaySymptoms.map((s) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex items-center gap-2 rounded-xl bg-muted/40 px-3 py-2"
              >
                <button
                  onClick={() => removeSymptom(s.name)}
                  className="text-muted-foreground hover:text-destructive transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <span className="flex-1 text-sm font-medium">{s.name}</span>
                <div className="flex gap-1">
                  {([1, 2, 3] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setSeverity(s.name, level)}
                      className={`w-6 h-6 rounded-md text-[10px] font-medium transition-all ${
                        s.severity === level
                          ? level === 1
                            ? "bg-green-200 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                            : level === 2
                            ? "bg-yellow-200 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300"
                            : "bg-red-200 text-red-800 dark:bg-red-900/40 dark:text-red-300"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
            {todaySymptoms.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-2">
                Tap &quot;Add symptom&quot; to log how you&apos;re feeling
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-3">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">
            Common this week
          </p>
          <div className="flex flex-wrap gap-1.5">
            {insight.commonSymptoms.map((s) => (
              <button
                key={s}
                onClick={() => addSymptom(s)}
                className="text-xs px-2.5 py-1 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
