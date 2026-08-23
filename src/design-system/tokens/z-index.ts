export const zIndex = {
  base: 1,

  dropdown: 1000,

  sticky: 1010,

  overlay: 1100,

  drawer: 1200,

  modal: 1300,

  popover: 1400,

  tooltip: 1500,

  toast: 1600,

  loading: 1700,
} as const;

export type ZIndexTokens = typeof zIndex;