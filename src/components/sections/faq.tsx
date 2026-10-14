import type { FaqItem } from "@/content/faq";
import { FaqList } from "@/components/ui/faq-list";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  return (
    <Section labelledBy="faq-title">
      <SectionHeading id="faq-title" eyebrow="FAQ" title={title} />
      <div className="mt-12">
        <FaqList items={items} />
      </div>
    </Section>
  );
}
