export interface PregnancyWeek {
  week: number;
  trimester: 1 | 2 | 3;
  babySize: string;
  babyWeight: string;
  babyLength: string;
  development: DevelopmentMilestone[];
  symptoms: string[];
  tips: string[];
  nutrition: string[];
  appointments: string[];
}

export interface DevelopmentMilestone {
  title: string;
  description: string;
  icon: string;
}

export interface CalculatorInput {
  value: string;
  label: string;
  placeholder?: string;
  description?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
}

export interface CalculatorResult {
  success: boolean;
  data?: Record<string, string | number | Date>;
  error?: string;
}

export interface DueDateResult {
  dueDate: Date;
  conceptionDate: Date;
  currentWeek: number;
  currentTrimester: 1 | 2 | 3;
  weeksRemaining: number;
  daysRemaining: number;
  milestones: TimelineMilestone[];
}

export interface TimelineMilestone {
  date: Date;
  week: number;
  title: string;
  description: string;
  type: "milestone" | "appointment" | "symptom" | "reminder";
}

export interface OvulationResult {
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  nextPeriodDate: Date;
  implantationDate?: Date;
  cycleDay: number;
}

export interface WeightGainResult {
  recommendedGain: { min: number; max: number };
  currentGain: number;
  weeklyRate: number;
  onTrack: boolean;
  byWeek: { week: number; min: number; max: number }[];
}

export interface CycleInfo {
  periodStart: Date;
  cycleLength: number;
  periodLength: number;
}

export interface ConceptionResult {
  conceptionDate: Date;
  dueDate: Date;
  fertileWindow: { start: Date; end: Date };
  implantationDate: Date;
  pregnancyTestDate: Date;
}

export interface IVFResult {
  retrievalDate: Date;
  transferDate: Date;
  implantationDate: Date;
  pregnancyTestDate: Date;
  dueDate: Date;
  milestones: TimelineMilestone[];
  embryoAge: number;
}

export interface HealthNote {
  id: string;
  date: Date;
  title: string;
  content: string;
  tags: string[];
  type: "note" | "symptom" | "question";
}

export interface Appointment {
  id: string;
  date: Date;
  title: string;
  provider: string;
  notes: string;
  location?: string;
  reminder: boolean;
}

export interface Reminder {
  id: string;
  date: Date;
  title: string;
  description: string;
  type: "medication" | "appointment" | "nutrition" | "exercise" | "other";
  recurring: boolean;
  completed: boolean;
}

export interface UserProfile {
  onboardingComplete: boolean;
  lmp: string | null;
  dueDate: string | null;
  isFirstPregnancy: boolean;
  symptoms: string[];
  dietaryPreferences: string[];
  vitamins: string[];
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
  };
  jsonLd?: Record<string, unknown>[];
  hreflang?: { href: string; lang: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentPage {
  slug: string;
  title: string;
  description: string;
  category: "symptom" | "nutrition" | "wellness" | "development" | "guide";
  author?: string;
  reviewer?: string;
  lastUpdated: Date;
  content: string;
  faqs: FAQItem[];
  relatedSlugs: string[];
}

export type WeekInfo = Record<number, PregnancyWeek>;

export interface ChartDataPoint {
  week: number;
  value: number;
  label?: string;
}

export interface SymptomEntry {
  date: string;
  mood: "great" | "good" | "okay" | "rough" | null;
  symptoms: { name: string; severity: 1 | 2 | 3 }[];
  waterIntake: number;
}

export interface FoodRecommendation {
  category: "recommended" | "avoid" | "vitamin";
  food: string;
  reason: string;
  trimesterApplicable: 1 | 2 | 3 | "all";
}

export interface WeeklyInsight {
  week: number;
  babyDevelopment: string;
  motherChanges: string;
  tip: string;
  emotionalMessage: string;
  commonSymptoms: string[];
}

export interface BirthPlanItem {
  id: string;
  text: string;
  category: "labor" | "pain" | "delivery" | "postpartum" | "partner" | "other";
  completed: boolean;
  locked: boolean;
  order: number;
}
