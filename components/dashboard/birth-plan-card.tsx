"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardList, Plus, X, Check, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { BIRTH_PLAN_CATEGORIES } from "@/constants";
import { useLocale } from "@/context/locale-context";
import type { BirthPlanItem } from "@/types";

interface BirthPlanCardProps {
  items: BirthPlanItem[];
  progress: { completed: number; total: number };
  onToggle: (id: string) => void;
  onAdd: (text: string, category: BirthPlanItem["category"]) => void;
  onRemove: (id: string) => void;
  onReset: () => void;
}

export function BirthPlanCard({ items, progress, onToggle, onAdd, onRemove, onReset }: BirthPlanCardProps) {
  const { t } = useLocale();
  const [expanded, setExpanded] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [newText, setNewText] = useState("");
  const [newCategory, setNewCategory] = useState<BirthPlanItem["category"]>("other");
  const [viewAll, setViewAll] = useState(false);

  const percentage = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

  const displayItems = viewAll ? items : items.slice(0, 5);

  const handleAdd = () => {
    if (!newText.trim()) return;
    onAdd(newText.trim(), newCategory);
    setNewText("");
    setShowAdd(false);
  };

  const categoryIcon = (key: BirthPlanItem["category"]) =>
    BIRTH_PLAN_CATEGORIES.find((c) => c.key === key)?.icon ?? "📋";

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-lavender-500" />
          <h3 className="font-display font-semibold text-lg">{t("dashboard.birthPlan")}</h3>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-lavender-400 to-pink-400"
          />
        </div>
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
          {progress.completed}/{progress.total}
        </span>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="space-y-1 mb-3">
              {displayItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-2 group"
                >
                  <button
                    onClick={() => onToggle(item.id)}
                    className={`shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                      item.completed
                        ? "bg-gradient-to-br from-green-400 to-emerald-400 border-green-400"
                        : "border-muted-foreground/30 hover:border-lavender-400"
                    }`}
                  >
                    {item.completed && <Check className="w-3 h-3 text-white" />}
                  </button>
                  <span
                    className={`flex-1 text-sm transition-all ${
                      item.completed ? "line-through text-muted-foreground/50" : "text-foreground"
                    }`}
                  >
                    {item.text}
                  </span>
                  <span className="text-[10px] text-muted-foreground/40 hidden sm:inline">
                    {categoryIcon(item.category)}
                  </span>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="opacity-0 group-hover:opacity-100 text-muted-foreground/30 hover:text-destructive transition-all"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>

            {items.length > 5 && (
              <button
                onClick={() => setViewAll(!viewAll)}
                className="text-xs text-primary hover:text-primary/80 transition-colors mb-3"
              >
                {viewAll ? t("common.showLess") : `${t("common.viewAll")} ${items.length} ${t("common.items")}`}
              </button>
            )}

            <div className="flex gap-2">
              {showAdd ? (
                <div className="flex-1 flex gap-2">
                  <input
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder={t("dashboard.addYourOwnItem")}
                    className="flex-1 h-9 rounded-xl border border-input bg-background px-3 text-sm focus-ring"
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                    autoFocus
                  />
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as BirthPlanItem["category"])}
                    className="h-9 rounded-xl border border-input bg-background px-2 text-xs focus-ring"
                  >
                    {BIRTH_PLAN_CATEGORIES.map((c) => (
                      <option key={c.key} value={c.key}>{c.label}</option>
                    ))}
                  </select>
                  <button
                    onClick={handleAdd}
                    className="h-9 px-3 rounded-xl bg-gradient-to-br from-lavender-400 to-pink-400 text-white text-xs font-medium hover:from-lavender-500 hover:to-pink-500 transition-all"
                  >
                    {t("common.add")}
                  </button>
                  <button
                    onClick={() => setShowAdd(false)}
                    className="h-9 w-9 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setShowAdd(true)}
                    className="flex items-center gap-1 h-9 px-4 rounded-xl bg-muted/50 hover:bg-muted text-xs font-medium transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" /> {t("dashboard.addItem")}
                  </button>
                  <button
                    onClick={onReset}
                    className="flex items-center gap-1 h-9 px-4 rounded-xl bg-muted/50 hover:bg-muted text-xs font-medium text-muted-foreground transition-colors ltr:ml-auto rtl:mr-auto"
                  >
                    <RotateCcw className="w-3 h-3" /> {t("common.reset")}
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
