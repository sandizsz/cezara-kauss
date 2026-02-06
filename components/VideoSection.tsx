export default function VideoSection() {
  return (
    <section id="video" className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <span className="section-label mb-3 md:mb-6">ATMOSFĒRA</span>
          <h2 className="font-display text-6xl sm:text-7xl md:text-[10rem] uppercase tracking-normal text-white" style={{ lineHeight: '0.9' }}>
            SKATIES <span className="gold-text-gradient">LEGATU</span>
          </h2>
          <p className="mt-4 md:mt-8 text-zinc-500 font-extrabold text-[10px] uppercase tracking-[0.5em] italic">
            Ieskats iepriekšējā gada spilgtākajos mirkļos
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto bg-zinc-900/50 p-4 md:p-12">
          <div className="absolute inset-0 border-2 border-cesar-gold/20 -m-2 pointer-events-none hidden md:block"></div>
          <div className="relative aspect-video bg-zinc-900 border-2 md:border-4 border-white overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=1&loop=1"
              title="Cēzara Kauss Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>

            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all flex items-center justify-center cursor-pointer pointer-events-none">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-cesar-gold/90 rounded-full flex items-center justify-center border-2 md:border-4 border-black group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-10 md:h-10 text-black ml-1 md:ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
