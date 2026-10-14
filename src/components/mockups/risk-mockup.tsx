import { sampleReport } from "@/content/sample-report";
import { RiskBadge } from "@/components/ui/risk-badge";
import { BrowserFrame } from "./browser-frame";

/** Recreates the risk assessment cards with suggestions. */
export function RiskMockup({ className }: { className?: string }) {
  return (
    <BrowserFrame className={className} label="Risk assessment with low, medium and high ratings and a suggestion for each">
      <div className="space-y-3 p-4 text-left sm:p-5">
        {sampleReport.risks.map((risk) => (
          <div key={risk.category} className="rounded-xl border border-border p-3">
            <div className="flex items-start justify-between gap-2">
              <p className="text-xs font-bold text-fg">{risk.category}</p>
              <RiskBadge level={risk.level} className="text-[10px]" />
            </div>
            <p className="mt-1 text-[11px] text-muted-fg">{risk.explanation}</p>
            <p className="mt-2 border-l-4 border-primary bg-primary-soft p-2 text-[11px] font-medium text-fg">
              <strong>Suggestion:</strong> {risk.suggestion}
            </p>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}
