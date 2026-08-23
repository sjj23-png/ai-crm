import {
  RiCheckboxCircleLine,
  RiCloseLine,
  RiErrorWarningLine,
  RiInformationLine,
  RiSpam2Line,
} from "@remixicon/react";
import { cn } from "@/lib/utils/cn";

import type {
  AlertProps,
} from "./Alert.types";

import {
  wrapperClasses,
  iconClasses,
  contentClasses,
  titleClasses,
  bodyClasses,
  closeButtonClasses,
  variantClasses,
} from "./Alert.styles";

const defaultIcons = {
  info: <RiInformationLine size={20} />,

  success: (
    <RiCheckboxCircleLine size={20} />
  ),

  warning: (
    <RiErrorWarningLine size={20} />
  ),

  error: (
    <RiSpam2Line size={20} />
  ),
};

export function Alert({
  variant = "info",

  title,

  icon,

  closable = false,

  onClose,

  children,

  className = "",

  ref,

  ...props
}: AlertProps) {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(
        wrapperClasses,
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      <div className={iconClasses}>
        {icon ??
          defaultIcons[variant]}
      </div>

      <div className={contentClasses}>
        {title && (
          <h4 className={titleClasses}>
            {title}
          </h4>
        )}

        {children && (
          <div className={bodyClasses}>
            {children}
          </div>
        )}
      </div>

      {closable && (
        <button
          type="button"
          onClick={onClose}
          className={
            closeButtonClasses
          }
          aria-label="Close alert"
        >
          <RiCloseLine size={18} />
        </button>
      )}
    </div>
  );
}