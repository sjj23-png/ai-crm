export type ToastVariant = "success" | "error" | "warning" | "info";
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToastProps {
  /** Toast variant */
  variant?: ToastVariant;

  /** Toast title */
  title?: string;

  /** Toast message */
  message: string;

  /** Position on screen */
  position?: ToastPosition;

  /** Duration (ms) before auto-close */
  duration?: number | null;

  /** Show close button */
  closeable?: boolean;

  /** On close callback */
  onClose?: () => void;

  /** Custom className */
  className?: string;
}
