



import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { ThemeContext } from "./theme.context";
import { lightTheme } from "./light.theme";
import { darkTheme } from "./dark.theme";


type ThemeMode = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "ai-crm-theme";

export function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === "light" || saved === "dark") {
      return saved;
    }

    return window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode);

    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(mode);
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prev) =>
      prev === "light"
        ? "dark"
        : "light"
    );
  }, []);

  const setTheme = useCallback(
    (theme: ThemeMode) => {
      setMode(theme);
    },
    []
  );

  const value = useMemo(
    () => ({
      theme:
        mode === "light"
          ? lightTheme
          : darkTheme,

      isDark: mode === "dark",

      toggleTheme,

      setTheme,
    }),
    [mode, toggleTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}