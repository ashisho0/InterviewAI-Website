import { useCases as c } from "@/content/home";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCaseIcons } from "@/components/ui/icons";

export function UseCases() {
  return (
    <Section labelledBy="usecases-title">
      <SectionHeading id="usecases-title" eyebrow={c.eyebrow} title={c.title} />
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {c.items.map((item) => {
          const Icon = useCaseIcons[item.icon];
          return (
            <li key={item.title} className="reveal rounded-2xl border border-border bg-surface p-6 shadow-card lg:p-8">
              <Icon aria-hidden="true" className="size-8 text-accent-text" />
              <h3 className="mt-4 text-xl font-bold text-fg">{item.title}</h3>
              <p className="mt-2 text-muted-fg">{item.body}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
