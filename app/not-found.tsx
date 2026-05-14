import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

export const metadata: Metadata = {
  title: `Page Not Found | ${SITE_CONFIG.name}`,
  description: "The page you are looking for does not exist or has been moved. Explore our pregnancy calculators and week-by-week guides.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
          <SearchX className="w-8 h-8 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-display font-bold mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
