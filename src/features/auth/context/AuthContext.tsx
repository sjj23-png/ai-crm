import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import authService from "../services";

import type {
  AuthUser,
  LoginRequest,
} from "../../../types/auth";

interface AuthContextValue {
  user: AuthUser | null;

  isAuthenticated: boolean;

  isLoading: boolean;

  login: (
    credentials: LoginRequest
  ) => Promise<void>;

  logout: () => Promise<void>;

  refreshUser: () => Promise<void>;
}

export const AuthContext =
  createContext<AuthContextValue | null>(
    null
  );

interface Props {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: Props) {
  const [user, setUser] =
    useState<AuthUser | null>(
      authService.getUser()
    );

  const [isLoading, setIsLoading] =
    useState(true);

  const refreshUser =
    useCallback(async () => {
      try {
        const profile =
          await authService.me();

        setUser(profile);
      } catch {
        setUser(null);
      }
    }, []);

  const login =
    useCallback(
      async (
        credentials: LoginRequest
      ) => {
        const result =
          await authService.login(
            credentials
          );

        setUser(result.user);
      },
      []
    );

  const logout =
    useCallback(async () => {
      await authService.logout();

      setUser(null);
    }, []);

  useEffect(() => {
    const initialize =
      async () => {
        if (
          authService.isAuthenticated()
        ) {
          await refreshUser();
        }

        setIsLoading(false);
      };

    void initialize();
  }, [refreshUser]);

  const value = useMemo(
    () => ({
      user,

      isLoading,

      isAuthenticated:
        !!user,

      login,

      logout,

      refreshUser,
    }),
    [
      user,
      isLoading,
      login,
      logout,
      refreshUser,
    ]
  );

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
}