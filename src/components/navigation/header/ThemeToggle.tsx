import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/design-system/theme";

export default function ThemeToggle() {
  const { isDark, toggleTheme } =
    useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        transition-colors
        hover:bg-neutral-100
        dark:hover:bg-neutral-800
      "
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}