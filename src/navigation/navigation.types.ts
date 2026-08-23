import type { LucideIcon } from "lucide-react";


export interface NavigationItem {
  id: string;

  label: string;

  path: string;

  icon: LucideIcon;

  badge?: string | number;

  permission?: string;

  children?: NavigationItem[];
}

export interface NavigationGroup {
  id: string;

  title: string;

  items: NavigationItem[];
}