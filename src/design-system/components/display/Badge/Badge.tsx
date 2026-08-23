


import type {
  BadgeProps,
} from "./Badge.types";
import { cn } from "@/lib/utils/cn";

import {
  baseClasses,
  variantClasses,
  sizeClasses,
} from "./Badge.styles";

export function Badge({
  variant = "primary",

  size = "md",

  rounded = true,

  dot = false,

  leftIcon,

  rightIcon,

  className = "",

  children,

  ref,

  ...props
}: BadgeProps) {
  return (
    <span
      ref={ref}
      className={cn(
        baseClasses,

        variantClasses[variant],

        sizeClasses[size],

        rounded ? "rounded-full" : "rounded-md",

        className,
      )}
      {...props}
    >
      {dot && (
        <span className="h-2 w-2 rounded-full bg-current opacity-80" />
      )}

      {leftIcon}

      {children}

      {rightIcon}
    </span>
  );
}