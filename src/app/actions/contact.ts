"use server";

import nodemailer from "nodemailer";
import { site } from "@/data/site";

/*
 * Sends contact-form messages to your inbox through your own Gmail account.
 * Setup (see README → "Contact form email"):
 *   GMAIL_USER          your Gmail address
 *   GMAIL_APP_PASSWORD  a 16-character Google App Password (not your normal password)
 *   CONTACT_TO          optional: where messages go (defaults to site.email)
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  // Echo the fields back on error so the visitor doesn't retype them
  fields?: Record<string, string>;
};

const MIN_FILL_MS = 3000; // humans take longer than this to fill the form
const LIMITS = { firstName: 60, lastName: 60, email: 120, phone: 40, message: 5000 };

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const fields = {
    firstName: get("firstName"),
    lastName: get("lastName"),
    email: get("email"),
    phone: get("phone"),
    message: get("message"),
  };

  // Spam traps: a hidden field only bots fill in, and submissions faster than a human could type.
  // Pretend success so bots don't learn to adapt.
  const startedAt = Number(get("startedAt"));
  if (get("website") || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  if (!fields.firstName || !fields.email || !fields.message) {
    return { status: "error", message: "Please add your first name, email and a message.", fields };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email)) {
    return { status: "error", message: "That email address doesn't look right.", fields };
  }
  for (const [key, max] of Object.entries(LIMITS)) {
    if (fields[key as keyof typeof fields].length > max) {
      return { status: "error", message: "One of the fields is too long. Please shorten it.", fields };
    }
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  if (!user || !pass) {
    console.error("[contact] GMAIL_USER / GMAIL_APP_PASSWORD are not set, so the message could not be sent.");
    return {
      status: "error",
      message: `Sorry, the form isn't working right now. Please email me directly at ${site.email}.`,
      fields,
    };
  }

  const name = `${fields.firstName} ${fields.lastName}`.trim();
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", fields.email],
    ["Phone", fields.phone || "Not given"],
  ];

  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
    await transporter.sendMail({
      from: { name: `${site.brand.first}${site.brand.second} Portfolio`, address: user },
      to: process.env.CONTACT_TO || site.email,
      replyTo: { name, address: fields.email }, // hitting "Reply" answers the visitor
      subject: `New portfolio message from ${name}`,
      text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${fields.message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;color:#0d1424">
          <h2 style="margin:0 0 16px;color:#2f55f4">New message from your portfolio</h2>
          <table style="border-collapse:collapse;margin-bottom:16px">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:4px 16px 4px 0;color:#5a6479">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
              )
              .join("")}
          </table>
          <div style="white-space:pre-wrap;line-height:1.6;padding:16px;background:#f2f4f8;border-radius:12px">${escapeHtml(fields.message)}</div>
          <p style="color:#5a6479;font-size:12px;margin-top:16px">Reply to this email to answer ${escapeHtml(fields.firstName)} directly.</p>
        </div>`,
    });
    return { status: "success", message: `Thanks, ${fields.firstName}! Your message has been sent. I'll get back to you soon.` };
  } catch (err) {
    console.error("[contact] Sending failed:", err);
    return {
      status: "error",
      message: `Sorry, something went wrong sending your message. Please try again or email me at ${site.email}.`,
      fields,
    };
  }
}
