"use client";

export const locales = ["en", "ar"] as const;
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
    "hero.title1": "Your Pregnancy",
    "hero.title2": "Journey, Tracked",
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
    "language.switchToArabic": "العربية",
    "language.switchToEnglish": "English",

    // Mobile Bottom Nav
    "bottomNav.dashboard": "Dashboard",
    "bottomNav.home": "Home",

    // Theme Toggle
    "theme.toggle": "Toggle theme",
  },
  ar: {
    // Nav
    "nav.home": "الرئيسية",
    "nav.dashboard": "لوحة التحكم",
    "nav.goToDashboard": "انتقل إلى لوحة التحكم",
    "nav.openMenu": "فتح القائمة",
    "nav.closeMenu": "إغلاق القائمة",

    // Header
    "header.appName": "متتبع الحمل",

    // Footer
    "footer.calculators": "الحاسبات",
    "footer.resources": "المصادر",
    "footer.weekByWeek": "أسبوع بأسبوع",
    "footer.firstTrimester": "الثلث الأول",
    "footer.pregnancySymptoms": "أعراض الحمل",
    "footer.nutritionGuide": "دليل التغذية",
    "footer.medicalDisclaimer": "إخلاء مسؤولية طبية",
    "footer.allRightsReserved": "جميع الحقوق محفوظة.",
    "footer.privacy": "الخصوصية",
    "footer.impressum": "بيانات النشر",

    // Common
    "common.loading": "جاري التحميل...",
    "common.error": "حدث خطأ ما",
    "common.retry": "حاول مرة أخرى",
    "common.share": "مشاركة",
    "common.export": "تصدير",
    "common.calculate": "حساب",
    "common.save": "حفظ التغييرات",
    "common.back": "رجوع",
    "common.next": "التالي",
    "common.cancel": "إلغاء",
    "common.add": "إضافة",
    "common.reset": "إعادة تعيين",
    "common.showLess": "عرض أقل",
    "common.viewAll": "عرض الكل",
    "common.items": "عناصر",
    "common.week": "الأسبوع",
    "common.days": "أيام",
    "common.weeks": "أسابيع",
    "common.length": "الطول",
    "common.weight": "الوزن",
    "common.size": "الحجم",
    "common.calculating": "جاري الحساب...",

    // Disclaimer
    "disclaimer.title": "إخلاء مسؤولية طبية",
    "disclaimer.text":
      "يقدم هذا الموقع معلومات عامة ولا يعد بديلاً عن الاستشارة الطبية المهنية. استشر مقدم الرعاية الصحية دائمًا بشأن القرارات الطبية.",
    "disclaimer.informational": "لأغراض إعلامية فقط",
    "disclaimer.notMedicalAdvice": "ليس نصيحة طبية",
    "disclaimer.consultProvider": "استشر مقدم الرعاية الصحية",
    "disclaimer.dashboard":
      "لوحة التحكم هذه لأغراض التتبع المعلوماتي فقط وليست بديلاً عن الرعاية السابقة للولادة. استشر مقدم الرعاية الصحية دائمًا بشأن القرارات الطبية.",
    "disclaimer.tracker":
      "هذا المتتبع لأغراض إعلامية. اتبع دائمًا توجيهات مقدم الرعاية الصحية الخاص بك.",
    "disclaimer.calculator":
      "توفر هذه الحاسبة تقديرًا بناءً على الإرشادات الطبية القياسية. كل حمل فريد من نوعه. تأكد دائمًا من تاريخ ولادتك مع مقدم الرعاية الصحية من خلال الموجات فوق الصوتية والتقييم السريري.",

    // Landing - Hero
    "hero.medicallyReviewed": "محتوى مراجع طبياً ",
    "hero.title1": "حملك",
    "hero.title2": "رحلتك، متتبعة",
    "hero.title3": "بعناية",
    "hero.subtitle":
      "أدوات قائمة على الأدلة، تتبع شخصي، وموارد مراجعة من الخبراء لكل مرحلة من مراحل حملك - من الحمل إلى الولادة.",
    "hero.getStarted": "ابدأ الآن",
    "hero.setUpPregnancy": "إعداد حملي",
    "hero.fdaCompliant": "متوافق مع FDA",
    "hero.hipaaReady": "متوافق مع HIPAA",
    "hero.expertReviewed": "مراجع من الخبراء",

    // Landing - Features
    "features.title": "كل ما تحتاجينه",
    "features.subtitle": "مجموعة شاملة من الأدوات المصممة لدعمك خلال كل ثلاثة أشهر.",
    "features.trackProgress": "تتبع التقدم",
    "features.trackProgressDesc": "رسوم بيانية بصرية لتتبع وزنك وأعراضك ونمو طفلك أسبوعًا بأسبوع.",
    "features.smartReminders": "تذكيرات ذكية",
    "features.smartRemindersDesc": "لا تفوتي أي موعد أو دواء مع إشعارات ذكية.",
    "features.appointments": "المواعيد",
    "features.appointmentsDesc": "إدارة مواعيد ما قبل الولادة والحصول على قوائم التحضير.",
    "features.dailyInsights": "نصائح يومية",
    "features.dailyInsightsDesc": "مقالات مراجعة من الخبراء حول مرحلة حملك الحالية.",
    "features.contractionTimer": "مؤقت الانقباضات",
    "features.contractionTimerDesc": "توقيت انقباضاتك ومعرفة متى يحين وقت الذهاب إلى المستشفى.",
    "features.worksOffline": "يعمل بدون إنترنت",
    "features.worksOfflineDesc": "جميع الحاسبات تعمل بدون إنترنت. تبقى بياناتك على جهازك.",

    // Landing - Trust
    "trust.title": "بني بثقة",
    "trust.subtitle": "معلوماتك الصحية تستحق أعلى معايير الخصوصية والدقة.",
    "trust.medicallyReviewed": "مراجع طبياً",
    "trust.medicallyReviewedDesc": "جميع المحتويات مراجعة من أطباء نساء وتوليد معتمدين.",
    "trust.dataStaysPrivate": "بياناتك تبقى خاصة",
    "trust.dataStaysPrivateDesc": "جميع الحسابات تتم محلياً. لا شيء يغادر جهازك.",
    "trust.monthlyUsers": "أكثر من مليون مستخدم شهرياً",
    "trust.monthlyUsersDesc": "موثوق من ملايين الآباء والأمهات حول العالم.",
    "trust.evidenceBased": "قائم على الأدلة",
    "trust.evidenceBasedDesc": "جميع الأدوات مبنية على أبحاث طبية مراجعة من الأقران.",
    "trust.hipaaCompliant": "متوافق مع HIPAA",
    "trust.hipaaCompliantDesc": "حماية وأمان على مستوى المؤسسات.",
    "trust.transparentMethods": "طرق شفافة",
    "trust.transparentMethodsDesc": "جميع صيغ الحساب موثقة وقابلة للتحقق.",
    "trust.monthlyActiveUsers": "مستخدم نشط شهرياً",
    "trust.uptime": "وقت التشغيل",
    "trust.userRating": "تقييم المستخدمين",

    // Landing - FAQ
    "faq.title": "أسئلة شائعة",
    "faq.subtitle": "إجابات قائمة على الأدلة للأسئلة المتكررة عن الحمل.",
    "faq.q1": "ما مدى دقة حاسبة تاريخ الولادة؟",
    "faq.a1":
      "تستخدم حاسبة تاريخ الولادة قاعدة Naegele القياسية البالغة 280 يومًا بناءً على آخر دورة شهرية لك. على الرغم من دقتها بشكل عام، إلا أن 5٪ فقط من الأطفال يصلون في تاريخ ولادتهم بالضبط. يولد معظمهم بين 38-42 أسبوعًا. تأكدي دائمًا مع مقدم الرعاية الصحية الخاص بك.",
    "faq.q2": "هل بياناتي خاصة وآمنة؟",
    "faq.a2":
      "نعم. جميع الحسابات تتم محليًا في متصفحك. نحن لا نخزن أو ننقل معلوماتك الصحية الشخصية أبدًا. لا يتطلب استخدام أي من حاسباتنا إنشاء حساب. منصتنا مصممة بهندسة خصوصية أولاً.",
    "faq.q3": "متى يجب أن أجري اختبار الحمل؟",
    "faq.a3":
      "للحصول على النتيجة الأكثر دقة، انتظري حتى اليوم الأول من الدورة الشهرية الفائتة. قد تكتشف بعض الاختبارات الحساسة الحمل مبكرًا، لكن الانتظار يقلل من احتمالية النتيجة السلبية الخاطئة. تعمل الاختبارات عن طريق كشف هرمون hCG في البول.",
    "faq.q4": "ما أسابيع كل ثلاثة أشهر؟",
    "faq.a4":
      "ينقسم الحمل إلى ثلاثة أشهر: الثلث الأول (الأسابيع 1-13)، الثلث الثاني (الأسابيع 14-27)، والثلث الثالث (الأسابيع 28-40). يجلب كل ثلث مراحل تطورية وتغيرات جسدية مختلفة.",
    "faq.q5": "كم الوزن الذي يجب أن أكتسبه خلال الحمل؟",
    "faq.a5":
      "يعتمد زيادة الوزن الموصى بها على مؤشر كتلة الجسم قبل الحمل. نقص الوزن: 28-40 رطلاً، الوزن الطبيعي: 25-35 رطلاً، زيادة الوزن: 15-25 رطلاً، السمنة: 11-20 رطلاً. يمكن لمقدم الرعاية الصحية تقديم إرشادات مخصصة بناءً على ملفك الصحي.",
    "faq.q6": "متى سأشعر بحركة الطفل؟",
    "faq.a6":
      "يشعر معظم الآباء لأول مرة بالحركة بين الأسبوعين 18-22. إذا كنت قد حملت من قبل، فقد تشعرين بها مبكرًا، حوالي 16-18 أسبوعًا. كل حمل مختلف، ويختلف التوقيت.",
    "faq.disclaimer":
      "المعلومات المقدمة هي للأغراض التعليمية فقط وليست بديلاً عن الاستشارة الطبية المهنية.",

    // Landing - CTA
    "cta.title": "ابدأ رحلتك",
    "cta.subtitle":
      "انضمي إلى ملايين الآباء الذين يثقون بنا في تتبع الحمل القائم على الأدلة. لا حاجة لحساب. لا تتم مشاركة البيانات.",
    "cta.button": "ابدأ رحلتك",
    "cta.quickCalculators": "حاسبات سريعة",

    // Onboarding
    "onboarding.step1Title": "متى موعد طفلك؟",
    "onboarding.step1Desc": "سنقوم بحساب تقدم حملك تلقائياً.",
    "onboarding.step2Title": "أخبرينا عن نفسك",
    "onboarding.step2Desc": "هذا يساعدنا في تخصيص تجربتك.",
    "onboarding.step3Title": "تفضيلاتك",
    "onboarding.step3Desc": "لنتمكن من إعطائك المعلومات الأكثر صلة.",
    "onboarding.lmpLabel": "اليوم الأول من آخر دورة شهرية",
    "onboarding.lmpDesc": "هذه هي الطريقة التي نحسب بها تاريخ ولادتك والأسبوع الحالي.",
    "onboarding.firstPregnancy": "هل هذا حملك الأول؟",
    "onboarding.yesFirstBaby": "نعم، أول طفل",
    "onboarding.doneThisBefore": "لقد فعلت هذا من قبل",
    "onboarding.symptoms": "أي أعراض؟ (اضغط على كل ما ينطبق)",
    "onboarding.dietaryPreferences": "التفضيلات الغذائية",
    "onboarding.vitamins": "الفيتامينات والمكملات التي تتناولينها",
    "onboarding.startJourney": "ابدأ رحلتك",

    // Dashboard
    "dashboard.title": "حملك",
    "dashboard.subtitle": "كل شيء في لمحة",
    "dashboard.enterLmp": "أدخلي اليوم الأول من آخر دورة شهرية لرؤية حالة حملك.",
    "dashboard.youreIn": "أنت الآن في",
    "dashboard.dueDate": "تاريخ الولادة",
    "dashboard.daysToGo": "الأيام المتبقية",
    "dashboard.sizeOfA": "بحجم",
    "dashboard.embryonicStage": "المرحلة الجنينية",
    "dashboard.fetalDevelopment": "نمو الجنين",
    "dashboard.nearlyReady": "يكاد يكون جاهزاً!",
    "dashboard.yourBabyThisWeek": "طفلك هذا الأسبوع",
    "dashboard.nutritionToday": "التغذية اليوم",
    "dashboard.recommended": "موصى به",
    "dashboard.foodsToAvoid": "أطعمة يجب تجنبها",
    "dashboard.importantNutrients": "عناصر غذائية مهمة",
    "dashboard.waterIntakeToday": "شرب الماء اليوم",
    "dashboard.tapToLogGlass": "اضغط لتسجيل كوب · يُنصح بـ 8-10 أكواب يومياً",
    "dashboard.howAreYouFeeling": "كيف تشعرين؟",
    "dashboard.yourMood": "مزاجك",
    "dashboard.symptoms": "الأعراض",
    "dashboard.addSymptom": "إضافة عرض",
    "dashboard.commonThisWeek": "شائع هذا الأسبوع",
    "dashboard.tapAddSymptom": 'اضغط "إضافة عرض" لتسجيل ما تشعرين به',
    "dashboard.birthPlan": "خطة الولادة",
    "dashboard.addItem": "إضافة عنصر",
    "dashboard.addYourOwnItem": "أضف عنصرك الخاص...",
    "dashboard.yourWeekInsights": "نصائح أسبوعك {week}",
    "dashboard.babyDevelopment": "نمو الطفل",
    "dashboard.whatYouMayFeel": "ما قد تشعرين به",
    "dashboard.tip": "نصيحة",
    "dashboard.great": "ممتاز",
    "dashboard.good": "جيد",
    "dashboard.okay": "مقبول",
    "dashboard.rough": "صعب",

    // Tracker
    "tracker.title": "متتبع الحمل",
    "tracker.subtitle": "تتبعي نمو طفلك ورحلة صحتك",
    "tracker.babySize": "حجم الطفل",
    "tracker.upcomingAppointments": "المواعيد القادمة",
    "tracker.noAppointments": "لا توجد مواعيد مجدولة. أضيفي زيارات ما قبل الولادة لتلقي تذكيرات في الوقت المناسب.",
    "tracker.wellnessTips": "نصائح العافية للأسبوع {week}",
    "tracker.nutrition": "التغذية",
    "tracker.nutritionDesc": "ركزي على الأطعمة الغنية بالحديد وحافظي على ترطيب جسمك.",
    "tracker.rest": "الراحة",
    "tracker.restDesc": "احصلي على 7-9 ساعات من النوم. استخدمي الوسائد للدعم.",
    "tracker.exercise": "التمرين",
    "tracker.exerciseDesc": "المشي اللطيف ويوجا ما قبل الولادة خياران ممتازان.",
    "tracker.hydration": "الترطيب",
    "tracker.hydrationDesc": "اشربي 8-10 أكواب من الماء يومياً لدعم السائل الأمنيوسي.",

    // Calculator - Due Date
    "calculator.dueDate.title": "حاسبة تاريخ الولادة",
    "calculator.dueDate.desc": "أدخلي اليوم الأول من آخر دورة شهرية",
    "calculator.dueDate.lmpLabel": "اليوم الأول من آخر دورة شهرية",
    "calculator.dueDate.lmpDesc": "أدخلي تاريخ بدء آخر دورة شهرية",
    "calculator.dueDate.button": "حساب تاريخ الولادة",
    "calculator.dueDate.estimatedDueDate": "تاريخ الولادة المتوقع",
    "calculator.dueDate.conceptionDate": "تاريخ الحمل",
    "calculator.dueDate.currentWeek": "الأسبوع الحالي",
    "calculator.dueDate.trimester": "الثلث",
    "calculator.dueDate.weeksRemaining": "الأسابيع المتبقية",
    "calculator.dueDate.daysUntilDue": "الأيام حتى الولادة",

    // Calculator - Weight Gain
    "calculator.weightGain.title": "حاسبة زيادة وزن الحمل",

    // Settings
    "settings.title": "الإعدادات",
    "settings.subtitle": "إدارة تفضيلاتك وملفك الشخصي",
    "settings.profile": "الملف الشخصي",
    "settings.theme": "المظهر",
    "settings.notifications": "الإشعارات",
    "settings.profileInfo": "معلومات الملف الشخصي",
    "settings.name": "الاسم",
    "settings.namePlaceholder": "اسمك",
    "settings.dueDate": "تاريخ الولادة",
    "settings.cycleLength": "طول الدورة (أيام)",
    "settings.periodLength": "طول الحيض (أيام)",
    "settings.themePreferences": "تفضيلات المظهر",
    "settings.light": "فاتح",
    "settings.dark": "داكن",
    "settings.system": "النظام",
    "settings.notificationPrefs": "تفضيلات الإشعارات",
    "settings.appointmentReminders": "تذكيرات المواعيد",
    "settings.appointmentRemindersDesc": "الحصول على إشعارات حول مواعيد ما قبل الولادة القادمة",
    "settings.medicationReminders": "تذكيرات الأدوية",
    "settings.medicationRemindersDesc": "تذكيرات يومية لفيتامينات ما قبل الولادة",
    "settings.weeklyInsights": "نصائح أسبوعية",
    "settings.weeklyInsightsDesc": "تحديثات أسبوعية عن نمو طفلك",
    "settings.dataPrivacy": "خصوصية البيانات",
    "settings.dataPrivacyDesc": "يتم تخزين إعداداتك محلياً على جهازك. نحن لا نجمع أو نخزن معلوماتك الصحية الشخصية.",

    // Language Toggle
    "language.switchToArabic": "العربية",
    "language.switchToEnglish": "English",

    // Mobile Bottom Nav
    "bottomNav.dashboard": "لوحة التحكم",
    "bottomNav.home": "الرئيسية",

    // Theme Toggle
    "theme.toggle": "تبديل المظهر",
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
