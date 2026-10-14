/** Per-page SEO. Titles are absolute (<60 chars), descriptions <160 chars. */
export const seo = {
  home: {
    path: "/",
    title: "InterviewAI – UKVI Credibility Interview Prep with AI",
    description:
      "Personalised UKVI credibility interview questions, model answers and risk checks built from your offer letter and CV. Free, no sign-up.",
  },
  features: {
    path: "/features",
    title: "Features: UKVI Interview Questions & Answers | InterviewAI",
    description:
      "15–25 tailored questions across six UKVI categories, ~150-word model answers, risk flags and prep tips, generated from your own documents.",
  },
  interviewAi: {
    path: "/interview-ai",
    title: "How InterviewAI Builds Your UKVI Interview Prep",
    description:
      "See how InterviewAI reads your profile and documents, applies a UKVI prompt with strict guardrails and uses Gemini to write your prep.",
  },
  pricing: {
    path: "/pricing",
    title: "Pricing – Free UKVI Interview Prep | InterviewAI",
    description:
      "InterviewAI is free during beta: full interview reports, model answers and risk assessment. No account or card needed.",
  },
  about: {
    path: "/about",
    title: "About InterviewAI – UKVI Interview Prep for Nepal",
    description:
      "Why we built InterviewAI: honest, personalised UKVI interview preparation for students in Nepal and the consultancies that support them.",
  },
  contact: {
    path: "/contact",
    title: "Contact InterviewAI – Students & Consultancies",
    description:
      "Questions, feedback or using InterviewAI at your consultancy? Send us a message and we'll get back to you by email.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | InterviewAI",
    description:
      "How InterviewAI processes the information you enter: no accounts, no database, and processing through Google's paid Gemini API.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | InterviewAI",
    description:
      "Terms for using InterviewAI, an independent UKVI interview preparation tool. Guidance only, no visa guarantees.",
  },
} as const;

export type SeoKey = keyof typeof seo;
