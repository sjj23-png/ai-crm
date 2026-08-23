import SidebarGroup from "./SidebarGroup";
import SidebarFooter from "./SidebarFooter";

import { navigationConfig } from "@/navigation/navigation.config";

export default function Sidebar() {
  return (
    <aside
      className="
        flex
        h-full
        w-full
        flex-col
        bg-white
        dark:bg-[#0D111A]
      "
    >
      {/* Logo */}

      <div className="border-b border-slate-200 p-6 dark:border-[#1D2738]">
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Enterprise CRM
        </h1>

        <p className="mt-1 text-xs font-medium text-purple-600 dark:text-purple-400">
          AI Powered Platform v2.0
        </p>
      </div>

      {/* Navigation */}

      <nav
        className="
          flex-1
          space-y-8
          overflow-y-auto
          px-4
          py-6
        "
      >
        {navigationConfig.map((group) => (
          <SidebarGroup
            key={group.id}
            group={group}
          />
        ))}
      </nav>

      <SidebarFooter />
    </aside>
  );
}