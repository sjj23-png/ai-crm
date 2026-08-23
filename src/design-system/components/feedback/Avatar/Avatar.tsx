import { forwardRef } from "react";

import { cn } from "@/lib/utils/cn";

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;

  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

export const Avatar = forwardRef<
  HTMLDivElement,
  AvatarProps
>(
  (
    {
      src,
      alt,
      initials,
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center overflow-hidden rounded-full bg-muted font-semibold",
          sizes[size],
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        ) : (
          initials
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export default Avatar;