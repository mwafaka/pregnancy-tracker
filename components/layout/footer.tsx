import Link from "next/link";
import { Heart, Github, Twitter } from "lucide-react";
import { SITE_CONFIG, CALCULATOR_ROUTES } from "@/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-peach-400 to-lavender-400 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm mb-4">Calculators</h3>
            <ul className="space-y-2">
              {CALCULATOR_ROUTES.slice(0, 4).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/tools/${item.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pregnancy-week-by-week/week-1"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Week by Week
                </Link>
              </li>
              <li>
                <Link
                  href="/trimester/first-trimester"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  First Trimester
                </Link>
              </li>
              <li>
                <Link
                  href="/symptoms/nausea"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pregnancy Symptoms
                </Link>
              </li>
              <li>
                <Link
                  href="/nutrition/foods-to-avoid"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nutrition Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="disclaimer-banner mb-8">
          <p className="font-semibold text-xs mb-1">Medical Disclaimer</p>
          <p>{SITE_CONFIG.disclaimer}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/impressum" className="text-xs text-muted-foreground hover:text-foreground">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
