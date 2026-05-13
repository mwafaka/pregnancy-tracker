import { SkeletonLoader } from "@/components/shared/skeleton-loader";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <SkeletonLoader variant="text" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkeletonLoader variant="card" />
        <SkeletonLoader variant="card" />
        <SkeletonLoader variant="card" />
      </div>
      <SkeletonLoader variant="chart" />
    </div>
  );
}
