import { LandingHero } from "@/components/landing/landing-hero";
import { LandingFeatures } from "@/components/landing/landing-features";
import { LandingTrust } from "@/components/landing/landing-trust";
import { LandingFAQ } from "@/components/landing/landing-faq";
import { LandingCTA } from "@/components/landing/landing-cta";
import { LandingJsonLd } from "@/components/landing/landing-json-ld";

export default function HomePage() {
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
