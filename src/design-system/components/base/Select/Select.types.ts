



import type {
  ReactNode,
  Ref,
  SelectHTMLAttributes,
} from "react";

export type SelectSize =
  | "sm"
  | "md"
  | "lg";

export interface SelectOption {
  label: string;

  value: string;

  disabled?: boolean;
}

export interface SelectProps
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "size"
  > {
  label?: string;

  helperText?: string;

  error?: string;

  options: SelectOption[];

  placeholder?: string;

  size?: SelectSize;

  fullWidth?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  ref?: Ref<HTMLSelectElement>;
}