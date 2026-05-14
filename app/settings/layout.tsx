import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Settings",
  description: "Manage your pregnancy profile, theme preferences, and notification settings for a personalized tracking experience.",
  path: "/settings",
});

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
