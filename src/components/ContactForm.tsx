"use client";

import { useActionState, useRef } from "react";
import { sendContactMessage, type ContactState } from "@/app/actions/contact";
import { Icon } from "@/components/icons";

const initialState: ContactState = { status: "idle", message: "" };

/** Sends the message straight to your inbox (see app/actions/contact.ts). */
export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  // When the visitor started filling the form; the server rejects instant (bot) submissions
  const startedAt = useRef(0);

  function markStarted() {
    if (!startedAt.current) startedAt.current = Date.now();
  }

  function submit(formData: FormData) {
    formData.set("startedAt", String(startedAt.current));
    startedAt.current = 0;
    return formAction(formData);
  }

  // On error React still resets the form, so refill it from what the server echoed back
  const value = (k: string) => (state.status === "error" ? state.fields?.[k] : undefined);

  const label = "mb-1.5 block text-xs font-semibold text-ink";
  const field =
    "w-full rounded-full border border-accent/25 bg-surface px-3.5 py-3 text-xs text-ink outline-none transition placeholder:text-ink/45 focus:border-accent focus:ring-4 focus:ring-accent/15 disabled:opacity-60 sm:px-5 sm:py-3.5 sm:text-sm dark:border-white/15 dark:bg-white/5 dark:placeholder:text-white/40 dark:focus:ring-accent/20";

  return (
    <form
      action={submit}
      onFocusCapture={markStarted}
      onInputCapture={markStarted}
      className="mt-6 space-y-4 sm:space-y-5"
    >
      {/* Honeypot: hidden from people, but bots fill it in */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset disabled={pending} className="space-y-4 sm:space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={label}>First Name</label>
            <input id="firstName" name="firstName" required maxLength={60} autoComplete="given-name" placeholder="First name" defaultValue={value("firstName")} className={field} />
          </div>
          <div>
            <label htmlFor="lastName" className={label}>Last Name</label>
            <input id="lastName" name="lastName" maxLength={60} autoComplete="family-name" placeholder="Last name" defaultValue={value("lastName")} className={field} />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={label}>Email</label>
            <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" placeholder="Enter your email" defaultValue={value("email")} className={field} />
          </div>
          <div>
            <label htmlFor="phone" className={label}>Contact Details</label>
            <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="Enter your phone number" defaultValue={value("phone")} className={field} />
          </div>
        </div>
        <div>
          <label htmlFor="message" className={label}>Message</label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            rows={4}
            placeholder="Tell me about your project, timeline and budget"
            defaultValue={value("message")}
            className={`${field.replace("rounded-full", "rounded-xl")} resize-none`}
          />
        </div>
      </fieldset>

      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          role="status"
          aria-live="polite"
          className={`flex items-start gap-2 text-sm font-medium ${
            state.status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
          }`}
        >
          {state.status !== "idle" ? (
            <>
              <Icon name={state.status === "success" ? "check" : "x"} className="mt-0.5 h-4 w-4 shrink-0" />
              {state.message}
            </>
          ) : null}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-semibold text-bg transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100 sm:px-8 sm:py-3.5 sm:text-sm dark:bg-cream dark:text-[#0d1424]"
        >
          {pending ? "Sending…" : "Send a Message"}
          <Icon name="send" className={`h-4 w-4 ${pending ? "animate-pulse" : ""}`} />
        </button>
      </div>
    </form>
  );
}
