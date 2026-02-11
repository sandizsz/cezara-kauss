import { Crown } from "lucide-react";

const team = [
  {
    name: "Artūrs Deksnis",
    role: "Idejas autors",
    image: "/images/team/artursdeksnis.webp",
    founder: true,
  },
  {
    name: "Ričards Deksnis",
    role: "Tehniskais nodrošinājums",
    image: "/images/team/ricards.webp",
  },
  {
    name: "Arita Klesmane",
    role: "Sabiedriskās attiecības",
    image: "/images/team/aritav2.webp",
  },
  {
    name: "Sandis Sirmais",
    role: "Mārketings & IT",
    image: "/images/team/sandis.webp",
  },
  {
    name: "Jānis Stībelis",
    role: "DJ / Atmosfēra",
    image: "/images/team/JanisStibelis.webp",
  },
  {
    name: "Artēmijs Semjonovs",
    role: "Galvenais runasvīrs",
    image: "/images/team/sems.webp",
  },
  
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left md:text-center mb-10 md:mb-20">
          <span className="section-label mb-4">#TEAMCEZARAKAUSS</span>
          <h2
            className="font-display text-5xl sm:text-7xl md:text-[8rem] uppercase tracking-normal text-black"
            style={{ lineHeight: "0.9" }}
          >
            Mūsu <span className="gold-text-gradient">Komanda</span>
          </h2>
            <p className="mt-4 md:mt-8 text-zinc-500 font-medium leading-relaxed md:mx-auto max-w-4xl">


           Mēs esam vietējie patrioti ar globālu redzējumu par to, kādam jābūt mūsdienīgam futbola pasākumam. Mūsu komandā apvienojušies organizatori, kuriem rūp Latvijas futbola nākotne un reģionu attīstība. <br/> <br/>

Mēs ticam, ka lielais futbols sākas tieši šeit – vietējos stadionos. Mūsu dzinējspēks ir vēlme pierādīt, ka augstākā līmeņa organizatoriskā kvalitāte ir iespējama jebkurā Latvijas vietā, ja vien pie darba ķeras cilvēki ar degsmi un īsto attieksmi.



          </p>
        </div>

        

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div
                className={`relative aspect-square overflow-hidden ${
                  member.founder
                    ? "border-2 border-cesar-gold"
                    : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Name & role inside the box */}
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                  {member.founder && (
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Crown className="w-3.5 h-3.5 text-cesar-gold" strokeWidth={1.5} />
                      <span className="text-[8px] md:text-[9px] text-cesar-gold font-extrabold tracking-[0.2em] uppercase">
                        Vienmēr ar mums
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-lg md:text-2xl text-white uppercase leading-tight">
                    {member.name}
                  </h3>
                  <span className="text-[8px] md:text-[9px] text-cesar-gold font-extrabold tracking-[0.2em] uppercase block mt-1">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
