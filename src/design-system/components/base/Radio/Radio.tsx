import { useId } from "react";
import { cn } from "@/lib/utils/cn";


import type {
  RadioProps,
} from "./Radio.types";

import {
  wrapperClasses,
  containerClasses,
  radioClasses,
  labelClasses,
  helperClasses,
  errorClasses,
} from "./Radio.styles";

export function Radio({
  label,

  helperText,

  error,

  id,

  className = "",

  ref,

  ...props
}: RadioProps) {
  const generatedId = useId();

  const inputId = id ?? generatedId;

  return (
    <div className={wrapperClasses}>
      <div className={containerClasses}>
        <input
          ref={ref}
          id={inputId}
          type="radio"
          className={cn(
            radioClasses,
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