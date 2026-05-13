"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { addDays, differenceInDays, startOfDay, isValid, parseISO } from "date-fns";
import type { UserProfile, SymptomEntry, BirthPlanItem } from "@/types";
import { PREGNANCY_DURATION_DAYS, PREGNANCY_DURATION_WEEKS, PROFILE_STORAGE_KEY, SYMPTOM_STORAGE_KEY, BIRTH_PLAN_STORAGE_KEY, BIRTH_PLAN_SUGGESTIONS } from "@/constants";

const DEFAULT_PROFILE: UserProfile = {
  onboardingComplete: false,
  lmp: null,
  dueDate: null,
  dateOfBirth: null,
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

function loadProfile(): UserProfile {
  if (typeof window === "undefined") return DEFAULT_PROFILE;
  try {
    const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...DEFAULT_PROFILE, ...parsed };
    }
  } catch { /* ignore */ }
  return DEFAULT_PROFILE;
}

function loadTodayEntry(): SymptomEntry {
  if (typeof window === "undefined") return { date: getTodayISO(), mood: null, symptoms: [], waterIntake: 0 };
  try {
    const stored = localStorage.getItem(SYMPTOM_STORAGE_KEY);
    if (stored) {
      const all = JSON.parse(stored) as SymptomEntry[];
      const today = getTodayISO();
      const existing = all.find((e) => e.date === today);
      if (existing) return existing;
    }
  } catch { /* ignore */ }
  return { date: getTodayISO(), mood: null, symptoms: [], waterIntake: 0 };
}

function persistProfile(profile: UserProfile) {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

function persistTodayEntry(entry: SymptomEntry) {
  if (typeof window === "undefined") return;
  try {
    const stored = localStorage.getItem(SYMPTOM_STORAGE_KEY);
    const all: SymptomEntry[] = stored ? JSON.parse(stored) : [];
    const today = getTodayISO();
    const idx = all.findIndex((e) => e.date === today);
    if (idx >= 0) {
      all[idx] = entry;
    } else {
      all.push(entry);
    }
    localStorage.setItem(SYMPTOM_STORAGE_KEY, JSON.stringify(all));
  } catch { /* ignore */ }
}

function loadBirthPlan(): BirthPlanItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(BIRTH_PLAN_STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return BIRTH_PLAN_SUGGESTIONS.map((s, i) => ({
    id: `bp-${i}`,
    text: s.text,
    category: s.category,
    completed: false,
    locked: false,
    order: i,
  }));
}

function persistBirthPlan(items: BirthPlanItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(BIRTH_PLAN_STORAGE_KEY, JSON.stringify(items));
}

export function PregnancyProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [todayEntry, setTodayEntry] = useState<SymptomEntry>({ date: getTodayISO(), mood: null, symptoms: [], waterIntake: 0 });
  const [birthPlan, setBirthPlan] = useState<BirthPlanItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProfile(loadProfile());
    setTodayEntry(loadTodayEntry());
    setBirthPlan(loadBirthPlan());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) persistProfile(profile);
  }, [profile, hydrated]);

  useEffect(() => {
    if (hydrated) persistTodayEntry(todayEntry);
  }, [todayEntry, hydrated]);

  useEffect(() => {
    if (hydrated) persistBirthPlan(birthPlan);
  }, [birthPlan, hydrated]);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  }, []);

  const completeOnboarding = useCallback(() => {
    setProfile((prev) => ({ ...prev, onboardingComplete: true }));
  }, []);

  const resetProfile = useCallback(() => {
    setProfile(DEFAULT_PROFILE);
    if (typeof window !== "undefined") {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
    }
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
    if (typeof window !== "undefined") {
      localStorage.removeItem(BIRTH_PLAN_STORAGE_KEY);
    }
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
  const isOnboarded = hydrated && profile.onboardingComplete;
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
