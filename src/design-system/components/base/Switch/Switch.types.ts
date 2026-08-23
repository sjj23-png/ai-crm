



import type {
  InputHTMLAttributes,
  Ref,
} from "react";

export interface SwitchProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "size"
  > {
  label?: string;

  helperText?: string;

  error?: string;

  ref?: Ref<HTMLInputElement>;
}