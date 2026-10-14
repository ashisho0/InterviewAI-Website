import { ArrowRight } from "lucide-react";
import { siteCopy } from "@/content/site";
import { APP_URL, TRY_NOW_UTM } from "@/lib/config";
import { buttonClasses } from "./button";

export type TryNowPlacement = "header" | "mobile-nav" | "hero" | "spotlight" | "pricing" | "final-cta" | "page-hero" | "404";

export function tryNowHref(placement: TryNowPlacement) {
  if (!TRY_NOW_UTM) return APP_URL;
  const url = new URL(APP_URL);
  url.searchParams.set("utm_source", "website");
  url.searchParams.set("utm_medium", "cta");
  url.searchParams.set("utm_content", placement);
  return url.toString();
}

interface TryNowButtonProps {
  placement: TryNowPlacement;
  size?: "md" | "lg";
  label?: string;
  className?: string;
}

/** The single "Try now" call to action. Opens the app in the same tab. */
export function TryNowButton({ placement, size = "md", label = siteCopy.tryNow, className }: TryNowButtonProps) {
  return (
    <a
      href={tryNowHref(placement)}
      data-cta="try-now"
      data-placement={placement}
      className={buttonClasses("accent", size, `group ${className ?? ""}`)}
    >
      <span>
        {label}
        <span className="sr-only">{siteCopy.tryNowSrSuffix}</span>
      </span>
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-150 motion-safe:group-hover:translate-x-0.5"
      />
    </a>
  );
}
