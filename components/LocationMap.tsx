export default function LocationMap() {
  return (
    <section className="py-24 bg-stadium-gray overflow-hidden">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-5 space-y-10">
             <div>
                <span className="section-label mb-4">LOKĀCIJA</span>
                <h2 className="font-display text-6xl md:text-7xl uppercase tracking-normal text-black" style={{ lineHeight: '0.9' }}>
                  CENTRA <br/> <span className="gold-text-gradient">STADIONS</span>
                </h2>
             </div>

             <div className="space-y-6">
                <div className="bg-white p-8 border-l-8 border-black card-shadow">
                   <p className="text-[10px] text-zinc-400 font-extrabold tracking-widest mb-1">OFICIĀLĀ ADRESE</p>
                   <p className="text-2xl font-bold italic">O. KALPAKA IELA 1A, GULBENE</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   <div className="bg-white p-8 border-t-4 border-cesar-gold shadow-sm relative group overflow-hidden">
                      <p className="text-[10px] text-zinc-400 font-extrabold tracking-widest mb-1">SEGUMS</p>
                      <p className="font-bold uppercase">ZĀLIENS</p>
                   </div>
                   <div className="bg-white p-8 border-t-4 border-cesar-gold shadow-sm relative group overflow-hidden">
                      <p className="text-[10px] text-zinc-400 font-extrabold tracking-widest mb-1">IEEJA</p>
                      <p className="font-bold uppercase">BEZ MAKSAS</p>
                   </div>
                </div>
             </div>

             <button className="w-full py-6 bg-black text-cesar-gold font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 border-b-4 border-cesar-gold">
                ATVĒRT NAVIGĀCIJU
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
             </button>
          </div>

          <div className="lg:col-span-7 relative group rounded-sm overflow-hidden card-shadow border-4 border-white">
             <img
               src="https://images.unsplash.com/photo-1524015348271-3341a70ba67e?q=80&w=1400"
               alt="Gulbene Stadium"
               className="w-full h-[500px] lg:h-[650px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-black/30"></div>
             <div className="absolute bottom-10 left-10">
                <div className="bg-cesar-gold text-black px-6 py-2 font-extrabold text-xs uppercase tracking-[0.3em]">MAP_REF_GULBENE_STADIUM</div>
             </div>
          </div>
       </div>
    </section>
  );
}
