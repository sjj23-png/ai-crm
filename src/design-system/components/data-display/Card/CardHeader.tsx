import { forwardRef } from "react";


import { cn } from "@/lib/utils/cn";

export interface CardHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<
    HTMLDivElement,
    CardHeaderProps
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-col gap-1.5 p-6",
            className
        )}
        {...props}
    />
));

CardHeader.displayName = "CardHeader";

export default CardHeader;