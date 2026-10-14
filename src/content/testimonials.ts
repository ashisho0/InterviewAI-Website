/**
 * PLACEHOLDER testimonials. Replace with real quotes (with permission) and set `placeholder: false`.
 * While `placeholder` is true the card shows a visible "Placeholder" label so it can't go live unnoticed.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  placeholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The risk check flagged my gap year before my interview. I practised the explanation until I could say it clearly in my own words.",
    name: "Student name",
    role: "MSc student, Kathmandu",
    placeholder: true,
  },
  {
    quote:
      "We run a report for every student before their credibility interview. Each one gets questions about their own course and sponsor.",
    name: "Counsellor name",
    role: "Education consultancy, Kathmandu",
    placeholder: true,
  },
  {
    quote:
      "The financial questions were exactly what I needed. I finally understood how to explain who is paying and why.",
    name: "Student name",
    role: "Undergraduate student, Pokhara",
    placeholder: true,
  },
];
