import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = (typeof process !== 'undefined' && process.env && process.env.API_KEY) || '';

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are the official AI Assistant for Tilottama College. 
Your tone is professional, welcoming, and academic.
You help prospective students, parents, and current students with information about the college.

Key Information about Tilottama College:
- Location: Tilottama, Rupandehi, Nepal.
- Established: 1996.
- Mission: To provide quality education in Science, Management, and Humanities.
- Programs: 
  - +2 Science (Physics, Chemistry, Biology/Math)
  - +2 Management (Accountancy, Economics, Computer Science)
  - BBA (Bachelor of Business Administration)
  - MBA (Master of Business Administration)
- Facilities: Modern Science Labs, Computer Labs, Library, Sports Ground, Transportation.
- Admissions: Open annually around June/July immediately after SEE results. Entrance exam is required.

If you don't know a specific detail (like a specific teacher's phone number), politely ask them to contact the administration directly via the Contact page.
Keep answers concise (under 100 words) unless detailed explanation is requested.
`;

export const initializeChat = (): void => {
  if (!API_KEY) {
    console.warn("Gemini API Key is missing. Chat functionality will be limited.");
    return;
  }
  
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    chatSession = ai.chats.create({
      // FIX: Updated model to 'gemini-3-flash-preview' for better performance on basic text tasks, as per Gemini API guidelines.
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
    if (!chatSession) {
      return "I'm sorry, I cannot connect to the server right now. Please try again later.";
    }
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({
      message: message
    });
    return result.text || "I didn't catch that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble retrieving that information right now. Please check the website sections for more details.";
  }
};