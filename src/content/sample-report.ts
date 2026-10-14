/**
 * Example data shown in the code-built product mockups. Fictional student and university.
 * Structure mirrors GeneratedReport in InterviewAI/src/lib/types.ts.
 */
export const sampleReport = {
  summary: [
    { label: "Student", value: "Sample Student" },
    { label: "Course", value: "MSc Data Science" },
    { label: "University", value: "University of Northbridge" },
    { label: "Intake", value: "September 2026" },
    { label: "Tuition fee", value: "£25,000" },
    { label: "Bank balance", value: "£35,000" },
  ],
  risks: [
    {
      level: "LOW",
      category: "Course alignment",
      explanation: "BSc CSIT and two years as a software developer lead naturally into Data Science.",
      suggestion: "Name two modules and link them to your work experience.",
    },
    {
      level: "MEDIUM",
      category: "Funding source",
      explanation: "Funds come from parents' savings; the sponsor's income should be easy to explain.",
      suggestion: "Be ready to explain your parents' occupations and how the money was saved.",
    },
    {
      level: "HIGH",
      category: "Gap explanation",
      explanation: "A 14-month gap after graduation is not yet explained.",
      suggestion: "Describe what you did during the gap and how it relates to your course.",
    },
  ] as const,
  categories: [
    { name: "Course Knowledge", count: 5 },
    { name: "University Selection", count: 4 },
    { name: "Financial Credibility", count: 4 },
    { name: "Academic Progression", count: 3 },
    { name: "Immigration Intent", count: 3 },
    { name: "Gap Explanation", count: 2 },
  ],
  questions: [
    "Why did you choose MSc Data Science at this university?",
    "Which modules are you most looking forward to, and why?",
    "How will this course build on your BSc CSIT?",
  ],
  modelAnswer:
    "I chose this course because it combines machine learning with applied statistics, which is the gap I noticed while working as a software developer in Kathmandu. The Applied Machine Learning module and the industry project will help me move from building software to building data products…",
  tips: [
    "Practise explaining your gap year in under a minute.",
    "Know your tuition fee and living costs by heart.",
    "Speak in your own words; don't recite the model answers.",
  ],
  // Mirrors progressMessages in InterviewAI/src/app/api/generate/route.ts
  progress: [
    "Analyzing your student profile...",
    "Reading your documents...",
    "Evaluating risk factors...",
    "Generating interview questions...",
    "Building your personalized report...",
    "Almost there, finalizing results...",
  ],
  formSections: ["Personal Details", "Academic Background", "Course & University", "Financial Information", "Immigration History", "Documents"],
} as const;
