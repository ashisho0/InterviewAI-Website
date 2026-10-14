import type { Metadata } from "next";
import { NotFoundIllustration } from "@/components/illustrations/not-found-illustration";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TryNowButton } from "@/components/ui/try-now-button";
import { notFoundPage as c } from "@/content/pages";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-20 text-center md:py-28">
      <NotFoundIllustration className="w-56" />
      <h1 className="mt-8 max-w-xl text-4xl font-bold text-fg md:text-5xl">{c.title}</h1>
      <p className="mt-4 max-w-md text-lg text-muted-fg">{c.lead}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <TryNowButton placement="404" size="lg" />
        <ButtonLink href="/" variant="outline" size="lg">
          Go to the home page
        </ButtonLink>
      </div>
      <nav aria-label="Popular pages" className="mt-8">
        <ul className="flex flex-wrap justify-center gap-x-6 text-sm">
          {[
            { href: "/features", label: "Features" },
            { href: "/pricing", label: "Pricing" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <li key={l.href}>
              <ButtonLink href={l.href} variant="ghost">
                {l.label}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
