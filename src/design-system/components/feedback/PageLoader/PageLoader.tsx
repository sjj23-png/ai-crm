import { Spinner } from "../Spinner/Spinner";
import { useTheme } from "../../../theme/use-theme";
import type { PageLoaderProps } from "./PageLoader.types";

export function PageLoader({
  message = "Loading...",
  backdrop = true,
  className = "",
}: PageLoaderProps) {
  const { theme, isDark } = useTheme();

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[950] ${
        backdrop ? "" : ""
      } ${className}`}
      style={{
        backgroundColor: backdrop
          ? "rgba(0, 0, 0, 0.5)"
          : "transparent",
      }}
    >
      <div
        className="rounded-lg p-8 flex flex-col items-center gap-4"
        style={{
          backgroundColor: theme.colors.surface,
          boxShadow: isDark
            ? "0 10px 30px rgba(0, 0, 0, 0.5)"
            : "0 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Spinner size="lg" variant="primary" />
        {message && (
          <p
            className="text-sm font-medium"
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
