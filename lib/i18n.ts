"use client";

export const locales = ["en", "de"] as const;
export const defaultLocale = "en";
export type Locale = (typeof locales)[number];

const messages: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.dashboard": "Dashboard",
    "nav.goToDashboard": "Go to Dashboard",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    // Header
    "header.appName": "Pregnancy-Trackers",

    // Footer
    "footer.calculators": "Calculators",
    "footer.resources": "Resources",
    "footer.weekByWeek": "Week by Week",
    "footer.firstTrimester": "First Trimester",
    "footer.pregnancySymptoms": "Pregnancy Symptoms",
    "footer.nutritionGuide": "Nutrition Guide",
    "footer.medicalDisclaimer": "Medical Disclaimer",
    "footer.allRightsReserved": "All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.impressum": "Impressum",

    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.retry": "Try again",
    "common.share": "Share",
    "common.export": "Export",
    "common.calculate": "Calculate",
    "common.save": "Save Changes",
    "common.back": "Back",
    "common.next": "Next",
    "common.cancel": "Cancel",
    "common.add": "Add",
    "common.reset": "Reset",
    "common.showLess": "Show less",
    "common.viewAll": "View all",
    "common.items": "items",
    "common.week": "Week",
    "common.days": "days",
    "common.weeks": "weeks",
    "common.length": "Length",
    "common.weight": "Weight",
    "common.size": "Size",
    "common.calculating": "Calculating...",

    // Disclaimer
    "disclaimer.title": "Medical Disclaimer",
    "disclaimer.text":
      "This website provides general information and is not a substitute for professional medical advice. Always consult your healthcare provider for medical decisions.",
    "disclaimer.informational": "Informational only",
    "disclaimer.notMedicalAdvice": "Not medical advice",
    "disclaimer.consultProvider": "Consult your healthcare provider",
    "disclaimer.dashboard":
      "This dashboard is for informational tracking only and is not a substitute for professional prenatal care. Always consult your healthcare provider for medical decisions.",
    "disclaimer.tracker":
      "This tracker is for informational purposes. Always follow your healthcare provider's guidance.",
    "disclaimer.calculator":
      "This calculator provides an estimate based on standard medical guidelines. Every pregnancy is unique. Always confirm your due date with your healthcare provider through ultrasound and clinical evaluation.",

    // Landing - Hero
    "hero.medicallyReviewed": "Medically reviewed content",
    "hero.title1": "Pregnancy-Trackers:",
    "hero.title2": "Your Journey, Tracked",
    "hero.title3": "With Care",
    "hero.subtitle":
      "Evidence-based tools, personalized tracking, and expert-reviewed resources for every stage of your pregnancy — from conception to birth.",
    "hero.getStarted": "Get Started",
    "hero.setUpPregnancy": "Set Up My Pregnancy",
    "hero.fdaCompliant": "FDA compliant",
    "hero.hipaaReady": "HIPAA ready",
    "hero.expertReviewed": "Expert reviewed",

    // Landing - Features
    "features.title": "Everything You Need",
    "features.subtitle":
      "A comprehensive suite of tools designed to support you through every trimester.",
    "features.trackProgress": "Track Progress",
    "features.trackProgressDesc":
      "Visual charts tracking your weight, symptoms, and baby's growth week by week.",
    "features.smartReminders": "Smart Reminders",
    "features.smartRemindersDesc":
      "Never miss an appointment or medication with intelligent notifications.",
    "features.appointments": "Appointments",
    "features.appointmentsDesc":
      "Manage your prenatal appointments and get preparation checklists.",
    "features.dailyInsights": "Daily Insights",
    "features.dailyInsightsDesc":
      "Expert-reviewed articles about your current pregnancy stage.",
    "features.contractionTimer": "Contraction Timer",
    "features.contractionTimerDesc":
      "Time your contractions and know when it's time to head to the hospital.",
    "features.worksOffline": "Works Offline",
    "features.worksOfflineDesc":
      "All calculators work offline. Your data stays on your device.",

    // Landing - Trust
    "trust.title": "Built With Trust",
    "trust.subtitle":
      "Your health information deserves the highest standards of privacy and accuracy.",
    "trust.medicallyReviewed": "Medically Reviewed",
    "trust.medicallyReviewedDesc":
      "All content reviewed by board-certified OB-GYNs.",
    "trust.dataStaysPrivate": "Your Data Stays Private",
    "trust.dataStaysPrivateDesc":
      "All calculations happen locally. Nothing leaves your device.",
    "trust.monthlyUsers": "1M+ Monthly Users",
    "trust.monthlyUsersDesc": "Trusted by millions of parents-to-be worldwide.",
    "trust.evidenceBased": "Evidence-Based",
    "trust.evidenceBasedDesc":
      "All tools are built on peer-reviewed medical research.",
    "trust.hipaaCompliant": "HIPAA Compliant",
    "trust.hipaaCompliantDesc":
      "Enterprise-grade security and privacy protections.",
    "trust.transparentMethods": "Transparent Methods",
    "trust.transparentMethodsDesc":
      "All calculation formulas are documented and verifiable.",
    "trust.monthlyActiveUsers": "Monthly Active Users",
    "trust.uptime": "Uptime",
    "trust.userRating": "User Rating",

    // Landing - FAQ
    "faq.title": "Common Questions",
    "faq.subtitle":
      "Evidence-based answers to frequently asked questions about pregnancy.",
    "faq.q1": "How accurate is the due date calculator?",
    "faq.a1":
      "The due date calculator uses the standard 280-day Naegele's rule based on your last menstrual period. While generally accurate, only about 5% of babies arrive exactly on their due date. Most are born between 38-42 weeks. Always confirm with your healthcare provider.",
    "faq.q2": "Is my data private and secure?",
    "faq.a2":
      "Yes. All calculations are performed locally in your browser. We never store or transmit your personal health information. No account is required to use any of our calculators. Our platform is designed with privacy-first architecture.",
    "faq.q3": "When should I take a pregnancy test?",
    "faq.a3":
      "For the most accurate result, wait until the first day of your missed period. Some sensitive tests may detect pregnancy earlier, but waiting reduces the chance of a false negative. Tests work by detecting hCG in your urine.",
    "faq.q4": "What weeks are each trimester?",
    "faq.a4":
      "Pregnancy is divided into three trimesters: First trimester (weeks 1-13), Second trimester (weeks 14-27), and Third trimester (weeks 28-40). Each trimester brings different developmental milestones and physical changes.",
    "faq.q5": "How much weight should I gain during pregnancy?",
    "faq.a5":
      "Recommended weight gain depends on your pre-pregnancy BMI. Underweight: 28-40 lbs, Normal weight: 25-35 lbs, Overweight: 15-25 lbs, Obese: 11-20 lbs. Your healthcare provider can give personalized guidance based on your health profile.",
    "faq.q6": "When will I feel the baby move?",
    "faq.a6":
      "Most first-time parents feel movement (quickening) between 18-22 weeks. If you've been pregnant before, you may feel it earlier, around 16-18 weeks. Every pregnancy is different, and the timing varies.",
    "faq.disclaimer":
      "The information provided is for educational purposes only and is not a substitute for professional medical advice.",

    // Landing - CTA
    "cta.title": "Start Your Journey",
    "cta.subtitle":
      "Join millions of parents who trust us for evidence-based pregnancy tracking. No account needed. No data shared.",
    "cta.button": "Start Your Journey",
    "cta.quickCalculators": "Quick Calculators",

    // Onboarding
    "onboarding.step1Title": "When is your baby due?",
    "onboarding.step1Desc": "We'll calculate your pregnancy progress automatically.",
    "onboarding.step2Title": "Tell us about yourself",
    "onboarding.step2Desc": "This helps us personalize your experience.",
    "onboarding.step3Title": "Your preferences",
    "onboarding.step3Desc": "So we can give you the most relevant information.",
    "onboarding.lmpLabel": "First day of your last period",
    "onboarding.lmpDesc": "This is how we calculate your due date and current week.",
    "onboarding.firstPregnancy": "Is this your first pregnancy?",
    "onboarding.yesFirstBaby": "Yes, first baby",
    "onboarding.doneThisBefore": "I've done this before",
    "onboarding.symptoms": "Any symptoms? (tap all that apply)",
    "onboarding.dietaryPreferences": "Dietary preferences",
    "onboarding.vitamins": "Vitamins & supplements you take",
    "onboarding.startJourney": "Start Your Journey",

    // Dashboard
    "dashboard.title": "Your Pregnancy",
    "dashboard.subtitle": "Here's everything at a glance",
    "dashboard.enterLmp": "Enter the first day of your last period to see your pregnancy status.",
    "dashboard.youreIn": "You're in",
    "dashboard.dueDate": "Due Date",
    "dashboard.daysToGo": "Days to go",
    "dashboard.sizeOfA": "Size of a",
    "dashboard.embryonicStage": "Embryonic Stage",
    "dashboard.fetalDevelopment": "Fetal Development",
    "dashboard.nearlyReady": "Nearly Ready!",
    "dashboard.yourBabyThisWeek": "Your Baby This Week",
    "dashboard.nutritionToday": "Nutrition Today",
    "dashboard.recommended": "Recommended",
    "dashboard.foodsToAvoid": "Foods to Avoid",
    "dashboard.importantNutrients": "Important Nutrients",
    "dashboard.waterIntakeToday": "Water Intake Today",
    "dashboard.tapToLogGlass": "Tap to log a glass · 8-10 glasses recommended daily",
    "dashboard.howAreYouFeeling": "How are you feeling?",
    "dashboard.yourMood": "Your Mood",
    "dashboard.symptoms": "Symptoms",
    "dashboard.addSymptom": "Add symptom",
    "dashboard.commonThisWeek": "Common this week",
    "dashboard.tapAddSymptom": 'Tap "Add symptom" to log how you\'re feeling',
    "dashboard.birthPlan": "Birth Plan",
    "dashboard.addItem": "Add item",
    "dashboard.addYourOwnItem": "Add your own item...",
    "dashboard.yourWeekInsights": "Your Week {week} Insights",
    "dashboard.babyDevelopment": "Baby's Development",
    "dashboard.whatYouMayFeel": "What You May Feel",
    "dashboard.tip": "Tip",
    "dashboard.great": "Great",
    "dashboard.good": "Good",
    "dashboard.okay": "Okay",
    "dashboard.rough": "Rough",

    // Tracker
    "tracker.title": "Pregnancy Tracker",
    "tracker.subtitle": "Track your baby's growth and your wellness journey",
    "tracker.babySize": "Baby Size",
    "tracker.upcomingAppointments": "Upcoming Appointments",
    "tracker.noAppointments":
      "No appointments scheduled. Add your prenatal visits to receive timely reminders.",
    "tracker.wellnessTips": "Wellness Tips for Week {week}",
    "tracker.nutrition": "Nutrition",
    "tracker.nutritionDesc":
      "Focus on iron-rich foods and stay hydrated.",
    "tracker.rest": "Rest",
    "tracker.restDesc":
      "Prioritize 7-9 hours of sleep. Use pillows for support.",
    "tracker.exercise": "Exercise",
    "tracker.exerciseDesc":
      "Gentle walking and prenatal yoga are excellent choices.",
    "tracker.hydration": "Hydration",
    "tracker.hydrationDesc":
      "Drink 8-10 glasses of water daily to support amniotic fluid.",

    // Calculator - Due Date
    "calculator.dueDate.title": "Due Date Calculator",
    "calculator.dueDate.desc": "Enter the first day of your last menstrual period",
    "calculator.dueDate.lmpLabel": "First day of last menstrual period",
    "calculator.dueDate.lmpDesc": "Enter the date your last period started",
    "calculator.dueDate.button": "Calculate Due Date",
    "calculator.dueDate.estimatedDueDate": "Estimated Due Date",
    "calculator.dueDate.conceptionDate": "Conception Date",
    "calculator.dueDate.currentWeek": "Current Week",
    "calculator.dueDate.trimester": "Trimester",
    "calculator.dueDate.weeksRemaining": "Weeks Remaining",
    "calculator.dueDate.daysUntilDue": "Days Until Due",

    // Calculator - Weight Gain
    "calculator.weightGain.title": "Pregnancy Weight Gain Calculator",

    // Settings
    "settings.title": "Settings",
    "settings.subtitle": "Manage your preferences and profile",
    "settings.profile": "Profile",
    "settings.theme": "Theme",
    "settings.notifications": "Notifications",
    "settings.profileInfo": "Profile Information",
    "settings.name": "Name",
    "settings.namePlaceholder": "Your name",
    "settings.dueDate": "Due Date",
    "settings.cycleLength": "Cycle Length (days)",
    "settings.periodLength": "Period Length (days)",
    "settings.themePreferences": "Theme Preferences",
    "settings.light": "Light",
    "settings.dark": "Dark",
    "settings.system": "System",
    "settings.notificationPrefs": "Notification Preferences",
    "settings.appointmentReminders": "Appointment Reminders",
    "settings.appointmentRemindersDesc":
      "Get notified about upcoming prenatal appointments",
    "settings.medicationReminders": "Medication Reminders",
    "settings.medicationRemindersDesc":
      "Daily reminders for prenatal vitamins",
    "settings.weeklyInsights": "Weekly Insights",
    "settings.weeklyInsightsDesc":
      "Weekly updates about your baby's development",
    "settings.dataPrivacy": "Data Privacy",
    "settings.dataPrivacyDesc":
      "Your settings are stored locally on your device. We do not collect or store your personal health information.",

    // Language Toggle
    "language.switchToEnglish": "English",
    "language.switchToGerman": "Deutsch",

    // Mobile Bottom Nav
    "bottomNav.dashboard": "Dashboard",
    "bottomNav.home": "Home",

    // Theme Toggle
    "theme.toggle": "Toggle theme",
  },
  de: {
    // Nav
    "nav.home": "Startseite",
    "nav.dashboard": "Dashboard",
    "nav.goToDashboard": "Zum Dashboard",
    "nav.openMenu": "Menü öffnen",
    "nav.closeMenu": "Menü schließen",

    // Header
    "header.appName": "Schwangerschafts-Tracker",

    // Footer
    "footer.calculators": "Rechner",
    "footer.resources": "Ressourcen",
    "footer.weekByWeek": "Woche für Woche",
    "footer.firstTrimester": "Erstes Trimester",
    "footer.pregnancySymptoms": "Schwangerschaftssymptome",
    "footer.nutritionGuide": "Ernährungsratgeber",
    "footer.medicalDisclaimer": "Medizinischer Haftungsausschluss",
    "footer.allRightsReserved": "Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutz",
    "footer.impressum": "Impressum",

    // Common
    "common.loading": "Wird geladen...",
    "common.error": "Etwas ist schiefgelaufen",
    "common.retry": "Erneut versuchen",
    "common.share": "Teilen",
    "common.export": "Exportieren",
    "common.calculate": "Berechnen",
    "common.save": "Änderungen speichern",
    "common.back": "Zurück",
    "common.next": "Weiter",
    "common.cancel": "Abbrechen",
    "common.add": "Hinzufügen",
    "common.reset": "Zurücksetzen",
    "common.showLess": "Weniger anzeigen",
    "common.viewAll": "Alle anzeigen",
    "common.items": "Elemente",
    "common.week": "Woche",
    "common.days": "Tage",
    "common.weeks": "Wochen",
    "common.length": "Länge",
    "common.weight": "Gewicht",
    "common.size": "Größe",
    "common.calculating": "Berechne...",

    // Disclaimer
    "disclaimer.title": "Medizinischer Haftungsausschluss",
    "disclaimer.text":
      "Diese Website bietet allgemeine Informationen und ersetzt keine professionelle medizinische Beratung. Konsultieren Sie bei medizinischen Entscheidungen immer Ihren Arzt.",
    "disclaimer.informational": "Nur zu Informationszwecken",
    "disclaimer.notMedicalAdvice": "Keine medizinische Beratung",
    "disclaimer.consultProvider": "Konsultieren Sie Ihren Arzt",
    "disclaimer.dashboard":
      "Dieses Dashboard dient nur der informativen Nachverfolgung und ersetzt keine professionelle Schwangerschaftsvorsorge. Konsultieren Sie bei medizinischen Entscheidungen immer Ihren Arzt.",
    "disclaimer.tracker":
      "Dieser Tracker dient Informationszwecken. Befolgen Sie stets die Anweisungen Ihres Arztes.",
    "disclaimer.calculator":
      "Dieser Rechner liefert eine Schätzung auf Basis medizinischer Standardrichtlinien. Jede Schwangerschaft ist einzigartig. Bestätigen Sie Ihren Geburtstermin immer durch Ultraschall und klinische Untersuchung bei Ihrem Arzt.",

    // Landing - Hero
    "hero.medicallyReviewed": "Medizinisch geprüfte Inhalte",
    "hero.title1": "Pregnancy-Trackers:",
    "hero.title2": "Ihre Reise,",
    "hero.title3": "Sorgfältig verfolgt",
    "hero.subtitle":
      "Evidenzbasierte Tools, persönliche Nachverfolgung und fachgeprüfte Ressourcen für jede Phase Ihrer Schwangerschaft – von der Empfängnis bis zur Geburt.",
    "hero.getStarted": "Loslegen",
    "hero.setUpPregnancy": "Meine Schwangerschaft einrichten",
    "hero.fdaCompliant": "FDA-konform",
    "hero.hipaaReady": "HIPAA-bereit",
    "hero.expertReviewed": "Von Experten geprüft",

    // Landing - Features
    "features.title": "Alles, was Sie brauchen",
    "features.subtitle":
      "Eine umfassende Sammlung von Tools, die Sie in jedem Trimester unterstützen.",
    "features.trackProgress": "Fortschritt verfolgen",
    "features.trackProgressDesc":
      "Visuelle Diagramme zur Verfolgung Ihres Gewichts, Ihrer Symptome und des Wachstums Ihres Babys Woche für Woche.",
    "features.smartReminders": "Intelligente Erinnerungen",
    "features.smartRemindersDesc":
      "Verpassen Sie nie wieder einen Termin oder eine Medikation mit intelligenten Benachrichtigungen.",
    "features.appointments": "Termine",
    "features.appointmentsDesc":
      "Verwalten Sie Ihre Vorsorgetermine und erhalten Sie Vorbereitungslisten.",
    "features.dailyInsights": "Tägliche Einblicke",
    "features.dailyInsightsDesc":
      "Fachgeprüfte Artikel über Ihre aktuelle Schwangerschaftsphase.",
    "features.contractionTimer": "Wehen-Timer",
    "features.contractionTimerDesc":
      "Messen Sie Ihre Wehen und erkennen Sie, wann es Zeit für das Krankenhaus ist.",
    "features.worksOffline": "Offline nutzbar",
    "features.worksOfflineDesc":
      "Alle Rechner funktionieren offline. Ihre Daten bleiben auf Ihrem Gerät.",

    // Landing - Trust
    "trust.title": "Mit Vertrauen gebaut",
    "trust.subtitle":
      "Ihre Gesundheitsdaten verdienen höchste Privatsphäre- und Genauigkeitsstandards.",
    "trust.medicallyReviewed": "Medizinisch geprüft",
    "trust.medicallyReviewedDesc":
      "Alle Inhalte von Fachärzten für Gynäkologie geprüft.",
    "trust.dataStaysPrivate": "Ihre Daten bleiben privat",
    "trust.dataStaysPrivateDesc":
      "Alle Berechnungen erfolgen lokal. Nichts verlässt Ihr Gerät.",
    "trust.monthlyUsers": "1 Mio. monatliche Nutzer",
    "trust.monthlyUsersDesc": "Von Millionen werdender Eltern weltweit genutzt.",
    "trust.evidenceBased": "Evidenzbasiert",
    "trust.evidenceBasedDesc":
      "Alle Tools basieren auf peer-reviewter medizinischer Forschung.",
    "trust.hipaaCompliant": "HIPAA-konform",
    "trust.hipaaCompliantDesc":
      "Sicherheit und Datenschutz auf Unternehmensniveau.",
    "trust.transparentMethods": "Transparente Methoden",
    "trust.transparentMethodsDesc":
      "Alle Berechnungsformeln sind dokumentiert und überprüfbar.",
    "trust.monthlyActiveUsers": "Monatlich aktive Nutzer",
    "trust.uptime": "Verfügbarkeit",
    "trust.userRating": "Nutzerbewertung",

    // Landing - FAQ
    "faq.title": "Häufige Fragen",
    "faq.subtitle":
      "Evidenzbasierte Antworten auf häufig gestellte Fragen zur Schwangerschaft.",
    "faq.q1": "Wie genau ist der Geburtsterminrechner?",
    "faq.a1":
      "Der Geburtsterminrechner verwendet die standardmäßige 280-Tage-Naegele-Regel basierend auf Ihrer letzten Menstruation. Obwohl allgemein genau, kommen nur etwa 5 % der Babys genau am errechneten Termin zur Welt. Die meisten werden zwischen der 38. und 42. Woche geboren. Bestätigen Sie den Termin immer mit Ihrem Arzt.",
    "faq.q2": "Sind meine Daten privat und sicher?",
    "faq.a2":
      "Ja. Alle Berechnungen werden lokal in Ihrem Browser durchgeführt. Wir speichern oder übertragen niemals Ihre persönlichen Gesundheitsdaten. Für die Nutzung unserer Rechner ist kein Konto erforderlich. Unsere Plattform ist nach dem Prinzip Privacy First entwickelt.",
    "faq.q3": "Wann sollte ich einen Schwangerschaftstest machen?",
    "faq.a3":
      "Warten Sie für ein möglichst genaues Ergebnis bis zum ersten Tag Ihrer ausgebliebenen Periode. Einige empfindliche Tests können eine Schwangerschaft früher erkennen, aber Abwarten verringert das Risiko eines falsch negativen Ergebnisses. Tests funktionieren durch den Nachweis von hCG im Urin.",
    "faq.q4": "Welche Wochen umfassen die einzelnen Trimester?",
    "faq.a4":
      "Die Schwangerschaft wird in drei Trimester unterteilt: Erstes Trimester (Woche 1–13), Zweites Trimester (Woche 14–27) und Drittes Trimester (Woche 28–40). Jedes Trimester bringt unterschiedliche Entwicklungsschritte und körperliche Veränderungen mit sich.",
    "faq.q5": "Wie viel Gewicht sollte ich während der Schwangerschaft zunehmen?",
    "faq.a5":
      "Die empfohlene Gewichtszunahme hängt von Ihrem BMI vor der Schwangerschaft ab. Untergewicht: 12,5–18 kg, Normalgewicht: 11,5–16 kg, Übergewicht: 7–11,5 kg, Adipositas: 5–9 kg. Ihr Arzt kann Ihnen basierend auf Ihrem Gesundheitsprofil eine persönliche Beratung geben.",
    "faq.q6": "Wann werde ich das Baby bewegen spüren?",
    "faq.a6":
      "Die meisten Erstgebärenden spüren Bewegungen (Quickening) zwischen der 18. und 22. Woche. Wenn Sie bereits schwanger waren, können Sie sie früher spüren, etwa in der 16. bis 18. Woche. Jede Schwangerschaft ist anders, und der Zeitpunkt variiert.",
    "faq.disclaimer":
      "Die bereitgestellten Informationen dienen ausschließlich Bildungszwecken und ersetzen keine professionelle medizinische Beratung.",

    // Landing - CTA
    "cta.title": "Starten Sie Ihre Reise",
    "cta.subtitle":
      "Schließen Sie sich Millionen von Eltern an, die uns für evidenzbasiertes Schwangerschafts-Tracking vertrauen. Kein Konto erforderlich. Keine Datenweitergabe.",
    "cta.button": "Reise beginnen",
    "cta.quickCalculators": "Schnellrechner",

    // Onboarding
    "onboarding.step1Title": "Wann ist Ihr Baby fällig?",
    "onboarding.step1Desc": "Wir berechnen Ihren Schwangerschaftsfortschritt automatisch.",
    "onboarding.step2Title": "Erzählen Sie uns von sich",
    "onboarding.step2Desc": "Das hilft uns, Ihre Erfahrung zu personalisieren.",
    "onboarding.step3Title": "Ihre Einstellungen",
    "onboarding.step3Desc": "Damit wir Ihnen die relevantesten Informationen geben können.",
    "onboarding.lmpLabel": "Erster Tag Ihrer letzten Periode",
    "onboarding.lmpDesc": "So berechnen wir Ihren Geburtstermin und die aktuelle Woche.",
    "onboarding.firstPregnancy": "Ist dies Ihre erste Schwangerschaft?",
    "onboarding.yesFirstBaby": "Ja, erstes Baby",
    "onboarding.doneThisBefore": "Ich habe das schon einmal gemacht",
    "onboarding.symptoms": "Irgendwelche Symptome? (tippen Sie auf alle zutreffenden)",
    "onboarding.dietaryPreferences": "Ernährungspräferenzen",
    "onboarding.vitamins": "Vitamine & Nahrungsergänzungsmittel",
    "onboarding.startJourney": "Reise beginnen",

    // Dashboard
    "dashboard.title": "Ihre Schwangerschaft",
    "dashboard.subtitle": "Hier sehen Sie alles auf einen Blick",
    "dashboard.enterLmp": "Geben Sie den ersten Tag Ihrer letzten Periode ein, um Ihren Schwangerschaftsstatus zu sehen.",
    "dashboard.youreIn": "Sie sind in der",
    "dashboard.dueDate": "Geburtstermin",
    "dashboard.daysToGo": "Verbleibende Tage",
    "dashboard.sizeOfA": "So groß wie ein/e",
    "dashboard.embryonicStage": "Embryonalstadium",
    "dashboard.fetalDevelopment": "Fetale Entwicklung",
    "dashboard.nearlyReady": "Fast bereit!",
    "dashboard.yourBabyThisWeek": "Ihr Baby diese Woche",
    "dashboard.nutritionToday": "Ernährung heute",
    "dashboard.recommended": "Empfohlen",
    "dashboard.foodsToAvoid": "Zu vermeidende Lebensmittel",
    "dashboard.importantNutrients": "Wichtige Nährstoffe",
    "dashboard.waterIntakeToday": "Wasseraufnahme heute",
    "dashboard.tapToLogGlass": "Tippen, um ein Glas zu protokollieren · 8–10 Gläser täglich empfohlen",
    "dashboard.howAreYouFeeling": "Wie fühlen Sie sich?",
    "dashboard.yourMood": "Ihre Stimmung",
    "dashboard.symptoms": "Symptome",
    "dashboard.addSymptom": "Symptom hinzufügen",
    "dashboard.commonThisWeek": "Diese Woche häufig",
    "dashboard.tapAddSymptom": 'Tippen Sie auf "Symptom hinzufügen", um Ihr Befinden zu protokollieren',
    "dashboard.birthPlan": "Geburtsplan",
    "dashboard.addItem": "Element hinzufügen",
    "dashboard.addYourOwnItem": "Eigenes Element hinzufügen...",
    "dashboard.yourWeekInsights": "Ihre Einblicke für Woche {week}",
    "dashboard.babyDevelopment": "Babys Entwicklung",
    "dashboard.whatYouMayFeel": "Was Sie fühlen könnten",
    "dashboard.tip": "Tipp",
    "dashboard.great": "Großartig",
    "dashboard.good": "Gut",
    "dashboard.okay": "Okay",
    "dashboard.rough": "Schwer",

    // Tracker
    "tracker.title": "Schwangerschafts-Tracker",
    "tracker.subtitle": "Verfolgen Sie das Wachstum Ihres Babys und Ihr Wohlbefinden",
    "tracker.babySize": "Babys Größe",
    "tracker.upcomingAppointments": "Anstehende Termine",
    "tracker.noAppointments":
      "Keine Termine geplant. Fügen Sie Ihre Vorsorgetermine hinzu, um rechtzeitig Erinnerungen zu erhalten.",
    "tracker.wellnessTips": "Wellness-Tipps für Woche {week}",
    "tracker.nutrition": "Ernährung",
    "tracker.nutritionDesc":
      "Konzentrieren Sie sich auf eisenreiche Lebensmittel und trinken Sie ausreichend.",
    "tracker.rest": "Ruhe",
    "tracker.restDesc":
      "Priorisieren Sie 7–9 Stunden Schlaf. Verwenden Sie Kissen zur Unterstützung.",
    "tracker.exercise": "Bewegung",
    "tracker.exerciseDesc":
      "Leichte Spaziergänge und Schwangerschaftsyoga sind ausgezeichnete Optionen.",
    "tracker.hydration": "Flüssigkeitszufuhr",
    "tracker.hydrationDesc":
      "Trinken Sie täglich 8–10 Gläser Wasser zur Unterstützung des Fruchtwassers.",

    // Calculator - Due Date
    "calculator.dueDate.title": "Geburtsterminrechner",
    "calculator.dueDate.desc": "Geben Sie den ersten Tag Ihrer letzten Menstruation ein",
    "calculator.dueDate.lmpLabel": "Erster Tag der letzten Menstruation",
    "calculator.dueDate.lmpDesc": "Geben Sie das Datum des Beginns Ihrer letzten Periode ein",
    "calculator.dueDate.button": "Geburtstermin berechnen",
    "calculator.dueDate.estimatedDueDate": "Voraussichtlicher Geburtstermin",
    "calculator.dueDate.conceptionDate": "Empfängnisdatum",
    "calculator.dueDate.currentWeek": "Aktuelle Woche",
    "calculator.dueDate.trimester": "Trimester",
    "calculator.dueDate.weeksRemaining": "Verbleibende Wochen",
    "calculator.dueDate.daysUntilDue": "Tage bis zum Termin",

    // Calculator - Weight Gain
    "calculator.weightGain.title": "Gewichtszunahme-Rechner",

    // Settings
    "settings.title": "Einstellungen",
    "settings.subtitle": "Verwalten Sie Ihre Einstellungen und Ihr Profil",
    "settings.profile": "Profil",
    "settings.theme": "Design",
    "settings.notifications": "Benachrichtigungen",
    "settings.profileInfo": "Profilinformationen",
    "settings.name": "Name",
    "settings.namePlaceholder": "Ihr Name",
    "settings.dueDate": "Geburtstermin",
    "settings.cycleLength": "Zykluslänge (Tage)",
    "settings.periodLength": "Periodenlänge (Tage)",
    "settings.themePreferences": "Design-Einstellungen",
    "settings.light": "Hell",
    "settings.dark": "Dunkel",
    "settings.system": "System",
    "settings.notificationPrefs": "Benachrichtigungseinstellungen",
    "settings.appointmentReminders": "Terminerinnerungen",
    "settings.appointmentRemindersDesc":
      "Benachrichtigungen über anstehende Vorsorgetermine erhalten",
    "settings.medicationReminders": "Medikamentenerinnerungen",
    "settings.medicationRemindersDesc":
      "Tägliche Erinnerungen an Schwangerschaftsvitamine",
    "settings.weeklyInsights": "Wöchentliche Einblicke",
    "settings.weeklyInsightsDesc":
      "Wöchentliche Updates zur Entwicklung Ihres Babys",
    "settings.dataPrivacy": "Datenschutz",
    "settings.dataPrivacyDesc":
      "Ihre Einstellungen werden lokal auf Ihrem Gerät gespeichert. Wir erfassen oder speichern keine persönlichen Gesundheitsdaten.",

    // Language Toggle
    "language.switchToArabic": "العربية",
    "language.switchToEnglish": "English",
    "language.switchToGerman": "Deutsch",

    // Mobile Bottom Nav
    "bottomNav.dashboard": "Dashboard",
    "bottomNav.home": "Start",

    // Theme Toggle
    "theme.toggle": "Design umschalten",
  },
};

export function t(key: string, locale: Locale = defaultLocale): string {
  return messages[locale]?.[key] ?? messages[defaultLocale]?.[key] ?? key;
}

export function getLocaleFromPath(path: string): Locale {
  const match = path.match(/^\/([a-z]{2})\//);
  if (match && locales.includes(match[1] as Locale)) return match[1] as Locale;
  return defaultLocale;
}
