import type { Metadata } from "next";
import { seo, type SeoKey } from "@/content/seo";
import { LOCALE, SITE_NAME, SITE_URL } from "@/lib/config";

/** Builds title, description, canonical, Open Graph and Twitter metadata for a page. */
export function buildMetadata(key: SeoKey): Metadata {
  const { title, description, path } = seo[key];
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  // A page-level openGraph object replaces the inherited image, so point every page at the
  // shared root image unless the route has its own opengraph-image file.
  const ownImage: SeoKey[] = ["home", "interviewAi"];
  const images = ownImage.includes(key)
    ? undefined
    : [{ url: "/opengraph-image", width: 1200, height: 630, alt: "InterviewAI: UKVI credibility interview prep" }];
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: LOCALE,
      url,
      title,
      description,
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(images && { images }),
    },
  };
}
