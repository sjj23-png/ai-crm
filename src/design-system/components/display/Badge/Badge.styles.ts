import type {
  BadgeVariant,
  BadgeSize,
} from "./Badge.types";

export const baseClasses =
  "inline-flex items-center justify-center gap-1 whitespace-nowrap font-medium transition-all";

export const variantClasses: Record<
  BadgeVariant,
  string
> = {
  primary:
    "bg-violet-600 text-white",

  secondary:
    "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-white",

  success:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",

  warning:
    "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",

  danger:
    "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",

  info:
    "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300",

  outline:
    "border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200",
};

export const sizeClasses: Record<
  BadgeSize,
  string
> = {
  sm:
    "text-xs px-2 py-0.5",

  md:
    "text-sm px-2.5 py-1",

  lg:
    "text-base px-3 py-1.5",
};