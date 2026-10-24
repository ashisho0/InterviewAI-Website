export const hero = {
  eyebrow: "For students in Nepal heading to the UK, and the consultancies that guide them",
  title: "Walk into your UKVI credibility interview prepared",
  lead: "InterviewAI reads your profile, offer letter and CV, then writes 15–25 questions specific to your course, university and funding, each with a model answer and a check on your weak spots.",
  primaryCta: "Try now, it's free",
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
  microcopy: ["No account", "Results in 30–60 seconds", "Nothing saved on our servers"],
} as const;

export type FactIcon = "categories" | "questions" | "answers" | "formats" | "signup";

export const facts: { icon: FactIcon; value: string; label: string }[] = [
  { icon: "categories", value: "6", label: "UKVI question categories" },
  { icon: "questions", value: "15–25", label: "tailored questions" },
  { icon: "answers", value: "~150", label: "words per model answer" },
  { icon: "formats", value: "4", label: "formats: PDF, DOCX, JPG, PNG" },
  { icon: "signup", value: "0", label: "sign-ups required" },
];

export const problemSolution = {
  eyebrow: "Why InterviewAI",
  title: "Your interview is about your file, not a generic list",
  problem: {
    title: "Generic question lists don't know your file",
    body: "Officers ask why this course, why this university, who is paying, and what happens after you graduate. A gap year, a change of subject or a sponsor's income makes those questions harder, and a list of “top 50 questions” won't tell you which ones you'll struggle with.",
    points: ["Same questions for every student", "No idea where your story is weak", "Answers that don't match your documents"],
  },
  solution: {
    title: "Prep built from your documents",
    body: "InterviewAI starts from your actual profile, offer letter and CV, so the questions, answers and warnings are about you.",
    points: [
      "Questions about your course, university and sponsor",
      "Risks flagged with a suggestion for each",
      "Answers that use your own facts",
    ],
  },
} as const;

export const howItWorks = {
  eyebrow: "How it works",
  title: "From form to full prep in four steps",
  lead: "No account, no setup. Most students finish the form in a few minutes.",
  steps: [
    {
      title: "Fill in your profile",
      body: "Five short sections: personal, academic, course and university, finances, and immigration history. Only seven fields are required.",
    },
    {
      title: "Add your documents",
      body: "Optional, but recommended. Paste or upload your offer letter and CV as PDF, DOCX, JPG or PNG.",
    },
    {
      title: "Generate",
      body: "Watch live progress while InterviewAI analyses your file. It usually takes 30–60 seconds.",
    },
    {
      title: "Practise",
      body: "Read your summary, review your risk flags, work through the questions by category and follow the prep tips.",
    },
  ],
} as const;

export const spotlight = {
  eyebrow: "Inside InterviewAI",
  title: "A UKVI specialist's checklist, powered by AI",
  body: "InterviewAI combines a prompt written from the point of view of a UKVI credibility interview specialist with an AI model. It reads what you give it, structures the interview into six categories, checks six common risk factors, and is forbidden from inventing numbers or promising outcomes.",
  link: { label: "How the AI works", href: "/interview-ai" },
} as const;

export const showcase = {
  eyebrow: "See it in action",
  title: "What you'll see in the app",
  lead: "The app is a single page: fill in the form on one side and your report appears on the other.",
  items: [
    { id: "form", title: "One simple form", body: "Grouped sections with a paste-or-upload switch for each document." },
    { id: "progress", title: "Live progress", body: "Updates while the AI reads your file and writes your report." },
    { id: "report", title: "Your full report", body: "Questions by category, model answers and risk ratings." },
  ],
} as const;

export const useCases = {
  eyebrow: "Who it's for",
  title: "Built for students and the people who guide them",
  items: [
    {
      icon: "student",
      title: "Students",
      body: "Prepare on your own, the night before or the month before. Know what's likely to come up and how to explain your situation clearly.",
    },
    {
      icon: "consultancy",
      title: "Consultancies",
      body: "Generate a tailored question set and risk check for each student in about a minute, so every client gets prep built around their own file, not the same list.",
    },
    {
      icon: "tricky",
      title: "Tricky files",
      body: "Gap years, a change of subject or sponsor funding? The risk check shows where your story needs work and suggests how to explain it.",
    },
  ],
} as const;

export const testimonialsSection = {
  eyebrow: "What people say",
  title: "Students and counsellors preparing with InterviewAI",
} as const;

export const finalCta = {
  title: "Your interview is about your file. Prepare with it.",
  lead: "Free, no account, and your report is ready in under a minute.",
} as const;
