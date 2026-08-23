import type { TextareaSize } from "./Textarea.types";


export const wrapperClasses =
  "flex flex-col gap-2";

export const labelClasses =
  "text-sm font-medium text-slate-700 dark:text-slate-300";

export const helperClasses =
  "text-xs text-slate-500";

export const errorClasses =
  "text-xs text-red-500";

export const baseTextareaClasses =
  "w-full resize-none border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 disabled:opacity-50 disabled:cursor-not-allowed";

export const sizeClasses: Record<
  TextareaSize,
  string
> = {
  sm: "rounded-lg px-3 py-2 text-sm",

  md: "rounded-xl px-4 py-3 text-sm",

  lg: "rounded-xl px-5 py-4 text-base",
};