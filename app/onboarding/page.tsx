"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Heart, Baby, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FloatingGradient } from "@/components/shared/floating-gradient";
import { GlassCard } from "@/components/shared/glass-card";
import { usePregnancy } from "@/context/pregnancy-context";
import { SYMPTOMS, DIETARY_PREFERENCES, VITAMINS } from "@/constants";
import { fadeIn, fadeInUp, staggerContainer } from "@/animations";

const TOTAL_STEPS = 3;

export default function OnboardingPage() {
  const router = useRouter();
  const { profile, updateProfile, completeOnboarding } = usePregnancy();
  const [step, setStep] = useState(0);
  const [lmp, setLmp] = useState(profile.lmp ?? "");
  const [dueDate, setDueDate] = useState(profile.dueDate ?? "");
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth ?? "");
  const [isFirstPregnancy, setIsFirstPregnancy] = useState(profile.isFirstPregnancy);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(profile.symptoms);
  const [selectedDiets, setSelectedDiets] = useState<string[]>(profile.dietaryPreferences);
  const [selectedVitamins, setSelectedVitamins] = useState<string[]>(profile.vitamins);

  const toggleArray = (arr: string[], item: string) =>
    arr.includes(item) ? arr.filter((s) => s !== item) : [...arr, item];

  const canProceed = () => {
    if (step === 0) return lmp.length > 0;
    if (step === 1) return dateOfBirth.length > 0;
    return true;
  };

  const handleNext = () => {
    if (step === 0) {
      updateProfile({
        lmp: lmp || null,
        dueDate: dueDate || null,
      });
    }
    if (step === 1) {
      updateProfile({
        dateOfBirth: dateOfBirth || null,
        isFirstPregnancy,
      });
    }
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleComplete = () => {
    updateProfile({
      lmp: lmp || null,
      dueDate: dueDate || null,
      dateOfBirth: dateOfBirth || null,
      isFirstPregnancy,
      symptoms: selectedSymptoms,
      dietaryPreferences: selectedDiets,
      vitamins: selectedVitamins,
    });
    completeOnboarding();
    router.replace("/dashboard");
  };

  const stepTitle = [
    "When is your baby due?",
    "Tell us about yourself",
    "Your preferences",
  ][step];

  const stepDescription = [
    "We'll calculate your pregnancy progress automatically.",
    "This helps us personalize your experience.",
    "So we can give you the most relevant information.",
  ][step];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingGradient className="top-20 -left-48" color1="rgba(248, 176, 122, 0.2)" speed="slow" />
      <FloatingGradient className="bottom-20 -right-48" color1="rgba(167, 122, 238, 0.15)" speed="slow" />

      <div className="max-w-lg w-full mx-auto px-4 relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeIn} className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-peach-200 to-lavender-200 dark:from-peach-800/40 dark:to-lavender-800/40 flex items-center justify-center">
              <Heart className="w-8 h-8 text-peach-500" />
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === step
                    ? "w-8 bg-gradient-to-r from-peach-400 to-lavender-400"
                    : i < step
                    ? "w-2 bg-peach-300"
                    : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>

          <GlassCard>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-display font-bold mb-1">{stepTitle}</h1>
              <p className="text-sm text-muted-foreground">{stepDescription}</p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 0 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="lmp">First day of your last period</Label>
                      <Input
                        id="lmp"
                        type="date"
                        value={lmp}
                        onChange={(e) => setLmp(e.target.value)}
                        className="mt-1.5"
                      />
                      <p className="text-xs text-muted-foreground mt-1.5">
                        This is how we calculate your due date and current week.
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="dueDate">Or enter your due date (optional)</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="mt-1.5"
                      />
                      <p className="text-xs text-muted-foreground mt-1.5">
                        If you know your due date from a doctor, enter it here.
                      </p>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="dob">Your date of birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block">Is this your first pregnancy?</Label>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setIsFirstPregnancy(true)}
                          className={`flex-1 rounded-xl py-3 px-4 text-sm font-medium transition-all ${
                            isFirstPregnancy
                              ? "bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/40 dark:to-lavender-900/40 ring-2 ring-peach-400"
                              : "bg-muted/50 hover:bg-muted"
                          }`}
                        >
                          <Baby className="w-5 h-5 mx-auto mb-1" />
                          Yes, first baby
                        </button>
                        <button
                          onClick={() => setIsFirstPregnancy(false)}
                          className={`flex-1 rounded-xl py-3 px-4 text-sm font-medium transition-all ${
                            !isFirstPregnancy
                              ? "bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/40 dark:to-lavender-900/40 ring-2 ring-peach-400"
                              : "bg-muted/50 hover:bg-muted"
                          }`}
                        >
                          <Sparkles className="w-5 h-5 mx-auto mb-1" />
                          I&apos;ve done this before
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5 max-h-[400px] overflow-y-auto">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">
                        Any symptoms? (tap all that apply)
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {SYMPTOMS.map((s) => (
                          <button
                            key={s}
                            onClick={() => setSelectedSymptoms(toggleArray(selectedSymptoms, s))}
                            className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                              selectedSymptoms.includes(s)
                                ? "bg-peach-100 text-peach-800 dark:bg-peach-900/40 dark:text-peach-200 ring-1 ring-peach-400"
                                : "bg-muted/50 text-muted-foreground hover:bg-muted"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">
                        Dietary preferences
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {DIETARY_PREFERENCES.map((d) => (
                          <button
                            key={d}
                            onClick={() => setSelectedDiets(toggleArray(selectedDiets, d))}
                            className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                              selectedDiets.includes(d)
                                ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200 ring-1 ring-green-400"
                                : "bg-muted/50 text-muted-foreground hover:bg-muted"
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">
                        Vitamins & supplements you take
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {VITAMINS.map((v) => (
                          <button
                            key={v}
                            onClick={() => setSelectedVitamins(toggleArray(selectedVitamins, v))}
                            className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                              selectedVitamins.includes(v)
                                ? "bg-lavender-100 text-lavender-800 dark:bg-lavender-900/40 dark:text-lavender-200 ring-1 ring-lavender-400"
                                : "bg-muted/50 text-muted-foreground hover:bg-muted"
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-3 mt-6">
              {step > 0 && (
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  <ArrowLeft className="w-4 h-4" /> Back
                </Button>
              )}
              {step < TOTAL_STEPS - 1 ? (
                <Button onClick={handleNext} disabled={!canProceed()} className="flex-1">
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={handleComplete} className="flex-1 gap-2">
                  <Heart className="w-4 h-4" /> Start Your Journey
                </Button>
              )}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
