"use client";

import { useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16">

          <h2 className="font-display text-7xl sm:text-8xl md:text-[10rem] uppercase tracking-normal text-black" style={{ lineHeight: '0.9' }}>
           Video <span className="gold-text-gradient">Atskats</span>
          </h2>
          <p className="mt-4 md:mt-8 text-zinc-500 font-medium leading-relaxed mx-auto">
           Ja vēlies to piedzīvot pats - <a href="/registret-komandu" className="text-cesar-gold font-bold hover:underline">reģistrē savu komandu</a> un tiekamies jau 25. jūlijā.
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto ">
          <div className="absolute inset-0 border-2 border-cesar-gold/20 -m-2 pointer-events-none hidden md:block"></div>
          <div className="relative aspect-video bg-zinc-900 border-2 md:border-4 border-white overflow-hidden">
            {playing ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wOZpFlpIMco?si=k5Rq-j8S3-v1V6eF&autoplay=1"
                title="Cēzara Kauss 2025 video atskats"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="w-full h-full relative cursor-pointer"
              >
                <img
                  src="https://img.youtube.com/vi/wOZpFlpIMco/maxresdefault.jpg"
                  alt="Cēzara Kauss 2025 video atskats thumbnail"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-cesar-gold/90 rounded-full flex items-center justify-center border-2 md:border-4 border-black group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 md:w-10 md:h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
