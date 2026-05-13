"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingGradient } from "@/components/shared/floating-gradient";
import { fadeIn, fadeInUp, staggerContainer } from "@/animations";

export function LandingHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <FloatingGradient className="top-20 -left-48" color1="rgba(248, 176, 122, 0.25)" speed="slow" />
      <FloatingGradient className="bottom-20 -right-48" color1="rgba(167, 122, 238, 0.2)" speed="slow" />
      <FloatingGradient className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]" color1="rgba(254, 104, 167, 0.15)" size="md" speed="slow" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm">
            <Shield className="w-4 h-4 text-peach-500" />
            <span className="text-muted-foreground">Medically reviewed content</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Your Pregnancy
            <br />
            <span className="gradient-text">Journey, Tracked</span>
            <br />
            With Care
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Evidence-based tools, personalized tracking, and expert-reviewed resources
            for every stage of your pregnancy — from conception to birth.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2 rounded-xl h-12 px-8 text-base">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl h-12 px-8 text-base" asChild>
              <a href="#calculators">
                <Clock className="w-5 h-5" />
                Explore Tools
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              FDA compliant
            </span>
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              HIPAA ready
            </span>
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              Expert reviewed
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
