import type { SelectSize } from "./Select.types";

export const wrapperClasses =
  "flex flex-col gap-2";

export const labelClasses =
  "text-sm font-medium text-slate-700 dark:text-slate-300";

export const helperClasses =
  "text-xs text-slate-500";

export const errorClasses =
  "text-xs text-red-500";

export const baseSelectClasses =
  "w-full appearance-none border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none transition-all duration-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 disabled:opacity-50 disabled:cursor-not-allowed";

export const sizeClasses: Record<
  SelectSize,
  string
> = {
  sm: "h-10 rounded-lg px-3",

  md: "h-11 rounded-xl px-4",

  lg: "h-12 rounded-xl px-5",
};

export const iconClasses =
  "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2";