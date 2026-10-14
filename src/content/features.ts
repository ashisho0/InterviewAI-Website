/**
 * Product features. Every claim maps to code in the InterviewAI app repo (`source`, not rendered).
 */
export type FeatureIcon = "questions" | "answers" | "risk" | "documents" | "honest" | "private";

export interface Feature {
  id: string;
  icon: FeatureIcon;
  title: string;
  body: string;
  /** Longer copy used on /features */
  detail: string;
  points: string[];
  source: string;
}

export const features: Feature[] = [
  {
    id: "questions",
    icon: "questions",
    title: "Questions written for your file",
    body: "15–25 questions across the six areas UKVI officers probe: your course, your university choice, your funding, your academic progression, your plans after graduating and any gaps.",
    detail:
      "InterviewAI reads your profile and documents, then spreads its questions across the six categories of a UKVI credibility interview. Gap questions only appear when you actually have a gap.",
    points: [
      "Course Knowledge: 4–6 questions on modules, teaching and assessment",
      "University Selection: 3–5 questions on why this university",
      "Financial Credibility: 3–5 questions on sponsors, funds and loans",
      "Academic Progression: 2–4 questions on how the course builds on your studies",
      "Immigration Intent: 2–3 questions on your plans after graduation",
      "Gap Explanation: 0–3 questions, only if you have gap years",
    ],
    source: "InterviewAI/src/lib/prompts.ts (QUESTION REQUIREMENTS), src/lib/types.ts QuestionCategory",
  },
  {
    id: "answers",
    icon: "answers",
    title: "Model answers you can actually remember",
    body: "About 150 words each, built from your real details and written the way a student speaks, not a script.",
    detail:
      "Each question comes with a model answer of roughly 150 words. That's long enough to cover the points an officer listens for and short enough to remember. Answers use your own course, university, sponsor and plans.",
    points: [
      "Around 150 words (±20) per answer",
      "Conversational, not robotic or overly formal",
      "Uses facts from your profile, offer letter and CV",
    ],
    source: "InterviewAI/src/lib/prompts.ts (150-word rule, OUTPUT section)",
  },
  {
    id: "risk",
    icon: "risk",
    title: "Spot weak points before the officer does",
    body: "Each risk (course mismatch, unexplained gaps, funding, bank balance, career link, visa history) is rated low, medium or high, with a concrete suggestion.",
    detail:
      "Before you practise, InterviewAI checks your file against six common credibility risks. Each one is rated LOW, MEDIUM or HIGH, explained in plain language and paired with a suggestion you can act on.",
    points: [
      "Course mismatch with your previous qualification",
      "Gap years that aren't explained convincingly",
      "Funding source and sponsor credibility",
      "Bank balance against tuition and living costs",
      "Weak link between the course and your career",
      "Immigration red flags such as previous refusals",
    ],
    source: "InterviewAI/src/lib/prompts.ts (RISK DETECTION FRAMEWORK), src/components/risk-badge.tsx",
  },
  {
    id: "documents",
    icon: "documents",
    title: "Reads your offer letter and CV",
    body: "Paste the text or upload a PDF, DOCX, JPG or PNG. Add your university's website for extra context.",
    detail:
      "Switch between pasting text and uploading a file for both your offer letter and your CV. PDFs and Word files are converted to text; photos and scans are read by the AI directly.",
    points: [
      "PDF, DOCX, JPG and PNG, or pasted text",
      "Offer letter and CV are both optional, but make prep more specific",
      "Optional university website link for extra context",
    ],
    source: "InterviewAI/src/lib/document-parser.ts, src/app/api/generate/route.ts, src/lib/gemini.ts",
  },
  {
    id: "honest",
    icon: "honest",
    title: "Honest by design",
    body: "InterviewAI never invents figures or promises a visa. Every model answer encourages you to tell the truth.",
    detail:
      "The AI works under strict rules: use only facts from your profile and documents, never make up amounts, dates or qualifications, never promise approval, and always encourage truthful answers.",
    points: [
      "No invented financial figures, dates or qualifications",
      "No visa guarantees, ever",
      "Answers encourage honest, genuine responses",
    ],
    source: "InterviewAI/src/lib/prompts.ts (GUARDRAILS)",
  },
  {
    id: "private",
    icon: "private",
    title: "No account. Nothing stored.",
    body: "Fill in the form, get your report. There's no sign-up and no database, and your report stays in your browser.",
    detail:
      "InterviewAI has no accounts and no database. Your details are processed in memory to build your report, which is shown in your browser tab. Live progress updates keep you informed while it works.",
    points: [
      "No sign-up, no password",
      "No database. Nothing is saved on our servers",
      "Live progress while your report is generated",
    ],
    source: "InterviewAI/src/app/api/generate/route.ts (stateless SSE), package.json (no DB/auth)",
  },
];

export const reportContents = [
  { title: "Summary", body: "Your name, course, university, intake, tuition fee and bank balance at a glance." },
  { title: "Risk assessment", body: "Each risk rated LOW, MEDIUM or HIGH with an explanation and suggestion." },
  { title: "Questions and model answers", body: "15–25 questions grouped by category, each with a ~150-word answer." },
  { title: "Preparation tips", body: "Numbered, practical tips tailored to your profile." },
] as const;
