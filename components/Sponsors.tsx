"use client";

const sponsors = ["GULBENES NOVADS", "SIA NLZ", "GULBENES ALUS", "JC BĀZE", "WINWIN SPORTS", "4MOVE", "LATVIJAS FUTBOLS"];

export default function Sponsors() {
  return (
    <section id="sponsori" className="py-20 bg-white border-y border-zinc-100 overflow-hidden relative">
      <div className="flex sponsors-scroll whitespace-nowrap">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex gap-32 items-center pr-32">
              {sponsors.map((name, idx) => (
                <span
                  key={idx}
                  className="font-display text-5xl md:text-6xl text-zinc-200 uppercase tracking-tighter hover:text-cesar-gold transition-colors cursor-default"
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
