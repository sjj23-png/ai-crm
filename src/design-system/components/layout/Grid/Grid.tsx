import { forwardRef } from "react";


import { Box, type BoxProps } from "../Box";
import { cn } from "@/lib/utils/cn";

const columns = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  12: "grid-cols-12",
} as const;

const gaps = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const;

export interface GridProps extends BoxProps {
  columns?: keyof typeof columns;
  gap?: keyof typeof gaps;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      columns: cols = 1,
      gap = "md",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={cn(
          "grid",
          columns[cols],
          gaps[gap],
          className
        )}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";

export default Grid;