import type { ButtonProps } from "./Button.types";
import { cn } from "@/lib/utils/cn";


import {
  baseClasses,
  sizeClasses,
  variantClasses,
} from "./Button.styles";

export function Button({
  variant = "primary",

  size = "md",

  loading = false,

  fullWidth = false,

  leftIcon,

  rightIcon,

  className = "",

  children,

  disabled,

  ref,

  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        baseClasses,

        variantClasses[variant],

        sizeClasses[size],

        fullWidth && "w-full",

        className,
      )}
      {...props}
    >
      {loading ? (
        <span className="animate-pulse">
          Loading...
        </span>
      ) : (
        <>
          {leftIcon}

          <span>{children}</span>

          {rightIcon}
        </>
      )}
    </button>
  );
}