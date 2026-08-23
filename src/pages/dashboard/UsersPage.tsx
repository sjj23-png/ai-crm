import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/design-system/components/data-display/Card";
import { Button } from "@/design-system/components/buttons/Button";
import { Input } from "@/design-system/components/base/Input";

export default function UsersPage() {
  const [users, setUsers] = useState([
    { id: "1", name: "Rahul Sharma", email: "rahul@acme.com", role: "Owner / Admin", status: "Active" },
    { id: "2", name: "Priya Patel", email: "priya@acme.com", role: "Sales Manager", status: "Active" },
    { id: "3", name: "Amit Kumar", email: "amit@acme.com", role: "Sales Rep", status: "Pending Invite" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Sales Rep");

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const newUser = {
      id: String(Date.now()),
      name,
      email,
      role,
      status: "Active",
    };

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            User Management
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Manage your organization members, access permissions, and status.
          </p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl px-4 py-2"
        >
          + Invite User
        </Button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">Invite New User</h3>
            <form onSubmit={handleAddUser} className="space-y-4">
              <Input
                label="Full Name"
                placeholder="e.g. Anish Malhotra"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="e.g. anish@acme.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Assign Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="Sales Rep">Sales Rep</option>
                  <option value="Sales Manager">Sales Manager</option>
                  <option value="Administrator">Administrator</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Button variant="ghost" type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Send Invitation
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Card className="border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Organization Users ({users.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
              <thead className="border-b border-slate-200 dark:border-slate-800 text-xs uppercase bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="px-4 py-3.5 font-medium text-slate-900 dark:text-slate-100">{u.name}</td>
                    <td className="px-4 py-3.5">{u.email}</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                        {u.role}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${u.status === "Active" ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300"}`}>
                        {u.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right font-medium">
                      <button
                        onClick={() => setUsers(users.filter(x => x.id !== u.id))}
                        className="text-red-600 hover:text-red-700 dark:text-red-400 hover:underline"
                      >
                        Remove
                      </button>
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
