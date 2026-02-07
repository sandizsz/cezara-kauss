"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

type PhotoGalleryProps = {
  photos: string[];
  year: number;
};

export default function PhotoGallery({ photos, year }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? photos.length - 1 : lightboxIndex - 1);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === photos.length - 1 ? 0 : lightboxIndex + 1);
  };

  if (photos.length === 0) return null;

  return (
    <div>
      <h3 className="text-[10px] md:text-xs text-zinc-500 font-extrabold tracking-[0.3em] uppercase mb-6 md:mb-8 text-center">
        Foto galerija
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 max-w-4xl mx-auto">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-[4/3] bg-zinc-900 overflow-hidden group cursor-pointer border border-zinc-800"
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
