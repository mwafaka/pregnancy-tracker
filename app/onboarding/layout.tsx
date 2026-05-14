import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Get Started",
  description: "Set up your pregnancy profile to receive personalized tracking, weekly insights, and tailored health information.",
  path: "/onboarding",
  noIndex: true,
});

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
