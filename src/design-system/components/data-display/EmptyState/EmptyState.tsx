import { forwardRef } from "react";

import { cn } from "@/lib/utils/cn";
import { Button } from "@/design-system/components/buttons/Button";
import { Heading } from "@/design-system/components/Typography/Heading";
import { Text } from "@/design-system/components/Typography/Text";

export interface EmptyStateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = forwardRef<
  HTMLDivElement,
  EmptyStateProps
>(
  (
    {
      icon,
      title,
      description,
      actionLabel,
      onAction,
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border p-10 text-center",
        className
      )}
      {...props}
    >
      {icon && <div className="mb-5">{icon}</div>}

      <Heading
        as="h2"
        level="h4"
      >
        {title}
      </Heading>

      {description && (
        <Text
          tone="secondary"
          className="mt-2 max-w-md"
        >
          {description}
        </Text>
      )}

      {actionLabel && (
        <Button
          className="mt-6"
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  )
);

EmptyState.displayName = "EmptyState";

export default EmptyState;