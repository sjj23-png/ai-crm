import type { InputProps } from "./Input.type";
import { cn } from "@/lib/utils/cn";

import {
  wrapperClasses,
  labelClasses,
  helperClasses,
  errorClasses,
  baseInputClasses,
  sizeClasses,
} from "./Input.styles";

export function Input({
  label,

  helperText,

  error,

  leftIcon,

  rightIcon,

  size = "md",

  fullWidth = true,

  className = "",

  required,

  ref,

  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        wrapperClasses,
        fullWidth && "w-full",
      )}
    >
      {label && (
        <label className={labelClasses}>
          {label}

          {required && (
            <span className="ml-1 text-red-500">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative flex items-center">
        {/* {leftIcon && (
          <div className="absolute left-3">
            {leftIcon}
          </div>
        )} */}

        <input
          ref={ref}
          required={required}
          className={cn(
            baseInputClasses,
            sizeClasses[size],
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            error && "border-red-500 focus:ring-red-200",
            className,
          )}
          {...props}
        />

        {leftIcon && (
          <div className="absolute left-3 flex items-center">
            {leftIcon}
          </div>
        )}

        {rightIcon && (
          <div className="absolute right-3 flex items-center">
            {rightIcon}
          </div>
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