"use client";

import { motion } from "framer-motion";
import { Verified, Lock, Users, Award, ShieldCheck, Eye } from "lucide-react";
import { AnimatedStat } from "@/components/shared/animated-stat";
import { fadeInUp, staggerContainer } from "@/animations";

const trustPoints = [
  { icon: Verified, title: "Medically Reviewed", description: "All content reviewed by board-certified OB-GYNs." },
  { icon: Lock, title: "Your Data Stays Private", description: "All calculations happen locally. Nothing leaves your device." },
  { icon: Users, title: "1M+ Monthly Users", description: "Trusted by millions of parents-to-be worldwide." },
  { icon: Award, title: "Evidence-Based", description: "All tools are built on peer-reviewed medical research." },
  { icon: ShieldCheck, title: "HIPAA Compliant", description: "Enterprise-grade security and privacy protections." },
  { icon: Eye, title: "Transparent Methods", description: "All calculation formulas are documented and verifiable." },
];

export function LandingTrust() {
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
            Built With Trust
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
            Your health information deserves the highest standards of privacy and accuracy.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimatedStat value="1M+" label="Monthly Active Users" delay={0} />
          <AnimatedStat value="99.9%" label="Uptime" delay={0.1} />
          <AnimatedStat value="4.9★" label="User Rating" delay={0.2} />
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
                key={point.title}
                variants={fadeInUp}
                className="flex gap-4 glass rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peach-100 to-lavender-100 dark:from-peach-900/20 dark:to-lavender-900/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-peach-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{point.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
