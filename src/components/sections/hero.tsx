import { Check } from "lucide-react";
import { hero } from "@/content/home";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TryNowButton } from "@/components/ui/try-now-button";
import { ReportMockup } from "@/components/mockups/report-mockup";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-sand">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-primary-soft blur-3xl" />
      <Container className="relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <p className="text-sm font-semibold text-accent-text">{hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-4 text-[clamp(2.25rem,1.6rem+3vw,3.75rem)] font-bold leading-[1.08] text-fg">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-fg md:text-xl">{hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <TryNowButton placement="hero" size="lg" label={hero.primaryCta} />
            <ButtonLink href={hero.secondaryCta.href} variant="outline" size="lg">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-fg">
            {hero.microcopy.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check aria-hidden="true" className="size-4 text-risk-low" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-xl lg:max-w-none">
          <ReportMockup className="lg:rotate-1" />
        </div>
      </Container>
    </section>
  );
}
