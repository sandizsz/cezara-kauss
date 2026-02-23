"use client";

import { useState, useRef, FormEvent } from "react";
import Link from "next/link";

interface FormData {
  teamName: string;
  captainName: string;
  email: string;
  phone: string;
  comment: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    captainName: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("Logo fails nedrīkst pārsniegt 5MB");
      return;
    }

    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
    setError("");
  };

  const removeLogo = () => {
    setLogoFile(null);
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const body = new window.FormData();
      body.append("teamName", formData.teamName);
      body.append("captainName", formData.captainName);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("comment", formData.comment);
      if (logoFile) {
        body.append("logo", logoFile);
      }

      const res = await fetch("/api/register", {
        method: "POST",
        body,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Kaut kas nogāja greizi");
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Kaut kas nogāja greizi. Mēģiniet vēlreiz."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Registration temporarily closed
  return (
    <section id="registracija" className="pt-28 pb-20 md:pt-40 md:pb-32 max-w-4xl mx-auto px-4 md:px-6 text-center animate-fade-in">
      <div className="bg-black w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-8 md:mb-12 rounded-full border-4 border-cesar-gold">
        <svg className="w-10 h-10 md:w-12 md:h-12 text-cesar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-5xl md:text-8xl font-display font-bold text-black mb-4 md:mb-6 uppercase tracking-normal" style={{ lineHeight: '0.9' }}>
        REĢISTRĀCIJA JAU <span className="gold-text-gradient">  DRĪZUMĀ!</span>
      </h2>
      <p className="text-zinc-500 font-bold text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mt-6 md:mt-10">
        Reģistrācija tiks atvērta jau drīzumā!
      </p>
    </section>
  );

  if (isSubmitted) {
    return (
      <section id="registracija" className="pt-28 pb-20 md:pt-40 md:pb-32 max-w-4xl mx-auto px-4 md:px-6 text-center animate-fade-in">
        <div className="bg-cesar-gold w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-8 md:mb-12 rounded-full ">
          <svg className="w-10 h-10 md:w-12 md:h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-5xl md:text-8xl font-display font-bold text-black mb-4 md:mb-6 uppercase tracking-normal" style={{ lineHeight: '0.9' }}>
          PIETEIKUMS <span className="gold-text-gradient">SAŅEMTS</span>
        </h2>
        <div className="text-zinc-500 font-bold text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12 px-2 space-y-4">
          <p>Paldies, ka reģistrējāt savu komandu turnīram Cēzara Kauss.</p>
          <p>Mēs esam nosūtījuši e-pastu ar apstiprinājumu un tālāko informāciju (apmaksas detaļas u.c.).</p>
          <p>Ja ziņu neredzat, pārbaudiet SPAM/JUNK sadaļu.</p>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-10 py-5 md:px-16 md:py-6 bg-black text-cesar-gold font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-sm border-b-4 border-cesar-gold"
        >
          ATPAKAĻ UZ SĀKUMU
        </button>
      </section>
    );
  }

  return (
    <section id="registracija" className="pt-28 pb-12 md:pt-36 md:pb-32 max-w-7xl mx-auto px-4 md:px-6 bg-white">
      {/* Header row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-20 gap-4 md:gap-6">
        <div>
          <span className="section-label mb-3 md:mb-4">DALĪBA</span>
          <h1 className="font-display text-7xl sm:text-8xl md:text-[8rem] uppercase tracking-normal text-black" style={{ lineHeight: '0.9' }}>
            PIETEIKT <br/><span className="gold-text-gradient">KOMANDU TURNĪRAM</span>
          </h1>
        </div>
        <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-2 bg-black px-5 py-4 md:p-8 border-b-8 border-cesar-gold">
          <span className="text-zinc-500 font-extrabold text-[9px] md:text-[10px] uppercase tracking-widest">DALĪBAS MAKSA</span>
          <span className="text-3xl md:text-6xl font-display text-cesar-gold leading-none">€150.00</span>
        </div>
      </div>

      {/* Form first, sidebar second on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-16">

        {/* Form — shows first on mobile (order-1), second on desktop (lg:order-2) */}
        <div className="order-1 lg:order-2 lg:col-span-8 p-5 md:p-12 card-shadow border-t-8 border-black">
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">KOMANDAS NOSAUKUMS</label>
                <input
                  type="text"
                  required
                  placeholder="FK Cezars"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-4 md:p-6 font-bold text-base md:text-lg text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">KAPTEIŅA VĀRDS, UZVĀRDS</label>
                <input
                  type="text"
                  required
                  placeholder="Andris Vītols"
                  value={formData.captainName}
                  onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-4 md:p-6 font-bold text-base md:text-lg text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">TĀLRUNIS</label>
                <input
                  type="tel"
                  required
                  placeholder="+371 2000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-4 md:p-6 font-bold text-base md:text-lg text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">E-PASTS</label>
                <input
                  type="email"
                  required
                  placeholder="EMAIL@DOMAIN.LV"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-4 md:p-6 font-bold text-base md:text-lg text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
                />
              </div>
            </div>

            {/* Logo upload */}
            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">KOMANDAS LOGO (NEOBLIGĀTI)</label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden hover:cursor-pointer"
              />
              {logoPreview ? (
                <div className="flex items-center gap-4 bg-stadium-gray p-4 border-b-4 border-zinc-200">
                  <img src={logoPreview ?? undefined} alt="Logo preview" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-black truncate">{logoFile?.name}</p>
                    <p className="text-[10px] text-zinc-400 font-bold">
                      {logoFile ? `${(logoFile!.size / 1024 / 1024).toFixed(2)} MB` : null}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="p-2 hover:bg-zinc-200 transition-colors rounded-sm"
                  >
                    <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-stadium-gray border-4 border-dashed border-zinc-200 p-6 md:p-8 flex flex-col items-center gap-3 hover:border-cesar-gold transition-all group cursor-pointer"
                >
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-zinc-300 group-hover:text-cesar-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[10px] md:text-xs text-zinc-400 font-extrabold tracking-widest uppercase">
                    AUGŠUPIELĀDĒT LOGO
                  </span>
                  <span className="text-[9px] text-zinc-300 font-bold tracking-wider">PNG, JPG, SVG — MAX 5MB</span>
                </button>
              )}
            </div>

            {/* Comment */}
            <div className="space-y-2">
              <label className="text-sm text-zinc-400 font-extrabold tracking-widest uppercase">KOMENTĀRS (NEOBLIGĀTI)</label>
              <textarea
                placeholder="PAPILDUS INFORMĀCIJA..."
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                rows={3}
                className="w-full bg-stadium-gray border-b-4 border-zinc-200 p-4 md:p-6 font-bold text-base md:text-lg text-black focus:outline-none focus:border-cesar-gold transition-all placeholder-zinc-200 uppercase"
              />
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm font-bold">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-cesar-gold font-display font-bold text-2xl md:text-6xl py-6 md:py-12 hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 md:gap-8 group rounded-sm border-b-8 border-cesar-gold disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "NOSŪTA..." : "NOSŪTĪT PIETEIKUMU"}
              <svg className="w-6 h-6 md:w-10 md:h-10 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </form>
        </div>

        {/* Sidebar — shows second on mobile (order-2), first on desktop (lg:order-1) */}
        <div className="order-2 lg:order-1 lg:col-span-4 space-y-4 md:space-y-8">
          <div className="bg-stadium-gray p-4 md:p-10 space-y-5 md:space-y-10 rounded-sm border-l-8 border-black">
            <div className="flex items-center gap-3 border-b border-zinc-200 pb-3 md:pb-4">
              <svg className="w-5 h-5 text-cesar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-display text-2xl md:text-4xl uppercase tracking-wider">Reglaments</h3>
            </div>
            <ul className="text-zinc-500 text-[10px] md:text-[11px] font-extrabold space-y-3 md:space-y-6 uppercase tracking-widest">
              <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 bg-cesar-gold mt-0.5 shrink-0"></span> MINIMĀLAIS VECUMS: 15 GADI</li>
              <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 bg-cesar-gold mt-0.5 shrink-0"></span> FORMĀTS: 5 VS 5 (+REZERVE)</li>
              <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 bg-cesar-gold mt-0.5 shrink-0"></span> MAX SPĒLĒTĀJU SKAITS komandā: 10</li>
              <li className="flex items-start gap-3"><span className="w-2.5 h-2.5 bg-cesar-gold mt-0.5 shrink-0"></span> GARANTĒTS SPĒĻU SKAITS: 4</li>
            </ul>
            <Link
              href="/reglaments"
              className="flex items-center justify-center gap-2 w-full bg-black text-cesar-gold font-extrabold text-[10px] md:text-xs px-4 py-3 md:py-4 uppercase tracking-wide md:tracking-[0.2em] hover:bg-zinc-800 transition-all border-b-4 border-cesar-gold"
            >
              Pilns turnīra reglaments
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="p-4 md:p-8 border-2 border-dashed border-cesar-gold bg-cesar-gold/5 flex gap-3">
            <svg className="w-5 h-5 text-cesar-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-zinc-600 text-[9px] md:text-[10px] font-bold leading-relaxed uppercase tracking-widest italic">
              KOMANDU SKAITS IR IEROBEŽOTS. PRIORITĀTE TIEK PIEŠĶIRTA REĢISTRĀCIJAS SECĪBĀ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
