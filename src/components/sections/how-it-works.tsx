import { howItWorks as c } from "@/content/home";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-title">
      <SectionHeading id="how-title" eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {c.steps.map((step, i) => (
          <li key={step.title} className="reveal relative rounded-2xl border border-border bg-surface p-6 shadow-card">
            <span className="flex size-10 items-center justify-center rounded-full bg-accent text-base font-bold text-on-accent">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-bold text-fg">{step.title}</h3>
            <p className="mt-2 text-muted-fg">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
