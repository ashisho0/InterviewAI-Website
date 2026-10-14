import type { MetadataRoute } from "next";
import { seo } from "@/content/seo";
import { SITE_NAME } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: seo.home.description,
    start_url: "/",
    display: "browser",
    background_color: "#f8fafc",
    theme_color: "#1e3a8a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
