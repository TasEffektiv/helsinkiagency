"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BASE =
  "https://helsinkiagency.com/wp-content/themes/webalive/assets/img/animation-img";

const pieces = [
  { src: `${BASE}/illustrator-apple-pencil.png`, rotate: -55, ox: 53, oy: 35, x: -10, z: 10 },
  { src: `${BASE}/Clapper-Board.png`, rotate: -97, ox: 50, oy: 38, x: 0, z: 30 },
  { src: `${BASE}/Strat-Brain.png`, rotate: 100, ox: 40, oy: 40, x: 0, z: 20 },
  { src: `${BASE}/PR-megaphone.png`, rotate: 55, ox: 40, oy: 40, x: 0, z: 21 },
  { src: `${BASE}/KNIFE-BODY.png`, rotate: 0, ox: 0, oy: 0, x: 0, z: 50 },
  { src: `${BASE}/lightbulb.png`, rotate: 55, ox: 55, oy: 74, x: -6, z: 22 },
  { src: `${BASE}/SEO-magnifying-glass.png`, rotate: -10, ox: 80, oy: 100, x: -11, z: 23 },
  { src: `${BASE}/SLR.png`, rotate: -55, ox: 55, oy: 75, x: 0, z: 24 },
];

export default function ServiceStack() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOpen(entry.isIntersecting),
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative mx-auto mb-14 w-full max-w-[950px] md:mb-20"
      style={{ aspectRatio: "4952 / 3604" }}
    >
      {pieces.map((p) => (
        <Image
          key={p.src}
          src={p.src}
          alt=""
          fill
          sizes="(min-width: 950px) 950px, 100vw"
          className="object-contain transition-transform duration-[2000ms] ease-out"
          style={{
            zIndex: p.z,
            transform: `translateX(${p.x}px) rotate(${open ? 0 : p.rotate}deg)`,
            transformOrigin: `${p.ox}% ${p.oy}%`,
          }}
        />
      ))}
    </div>
  );
}
