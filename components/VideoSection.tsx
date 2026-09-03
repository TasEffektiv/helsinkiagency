"use client";

import Image from "next/image";
import { useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative mt-8 w-full md:mt-[124px]">
      <div className="relative w-full" style={{ aspectRatio: "1920 / 947" }}>
        <Image
          src="https://www.helsinkiagency.com/wp-content/uploads/2024/03/hand-video-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-contain"
        />
        <div
          className="absolute overflow-hidden"
          style={{
            left: "32.344%",
            top: "14.784%",
            right: "32.813%",
            bottom: "45.512%",
          }}
        >
          {playing ? (
            <iframe
              className="h-full w-full"
              src="https://player.vimeo.com/video/816800419?color&autopause=0&loop=0&muted=0&title=0&portrait=0&byline=0&autoplay=1"
              title="Helsinki Agency showreel"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Play video"
              className="group relative block h-full w-full cursor-pointer"
            >
              <Image
                src="https://www.helsinkiagency.com/wp-content/uploads/2024/02/video-thumnail-image.png"
                alt=""
                fill
                sizes="(min-width: 1400px) 700px, 40vw"
                className="object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
                <svg
                  viewBox="0 0 1000 1000"
                  className="h-10 w-10 md:h-16 md:w-16"
                  fill="white"
                >
                  <path d="M925,500c0,10.5-5.5,20-14.5,25.5l-720,416c-4.5,3-10,4.5-15.5,4.5c-5,0-10.5-1.5-15-4C150.5,933.5,145,924.5,145,914.5V83.5c0-10,5.5-19,14-24C168.5,54,183,53,192.5,58.5l720,416C921.5,479.5,927,489.5,925,500z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
