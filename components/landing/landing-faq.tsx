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
import { useLocale } from "@/context/locale-context";

const faqKeys = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
  { qKey: "faq.q5", aKey: "faq.a5" },
  { qKey: "faq.q6", aKey: "faq.a6" },
];

export function LandingFAQ() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 gradient-bg">
      <SEOSection faqs={faqKeys.map((f) => ({ question: t(f.qKey), answer: t(f.aKey) }))} />
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            {t("faq.title")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground">
            {t("faq.subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqKeys.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <AccordionItem value={`item-${i}`} className="glass rounded-2xl px-6 border-none">
                  <AccordionTrigger className="text-left font-medium text-sm py-4">
                    {t(faq.qKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {t(faq.aKey)}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <div className="disclaimer-banner mt-8">
          <p>{t("faq.disclaimer")}</p>
        </div>
      </div>
    </section>
  );
}
