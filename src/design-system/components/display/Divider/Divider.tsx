


import type {
  DividerProps,
} from "./Divider.types";
import { cn } from "@/lib/utils/cn";

import {
  wrapperClasses,
  lineClasses,
  orientationClasses,
  variantClasses,
  labelClasses,
} from "./Divider.styles";

export function Divider({
  orientation = "horizontal",

  variant = "solid",

  label,

  className = "",

  ref,

  ...props
}: DividerProps) {
  if (
    orientation === "vertical"
  ) {
    return (
      <hr
        ref={ref}
        aria-orientation="vertical"
        className={cn(
          lineClasses,
          orientationClasses.vertical,
          variantClasses[variant],
          className,
        )}
        {...props}
      />
    );
  }

  if (!label) {
    return (
      <hr
        ref={ref}
        className={cn(
          lineClasses,
          orientationClasses.horizontal,
          variantClasses[variant],
          className,
        )}
        {...props}
      />
    );
  }

  return (
    <div className={wrapperClasses}>
      <hr
        className={cn(
          "flex-1",
          lineClasses,
          orientationClasses.horizontal,
          variantClasses[variant],
        )}
      />

      <span className={labelClasses}>
        {label}
      </span>

      <hr
        className={cn(
          "flex-1",
          lineClasses,
          orientationClasses.horizontal,
          variantClasses[variant],
        )}
      />
    </div>
  );
}