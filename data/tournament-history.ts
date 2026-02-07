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
  photos: string[];
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
      "FC Pārgauja",
      "IGGI United",
      "Balvu Juniors",
      "Gulbenes FK",
      "Cesvaines Dravas",
      "Alūksnes SC",
      "Madonas Enerģija",
    ],
    stats: [
      { label: "Komandas", value: "8" },
      { label: "Spēles", value: "15" },
      { label: "Vārti", value: "42" },
      { label: "MVP", value: "J. Bērziņš" },
    ],
    photos: [
      "/images/vesture/2025/placeholder-1.webp",
      "/images/vesture/2025/placeholder-2.webp",
      "/images/vesture/2025/placeholder-3.webp",
      "/images/vesture/2025/placeholder-4.webp",
      "/images/vesture/2025/placeholder-5.webp",
      "/images/vesture/2025/placeholder-6.webp",
    ],
    videoUrl: "https://www.youtube.com/watch?v=30YlLGeUReY",
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
      "Balvu Juniors",
      "Balvu Sporta centrs",
      "Gulbenes United",
      "Cesvaines FK",
      "Alūksnes Boys",
    ],
    stats: [
      { label: "Komandas", value: "6" },
      { label: "Spēles", value: "11" },
      { label: "Vārti", value: "28" },
      { label: "MVP", value: "R. Ozoliņš" },
    ],
    photos: [
      "/images/vesture/2024/placeholder-1.webp",
      "/images/vesture/2024/placeholder-2.webp",
      "/images/vesture/2024/placeholder-3.webp",
      "/images/vesture/2024/placeholder-4.webp",
      "/images/vesture/2024/placeholder-5.webp",
      "/images/vesture/2024/placeholder-6.webp",
    ],
    videoUrl: "https://www.youtube.com/watch?v=30YlLGeUReY",
    videoTitle: "2024. gada turnīra apskats",
    scoresUrl: "https://tournifyapp.com/live/cezarakauss/standings",
  },
];
