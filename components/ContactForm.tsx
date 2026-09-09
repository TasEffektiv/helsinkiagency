"use client";

import { useState, type FormEvent } from "react";

function encodeFormData(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(data),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <p className="rounded border border-white/20 bg-white/5 px-6 py-8 text-center font-body text-white">
        Thanks — we&rsquo;ve got your message and will be in touch soon.
      </p>
    );
  }

  const inputClasses =
    "w-full border border-white bg-white px-6 py-5 font-body text-[14px] font-bold text-[#707070] placeholder-[#707070] placeholder:text-[10px] placeholder:font-bold placeholder:uppercase outline-none focus:text-[#111]";

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="w-full"
      {...{ netlify: "true" }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this field blank
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2">
        <input
          required
          type="text"
          name="your-name"
          placeholder="Name*"
          className={inputClasses}
        />
        <input
          required
          type="email"
          name="your-email"
          placeholder="Email*"
          className={inputClasses}
        />
      </div>
      <div className="mt-1.5">
        <textarea
          name="your-message"
          placeholder="Message"
          className={`${inputClasses} h-[108px] resize-none md:h-[205px]`}
        />
      </div>
      {error && (
        <p className="mt-3 font-body text-[13px] text-red-400">
          Something went wrong sending your message. Please try again, or
          email us directly.
        </p>
      )}
      <div className="mt-5 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-[30px]">
        <p className="font-body text-[13px] leading-[22px] text-white/80">
          Collection Statement: By providing your personal information (PI),
          you agree to Helsinki Agency Pty Ltd collecting your PI pursuant to
          our{" "}
          <a
            href="/privacy-policy"
            className="text-hel-pink2 underline hover:text-white"
          >
            Privacy Policy
          </a>
          , which contains full details on how your PI is used / disclosed /
          stored, how you may contact us, access / correct PI held and our
          privacy complaints process. If you don&rsquo;t provide your info you
          may not be able to access our products / services. Your PI will not
          be disclosed overseas.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="min-w-[155px] shrink-0 bg-hel-pink2 px-[10px] py-[15px] font-body text-[20px] leading-none font-bold text-white uppercase transition-colors hover:bg-hel-purple disabled:opacity-60 md:text-[26px]"
        >
          {submitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}
