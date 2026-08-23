import { Navigate, Outlet } from "react-router-dom";


import authConfig from "@/config/auth.config";

import authService from "@/features/auth/services";

export default function ProtectedRoute() {
  const isAuthenticated =
    authService.isAuthenticated();

  if (!isAuthenticated) {
    return (
      <Navigate
        to={authConfig.loginRoute}
        replace
      />
    );
  }

  return <Outlet />;
}