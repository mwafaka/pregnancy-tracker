"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { staggerContainer, fadeInUp } from "@/animations";
import { SEOSection } from "@/components/shared/seo-section";

const faqs = [
  {
    question: "How accurate is the due date calculator?",
    answer:
      "The due date calculator uses the standard 280-day Naegele's rule based on your last menstrual period. While generally accurate, only about 5% of babies arrive exactly on their due date. Most are born between 38-42 weeks. Always confirm with your healthcare provider.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Yes. All calculations are performed locally in your browser. We never store or transmit your personal health information. No account is required to use any of our calculators. Our platform is designed with privacy-first architecture.",
  },
  {
    question: "When should I take a pregnancy test?",
    answer:
      "For the most accurate result, wait until the first day of your missed period. Some sensitive tests may detect pregnancy earlier, but waiting reduces the chance of a false negative. Tests work by detecting hCG in your urine.",
  },
  {
    question: "What weeks are each trimester?",
    answer:
      "Pregnancy is divided into three trimesters: First trimester (weeks 1-13), Second trimester (weeks 14-27), and Third trimester (weeks 28-40). Each trimester brings different developmental milestones and physical changes.",
  },
  {
    question: "How much weight should I gain during pregnancy?",
    answer:
      "Recommended weight gain depends on your pre-pregnancy BMI. Underweight: 28-40 lbs, Normal weight: 25-35 lbs, Overweight: 15-25 lbs, Obese: 11-20 lbs. Your healthcare provider can give personalized guidance based on your health profile.",
  },
  {
    question: "When will I feel the baby move?",
    answer:
      "Most first-time parents feel movement (quickening) between 18-22 weeks. If you've been pregnant before, you may feel it earlier, around 16-18 weeks. Every pregnancy is different, and the timing varies.",
  },
];

const faqSchema = faqs.map((f) => ({ question: f.question, answer: f.answer }));

export function LandingFAQ() {
  return (
    <section className="relative py-24 gradient-bg">
      <SEOSection faqs={faqSchema} />
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Common Questions
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground">
            Evidence-based answers to frequently asked questions about pregnancy.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <AccordionItem value={`item-${i}`} className="glass rounded-2xl px-6 border-none">
                  <AccordionTrigger className="text-left font-medium text-sm py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <div className="disclaimer-banner mt-8">
          <p>The information provided is for educational purposes only and is not a substitute for professional medical advice.</p>
        </div>
      </div>
    </section>
  );
}
