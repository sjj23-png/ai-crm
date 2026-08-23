import { getDashboardData } from "../utils/dashboard.mapper";


import {
  dashboardKPIs,
  dashboardQuickActions,
  recentActivities,
  recentLeads,
} from "../data/dashboard.mock";

export async function getDashboard() {
  return Promise.resolve(
    getDashboardData({
      kpis: dashboardKPIs,

      quickActions: dashboardQuickActions,

      activities: recentActivities,

      leads: recentLeads,
    })
  );
}