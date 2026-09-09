"use client";

import { useState } from "react";
import Image from "next/image";

export default function LumoAppSocialVideo() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <video
        className="aspect-square w-full bg-black object-cover"
        autoPlay
        controls
        playsInline
        preload="metadata"
        controlsList="nodownload"
      >
        <source
          src="/lumo-app/LumoAppLaunchSocial_1080x1350_v1.mp4"
          type="video/mp4"
        />
      </video>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Play video"
      className="group relative block aspect-square w-full"
    >
      <Image
        src="/lumo-app/LumoAppLaunchSocial-thumb.png"
        alt="Lumo VIC app launch social video"
        fill
        sizes="(max-width: 767px) 100vw, 354px"
        className="object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="42"
          viewBox="0 0 39.193 41.602"
          className="drop-shadow"
        >
          <path
            d="M6.9,8.6V41.4A2.831,2.831,0,0,0,11,43.9L41.6,27.5a2.693,2.693,0,0,0,1.1-3.8,2.892,2.892,0,0,0-1.1-1.1L11,6.1A2.861,2.861,0,0,0,7.2,7.3,2.768,2.768,0,0,0,6.9,8.6Z"
            transform="translate(-5.4 -4.098)"
            fill="#fff"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </svg>
      </span>
    </button>
  );
}
