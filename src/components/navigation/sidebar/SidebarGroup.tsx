import SidebarItem from "./SidebarItem";


import type {
  NavigationGroup,
} from "@/navigation/navigation.types";

interface SidebarGroupProps {
  group: NavigationGroup;
}

export default function SidebarGroup({
  group,
}: SidebarGroupProps) {
  return (
    <section className="space-y-2">
      <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
        {group.title}
      </h3>

      <div className="space-y-1">
        {group.items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}