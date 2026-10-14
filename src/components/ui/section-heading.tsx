import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ id, eyebrow, title, lead, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-text">{eyebrow}</p>}
      <h2 id={id} className="text-3xl font-bold leading-tight text-fg md:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg text-muted-fg">{lead}</p>}
    </div>
  );
}
