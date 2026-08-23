



import type {
  HTMLAttributes,
  ReactNode,
  Ref,
} from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "outline";

export type BadgeSize =
  | "sm"
  | "md"
  | "lg";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;

  size?: BadgeSize;

  rounded?: boolean;

  dot?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  ref?: Ref<HTMLSpanElement>;
}