"use client";

import { useEffect, useRef } from "react";

const sponsors = ["GULBENES NOVADS", "SIA NLZ", "GULBENES ALUS", "JC BĀZE", "WINWIN SPORTS", "4MOVE", "LFF ZA", "DHL", "ELITE NORDIC CONSTRUCTIONS", "AKVILE", "WATERLIX", "BOARD GAME ZIBSNIS", "JANA-S", "DIMDIŅI", "4MOVE", "BUMBO.LV", "KURETI CAFE", "O'BYTE", "SKRĪVERU SALDUMI", "PURE", "7DAYS, ", "GRANINI"];

export default function Sponsors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get the width of one set of sponsors for seamless looping
    const getSetWidth = () => {
      const firstSet = container.children[0] as HTMLElement;
      if (!firstSet) return 0;
      return firstSet.offsetWidth;
    };

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      // Scroll speed: pixels per millisecond
      const speed = 0.05;
      scrollPosRef.current += delta * speed;

      // Reset scroll position when we've scrolled one full set (seamless loop)
      const setWidth = getSetWidth();
      if (setWidth > 0 && scrollPosRef.current >= setWidth) {
        scrollPosRef.current = scrollPosRef.current - setWidth;
      }

      // Apply transform
      container.style.transform = `translateX(-${scrollPosRef.current}px)`;

      // Highlight closest sponsor to center
      const spans = container.querySelectorAll<HTMLSpanElement>('[data-sponsor]');
      const viewportCenter = window.innerWidth / 2;

      let closestSpan: HTMLSpanElement | null = null;
      let closestDistance = Infinity;

      spans.forEach((span) => {
        const rect = span.getBoundingClientRect();
        const spanCenter = rect.left + rect.width / 2;
        const distance = Math.abs(viewportCenter - spanCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSpan = span;
        }
      });

      // Apply styles - gold for closest, reset for others
      spans.forEach((span) => {
        if (span === closestSpan) {
          span.style.color = '#D4AF37';
          span.style.transform = 'scale(1.1)';
        } else {
          span.style.color = '';
          span.style.transform = '';
        }
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="atbalstitaji" className="py-16 md:py-24 bg-white border-y border-zinc-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 md:mb-16">
        <div className="text-center">
          <span className="section-label mb-3 md:mb-6">Liels Paldies</span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-[10rem] uppercase tracking-normal" style={{ lineHeight: '0.9' }}>
            Turnīra<span className="gold-text-gradient ml-[10px]">Atbalstītājiem</span>
          </h2>
          <p className="mt-4 md:mt-6 text-zinc-500 font-medium text-sm md:text-base">
            Bez Jums šis futbola turnīrs nebūtu iespējams, paldies par uzticēšanos un atbalstu!
          </p>
        </div>
      </div>

      <div ref={containerRef} className="flex whitespace-nowrap will-change-transform">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex gap-16 md:gap-32 items-center pr-16 md:pr-32 shrink-0">
              {sponsors.map((name, idx) => (
                <span
                  key={`${i}-${idx}`}
                  data-sponsor
                  className="font-display text-4xl md:text-6xl text-zinc-200 uppercase tracking-tighter transition-all duration-300 cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}
