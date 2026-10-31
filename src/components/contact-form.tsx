"use client";

import { useActionState, useId } from "react";
import {
  type ContactField,
  type ContactState,
  sendContact,
} from "@/app/actions/contact";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { ArrowRightIcon } from "./icons";
import { PlaceholderMark } from "./placeholder";

const initial: ContactState = { status: "idle" };

type Copy = Dictionary["form"];

export function ContactForm({
  lang,
  copy,
  placeholderLabel,
  enabled,
}: {
  lang: Locale;
  copy: Copy;
  placeholderLabel: string;
  enabled: boolean;
}) {
  const [state, action, pending] = useActionState(sendContact, initial);
  const id = useId();

  if (state.status === "success") {
    return (
      <output className="block rounded-2xl border border-line bg-surface p-8 sm:p-10">
        <p className="font-display text-2xl font-bold tracking-[-0.02em]">
          {copy.sentTitle}
        </p>
        <p className="mt-3 max-w-[44ch] leading-relaxed text-muted">
          {copy.sentBody}
        </p>
      </output>
    );
  }

  const err = (field: ContactField) => {
    const code = state.fieldErrors?.[field];
    return code
      ? copy.errors[field][code as keyof Copy["errors"][typeof field]]
      : null;
  };

  const field = (name: ContactField, label: string, multiline = false) => {
    const message = err(name);
    const inputId = `${id}-${name}`;
    const errId = `${inputId}-err`;
    const common = {
      id: inputId,
      name,
      required: true,
      disabled: !enabled || pending,
      defaultValue: state.values?.[name] ?? "",
      "aria-invalid": message ? true : undefined,
      "aria-describedby": message ? errId : undefined,
      className: `w-full rounded-lg border bg-ground px-4 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-colors duration-200 ease-out outline-none focus:border-signal disabled:cursor-not-allowed disabled:opacity-60 ${
        message ? "border-signal" : "border-line-strong hover:border-muted"
      }`,
    };
    return (
      <div>
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-semibold text-ink"
        >
          {label}
        </label>
        {multiline ? (
          <textarea
            {...common}
            rows={6}
            maxLength={5000}
            placeholder={copy.messageHint}
            className={`${common.className} min-h-40 resize-y py-3 leading-relaxed`}
          />
        ) : (
          <input
            {...common}
            type={name === "email" ? "email" : "text"}
            autoComplete={name === "email" ? "email" : "name"}
            maxLength={name === "email" ? 200 : 120}
            className={`${common.className} h-12`}
          />
        )}
        {message ? (
          <p id={errId} className="mt-2 text-sm font-medium text-signal">
            {message}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    <form
      action={action}
      noValidate
      className="rounded-2xl border border-line bg-surface p-6 sm:p-9"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
            {copy.title}
          </h3>
          {enabled ? null : <PlaceholderMark label={placeholderLabel} />}
        </div>
        {enabled ? null : (
          <p className="mt-3 rounded-lg border border-dashed border-line-strong px-4 py-3 text-sm leading-relaxed text-muted">
            {copy.notConfigured}
          </p>
        )}
      </div>

      <input type="hidden" name="lang" value={lang} />
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          {field("name", copy.name)}
          {field("email", copy.email)}
        </div>
        {field("message", copy.message, true)}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={!enabled || pending}
          className="group inline-flex min-h-13 items-center gap-2.5 rounded-lg bg-signal px-6 text-[0.9375rem] font-bold text-on-signal transition-[opacity,transform] duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90 disabled:translate-y-0 disabled:cursor-not-allowed disabled:border disabled:border-line-strong disabled:bg-transparent disabled:text-muted disabled:opacity-100"
        >
          {pending ? copy.sending : copy.send}
          <ArrowRightIcon className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
        </button>
        <output aria-live="polite" className="text-sm text-muted">
          {state.formError ? copy.errors.form[state.formError] : ""}
        </output>
      </div>
    </form>
  );
}
