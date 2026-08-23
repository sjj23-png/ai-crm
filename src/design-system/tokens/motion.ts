export const motion = {
  duration: {
    instant: "100ms",

    fast: "150ms",

    normal: "250ms",

    slow: "400ms",

    slower: "600ms",
  },

  easing: {
    standard: "ease",

    in: "ease-in",

    out: "ease-out",

    inOut: "ease-in-out",

    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",

    spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  scale: {
    hover: 1.02,

    active: 0.98,
  },
} as const;

export type MotionTokens = typeof motion;