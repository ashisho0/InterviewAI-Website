import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const mark = (
  <svg width="88" height="88" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="8" fill="#ffffff" />
    <g fill="#1e3a8a">
      <circle cx="16" cy="6.2" r="1.1" />
      <path d="M16 7.6 24.5 12H7.5Z" />
      <rect x="7" y="12.4" width="18" height="1.4" rx=".4" />
      <path d="M8.5 14.4h15V25h-2.8v-5.2a2.9 2.9 0 0 0-5.7 0V25h-.1v-5.2a2.9 2.9 0 0 0-5.7 0V25H8.5Z" />
      <rect x="6" y="25.4" width="20" height="1.2" rx=".6" />
    </g>
  </svg>
);

/** Shared Open Graph card: navy background, logo mark, page title and tagline. */
export function renderOgImage(title: string, subtitle = "UKVI credibility interview prep, built from your own file") {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #1e3a8a 0%, #172554 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {mark}
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
            Interview<span style={{ color: "#fbbf24" }}>AI</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>{title}</div>
          <div style={{ fontSize: 32, color: "#dbe4ff" }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#fbbf24", fontWeight: 600 }}>
          Free · No account · interviewai.cc
        </div>
      </div>
    ),
    ogSize,
  );
}
