import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile, GeminiRecommendationResponse } from "../types";
import { Language, translations } from "../translations";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const recommendationSchema = {
  type: Type.OBJECT,
  properties: {
    careerPaths: {
      type: Type.ARRAY,
      description: "A list of at least 3 career paths that suit the user in the Pakistani market.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          matchPercentage: { type: Type.NUMBER },
          scope: { type: Type.STRING, description: "The job market outlook specifically in Pakistan." },
          salaryRange: { type: Type.STRING, description: "Estimated salary range in PKR (e.g., 80,000 - 150,000 PKR)." },
          marketContext: { type: Type.STRING, description: "Information about sectors or cities in Pakistan where this is most relevant." }
        },
        required: ['title', 'description', 'matchPercentage', 'scope', 'salaryRange', 'marketContext']
      }
    },
    personalityNote: { 
      type: Type.STRING, 
      description: "A thoughtful note about the user's personality based on their choices and how these traits can be used." 
    },
    growthAdvice: {
      type: Type.OBJECT,
      properties: {
        newSkills: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific new skills they should learn." },
        hobbies: { type: Type.ARRAY, items: { type: Type.STRING }, description: "New hobbies they might enjoy based on their profile." }
      },
      required: ['newSkills', 'hobbies']
    }
  },
  required: ['careerPaths', 'personalityNote', 'growthAdvice'],
};

export async function getRecommendations(profile: UserProfile, lang: Language = 'en'): Promise<GeminiRecommendationResponse> {
  const t = translations[lang];
  const prompt = `
    Based on the following user profile, perform a comprehensive analysis:
    
    User Profile:
    - Name: ${profile.name} (Analyze the linguistic/cultural meaning of this name and how it reflects on their potential journey)
    - Gender: ${profile.gender}
    - Age Group: ${profile.age}
    - Education Level: ${profile.education}
    - Field of Study: ${profile.studyField}
    - Personality (MBTI Model): ${profile.mbtiPrefs.energy}${profile.mbtiPrefs.info}${profile.mbtiPrefs.decisions}${profile.mbtiPrefs.lifestyle}
    - Preferred Work Style: ${profile.workStyle.join(", ")}
    - Preferred Environment: ${profile.environment}
    - Industrial Interests & Behavioral Tendencies: ${profile.interests.join(", ")}
    - Core Strengths & Personal Traits: ${profile.skills.join(", ")}
    - Professional/Life Experience: ${profile.experience}
    - Personal Philosophy/Ambition: ${profile.essence}
    
    Requirements:
    1. Perform a holistic synthesis of their personal nature (strengths/traits), their industrial inclinations, their MBTI-driven behavioral preferences, and their preferred work culture with their past experience. Focus specifically on the Pakistani economy, its emerging tech sectors, industrial hubs, and global remote work popularity.
    2. Incorporate the traditional or linguistic significance of their name into your career reasoning—explain if their name carries a spirit that aligns with certain vocational paths.
    3. Identify at least 3 distinct "Dream Career" Paths that perfectly intersect their profile, personality type, and work-style preferences. Use Markdown for structured output:
       - Use bullet points for any lists within descriptions.
       - For each path, provide:
          - Match percentage (0-100%)
          - Specific title and description.
          - 'scope': Realistic outlook of this job in Pakistan over the next 5 years (High/Rising/Niche).
          - 'salaryRange': Estimated monthly PKR range (e.g., "150,000 - 300,000 PKR").
          - 'marketContext': Mention specific hubs (e.g., Lahore/Karachi/Islamabad tech scenes, Faisalabad/Sialkot industrial zones, or freelancing trends).
    4. Write a 'personalityNote' that validates their unique combination of traits and preferences, explaining how they can dominate their chosen field in the Pakistani professional environment. Use bullet points for specific actionable advice.
    5. Suggest specific new hobbies and skills that will bridge the gap.
    6. ${lang === 'ur' ? 'IMPORTANT: provide all descriptive text in Urdu. Use bullet points for readability. Ensure the tone is inspiring yet professional.' : 'IMPORTANT: Provide all text in English. Use bullet points for readability. Ensure the tone is inspiring yet professional.'}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: recommendationSchema,
        temperature: 0.7,
      },
    });

    const jsonStr = response.text || "";
    if (!jsonStr) throw new Error("Empty response from AI");
    
    const data = JSON.parse(jsonStr) as GeminiRecommendationResponse;
    return data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return {
      careerPaths: [{ 
        title: "Career Discovery", 
        description: "Standard analysis path.", 
        matchPercentage: 85,
        scope: "Global",
        salaryRange: "N/A",
        marketContext: "General"
      }],
      personalityNote: "Analytical and curious.",
      growthAdvice: { newSkills: ["Critical Thinking"], hobbies: ["Reading"] },
    };
  }
}
