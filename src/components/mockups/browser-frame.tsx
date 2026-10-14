import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  label: string;
  url?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Frames a code-built product mockup. The whole frame is one image to assistive tech:
 * `label` is its accessible description and the inner text is hidden from screen readers.
 */
export function BrowserFrame({ label, url = "app.interviewai.cc", className, children }: BrowserFrameProps) {
  return (
    <div role="img" aria-label={label} className={cn("overflow-hidden rounded-3xl border border-border bg-surface shadow-lift", className)}>
      <div aria-hidden="true" className="flex items-center gap-2 border-b border-border bg-bg px-4 py-3">
        <span className="size-2.5 rounded-full bg-risk-high/70" />
        <span className="size-2.5 rounded-full bg-risk-med/70" />
        <span className="size-2.5 rounded-full bg-risk-low/70" />
        <span className="ml-3 truncate rounded-md border border-border bg-surface px-3 py-1 text-xs text-muted-fg">{url}</span>
      </div>
      <div aria-hidden="true" className="select-none">
        {children}
      </div>
    </div>
  );
}
