



import type {
  IconButtonSize,
  IconButtonVariant,
} from "./IconButton.types";

export const baseClasses =
  "inline-flex items-center justify-center transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

export const variantClasses: Record<
  IconButtonVariant,
  string
> = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-700",

  secondary:
    "bg-slate-200 text-slate-900 hover:bg-slate-300",

  outline:
    "border border-slate-300 bg-transparent hover:bg-slate-100",

  ghost:
    "bg-transparent hover:bg-slate-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700",
};

export const sizeClasses: Record<
  IconButtonSize,
  string
> = {
  xs: "w-8 h-8 rounded-md",

  sm: "w-9 h-9 rounded-lg",

  md: "w-11 h-11 rounded-xl",

  lg: "w-12 h-12 rounded-xl",

  xl: "w-14 h-14 rounded-2xl",
};