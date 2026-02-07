import { tournamentHistory } from "@/data/tournament-history";

export default function VestureHero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{ backgroundImage: "url('/images/balvi_winners.webp')" }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 text-center text-white">
        <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>
          <span className="hero-label mb-4 md:mb-6 text-cesar-gold text-[10px] md:text-xs">
            CĒZARA KAUSS ARHĪVS
          </span>

          <h1
            className="text-7xl sm:text-8xl md:text-[8rem] font-bold font-display uppercase tracking-normal mb-4 md:mb-6"
            style={{ lineHeight: "0.9" }}
          >
            TURNĪRA
            <span className="gold-text-gradient ml-[10px]"> VĒSTURE</span>
          </h1>

          <p className="max-w-lg mx-auto text-zinc-400 text-sm md:text-lg mb-10 md:mb-14 font-medium tracking-tight">
            Rezultāti, foto galerija un statistika no visiem Cēzara Kauss turnīriem
          </p>
        </div>
      </div>

      {/* Bouncing scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[9px] text-zinc-500 font-extrabold uppercase tracking-[0.3em]">Skatīt</span>
        <svg className="w-5 h-5 text-cesar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
