import { CircleCheck, CircleX } from "lucide-react";
import { problemSolution as c } from "@/content/home";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProblemSolution() {
  return (
    <Section labelledBy="problem-title">
      <SectionHeading id="problem-title" eyebrow={c.eyebrow} title={c.title} />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="reveal rounded-2xl border border-border bg-surface p-6 lg:p-8">
          <h3 className="text-xl font-bold text-fg">{c.problem.title}</h3>
          <p className="mt-3 text-muted-fg">{c.problem.body}</p>
          <ul className="mt-6 space-y-3">
            {c.problem.points.map((p) => (
              <li key={p} className="flex gap-3 text-fg">
                <CircleX aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-risk-high" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal rounded-2xl border-2 border-primary bg-surface p-6 shadow-card lg:p-8">
          <h3 className="text-xl font-bold text-fg">{c.solution.title}</h3>
          <p className="mt-3 text-muted-fg">{c.solution.body}</p>
          <ul className="mt-6 space-y-3">
            {c.solution.points.map((p) => (
              <li key={p} className="flex gap-3 text-fg">
                <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-risk-low" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
