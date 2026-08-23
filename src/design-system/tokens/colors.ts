export const colors = {
  light: {
    primary: "#6D5DFB",
    secondary: "#8B5CF6",

    accent: "#4F46E5",

    background: "#F8FAFC",
    surface: "#FFFFFF",
    surfaceSecondary: "#F1F5F9",

    border: "#E2E8F0",

    textPrimary: "#0F172A",
    textSecondary: "#475569",
    textMuted: "#94A3B8",

    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
    info: "#3B82F6",

    aiPrimary: "#7C3AED",
    aiSecondary: "#3B82F6",
    aiGlow: "#A855F7",
  },

  dark: {
    primary: "#8B5CF6",
    secondary: "#A855F7",

    accent: "#7C3AED",

    background: "#0F172A",
    surface: "#111827",
    surfaceSecondary: "#1F2937",

    border: "#374151",

    textPrimary: "#F8FAFC",
    textSecondary: "#CBD5E1",
    textMuted: "#64748B",

    success: "#22C55E",
    warning: "#FBBF24",
    danger: "#F87171",
    info: "#60A5FA",

    aiPrimary: "#A855F7",
    aiSecondary: "#60A5FA",
    aiGlow: "#C084FC",
  },
} as const;

export type ColorTokens = typeof colors;