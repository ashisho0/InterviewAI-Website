export const mainNav = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/interview-ai" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "How InterviewAI works", href: "/interview-ai" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
] as const;

export const siteCopy = {
  tagline: "AI-made UKVI credibility interview prep, built from your own file.",
  footerBlurb:
    "Personalised UKVI credibility interview questions, model answers and risk checks for students in Nepal and the consultancies that guide them.",
  disclaimer:
    "InterviewAI is an independent preparation tool. It is not affiliated with UK Visas and Immigration (UKVI) or the Home Office. Visa decisions are made by UKVI based on your individual circumstances.",
  tryNow: "Try now",
  tryNowSrSuffix: " – open the InterviewAI app",
} as const;
