import { forwardRef } from "react";


import { cn } from "@/lib/utils/cn";

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "danger" | string; // 👈 Add variant here

}
const variants = {
  primary: "border-primary border-t-transparent",
  secondary: "border-secondary border-t-transparent",
  danger: "border-red-500 border-t-transparent",
};
const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-[3px]",
  lg: "h-10 w-10 border-4",
};


export const Spinner = forwardRef<
  HTMLDivElement,
  SpinnerProps
>(
  (
    {
      size = "md",
      variant = "primary",
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "animate-spin rounded-full",
        variants[variant as keyof typeof variants] || variants.primary,
        sizes[size],
        className
      )}
      {...props}
    />
  )
);

Spinner.displayName = "Spinner";

export default Spinner;