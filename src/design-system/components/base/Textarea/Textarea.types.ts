



import type {
  ReactNode,
  Ref,
  TextareaHTMLAttributes,
} from "react";

export type TextareaSize =
  | "sm"
  | "md"
  | "lg";

export interface TextareaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "rows"
  > {
  label?: string;

  helperText?: string;

  error?: string;

  rows?: number;

  size?: TextareaSize;

  fullWidth?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  ref?: Ref<HTMLTextAreaElement>;
}