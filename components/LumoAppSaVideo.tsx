"use client";

import { useEffect, useRef } from "react";

export default function LumoAppSaVideo() {
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
      className="aspect-[9/16] w-full bg-black object-cover"
      autoPlay
      muted
      loop
      controls
      playsInline
      preload="metadata"
      controlsList="nodownload"
    >
      <source
        src="/lumo-app/SA-App-Launch_15sec_9x16.mp4"
        type="video/mp4"
      />
    </video>
  );
}
