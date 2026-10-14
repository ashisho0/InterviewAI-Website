"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { sendContactMessage } from "@/app/contact/actions";
import { buttonClasses } from "@/components/ui/button";
import { contactPage } from "@/content/pages";
import { contactSchema, type ContactField, type ContactState } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const initialState: ContactState = { status: "idle" };

const labels: Record<ContactField, string> = {
  name: "Your name",
  email: "Email address",
  role: "I am a…",
  message: "Message",
};

const inputClasses =
  "mt-2 block w-full rounded-lg border bg-surface px-3.5 py-2.5 text-base text-fg placeholder:text-muted-fg focus-visible:outline-2 focus-visible:outline-ring";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const [clientErrors, setClientErrors] = useState<Partial<Record<ContactField, string>>>({});
  const summaryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const errors = { ...state.fieldErrors, ...clientErrors };
  const errorEntries = Object.entries(errors).filter(([, v]) => v) as [ContactField, string][];

  // After a failed submit, move focus to the error summary.
  useEffect(() => {
    if (state.status === "error") summaryRef.current?.focus();
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  // Validate a single field when the user leaves it.
  function validateField(field: ContactField, value: string) {
    const result = contactSchema.shape[field].safeParse(value);
    setClientErrors((prev) => ({ ...prev, [field]: result.success ? undefined : result.error.issues[0]?.message }));
  }

  function fieldProps(field: ContactField) {
    const error = errors[field];
    return {
      id: field,
      name: field,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `${field}-error` : undefined,
      onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        validateField(field, e.currentTarget.value),
      className: cn(inputClasses, error ? "border-risk-high" : "border-input-border"),
    };
  }

  function fieldError(field: ContactField) {
    if (!errors[field]) return null;
    return (
      <p id={`${field}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-risk-high">
        <CircleAlert aria-hidden="true" className="size-4 shrink-0" />
        {errors[field]}
      </p>
    );
  }

  const v = state.status === "error" ? state.values : undefined;

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-6">
      {state.status === "error" && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="error-summary-title"
          className="rounded-xl border-2 border-risk-high bg-risk-high-bg p-4"
        >
          <h2 id="error-summary-title" className="font-bold text-risk-high">
            {state.message}
          </h2>
          {errorEntries.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {errorEntries.map(([field, message]) => (
                <li key={field}>
                  <a href={`#${field}`} className="text-risk-high underline underline-offset-2">
                    {message}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div aria-live="polite">
        {state.status === "success" && (
          <p className="flex items-center gap-2 rounded-xl border border-risk-low bg-risk-low-bg p-4 font-medium text-risk-low">
            <CircleCheck aria-hidden="true" className="size-5 shrink-0" />
            {state.message}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold text-fg">
            {labels.name}
          </label>
          <input type="text" autoComplete="name" required defaultValue={v?.name} {...fieldProps("name")} />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="email" className="font-semibold text-fg">
            {labels.email}
          </label>
          <input type="email" autoComplete="email" inputMode="email" required defaultValue={v?.email} {...fieldProps("email")} />
          {fieldError("email")}
        </div>
      </div>

      <div>
        <label htmlFor="role" className="font-semibold text-fg">
          {labels.role}
        </label>
        <select required defaultValue={v?.role ?? ""} {...fieldProps("role")}>
          <option value="" disabled>
            Choose one
          </option>
          {contactPage.roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {fieldError("role")}
      </div>

      <div>
        <label htmlFor="message" className="font-semibold text-fg">
          {labels.message}
        </label>
        <textarea rows={6} required defaultValue={v?.message} {...fieldProps("message")} />
        <p className="mt-1.5 text-sm text-muted-fg">Between 10 and 2,000 characters.</p>
        {fieldError("message")}
      </div>

      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" disabled={pending} className={buttonClasses("primary", "lg", "w-full sm:w-auto")}>
        {pending && <LoaderCircle aria-hidden="true" className="size-5 motion-safe:animate-spin" />}
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
