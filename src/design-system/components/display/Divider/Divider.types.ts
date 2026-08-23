



import type {
  HTMLAttributes,
  ReactNode,
  Ref,
} from "react";

export type DividerOrientation =
  | "horizontal"
  | "vertical";

export type DividerVariant =
  | "solid"
  | "dashed"
  | "dotted";

export interface DividerProps
  extends HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation;

  variant?: DividerVariant;

  label?: ReactNode;

  ref?: Ref<HTMLHRElement>;
}