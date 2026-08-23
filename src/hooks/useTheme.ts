/**
 * useTheme Hook
 * Access theme values and tokens throughout the application
 * 
 * Usage:
 * const theme = useTheme();
 * const primaryColor = theme.colors.primary[500];
 * const spacing = theme.spacing.md;
 */





export { useTheme } from "../design-system/theme/use-theme";
export type { ThemeContextValue } from "../design-system/theme/theme.context";
export { useTheme as default } from "../design-system/theme/use-theme";