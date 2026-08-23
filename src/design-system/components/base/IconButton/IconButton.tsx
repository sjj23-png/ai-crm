import type { IconButtonProps } from "./IconButton.types";
import { cn } from "@/lib/utils/cn";


import {
  baseClasses,
  variantClasses,
  sizeClasses,
} from "./IconButton.styles";

export function IconButton({
  icon,

  variant = "primary",

  size = "md",

  loading = false,

  disabled,

  className = "",

  ref,

  ...props
}: IconButtonProps) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        baseClasses,

        variantClasses[variant],

        sizeClasses[size],

        className,
      )}
      {...props}
    >
      {loading ? (
        <span className="animate-spin">
          ⟳
        </span>
      ) : (
        icon
      )}
    </button>
  );
}