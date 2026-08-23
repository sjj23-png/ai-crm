import {
  RiArrowDownSLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils/cn";

import type {
  SelectProps,
} from "./Select.types";

import {
  wrapperClasses,
  labelClasses,
  helperClasses,
  errorClasses,
  baseSelectClasses,
  sizeClasses,
  iconClasses,
} from "./Select.styles";

export function Select({
  label,

  helperText,

  error,

  options,

  placeholder,

  size = "md",

  fullWidth = true,

  className = "",

  required,

  ref,

  ...props
}: SelectProps) {
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

      <div className="relative">
        <select
          ref={ref}
          required={required}
          className={cn(
            baseSelectClasses,
            sizeClasses[size],
            error && "border-red-500 focus:ring-red-200",
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="">
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <div className={iconClasses}>
          <RiArrowDownSLine size={20} />
        </div>
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