import type {
  HTMLAttributes,
  ReactNode,
  Ref,
} from "react";

export type AlertVariant =
  | "info"
  | "success"
  | "warning"
  | "error";

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;

  title?: string;

  icon?: ReactNode;

  children?: ReactNode;

  closable?: boolean;

  onClose?: () => void;

  ref?: Ref<HTMLDivElement>;
}