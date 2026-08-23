
import { Card, CardHeader, CardTitle, CardContent } from "@/design-system/components/data-display/Card";
import { Button } from "@/design-system/components/buttons/Button";

export default function ProjectsPage() {
  const projects = [
    { id: "1", title: "Enterprise ERP Rollout", client: "Tata Motors", value: "₹25,00,000", stage: "Proposal Sent", status: "In Progress" },
    { id: "2", title: "Cloud Migration Deal", client: "Reliance Retail", value: "₹18,50,000", stage: "Contract Review", status: "In Review" },
    { id: "3", title: "CRM Customization", client: "Infosys Labs", value: "₹8,00,000", stage: "Closed Won", status: "Completed" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Projects & Active Deals
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track active client projects, deal milestones, and revenue pipeline.
          </p>
        </div>
        <Button variant="primary" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-4 py-2">
          + New Project / Deal
        </Button>
      </div>

      <Card className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Active Projects ({projects.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
              <thead className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="px-4 py-3">Project / Deal Name</th>
                  <th className="px-4 py-3">Client Account</th>
                  <th className="px-4 py-3">Deal Value</th>
                  <th className="px-4 py-3">Stage</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {projects.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="px-4 py-3.5 font-medium text-slate-900 dark:text-slate-100">{p.title}</td>
                    <td className="px-4 py-3.5">{p.client}</td>
                    <td className="px-4 py-3.5 font-semibold text-purple-600 dark:text-purple-400">{p.value}</td>
                    <td className="px-4 py-3.5">{p.stage}</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
