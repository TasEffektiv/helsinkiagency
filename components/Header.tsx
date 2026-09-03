"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/", underline: "bg-hel-pink" },
  { label: "Sisu", href: "/#sisu", underline: "bg-hel-purple" },
  { label: "Work", href: "/#casestudy", underline: "bg-hel-orange" },
  { label: "Services", href: "/#services", underline: "bg-hel-teal" },
  { label: "Contact", href: "/#contactus", underline: "bg-hel-cyan" },
];

const sectionLogos: Record<string, string> = {
  home: "https://www.helsinkiagency.com/wp-content/uploads/2024/04/new-header-logo.png",
  sisu: "https://www.helsinkiagency.com/wp-content/uploads/2024/04/header-logo1.svg",
  work: "https://www.helsinkiagency.com/wp-content/uploads/2024/04/header-logo5.svg",
  services: "https://www.helsinkiagency.com/wp-content/uploads/2024/04/header-logo2.svg",
  clients: "https://www.helsinkiagency.com/wp-content/uploads/2024/04/header-logo3.svg",
  contactus: "https://www.helsinkiagency.com/wp-content/uploads/2024/04/header-logo4.svg",
};

const sectionOrder = [
  "home",
  "sisu",
  "work",
  "casestudy",
  "services",
  "clients",
  "contactus",
];

const innerLogo =
  "https://www.helsinkiagency.com/wp-content/uploads/2024/04/inner-casestudy-logo.svg";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("home");
  const [outgoing, setOutgoing] = useState<string | null>(null);
  const currentRef = useRef("home");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isHome) return;

    function handleScroll() {
      let visible = "home";
      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          visible = id;
          break;
        }
      }

      if (!sectionLogos[visible] || visible === currentRef.current) return;

      setOutgoing(currentRef.current);
      setCurrent(visible);
      currentRef.current = visible;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setOutgoing(null), 300);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isHome]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/90">
      <nav className="relative mx-auto flex w-full max-w-[1400px] items-center px-5 py-4 nav:min-h-[170px] nav:px-10 nav:py-0">
        <Link
          href="/"
          className="relative z-10 block h-[80px] w-[90px] overflow-hidden nav:absolute nav:top-[62px] nav:left-10 nav:h-[180px] nav:w-[190px]"
        >
          {isHome ? (
            Object.entries(sectionLogos).map(([id, src]) => (
              <Image
                key={id}
                src={src}
                alt="Helsinki Agency"
                width={208}
                height={187}
                className={`absolute inset-0 h-full w-full object-contain transition-transform duration-100 ease-out ${
                  id === current
                    ? "translate-x-0"
                    : id === outgoing
                      ? "-translate-x-full"
                      : "translate-x-full"
                }`}
                priority={id === "home"}
              />
            ))
          ) : (
            <Image
              src={innerLogo}
              alt="Helsinki Agency"
              width={264}
              height={258}
              className="absolute inset-0 h-full w-full object-contain"
              priority
            />
          )}
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="z-10 ml-auto flex h-10 w-10 items-center justify-center border border-white/30 text-white nav:hidden"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>

        <ul
          className={`${
            open ? "flex" : "hidden"
          } absolute top-full left-0 w-full flex-col bg-black/95 nav:static nav:ml-auto nav:flex nav:w-auto nav:flex-row nav:items-center nav:bg-transparent`}
        >
          {navItems.map((item) => (
            <li key={item.label} className="relative px-0 nav:px-2.5">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="group relative block min-w-[110px] px-5 py-3 text-center text-[13px] font-medium tracking-[1px] text-white uppercase nav:min-w-[130px] nav:px-[30px] nav:pt-[10px] nav:pb-[20px]"
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute top-[46px] left-0 hidden h-[68px] w-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 nav:block ${item.underline}`}
                />
                <span
                  className={`absolute top-[40px] left-0 hidden h-[6px] w-full ${item.underline} nav:block`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
