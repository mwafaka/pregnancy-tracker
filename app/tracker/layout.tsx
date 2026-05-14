import { generateMetadata } from "@/seo/metadata";

export const metadata = generateMetadata({
  title: "Pregnancy Tracker",
  description: "Track your baby's growth week by week with size comparisons, length, and weight. Log symptoms, nutrition, and appointments throughout your pregnancy journey.",
  path: "/tracker",
});

export default function TrackerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
