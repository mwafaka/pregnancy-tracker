"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { NAV_ITEMS } from "@/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto glass rounded-2xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-peach-400 to-lavender-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Heart className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-lg">PregnancyTracker</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="px-3 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-br from-peach-400 to-lavender-400 hover:from-peach-500 hover:to-lavender-500 transition-all shadow-sm"
          >
            <LayoutDashboard className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
            Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass rounded-2xl mt-2 p-4 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm hover:bg-accent/50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-br from-peach-400 to-lavender-400 mt-2"
            >
              Go to Dashboard
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
