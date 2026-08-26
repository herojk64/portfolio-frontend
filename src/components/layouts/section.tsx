import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export function Section({
  title,
  link,
  children,
  className,
}: {
  title: string;
  link?: {
    href: string;
    label: string;
  };
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-8 mb-8", className)}>
      <h2 className="text-xl mb-8 flex items-center gap-4">
        <span>
          <span className="text-primary font-bold">#</span>
          {title}
        </span>
        <span className="flex-1 border-t border-muted-foreground/40" aria-hidden="true" />
        {link && (
          <Link
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label} →
          </Link>
        )}
      </h2>
      {children ?? null}
    </section>
  );
}
