import type {
  ProgressProps,
} from "./Progress.types";
import { cn } from "@/lib/utils/cn";

import {
  wrapperClasses,
  trackClasses,
  fillClasses,
  valueClasses,
} from "./Progress.styles";

export function Progress({
  value,

  max = 100,

  showValue = false,

  animated = true,

  className = "",

  ref,

  ...props
}: ProgressProps) {
  const percentage = Math.min(
    Math.max((value / max) * 100, 0),
    100
  );

  return (
    <div
      ref={ref}
      className={cn(
        wrapperClasses,
        className,
      )}
      {...props}
    >
      <div
        className={trackClasses}
      >
        <div
          className={cn(
            fillClasses,
            animated && "transition-all duration-500",
          )}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      {showValue && (
        <span className={valueClasses}>
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
}