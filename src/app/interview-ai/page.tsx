import { CircleAlert, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PipelineDiagram } from "@/components/mockups/pipeline-diagram";
import { ReportMockup } from "@/components/mockups/report-mockup";
import { features } from "@/content/features";
import { interviewAiPage as c } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata = buildMetadata("interviewAi");

const trail = [{ name: "How InterviewAI works", path: "/interview-ai" }];
const questionPoints = features.find((f) => f.id === "questions")!.points;
const riskPoints = features.find((f) => f.id === "risk")!.points;

export default function InterviewAiPage() {
  return (
    <>
      <PageHero title={c.title} lead={c.lead} trail={trail} />

      <Section labelledBy="pipeline-title">
        <SectionHeading id="pipeline-title" eyebrow="Overview" title="From your file to your report" />
        <div className="mt-12">
          <PipelineDiagram />
        </div>
      </Section>

      <Section labelledBy="reads-title" tone="surface">
        <SectionHeading id="reads-title" title={c.reads.title} lead={c.reads.body} align="left" />
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {c.reads.items.map((item) => (
            <li key={item.title}>
              <Card className="h-full">
                <h3 className="text-lg font-bold text-fg">{item.title}</h3>
                <p className="mt-2 text-muted-fg">{item.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="thinks-title">
        <SectionHeading id="thinks-title" title={c.thinks.title} lead={c.thinks.body} align="left" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-bold text-fg">Six question categories</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-fg marker:text-primary">
              {questionPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-bold text-fg">Six risk checks</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-fg marker:text-primary">
              {riskPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section labelledBy="guardrails-title" tone="sand">
        <SectionHeading id="guardrails-title" title={c.guardrails.title} />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.guardrails.items.map((g) => (
            <li key={g.title} className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <ShieldCheck aria-hidden="true" className="size-7 text-risk-low" />
              <h3 className="mt-3 font-bold text-fg">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-fg">{g.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="output-title" tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading id="output-title" title={c.output.title} lead={c.output.body} align="left" />
          <div className="mx-auto w-full max-w-xl">
            <ReportMockup />
          </div>
        </div>
      </Section>

      <Section labelledBy="limits-title">
        <SectionHeading id="limits-title" title={c.limits.title} align="left" />
        <ul className="mt-8 max-w-3xl space-y-4">
          {c.limits.items.map((item) => (
            <li key={item} className="flex gap-3 text-fg">
              <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-risk-med" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
      <JsonLd data={[softwareApplicationSchema(), breadcrumbSchema(trail)]} />
    </>
  );
}
