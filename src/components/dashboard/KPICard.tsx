import type { ReactNode } from "react";
import WidgetContainer from "./WidgetContainer";

interface KPICardProps {
  title: string;

  value: string | number;

  description?: string;

  trend?: string;

  icon?: ReactNode;
}

export default function KPICard({
  title,
  value,
  description,
  trend,
  icon,
}: KPICardProps) {
  return (
    <WidgetContainer>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-neutral-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>

          {description && (
            <p className="mt-2 text-sm text-neutral-500">
              {description}
            </p>
          )}

          {trend && (
            <p className="mt-3 text-sm font-medium text-green-600">
              {trend}
            </p>
          )}
        </div>

        {icon && (
          <div className="rounded-xl bg-primary-100 p-3 text-primary-600 dark:bg-primary-900/30">
            {icon}
          </div>
        )}
      </div>
    </WidgetContainer>
  );
}