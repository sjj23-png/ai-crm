import { NavLink } from "react-router-dom";


import type { NavigationItem } from "@/navigation/navigation.types";

interface SidebarItemProps {
  item: NavigationItem;
}

export default function SidebarItem({
  item,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200",

          isActive
            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-900/30 font-semibold"
            : "text-slate-600 dark:text-[#94A3B8] hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-[#151C2B] dark:hover:text-slate-100",
        ].join(" ")
      }
    >
      {Icon ? <Icon size={18} /> : <div className="w-4 h-4" />}

      <span className="flex-1">
        {item.label}
      </span>

      {item.badge && (
        <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs font-semibold text-primary-700">
          {item.badge}
        </span>
      )}
    </NavLink>
  );
}