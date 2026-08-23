
import { Card, CardHeader, CardTitle, CardContent } from "@/design-system/components/data-display/Card";
import { Button } from "@/design-system/components/buttons/Button";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          CRM Workspace Settings
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Configure security policies, email integrations, and system defaults.
        </p>
      </div>

      <Card className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            System Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Two-Factor Authentication (2FA)</h4>
              <p className="text-xs text-slate-500">Require 2FA verification for all tenant administrator accounts.</p>
            </div>
            <Button variant="outline" className="text-xs px-3 py-1">Configure</Button>
          </div>
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Email Integration (SMTP)</h4>
              <p className="text-xs text-slate-500">Send outgoing client emails via custom domain SMTP gateway.</p>
            </div>
            <Button variant="outline" className="text-xs px-3 py-1">Active</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
