export enum ViewState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  ARCHIVE_2024 = 'ARCHIVE_2024',
  ARCHIVE_2025 = 'ARCHIVE_2025',
  GALLERY = 'GALLERY',
  AI_PUNDIT = 'AI_PUNDIT',
  SIGNUP = 'SIGNUP'
}

export interface MediaItem {
  type: 'photo' | 'video';
  url: string;
  thumbnail: string;
  title: string;
}

export interface Team {
  id: string;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
  logoColor: string;
}

export interface Match {
  id: string;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  stage: string;
}

export interface PlayerStats {
  name: string;
  team: string;
  goals: number;
}

export interface TournamentYearData {
  year: number;
  winner: string;
  runnerUp: string;
  topScorer: PlayerStats;
  teams: Team[];
  matches: Match[];
  media: MediaItem[];
}