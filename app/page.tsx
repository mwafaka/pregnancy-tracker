import { LandingHero } from "@/components/landing/landing-hero";
import { LandingCalculators } from "@/components/landing/landing-calculators";
import { LandingFeatures } from "@/components/landing/landing-features";
import { LandingFAQ } from "@/components/landing/landing-faq";
import { LandingTrust } from "@/components/landing/landing-trust";
import { LandingCTA } from "@/components/landing/landing-cta";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Your Complete Pregnancy Companion",
  description: "Track your pregnancy week by week with evidence-based tools. Due date calculator, ovulation tracker, weight gain guide, and more.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <LandingCalculators />
      <LandingFeatures />
      <LandingTrust />
      <LandingFAQ />
      <LandingCTA />
    </>
  );
}
