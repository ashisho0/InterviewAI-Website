/**
 * Site-wide settings. Edit these (or the matching env vars) instead of touching components.
 */

function stripTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const SITE_NAME = "InterviewAI";

/** Public URL of this marketing site. Used for canonical URLs, sitemap and Open Graph. */
export const SITE_URL = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.interviewai.cc",
);

/** The InterviewAI app. Every "Try now" button links here. */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://www.app.interviewai.cc/";

/** Append utm_source/utm_medium/utm_content to "Try now" links so you can see which placement converts. */
export const TRY_NOW_UTM = true;

export const CONTACT_EMAIL = "ashish@interviewai.cc";

/** Shown on legal pages and used as lastModified in the sitemap. */
export const LAST_UPDATED = "2026-10-13";

/** Copyright year in the footer. Kept static so pages stay fully prerendered. */
export const COPYRIGHT_YEAR = 2026;

export const LOCALE = "en_GB";

/** Add profile URLs (Facebook, Instagram, LinkedIn…) to show them in the footer and Organization schema. */
export const SOCIAL_LINKS: { label: string; href: string }[] = [];

/** Legal jurisdiction used in the terms of use. */
export const JURISDICTION = {
  country: "Nepal",
  courts: "the courts of Kathmandu, Nepal",
};
