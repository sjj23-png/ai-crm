import type { LucideIcon } from "lucide-react";


export interface KPIItem {
  id: string;

  title: string;

  value: string;

  trend: string;

  description: string;

  icon: LucideIcon;
}

export interface QuickActionItem {
  id: string;

  title: string;

  description: string;

  icon: LucideIcon;
}

export interface ActivityItem {
  id: number;

  title: string;

  time: string;

  description: string;
}

export interface LeadItem {
  id: number;

  name: string;

  company: string;

  status: string;
}

export interface DashboardData {
  kpis: KPIItem[];

  quickActions: QuickActionItem[];

  activities: ActivityItem[];

  leads: LeadItem[];
}