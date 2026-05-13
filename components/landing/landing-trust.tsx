"use client";

import { motion } from "framer-motion";
import { Verified, Lock, Users, Award, ShieldCheck, Eye } from "lucide-react";
import { AnimatedStat } from "@/components/shared/animated-stat";
import { fadeInUp, staggerContainer } from "@/animations";
import { useLocale } from "@/context/locale-context";

const trustPoints = [
  { icon: Verified, titleKey: "trust.medicallyReviewed", descKey: "trust.medicallyReviewedDesc" },
  { icon: Lock, titleKey: "trust.dataStaysPrivate", descKey: "trust.dataStaysPrivateDesc" },
  { icon: Users, titleKey: "trust.monthlyUsers", descKey: "trust.monthlyUsersDesc" },
  { icon: Award, titleKey: "trust.evidenceBased", descKey: "trust.evidenceBasedDesc" },
  { icon: ShieldCheck, titleKey: "trust.hipaaCompliant", descKey: "trust.hipaaCompliantDesc" },
  { icon: Eye, titleKey: "trust.transparentMethods", descKey: "trust.transparentMethodsDesc" },
];

export function LandingTrust() {
  const { t } = useLocale();

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            {t("trust.title")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
            {t("trust.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimatedStat value="1M+" label={t("trust.monthlyActiveUsers")} delay={0} />
          <AnimatedStat value="99.9%" label={t("trust.uptime")} delay={0.1} />
          <AnimatedStat value="4.9★" label={t("trust.userRating")} delay={0.2} />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.titleKey}
                variants={fadeInUp}
                className="flex gap-4 glass rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/20 dark:to-lavender-900/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-peach-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{t(point.titleKey)}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t(point.descKey)}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
