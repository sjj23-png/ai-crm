


import type {
  AvatarSize,
  AvatarStatus,
} from "./Avatar.types";

export const wrapperClasses =
  "relative inline-flex shrink-0 overflow-hidden items-center justify-center bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white font-semibold select-none";

export const imageClasses =
  "h-full w-full object-cover";

export const fallbackClasses =
  "flex items-center justify-center h-full w-full";

export const sizeClasses: Record<
  AvatarSize,
  string
> = {
  xs: "h-8 w-8 text-xs",

  sm: "h-10 w-10 text-sm",

  md: "h-12 w-12 text-base",

  lg: "h-16 w-16 text-lg",

  xl: "h-20 w-20 text-xl",
};

export const statusClasses: Record<
  AvatarStatus,
  string
> = {
  online:
    "bg-emerald-500",

  offline:
    "bg-slate-400",

  busy:
    "bg-red-500",

  away:
    "bg-amber-500",

  none:
    "hidden",
};