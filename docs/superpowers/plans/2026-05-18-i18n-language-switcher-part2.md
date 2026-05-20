# i18n Language Switcher — Implementation Plan (Part 2)

## Task 3: Create `messages/lv.json`

- [ ] **Step 1: Create `messages/lv.json` with all Latvian strings**

```json
{
  "nav": {
    "home": "SĀKUMS",
    "about": "Par turnīru",
    "history": "Vēsture",
    "rules": "Reglaments",
    "register": "Reģistrēt komandu turnīram",
    "mobileRegister": "REĢISTRĒT KOMANDU"
  },
  "hero": {
    "tagline": "ARTŪRA DEKŠŅA PIEMIŅAS TURNĪRS",
    "subtitle1": "Vairāk nekā turnīrs - īsti futbola svētki.",
    "subtitle2": "EMOCIJAS. DRAUGI.",
    "subtitleHighlight": "FUTBOLS.",
    "ctaRegister": "Reģistrēt komandu",
    "ctaHistory": "Skatīt Turnīra arhīvu",
    "countdownLabel": "Līdz reģistrācijas beigām atlicis",
    "days": "DIENAS",
    "hours": "STUNDAS",
    "minutes": "MINŪTES",
    "seconds": "SEKUNDES"
  },
  "about": {
    "sectionLabel": "Par futbola turnīru",
    "title": "KAS IR FUTBOLA TURNĪRS",
    "titleHighlight": "CĒZARA KAUSS?",
    "description": "Cēzara kauss ir amatieru futbola turnīrs, kas savu debiju piedzīvoja 2024. gada 27. jūlijā, Gulbenes pilsētas svētku laikā. Šis turnīrs, kas ikgadu norisinās svētku atmosfērā, piedāvā aizraujošu dienu gan sporta faniem, gan ģimenēm ar bērniem.",
    "dateLabel": "DATUMS",
    "dateValue": "25. JŪLIJS",
    "dateSub": "2026. GADS",
    "locationLabel": "VIETA",
    "locationValue": "GULBENES Pilsētas Stadions",
    "locationSub": "O. KALPAKA IELA 1A",
    "formatLabel": "FORMĀTS",
    "formatValue": "5 x 5",
    "formatSub": "Dinamisks turnīra formāts",
    "feeLabel": "DALĪBAS MAKSA",
    "feeValue": "€150",
    "feeSub": "No komandas"
  },
  "prizePool": {
    "sectionLabel": "Apbalvojumi",
    "title": "BALVU",
    "titleHighlight": "FONDS",
    "firstLabel": "1. VIETA",
    "firstTag": "Galvenā Balva",
    "firstSub": "+ Kauss, dāvanas no atbalstītājiem",
    "secondLabel": "2. VIETA",
    "secondTitle": "Sudraba Godalgas",
    "secondSub": "+ dāvanas no atbalstītājiem",
    "thirdLabel": "3. VIETA",
    "thirdTitle": "BRONZAS GODALGAS",
    "thirdSub": "+ dāvanas no atbalstītājiem"
  },
  "hallOfFame": {
    "sectionLabel": "Cēzara Kauss",
    "title": "Slavas",
    "titleHighlight": "Zāle",
    "finalResult": "FINĀLA REZULTĀTS",
    "pen": "PEN:"
  },
  "matchDay": {
    "sectionLabel": "101 iemesls",
    "title": "KĀPĒC APMEKLĒT FUTBOLA TURNĪRU",
    "titleHighlight": "CĒZARA KAUSS?",
    "description": "Cēzara kauss ir ne tikai par futbolu, bet arī par kopienu un labi pavadītu laiku. Spēļu starplaikos apmeklētāji varēs izbaudīt svētku atmosfēru. Ģimenēm ar bērniem būs iespēja piedalīties dažādās aktivitātēs.\n\nVecākiem būs iespēja atpūsties un izbaudīt dažādus kulinārijas gardumus, kamēr bērni izklaidēsies piedāvātajās aktivitātēs. Dienas gaitā norisināsies dažādi izklaides pasākumi, kas katru festivāla apmeklētāju padarīs par daļu no Cēzara kausa burvības.\n\nUn tas vēl nav viss. 25. jūlijs ir arī Gulbenes pilsētas svētku diena, kas nozīmē, ka visi turnīra dalībnieki un apmeklētāji laipni aicināti piedalīties pilsētas piedāvātajos pasākumos, koncertos un tirdziņos.",
    "features": [
      {
        "title": "Jautra atmosfēra & mūzika",
        "desc": "Atmosfēru stadionā uzbursim kopīgi - atbalstot savējos un lieliski pavadot laiku, taču par mūziku, visas dienas garumā, būs atbildīgs DJ JVS"
      },
      {
        "title": "Atrakcijas bērniem",
        "desc": "Ierodies ar ģimeni un nedomā par to, kā izklaidēt mazākos, par to padomāsim mēs. Piepūšamās atrakcijas, cukurvate, popkorns un citas aktivitātes būs pieejamas visu dienu."
      },
      {
        "title": "Konkursi skatītājiem",
        "desc": "Arī skatītājiem jābūt gataviem draudzīgām sacensībām. Piedalies un saņem balvas no mūsu atbalstītājiem."
      },
      {
        "title": "Ēdieni & dzērieni",
        "desc": "Spēlējot un atbalstot savu komandu, tiks patērēts daudz kaloriju un enerģijas, tāpēc turnīra laikā būs pieejams gan garšīgs ēdiens, gan dažādi atspirdzinoši dzērieni."
      }
    ]
  },
  "sponsors": {
    "sectionLabel": "Liels Paldies",
    "title": "Turnīra",
    "titleHighlight": "Atbalstītājiem",
    "subtitle": "Bez Jums šis futbola turnīrs nebūtu iespējams, paldies par uzticēšanos un atbalstu!"
  },
  "teamSection": {
    "sectionLabel": "#TEAMCEZARAKAUSS",
    "title": "Mūsu",
    "titleHighlight": "Komanda",
    "description": "Mēs esam vietējie patrioti ar globālu redzējumu par to, kādam jābūt mūsdienīgam futbola pasākumam. Mūsu komandā apvienojušies organizatori, kuriem rūp Latvijas futbola nākotne un reģionu attīstība.\n\nMēs ticam, ka lielais futbols sākas tieši šeit – vietējos stadionos. Mūsu dzinējspēks ir vēlme pierādīt, ka augstākā līmeņa organizatoriskā kvalitāte ir iespējama jebkurā Latvijas vietā, ja vien pie darba ķeras cilvēki ar degsmi un īsto attieksmi.",
    "alwaysWithUs": "Vienmēr ar mums",
    "roles": {
      "founder": "Idejas autors",
      "technical": "Tehniskais nodrošinājums",
      "pr": "Sabiedriskās attiecības",
      "marketing": "Mārketings & IT",
      "dj": "DJ / Atmosfēra",
      "referee": "Galvenais runasvīrs"
    }
  },
  "timeline": {
    "sectionLabel": "INTENSITY",
    "title": "DIENAS",
    "titleHighlight": "PLĀNS",
    "events": [
      { "time": "09:00", "event": "REĢISTRĀCIJA UN IESILDĪŠANĀS", "desc": "Komandu ierašanās un numuru saņemšana." },
      { "time": "10:00", "event": "ATKLĀŠANAS CEREMONIJA", "desc": "Turnīra atklāšana un svinīgās uzrunas." },
      { "time": "10:30", "event": "GRUPU TURNĪRA SĀKUMS", "desc": "Intensīvas cīņas uz visiem laukumiem." },
      { "time": "14:00", "event": "PAUZE & SKILL CHALLENGES", "desc": "Atelpa spēlētājiem un konkursi skatītājiem." },
      { "time": "15:30", "event": "IZSLĒGŠANAS SPĒLES", "desc": "Ceturtdaļfināli un pusfināli." },
      { "time": "18:00", "event": "LIELAIS FINĀLS", "desc": "Cīņa par €1000 un Cēzara Kausu." },
      { "time": "19:00", "event": "APBALVOŠANA", "desc": "Uzvarētāju godināšana un Afterparty." }
    ]
  },
  "video": {
    "title": "Video",
    "titleHighlight": "Atskats",
    "subtitle": "Ja vēlies to piedzīvot pats — reģistrē savu komandu un tiekamies jau 25. jūlijā.",
    "subtitleLinkText": "reģistrē savu komandu"
  },
  "location": {
    "sectionLabel": "LOKĀCIJA",
    "title": "GULBENES PILSĒTAS",
    "titleHighlight": "STADIONS",
    "description": "Amatieru futbola turnīrs \"Cēzara kauss\" tradicionāli norisinās pilsētas svētku laikā Gulbenē, Gulbenes pilsētas stadionā. Stadionam ir 1500 sēdvietu kapacitāte, kas nodrošina pietiekami daudz vietas skatītājiem, lai baudītu spēles ērtā un draudzīgā atmosfērā. Ap stadionu būs pieejamas bezmaksas stāvvietas.",
    "description2": "Gulbene ir fantastiska pilsēta ko noteikti vērts aplūkot un iepazīt. Dodies uz visitgulbene.lv mājaslapu.",
    "addressLabel": "OFICIĀLĀ ADRESE",
    "addressValue": "O. KALPAKA IELA 1A, GULBENE",
    "surfaceLabel": "SEGUMS",
    "surfaceValue": "DABĪGAIS ZĀLIENS",
    "parkingLabel": "STĀVVIETAS",
    "parkingValue": "BEZ MAKSAS"
  },
  "footer": {
    "subtitle": "Artūra Dekšņa Piemiņas Turnīrs",
    "navTitle": "Navigācija",
    "navHome": "Sākums",
    "navAbout": "Par turnīru",
    "navHistory": "Vēsture",
    "navRules": "Reglaments",
    "navRegister": "Reģistrācija",
    "followTitle": "Seko Mums"
  },
  "history": {
    "pageTagline": "CĒZARA KAUSS ARHĪVS",
    "title": "TURNĪRA",
    "titleHighlight": "VĒSTURE",
    "subtitle": "Rezultāti, foto galerija un statistika no visiem Cēzara Kauss turnīriem",
    "scrollLabel": "Skatīt",
    "yearLabel": "Cēzara Kauss",
    "results": "Rezultāti",
    "viewAllResults": "Skatīt visus rezultātus",
    "resultsSubtitle": "Grupu tabulas, izslēgšanas spēles un pilna statistika",
    "stats": "Statistika",
    "participants": "Dalībnieki",
    "champions": "Čempioni",
    "firstPlace": "1. vieta",
    "secondPlace": "2. vieta",
    "thirdPlace": "3. vieta",
    "pen": "PEN:",
    "videoLabel": "Video",
    "statLabels": {
      "Komandas": "Komandas",
      "Spēles": "Spēles",
      "Vārti": "Vārti",
      "MVP": "MVP"
    }
  },
  "rules": {
    "pageTagline": "Cēzara kauss",
    "title": "TURNĪRA",
    "titleHighlight": "REGLAMENTS",
    "subtitle": "Oficiālie turnīra noteikumi un norises kārtība",
    "sections": [
      {
        "title": "1. TURNĪRA MĒRĶI",
        "items": [
          "1.1 Popularizēt futbolu un veselīgu dzīvesveidu Gulbenes novadā;",
          "1.2 Noskaidrot turnīra \"Cēzara kauss\" labākās futbola komandas;",
          "1.3 Veicināt sabiedrības interesi par futbolu."
        ]
      },
      {
        "title": "2. TURNĪRA VADĪBA UN ORGANIZĀCIJA",
        "items": [
          "2.1 Turnīra organizators ir biedrība \"Futbols Gulbenē\". (turpmāk tekstā – Organizators), e-pasts: cezarakauss@gmail.com / tel.: 25641934;",
          "2.2 Sacensību galvenais tiesnesis Artēmijs Semjonovs (e-pasts: cezarakauss@gmail.com / tel.: 25641934)."
        ]
      },
      {
        "title": "3. TURNĪRA NORISES VIETA UN LAIKS",
        "items": [
          "3.1. \"Cēzara kauss\" norisinās 2026.gada 25.jūlijā, Gulbenes pilsētas stadionā, O.Kalpaka iela 1a."
        ]
      },
      {
        "title": "4. DALĪBNIEKI",
        "items": [
          "4.1 Turnīrā \"Cēzara kauss\" var piedalīties jebkura komanda, kas apņemas ievērot un pildīt Reglamenta nosacījumus;",
          "4.2 Vienas komandas sastāvā turnīrā drīkst pieteikt 10(!) spēlētājus;",
          "4.3 Spēlētājiem jābūt sasniegušiem 15 gadu vecumu (ne jaunākiem kā 2011.gadā dzimušie);",
          "4.4 Spēlētāji ir vienlīdz atbildīgi par savas komandas katra spēlētāja iesniegto informāciju;",
          "4.5 Organizatori patur tiesības pieņemt galējo lēmumu par komandas vai atsevišķa spēlētāja pielaišanu pie spēlēšanas turnīrā;",
          "4.6 Ja turnīra norises laikā organizators atklāj faktu par nepatiesi sniegtu informāciju, no turnīra tiek diskvalificēta visa komanda;",
          "4.7 Katrai komandai ir jābūt vienādas krāsas krekliem ar numuriem, vārtsarga krekla krāsai jābūt atšķirīgai no laukuma spēlētājiem;",
          "4.8 Spēlētājs turnīrā drīkst piedalīties tikai vienas komandas sastāvā;",
          "4.9 Komanda var atsaukt savu dalību turnīrā. Dalības atsaukšanas gadījumā dalības maksa atmaksāta netiek."
        ]
      },
      {
        "title": "5. PIETEIKŠANĀS",
        "items": [
          "5.1 Komandas turnīram var pieteikties interneta vietnē www.cezarakauss.lv;",
          "5.2 Dalībnieki, piesakoties turnīram apliecina, ka neiebilst savu personas datu izmantošanai rezultātu apkopošanā un publicēšanā;",
          "5.3 Komandas var pieteikt savu dalību turnīrā ne vēlāk kā 7 kalendārās dienas līdz turnīra sākumam (25. jūlijs);",
          "5.4 Spēlētājam jāizturas pret organizatoriem un reglamentu ar cieņu;",
          "5.5 Komandas pēc pieteikuma nosūtīšanas saņem apstiprinājumu e-pastā un 3 kalendāro dienu laikā veic dalības maksas pārskaitījumu;",
          "5.6 Dalības maksa pēc apstiprinājuma saņemšanas jāiemaksā apstiprinājuma e-pastā norādītajā kontā. Dalības maksa netiek atgriezta;",
          "5.7 Ja turnīram pieteikušās vairāk nekā 40 komandas, nākamās komandas tiks iekļautas \"gaidīšanas sarakstā\";",
          "5.8 Turnīra dienā, katrai komandai reģistrējot savu ierašanos, tiks izsniegts komandas protokols;",
          "5.9 Komandas pārstāvim ir pienākums pārliecināties par protokola korektu aizpildīšanu."
        ]
      },
      {
        "title": "6. NORISES KĀRTĪBA",
        "items": [
          "6.1 Komandas spēlē divu fāžu turnīru (grupu fāze + playoff fāze).",
          "6.2 Komandas tiks dalītas grupās atbilstoši reģistrēto komandu skaitam. Grupā ne vairāk kā 5 komandas. 2 labākās no katras apakšgrupas kvalificējas playoff fāzei. **",
          "6.3 Komandu vietas nosaka pēc iegūto punktu summas (uzvara – 3 p., neizšķirts – 1 p., zaudējums – 0 p.). *",
          "6.4 Playoff turnīra fāzē pie neizšķirta rezultāta seko 6m soda sitieni – 5 katrai komandai.",
          "6.5 Spēles laiks 2 x 10 min.",
          "6.6 Spēlētāji laukumā: 5 (ieskaitot vārtsargu), spēle norit formātā 5 pret 5;",
          "6.7 Vārtu izmēri: 3m x 2m;",
          "6.8 Turnīra oficiālajā rezultātu vietnē (tournify.com) būs iespējams sekot līdzi turnīra rezultātiem.",
          "6.9 Pēc katras spēles rezultāts tiks publicēts turnīra rezultātu oficiālajā vietnē (tournify.com).",
          "6.10 Turnīra organizatoriem ir tiesības veikt izmaiņas spēļu norises laikos un vietās.",
          "6.11 Ja komanda neierodas uz spēli 10 minūšu laikā pēc plānotā spēles sākuma, tai tiek piešķirts tehniskais zaudējums 0:3."
        ],
        "footnotes": [
          "* Ja komandu skaits visās grupās nav vienāds, tad iegūto vietu nosaka pēc: VPS = punkti / nospēlētās spēles; VVS = vārtu starpība / nospēlētās spēles; GVS = gūtie vārti / nospēlētās spēles.",
          "** Pēc grupu fāzes komandas tiek sarindotas no 1-8. vietai un izveidoti ceturdaļfinālu pāri. (1-8, 2-7, 3-6, 4-5)."
        ]
      },
      {
        "title": "7. PROTESTS",
        "items": [
          "7.1 Protests iesniedzams rakstiski galvenajam tiesnesim pusstundas laikā pēc spēles beigu signāla;",
          "7.2 Protestus nepieņem par spēles laiku, 6m un 10m soda sitieniem, ieskaitītiem vai neieskaitītiem vārtiem;",
          "7.3 Iesniegtos protestus izskata komiteja trīs cilvēku sastāvā."
        ]
      },
      {
        "title": "8. TIESNEŠI",
        "items": [
          "8.1 Tiesnešus turnīram nozīmē turnīra organizatori;",
          "8.2 Visi turnīra tiesneši ir apstiprināti Latvijas futbola federācijā;",
          "8.3 Jebkurš spēles tiesnešu lēmums spēles laikā ir galīgs un neapstrīdams;",
          "8.4 Komandām nav tiesību vērsties ar pretenzijām pret tiesneša darbībām vai spēles laikā apvainot tiesnesi;",
          "8.5 Turnīra galvenajam tiesnesim ir tiesības nepielaist pie spēles spēlētāju vai komandu, ja rodas aizdomas, ka:"
        ],
        "subItems": [
          "8.5.1 spēlētājs ir sagrozījis datus protokolā vai pieteikumā;",
          "8.5.2 spēlētājs uzdodas par citu personu;",
          "8.5.3 spēlētājs vai komanda neievēro turnīra reglamentu;",
          "8.5.4 spēlētājs vai komanda veic negodīgas darbības;",
          "8.5.5 spēlētājs atrodas alkohola vai apreibinošo vielu ietekmē."
        ]
      },
      {
        "title": "9. TURNĪRA DISCIPLĪNA",
        "items": [
          "9.2 Par spļaušanu, tīšu speršanu, mešanu ar priekšmetu un abpusēju rupjību – noraidījums un jāizlaiž nākamā spēle. Par atkārtotu pārkāpumu diskvalifikācija uz visu turnīru;",
          "9.3 Par tiesnešu apvainošanu vai uzbrukumu tiesnesim – noraidījums un jāizlaiž nākamās trīs spēles;",
          "9.4 \"Cēzara kauss\" organizatoriem ir tiesības pieņemt atsevišķus lēmumus par soda apmēriem;",
          "9.5 Ja komanda nevar uzsākt spēli laikus, pārstāvim jābrīdina galvenais tiesnesis ne vēlāk kā 20 minūtes pirms mača;",
          "9.6 Par spēlētāja, kurš nav iekļauts protokolā, piedalīšanos spēlē – tehniskais zaudējums 0:3.",
          "9.7 Ja komanda izstājas no turnīra, nenospēlējot visas spēles, tai tiek liegta dalība nākamā gada turnīrā."
        ]
      },
      {
        "title": "10. MEDICĪNA",
        "items": [
          "10.1 Katrs spēlētājs ir atbildīgs par savu veselības stāvokli spēles laikā;",
          "10.2 Sīku traumu gadījumos medicīnisko palīdzību sniedz komandas treneris vai mediķis;",
          "10.3 Organizatori turnīra laikā nodrošina ar pilnībā aprīkotu medicīnas somu;",
          "10.4 Nopietnas traumas gadījumā organizatori nodrošina neatliekamās medicīniskās palīdzības izsaukšanu."
        ]
      },
      {
        "title": "11. TURNĪRA BALVU FONDS",
        "items": [
          "11.1 Turnīra pirmās 3 vietas ieguvušās komandas tiek apbalvotas ar organizatora noteiktām balvām;",
          "11.2 Organizatoriem ir tiesības piešķirt citas speciālās balvas;",
          "11.3 Tiek apbalvots fināla labākais spēlētājs (MVP), turnīra labākais uzbrucējs, vārtsargs un aizsargs."
        ]
      }
    ]
  },
  "registration": {
    "sectionLabel": "DALĪBA",
    "title": "PIETEIKT",
    "titleHighlight": "KOMANDU TURNĪRAM",
    "feeLabel": "DALĪBAS MAKSA",
    "teamNameLabel": "KOMANDAS NOSAUKUMS",
    "captainLabel": "KAPTEIŅA VĀRDS, UZVĀRDS",
    "phoneLabel": "TĀLRUNIS",
    "emailLabel": "E-PASTS",
    "logoLabel": "KOMANDAS LOGO (NEOBLIGĀTI)",
    "commentLabel": "KOMENTĀRS (NEOBLIGĀTI)",
    "commentPlaceholder": "PAPILDUS INFORMĀCIJA...",
    "uploadButton": "AUGŠUPIELĀDĒT LOGO",
    "uploadTypes": "PNG, JPG, SVG — MAX 5MB",
    "submitButton": "NOSŪTĪT PIETEIKUMU",
    "submitting": "NOSŪTA...",
    "rulesTitle": "Reglaments",
    "rulesMinAge": "MINIMĀLAIS VECUMS: 15 GADI",
    "rulesFormat": "FORMĀTS: 5 VS 5 (+REZERVE)",
    "rulesMaxPlayers": "MAX SPĒLĒTĀJU SKAITS komandā: 10",
    "rulesGames": "GARANTĒTS SPĒĻU SKAITS: 4",
    "rulesLink": "Pilns turnīra reglaments",
    "limitWarning": "KOMANDU SKAITS IR IEROBEŽOTS. PRIORITĀTE TIEK PIEŠĶIRTA REĢISTRĀCIJAS SECĪBĀ.",
    "logoError": "Logo fails nedrīkst pārsniegt 5MB",
    "genericError": "Kaut kas nogāja greizi. Mēģiniet vēlreiz.",
    "successTitle": "PIETEIKUMS",
    "successTitleHighlight": "SAŅEMTS",
    "successP1": "Paldies, ka reģistrējāt savu komandu turnīram Cēzara Kauss.",
    "successP2": "Mēs esam nosūtījuši e-pastu ar apstiprinājumu un tālāko informāciju (apmaksas detaļas u.c.).",
    "successP3": "Ja ziņu neredzat, pārbaudiet SPAM/JUNK sadaļu.",
    "backButton": "ATPAKAĻ UZ SĀKUMU"
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add messages/lv.json
git commit -m "feat: add Latvian translation messages file"
```

---

## Task 4: Create `messages/en.json`

- [ ] **Step 1: Create `messages/en.json` with all English strings**

```json
{
  "nav": {
    "home": "HOME",
    "about": "About",
    "history": "History",
    "rules": "Rules",
    "register": "Register your team",
    "mobileRegister": "REGISTER TEAM"
  },
  "hero": {
    "tagline": "ARTŪRS DEKSNIS MEMORIAL TOURNAMENT",
    "subtitle1": "More than a tournament — a true football celebration.",
    "subtitle2": "EMOTIONS. FRIENDS.",
    "subtitleHighlight": "FOOTBALL.",
    "ctaRegister": "Register your team",
    "ctaHistory": "View Tournament Archive",
    "countdownLabel": "Time until registration closes",
    "days": "DAYS",
    "hours": "HOURS",
    "minutes": "MINUTES",
    "seconds": "SECONDS"
  },
  "about": {
    "sectionLabel": "About the tournament",
    "title": "WHAT IS THE FOOTBALL TOURNAMENT",
    "titleHighlight": "CĒZARA KAUSS?",
    "description": "Cēzara Kauss is an amateur football tournament that had its debut on July 27, 2024, during the Gulbene city celebrations. This tournament, held annually in a festive atmosphere, offers an exciting day for football fans and families with children alike.",
    "dateLabel": "DATE",
    "dateValue": "JULY 25",
    "dateSub": "YEAR 2026",
    "locationLabel": "VENUE",
    "locationValue": "GULBENE City Stadium",
    "locationSub": "O. KALPAKA ST. 1A",
    "formatLabel": "FORMAT",
    "formatValue": "5 x 5",
    "formatSub": "Dynamic tournament format",
    "feeLabel": "ENTRY FEE",
    "feeValue": "€150",
    "feeSub": "Per team"
  },
  "prizePool": {
    "sectionLabel": "Awards",
    "title": "PRIZE",
    "titleHighlight": "POOL",
    "firstLabel": "1st PLACE",
    "firstTag": "Grand Prize",
    "firstSub": "+ Trophy, gifts from sponsors",
    "secondLabel": "2nd PLACE",
    "secondTitle": "Silver Medal",
    "secondSub": "+ gifts from sponsors",
    "thirdLabel": "3rd PLACE",
    "thirdTitle": "BRONZE MEDAL",
    "thirdSub": "+ gifts from sponsors"
  },
  "hallOfFame": {
    "sectionLabel": "Cēzara Kauss",
    "title": "Hall of",
    "titleHighlight": "Fame",
    "finalResult": "FINAL SCORE",
    "pen": "PEN:"
  },
  "matchDay": {
    "sectionLabel": "101 reasons",
    "title": "WHY VISIT THE FOOTBALL TOURNAMENT",
    "titleHighlight": "CĒZARA KAUSS?",
    "description": "Cēzara Kauss is not just about football — it is about community and a great time. During match breaks, visitors can enjoy a festive atmosphere. Families with children will have the opportunity to participate in various activities.\n\nParents will have the chance to relax and enjoy various culinary delights while children are entertained. Throughout the day, various entertainment events will take place that will make every festival visitor a part of the magic of Cēzara Kauss.\n\nAnd that is not all. July 25 is also Gulbene City Day, meaning all tournament participants and visitors are warmly invited to join the city's events, concerts and markets.",
    "features": [
      {
        "title": "Great atmosphere & music",
        "desc": "We will create a great atmosphere at the stadium together — cheering for our own while having a wonderful time. DJ JVS will be responsible for the music throughout the entire day."
      },
      {
        "title": "Attractions for kids",
        "desc": "Come with your family and do not worry about entertaining the younger ones — we will take care of that. Inflatable attractions, cotton candy, popcorn and other activities will be available all day."
      },
      {
        "title": "Competitions for spectators",
        "desc": "Spectators should also be ready for friendly competitions. Participate and receive prizes from our supporters."
      },
      {
        "title": "Food & drinks",
        "desc": "Playing and cheering for your team burns a lot of calories and energy, so during the tournament there will be both tasty food and various refreshing drinks available."
      }
    ]
  },
  "sponsors": {
    "sectionLabel": "Big Thanks",
    "title": "Tournament",
    "titleHighlight": "Sponsors",
    "subtitle": "Without you this football tournament would not be possible — thank you for your trust and support!"
  },
  "teamSection": {
    "sectionLabel": "#TEAMCEZARAKAUSS",
    "title": "Our",
    "titleHighlight": "Team",
    "description": "We are local patriots with a global vision of what a modern football event should look like. Our team brings together organizers who care about the future of Latvian football and regional development.\n\nWe believe that great football starts right here — in local stadiums. Our driving force is the desire to prove that top-level organizational quality is possible anywhere in Latvia, if the right people with passion and the right attitude take on the work.",
    "alwaysWithUs": "Always with us",
    "roles": {
      "founder": "Founder",
      "technical": "Technical Support",
      "pr": "Public Relations",
      "marketing": "Marketing & IT",
      "dj": "DJ / Atmosphere",
      "referee": "Head Referee"
    }
  },
  "timeline": {
    "sectionLabel": "INTENSITY",
    "title": "DAY",
    "titleHighlight": "SCHEDULE",
    "events": [
      { "time": "09:00", "event": "REGISTRATION & WARM-UP", "desc": "Team arrival and number collection." },
      { "time": "10:00", "event": "OPENING CEREMONY", "desc": "Tournament opening and official speeches." },
      { "time": "10:30", "event": "GROUP STAGE BEGINS", "desc": "Intense battles on all pitches." },
      { "time": "14:00", "event": "BREAK & SKILL CHALLENGES", "desc": "Rest for players and competitions for spectators." },
      { "time": "15:30", "event": "KNOCKOUT ROUNDS", "desc": "Quarter-finals and semi-finals." },
      { "time": "18:00", "event": "GRAND FINAL", "desc": "Battle for €1,000 and the Cēzara Kauss." },
      { "time": "19:00", "event": "AWARD CEREMONY", "desc": "Champions celebration and Afterparty." }
    ]
  },
  "video": {
    "title": "Video",
    "titleHighlight": "Highlights",
    "subtitle": "If you want to experience it yourself — register your team and we will see you on July 25.",
    "subtitleLinkText": "register your team"
  },
  "location": {
    "sectionLabel": "LOCATION",
    "title": "GULBENE CITY",
    "titleHighlight": "STADIUM",
    "description": "The Cēzara Kauss amateur football tournament traditionally takes place during the city celebrations in Gulbene, at the Gulbene City Stadium. The stadium has a capacity of 1,500 seats. Free parking is available around the stadium for participants and visitors.",
    "description2": "Gulbene is a fantastic city well worth exploring. Visit the visitgulbene.lv website for places to eat, sights and accommodation.",
    "addressLabel": "OFFICIAL ADDRESS",
    "addressValue": "O. KALPAKA ST. 1A, GULBENE",
    "surfaceLabel": "SURFACE",
    "surfaceValue": "NATURAL GRASS",
    "parkingLabel": "PARKING",
    "parkingValue": "FREE"
  },
  "footer": {
    "subtitle": "Artūrs Deksnis Memorial Tournament",
    "navTitle": "Navigation",
    "navHome": "Home",
    "navAbout": "About",
    "navHistory": "History",
    "navRules": "Rules",
    "navRegister": "Register",
    "followTitle": "Follow Us"
  },
  "history": {
    "pageTagline": "CĒZARA KAUSS ARCHIVE",
    "title": "TOURNAMENT",
    "titleHighlight": "HISTORY",
    "subtitle": "Results, photo gallery and statistics from all Cēzara Kauss tournaments",
    "scrollLabel": "Scroll",
    "yearLabel": "Cēzara Kauss",
    "results": "Results",
    "viewAllResults": "View all results",
    "resultsSubtitle": "Group tables, knockout stage and full statistics",
    "stats": "Statistics",
    "participants": "Participants",
    "champions": "Champions",
    "firstPlace": "1st place",
    "secondPlace": "2nd place",
    "thirdPlace": "3rd place",
    "pen": "PEN:",
    "videoLabel": "Video",
    "statLabels": {
      "Komandas": "Teams",
      "Spēles": "Matches",
      "Vārti": "Goals",
      "MVP": "MVP"
    }
  },
  "rules": {
    "pageTagline": "Cēzara Kauss",
    "title": "TOURNAMENT",
    "titleHighlight": "RULES",
    "subtitle": "Official tournament rules and competition format",
    "sections": [
      {
        "title": "1. TOURNAMENT GOALS",
        "items": [
          "1.1 To promote football and a healthy lifestyle in Gulbene Municipality;",
          "1.2 To determine the best football teams of the Cēzara Kauss tournament;",
          "1.3 To encourage public interest in football."
        ]
      },
      {
        "title": "2. TOURNAMENT MANAGEMENT AND ORGANISATION",
        "items": [
          "2.1 The tournament organiser is the association \"Futbols Gulbenē\" (hereinafter - the Organiser), e-mail: cezarakauss@gmail.com / tel.: 25641934;",
          "2.2 The chief referee of the competition is Artēmijs Semjonovs (e-mail: cezarakauss@gmail.com / tel.: 25641934)."
        ]
      },
      {
        "title": "3. TOURNAMENT VENUE AND DATE",
        "items": [
          "3.1. Cēzara Kauss takes place on July 25, 2026, at Gulbene City Stadium, O.Kalpaka iela 1a."
        ]
      },
      {
        "title": "4. PARTICIPANTS",
        "items": [
          "4.1 Any team that commits to comply with the Regulations may participate in the Cēzara Kauss tournament;",
          "4.2 A maximum of 10 players may be registered per team;",
          "4.3 Players must be at least 15 years old (born no later than 2011);",
          "4.4 Players are equally responsible for the information submitted by each player of their team;",
          "4.5 The organisers reserve the right to make the final decision on whether a team or player may participate;",
          "4.6 If false information is discovered during the tournament, the entire team will be disqualified;",
          "4.7 Each team must have matching jerseys with numbers; the goalkeeper's jersey must differ from outfield players;",
          "4.8 A player may only participate in one team during the tournament;",
          "4.9 A team may withdraw from the tournament. In the event of withdrawal, the entry fee will not be refunded."
        ]
      },
      {
        "title": "5. REGISTRATION",
        "items": [
          "5.1 Teams may register for the tournament at www.cezarakauss.lv;",
          "5.2 By registering, participants confirm they do not object to the use of their personal data for results publication and social media;",
          "5.3 Teams may register no later than 7 calendar days before the start of the tournament (July 25);",
          "5.4 Players must treat organisers and regulations with respect and provide honest information;",
          "5.5 Teams receive a confirmation email and must transfer the entry fee within 3 calendar days. If not paid, the application is cancelled;",
          "5.6 After receiving confirmation, the entry fee must be paid to the account specified in the confirmation email. The entry fee is non-refundable;",
          "5.7 If more than 40 teams register, subsequent teams will be placed on a waiting list;",
          "5.8 On tournament day, each team will receive a team sheet upon arrival;",
          "5.9 The team representative is responsible for ensuring the team sheet is filled in correctly."
        ]
      },
      {
        "title": "6. COMPETITION FORMAT",
        "items": [
          "6.1 Teams play a two-phase tournament (group stage + playoff phase).",
          "6.2 Teams are divided into groups of up to 5. The 2 best from each group advance to the playoff phase. **",
          "6.3 Team standings are determined by points (win – 3 pts., draw – 1 pt., loss – 0 pts.). *",
          "6.4 In the playoff phase, if the score is level, a 6m penalty shootout follows — 5 kicks per team.",
          "6.5 Match duration: 2 x 10 min.",
          "6.6 Players on the pitch: 5 (including goalkeeper), format 5 vs 5;",
          "6.7 Goal dimensions: 3m x 2m;",
          "6.8 The official results website (tournify.com) will show results, match schedules and pitches.",
          "6.9 After each match, the result will be published on tournify.com.",
          "6.10 Organisers have the right to make changes to match times and venues if an emergency arises.",
          "6.11 If a team fails to appear within 10 minutes of the scheduled kick-off, they receive a technical defeat of 0:3."
        ],
        "footnotes": [
          "* If groups are unequal in size, standings are determined by: PPG = points / matches; GDG = goal difference / matches; GPG = goals / matches.",
          "** After the group stage, teams are ranked 1st–8th and quarter-final pairs are formed. (1-8, 2-7, 3-6, 4-5)."
        ]
      },
      {
        "title": "7. PROTESTS",
        "items": [
          "7.1 A protest must be submitted in writing to the chief referee within 30 minutes of the final whistle;",
          "7.2 Protests are not accepted regarding playing time, penalty kicks, or counted/disallowed goals;",
          "7.3 Protests are reviewed by a committee of three people."
        ]
      },
      {
        "title": "8. REFEREES",
        "items": [
          "8.1 Referees are appointed by the tournament organisers;",
          "8.2 All referees are approved by the Latvian Football Federation;",
          "8.3 Any referee decision during the game is final and binding;",
          "8.4 Teams may not make complaints against a referee's actions or insult a referee during the match;",
          "8.5 The chief referee has the right to prevent a player from competing if there is suspicion that:"
        ],
        "subItems": [
          "8.5.1 the player has falsified data in the team sheet or application;",
          "8.5.2 the player is impersonating another person;",
          "8.5.3 the player or team is not complying with the tournament regulations;",
          "8.5.4 the player or team is engaging in dishonest conduct;",
          "8.5.5 the player is under the influence of alcohol or intoxicating substances."
        ]
      },
      {
        "title": "9. TOURNAMENT DISCIPLINE",
        "items": [
          "9.2 For spitting, deliberate kicking, throwing objects or mutual rough conduct — dismissal and next match missed. Repeat offence: disqualification;",
          "9.3 For insulting or assaulting a referee — dismissal and next three matches missed;",
          "9.4 Organisers have the right to make individual decisions regarding penalties;",
          "9.5 If a team cannot start a match on time, the representative must notify the chief referee at least 20 minutes before kick-off;",
          "9.6 For a player not on the team sheet participating — technical defeat 0:3.",
          "9.7 If a team withdraws without completing all matches, they are banned from the following year's tournament."
        ]
      },
      {
        "title": "10. MEDICAL",
        "items": [
          "10.1 Each player is responsible for their own health during the match;",
          "10.2 Minor injuries are treated by the team coach or medical staff provided by the organiser;",
          "10.3 The organisers will provide a fully equipped medical kit during the tournament;",
          "10.4 In the case of a serious injury, the organisers will call emergency medical services."
        ]
      },
      {
        "title": "11. TOURNAMENT PRIZE FUND",
        "items": [
          "11.1 The top 3 teams will be awarded prizes determined by the organiser;",
          "11.2 The organisers have the right to award other special prizes;",
          "11.3 The tournament MVP, best striker, best goalkeeper and best defender will all be awarded."
        ]
      }
    ]
  },
  "registration": {
    "sectionLabel": "REGISTRATION",
    "title": "REGISTER",
    "titleHighlight": "YOUR TEAM",
    "feeLabel": "ENTRY FEE",
    "teamNameLabel": "TEAM NAME",
    "captainLabel": "CAPTAIN'S FULL NAME",
    "phoneLabel": "PHONE",
    "emailLabel": "EMAIL",
    "logoLabel": "TEAM LOGO (OPTIONAL)",
    "commentLabel": "COMMENT (OPTIONAL)",
    "commentPlaceholder": "ADDITIONAL INFORMATION...",
    "uploadButton": "UPLOAD LOGO",
    "uploadTypes": "PNG, JPG, SVG — MAX 5MB",
    "submitButton": "SUBMIT APPLICATION",
    "submitting": "SUBMITTING...",
    "rulesTitle": "Rules",
    "rulesMinAge": "MINIMUM AGE: 15 YEARS",
    "rulesFormat": "FORMAT: 5 VS 5 (+RESERVE)",
    "rulesMaxPlayers": "MAX PLAYERS PER TEAM: 10",
    "rulesGames": "GUARANTEED MATCHES: 4",
    "rulesLink": "Full tournament rules",
    "limitWarning": "TEAM SPOTS ARE LIMITED. PRIORITY IS GIVEN IN ORDER OF REGISTRATION.",
    "logoError": "Logo file must not exceed 5MB",
    "genericError": "Something went wrong. Please try again.",
    "successTitle": "APPLICATION",
    "successTitleHighlight": "RECEIVED",
    "successP1": "Thank you for registering your team for the Cēzara Kauss tournament.",
    "successP2": "We have sent you an email with confirmation and further information (payment details etc.).",
    "successP3": "If you do not see the message, please check your SPAM/JUNK folder.",
    "backButton": "BACK TO START"
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add messages/en.json
git commit -m "feat: add English translation messages file"
```
