import { Navigate, Route, Routes } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";
import {
  DashboardHome,
  OrganizationPage,
  CompaniesPage,
  ContactsPage,
  UsersPage,
  RolesPage,
  ProjectsPage,
  ReportsPage,
  SettingsPage,
  CrmPage,
} from "@/pages/dashboard";
import GuestRoute from "../guards/GuestRoute";
import ProtectedRoute from "../guards/ProtectedRoute";
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/Signup";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center text-xl font-semibold">
      404 | Page Not Found
    </div>
  );
}

export function AppRouter() {
  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>
      <Route element={<GuestRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<SignupPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="organization" element={<OrganizationPage />} />
          <Route path="companies" element={<CompaniesPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="roles" element={<RolesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="crm" element={<CrmPage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}