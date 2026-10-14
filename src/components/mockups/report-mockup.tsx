import { ChevronDown, ShieldAlert } from "lucide-react";
import { sampleReport } from "@/content/sample-report";
import { RiskBadge } from "@/components/ui/risk-badge";
import { BrowserFrame } from "./browser-frame";

/** Recreates the report view of the app (InterviewAI/src/components/report-view.tsx). */
export function ReportMockup({ className }: { className?: string }) {
  return (
    <BrowserFrame
      className={className}
      label="Example InterviewAI report showing a student summary, risk ratings and a model answer"
    >
      <div className="space-y-4 p-4 text-left sm:p-5">
        <div className="rounded-xl border border-border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-fg">Interview Preparation Summary</p>
            <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[11px] font-semibold text-primary">Example</span>
          </div>
          <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
            {sampleReport.summary.map((item) => (
              <div key={item.label}>
                <dt className="text-[11px] text-muted-fg">{item.label}</dt>
                <dd className="text-xs font-semibold text-fg">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl border border-border p-4">
          <p className="flex items-center gap-1.5 text-sm font-bold text-fg">
            <ShieldAlert className="size-4" /> Risk Assessment
          </p>
          <ul className="mt-3 space-y-2">
            {sampleReport.risks.map((risk) => (
              <li key={risk.category} className="flex items-center justify-between gap-3 rounded-lg bg-bg px-3 py-2">
                <span className="text-xs font-medium text-fg">{risk.category}</span>
                <RiskBadge level={risk.level} className="text-[10px]" />
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border p-4">
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs font-semibold text-fg">Q1: {sampleReport.questions[0]}</p>
            <ChevronDown className="size-4 shrink-0 rotate-180 text-muted-fg" />
          </div>
          <div className="mt-3 border-l-4 border-risk-low bg-risk-low-bg p-3">
            <p className="text-[11px] font-bold text-risk-low">Model Answer:</p>
            <p className="mt-1 line-clamp-3 text-[11px] leading-relaxed text-fg">{sampleReport.modelAnswer}</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
