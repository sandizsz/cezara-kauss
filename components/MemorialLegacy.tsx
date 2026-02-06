export default function MemorialLegacy() {
  return (
    <section className="py-16 md:py-32 bg-stadium-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">

        <div className="lg:col-span-6 space-y-6 md:space-y-10 relative">
          <div className="bg-white p-6 md:p-12 lg:p-20 shadow-2xl relative z-10 border-t-8 border-black">
            <span className="section-label mb-3 md:mb-6 bg-black text-cesar-gold">DIBINĀTĀJS</span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-8xl uppercase tracking-normal text-black mb-4 md:mb-8" style={{ lineHeight: '0.9' }}>
              ARTŪRS <br/> <span className="gold-text-gradient">DEKSNIS</span>
            </h2>
            <div className="space-y-4 md:space-y-6 text-zinc-600 font-medium text-sm md:text-lg leading-relaxed italic">
              <p>
                Cēzara Kauss nav nejaušība. Tas ir sapnis, ko radīja Artūrs Deksnis – cilvēks, kura sirds piederēja futbolam un Gulbenei.
              </p>
              <p>
                Viņa vīzija bija vienkārša: apvienot ielu futbola azartu ar pilsētas kopienas spēku. Šodien mēs turpinām viņa iesākto ceļu, katru gadu pulcējoties Artūra piemiņas turnīrā.
              </p>
            </div>
            <div className="mt-6 md:mt-12 flex items-center gap-4 md:gap-6 p-4 md:p-6 border border-cesar-gold/20 bg-cesar-gold/5 italic">
               <span className="text-2xl md:text-3xl">❤️</span>
               <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-black">Vienmēr spēlē. Vienmēr ar mums. #10</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative group">
          <div className="p-4 md:p-8 bg-white shadow-2xl overflow-hidden">
             <div className="relative aspect-square overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1200"
                  alt="Artūrs Deksnis Legacy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                   <p className="font-display text-3xl md:text-5xl text-cesar-gold leading-none">ARTŪRA PIEMIŅAS <br/> TURNĪRS</p>
                   <p className="text-[10px] text-zinc-400 font-black tracking-widest uppercase mt-2 md:mt-4">LEGACY EDITION // SINCE 2021</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
