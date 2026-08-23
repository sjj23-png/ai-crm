import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const dividerVariants = cva("border-border", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "h-full border-l",
    },

    spacing: {
      none: "",
      sm: "my-2",
      md: "my-4",
      lg: "my-6",
      xl: "my-8",
    },
  },

  defaultVariants: {
    orientation: "horizontal",
    spacing: "md",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLHRElement>,
    VariantProps<typeof dividerVariants> {}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation,
      spacing,
      className,
      ...props
    },
    ref
  ) => (
    <hr
      ref={ref}
      className={cn(
        dividerVariants({
          orientation,
          spacing,
        }),
        className
      )}
      {...props}
    />
  )
);

Divider.displayName = "Divider";

export default Divider;