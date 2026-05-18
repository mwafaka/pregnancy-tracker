import { GlassCard } from "@/components/shared/glass-card";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Impressum",
  description: "Legal disclosure information according to German law (§ 5 DDG).",
  path: "/impressum",
  noIndex: true,
});

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-6">
        Impressum
      </h1>

      <div className="space-y-6">

        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">
            Angaben gemäß § 5 DDG
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This website is operated as a private, non-commercial educational project
            with no intent to generate profit (“keine Gewinnerzielungsabsicht”).
            No commercial services are offered.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">
            Contact
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Email:{" "}
            <a
              href="mailto:hello@pregnancytracker.com"
              className="text-peach-500 hover:underline"
            >
              muafak.job@gmail.com
            </a>
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">
            Project Purpose
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This project is developed solely for learning, educational, and portfolio purposes.
            It is not a commercial service, does not include paid features, and does not generate revenue.
            All content is provided free of charge as part of a personal development project.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">
            Medical Disclaimer
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The information provided on this website is for informational and educational purposes only
            and does not constitute medical advice, diagnosis, or treatment.
            Always consult a qualified healthcare professional regarding any health-related concerns.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">
            Liability for Content
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            While the content has been created with care, no guarantee is given regarding
            its accuracy, completeness, or timeliness.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">
            Liability for External Links
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This website may contain links to external third-party websites.
            We have no influence over their content and therefore cannot accept any liability for them.
            The respective provider or operator is always responsible for the content of linked pages.
          </p>
        </GlassCard>

      </div>

      <p className="text-xs text-muted-foreground mt-8">
        Last updated: May 2026
      </p>
    </div>
  );
}