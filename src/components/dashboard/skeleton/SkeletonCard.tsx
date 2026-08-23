



export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl border border-border bg-card p-6">
      <div className="mb-5 h-4 w-28 rounded bg-muted" />

      <div className="mb-3 h-8 w-24 rounded bg-muted" />

      <div className="h-3 w-36 rounded bg-muted" />
    </div>
  );
}