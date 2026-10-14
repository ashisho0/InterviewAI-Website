import { Breadcrumbs } from "./breadcrumbs";
import { Container } from "./container";
import { TryNowButton } from "./try-now-button";

interface PageHeroProps {
  title: string;
  lead: string;
  trail: { name: string; path: string }[];
  showCta?: boolean;
  children?: React.ReactNode;
}

export function PageHero({ title, lead, trail, showCta = true, children }: PageHeroProps) {
  return (
    <div className="border-b border-border bg-sand pb-14 pt-10 md:pb-20 md:pt-14">
      <Container>
        <Breadcrumbs trail={trail} />
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-[1.1] text-fg md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg text-muted-fg md:text-xl">{lead}</p>
          {showCta && (
            <div className="mt-8">
              <TryNowButton placement="page-hero" size="lg" />
            </div>
          )}
          {children}
        </div>
      </Container>
    </div>
  );
}
