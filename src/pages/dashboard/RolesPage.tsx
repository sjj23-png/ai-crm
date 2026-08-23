import React, { useState } from "react";
import { Card } from "@/design-system/components/data-display/Card";
import { Button } from "@/design-system/components/buttons/Button";
import { Input } from "@/design-system/components/base/Input";

export default function RolesPage() {
  const [roles, setRoles] = useState([
    { id: "1", name: "Administrator", code: "ADMIN", description: "Full system access across all workspace resources", usersCount: 1 },
    { id: "2", name: "Sales Manager", code: "SALES_MGR", description: "Can manage team pipelines, leads, and view reports", usersCount: 2 },
    { id: "3", name: "Sales Executive", code: "SALES_REP", description: "Access to assigned deals, companies, contacts, and tasks", usersCount: 5 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [activeConfigRole, setActiveConfigRole] = useState<string | null>(null);

  const handleAddRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !code) return;

    const newRole = {
      id: String(Date.now()),
      name,
      code: code.toUpperCase(),
      description,
      usersCount: 0,
    };

    setRoles([...roles, newRole]);
    setName("");
    setCode("");
    setDescription("");
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Roles & RBAC Permissions
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Configure role access levels, feature scopes, and security permissions.
          </p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl px-4 py-2"
        >
          + Create Custom Role
        </Button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Create New Role</h3>
            <form onSubmit={handleAddRole} className="space-y-4">
              <Input
                label="Role Title"
                placeholder="e.g. Regional Support Spec"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="Role Code"
                placeholder="e.g. SUPPORT_SPEC"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Role responsibilities and scope..."
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Button variant="ghost" type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Save Role
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((r) => (
          <Card key={r.id} className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-sm p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase px-2.5 py-1 rounded-md bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                {r.code}
              </span>
              <span className="text-xs text-slate-500">{r.usersCount} Assigned Users</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{r.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{r.description}</p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setActiveConfigRole(activeConfigRole === r.id ? null : r.id)}
                className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:underline"
              >
                {activeConfigRole === r.id ? "Hide Permissions" : "Configure Permissions"}
              </button>
            </div>
            {activeConfigRole === r.id && (
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl space-y-2 text-xs">
                <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <input type="checkbox" defaultChecked /> Read & Write Deals
                </label>
                <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <input type="checkbox" defaultChecked /> Manage Contacts & Companies
                </label>
                <label className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <input type="checkbox" defaultChecked={r.code === "ADMIN"} /> System Settings & Billing
                </label>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
