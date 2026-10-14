"use server";

import { contactSchema, type ContactField, type ContactState } from "@/lib/contact-schema";

const FIELDS: ContactField[] = ["name", "email", "role", "message"];

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function emailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = Object.fromEntries(FIELDS.map((f) => [f, String(formData.get(f) ?? "")])) as Record<ContactField, string>;

  // Honeypot: real visitors never see or fill this field.
  if (String(formData.get("company") ?? "").length > 0) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactField;
      fieldErrors[field] ??= issue.message;
    }
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors, values };
  }

  const { name, email, role, message } = parsed.data;

  if (!emailConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] RESEND_API_KEY not set; message not sent:", { name, email, role, message });
      return { status: "success", message: "Thanks! (Development mode: the message was logged, not emailed.)" };
    }
    console.error("[contact] RESEND_API_KEY is not set");
    return { status: "error", message: "We couldn't send your message right now. Please email us instead.", values };
  }

  try {
    // Sent through Resend; the visitor goes in reply_to so replying from the inbox reaches them.
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "InterviewAI website <contact@interviewai.cc>",
        to: [process.env.CONTACT_TO_EMAIL ?? "ashish@interviewai.cc"],
        reply_to: `${name} <${email}>`,
        subject: `[InterviewAI] ${role} enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nI am a: ${role}\n\n${message}`,
      }),
    });
    if (!response.ok) {
      throw new Error(`Resend ${response.status}: ${(await response.text()).slice(0, 300)}`);
    }
    return { status: "success", message: "Thanks! Your message has been sent. We'll reply by email." };
  } catch (error) {
    console.error("[contact] send failed", error);
    return { status: "error", message: "We couldn't send your message right now. Please email us instead.", values };
  }
}
