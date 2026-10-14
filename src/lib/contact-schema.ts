import { z } from "zod";
import { contactPage } from "@/content/pages";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80, "Name must be 80 characters or fewer"),
  email: z.email("Enter a valid email address, like name@example.com").max(200),
  role: z.enum(contactPage.roles, "Choose who you are"),
  message: z
    .string()
    .trim()
    .min(10, "Your message needs at least 10 characters")
    .max(2000, "Your message must be 2,000 characters or fewer"),
});

export type ContactField = keyof z.infer<typeof contactSchema>;

export interface ContactState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
}
