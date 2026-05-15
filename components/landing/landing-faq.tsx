"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4 animate-fade-in-up">{t("faq.title")}</h2>
          <p className="text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>{t("faq.subtitle")}</p>
        </div>

        <div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqKeys.map((faq, i) => (
              <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <AccordionItem value={`item-${i}`} className="glass rounded-2xl px-6 border-none">
                  <AccordionTrigger className="text-left font-medium text-sm py-4">
                    {t(faq.qKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {t(faq.aKey)}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

        <div className="disclaimer-banner mt-8">
          <p>{t("faq.disclaimer")}</p>
        </div>
      </div>
    </section>
  );
}
