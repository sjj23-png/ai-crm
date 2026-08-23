



import { useNavigate } from "react-router-dom";
import {
  Plus,
  Users,
  ClipboardList,
  BarChart3,
} from "lucide-react";

import { Button } from "@/design-system/components/buttons/Button";
import WidgetContainer from "../WidgetContainer";

const actions = [
  {
    id: 1,
    label: "New Lead",
    path: "/dashboard/companies",
    icon: Plus,
    variant: "primary" as const,
  },
  {
    id: 2,
    label: "New Contact",
    path: "/dashboard/contacts",
    icon: Users,
    variant: "secondary" as const,
  },
  {
    id: 3,
    label: "CRM Tasks",
    path: "/dashboard/crm",
    icon: ClipboardList,
    variant: "outline" as const,
  },
  {
    id: 4,
    label: "Reports",
    path: "/dashboard/reports",
    icon: BarChart3,
    variant: "ghost" as const,
  },
];

export default function QuickActionsWidget() {
  const navigate = useNavigate();

  return (
    <WidgetContainer title="Quick Actions">
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Button
              key={action.id}
              variant={action.variant}
              fullWidth
              className="justify-start"
              onClick={() => navigate(action.path)}
            >
              <Icon size={18} />

              <span>{action.label}</span>
            </Button>
          );
        })}
      </div>
    </WidgetContainer>
  );
}