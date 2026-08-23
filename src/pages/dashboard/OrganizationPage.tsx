import { useState } from "react";
import { useOrganization } from "@/features/organization/hooks/useOrganization";
import { DepartmentForm } from "@/features/organization/components/DepartmentForm";
import { DesignationForm } from "@/features/organization/components/DesignationForm";
import { TeamForm } from "@/features/organization/components/TeamForm";
import { UserMappingForm } from "@/features/organization/components/UserMappingForm";
import { OrgChart } from "@/features/organization/components/OrgChart";
import { Button } from "@/design-system/components/buttons/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/design-system/components/data-display/Card";
import {
  Plus,
  Edit2,
  Trash2,
  Building2,
  Briefcase,
  Users2,
  GitBranch,
  Settings,
} from "lucide-react";

type ActiveTab = "departments" | "designations" | "teams" | "users" | "hierarchy";

export default function OrganizationPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("departments");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"department" | "designation" | "team" | "user" | null>(null);
  const [editingItem, setEditingItem] = useState<any>(null);

  const {
    departments,
    designations,
    teams,
    users,
    deleteDepartment,
    deleteDesignation,
    deleteTeam,
    isDepartmentsLoading,
    isDesignationsLoading,
    isTeamsLoading,
    isUsersLoading,
  } = useOrganization();

  const handleEdit = (type: "department" | "designation" | "team" | "user", item: any) => {
    setEditingItem(item);
    setModalType(type);
    setModalOpen(true);
  };

  const handleCreate = (type: "department" | "designation" | "team") => {
    setEditingItem(null);
    setModalType(type);
    setModalOpen(true);
  };

  const handleDelete = async (type: "department" | "designation" | "team", id: string) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) return;
    try {
      if (type === "department") await deleteDepartment(id);
      if (type === "designation") await deleteDesignation(id);
      if (type === "team") await deleteTeam(id);
    } catch (error: any) {
      alert(error.response?.data?.message || error.message || "Deletion failed.");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
    setEditingItem(null);
  };

  // Helper to match department name
  const getDeptName = (id: string) => {
    return departments.find((d) => d.id === id)?.name || "Unassigned";
  };

  // Helper to match user name
  const getUserName = (id?: string | null) => {
    if (!id) return "-";
    return users.find((u) => u.id === id)?.name || "Unknown";
  };

  // Helper to match designation name
  const getDesignationName = (id?: string | null) => {
    if (!id) return "Unassigned";
    return designations.find((d) => d.id === id)?.name || "Unassigned";
  };

  // Helper to match team name
  const getTeamName = (id?: string | null) => {
    if (!id) return "Unassigned";
    return teams.find((t: any) => t.id === id)?.name || "Unassigned";
  };

  const tabItems = [
    { id: "departments" as ActiveTab, label: "Departments", icon: Building2 },
    { id: "designations" as ActiveTab, label: "Designations", icon: Briefcase },
    { id: "teams" as ActiveTab, label: "Teams", icon: Users2 },
    { id: "users" as ActiveTab, label: "User Assignment", icon: Settings },
    { id: "hierarchy" as ActiveTab, label: "Reporting Hierarchy", icon: GitBranch },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-neutral-200 dark:border-neutral-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Organization Settings
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Manage your company departments, designations, teams, reporting lines, and user structures.
          </p>
        </div>
        
        {activeTab !== "users" && activeTab !== "hierarchy" && (
          <Button
            variant="primary"
            onClick={() => handleCreate(activeTab.slice(0, -1) as any)}
          >
            <Plus size={16} className="mr-1.5 inline-block" /> Create {activeTab.charAt(0).toUpperCase() + activeTab.slice(1, -1)}
          </Button>
        )}
      </div>

      {/* Tabs Menu */}
      <div className="flex border-b border-neutral-200 dark:border-neutral-800 overflow-x-auto whitespace-nowrap">
        {tabItems.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-all ${
                isActive
                  ? "border-primary-500 text-primary-600 dark:text-primary-400"
                  : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Tab Contents */}
      <div className="mt-6">
        {/* DEPARTMENTS TAB */}
        {activeTab === "departments" && (
          <Card>
            <CardHeader className="p-4 border-b border-neutral-200 dark:border-neutral-800">
              <CardTitle className="text-base font-semibold">Departments List</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {isDepartmentsLoading ? (
                <div className="flex items-center justify-center p-8">Loading...</div>
              ) : departments.length === 0 ? (
                <div className="p-8 text-center text-sm text-neutral-500">No departments found. Create one to get started.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Name</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Code</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                      {departments.map((dept) => (
                        <tr key={dept.id} className="hover:bg-neutral-50/55 dark:hover:bg-neutral-900/30">
                          <td className="p-4 font-medium text-neutral-900 dark:text-neutral-100">{dept.name}</td>
                          <td className="p-4">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                              {dept.code}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => handleEdit("department", dept)}
                                className="p-1 text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400"
                              >
                                <Edit2 size={16} />
                              </button>
                              <button
                                onClick={() => handleDelete("department", dept.id)}
                                className="p-1 text-neutral-500 hover:text-red-600 dark:hover:text-red-400"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* DESIGNATIONS TAB */}
        {activeTab === "designations" && (
          <Card>
            <CardHeader className="p-4 border-b border-neutral-200 dark:border-neutral-800">
              <CardTitle className="text-base font-semibold">Designations List</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {isDesignationsLoading ? (
                <div className="flex items-center justify-center p-8">Loading...</div>
              ) : designations.length === 0 ? (
                <div className="p-8 text-center text-sm text-neutral-500">No designations found. Create one to get started.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Name</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Code</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Description</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                      {designations.map((desig) => (
                        <tr key={desig.id} className="hover:bg-neutral-50/55 dark:hover:bg-neutral-900/30">
                          <td className="p-4 font-medium text-neutral-900 dark:text-neutral-100">{desig.name}</td>
                          <td className="p-4">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                              {desig.code}
                            </span>
                          </td>
                          <td className="p-4 text-neutral-500 truncate max-w-xs">{desig.description || "-"}</td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => handleEdit("designation", desig)}
                                className="p-1 text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400"
                              >
                                <Edit2 size={16} />
                              </button>
                              <button
                                onClick={() => handleDelete("designation", desig.id)}
                                className="p-1 text-neutral-500 hover:text-red-600 dark:hover:text-red-400"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* TEAMS TAB */}
        {activeTab === "teams" && (
          <Card>
            <CardHeader className="p-4 border-b border-neutral-200 dark:border-neutral-800">
              <CardTitle className="text-base font-semibold">Teams List</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {isTeamsLoading ? (
                <div className="flex items-center justify-center p-8">Loading...</div>
              ) : teams.length === 0 ? (
                <div className="p-8 text-center text-sm text-neutral-500">No teams found. Create one to get started.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Name</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Code</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Department</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Team Lead</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                      {teams.map((team: any) => (
                        <tr key={team.id} className="hover:bg-neutral-50/55 dark:hover:bg-neutral-900/30">
                          <td className="p-4 font-medium text-neutral-900 dark:text-neutral-100">{team.name}</td>
                          <td className="p-4">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                              {team.code}
                            </span>
                          </td>
                          <td className="p-4 text-neutral-700 dark:text-neutral-300">{getDeptName(team.departmentId)}</td>
                          <td className="p-4 text-neutral-700 dark:text-neutral-300">{getUserName(team.leadId)}</td>
                          <td className="p-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => handleEdit("team", team)}
                                className="p-1 text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400"
                              >
                                <Edit2 size={16} />
                              </button>
                              <button
                                onClick={() => handleDelete("team", team.id)}
                                className="p-1 text-neutral-500 hover:text-red-600 dark:hover:text-red-400"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* USER ASSIGNMENT TAB */}
        {activeTab === "users" && (
          <Card>
            <CardHeader className="p-4 border-b border-neutral-200 dark:border-neutral-800">
              <CardTitle className="text-base font-semibold">User Organization Mappings</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {isUsersLoading ? (
                <div className="flex items-center justify-center p-8">Loading...</div>
              ) : users.length === 0 ? (
                <div className="p-8 text-center text-sm text-neutral-500">No users found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">User</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Department</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Designation</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Team</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300">Reporting Manager</th>
                        <th className="p-4 font-semibold text-neutral-600 dark:text-neutral-300 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-neutral-50/55 dark:hover:bg-neutral-900/30">
                          <td className="p-4">
                            <div className="font-medium text-neutral-900 dark:text-neutral-100">{user.name}</div>
                            <div className="text-xs text-neutral-500 truncate max-w-xs">{user.email}</div>
                          </td>
                          <td className="p-4 text-neutral-700 dark:text-neutral-300">{getDeptName(user.departmentId || "")}</td>
                          <td className="p-4 text-neutral-700 dark:text-neutral-300">{getDesignationName(user.designationId)}</td>
                          <td className="p-4 text-neutral-700 dark:text-neutral-300">{getTeamName(user.teamId)}</td>
                          <td className="p-4 text-neutral-700 dark:text-neutral-300">{getUserName(user.managerId)}</td>
                          <td className="p-4 text-right">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => handleEdit("user", user)}
                            >
                              Assign
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* REPORTING HIERARCHY / ORG CHART TAB */}
        {activeTab === "hierarchy" && (
          <Card>
            <CardHeader className="p-4 border-b border-neutral-200 dark:border-neutral-800">
              <CardTitle className="text-base font-semibold">Reporting Hierarchy Tree</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <OrgChart />
            </CardContent>
          </Card>
        )}
      </div>

      {/* Modal Dialog */}
      {modalOpen && modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 w-full max-w-lg shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 font-bold"
            >
              ✕
            </button>
            {modalType === "department" && (
              <DepartmentForm onClose={closeModal} initialData={editingItem} />
            )}
            {modalType === "designation" && (
              <DesignationForm onClose={closeModal} initialData={editingItem} />
            )}
            {modalType === "team" && (
              <TeamForm onClose={closeModal} initialData={editingItem} />
            )}
            {modalType === "user" && (
              <UserMappingForm onClose={closeModal} user={editingItem} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
