"use client";

import { useState } from "react";

type YearVideoProps = {
  videoUrl: string;
  videoTitle: string;
};

function getYouTubeId(url: string): string {
  const match = url.match(/(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : "";
}

export default function YearVideo({ videoUrl, videoTitle }: YearVideoProps) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYouTubeId(videoUrl);

  if (!videoId) return null;

  return (
    <div className="mb-10 md:mb-16">
      <h3 className="text-[10px] md:text-xs text-zinc-500 font-extrabold tracking-[0.3em] uppercase mb-6 md:mb-8 text-center">
        Video
      </h3>
      <div className="relative group max-w-3xl mx-auto">
        <div className="relative aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden">
          {playing ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="w-full h-full relative cursor-pointer"
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={videoTitle}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-cesar-gold/90 rounded-full flex items-center justify-center border-2 md:border-4 border-black group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 md:w-8 md:h-8 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          )}
        </div>
        <p className="text-center text-[10px] md:text-xs text-zinc-600 font-bold tracking-widest uppercase mt-3">
          {videoTitle}
        </p>
      </div>
    </div>
  );
}
