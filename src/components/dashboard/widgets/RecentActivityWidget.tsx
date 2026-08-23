import type { ActivityItem } from "@/features/dashboard";
import EmptyStateWidget from "./EmptyStateWidget";
import WidgetContainer from "../WidgetContainer";



interface RecentActivityWidgetProps {
  activities: ActivityItem[];
}

export default function RecentActivityWidget({
  activities,
}: RecentActivityWidgetProps) {
  return (
    <WidgetContainer
    title="Recent Activity"
>

      <div className="space-y-4">
        {activities.length === 0 ? (
          <EmptyStateWidget
            title="No Activity"
            description="Activity will appear here once your team starts using the CRM."
          />
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start justify-between border-b border-border pb-3 last:border-none last:pb-0"
            >
              <div>
                <p className="font-medium">
                  {activity.title}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </div>

              <span className="text-xs text-muted-foreground">
                {activity.time}
              </span>
            </div>
          ))
        )}
      </div>
    </WidgetContainer>
  );
}