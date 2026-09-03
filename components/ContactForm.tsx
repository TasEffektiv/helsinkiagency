"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
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
    <form onSubmit={handleSubmit} className="w-full">
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
          className="min-w-[155px] shrink-0 bg-hel-pink2 px-[10px] py-[15px] font-body text-[20px] leading-none font-bold text-white uppercase transition-colors hover:bg-hel-purple md:text-[26px]"
        >
          Send
        </button>
      </div>
    </form>
  );
}
