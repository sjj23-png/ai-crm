import { Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function SidebarFooter() {
  return (
    <footer className="border-t border-neutral-200 p-4 dark:border-neutral-800">
      <NavLink
        to="/dashboard/settings"
        className={({ isActive }) =>
          [
            "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",

            isActive
              ? "bg-primary-600 text-white"
              : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
          ].join(" ")
        }
      >
        <Settings size={18} />

        <span>Settings</span>
      </NavLink>
    </footer>
  );
}