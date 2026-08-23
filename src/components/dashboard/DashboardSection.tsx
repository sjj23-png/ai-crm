import type { ReactNode } from "react";


interface DashboardSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function DashboardSection({
  title,
  description,
  children,
}: DashboardSectionProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-neutral-500">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}