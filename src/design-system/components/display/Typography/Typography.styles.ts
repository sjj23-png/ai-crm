


import type {
  TypographyVariant,
  TypographyWeight,
} from "./Typography.types";

export const variantClasses: Record<
  TypographyVariant,
  string
> = {
  display:
    "text-5xl leading-tight",

  h1:
    "text-4xl leading-tight",

  h2:
    "text-3xl leading-tight",

  h3:
    "text-2xl leading-snug",

  h4:
    "text-xl leading-snug",

  h5:
    "text-lg leading-snug",

  h6:
    "text-base leading-snug",

  "body-lg":
    "text-lg leading-8",

  body:
    "text-base leading-7",

  "body-sm":
    "text-sm leading-6",

  caption:
    "text-xs leading-5",

  label:
    "text-sm leading-none uppercase tracking-wide",
};

export const weightClasses: Record<
  TypographyWeight,
  string
> = {
  regular: "font-normal",

  medium: "font-medium",

  semibold: "font-semibold",

  bold: "font-bold",
};

export const baseClasses =
  "text-slate-900 dark:text-white";