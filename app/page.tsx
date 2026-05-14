"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingFeatures } from "@/components/landing/landing-features";
import { LandingTrust } from "@/components/landing/landing-trust";
import { LandingFAQ } from "@/components/landing/landing-faq";
import { LandingCTA } from "@/components/landing/landing-cta";
import { LandingJsonLd } from "@/components/landing/landing-json-ld";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const profile = localStorage.getItem("pregnancy-tracker-profile");
    if (profile) {
      try {
        const parsed = JSON.parse(profile);
        if (parsed.onboardingComplete) {
          router.replace("/dashboard");
        }
      } catch { /* ignore */ }
    }
  }, [router]);

  return (
    <>
      <LandingJsonLd />
      <LandingHero />
      <LandingFeatures />
      <LandingTrust />
      <LandingFAQ />
      <LandingCTA />
    </>
  );
}
