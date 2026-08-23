



// import {
//   dashboardKPIs,
//   dashboardQuickActions,
//   recentActivities,
//   recentLeads,
// } from "../data/dashboard.mock";

// export function getDashboardData() {
//   return {
//     kpis: dashboardKPIs,
//     quickActions: dashboardQuickActions,
//     activities: recentActivities,
//     leads: recentLeads,
//   };
// }

import type {
  ActivityItem,
  DashboardData,
  KPIItem,
  LeadItem,
  QuickActionItem,
} from "../types/dashboard.types";


interface DashboardSource {
  kpis: KPIItem[];

  quickActions: QuickActionItem[];

  activities: ActivityItem[];

  leads: LeadItem[];
}


export function getDashboardData(
  source: DashboardSource
): DashboardData {
  return {
    kpis: source.kpis,

    quickActions: source.quickActions,

    activities: source.activities,

    leads: source.leads,
  };
}