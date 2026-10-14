import Link from "next/link";
import { footerNav, siteCopy } from "@/content/site";
import { CONTACT_EMAIL, COPYRIGHT_YEAR, SITE_NAME, SOCIAL_LINKS } from "@/lib/config";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-muted-fg">{siteCopy.footerBlurb}</p>
            <p className="mt-4 text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex min-h-11 items-center font-medium text-link underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
            </p>
            {SOCIAL_LINKS.length > 0 && (
              <ul className="mt-4 flex gap-4 text-sm">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="text-muted-fg underline underline-offset-4 hover:text-fg">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {footerNav.map((group) => (
            <nav key={group.title} aria-label={`Footer: ${group.title}`}>
              <h2 className="text-sm font-semibold text-fg">{group.title}</h2>
              <ul className="mt-3 space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex min-h-11 items-center text-sm text-muted-fg hover:text-fg hover:underline hover:underline-offset-4">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-fg">
          <p className="max-w-3xl">{siteCopy.disclaimer}</p>
          <p className="mt-3">
            © {COPYRIGHT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
