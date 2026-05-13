"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/animations";
import Link from "next/link";

export function LandingCTA() {
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-peach-200/10 to-lavender-200/10 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-peach-400 to-lavender-400 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Start Your Journey
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Join millions of parents who trust us for evidence-based pregnancy tracking.
              No account needed. No data shared.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2 rounded-xl h-12 px-8" asChild>
                <Link href="/tools/due-date-calculator">
                  Calculate Due Date
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl h-12 px-8" asChild>
                <Link href="/dashboard">
                  Open Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
