


import type {
  CheckboxProps,
} from "./Checkbox.types";
import { useId } from "react";
import { cn } from "@/lib/utils/cn";

import {
  wrapperClasses,
  containerClasses,
  checkboxClasses,
  labelClasses,
  helperClasses,
  errorClasses,
} from "./Checkbox.styles";

export function Checkbox({
  label,

  helperText,

  error,

  id,

  className = "",

  ref,

  ...props
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  
  return (
    <div className={wrapperClasses}>
      <div className={containerClasses}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={cn(
            checkboxClasses,
            className,
          )}
          {...props}
        />

        {label && (
          <label
            htmlFor={inputId}
            className={labelClasses}
          >
            {label}
          </label>
        )}
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