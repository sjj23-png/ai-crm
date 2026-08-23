import WidgetContainer from "../WidgetContainer";

const meetings = [
  {
    id: 1,
    title: "Sales Review",
    time: "10:30 AM",
  },
  {
    id: 2,
    title: "Product Demo",
    time: "2:00 PM",
  },
  {
    id: 3,
    title: "Client Follow-up",
    time: "5:15 PM",
  },
];

export default function UpcomingMeetingsWidget() {
  return (
    <WidgetContainer title="Upcoming Meetings">
      <div className="space-y-4">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="flex items-center justify-between rounded-lg border border-border p-3"
          >
            <div>
              <p className="font-medium">
                {meeting.title}
              </p>

              <p className="text-sm text-muted-foreground">
                {meeting.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </WidgetContainer>
  );
}