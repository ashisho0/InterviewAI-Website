import { Check, LoaderCircle } from "lucide-react";
import { sampleReport } from "@/content/sample-report";
import { BrowserFrame } from "./browser-frame";

/** Recreates the live progress state (InterviewAI/src/components/loading-state.tsx + route.ts messages). */
export function ProgressMockup({ className }: { className?: string }) {
  const current = 3;
  return (
    <BrowserFrame className={className} label="Live progress messages while the report is generated">
      <div className="p-4 text-left sm:p-5">
        <div className="flex flex-col items-center py-4 text-center">
          <LoaderCircle className="size-10 text-primary motion-safe:animate-spin" />
          <p className="mt-3 text-sm font-bold text-fg">Generating Your Interview Preparation</p>
          <p className="text-xs text-muted-fg">{sampleReport.progress[current]}</p>
        </div>
        <ol className="mt-2 space-y-2">
          {sampleReport.progress.map((msg, i) => (
            <li key={msg} className="flex items-center gap-2 text-xs">
              {i < current ? (
                <Check className="size-4 text-risk-low" />
              ) : (
                <span className={i === current ? "size-4 rounded-full border-2 border-primary" : "size-4 rounded-full border-2 border-border"} />
              )}
              <span className={i <= current ? "text-fg" : "text-muted-fg"}>{msg}</span>
            </li>
          ))}
        </ol>
      </div>
    </BrowserFrame>
  );
}
