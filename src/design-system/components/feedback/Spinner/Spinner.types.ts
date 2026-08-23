import type {
  HTMLAttributes,
  Ref,
} from "react";

export type SpinnerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;

  label?: string;

  ref?: Ref<HTMLDivElement>;
}