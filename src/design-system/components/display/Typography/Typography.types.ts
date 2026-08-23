



import type {
  HTMLAttributes,
  ReactNode,
  ElementType,
  Ref,
} from "react";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption"
  | "label";

export type TypographyWeight =
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

export interface TypographyProps
  extends HTMLAttributes<HTMLElement> {
  as?: ElementType;

  variant?: TypographyVariant;

  weight?: TypographyWeight;

  truncate?: boolean;

  children: ReactNode;

  ref?: Ref<HTMLElement>;
}