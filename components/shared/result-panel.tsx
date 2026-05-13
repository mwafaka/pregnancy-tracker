"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Share2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ResultPanelProps {
  children: ReactNode;
  success: boolean;
  error?: string;
  showActions?: boolean;
  onShare?: () => void;
  onExport?: () => void;
  className?: string;
}

export function ResultPanel({
  children,
  success,
  error,
  showActions = true,
  onShare,
  onExport,
  className,
}: ResultPanelProps) {
  if (!success && error) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "glass rounded-2xl p-6 border border-destructive/20",
          className
        )}
        role="alert"
      >
        <div className="flex items-start gap-3">
          <XCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
          <div>
            <h4 className="font-semibold text-sm">Calculation Error</h4>
            <p className="text-sm text-muted-foreground mt-1">{error}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "glass rounded-3xl p-6 md:p-8 relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-peach-200/5 before:to-lavender-200/5 before:pointer-events-none",
        className
      )}
    >
      <div className="flex items-start gap-3 mb-4">
        <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
        <div>
          <h4 className="font-display font-semibold text-lg">Results</h4>
        </div>
      </div>

      <div className="relative z-10 space-y-4">{children}</div>

      {showActions && (onShare || onExport) && (
        <div className="flex gap-2 mt-6 pt-4 border-t border-border">
          {onShare && (
            <Button variant="outline" size="sm" onClick={onShare} className="gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          )}
          {onExport && (
            <Button variant="outline" size="sm" onClick={onExport} className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
}
