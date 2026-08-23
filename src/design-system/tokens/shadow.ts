export const shadow = {
  xs: "0 1px 2px rgba(15,23,42,0.05)",

  sm: "0 2px 4px rgba(15,23,42,0.08)",

  md: "0 6px 12px rgba(15,23,42,0.10)",

  lg: "0 12px 24px rgba(15,23,42,0.12)",

  xl: "0 20px 40px rgba(15,23,42,0.16)",

  glow:
    "0 0 24px rgba(124,58,237,0.30)",

  aiGlow:
    "0 0 36px rgba(139,92,246,0.40)",
} as const;

export type ShadowTokens = typeof shadow;