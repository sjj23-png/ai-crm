import WidgetContainer from "../WidgetContainer";



interface TaskItem {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
}

const tasks: TaskItem[] = [
  {
    id: 1,
    title: "Follow up with ABC Technologies",
    priority: "High",
  },
  {
    id: 2,
    title: "Prepare Sales Proposal",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Schedule Product Demo",
    priority: "Low",
  },
];

export default function TodayTasksWidget() {
  return (
    <WidgetContainer title="Today's Tasks">
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-lg border border-border p-3"
          >
            <div>
              <p className="font-medium">
                {task.title}
              </p>

              <p className="text-sm text-muted-foreground">
                Priority
              </p>
            </div>

            <span
              className="
                rounded-full
                bg-primary/10
                px-3
                py-1
                text-xs
                font-medium
                text-primary
              "
            >
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </WidgetContainer>
  );
}