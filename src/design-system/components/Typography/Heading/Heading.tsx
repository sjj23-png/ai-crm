import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const headingVariants = cva("font-bold tracking-tight", {
  variants: {
    level: {
      h1: "text-5xl",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
      h6: "text-lg",
    },

    tone: {
      primary: "text-foreground",
      secondary: "text-muted-foreground",
      white: "text-white",
    },

    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },

  defaultVariants: {
    level: "h2",
    tone: "primary",
    align: "left",
  },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as = "h2",
      level = "h2",
      tone,
      align,
      className,
      ...props
    },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({
            level,
            tone,
            align,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export default Heading;