import { Quote } from "lucide-react";
import { testimonialsSection as c } from "@/content/home";
import { testimonials } from "@/content/testimonials";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <Section labelledBy="testimonials-title" tone="sand">
      <SectionHeading id="testimonials-title" eyebrow={c.eyebrow} title={c.title} />
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <li key={i}>
            <figure
              className={cn(
                "reveal relative h-full rounded-2xl border bg-surface p-6 shadow-card",
                t.placeholder ? "border-dashed border-input-border" : "border-border",
              )}
            >
              {t.placeholder && (
                <span className="absolute right-4 top-4 rounded-full bg-risk-med-bg px-2 py-0.5 text-[11px] font-bold text-risk-med">
                  Placeholder
                </span>
              )}
              <Quote aria-hidden="true" className="size-7 text-primary" />
              <blockquote className="mt-3 text-fg">“{t.quote}”</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="block font-semibold text-fg">{t.name}</span>
                <span className="text-muted-fg">{t.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
