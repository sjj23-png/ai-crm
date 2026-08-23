import type { KPICardProps } from "./KPICard.types";


export default function KPICard({
  item,
}: KPICardProps) {
  const Icon = item.icon;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-[#263247] bg-white dark:bg-[#111827] hover:dark:bg-[#151C2B] p-5 shadow-sm transition-all duration-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-[#94A3B8]">
            {item.title}
          </p>

          <h3 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            {item.value}
          </h3>
        </div>

        <div className="rounded-xl bg-purple-100 dark:bg-[#211A3D] p-3 text-purple-700 dark:text-[#A78BFA] transition-colors">
          <Icon size={22} />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-100 dark:bg-[#10291C] text-emerald-700 dark:text-[#22C55E] border border-emerald-200/50 dark:border-emerald-900/30">
          {item.trend}
        </span>

        <span className="text-xs text-slate-500 dark:text-[#94A3B8]">
          {item.description}
        </span>
      </div>
    </div>
  );
}