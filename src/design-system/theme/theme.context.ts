import { createContext } from "react";

import type { Theme } from "./theme.types";

export interface ThemeContextValue {
  theme: Theme;

  isDark: boolean;

  toggleTheme: () => void;

  setTheme: (mode: "light" | "dark") => void;
}

export const ThemeContext =
  createContext<ThemeContextValue | null>(null);