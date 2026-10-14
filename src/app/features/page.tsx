import { Check } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/ui/page-hero";
import { featureIcons } from "@/components/ui/icons";
import { CategoryTabsMockup } from "@/components/mockups/category-tabs-mockup";
import { FormMockup } from "@/components/mockups/form-mockup";
import { ProgressMockup } from "@/components/mockups/progress-mockup";
import { ReportMockup } from "@/components/mockups/report-mockup";
import { RiskMockup } from "@/components/mockups/risk-mockup";
import { features, reportContents } from "@/content/features";
import { featuresPage } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata("features");

const visuals: Record<string, React.ComponentType<{ className?: string }>> = {
  questions: CategoryTabsMockup,
  answers: ReportMockup,
  risk: RiskMockup,
  documents: FormMockup,
  private: ProgressMockup,
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero title={featuresPage.title} lead={featuresPage.lead} trail={[{ name: "Features", path: "/features" }]} />

      {features.map((f, i) => {
        const Icon = featureIcons[f.icon];
        const Visual = visuals[f.id];
        return (
          <Section key={f.id} id={f.id} labelledBy={`${f.id}-title`} tone={i % 2 ? "surface" : "default"}>
            <div className={cn("grid items-center gap-10", Visual && "lg:grid-cols-2")}>
              <div className={cn(Visual && i % 2 && "lg:order-2")}>
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-on-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h2 id={`${f.id}-title`} className="mt-5 text-3xl font-bold text-fg">
                  {f.title}
                </h2>
                <p className="mt-4 text-lg text-muted-fg">{f.detail}</p>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-3 text-fg">
                      <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-risk-low" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              {Visual && (
                <div className="reveal mx-auto w-full max-w-xl">
                  <Visual />
                </div>
              )}
            </div>
          </Section>
        );
      })}

      <Section labelledBy="report-contents-title" tone="sand">
        <SectionHeading id="report-contents-title" title={featuresPage.reportTitle} />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reportContents.map((item, i) => (
            <li key={item.title} className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <span className="text-sm font-bold text-accent-text">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold text-fg">{item.title}</h3>
              <p className="mt-2 text-muted-fg">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
      <JsonLd data={[softwareApplicationSchema(), breadcrumbSchema([{ name: "Features", path: "/features" }])]} />
    </>
  );
}
