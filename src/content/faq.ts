export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaq: FaqItem[] = [
  {
    question: "Is InterviewAI affiliated with UKVI or the Home Office?",
    answer:
      "No. InterviewAI is an independent preparation tool. It is not connected to UK Visas and Immigration, the Home Office or any university.",
  },
  {
    question: "Does InterviewAI guarantee my visa?",
    answer:
      "No. Visa decisions are made by UKVI based on your individual circumstances. InterviewAI helps you prepare, and it always encourages you to answer truthfully.",
  },
  {
    question: "What information do I need?",
    answer:
      "Seven fields are required: full name, date of birth, nationality, previous qualification, course, university and intake. Financial details, gap explanation, work experience, visa history and your documents are optional, but they make your prep much more specific.",
  },
  {
    question: "Which documents can I add?",
    answer:
      "Your offer letter and CV, either pasted as text or uploaded as PDF, DOCX, JPG or PNG. If you upload both as images, only the offer letter image is read, so paste your CV as text for the best results.",
  },
  {
    question: "Do you store my data?",
    answer:
      "No. InterviewAI has no accounts and no database. Your details are processed in memory and sent to a third-party AI service to write your report. The report stays in your browser tab, so copy or save it before you close the page.",
  },
  {
    question: "How long does it take?",
    answer: "Usually 30–60 seconds. You'll see live progress updates while your report is being written.",
  },
  {
    question: "Should I memorise the model answers?",
    answer:
      "Use them as a structure, not a script. Officers notice memorised answers. Learn the points, say them in your own words, and always tell the truth.",
  },
  {
    question: "Can consultancies use InterviewAI?",
    answer:
      "Yes. Consultancies can run one report per student to prepare each client from their own file. It's free while InterviewAI is in beta.",
  },
];

export const pricingFaq: FaqItem[] = [
  {
    question: "Is InterviewAI really free?",
    answer:
      "Yes. While InterviewAI is in beta, the full report is free: questions, model answers, risk assessment and preparation tips. No card, no account.",
  },
  {
    question: "Is there a limit on reports?",
    answer:
      "There's no account or quota. Each report covers one student, so run a new one whenever your details or documents change.",
  },
  {
    question: "Can my consultancy use it for many students?",
    answer:
      "Yes. Run one report per student. If you'd like to talk about using InterviewAI at your consultancy, get in touch through the contact page.",
  },
  homeFaq[4],
];
