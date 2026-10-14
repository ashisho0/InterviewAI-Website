import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "InterviewAI: walk into your UKVI credibility interview prepared";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("Walk into your UKVI credibility interview prepared");
}
