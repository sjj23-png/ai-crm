import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Box, type BoxProps } from "../Box";
import { cn } from "@/lib/utils/cn";

const surfaceVariants = cva("", {
  variants: {
    variant: {
      default: "bg-background border border-border",
      elevated: "bg-background shadow-md",
      outlined: "bg-background border border-border",
      filled: "bg-muted",
    },

    padding: {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
    },

    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
    },
  },

  defaultVariants: {
    variant: "default",
    padding: "md",
    rounded: "lg",
  },
});

export interface SurfaceProps
  extends Omit<BoxProps, "rounded">,
    VariantProps<typeof surfaceVariants> {}

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  (
    {
      variant,
      padding,
      rounded,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(
          surfaceVariants({
            variant,
            padding,
            rounded,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Surface.displayName = "Surface";

export default Surface;