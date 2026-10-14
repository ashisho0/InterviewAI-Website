import type { MetadataRoute } from "next";
import { seo } from "@/content/seo";
import { LAST_UPDATED, SITE_URL } from "@/lib/config";

const priorities: Record<string, number> = {
  "/": 1,
  "/features": 0.8,
  "/interview-ai": 0.8,
  "/pricing": 0.8,
  "/about": 0.5,
  "/contact": 0.5,
  "/privacy": 0.3,
  "/terms": 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(seo).map(({ path }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(`${LAST_UPDATED}T00:00:00Z`),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: priorities[path] ?? 0.5,
  }));
}
