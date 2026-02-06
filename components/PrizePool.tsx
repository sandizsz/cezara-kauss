export default function PrizePool() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-label mb-6 !bg-cesar-gold !text-black">REWARDS</span>
          <h2 className="font-display text-7xl md:text-[10rem] uppercase tracking-normal text-white" style={{ lineHeight: '0.9' }}>
            BALVU <span className="gold-text-gradient">FONDS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900/80 p-12 border-t-4 border-zinc-500 text-center flex flex-col items-center">
            <span className="text-6xl mb-6">🥈</span>
            <span className="text-[10px] font-black text-zinc-500 tracking-[0.4em] uppercase mb-2">2. VIETA</span>
            <h3 className="font-display text-5xl text-white mb-4">MEDAĻAS + PĀRSTEIGUMI</h3>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">NO SPONSORIEM</p>
          </div>

          <div className="bg-zinc-900 p-16 border-t-8 border-cesar-gold text-center flex flex-col items-center scale-105 shadow-[0_0_50px_rgba(212,175,55,0.2)] relative">
            <div className="absolute -top-6 bg-cesar-gold text-black px-6 py-1 font-black text-[10px] uppercase tracking-widest">GRAND CHAMPION</div>
            <span className="text-8xl mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">🏆</span>
            <span className="text-[10px] font-black text-cesar-gold tracking-[0.4em] uppercase mb-2">1. VIETA</span>
            <h3 className="font-display text-8xl text-white mb-4 leading-none">€1000</h3>
            <p className="text-cesar-gold font-black uppercase tracking-widest text-sm">SKAIDRĀ NAUDĀ + KAUSS</p>
          </div>

          <div className="bg-zinc-900/80 p-12 border-t-4 border-zinc-500 text-center flex flex-col items-center">
            <span className="text-6xl mb-6">🥉</span>
            <span className="text-[10px] font-black text-zinc-500 tracking-[0.4em] uppercase mb-2">3. VIETA</span>
            <h3 className="font-display text-5xl text-white mb-4">BRONZAS GODALGAS</h3>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">UN DIPLOMI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
