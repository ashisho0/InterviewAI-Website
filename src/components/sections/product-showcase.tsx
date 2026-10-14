import { showcase as c } from "@/content/home";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { FormMockup } from "@/components/mockups/form-mockup";
import { ProgressMockup } from "@/components/mockups/progress-mockup";
import { CategoryTabsMockup } from "@/components/mockups/category-tabs-mockup";

const mockups = { form: FormMockup, progress: ProgressMockup, report: CategoryTabsMockup };

export function ProductShowcase() {
  return (
    <Section labelledBy="showcase-title" tone="surface">
      <SectionHeading id="showcase-title" eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <ul className="mt-12 grid gap-8 lg:grid-cols-3">
        {c.items.map((item) => {
          const Mockup = mockups[item.id as keyof typeof mockups];
          return (
            <li key={item.id} className="reveal flex flex-col">
              <Mockup className="flex-1" />
              <h3 className="mt-5 text-lg font-bold text-fg">{item.title}</h3>
              <p className="mt-1 text-muted-fg">{item.body}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
