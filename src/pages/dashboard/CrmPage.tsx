import { Card } from "@/design-system/components/data-display/Card";

export default function CrmPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          CRM Operations Hub
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Access leads, contacts, deals, tasks, and sales activities in one view.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-sm p-5 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">Leads & Prospects</h3>
          <p className="text-xs text-slate-500">Capture, score, and qualify inbound leads.</p>
        </Card>
        <Card className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-sm p-5 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">Client Accounts</h3>
          <p className="text-xs text-slate-500">Manage companies and decision makers.</p>
        </Card>
        <Card className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-sm p-5 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">Kanban Pipelines</h3>
          <p className="text-xs text-slate-500">Drag and drop deals across custom stages.</p>
        </Card>
      </div>
    </div>
  );
}
