import type { AlertVariant } from "./Alert.types";


export const wrapperClasses =
  "flex items-start gap-3 rounded-xl border p-4";

export const iconClasses =
  "mt-0.5 shrink-0";

export const contentClasses =
  "flex-1";

export const titleClasses =
  "mb-1 font-semibold";

export const bodyClasses =
  "text-sm leading-6";

export const closeButtonClasses =
  "ml-2 rounded-md p-1 transition-colors hover:bg-black/5 dark:hover:bg-white/10";

export const variantClasses: Record<
  AlertVariant,
  string
> = {
  info:
    "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200",

  success:
    "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200",

  warning:
    "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200",

  error:
    "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-200",
};