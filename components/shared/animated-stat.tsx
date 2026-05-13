"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedStatProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedStat({ value, label, icon, className, delay = 0 }: AnimatedStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("text-center", className)}
    >
      {icon && <div className="flex justify-center mb-2 text-peach-400">{icon}</div>}
      <div className="stat-value">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </motion.div>
  );
}
