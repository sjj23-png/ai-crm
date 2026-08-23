import type { NavigationGroup } from "./navigation.types";


import { NavigationIcons } from "./navigation.icons";

export const navigationConfig: NavigationGroup[] = [
  {
    id: "general",

    title: "General",

    items: [
      {
        id: "dashboard",

        label: "Dashboard",

        path: "/dashboard",

        icon: NavigationIcons.dashboard,
      },
    ],
  },

  {
    id: "organization",

    title: "Organization",

    items: [
      {
        id: "companies",

        label: "Companies",

        path: "/dashboard/companies",

        icon: NavigationIcons.companies,
      },

      {
        id: "contacts",

        label: "Contacts",

        path: "/dashboard/contacts",

        icon: NavigationIcons.contacts,
      },

      {
        id: "users",

        label: "Users",

        path: "/dashboard/users",

        icon: NavigationIcons.users,
      },

      {
        id: "roles",

        label: "Roles",

        path: "/dashboard/roles",

        icon: NavigationIcons.roles,
      },

      {
        id: "structure",

        label: "Structure",

        path: "/dashboard/organization",

        icon: NavigationIcons.structure,
      },
    ],
  },

  {
    id: "crm",

    title: "CRM",

    items: [
      {
        id: "crm",

        label: "CRM Hub",

        path: "/dashboard/crm",

        icon: NavigationIcons.crm,
      },

      {
        id: "projects",

        label: "Projects",

        path: "/dashboard/projects",

        icon: NavigationIcons.projects,
      },

      {
        id: "reports",

        label: "Reports",

        path: "/dashboard/reports",

        icon: NavigationIcons.reports,
      },
    ],
  },

  {
    id: "system",

    title: "System",

    items: [
      {
        id: "settings",

        label: "Settings",

        path: "/dashboard/settings",

        icon: NavigationIcons.settings,
      },
    ],
  },
];