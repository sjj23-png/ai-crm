



import type {
  DividerOrientation,
  DividerVariant,
} from "./Divider.types";

export const wrapperClasses =
  "flex items-center";

export const lineClasses =
  "border-slate-200 dark:border-slate-700";

export const orientationClasses: Record<
  DividerOrientation,
  string
> = {
  horizontal:
    "w-full border-t",

  vertical:
    "h-full border-l self-stretch",
};

export const variantClasses: Record<
  DividerVariant,
  string
> = {
  solid:
    "border-solid",

  dashed:
    "border-dashed",

  dotted:
    "border-dotted",
};

export const labelClasses =
  "mx-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400";