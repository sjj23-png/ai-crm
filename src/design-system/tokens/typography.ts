export const typography = {
  fontFamily: {
    sans: [
      "Inter",
      "system-ui",
      "sans-serif",
    ],

    mono: [
      "JetBrains Mono",
      "monospace",
    ],
  },

  fontSize: {
    xs: "12px",

    sm: "14px",

    md: "16px",

    lg: "18px",

    xl: "20px",

    "2xl": "24px",

    "3xl": "30px",

    "4xl": "36px",

    "5xl": "48px",
  },

  fontWeight: {
    regular: 400,

    medium: 500,

    semibold: 600,

    bold: 700,
  },

  lineHeight: {
    tight: 1.2,

    normal: 1.5,

    relaxed: 1.7,
  },

  letterSpacing: {
    tighter: "-0.04em",

    tight: "-0.02em",

    normal: "0",

    wide: "0.02em",
  },
} as const;

export type TypographyTokens = typeof typography;