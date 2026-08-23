import {
  BarChart3,
  Building2,
  Briefcase,
  Plus,
  UserPlus,
  Users,
} from "lucide-react";

import type {
  ActivityItem,
  KPIItem,
  LeadItem,
  QuickActionItem,
} from "../types/dashboard.types";


export const dashboardKPIs: KPIItem[] = [
  {
    id: "customers",
    title: "Customers",
    value: "1,248",
    trend: "+12.5%",
    description: "Compared to last month",
    icon: Users,
  },
  {
    id: "leads",
    title: "New Leads",
    value: "326",
    trend: "+18%",
    description: "This month",
    icon: UserPlus,
  },
  {
    id: "companies",
    title: "Companies",
    value: "84",
    trend: "+4%",
    description: "Active organizations",
    icon: Building2,
  },
  {
    id: "revenue",
    title: "Revenue",
    value: "$84,250",
    trend: "+9%",
    description: "Monthly recurring revenue",
    icon: BarChart3,
  },
];

export const dashboardQuickActions: QuickActionItem[] = [
  {
    id: "lead",
    title: "Create Lead",
    description: "Add a new sales lead.",
    icon: Plus,
  },
  {
    id: "customers",
    title: "Customers",
    description: "Manage customer records.",
    icon: Users ,
  },
  {
    id: "companies",
    title: "Companies",
    description: "Manage organizations.",
    icon: Building2,
  },
  {
    id: "pipeline",
    title: "Pipeline",
    description: "Open sales pipeline.",
    icon: Briefcase,
  },
];

export const recentActivities: ActivityItem[] = [
  {
    id: 1,
    title: "New customer registered",
    time: "2 minutes ago",
    description: "A new customer has registered on the platform.",
  },
  {
    id: 2,
    title: "Lead moved to Negotiation",
    time: "15 minutes ago",
    description: "A lead has been moved to the Negotiation stage.",
  },
  {
    id: 3,
    title: "Invoice generated",
    time: "1 hour ago this",
    description:"description",
  },
];

export const recentLeads: LeadItem[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "ABC Technologies",
    status: "Qualified",
  },
  {
    id: 2,
    name: "Priya Patel",
    company: "Global Finserve",
    status: "New",
  },
  {
    id: 3,
    name: "Amit Verma",
    company: "NextGen Solutions",
    status: "Contacted",
  },
];