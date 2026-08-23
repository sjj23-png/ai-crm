


import {
  Navigate,
  Outlet,
} from "react-router-dom";

import { useAuth } from "../features/auth/hooks";

export default function PublicRoute() {
  const {
    isAuthenticated,
    isLoading,
  } = useAuth();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isAuthenticated) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return <Outlet />;
}