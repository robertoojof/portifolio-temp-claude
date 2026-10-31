"use server";

import type { Locale } from "@/i18n/locales";

export type ContactField = "name" | "email" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  /** Field-level problems, keyed by field. Values are message keys. */
  fieldErrors?: Partial<
    Record<ContactField, "required" | "invalid" | "short" | "long">
  >;
  /** Form-level problem. */
  formError?: "unavailable" | "failed";
  /** Echo of what was typed, so a failed send never loses the message. */
  values?: Partial<Record<ContactField, string>>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Sending is live only when both a Resend key and a destination exist. */
export async function contactConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
}

export async function sendContact(
  _prev: ContactState,
  form: FormData,
): Promise<ContactState> {
  // Honeypot: real people never fill this hidden field.
  if (String(form.get("company") ?? "").length > 0) {
    return { status: "success" };
  }

  const lang = (String(form.get("lang") ?? "en") as Locale) || "en";
  const values = {
    name: String(form.get("name") ?? "").trim(),
    email: String(form.get("email") ?? "").trim(),
    message: String(form.get("message") ?? "").trim(),
  };

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!values.name) fieldErrors.name = "required";
  else if (values.name.length > 120) fieldErrors.name = "long";
  if (!values.email) fieldErrors.email = "required";
  else if (!EMAIL.test(values.email) || values.email.length > 200)
    fieldErrors.email = "invalid";
  if (!values.message) fieldErrors.message = "required";
  else if (values.message.length < 10) fieldErrors.message = "short";
  else if (values.message.length > 5000) fieldErrors.message = "long";
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, values };
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    return { status: "error", formError: "unavailable", values };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: values.email,
        subject: `Portfolio (${lang.toUpperCase()}): ${values.name}`,
        text: `${values.name} <${values.email}>\n\n${values.message}`,
      }),
    });
    if (!res.ok) return { status: "error", formError: "failed", values };
  } catch {
    return { status: "error", formError: "failed", values };
  }

  return { status: "success" };
}
