"use client";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-hel-purple hover:bg-hel-purple"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 45.057 46.2"
      >
        <g transform="translate(-2.472 -2.9)">
          <path
            d="M25,46.1V3.9"
            transform="translate(0 1)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <path
            d="M44.7,23.6,25,3.9,5.3,23.6"
            transform="translate(0 1)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </g>
      </svg>
    </button>
  );
}
