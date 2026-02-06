import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-32 border-t-8 border-cesar-gold">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24 items-start">
        <div>
          <h4 className="font-display font-bold text-5xl md:text-6xl text-white leading-none mb-6 uppercase tracking-tighter">
            CĒZARA<br /><span className="text-cesar-gold">KAUSS</span>
          </h4>
          <p className="text-zinc-500 text-[10px] mt-4 uppercase tracking-[0.4em] font-bold italic">
            ARTŪRA DEKŠŅA PIEMIŅAS TURNĪRS
          </p>
        </div>

        <div className="space-y-6">
          <h5 className="font-display text-2xl text-cesar-gold uppercase tracking-widest">PORTĀLS</h5>
          <div className="flex flex-col gap-4 text-zinc-400 font-extrabold text-[10px] uppercase tracking-[0.4em]">
            <Link href="/#par-turniru" className="hover:text-cesar-gold transition-colors text-left">SĀKUMS</Link>
            <Link href="/#galerija" className="hover:text-cesar-gold transition-colors text-left">GALERIJA</Link>
            <Link href="/#video" className="hover:text-cesar-gold transition-colors text-left">VIDEO</Link>
            <Link href="/registret-komandu" className="hover:text-cesar-gold transition-colors text-left">REĢISTRĀCIJA</Link>
          </div>
        </div>

        <div className="text-left space-y-6">
          <h5 className="font-display text-2xl text-cesar-gold uppercase tracking-widest">KONTAKTI</h5>
          <div className="flex flex-col gap-4 text-zinc-400 font-extrabold text-[10px] uppercase tracking-[0.4em]">
            <a href="https://instagram.com/cezarakauss" target="_blank" rel="noopener noreferrer" className="hover:text-cesar-gold transition-colors">
              INSTAGRAM
            </a>
            <a href="https://facebook.com/cezarakauss" target="_blank" rel="noopener noreferrer" className="hover:text-cesar-gold transition-colors">
              FACEBOOK
            </a>
            <p className="mt-4 text-zinc-600">CEZARAKAUSS@GMAIL.COM</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-700 text-[10px] uppercase font-bold tracking-[0.5em]">
          © 2026 CĒZARA KAUSS. OFFICIAL PORTAL.
        </p>
        <p className="text-zinc-700 text-[10px] uppercase font-bold tracking-[0.5em]">
          EST. 2021 GULBENE
        </p>
      </div>
    </footer>
  );
}
