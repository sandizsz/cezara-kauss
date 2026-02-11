import { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Turnīra Reglaments | Cēzara kauss",
  description:
    "Cēzara kauss futbola turnīra oficiālais reglaments — noteikumi, pieteikšanās kārtība, norises kārtība, disciplīna un balvu fonds.",
  keywords: [
    "Cēzara kauss reglaments",
    "futbola turnīrs noteikumi",
    "Cēzara kauss noteikumi",
    "turnīra reglaments",
  ],
  openGraph: {
    title: "Turnīra Reglaments | Cēzara kauss",
    description:
      "Cēzara kauss futbola turnīra oficiālais reglaments.",
    url: "https://cezarakauss.lv/reglaments",
    siteName: "Cēzara kauss",
    locale: "lv_LV",
    type: "website",
    images: [
      {
        url: "/images/turnira_reglaments.webp",
        width: 1200,
        height: 630,
        alt: "Cēzara kauss turnīra reglaments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnīra Reglaments | Cēzara kauss",
    description:
      "Cēzara kauss futbola turnīra oficiālais reglaments — noteikumi un norises kārtība.",
    images: ["/images/turnira_reglaments.webp"],
  },
  alternates: {
    canonical: "https://cezarakauss.lv/reglaments",
  },
};

const sections = [
  {
    title: "1. TURNĪRA MĒRĶI",
    items: [
      "1.1 Popularizēt futbolu un veselīgu dzīvesveidu Gulbenes novadā;",
      '1.2 Noskaidrot turnīra "Cēzara kauss" labākās futbola komandas;',
      "1.3 Veicināt sabiedrības interesi par futbolu.",
    ],
  },
  {
    title: "2. TURNĪRA VADĪBA UN ORGANIZĀCIJA",
    items: [
      '2.1 Turnīra organizators ir biedrība "Futbols Gulbenē". (turpmāk tekstā – Organizators), e-pasts: cezarakauss@gmail.com / tel.: 25641934;',
      "2.2 Sacensību galvenais tiesnesis Artēmijs Semjonovs (e-pasts: cezarakauss@gmail.com / tel.: 25641934).",
    ],
  },
  {
    title: "3. TURNĪRA NORISES VIETA UN LAIKS",
    items: [
      '3.1. "Cēzara kauss" norisinās 2026.gada 25.jūlijā, Gulbenes pilsētas stadionā, O.Kalpaka iela 1a.',
    ],
  },
  {
    title: "4. DALĪBNIEKI",
    items: [
      '4.1 Turnīrā "Cēzara kauss" var piedalīties jebkura komanda, kas apņemas ievērot un pildīt Reglamenta nosacījumus;',
      "4.2 Vienas komandas sastāvā turnīrā drīkst pieteikt 10(!) spēlētājus;",
      "4.3 Spēlētājiem jābūt sasniegušiem 15 gadu vecumu (ne jaunākiem kā 2011.gadā dzimušie);",
      "4.4 Spēlētāji ir vienlīdz atbildīgi par savas komandas katra spēlētāja iesniegto informāciju. Katrs dalībnieks, piesakoties turnīram apstiprina savu personas datu apstrādi balstoties uz fizisko personu datu aizsardzības likuma 7.1. pantu;",
      "4.5 Organizatori patur tiesības pieņemt galējo lēmumu par komandas vai atsevišķa spēlētāja pielaišanu pie spēlēšanas turnīrā, ja tiek konstatēta reglamenta neatbilstība vai tā pārkāpums vai kāds cits apstāklis, kas organizatoram liekas aizdomīgs vai nepieņemams;",
      "4.6 Ja turnīra norises laikā organizators atklāj un konstatē faktu par nepatiesi sniegtu informāciju, no turnīra tiek diskvalificēta visa komanda, kā arī tiek anulēti visi rezultāti;",
      "4.7 Katrai komandai ir jābūt vienādas krāsas krekliem ar numuriem, vārtsarga krekla krāsai jābūt atšķirīgai no laukuma spēlētājiem;",
      "4.8 Spēlētājs turnīra drīkst piedalīties tikai vienas komandas sastāvā;",
      '4.9 Komanda var atsaukt savu dalību turnīrā. Šādā gadījumā komandas vietu ieņem pirmā komanda no "gaidīšanas saraksta". Dalības atsaukšanas gadījumā dalības maksa atmaksāta netiek.'
    ],
  },
  {
    title: "5. PIETEIKŠANĀS",
    items: [
      "5.1 Komandas turnīram var pieteikties interneta vietnē www.cezarakauss.lv;",
      "5.2 Dalībnieki, piesakoties turnīram apliecina, ka neiebilst savu personas datu (vārds, uzvārds) izmantošanai rezultātu apkopošanā un publicēšanā turnīra interneta mājaslapā www.cezarakauss.lv; ziņu, foto un video materiālu publicēšanai turnīra sociālajos tīklos un izsūtīšanai medijiem, kā arī komandas kontaktpersonas datu (telefona nr., e-pasta adrese) izmantošanai saziņā ar organizatoru saskaņā ar Fizisko personu datu aizsardzības likuma 7.1. pantu;",
      "5.3 Komandas var pieteikt savu dalību turnīrā ne vēlāk kā 7 kalendārās dienas līdz turnīra sākumam (25. jūlijs);",
      "5.4 Spēlētājam jāizturas pret organizatoriem un reglamentu ar cieņu, kā arī godprātīgi jāsniedz informācija par pieteiktajiem spēlētājiem;",
      "5.5 Komandas pēc pieteikuma nosūtīšanas saņem apstiprinājumu e-pastā un 3 kalendāro dienu laikā veic dalības maksas pārskaitījumu. Ja pārskaitījums netiek veikts, komandas pieteikums tiek uzskatīts par atsauktu un tiek anulēts. Saņemot pārskaitījumu, komanda tiek iekļauta dalībnieku sarakstā. Apstiprināto komandu iekļaušana dalībnieku sarakstā notiek katru dienu pēc plkst. 18.00;",
      "5.6 Dalības maksa pēc apstiprinājuma saņemšanas jāiemaksā apstiprinājuma e-pastā norādītajā kontā. Dalības maksa netiek atgriezta;",
      '5.7 Ja turnīram pieteikušās vairāk nekā 40 (četrudesmit) komandas, nākamās komandas, kas piesakās tiks iekļautas "gaidīšanas sarakstā". Šī saraksta pirmā komanda tiek iekļauta turnīrā, ja kāda no apstiprinājumu saņēmušajām komandām atsauc savu dalību turnīrā vai laikā neveic dalības maksas pārskaitījumu.',
      "5.8 Turnīra dienā, katrai komandai reģistrējot savu ierašanos, tiks izsniegts komandas protokols, kurš jāizpilda ar spēlētāju vārtu guvumiem un ar parakstu jāapliecina iepazīšanās un piekrišana turnīra reglamentam;",
      "5.9 Komandas pārstāvim ir pienākums pārliecināties par protokola korektu aizpildīšanu un tā nenozaudēšanu.",
    ],
  },
  {
    title: "6. NORISES KĀRTĪBA",
    items: [
      "6.1 Komandas spēlē divu fāžu turnīru (grupu fāze + playoff fāze).",
      "6.2 Komandas tiks dalītas grupās atbilstoši reģistrēto komandu skaitam. Grupā ne vairāk kā 5 komandas, kuras izspēlē katra ar katru. 2 (divas) labākās no katras apakšgrupas kvalificējas 1/8 (astodaļfinālam) + 2 labākās trešās vietas. Pēc kā norisinās playoff turnīra fāze – katras kārtas uzvarētājs turpina dalību turnīrā. **",
      "6.3 Komandu vietas nosaka pēc iegūto punktu summas (uzvara – 3 p., neizšķirts – 1 p., zaudējums – 0 p.). Ja divām vai vairākām komandām būs vienāda punktu summa, tad to nosaka pēc rādītājiem visās spēlēs (uzvaru skaits, vārtu starpība, gūtie vārti, ja visi norādīti kritēriji ir vienādi tad seko 6m soda sitieni – 5 sitieni katrai komandai). *",
      "6.4 Playoff turnīra fāzē pie neizšķirta rezultāta seko 6m soda sitieni – 5 katrai komandai.",
      "6.5 Spēles laiks 2 x 10 min.",
      "6.6 Spēlētāji laukumā: 5 (ieskaitot vārtsargu), spēle norit formātā 5 pret 5;",
      "6.7 Vārtu izmēri: 3m x 2m;",
      "6.8 Turnīra oficiālajā rezultātu vietnē (tournify.com) būs iespējams sekot līdzi turnīra rezultātiem, spēļu grafikam un attiecīgajiem laukumiem uz kura plānota spēle.",
      "6.9 Pēc katras spēles rezultāts tiks publicēts turnīra rezultātu oficiālajā vietnē (tournify.com)",
      "6.10 Turnīra organizatoriem ir tiesības veikt izmaiņas spēļu norises laikos un vietās, ja ir radusies kāda ārkārtas situācija.",
      "6.11 Ja komanda neierodas uz spēli 10 minūšu laikā pēc plānotā spēles sākuma, tai tiek piešķirts tehniskais zaudējums 0:3.",
    ],
    footnotes: [
      "* Ja komandu skaits visās grupās nav vienāds, tad iegūto vietu visās grupās nosaka pēc sekojošiem koeficientiem: VPS (vidēji punkti spēlē) = punkti / nospēlētās spēles; VVS (vidējā vārtu starpība spēlē) = vārtu starpība / nospēlētās spēles; GVS (vidēji gūtie vārti spēle) = gūtie vārti / nospēlētās spēles.",
      "** Pēc grupu fāzes komandas tiek sarindotas no 1-8. vietai pēc koeficienta un izveidoti ceturdaļfinālu pāri. (1-8, 2-7, 3-6, 4-5).",
    ],
  },
  {
    title: "7. PROTESTS",
    items: [
      '7.1 Protests iesniedzams rakstiski "Cēzara kauss" galvenajam tiesnesim pusstundas laikā pēc spēles beigu signāla;',
      "7.2 Protestus nepieņem par spēles laiku, 6 m un 10 m soda sitieniem, ieskaitītiem vai neieskaitītiem vārtiem;",
      "7.3 Iesniegtos protestus izskata komiteja trīs cilvēku sastāvā. Komitejā ietilpst galvenais tiesnesis un divi turnīra galvenie organizatori.",
    ],
  },
  {
    title: "8. TIESNEŠI",
    items: [
      "8.1 Tiesnešus turnīram nozīmē turnīra organizatori;",
      "8.2 Visi turnīra tiesnieši ir apstiprināti Latvijas futbola federācijā;",
      "8.3 Jebkurš spēles tiesnešu lēmums spēles laikā ir galīgs un neapstrīdams;",
      "8.4 Komandām nav tiesību vērsties ar pretenzijām un protestiem pret tiesneša darbībām, kā arī spēles laikā apvainot vai aizskart tiesnesi. Gadījumā, ja tas notiek, tad tiesnesim ir tiesības apturēt spēli līdz spēlētāji nomierinās. Ja aizskaršana vai aizvainojumi turpinās tiesnesim ir tiesības pārtraukt spēli un piešķirt komandai zaudējumu ar 0:3;",
      "8.5 Turnīra galvenajam tiesnesim ir tiesības nepielaist pie spēles un/vai neļaut turpināt piedalīties turnīrā komandai vai spēlētājam, ja rodas aizdomas, ka:",
    ],
    subItems: [
      "8.5.1 spēlētājs ir sagrozījis datus protokolā vai pieteikumā;",
      "8.5.2 spēlētājs uzdodas par citu personu;",
      "8.5.3 spēlētājs vai komanda neievēro turnīra reglamentu;",
      "8.5.4 spēlētājs vai komanda veic negodīgas darbības vai atklājas kādi maldinoši apstākļi;",
      "8.5.5 spēlētājs atrodas alkohola vai apreibinošo vielu ietekmē.",
    ],
  },
  {
    title: "9. TURNĪRA DISCIPLĪNA",
    items: [
      '9.2 Par spļaušanu personai, "pēdējās cerības" sodu, tīšu speršanu, mešanu ar priekšmetu kādam, tīšu sitienu un abpusēju rupjību – noraidījums un jāizlaiž nākamā spēle (ja pārkāpums nav īpaši rupjš). Par šāda veida atkārtotu pārkāpumu diskvalifikācija uz visu turnīru. Par īpaši rupju pārkāpumu vai kautiņa izraisīšanu spēlētājam tiek liegta iespēja piedalīties nākamajos turnīros;',
      "9.3 Par tiesnešu apvainošanu vai uzbrukumu tiesnesim un par izteikti rupju spēli ar nodomu traumēt pretinieku – noraidījums un jāizlaiž nākamās trīs spēles. Par šāda veida atkārtotu pārkāpumu disvalifikācija uz visu turnīru;",
      '9.4 "Cēzara kauss" organizatoriem ir tiesības pieņemt atsevišķus lēmumus par konkrēta futbolista, pārstāvja vai visas komandas soda apmēriem;',
      "9.5 Ja komanda jebkādu iemeslu dēļ nevar uzsākt spēli laikus, tās komandas pārstāvim, kas reģistrēts komandas pieteikumā, ir jābrīdina čempionāta galvenais tiesnesis ne vēlāk kā 20 minūtes pirms plānotā mača sākuma. Tiesnesis var atlikt spēli maksimums uz 10 minūtēm;",
      "9.6 Par spēlētāja, kurš nav iekļauts protokolā, piedalīšanos spēlē, komandai tiek piešķirts tehniskais zaudējums 0:3.",
      "9.7 Ja komanda izstājas no turnīra, nenospēlējot visas savas spēles, komandai tiek liegta dalība nākamā gada turnīrā.",
    ],
  },
  {
    title: "10. MEDICĪNA",
    items: [
      "10.1 Katrs spēlētājs ir atbildīgs par savu veselības stāvokli spēles laikā un viņi to apliecina ar savu parakstu protokolā (skat. 5.8 punktu)",
      "10.2 Sīku traumu gadījumos spēlētājiem medicīnisko palīdzību sniedz komandas treneris vai mediķis sporta spēļu vietā, ko nodrošina organizators;",
      "10.3 Organizatori turnīra laikā nodrošina ar pilnībā aprīkotu medicīnas somu;",
      "10.4 Nopietnas traumas gadījumā organizatori nodrošina neatliekamās medicīniskās palīdzības izsaukšanu.",
    ],
  },
  {
    title: "11. TURNĪRA BALVU FONDS",
    items: [
      "11.1 Turnīra pirmās 3 (trīs) vietas ieguvušās komandas tiek apbalvotas ar organizatora noteiktām balvām;",
      "11.2 Organizatoriem ir tiesības piešķirt citas speciālās balvas;",
      "11.3 Tiek apbalvots visa turnīra fināla labākais spēlētājs (MVP), turnīra labākais uzbrucējs, turnīra labākais vārtsargs un turnīra labākais aizsargs.",
    ],
  },
];

export default function ReglamentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Turnīra Reglaments | Cēzara kauss",
    description:
      "Cēzara kauss futbola turnīra oficiālais reglaments — noteikumi, pieteikšanās kārtība, norises kārtība, disciplīna un balvu fonds.",
    url: "https://cezarakauss.lv/reglaments",
    inLanguage: "lv",
    isPartOf: {
      "@type": "WebSite",
      name: "Cēzara kauss",
      url: "https://cezarakauss.lv",
    },
    about: {
      "@type": "SportsEvent",
      name: "Cēzara kauss 2026",
      sport: "Football",
      location: {
        "@type": "Place",
        name: "Gulbenes pilsētas stadions",
        address: {
          "@type": "PostalAddress",
          streetAddress: "O. Kalpaka iela 1A",
          addressLocality: "Gulbene",
          addressCountry: "LV",
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-black pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/turnira_reglaments.webp')" }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
            <div className="animate-reveal" style={{ animationDelay: "0.1s" }}>
              <span className="hero-label mb-4 md:mb-6 text-cesar-gold text-[10px] md:text-xs">
                Cēzara kauss 
              </span>
              <h1
                className="font-display font-bold text-7xl sm:text-8xl md:text-[8rem] uppercase tracking-normal mb-4 md:mb-6"
                style={{ lineHeight: "0.9" }}
              >
                TURNĪRA
                <span className="gold-text-gradient ml-[10px]"> REGLAMENTS</span>
              </h1>
              <p className="max-w-lg mx-auto text-zinc-400 text-sm md:text-lg font-medium tracking-tight">
                Oficiālie turnīra noteikumi un norises kārtība
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-black pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            {sections.map((section, i) => (
              <div
                key={i}
                className="mb-10 md:mb-14 last:mb-0"
              >
                <h2 className="font-display text-2xl md:text-3xl text-cesar-gold uppercase mb-4 md:mb-6 pb-3 border-b border-cesar-gold/20">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item, j) => (
                    <p key={j} className="text-zinc-300 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-zinc-800">
                      {item}
                    </p>
                  ))}
                  {section.subItems && (
                    <div className="pl-8 space-y-3">
                      {section.subItems.map((sub, k) => (
                        <p key={k} className="text-zinc-400 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-cesar-gold/30">
                          {sub}
                        </p>
                      ))}
                    </div>
                  )}
                  {section.footnotes && (
                    <div className="mt-4 pt-4 border-t border-zinc-800/50 space-y-2">
                      {section.footnotes.map((fn, k) => (
                        <p key={k} className="text-zinc-500 text-xs md:text-sm leading-relaxed italic">
                          {fn}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
