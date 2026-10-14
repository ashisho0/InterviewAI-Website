import { ChevronDown } from "lucide-react";
import { sampleReport } from "@/content/sample-report";
import { BrowserFrame } from "./browser-frame";

/** Recreates the tabbed question view of the report. */
export function CategoryTabsMockup({ className }: { className?: string }) {
  return (
    <BrowserFrame className={className} label="Interview questions grouped into six UKVI categories">
      <div className="p-4 text-left sm:p-5">
        <p className="text-sm font-bold text-fg">Interview Questions & Model Answers</p>
        <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
          {sampleReport.categories.map((c, i) => (
            <span
              key={c.name}
              className={
                i === 0
                  ? "rounded-md bg-surface px-2 py-1.5 text-center text-[10px] font-semibold text-fg shadow-card ring-1 ring-border"
                  : "rounded-md bg-bg px-2 py-1.5 text-center text-[10px] text-muted-fg"
              }
            >
              {c.name} ({c.count})
            </span>
          ))}
        </div>
        <ul className="mt-3 divide-y divide-border">
          {sampleReport.questions.map((q, i) => (
            <li key={q} className="flex items-center justify-between gap-3 py-2.5">
              <span className="text-xs font-medium text-fg">
                Q{i + 1}: {q}
              </span>
              <ChevronDown className="size-4 shrink-0 text-muted-fg" />
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}
