



import type {
  InputHTMLAttributes,
  Ref,
} from "react";

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "type"
  > {
  label?: string;

  helperText?: string;

  error?: string;

  ref?: Ref<HTMLInputElement>;
}