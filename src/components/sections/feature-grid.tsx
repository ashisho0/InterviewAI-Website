import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { features } from "@/content/features";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featureIcons } from "@/components/ui/icons";

export function FeatureGrid() {
  return (
    <Section labelledBy="features-title" tone="surface">
      <SectionHeading
        id="features-title"
        eyebrow="Features"
        title="Everything you need for the credibility interview"
        lead="One form in, a complete preparation report out."
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => {
          const Icon = featureIcons[f.icon];
          return (
            <li key={f.id} className="reveal rounded-2xl border border-border bg-bg p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-on-primary">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-fg">{f.title}</h3>
              <p className="mt-2 text-muted-fg">{f.body}</p>
            </li>
          );
        })}
      </ul>
      <p className="mt-10 text-center">
        <Link href="/features" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-link underline underline-offset-4">
          See all features in detail <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </p>
    </Section>
  );
}
