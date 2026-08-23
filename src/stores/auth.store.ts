import { create } from "zustand";


export interface CurrentUser {
  id: string;
  name: string;
  email: string;

  role: string;

  companyId?: string;

  avatar?: string;
}

interface AuthState {
  user: CurrentUser | null;

  initialized: boolean;

  setUser: (user: CurrentUser | null) => void;

  clearUser: () => void;

  setInitialized: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  initialized: false,

  setUser: (user) =>
    set({
      user,
    }),

  clearUser: () =>
    set({
      user: null,
    }),

  setInitialized: (initialized) =>
    set({
      initialized,
    }),
}));