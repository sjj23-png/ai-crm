



import type {
  InputHTMLAttributes,
  ReactNode,
  Ref,
} from "react";

export type InputSize =
  | "sm"
  | "md"
  | "lg";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {
  label?: string;

  helperText?: string;

  error?: string;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  size?: InputSize;

  fullWidth?: boolean;

  required?: boolean;

  ref?: Ref<HTMLInputElement>;
}