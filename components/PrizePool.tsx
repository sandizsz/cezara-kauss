export default function PrizePool() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label mb-3 md:mb-6 !bg-cesar-gold !text-black">Apbalvojumi</span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-[10rem] uppercase tracking-normal text-white" style={{ lineHeight: '0.9' }}>
            BALVU <span className="gold-text-gradient">FONDS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-zinc-900/80 p-6 md:p-12 border-t-4 border-zinc-500 text-center flex flex-col items-center order-2 md:order-1">
            <span className="text-4xl md:text-6xl mb-4 md:mb-6">🥈</span>
            <span className="text-[10px] font-black text-zinc-500 tracking-[0.4em] uppercase mb-2">2. VIETA</span>
            <h3 className="font-display text-3xl md:text-5xl text-white mb-2 md:mb-4">Sudraba Godalgas</h3>
            <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">+ dāvanas no atbalstītājiem</p>
          </div>

          <div className="bg-zinc-900 p-8 md:p-16 border-t-8 border-cesar-gold text-center flex flex-col items-center md:scale-105 shadow-[0_0_50px_rgba(212,175,55,0.2)] relative order-1 md:order-2">
            <div className="absolute -top-6 bg-cesar-gold text-black px-4 md:px-6 py-1 font-black text-[10px] uppercase tracking-widest">Galvenā Balva</div>
            <span className="text-6xl md:text-8xl mb-4 md:mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">🏆</span>
            <span className="text-[10px] font-black text-cesar-gold tracking-[0.4em] uppercase mb-2">1. VIETA</span>
            <h3 className="font-display text-6xl md:text-8xl text-white mb-2 md:mb-4 leading-none">€1000</h3>
            <p className="text-cesar-gold font-black uppercase tracking-widest text-xs md:text-sm">+ Kauss, dāvanas no atbalstītājiem</p>
          </div>

          <div className="bg-zinc-900/80 p-6 md:p-12 border-t-4 border-zinc-500 text-center flex flex-col items-center order-3">
            <span className="text-4xl md:text-6xl mb-4 md:mb-6">🥉</span>
            <span className="text-[10px] font-black text-zinc-500 tracking-[0.4em] uppercase mb-2">3. VIETA</span>
            <h3 className="font-display text-3xl md:text-5xl text-white mb-2 md:mb-4">BRONZAS GODALGAS</h3>
            <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">+ dāvanas no atbalstītājiem</p>
          </div>
        </div>
      </div>
    </section>
  );
}
