import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Box, type BoxProps } from "../Box";
import { cn } from "@/lib/utils/cn";

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      xs: "max-w-screen-sm",
      sm: "max-w-screen-md",
      md: "max-w-screen-lg",
      lg: "max-w-screen-xl",
      xl: "max-w-screen-2xl",
      full: "max-w-full",
    },

    padding: {
      none: "",
      sm: "px-4",
      md: "px-6",
      lg: "px-8",
    },
  },

  defaultVariants: {
    size: "xl",
    padding: "md",
  },
});




export interface ContainerProps
  extends BoxProps,
    VariantProps<typeof containerVariants> {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size, padding, className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(
          containerVariants({
            size,
            padding,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export default Container;