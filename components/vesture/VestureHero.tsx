import { tournamentHistory } from "@/data/tournament-history";

export default function VestureHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center bg-black pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{ backgroundImage: "url('/images/puto_karsava_futbola_turnirs_cezara_kauss_2024_uzvaretaji.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 text-center text-white">
        <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>
          <span className="hero-label mb-4 md:mb-6 text-cesar-gold text-[10px] md:text-xs">
            CĒZARA KAUSS ARHĪVS
          </span>

          <h1
            className="font-display font-bold text-6xl sm:text-8xl md:text-[10rem] uppercase tracking-normal mb-4 md:mb-6"
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
    </section>
  );
}
