export enum Step {
  PERSONAL = 'personal',
  DEMOGRAPHICS = 'demographics',
  EDUCATION = 'education',
  MBTI = 'mbti',
  PREFERENCES = 'preferences',
  INTERESTS = 'interests',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  ESSENCE = 'essence',
  RESULTS = 'results',
}

export interface UserProfile {
  name: string;
  gender: string;
  age: string;
  education: string;
  studyField: string;
  mbtiPrefs: {
    energy: string;
    info: string;
    decisions: string;
    lifestyle: string;
  };
  workStyle: string[];
  environment: string;
  interests: string[];
  skills: string[];
  experience: string;
  essence: string;
}

export interface CareerPath {
  title: string;
  description: string;
  matchPercentage: number;
  scope: string;
  salaryRange: string;
  marketContext: string;
}

export interface GeminiRecommendationResponse {
  careerPaths: CareerPath[];
  personalityNote: string;
  growthAdvice: {
    newSkills: string[];
    hobbies: string[];
  };
}
