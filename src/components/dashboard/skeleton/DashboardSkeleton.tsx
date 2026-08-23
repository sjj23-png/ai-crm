import SkeletonCard from "./SkeletonCard";
import WidgetSkeleton from "./WidgetSkeleton";


export default function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <WidgetSkeleton />

        <WidgetSkeleton />
      </section>

      <WidgetSkeleton />
    </div>
  );
}