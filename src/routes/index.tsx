



import {
  Routes,
  Route,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import PublicRoute from "./PublicRoute";

function DashboardPage() {
  return <h1>Dashboard</h1>;
}

function LoginPage() {
  return <h1>Login</h1>;
}

function NotFoundPage() {
  return <h1>404</h1>;
}

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<PublicRoute />}>

        <Route
          path="/login"
          element={<LoginPage />}
        />

      </Route>

      <Route element={<ProtectedRoute />}>

        <Route
          path="/"
          element={<DashboardPage />}
        />

      </Route>

      <Route
        path="*"
        element={<NotFoundPage />}
      />

    </Routes>
  );
}