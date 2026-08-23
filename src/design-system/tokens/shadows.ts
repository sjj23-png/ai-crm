/**
 * Shadow Tokens
 * Enterprise AI CRM - Premium SaaS Design System
 * 
 * Premium shadow system for depth and elevation
 * Follows Material Design 3 shadow elevation system
 */

// ============================================================
// SHADOW SCALE (Elevation levels)
// ============================================================
export const shadows = {
  // None
  none: "none",

  // Level 0 (Subtle, almost invisible)
  xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",

  // Level 1 (Very subtle)
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",

  // Level 2 (Subtle)
  base: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",

  // Level 3 (Noticeable)
  md: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",

  // Level 4 (Pronounced)
  lg: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",

  // Level 5 (Significant)
  xl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",

  // Level 6 (Very elevated)
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.35)",

  // Level 7 (Maximum elevation)
  "3xl": "0 30px 60px -15px rgba(0, 0, 0, 0.4)",

  // Inset shadow
  inset: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
} as const;

// ============================================================
// COMPONENT SPECIFIC SHADOWS
// ============================================================
export const componentShadows = {
  // Button Shadows
  button: {
    default: shadows.none,
    hover: shadows.sm,
    active: shadows.xs,
    focus: shadows.md,
  },

  // Card Shadows
  card: {
    default: shadows.sm,
    hover: shadows.md,
    elevated: shadows.lg,
  },

  // Input/Select Shadows
  input: {
    default: shadows.xs,
    focus: shadows.md,
    error: `0 0 0 3px rgba(239, 68, 68, 0.1)`, // Red focus ring
  },

  // Modal/Dialog Shadows
  modal: {
    default: shadows.xl,
    large: shadows["2xl"],
  },

  // Dropdown/Menu Shadows
  dropdown: {
    small: shadows.md,
    medium: shadows.lg,
    large: shadows.xl,
  },

  // Tooltip Shadows
  tooltip: shadows.lg,

  // Popover Shadows
  popover: shadows.lg,

  // Toast/Notification Shadows
  toast: shadows.xl,

  // Floating Action Button Shadows
  fab: {
    default: shadows.lg,
    hover: shadows.xl,
    active: shadows.md,
  },

  // Sidebar Shadows
  sidebar: {
    default: shadows.md,
    over: shadows.lg,
  },

  // Header/Navbar Shadows
  header: {
    default: shadows.sm,
    sticky: shadows.md,
  },

  // Hover States
  hover: shadows.md,

  // Focus Ring (used with border)
  focusRing: {
    light: "0 0 0 3px rgba(0, 132, 255, 0.1)",
    dark: "0 0 0 3px rgba(90, 143, 255, 0.2)",
  },
} as const;

// ============================================================
// SEMANTIC SHADOW TOKENS
// ============================================================
export const semanticShadows = {
  // Flat (No shadow)
  flat: shadows.none,

  // Raised (Subtle elevation)
  raised: shadows.sm,

  // Floating (Noticeable elevation)
  floating: shadows.md,

  // Modal (Prominent elevation)
  modal: shadows.xl,

  // Overlay (Maximum elevation)
  overlay: shadows["2xl"],

  // Focus (Focus ring style)
  focus: `0 0 0 3px rgba(0, 132, 255, 0.1)`,

  // Error
  error: `0 0 0 3px rgba(239, 68, 68, 0.1)`,

  // Success
  success: `0 0 0 3px rgba(34, 197, 94, 0.1)`,

  // Warning
  warning: `0 0 0 3px rgba(245, 158, 11, 0.1)`,
} as const;

// ============================================================
// DARK THEME SHADOWS (Adjusted for dark backgrounds)
// ============================================================
export const darkShadows = {
  none: "none",

  xs: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",

  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)",

  base: "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",

  md: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",

  lg: "0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.4)",

  xl: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",

  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.8)",

  "3xl": "0 30px 60px -15px rgba(0, 0, 0, 0.85)",

  inset: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)",
} as const;
