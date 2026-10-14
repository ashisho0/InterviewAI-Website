import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "How InterviewAI turns your documents into UKVI interview prep";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage("How InterviewAI turns your documents into interview prep", "A UKVI prompt, strict guardrails and Gemini 2.5 Flash");
}
