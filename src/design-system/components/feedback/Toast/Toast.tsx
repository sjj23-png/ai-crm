import { useEffect, useState } from "react";
import type { ToastProps } from "./Toast.types";
import { useTheme } from "../../../theme/use-theme";

const variantStyles = {
  success: {
    borderKey: "success" as const,
    textKey: "textPrimary" as const,
  },
  error: {
    borderKey: "danger" as const,
    textKey: "textPrimary" as const,
  },
  warning: {
    borderKey: "warning" as const,
    textKey: "textPrimary" as const,
  },
  info: {
    borderKey: "info" as const,
    textKey: "textPrimary" as const,
  },
};

const positionStyles = {
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
};

export function Toast({
  variant = "info",
  title,
  message,
  position = "bottom-right",
  duration = 5000,
  closeable = true,
  onClose,
  className = "",
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    if (duration === null) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const styles = variantStyles[variant];

  return (
    <div
      role="status"
      className={`
        fixed z-[800] ${positionStyles[position]}
        rounded-lg border-l-4 shadow-lg p-4
        max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-300
        ${className}
      `}
      style={{
        backgroundColor: theme.colors.surface,
        borderLeftColor: theme.colors[styles.borderKey],
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          {title && (
            <h4
              className="font-semibold mb-1"
              style={{
                color: theme.colors[styles.textKey],
              }}
            >
              {title}
            </h4>
          )}
          <p
            className="text-sm"
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            {message}
          </p>
        </div>
        {closeable && (
          <button
            onClick={handleClose}
            className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Close toast"
            style={{
              color: theme.colors.textSecondary,
            }}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
