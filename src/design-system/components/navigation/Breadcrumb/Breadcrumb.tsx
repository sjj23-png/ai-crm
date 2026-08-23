import { Link } from "@/design-system/components/Typography/Link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className="mb-4 flex items-center text-sm"
    >
      {items.map((item, index) => {
        const last = index === items.length - 1;

        return (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center"
          >
            {last ? (
              <span className="font-medium">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                variant="ghost"
              >
                {item.label}
              </Link>
            )}

            {!last && (
              <span className="mx-2 text-muted-foreground">
                /
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}