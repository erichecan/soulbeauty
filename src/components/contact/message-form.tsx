"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const fields = [
  { name: "name", label: "Name", placeholder: "Your full name", required: true },
  {
    name: "email",
    label: "Email",
    placeholder: "Your email address",
    required: true,
    type: "email",
  },
  { name: "phone", label: "Phone", placeholder: "Your phone number", required: false },
] as const;

export function MessageForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      message,
      "",
      "—",
      `Name: ${name}`,
      `Email: ${from}`,
      phone ? `Phone: ${phone}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const subject = `Website enquiry from ${name}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="rounded-2xl border border-lavender-line bg-surface px-6 py-5">
      <h2 className="font-display text-[32px] font-bold leading-[1.1] text-ink">
        Send Us a Message
      </h2>
      <p className="mt-1 text-[13.5px] text-ink-body">
        We&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-[13px] font-semibold text-ink"
            >
              {field.label}{" "}
              {field.required && <span className="text-brand-accent">*</span>}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={"type" in field ? field.type : "text"}
              required={field.required}
              placeholder={field.placeholder}
              className="mt-1.5 w-full rounded-lg border border-lavender-line bg-white px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-brand/50"
            />
          </div>
        ))}

        <div>
          <label htmlFor="message" className="block text-[13px] font-semibold text-ink">
            Message <span className="text-brand-accent">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="How can we help you?"
            className="mt-1.5 w-full rounded-lg border border-lavender-line bg-white px-3.5 py-2.5 text-[14px] text-ink outline-none transition-colors placeholder:text-ink-soft/70 focus:border-brand/50"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-5 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-brand-hover"
        >
          Send Message
          <ArrowRight className="h-4 w-4 shrink-0" />
        </button>

        <p className="min-h-[18px] text-center text-[12.5px] text-ink-soft">
          {sent
            ? "Your email app should now be open with your message ready to send."
            : `Opens your email app and sends to ${email}`}
        </p>
      </form>
    </section>
  );
}
