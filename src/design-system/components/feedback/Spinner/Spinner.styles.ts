import type { SpinnerSize } from "./Spinner.types";

export const wrapperClasses =
  "inline-flex flex-col items-center justify-center gap-3";

export const spinnerClasses =
  "animate-spin rounded-full border-2 border-slate-300 border-t-violet-600";

export const labelClasses =
  "text-sm text-slate-500";

export const sizeClasses: Record<
  SpinnerSize,
  string
> = {
  sm: "h-5 w-5",

  md: "h-8 w-8",

  lg: "h-10 w-10",

  xl: "h-14 w-14",
};