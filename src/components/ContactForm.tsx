"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

type Props = { email: string };

/**
 * No backend needed: the form opens the visitor's email app with the
 * message pre-filled. Swap in an API route later if you prefer.
 */
export default function ContactForm({ email }: Props) {
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const [first, last, from, phone, message] = ["firstName", "lastName", "email", "phone", "message"].map(get);
    if (!first || !from || !message) {
      setError("Please add your first name, email and a message.");
      return;
    }
    setError("");
    const subject = `New project enquiry from ${first} ${last}`.trim();
    const body = `Hi, I'm ${first} ${last}.\n\n${message}\n\nEmail: ${from}${phone ? `\nPhone: ${phone}` : ""}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const label = "mb-1.5 block text-xs font-semibold text-ink";
  const field =
    "w-full rounded-full border border-accent/25 bg-surface px-3.5 py-3 text-xs text-ink outline-none transition placeholder:text-ink/45 focus:border-accent focus:ring-4 focus:ring-accent/15 sm:px-5 sm:py-3.5 sm:text-sm dark:border-white/15 dark:bg-white/5 dark:placeholder:text-white/40 dark:focus:ring-accent/20";

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4 sm:space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={label}>First Name</label>
          <input id="firstName" name="firstName" required autoComplete="given-name" placeholder="First name" className={field} />
        </div>
        <div>
          <label htmlFor="lastName" className={label}>Last Name</label>
          <input id="lastName" name="lastName" autoComplete="family-name" placeholder="Last name" className={field} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="Enter your email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Contact Details</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell me about your project, timeline and budget"
          className={`${field.replace("rounded-full", "rounded-xl")} resize-none`}
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-semibold text-bg transition-transform hover:scale-[1.02] active:scale-95 sm:px-8 sm:py-3.5 sm:text-sm dark:bg-cream dark:text-[#0d1424]"
        >
          Send a Message
          <Icon name="send" className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
