import type { LegalSection } from "@/content/legal";
import { LAST_UPDATED } from "@/lib/config";
import { Breadcrumbs } from "./breadcrumbs";
import { Container } from "./container";

interface LegalPageProps {
  title: string;
  intro: string;
  sections: LegalSection[];
  path: string;
}

const formatted = new Date(`${LAST_UPDATED}T00:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function LegalPage({ title, intro, sections, path }: LegalPageProps) {
  return (
    <Container className="py-10 md:py-14">
      <Breadcrumbs trail={[{ name: title, path }]} />
      <article className="max-w-[65ch]">
        <h1 className="text-4xl font-bold text-fg md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-fg">
          Last updated: <time dateTime={LAST_UPDATED}>{formatted}</time>
        </p>
        <p className="mt-6 text-lg text-fg">{intro}</p>
        {sections.map((section) => (
          <section key={section.title} className="mt-10">
            <h2 className="text-2xl font-bold text-fg">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} className="mt-3 text-muted-fg">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-muted-fg marker:text-primary">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>
    </Container>
  );
}
