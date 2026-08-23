import type { LeadItem } from "@/features/dashboard";
import EmptyStateWidget from "./EmptyStateWidget";
import WidgetContainer from "../WidgetContainer";

interface RecentLeadWidgetProps {
  leads: LeadItem[];
}

export default function RecentLeadWidget({
  leads,
}: RecentLeadWidgetProps) {
  return (
    <WidgetContainer
      title="Recent Leads"
      action={
        <button className="text-sm font-medium text-primary hover:underline">
          View all
        </button>
      }
    >

      <div className="space-y-4">
        {leads.length === 0 ? (
          <EmptyStateWidget
            title="No Leads"
            description="New leads will appear here once they are created."
          />
        ) : (
          leads.map((lead) => (
            <div
              key={lead.id}
              className="flex items-center justify-between border-b border-border pb-4 last:border-none last:pb-0"
            >
              <div>
                <p className="font-medium">
                  {lead.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  {lead.company}
                </p>
              </div>

              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {lead.status}
              </span>
            </div>
          ))
        )}
      </div>
    </WidgetContainer>
  );
}