import { GoogleGenAI } from "@google/genai";

// Strictly follow initialization guidelines by using the named parameter and process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMatchHype = async (teamA: string, teamB: string): Promise<string> => {
  // Guidelines state to assume process.env.API_KEY is pre-configured and valid.
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an energetic, slightly chaotic, and humorous football commentator. 
      Generate a short, hype-filled pre-match analysis (max 100 words) for a match between "${teamA}" and "${teamB}" in the Cēzara Kauss amateur tournament.
      Make up some funny strengths for each team based on their names. Keep it fun and engaging.`,
    });
    // Access response text property directly according to SDK guidelines.
    return response.text || "The commentator is speechless!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Technical difficulties in the commentary booth. We'll be back shortly.";
  }
};

export const askRulesBot = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the strict but fair referee of Cēzara Kauss. 
      Answer the following question about football rules or tournament regulations briefly and authoritatively: "${query}"`,
    });
    // Access response text property directly according to SDK guidelines.
    return response.text || "Play on!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The referee is consulting VAR (Error).";
  }
};