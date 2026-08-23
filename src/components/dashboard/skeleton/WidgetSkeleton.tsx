



interface WidgetSkeletonProps {
  height?: string;
}

export default function WidgetSkeleton({
  height = "h-72",
}: WidgetSkeletonProps) {
  return (
    <div
      className={[
        "animate-pulse rounded-xl border border-border bg-card p-6",
        height,
      ].join(" ")}
    >
      <div className="mb-6 h-5 w-40 rounded bg-muted" />

      <div className="space-y-4">
        <div className="h-4 rounded bg-muted" />

        <div className="h-4 w-5/6 rounded bg-muted" />

        <div className="h-4 w-3/4 rounded bg-muted" />

        <div className="h-4 w-2/3 rounded bg-muted" />
      </div>
    </div>
  );
}