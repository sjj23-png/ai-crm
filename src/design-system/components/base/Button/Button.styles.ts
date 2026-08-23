import type {
  ButtonSize,
  ButtonVariant,
} from "./Button.types";

export const baseClasses =
  "inline-flex items-center justify-center font-medium transition-all duration-200 select-none disabled:pointer-events-none disabled:opacity-50";

export const variantClasses: Record<
  ButtonVariant,
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

  success:
    "bg-emerald-600 text-white hover:bg-emerald-700",
};

export const sizeClasses: Record<
  ButtonSize,
  string
> = {
  xs: "h-8 px-3 text-xs rounded-md",

  sm: "h-9 px-4 text-sm rounded-lg",

  md: "h-11 px-5 text-sm rounded-xl",

  lg: "h-12 px-6 text-base rounded-xl",

  xl: "h-14 px-8 text-lg rounded-2xl",
};