import { forwardRef } from "react";


import { cn } from "@/lib/utils/cn";

export interface PageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  actions?: React.ReactNode;
}

export const PageHeader = forwardRef<
  HTMLDivElement,
  PageHeaderProps
>(
  (
    {
      actions,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <header
      ref={ref}
      className={cn(
        "mb-8 flex items-center justify-between gap-4",
        className
      )}
      {...props}
    >
      <div>{children}</div>

      {actions && (
        <div className="flex items-center gap-2">
          {actions}
        </div>
      )}
    </header>
  )
);

PageHeader.displayName = "PageHeader";

export default PageHeader;