"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = true, glow = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.01, y: -2 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "glass rounded-3xl p-6 md:p-8 relative overflow-hidden",
        glow && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-peach-200/10 before:to-lavender-200/10 before:pointer-events-none",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
