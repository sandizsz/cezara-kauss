"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

const BATCH_SIZE = 9;

type PhotoGalleryProps = {
  photos: string[];
  year: number;
};

export default function PhotoGallery({ photos, year }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? photos.length - 1 : lightboxIndex - 1);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === photos.length - 1 ? 0 : lightboxIndex + 1);
  };

  if (photos.length === 0) return null;

  const visiblePhotos = photos.slice(0, visibleCount);
  const hasMore = visibleCount < photos.length;
  const remaining = photos.length - visibleCount;

  return (
    <div>
      <h3 className="text-[10px] md:text-xs text-zinc-500 font-extrabold tracking-[0.3em] uppercase mb-6 md:mb-8 text-center">
        Foto galerija
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 max-w-4xl mx-auto">
        {visiblePhotos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-4/3 bg-zinc-900 overflow-hidden group cursor-pointer border border-zinc-800"
          >
            <Image
              src={photo}
              alt={`Cēzara Kauss ${year} — foto ${i + 1}`}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </button>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-6 md:mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + BATCH_SIZE)}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-cesar-gold/50 text-zinc-400 hover:text-cesar-gold font-extrabold text-[10px] md:text-xs px-8 py-3 uppercase tracking-[0.2em] transition-all cursor-pointer"
          >
            Rādīt vairāk ({remaining})
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
