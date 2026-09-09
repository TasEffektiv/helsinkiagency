"use client";

import { useEffect, useRef } from "react";

export default function LumoAppHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      className="block h-full w-full bg-black object-cover"
      autoPlay
      muted
      loop
      controls
      playsInline
      preload="metadata"
      controlsList="nodownload"
    >
      <source
        src="/lumo-app/lumo_applaunch_v4-1080p.mp4"
        type="video/mp4"
      />
    </video>
  );
}
