import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const labelVariants = cva(
  "inline-flex items-center font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },

      tone: {
        primary: "text-foreground",
        secondary: "text-muted-foreground",
        danger: "text-red-600",
        success: "text-green-600",
      },

      required: {
        true: "after:ml-1 after:text-red-500 after:content-['*']",
        false: "",
      },
    },

    defaultVariants: {
      size: "md",
      tone: "primary",
      required: false,
    },
  }
);

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      size,
      tone,
      required,
      className,
      ...props
    },
    ref
  ) => (
    <label
      ref={ref}
      className={cn(
        labelVariants({
          size,
          tone,
          required,
        }),
        className
      )}
      {...props}
    />
  )
);

Label.displayName = "Label";

export default Label;