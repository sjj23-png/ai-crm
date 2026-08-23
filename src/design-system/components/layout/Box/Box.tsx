import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const boxVariants = cva("", {
  variants: {
 

    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full",
    },

    shadow: {
      none: "",
      sm: "shadow-sm",
      md: "shadow",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
  },

  defaultVariants: {
    
    rounded: "none",
    shadow: "none",
  },
});

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      
      rounded,
      shadow,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          boxVariants({
            
            rounded,
            shadow,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Box.displayName = "Box";

export default Box;