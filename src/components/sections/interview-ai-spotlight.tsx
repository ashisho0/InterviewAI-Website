import { spotlight as c } from "@/content/home";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TryNowButton } from "@/components/ui/try-now-button";
import { PipelineDiagram } from "@/components/mockups/pipeline-diagram";

export function InterviewAiSpotlight() {
  return (
    <Section labelledBy="spotlight-title" tone="sand">
      <SectionHeading id="spotlight-title" eyebrow={c.eyebrow} title={c.title} lead={c.body} />
      <div className="reveal mt-12">
        <PipelineDiagram />
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <TryNowButton placement="spotlight" size="lg" />
        <ButtonLink href={c.link.href} variant="outline" size="lg">
          {c.link.label}
        </ButtonLink>
      </div>
    </Section>
  );
}
