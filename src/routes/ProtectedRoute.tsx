



import {
  Navigate,
  Outlet,
} from "react-router-dom";

import { useAuth } from "../features/auth/hooks";

export default function ProtectedRoute() {
  const {
    isAuthenticated,
    isLoading,
  } = useAuth();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <Outlet />;
}