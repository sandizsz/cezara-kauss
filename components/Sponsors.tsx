"use client";

const sponsors = ["GULBENES NOVADS", "SIA NLZ", "GULBENES ALUS", "JC BĀZE", "WINWIN SPORTS", "4MOVE", "LATVIJAS FUTBOLS"];

export default function Sponsors() {
  return (
    <section id="atbalstitaji" className="py-16 md:py-24 bg-white border-y border-zinc-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 md:mb-16">
        <div className="text-center">
          <span className="section-label mb-3 md:mb-6">Liels Paldies</span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-[10rem] uppercase tracking-normal" style={{ lineHeight: '0.9' }}>
            Turnīra<span className="gold-text-gradient ml-[10px]">Atbalstītājiem</span>
          </h2>
          <p className="mt-4 md:mt-6 text-zinc-500 font-medium text-sm md:text-base italic">
            Bez Jums šis futbola turnīrs nebūtu iespējams, paldies par uzticēšanos un atbalstu!
          </p>
        </div>
      </div>

      <div className="flex sponsors-scroll whitespace-nowrap">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex gap-16 md:gap-32 items-center pr-16 md:pr-32">
              {sponsors.map((name, idx) => (
                <span
                  key={idx}
                  className="font-display text-4xl md:text-6xl text-zinc-200 uppercase tracking-tighter hover:text-cesar-gold transition-colors cursor-default"
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
