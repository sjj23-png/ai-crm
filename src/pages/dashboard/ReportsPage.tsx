
import { Card } from "@/design-system/components/data-display/Card";

export default function ReportsPage() {
  const metrics = [
    { label: "Total Revenue Generated", value: "₹51,50,000", change: "+14.2%" },
    { label: "Avg Sales Cycle Time", value: "18 Days", change: "-2.5 Days" },
    { label: "Lead Conversion Rate", value: "32.8%", change: "+4.1%" },
    { label: "Active Pipeline Value", value: "₹1,20,000,000", change: "+18.0%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Analytics & Performance Reports
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Real-time sales insights, win rates, and organization revenue analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {metrics.map((m, idx) => (
          <Card key={idx} className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-sm p-5 space-y-2">
            <span className="text-xs text-slate-500 font-medium">{m.label}</span>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-slate-50">{m.value}</div>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{m.change} vs last month</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
