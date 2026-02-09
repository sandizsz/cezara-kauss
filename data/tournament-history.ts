export type TeamResult = {
  name: string;
  score?: string;
};

export type TournamentYear = {
  year: number;
  winner: TeamResult;
  runnerUp: TeamResult;
  thirdPlace: TeamResult;
  finalScore: string;
  penalties?: string;
  teams: string[];
  stats: { label: string; value: string }[];
  videoUrl: string;
  videoTitle: string;
  scoresUrl: string;
};

export const tournamentHistory: TournamentYear[] = [
  {
    year: 2025,
    winner: { name: "Balvu Sporta Centrs" },
    runnerUp: { name: "FC Pārgauja" },
    thirdPlace: { name: "IGGI United" },
    finalScore: "1 - 0",
    penalties: "3 - 1",
    teams: [
      "Balvu Sporta Centrs",
      "Daugavgrīvas cietums",
      "Druviena",
      "FC Pārgauja",
      "FK Cēzars",
      "FK Marienburga",
      "FK Praulienas Bonaparti",
      "FK Ropaži",
      "FK Rēveļi",
      "FK Svelberģis",
      "Grīzinkalns",
      "IGGI United",
      "P.K.U",
      "Puto/Kārsava",
      "Stāķi FC",
    ],
    stats: [
      { label: "Komandas", value: "15" },
      { label: "Spēles", value: "38" },
      { label: "Vārti", value: "106" },
      { label: "MVP", value: "K. Pušpurs" },
    ],
    videoUrl: "https://www.youtube.com/embed/wOZpFlpIMco?si=k5Rq-j8S3-v1V6eF&autoplay=1",
    videoTitle: "2025. gada turnīra apskats",
    scoresUrl: "https://tournifyapp.com/live/cezarakauss2025/standings",
  },
  {
    year: 2024,
    winner: { name: "Puto/Kārsava" },
    runnerUp: { name: "Balvu Juniors" },
    thirdPlace: { name: "Balvu Sporta centrs" },
    finalScore: "2 - 0",
    teams: [
      "Puto/Kārsava",
      "Balkūzī",
      "Balvi Juniors",
      "Balvu Sporta Centrs",
      "Braapwin",
      "FC Futbola biedri",
      "FK Alūksne",
      "FK Praulienas Bonaparti",
      "FK Rēveļi",
      "FK Svelberģis",
      "Rūjienas kvartāls",
      "Stāķi FC",
      "Tukuma Titāni",
    ],
    stats: [
      { label: "Komandas", value: "13" },
      { label: "Spēles", value: "30" },
      { label: "Vārti", value:"80" },
      { label: "MVP", value: "V. Pipcāns" },
    ],
    videoUrl: "",
    videoTitle: "",
    scoresUrl: "https://tournifyapp.com/live/cezarakauss/standings",
  },
];
