import { GlassCard } from "@/components/shared/glass-card";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Privacy Policy",
  description: "Our privacy policy explains how we handle your data. We prioritize your privacy and do not collect personal health information.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-6">Privacy Policy</h1>
      <div className="space-y-6">
        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">Our Commitment to Privacy</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your privacy is our priority. All pregnancy calculators on this platform run entirely in your browser.
            We do not collect, store, or transmit any personal health information you enter.
          </p>
        </GlassCard>
        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">Data Collection</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We do not collect any personal data. All calculations are performed locally using client-side JavaScript.
            No information is sent to our servers or third parties.
          </p>
        </GlassCard>
        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">Cookies</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use minimal local storage for theme preferences only. No tracking cookies or analytics are used
            without your explicit consent.
          </p>
        </GlassCard>
        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">Updates</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This privacy policy may be updated periodically. Changes will be posted on this page.
          </p>
        </GlassCard>
      </div>
      <p className="text-xs text-muted-foreground mt-8">Last updated: January 2025</p>
    </div>
  );
}
