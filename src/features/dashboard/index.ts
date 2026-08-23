export * from "./types/dashboard.types";
export * from "./constants/dashboard.constants";

export * from "./data/dashboard.mock";
export * from "./utils/dashboard.mapper";
export * from "./services/dashboard.service";
export * from "./hooks/useDashboard";

export { default as DashboardHome } from "@/pages/dashboard/DashboardHome";

export { useDashboard } from "./hooks/useDashboard";

export { getDashboard } from "./services/dashboard.service";

export type {
  DashboardData,
  KPIItem,
  ActivityItem,
  LeadItem,
  QuickActionItem,
} from "./types/dashboard.types";