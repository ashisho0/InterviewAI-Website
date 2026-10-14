"use server";

import nodemailer from "nodemailer";
import { contactSchema, type ContactField, type ContactState } from "@/lib/contact-schema";

const FIELDS: ContactField[] = ["name", "email", "role", "message"];

function smtpConfigured() {
  return Boolean(process.env.ZOHO_SMTP_USER && process.env.ZOHO_SMTP_PASS);
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

  if (!smtpConfigured()) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] SMTP not configured; message not sent:", { name, email, role, message });
      return { status: "success", message: "Thanks! (Development mode: the message was logged, not emailed.)" };
    }
    console.error("[contact] ZOHO_SMTP_USER / ZOHO_SMTP_PASS are not set");
    return { status: "error", message: "We couldn't send your message right now. Please email us instead.", values };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST ?? "smtp.zoho.com",
      port: Number(process.env.ZOHO_SMTP_PORT ?? 465),
      secure: Number(process.env.ZOHO_SMTP_PORT ?? 465) === 465,
      auth: { user: process.env.ZOHO_SMTP_USER, pass: process.env.ZOHO_SMTP_PASS },
    });
    await transporter.sendMail({
      // Zoho only allows sending from the authenticated mailbox; the visitor goes in Reply-To.
      from: `InterviewAI website <${process.env.ZOHO_SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL ?? process.env.ZOHO_SMTP_USER,
      replyTo: `${name} <${email}>`,
      subject: `[InterviewAI] ${role} enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nI am a: ${role}\n\n${message}`,
    });
    return { status: "success", message: "Thanks! Your message has been sent. We'll reply by email." };
  } catch (error) {
    console.error("[contact] send failed", error);
    return { status: "error", message: "We couldn't send your message right now. Please email us instead.", values };
  }
}
