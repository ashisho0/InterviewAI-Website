import { Container } from "@/components/ui/container";
import { TryNowButton } from "@/components/ui/try-now-button";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-md supports-[backdrop-filter]:bg-surface/75">
      <Container className="relative flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-2">
          <TryNowButton placement="header" />
          <MobileNav tryNow={<TryNowButton placement="mobile-nav" size="lg" />} />
        </div>
      </Container>
    </header>
  );
}
