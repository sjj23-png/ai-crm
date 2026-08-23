



import {
  LayoutDashboard,
  Building2,
  Users,
  UserCheck,
  ShieldCheck,
  BriefcaseBusiness,
  FolderKanban,
  BarChart3,
  Settings,
  GitBranch,
} from "lucide-react";

export const NavigationIcons = {
  dashboard: LayoutDashboard,

  companies: Building2,

  contacts: UserCheck,

  users: Users,

  roles: ShieldCheck,

  crm: BriefcaseBusiness,

  projects: FolderKanban,

  reports: BarChart3,

  settings: Settings,

  structure: GitBranch,
} as const;