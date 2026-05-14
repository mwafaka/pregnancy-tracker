export const SITE_CONFIG = {
  name: "PregnancyTracker",
  title: "PregnancyTracker — Your Complete Pregnancy Companion",
  description:
    "Track your pregnancy week by week, calculate due dates, ovulation, and more. Evidence-based tools and resources for every stage of your journey.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pregnancytracker.com",
  locale: "en_US",
  localeAr: "ar_SA",
  type: "MedicalWebPage" as const,
  author: "PregnancyTracker Medical Team",
  reviewer: "Dr. Sarah Mitchell, OB-GYN",
  disclaimer:
    "This website provides general information and is not a substitute for professional medical advice. Always consult your healthcare provider for medical decisions.",
  legal: {
    informationalOnly: true,
    notMedicalAdvice: true,
    consultProvider: true,
  },
  social: {
    twitter: "@pregnancytracker",
    facebook: "PregnancyTracker",
    instagram: "pregnancytracker",
  },
  version: "1.0.0",
  siteImages: {
    ogDefault: "/opengraph-image",
    logo: "/icon.svg",
  },
  keywords: [
    "pregnancy tracker",
    "due date calculator",
    "ovulation calculator",
    "pregnancy week by week",
    "pregnancy symptoms",
    "pregnancy calculator",
    "conception calculator",
    "IVF calculator",
    "pregnancy weight gain",
    "baby growth timeline",
    "prenatal health",
    "pregnancy tools",
    "first trimester",
    "second trimester",
    "third trimester",
    "pregnancy nutrition",
    "morning sickness relief",
  ],
  authorInfo: {
    name: "PregnancyTracker Medical Team",
    url: "https://pregnancytracker.com/about",
  },
  reviewerInfo: {
    name: "Dr. Sarah Mitchell, OB-GYN",
    url: "https://pregnancytracker.com/about#medical-review",
  },
} as const;

export const PREGNANCY_DURATION_WEEKS = 40;
export const PREGNANCY_DURATION_DAYS = 280;
export const AVERAGE_CYCLE_LENGTH = 28;
export const AVERAGE_PERIOD_LENGTH = 5;
export const LUTEAL_PHASE_LENGTH = 14;
export const FERTILE_WINDOW_DAYS = 6;
export const IMPLANTATION_DAYS = 9;
export const IVF_EMBRYO_AGE_DAYS = 5;

export const TRIMESTER_LABELS: Record<1 | 2 | 3, { label: string; weeks: string }> = {
  1: { label: "First Trimester", weeks: "Week 1–13" },
  2: { label: "Second Trimester", weeks: "Week 14–27" },
  3: { label: "Third Trimester", weeks: "Week 28–40" },
};

export const BMI_CATEGORIES = {
  underweight: { min: 0, max: 18.4, gain: { min: 12.5, max: 18 } },
  normal: { min: 18.5, max: 24.9, gain: { min: 11.5, max: 16 } },
  overweight: { min: 25, max: 29.9, gain: { min: 7, max: 11.5 } },
  obese: { min: 30, max: 99, gain: { min: 5, max: 9 } },
} as const;

export const WEEKLY_GAIN_RATES: Record<string, { min: number; max: number }> = {
  underweight: { min: 0.44, max: 0.58 },
  normal: { min: 0.35, max: 0.5 },
  overweight: { min: 0.23, max: 0.33 },
  obese: { min: 0.17, max: 0.27 },
};

export const NAV_ITEMS = [
  { label: "Home", labelKey: "nav.home", href: "/" },
  { label: "Dashboard", labelKey: "nav.dashboard", href: "/dashboard" },
] as const;

export const CALCULATOR_ROUTES = [
  { slug: "due-date-calculator", label: "Due Date Calculator", icon: "Calendar" },
  { slug: "pregnancy-week-calculator", label: "Pregnancy Week Calculator", icon: "CalendarDays" },
  { slug: "ovulation-calculator", label: "Ovulation Calculator", icon: "CalendarCheck" },
  { slug: "conception-calculator", label: "Conception Calculator", icon: "Heart" },
  { slug: "ivf-calculator", label: "IVF Calculator", icon: "FlaskConical" },
  { slug: "weight-gain-calculator", label: "Weight Gain Calculator", icon: "Weight" },
  { slug: "baby-growth-timeline", label: "Baby Growth Timeline", icon: "Baby" },
] as const;

// ─── SYMPTOM DATA ───
export const SYMPTOMS = [
  "Nausea / Morning sickness",
  "Fatigue",
  "Breast tenderness",
  "Frequent urination",
  "Food cravings",
  "Food aversions",
  "Mood swings",
  "Bloating",
  "Constipation",
  "Heartburn",
  "Back pain",
  "Leg cramps",
  "Shortness of breath",
  "Swollen feet/ankles",
  "Headaches",
  "Dizziness",
  "Braxton Hicks contractions",
  " insomnia",
  "Stretch marks",
  "Varicose veins",
] as const;

export const DIETARY_PREFERENCES = [
  "No restrictions",
  "Vegetarian",
  "Vegan",
  "Gluten-free",
  "Dairy-free",
  "Kosher",
  "Halal",
] as const;

export const VITAMINS = [
  "Folic Acid",
  "Vitamin D",
  "Iron",
  "Calcium",
  "Omega-3 (DHA)",
  "Iodine",
  "Vitamin B12",
  "Vitamin C",
] as const;

// ─── FRUIT COMPARISONS WITH EMOJIS ───
export const FRUIT_COMPARISONS: Record<number, { emoji: string; fruit: string }> = {
  4: { emoji: "🌸", fruit: "Poppy seed" },
  5: { emoji: "🌱", fruit: "Sesame seed" },
  6: { emoji: "🫛", fruit: "Sweet pea" },
  7: { emoji: "🫐", fruit: "Blueberry" },
  8: { emoji: "🍓", fruit: "Raspberry" },
  9: { emoji: "🫒", fruit: "Green olive" },
  10: { emoji: "🍑", fruit: "Prune" },
  11: { emoji: "🫐", fruit: "Fig" },
  12: { emoji: "🍋‍🟩", fruit: "Lime" },
  13: { emoji: "🫛", fruit: "Pea pod" },
  14: { emoji: "🍋", fruit: "Lemon" },
  15: { emoji: "🍎", fruit: "Apple" },
  16: { emoji: "🥑", fruit: "Avocado" },
  17: { emoji: "🍐", fruit: "Pear" },
  18: { emoji: "🫑", fruit: "Bell pepper" },
  19: { emoji: "🥭", fruit: "Mango" },
  20: { emoji: "🍌", fruit: "Banana" },
  21: { emoji: "🥕", fruit: "Carrot" },
  22: { emoji: "🧅", fruit: "Papaya" },
  23: { emoji: "🍊", fruit: "Grapefruit" },
  24: { emoji: "🍈", fruit: "Cantaloupe" },
  25: { emoji: "🥬", fruit: "Rutabaga" },
  26: { emoji: "🥒", fruit: "Zucchini" },
  27: { emoji: "🥦", fruit: "Cauliflower" },
  28: { emoji: "🍆", fruit: "Eggplant" },
  29: { emoji: "🎃", fruit: "Butternut squash" },
  30: { emoji: "🥬", fruit: "Cabbage" },
  31: { emoji: "🥥", fruit: "Coconut" },
  32: { emoji: "🌰", fruit: "Jicama" },
  33: { emoji: "🍍", fruit: "Pineapple" },
  34: { emoji: "🍈", fruit: "Honeydew" },
  35: { emoji: "🍈", fruit: "Crenshaw melon" },
  36: { emoji: "🥬", fruit: "Romaine lettuce" },
  37: { emoji: "🥬", fruit: "Swiss chard" },
  38: { emoji: "🥬", fruit: "Rhubarb" },
  39: { emoji: "🍉", fruit: "Watermelon" },
  40: { emoji: "🎃", fruit: "Small pumpkin" },
};

// ─── NUTRITION GUIDANCE ───
export const FOOD_RECOMMENDATIONS: Record<1 | 2 | 3, {
  recommended: { food: string; reason: string }[];
  avoid: { food: string; reason: string }[];
  vitamins: { name: string; reason: string }[];
}> = {
  1: {
    recommended: [
      { food: "Leafy greens (spinach, kale)", reason: "Rich in folate for neural tube development" },
      { food: "Citrus fruits", reason: "Vitamin C aids iron absorption" },
      { food: "Lean protein (chicken, tofu)", reason: "Supports rapid cell growth" },
      { food: "Whole grains (oatmeal, quinoa)", reason: "Fiber helps with constipation" },
      { food: "Ginger tea", reason: "Can help ease morning sickness" },
    ],
    avoid: [
      { food: "Raw fish (sushi)", reason: "Risk of bacteria and parasites" },
      { food: "Unpasteurized dairy", reason: "Risk of listeria infection" },
      { food: "Raw or undercooked eggs", reason: "Risk of salmonella" },
      { food: "Excessive caffeine", reason: "Limit to 200mg per day" },
      { food: "Alcohol", reason: "Can cause fetal alcohol syndrome" },
    ],
    vitamins: [
      { name: "Folic Acid", reason: "Prevents neural tube defects — take 400-800 mcg daily" },
      { name: "Vitamin D", reason: "Supports bone development and immune function" },
      { name: "Iron", reason: "Prevents anemia and supports increased blood volume" },
    ],
  },
  2: {
    recommended: [
      { food: "Calcium-rich foods (yogurt, cheese)", reason: "Baby's bones and teeth are forming" },
      { food: "Fatty fish (salmon, sardines)", reason: "Omega-3 DHA for baby's brain development" },
      { food: "Colorful vegetables", reason: "Packed with antioxidants and vitamins" },
      { food: "Nuts and seeds", reason: "Healthy fats and protein for growing baby" },
      { food: "Lean red meat", reason: "Iron needs increase significantly this trimester" },
    ],
    avoid: [
      { food: "High-mercury fish (tuna, swordfish)", reason: "Can harm baby's developing nervous system" },
      { food: "Processed foods high in sugar", reason: "Excess weight gain and gestational diabetes risk" },
      { food: "Raw sprouts", reason: "Risk of bacterial contamination" },
      { food: "Excessive caffeine", reason: "Still limit to 200mg per day" },
    ],
    vitamins: [
      { name: "Calcium", reason: "1,000mg daily for baby's growing bones and teeth" },
      { name: "Vitamin D", reason: "Helps absorb calcium — 600 IU daily" },
      { name: "Omega-3 (DHA)", reason: "Supports baby's brain and eye development" },
      { name: "Iron", reason: "27mg daily to support increased blood volume" },
    ],
  },
  3: {
    recommended: [
      { food: "Fiber-rich foods (berries, broccoli)", reason: "Helps with third-trimester constipation" },
      { food: "Protein-rich snacks (eggs, Greek yogurt)", reason: "Supports baby's rapid weight gain" },
      { food: "Healthy carbs (sweet potatoes, brown rice)", reason: "Sustained energy for labor preparation" },
      { food: "Hydrating foods (watermelon, cucumber)", reason: "Helps maintain amniotic fluid levels" },
      { food: "Dates", reason: "May help with cervical ripening and labor" },
    ],
    avoid: [
      { food: "High-sodium foods", reason: "Can worsen swelling and blood pressure" },
      { food: "Fried and greasy foods", reason: "Can aggravate heartburn" },
      { food: "Excessive caffeine", reason: "Continue to limit to 200mg daily" },
      { food: "Unpasteurized juices", reason: "Risk of foodborne illness" },
    ],
    vitamins: [
      { name: "Iron", reason: "Critical for preventing anemia during delivery" },
      { name: "Vitamin D", reason: "Continues to support bone development — 600 IU daily" },
      { name: "Calcium", reason: "1,000mg daily for baby's final bone strengthening" },
    ],
  },
};

// ─── WEEKLY INSIGHTS ───
export const WEEKLY_INSIGHTS: Record<number, {
  babyDevelopment: string;
  motherChanges: string;
  tip: string;
  emotionalMessage: string;
  commonSymptoms: string[];
}> = {
  4: {
    babyDevelopment: "Implantation is complete! Your baby is now a tiny ball of cells called a blastocyst, already burrowed into your uterine lining.",
    motherChanges: "You may not feel different yet, but your body is already producing hCG — the pregnancy hormone detected by tests.",
    tip: "Start taking a prenatal vitamin with folic acid if you haven't already.",
    emotionalMessage: "A new life is beginning inside you. This quiet start is the most profound beginning of all.",
    commonSymptoms: ["Implantation spotting", "Mild cramping", "Breast tenderness", "Fatigue"],
  },
  8: {
    babyDevelopment: "All major organs are forming! Your baby's heart is beating at about 150-170 beats per minute — twice as fast as yours.",
    motherChanges: "You might be feeling more tired than usual. Your uterus is expanding, and morning sickness may be in full swing.",
    tip: "Eat small, frequent meals to help with nausea. Keep crackers by your bedside.",
    emotionalMessage: "Your body is working around the clock building a heart, a brain, and so much more. Be gentle with yourself.",
    commonSymptoms: ["Nausea", "Fatigue", "Food aversions", "Mood swings", "Bloating"],
  },
  12: {
    babyDevelopment: "Your baby is now fully formed! All organs, muscles, and limbs are in place. Reflexes are developing — baby can make a fist.",
    motherChanges: "The risk of miscarriage drops significantly. Your energy may start coming back as the placenta takes over hormone production.",
    tip: "Schedule your first trimester screening and ultrasound if you haven't yet.",
    emotionalMessage: "You've made it through the first trimester. That's an incredible accomplishment. Your body is stronger than you know.",
    commonSymptoms: ["Nausea improving", "Visible baby bump", "Increased energy", "Food cravings"],
  },
  16: {
    babyDevelopment: "Your baby can make facial expressions! They're practicing swallowing and may even be sucking their thumb.",
    motherChanges: "Many women feel a surge of energy in the second trimester. Your bump is becoming noticeable!",
    tip: "Stay hydrated — aim for 8-10 glasses of water daily to support your increased blood volume.",
    emotionalMessage: "You're glowing — and not just because of the hormones. Your strength and beauty are radiating.",
    commonSymptoms: ["Increased appetite", "Round ligament pain", "Nasal congestion", "Visible bump"],
  },
  20: {
    babyDevelopment: "Halfway there! Your baby can hear your voice and may respond to sounds. They're about the size of a banana.",
    motherChanges: "You may feel your baby move regularly now — like flutters, taps, or rolls.",
    tip: "Start playing music or talking to your baby. They recognize your voice!",
    emotionalMessage: "You're halfway to meeting your baby. Feel those kicks — they're tiny hellos from inside.",
    commonSymptoms: ["Baby movements felt", "Back pain", "Leg cramps", "Stretch marks forming"],
  },
  24: {
    babyDevelopment: "Your baby's lungs are developing rapidly. Taste buds are forming, and they can taste the amniotic fluid!",
    motherChanges: "You may notice swelling in your feet and ankles. Your growing belly is shifting your center of gravity.",
    tip: "Consider a glucose screening test this week to check for gestational diabetes.",
    emotionalMessage: "Your baby is getting stronger every day. Those kicks are becoming high-fives from the inside.",
    commonSymptoms: ["Swollen feet/ankles", "Back pain", "Braxton Hicks", "Shortness of breath"],
  },
  28: {
    babyDevelopment: "Third trimester begins! Your baby can blink, dream (REM sleep), and may even have a favorite sleeping position.",
    motherChanges: "You might feel more tired again as your body works harder. Shortness of breath is common as baby presses upward.",
    tip: "Sleep on your left side to improve blood flow to your baby. Use pillows for support.",
    emotionalMessage: "You're entering the final chapter. Every flutter and kick is your baby telling you they can't wait to meet you.",
    commonSymptoms: ["Fatigue", "Shortness of breath", "Heartburn", "Frequent urination", "Back pain"],
  },
  32: {
    babyDevelopment: "Your baby is practicing breathing movements, swallowing amniotic fluid. Most babies are head-down now.",
    motherChanges: "Your belly is getting quite large. You may feel more uncomfortable and have trouble sleeping.",
    tip: "Pack your hospital bag! Include essentials for you, baby, and your birth partner.",
    emotionalMessage: "Your body is building a sanctuary. Every discomfort is a sign of the incredible work you're doing.",
    commonSymptoms: ["Insomnia", "Swelling", "Braxton Hicks", "Fatigue", "Pelvic pressure"],
  },
  36: {
    babyDevelopment: "Your baby's organs are almost fully mature. They're plumping up with fat and their lungs are nearly ready.",
    motherChanges: "You may feel increased pelvic pressure as baby drops lower into your pelvis (lightening).",
    tip: "Rest as much as you can. Your body is doing the most intense work of the entire pregnancy right now.",
    emotionalMessage: "The finish line is in sight. Your body knows exactly what to do. Trust it. You're almost there.",
    commonSymptoms: ["Pelvic pressure", "Frequent urination", "Back pain", "Braxton Hicks", "Anxiety"],
  },
  40: {
    babyDevelopment: "Full term! Your baby is fully developed and ready to meet the world. Most babies weigh 6-9 pounds.",
    motherChanges: "You may feel a mix of excitement, impatience, and nervousness. This is completely normal.",
    tip: "Stay active with gentle walks. Rest when you need to. Trust your body's timing.",
    emotionalMessage: "You've carried a miracle for 40 weeks. You are ready. You are strong. You are about to become a mother.",
    commonSymptoms: ["Pelvic pressure", "Contractions", "Back pain", "Insomnia", "Excitement", "Nesting urge"],
  },
};

export function getWeeklyInsight(week: number) {
  const clamped = Math.max(4, Math.min(40, week));
  const nearest = Object.keys(WEEKLY_INSIGHTS).map(Number).reduce((a, b) =>
    Math.abs(b - clamped) <= Math.abs(a - clamped) ? b : a
  );
  return WEEKLY_INSIGHTS[nearest] ?? WEEKLY_INSIGHTS[20]!;
}

export function getTrimesterForWeek(week: number): 1 | 2 | 3 {
  if (week <= 13) return 1;
  if (week <= 27) return 2;
  return 3;
}

// ─── BIRTH PLAN SUGGESTIONS ───
export interface BirthPlanSuggestion {
  text: string;
  category: "labor" | "pain" | "delivery" | "postpartum" | "partner" | "other";
}

export const BIRTH_PLAN_SUGGESTIONS: BirthPlanSuggestion[] = [
  // Labor Preferences
  { text: "Choose who will be in the delivery room", category: "labor" },
  { text: "Decide on labor environment (dim lights, music, silence)", category: "labor" },
  { text: "Plan to move freely during early labor", category: "labor" },
  { text: "Discuss intermittent vs continuous fetal monitoring", category: "labor" },
  { text: "Decide on induction preferences if needed", category: "labor" },

  // Pain Management
  { text: "Consider natural pain relief methods (breathing, water, massage)", category: "pain" },
  { text: "Decide if you want an epidural", category: "pain" },
  { text: "Consider nitrous oxide (gas) options", category: "pain" },
  { text: "Plan for IV pain medication if desired", category: "pain" },
  { text: "Explore water birth or shower options", category: "pain" },

  // Delivery
  { text: "Choose delivery positions (upright, side-lying, etc.)", category: "delivery" },
  { text: "Discuss delayed cord clamping", category: "delivery" },
  { text: "Plan for immediate skin-to-skin contact", category: "delivery" },
  { text: "Decide on episiotomy preferences", category: "delivery" },
  { text: "Discuss vacuum or forceps preferences", category: "delivery" },
  { text: "Plan for cesarean section preferences (if needed)", category: "delivery" },
  { text: "Decide who cuts the umbilical cord", category: "delivery" },

  // Postpartum
  { text: "Plan for rooming in vs nursery", category: "postpartum" },
  { text: "Decide on breastfeeding or formula feeding", category: "postpartum" },
  { text: "Discuss vitamin K shot for baby", category: "postpartum" },
  { text: "Plan for newborn screening tests", category: "postpartum" },
  { text: "Decide on visitor policies after birth", category: "postpartum" },
  { text: "Plan for placenta disposal preferences", category: "postpartum" },
  { text: "Discuss postpartum pain management", category: "postpartum" },
  { text: "Plan for lactation consultant support", category: "postpartum" },

  // Partner
  { text: "Discuss partner's role during labor", category: "partner" },
  { text: "Plan for partner's self-care during long labor", category: "partner" },
  { text: "Decide on partner cutting the cord", category: "partner" },
  { text: "Plan for partner to do skin-to-skin if needed", category: "partner" },
  { text: "Discuss photography/videography preferences", category: "partner" },

  // Other
  { text: "Pack hospital bag", category: "other" },
  { text: "Install car seat", category: "other" },
  { text: "Prepare pets for new arrival", category: "other" },
  { text: "Plan maternity leave arrangements", category: "other" },
  { text: "Set up nursery essentials", category: "other" },
  { text: "Choose a pediatrician", category: "other" },
  { text: "Take a childbirth education class", category: "other" },
  { text: "Write birth plan preferences with provider", category: "other" },
];

export const BIRTH_PLAN_CATEGORIES: { key: BirthPlanSuggestion["category"]; label: string; icon: string }[] = [
  { key: "labor", label: "Labor Preferences", icon: "🕊️" },
  { key: "pain", label: "Pain Management", icon: "💆" },
  { key: "delivery", label: "Delivery", icon: "👶" },
  { key: "postpartum", label: "Postpartum", icon: "🤱" },
  { key: "partner", label: "Partner", icon: "💑" },
  { key: "other", label: "Other", icon: "📋" },
];
