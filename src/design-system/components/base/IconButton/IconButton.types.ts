



import type {
  ButtonHTMLAttributes,
  ReactNode,
  Ref,
} from "react";

export type IconButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type IconButtonSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;

  variant?: IconButtonVariant;

  size?: IconButtonSize;

  loading?: boolean;

  ref?: Ref<HTMLButtonElement>;
}