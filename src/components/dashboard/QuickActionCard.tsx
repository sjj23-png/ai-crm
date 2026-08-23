import type { ReactNode } from "react";


import { Button } from "@/design-system/components/base/Button";

interface QuickActionCardProps {
  title: string;

  description: string;

  icon: ReactNode;

  onClick?: () => void;
}

export default function QuickActionCard({
  title,
  description,
  icon,
  onClick,
}: QuickActionCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-neutral-500">
        {description}
      </p>

      <Button
        className="mt-6"
        onClick={onClick}
      >
        Open
      </Button>
    </div>
  );
}