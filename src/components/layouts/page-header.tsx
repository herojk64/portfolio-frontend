import { Breadcrumb } from "@/components/breadcrumb";

type BreadcrumbItem = { label: string; href?: string };

export function PageHeader({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: BreadcrumbItem[];
}) {
  return (
    <header className="py-8 mb-4">
      {breadcrumb && <Breadcrumb items={breadcrumb} />}
      <h1 className="text-3xl font-bold">
        <span className="text-primary">/</span>
        {title}
      </h1>
      {subtitle && (
        <p className="text-muted-foreground mt-1">{subtitle}</p>
      )}
    </header>
  );
}
