"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { addDays, differenceInDays, startOfDay, isValid, parseISO } from "date-fns";
import type { UserProfile, SymptomEntry, BirthPlanItem } from "@/types";
import { PREGNANCY_DURATION_DAYS, PREGNANCY_DURATION_WEEKS, BIRTH_PLAN_SUGGESTIONS } from "@/constants";

const DEFAULT_PROFILE: UserProfile = {
  onboardingComplete: false,
  lmp: null,
  dueDate: null,
  isFirstPregnancy: true,
  symptoms: [],
  dietaryPreferences: [],
  vitamins: [],
};

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

interface PregnancyContextType {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  completeOnboarding: () => void;
  resetProfile: () => void;
  todayEntry: SymptomEntry;
  updateTodaySymptoms: (symptoms: { name: string; severity: 1 | 2 | 3 }[]) => void;
  updateTodayMood: (mood: "great" | "good" | "okay" | "rough" | null) => void;
  updateWaterIntake: (count: number) => void;
  addWater: () => void;
  currentWeek: number;
  currentTrimester: 1 | 2 | 3;
  computedDueDate: Date | null;
  daysRemaining: number;
  weeksRemaining: number;
  isOnboarded: boolean;
  birthPlan: BirthPlanItem[];
  toggleBirthPlanItem: (id: string) => void;
  addBirthPlanItem: (text: string, category: BirthPlanItem["category"]) => void;
  removeBirthPlanItem: (id: string) => void;
  resetBirthPlan: () => void;
  birthPlanProgress: { completed: number; total: number };
}

const PregnancyContext = createContext<PregnancyContextType | null>(null);

function getTodayISO(): string {
  return startOfDay(new Date()).toISOString().split("T")[0] ?? "";
}

export function PregnancyProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [todayEntry, setTodayEntry] = useState<SymptomEntry>({ date: getTodayISO(), mood: null, symptoms: [], waterIntake: 0 });
  const [birthPlan, setBirthPlan] = useState<BirthPlanItem[]>(
    BIRTH_PLAN_SUGGESTIONS.map((s, i) => ({
      id: `bp-${i}`,
      text: s.text,
      category: s.category,
      completed: false,
      locked: false,
      order: i,
    }))
  );

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  }, []);

  const completeOnboarding = useCallback(() => {
    setProfile((prev) => ({ ...prev, onboardingComplete: true }));
  }, []);

  const resetProfile = useCallback(() => {
    setProfile(DEFAULT_PROFILE);
  }, []);

  const updateTodaySymptoms = useCallback((symptoms: { name: string; severity: 1 | 2 | 3 }[]) => {
    setTodayEntry((prev) => ({ ...prev, symptoms }));
  }, []);

  const updateTodayMood = useCallback((mood: "great" | "good" | "okay" | "rough" | null) => {
    setTodayEntry((prev) => ({ ...prev, mood }));
  }, []);

  const updateWaterIntake = useCallback((count: number) => {
    setTodayEntry((prev) => ({ ...prev, waterIntake: Math.max(0, count) }));
  }, []);

  const addWater = useCallback(() => {
    setTodayEntry((prev) => ({ ...prev, waterIntake: prev.waterIntake + 1 }));
  }, []);

  const toggleBirthPlanItem = useCallback((id: string) => {
    setBirthPlan((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }, []);

  const addBirthPlanItem = useCallback((text: string, category: BirthPlanItem["category"]) => {
    setBirthPlan((prev) => [
      ...prev,
      { id: generateId(), text, category, completed: false, locked: true, order: prev.length },
    ]);
  }, []);

  const removeBirthPlanItem = useCallback((id: string) => {
    setBirthPlan((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const resetBirthPlan = useCallback(() => {
    const defaults = BIRTH_PLAN_SUGGESTIONS.map((s, i) => ({
      id: `bp-${i}`,
      text: s.text,
      category: s.category,
      completed: false,
      locked: false,
      order: i,
    }));
    setBirthPlan(defaults);
  }, []);

  // Derived calculations
  const lmpDate = profile.lmp ? parseISO(profile.lmp) : null;
  const validLMP = lmpDate && isValid(lmpDate) ? lmpDate : null;

  const computedDueDate = validLMP ? addDays(validLMP, PREGNANCY_DURATION_DAYS) : null;

  const daysPregnant = validLMP ? differenceInDays(startOfDay(new Date()), validLMP) : 0;
  const currentWeek = validLMP
    ? Math.max(1, Math.min(PREGNANCY_DURATION_WEEKS, Math.floor(daysPregnant / 7) + 1))
    : 1;
  const currentTrimester: 1 | 2 | 3 = currentWeek <= 13 ? 1 : currentWeek <= 27 ? 2 : 3;
  const daysRemaining = validLMP ? Math.max(0, PREGNANCY_DURATION_DAYS - daysPregnant) : 280;
  const weeksRemaining = validLMP ? Math.max(0, PREGNANCY_DURATION_WEEKS - currentWeek) : 40;
  const isOnboarded = profile.onboardingComplete;
  const birthPlanProgress = {
    completed: birthPlan.filter((i) => i.completed).length,
    total: birthPlan.length,
  };

  return (
    <PregnancyContext.Provider
      value={{
        profile,
        updateProfile,
        completeOnboarding,
        resetProfile,
        todayEntry,
        updateTodaySymptoms,
        updateTodayMood,
        updateWaterIntake,
        addWater,
        currentWeek,
        currentTrimester,
        computedDueDate,
        daysRemaining,
        weeksRemaining,
        isOnboarded,
        birthPlan,
        toggleBirthPlanItem,
        addBirthPlanItem,
        removeBirthPlanItem,
        resetBirthPlan,
        birthPlanProgress,
      }}
    >
      {children}
    </PregnancyContext.Provider>
  );
}

export function usePregnancy() {
  const ctx = useContext(PregnancyContext);
  if (!ctx) throw new Error("usePregnancy must be used within PregnancyProvider");
  return ctx;
}
