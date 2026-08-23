import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const linkVariants = cva(
  "inline-flex items-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "text-primary hover:text-primary/80 underline underline-offset-4",
        muted:
          "text-muted-foreground hover:text-foreground underline underline-offset-4",
        ghost:
          "text-primary hover:underline",
      },

      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
      },
    },

    defaultVariants: {
      variant: "default",
      weight: "normal",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant, weight, className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        linkVariants({
          variant,
          weight,
        }),
        className
      )}
      {...props}
    />
  )
);

Link.displayName = "Link";

export default Link;