export type SkeletonVariant = "text" | "circle" | "rectangular" | "card";

export interface SkeletonProps {
  /** Skeleton variant */
  variant?: SkeletonVariant;

  /** Width */
  width?: string | number;

  /** Height */
  height?: string | number;

  /** Border radius */
  borderRadius?: string;

  /** Show animation */
  animated?: boolean;

  /** Number of lines (for text variant) */
  lines?: number;

  /** Custom className */
  className?: string;
}
