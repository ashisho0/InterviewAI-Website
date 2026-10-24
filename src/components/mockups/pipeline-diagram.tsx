import { ArrowDown, ArrowRight, Bot, FileText, FileSearch, ListChecks, ScrollText } from "lucide-react";

const steps = [
  { icon: FileText, title: "Your inputs", body: "Profile, offer letter, CV" },
  { icon: FileSearch, title: "Document reading", body: "PDF and DOCX to text; images read by AI" },
  { icon: ScrollText, title: "UKVI prompt", body: "6 categories, 6 risk checks, guardrails" },
  { icon: Bot, title: "AI model", body: "Writes a structured report" },
  { icon: ListChecks, title: "Your report", body: "Checked for completeness, retried once if needed" },
];

export function PipelineDiagram() {
  return (
    <figure>
      <ol className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
        {steps.map((step, i) => (
          <li key={step.title} className="flex flex-col items-center gap-2 lg:flex-1 lg:flex-row">
            <div className="w-full rounded-2xl border border-border bg-surface p-4 shadow-card">
              <step.icon aria-hidden="true" className="size-6 text-primary" />
              <p className="mt-2 text-sm font-semibold text-fg">{step.title}</p>
              <p className="mt-1 text-xs text-muted-fg">{step.body}</p>
            </div>
            {i < steps.length - 1 && (
              <>
                <ArrowDown aria-hidden="true" className="size-5 shrink-0 text-muted-fg lg:hidden" />
                <ArrowRight aria-hidden="true" className="hidden size-5 shrink-0 text-muted-fg lg:block" />
              </>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="sr-only">
        How InterviewAI works: your inputs are read and converted to text, combined with a UKVI interview prompt and guardrails, sent to an AI model, and returned as a checked, structured report.
      </figcaption>
    </figure>
  );
}
