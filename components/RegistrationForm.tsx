"use client";

import { useState, FormEvent } from "react";

interface FormData {
  teamName: string;
  captainName: string;
  email: string;
  phone: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    captainName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="registracija" className="pt-40 pb-32 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="bg-cesar-gold w-24 h-24 flex items-center justify-center mx-auto mb-12 rounded-full shadow-2xl">
          <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-7xl md:text-8xl font-display font-bold text-black mb-6 uppercase tracking-normal" style={{ lineHeight: '0.9' }}>
          PIETEIKUMS <span className="gold-text-gradient">SAŅEMTS</span>
        </h2>
        <p className="text-zinc-500 font-bold text-sm uppercase tracking-[0.3em] mb-12 italic">
          ADMINISTRĀCIJA SAZINĀSIES AR JUMS TUVĀKO 24 STUNDU LAIKĀ
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-16 py-6 bg-black text-cesar-gold font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-sm border-b-4 border-cesar-gold"
        >
          ATPAKAĻ UZ SĀKUMU
        </button>
      </section>
    );
  }

  return (
    <section id="registracija" className="pt-40 pb-32 max-w-7xl mx-auto px-6 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
        <div>
          <span className="section-label mb-4">DALĪBA</span>
          <h2 className="font-display text-7xl md:text-9xl uppercase tracking-normal text-black" style={{ lineHeight: '0.9' }}>
            PIETEIKT <br/><span className="gold-text-gradient">KOMANDU</span>
          </h2>
        </div>
        <div className="flex flex-col items-end gap-2 bg-black p-8 border-b-8 border-cesar-gold">
          <span className="text-zinc-500 font-extrabold text-[10px] uppercase tracking-widest">DALĪBAS MAKSA NO KOMANDAS</span>
          <span className="text-6xl font-display text-cesar-gold leading-none">€100.00</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-stadium-gray p-10 space-y-10 rounded-sm border-l-8 border-black">
            <div className="flex items-center gap-4 border-b border-zinc-200 pb-4">
              <svg className="w-6 h-6 text-cesar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-display text-4xl uppercase tracking-wider">NOLIKUMS</h3>
            </div>
            <ul className="text-zinc-500 text-[11px] font-extrabold space-y-6 uppercase tracking-widest">
              <li className="flex items-start gap-4"><span className="w-3 h-3 bg-cesar-gold mt-0.5 shrink-0"></span> MINIMĀLAIS VECUMS: 16 GADI</li>
              <li className="flex items-start gap-4"><span className="w-3 h-3 bg-cesar-gold mt-0.5 shrink-0"></span> FORMĀTS: 5 VS 5 (+REZERVE)</li>
              <li className="flex items-start gap-4"><span className="w-3 h-3 bg-cesar-gold mt-0.5 shrink-0"></span> MAKSIMĀLAIS SPĒLĒTĀJU SKAITS: 10</li>
              <li className="flex items-start gap-4"><span className="w-3 h-3 bg-cesar-gold mt-0.5 shrink-0"></span> GARANTĒTS SPĒĻU SKAITS: 4</li>
            </ul>
          </div>

          <div className="p-8 border-2 border-dashed border-cesar-gold bg-cesar-gold/5 flex gap-4">
            <svg className="w-6 h-6 text-cesar-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-zinc-600 text-[10px] font-bold leading-relaxed uppercase tracking-widest italic">
              UZMANĪBU: KOMANDU SKAITS IR IEROBEŽOTS. PRIORITĀTE TIEK PIEŠĶIRTA REĢISTRĀCIJAS SECĪBĀ.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 bg-white p-12 card-shadow border-t-8 border-black">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase">KOMANDAS NOSAUKUMS</label>
                <input
                  type="text"
                  required
                  placeholder="TEAM NAME"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-6 font-display text-4xl md:text-5xl text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase">KAPTEIŅA VĀRDS, UZVĀRDS</label>
                <input
                  type="text"
                  required
                  placeholder="CAPTAIN NAME"
                  value={formData.captainName}
                  onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-6 font-display text-4xl md:text-5xl text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase">TĀLRUNIS</label>
                <input
                  type="tel"
                  required
                  placeholder="+371 2000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-6 font-bold text-lg text-black focus:outline-none focus:border-cesar-gold transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase">E-PASTS</label>
                <input
                  type="email"
                  required
                  placeholder="EMAIL@DOMAIN.LV"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-6 font-bold text-lg text-black focus:outline-none focus:border-cesar-gold transition-all uppercase"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-cesar-gold font-display font-bold text-5xl md:text-6xl py-12 hover:bg-zinc-800 transition-all flex items-center justify-center gap-8 group rounded-sm border-b-8 border-cesar-gold disabled:opacity-50"
            >
              {isSubmitting ? "NOSŪTA..." : "NOSŪTĪT PIETEIKUMU"}
              <svg className="w-10 h-10 group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
