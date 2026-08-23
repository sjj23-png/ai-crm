



import {
  Inbox,
} from "lucide-react";

import WidgetContainer from "../WidgetContainer";

interface EmptyStateWidgetProps {
  title: string;

  description: string;
}

export default function EmptyStateWidget({
  title,
  description,
}: EmptyStateWidgetProps) {
  return (
    <WidgetContainer title={title}>
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Inbox
          size={40}
          className="mb-4 text-neutral-400"
        />

        <h3 className="text-lg font-semibold">
          Nothing here yet
        </h3>

        <p className="mt-2 max-w-sm text-sm text-neutral-500">
          {description}
        </p>
      </div>
    </WidgetContainer>
  );
}