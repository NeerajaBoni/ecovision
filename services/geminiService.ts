
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateEcoTip = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a short, actionable, and encouraging tip for water or energy conservation at home. Make it easy for anyone to understand and implement. The tip should be no more than 2 sentences. Do not include any introductory phrases like "Here's a tip:".`,
      config: {
        temperature: 0.8,
        topP: 1,
        topK: 32,
        maxOutputTokens: 100,
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating eco tip:", error);
    return "Could not generate a tip at this time. Why not try turning off lights in rooms you're not using?";
  }
};
