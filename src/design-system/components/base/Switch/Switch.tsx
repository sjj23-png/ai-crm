import { useId } from "react";
import { cn } from "@/lib/utils/cn";


import type {
  SwitchProps,
} from "./Switch.types";

import {
  wrapperClasses,
  containerClasses,
  labelClasses,
  helperClasses,
  errorClasses,
  inputClasses,
  trackClasses,
  thumbClasses,
} from "./Switch.styles";

export function Switch({
  label,

  helperText,

  error,

  id,

  className = "",

  ref,

  ...props
}: SwitchProps) {
  const generatedId = useId();

  const inputId = id ?? generatedId;

  return (
    <div className={wrapperClasses}>
      <div className={containerClasses}>
        {label && (
          <label
            htmlFor={inputId}
            className={labelClasses}
          >
            {label}
          </label>
        )}

        <label
          htmlFor={inputId}
          className="relative inline-flex cursor-pointer"
        >
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            role="switch"
            className={cn(
              inputClasses,
              className,
            )}
            {...props}
          />

          <div className={trackClasses}>
            <div className={thumbClasses} />
          </div>
        </label>
      </div>

      {error ? (
        <span className={errorClasses}>
          {error}
        </span>
      ) : (
        helperText && (
          <span className={helperClasses}>
            {helperText}
          </span>
        )
      )}
    </div>
  );
}