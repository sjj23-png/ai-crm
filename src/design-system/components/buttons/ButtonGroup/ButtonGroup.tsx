import { forwardRef } from "react";

import { cn } from "@/lib/utils/cn";

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ButtonGroup = forwardRef<
  HTMLDivElement,
  ButtonGroupProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      className={cn(
        "inline-flex items-center gap-2",
        className
      )}
      {...props}
    />
  );
});

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;