import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Dashboard",
  description: "Your personalized pregnancy dashboard with weekly insights, baby growth tracking, nutrition guidance, symptom logging, and birth plan management.",
  path: "/dashboard",
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
