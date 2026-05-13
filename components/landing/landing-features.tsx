"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Bell,
  CalendarCheck,
  BookOpen,
  Timer,
  Smartphone,
} from "lucide-react";
import { staggerContainer, fadeInUp } from "@/animations";
import { GlassCard } from "@/components/shared/glass-card";

const features = [
  { icon: LineChart, title: "Track Progress", description: "Visual charts tracking your weight, symptoms, and baby's growth week by week." },
  { icon: Bell, title: "Smart Reminders", description: "Never miss an appointment or medication with intelligent notifications." },
  { icon: CalendarCheck, title: "Appointments", description: "Manage your prenatal appointments and get preparation checklists." },
  { icon: BookOpen, title: "Daily Insights", description: "Expert-reviewed articles about your current pregnancy stage." },
  { icon: Timer, title: "Contraction Timer", description: "Time your contractions and know when it's time to head to the hospital." },
  { icon: Smartphone, title: "Works Offline", description: "All calculators work offline. Your data stays on your device." },
];

export function LandingFeatures() {
  return (
    <section className="relative py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Everything You Need
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools designed to support you through every trimester.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={fadeInUp}>
                <GlassCard>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-100 to-pink-100 dark:from-lavender-900/20 dark:to-pink-900/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-lavender-500" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
