import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { FinalCta } from "@/components/sections/final-cta";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutPage as c } from "@/content/pages";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata("about");

const trail = [{ name: "About", path: "/about" }];

export default function AboutPage() {
  return (
    <>
      <PageHero title={c.title} lead={c.lead} trail={trail} showCta={false} />

      <Section labelledBy="mission-title">
        <div className="max-w-3xl">
          <h2 id="mission-title" className="text-3xl font-bold text-fg">
            {c.mission.title}
          </h2>
          {c.mission.body.map((p) => (
            <p key={p} className="mt-4 text-lg text-muted-fg">
              {p}
            </p>
          ))}
          <p className="mt-4 text-lg text-muted-fg">
            Curious how it works under the hood?{" "}
            <Link href="/interview-ai" className="font-semibold text-link underline underline-offset-4">
              Read how InterviewAI builds your prep
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section labelledBy="audience-title" tone="surface">
        <SectionHeading id="audience-title" title={c.audiences.title} align="left" />
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {c.audiences.items.map((a) => (
            <li key={a.title}>
              <Card className="h-full">
                <h3 className="text-xl font-bold text-fg">{a.title}</h3>
                <p className="mt-2 text-muted-fg">{a.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="principles-title" tone="sand">
        <SectionHeading id="principles-title" title={c.principles.title} align="left" />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {c.principles.items.map((p) => (
            <li key={p.title}>
              <Card className="h-full">
                <h3 className="text-lg font-bold text-fg">{p.title}</h3>
                <p className="mt-2 text-muted-fg">{p.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCta />
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
