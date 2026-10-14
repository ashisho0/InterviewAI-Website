import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-fg">
        <li>
          <Link href="/" className="inline-flex min-h-11 items-center underline-offset-4 hover:text-primary hover:underline">
            Home
          </Link>
        </li>
        {trail.map((crumb, i) => (
          <li key={crumb.path} className="flex items-center gap-1">
            <ChevronRight aria-hidden="true" className="size-4" />
            {i === trail.length - 1 ? (
              <span aria-current="page" className="font-medium text-fg">
                {crumb.name}
              </span>
            ) : (
              <Link href={crumb.path} className="inline-flex min-h-11 items-center underline-offset-4 hover:text-primary hover:underline">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
