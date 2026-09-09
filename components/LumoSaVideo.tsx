"use client";

import { useEffect, useRef } from "react";

export default function LumoSaVideo() {
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
      className="aspect-video w-full bg-black shadow-2xl"
      autoPlay
      muted
      controls
      playsInline
      preload="metadata"
      controlsList="nodownload"
    >
      <source
        src="/lumo-sa/Lumo-Energy-SA_Brighter-SA-TVC.mp4"
        type="video/mp4"
      />
    </video>
  );
}
