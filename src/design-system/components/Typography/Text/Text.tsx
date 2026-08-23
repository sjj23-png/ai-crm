import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },

    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },

    tone: {
      primary: "text-foreground",
      secondary: "text-muted-foreground",
      muted: "text-muted-foreground",
      success: "text-green-600",
      warning: "text-yellow-600",
      danger: "text-red-600",
      white: "text-white",
    },

    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },

    truncate: {
      true: "truncate",
      false: "",
    },
  },

  defaultVariants: {
    size: "md",
    weight: "normal",
    tone: "primary",
    align: "left",
    truncate: false,
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      size,
      weight,
      tone,
      align,
      truncate,
      className,
      ...props
    },
    ref
  ) => (
    <p
      ref={ref}
      className={cn(
        textVariants({
          size,
          weight,
          tone,
          align,
          truncate,
        }),
        className
      )}
      {...props}
    />
  )
);

Text.displayName = "Text";

export default Text;