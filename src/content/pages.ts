/** Copy for inner pages: /pricing, /interview-ai, /about, /contact, /features hero, 404. */

export const featuresPage = {
  title: "Every part of your UKVI interview prep, from one form",
  lead: "Personalised questions, model answers, risk flags and prep tips, generated from your own documents.",
  reportTitle: "What's in your report",
} as const;

export const pricingPage = {
  title: "Free while InterviewAI is in beta",
  lead: "Full reports, no account, no card.",
  plan: {
    badge: "Beta",
    name: "Free",
    price: "Rs 0",
    period: "during beta",
    description: "Everything InterviewAI does, for every student.",
    included: [
      "Full interview prep report",
      "15–25 personalised questions",
      "Model answers (~150 words)",
      "Risk assessment with suggestions",
      "Preparation tips",
      "PDF, DOCX, JPG, PNG or pasted text",
      "No account or card",
    ],
  },
  faqTitle: "Pricing questions",
} as const;

export const interviewAiPage = {
  title: "How InterviewAI turns your documents into interview prep",
  lead: "A UKVI-specialist prompt, strict guardrails and an AI model, working only from what you provide.",
  reads: {
    title: "What it reads",
    body: "Everything you enter is combined into one picture of your application.",
    items: [
      { title: "Your profile", body: "Name, date of birth, nationality, previous qualification, gap years, work experience, course, university, intake, tuition fee, funding source, sponsor, bank balance and visa history." },
      { title: "Your offer letter", body: "Pasted text, or a PDF, DOCX, JPG or PNG. PDFs and Word files are converted to text; images are read directly by the AI." },
      { title: "Your CV", body: "Same options as the offer letter. Used to understand your education, experience and skills." },
      { title: "University website", body: "Optional. Helps the AI focus on the right university and course." },
    ],
  },
  thinks: {
    title: "How it thinks",
    body: "The AI is instructed to act as a senior UKVI credibility interview specialist and to produce a structured report: a summary, a risk assessment, questions with model answers, and preparation tips.",
  },
  guardrails: {
    title: "Guardrails it must follow",
    items: [
      { title: "No hallucination", body: "Only use facts from your profile, your documents and established knowledge." },
      { title: "No fabricated amounts", body: "Never invent financial figures, dates or qualifications." },
      { title: "No visa guarantees", body: "Never promise approval or suggest a visa is certain." },
      { title: "Encourage truthfulness", body: "Model answers must emphasise honest, genuine responses." },
    ],
  },
  output: {
    title: "What you get back",
    body: "The response is checked for a complete structure before it reaches you. If something goes wrong, InterviewAI automatically retries once.",
  },
  limits: {
    title: "Limits, honestly",
    items: [
      "InterviewAI uses the AI model's existing knowledge of universities and courses. It doesn't browse the web.",
      "If you upload both documents as images, only the offer letter image is read. Paste your CV as text instead.",
      "It is preparation guidance, not legal or immigration advice.",
      "It cannot guarantee a visa. Decisions are made by UKVI.",
    ],
  },
} as const;

export const aboutPage = {
  title: "Built to make UKVI interview prep personal",
  lead: "Why we built a tool that prepares each student from their own file.",
  mission: {
    title: "Our mission",
    body: [
      "Every year, thousands of students from Nepal prepare for a UKVI credibility interview. Most practise from the same generic lists, even though the officer's questions depend on their own course, university, funding and history.",
      "InterviewAI exists to change that. It turns a student's own profile and documents into questions, model answers and honest risk checks, so preparation is about the student, not about a list.",
    ],
  },
  audiences: {
    title: "Who it's for",
    items: [
      { title: "Students", body: "Prepare independently, understand where your story is weak and practise explaining it clearly." },
      { title: "Consultancies", body: "Give every student preparation built around their own file, in about a minute per report." },
    ],
  },
  principles: {
    title: "What we stand for",
    items: [
      { title: "Honesty over scripts", body: "Model answers are a structure to learn from, and every answer encourages the truth." },
      { title: "No false promises", body: "InterviewAI never guarantees a visa. Only UKVI makes that decision." },
      { title: "Privacy by default", body: "No accounts and no database. Your report lives in your browser." },
      { title: "Your facts only", body: "The AI is forbidden from inventing figures, dates or qualifications." },
    ],
  },
} as const;

export const contactPage = {
  title: "Talk to us",
  lead: "Questions, feedback, or using InterviewAI at your consultancy? Send a message and we'll reply by email.",
  emailLabel: "Prefer email?",
  roles: ["Student", "Consultancy", "Other"] as const,
} as const;

export const notFoundPage = {
  title: "This page isn't on the interview list",
  lead: "The page you're looking for doesn't exist or has moved.",
} as const;
