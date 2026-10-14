import { ChevronDown, FileText, Upload } from "lucide-react";
import { sampleReport } from "@/content/sample-report";
import { BrowserFrame } from "./browser-frame";

/** Recreates the student profile form (InterviewAI/src/components/student-form.tsx). */
export function FormMockup({ className }: { className?: string }) {
  return (
    <BrowserFrame
      className={className}
      label="InterviewAI profile form with sections for personal, academic, course, financial and immigration details, plus documents"
    >
      <div className="p-4 text-left sm:p-5">
        <p className="text-sm font-bold text-fg">Student Profile</p>
        <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
          {sampleReport.formSections.map((section, i) => (
            <li key={section} className="px-3 py-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-fg">{section}</span>
                <ChevronDown className={i === 0 || i === 5 ? "size-4 rotate-180 text-muted-fg" : "size-4 text-muted-fg"} />
              </div>
              {i === 0 && (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {["Full Name *", "Nationality *"].map((f) => (
                    <div key={f}>
                      <p className="text-[10px] text-muted-fg">{f}</p>
                      <div className="mt-1 h-6 rounded-md border border-border bg-bg" />
                    </div>
                  ))}
                </div>
              )}
              {i === 5 && (
                <div className="mt-2">
                  <p className="text-[10px] text-muted-fg">Offer Letter (Optional)</p>
                  <div className="mt-1 flex gap-1">
                    <span className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-[10px] font-semibold text-on-primary">
                      <FileText className="size-3" /> Text
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[10px] text-muted-fg">
                      <Upload className="size-3" /> File
                    </span>
                  </div>
                  <div className="mt-2 h-10 rounded-md border border-border bg-bg" />
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-3 rounded-lg bg-primary py-2.5 text-center text-xs font-semibold text-on-primary">Generate Interview Prep</div>
      </div>
    </BrowserFrame>
  );
}
