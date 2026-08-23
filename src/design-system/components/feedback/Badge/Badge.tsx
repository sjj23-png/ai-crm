import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outline: "border",
      },

      tone: {
        primary:
          "bg-primary text-primary-foreground",

        secondary:
          "bg-secondary text-secondary-foreground",

        success:
          "bg-green-100 text-green-700",

        warning:
          "bg-yellow-100 text-yellow-700",

        danger:
          "bg-red-100 text-red-700",

        neutral:
          "bg-muted text-muted-foreground",
      },

      size: {
        sm: "h-5 px-2 text-xs",
        md: "h-6 px-3 text-sm",
        lg: "h-8 px-4 text-base",
      },
    },

    defaultVariants: {
      variant: "soft",
      tone: "primary",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant,
      tone,
      size,
      className,
      ...props
    },
    ref
  ) => (
    <span
      ref={ref}
      className={cn(
        badgeVariants({
          variant,
          tone,
          size,
        }),
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = "Badge";

export default Badge;