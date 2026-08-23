import { useDashboard } from "@/features/dashboard";


import {DashboardSkeleton} from "@/components/dashboard/skeleton";
import {
  KPIGrid,
  RecentActivityWidget,
  RecentLeadWidget,
  ChartPlaceholderWidget,
  EmptyStateWidget,
  UpcomingMeetingsWidget,
  TodayTasksWidget,
  QuickActionsWidget,
} from "@/components/dashboard/widgets";

export default function DashboardHome() {
  const { data, loading } = useDashboard();

  if (loading) {
    return <DashboardSkeleton />;
    
  }

  if (!data) {
    return (
      <EmptyStateWidget
        title="Dashboard unavailable"
        description="Unable to load dashboard data."
      />
    );
  }

  return (
    <div className="space-y-6">
      <KPIGrid
        kpis={data.kpis}
      />







    {/* Operational Widgets */}
    <section className="grid gap-6 xl:grid-cols-3">
      <QuickActionsWidget />

      <TodayTasksWidget />

      <UpcomingMeetingsWidget />
    </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <RecentActivityWidget
          activities={data.activities}
        />

        <RecentLeadWidget
          leads={data.leads}
        />
      </div>

      <ChartPlaceholderWidget />
    </div>
  );
}