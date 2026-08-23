


import {
  useMemo,
  useState,
} from "react";
import { cn } from "@/lib/utils/cn";

import type {
  AvatarProps,
} from "./Avatar.types";

import {
  wrapperClasses,
  imageClasses,
  fallbackClasses,
  sizeClasses,
  statusClasses,
} from "./Avatar.styles";

export function Avatar({
  src,

  alt,

  name,

  size = "md",

  rounded = true,

  status = "none",

  className = "",

  ref,

  ...props
}: AvatarProps) {
  const [imageError, setImageError] =
    useState(false);

  const initials = useMemo(() => {
    if (!name) return "?";

    return name
      .split(" ")
      .slice(0, 2)
      .map((item) => item[0])
      .join("")
      .toUpperCase();
  }, [name]);

  return (
    <div
      ref={ref}
      className={cn(
        wrapperClasses,

        sizeClasses[size],

        rounded ? "rounded-full" : "rounded-xl",

        className,
      )}
      {...props}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt ?? name}
          className={imageClasses}
          onError={() =>
            setImageError(true)
          }
        />
      ) : (
        <span
          className={
            fallbackClasses
          }
        >
          {initials}
        </span>
      )}

      <span
        className={cn(
          "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900",

          statusClasses[status],
        )}
      />
    </div>
  );
}