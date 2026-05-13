import { GlassCard } from "@/components/shared/glass-card";
import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Impressum",
  description: "Legal disclosure information according to German law (§ 5 TMG).",
  path: "/impressum",
  noIndex: true,
});

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-6">Impressum</h1>

      <div className="space-y-6">
        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">Angaben gemäß § 5 TMG</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This website is a private, non-commercial learning project created for educational purposes only.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">Contact</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Email: <a href="mailto:hello@pregnancytracker.com" className="text-peach-500 hover:underline">hello@pregnancytracker.com</a>
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">Purpose</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This project is developed solely for learning and educational purposes. It does not constitute a
            commercial offering. No revenue is generated from this website. All content is provided free of charge
            as a personal learning exercise in web development.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">Disclaimer</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The information on this website is for general informational purposes only and does not constitute
            medical advice. Always consult a qualified healthcare provider with any questions regarding your
            health or pregnancy.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="font-display font-semibold text-lg mb-3">Haftungsausschluss</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Die Inhalte dieser Website dienen ausschließlich zu Lern- und Bildungszwecken. Es handelt sich um
            ein nicht-kommerzielles Privatprojekt. Für die Richtigkeit und Vollständigkeit der Inhalte wird
            keine Gewähr übernommen.
          </p>
        </GlassCard>
      </div>

      <p className="text-xs text-muted-foreground mt-8">Last updated: May 2026</p>
    </div>
  );
}
