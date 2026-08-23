import type { ReactNode } from "react";

interface WidgetContainerProps {
  title?: string;

  children: ReactNode;

  action?: ReactNode;
}

export default function WidgetContainer({
  title,
  children,
  action,
}: WidgetContainerProps) {
  return (
    <section className="rounded-2xl border border-slate-200 dark:border-[#263247] bg-white dark:bg-[#111827] p-6 shadow-sm transition-all duration-200">
      {(title || action) && (
        <div className="mb-5 flex items-center justify-between">
          {title && (
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50 tracking-tight">
              {title}
            </h2>
          )}

          {action}
        </div>
      )}

      {children}
    </section>
  );
}