import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/navigation/sidebar";

import { AppHeader } from "@/components/navigation/header";
export function DashboardLayout() {
  return (
    /* Added text color classes (text-neutral-900 dark:text-neutral-50) so text aligns properly with theme toggles */
    <div className="flex min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090D16] dark:text-slate-50 transition-colors">
      {/* Sidebar */}
      <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:flex dark:border-[#1D2738] dark:bg-[#0D111A] transition-colors">
        <div className="flex w-full flex-col">
          <div className="border-b border-slate-200 p-6 dark:border-[#1D2738]">
            <h2 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-300 bg-clip-text text-transparent">
              Enterprise CRM
            </h2>
          </div>

          <div className="flex-1 p-4">
            <Sidebar/>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-20 h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-[#1D2738] dark:bg-[#0D111A]/80 transition-colors">
          <AppHeader/>
        </header>

        {/* Page */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}