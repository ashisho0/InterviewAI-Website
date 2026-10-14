import { finalCta } from "@/content/home";
import { Container } from "@/components/ui/container";
import { TryNowButton } from "@/components/ui/try-now-button";

/** The band is navy in both themes, so the accent and focus tokens are re-pointed locally. */
const bandTokens = {
  "--accent": "#b45309",
  "--accent-hover": "#92400e",
  "--on-accent": "#ffffff",
  "--ring": "#ffffff",
} as React.CSSProperties;

export function FinalCta({ title = finalCta.title, lead = finalCta.lead }: { title?: string; lead?: string }) {
  return (
    <section aria-labelledby="final-cta-title" className="py-16 md:py-24">
      <Container>
        <div className="reveal relative overflow-hidden rounded-3xl bg-band px-6 py-14 text-center text-band-fg md:px-12 md:py-20"
          style={bandTokens}>
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-white/10 blur-2xl" />
          <h2 id="final-cta-title" className="relative mx-auto max-w-2xl text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-band-muted">{lead}</p>
          <div className="relative mt-8 flex justify-center">
            <TryNowButton placement="final-cta" size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
}
