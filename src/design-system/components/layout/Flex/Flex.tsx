import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Box, type BoxProps } from "../Box";
import { cn } from "@/lib/utils/cn";

const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
      "row-reverse": "flex-row-reverse",
      "column-reverse": "flex-col-reverse",
    },

    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },

    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },

    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      reverse: "flex-wrap-reverse",
    },

    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-10",
    },
  },

  defaultVariants: {
    direction: "row",
    justify: "start",
    align: "stretch",
    wrap: "nowrap",
    gap: "none",
  },
});

export interface FlexProps
  extends BoxProps,
    VariantProps<typeof flexVariants> {}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction,
      justify,
      align,
      wrap,
      gap,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(
          flexVariants({
            direction,
            justify,
            align,
            wrap,
            gap,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Flex.displayName = "Flex";

export default Flex;