import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/faq";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface shadow-card">
      {items.map((item) => (
        <details key={item.question} className="group px-6">
          <summary className="flex min-h-14 items-center justify-between gap-4 py-4 text-left font-semibold text-fg hover:text-primary">
            <h3 className="text-base">{item.question}</h3>
            <ChevronDown aria-hidden="true" className="size-5 shrink-0 text-muted-fg transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="pb-5 text-muted-fg">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
