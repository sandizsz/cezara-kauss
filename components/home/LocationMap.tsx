import { getTranslations } from "next-intl/server";

export default async function LocationMap() {
  const t = await getTranslations("location");

  return (
    <section className="py-16 md:py-24 bg-stadium-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">

        <div className="lg:col-span-5 space-y-6 md:space-y-10">
          <div>
            <span className="section-label mb-2 md:mb-4">{t("sectionLabel")}</span>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-normal text-black" style={{ lineHeight: "0.9" }}>
              {t("title")} <br /> <span className="gold-text-gradient">{t("titleHighlight")}</span>
            </h2>
            <p className="mt-4 md:mt-8 text-zinc-500 font-medium leading-relaxed mx-auto max-w-4xl">
              {t("description")}
              <br /><br />
              {t.rich("description2", {
                link: (chunks) => (
                  <a href="https://visitgulbene.lv" target="_blank" rel="noopener noreferrer" className="text-cesar-gold hover:underline">
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="bg-white p-4 md:p-8 border-l-8 border-black card-shadow">
              <p className="text-[10px] text-zinc-400 font-extrabold tracking-widest mb-1">{t("addressLabel")}</p>
              <p className="text-lg md:text-2xl font-bold">{t("addressValue")}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <div className="bg-white p-4 md:p-5 border-t-4 border-cesar-gold shadow-sm relative group overflow-hidden">
                <p className="text-[10px] text-zinc-400 font-extrabold tracking-widest mb-1">{t("surfaceLabel")}</p>
                <p className="font-bold uppercase text-sm md:text-base whitespace-nowrap">{t("surfaceValue")}</p>
              </div>
              <div className="bg-white p-4 md:p-5 border-t-4 border-cesar-gold shadow-sm relative group overflow-hidden">
                <p className="text-[10px] text-zinc-400 font-extrabold tracking-widest mb-1">{t("parkingLabel")}</p>
                <p className="font-bold uppercase text-sm md:text-base">{t("parkingValue")}</p>
              </div>
            </div>
          </div>

          <a href="https://visitgulbene.lv" target="_blank" rel="noopener noreferrer" className="w-full py-4 md:py-6 bg-black text-cesar-gold font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 border-b-4 border-cesar-gold">
            VISITGULBENE.LV
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-3 md:gap-4">
          <div className="relative group rounded-sm overflow-hidden card-shadow border-4 border-white">
            <img
              src="/images/gulbenes_stadions.jpg"
              alt="Gulbenes pilsētas stadions — turnīra norises vieta"
              className="w-full h-[200px] md:h-[300px] lg:h-[370px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
          </div>
          <div className="relative group rounded-sm overflow-hidden card-shadow border-4 border-white">
            <img
              src="/images/gulbenes_stadions2.jpeg"
              alt="Cēzara Kauss turnīra spēle Gulbenes stadionā"
              className="w-full h-[200px] md:h-[300px] lg:h-[370px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
