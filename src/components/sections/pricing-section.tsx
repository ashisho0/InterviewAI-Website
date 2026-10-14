import Link from "next/link";
import { pricingPage } from "@/content/pages";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingCard } from "./pricing-card";

export function PricingSection() {
  return (
    <Section labelledBy="pricing-title" tone="surface">
      <SectionHeading id="pricing-title" eyebrow="Pricing" title={pricingPage.title} lead={pricingPage.lead} />
      <div className="reveal mt-12">
        <PricingCard />
      </div>
      <p className="mt-8 text-center text-sm text-muted-fg">
        Questions about pricing?{" "}
        <Link href="/pricing" className="font-semibold text-link underline underline-offset-4">
          Read the pricing FAQ
        </Link>
      </p>
    </Section>
  );
}
