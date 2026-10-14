import { cn } from "@/lib/utils";

export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

const styles: Record<RiskLevel, string> = {
  LOW: "bg-risk-low-bg text-risk-low border-risk-low/40",
  MEDIUM: "bg-risk-med-bg text-risk-med border-risk-med/40",
  HIGH: "bg-risk-high-bg text-risk-high border-risk-high/40",
};

export function RiskBadge({ level, className }: { level: RiskLevel; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold", styles[level], className)}>
      {level}
    </span>
  );
}
