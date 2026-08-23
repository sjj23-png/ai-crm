import type { KPIItem } from "@/features/dashboard";

import KPICard from "../kpi-card/KPICard";

interface KPIGridProps {
  kpis: KPIItem[];
}

export default function KPIGrid({
  kpis,
}: KPIGridProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((item) => (
        <KPICard
          key={item.id}
          item={item}
        />
      ))}
    </section>
  );
}