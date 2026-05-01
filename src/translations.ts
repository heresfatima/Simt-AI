export type Language = 'en' | 'ur';

export interface Translation {
  title: string;
  subtitle: string;
  startOver: string;
  back: string;
  continue: string;
  discover: string;
  loading: string;
  stepCount: (current: number, total: number) => string;
  personal: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
  };
  demographics: {
    title: string;
    description: string;
    genderLabel: string;
    ageLabel: string;
  };
  education: {
    title: string;
    description: string;
    eduLabel: string;
    fieldLabel: string;
    fieldPlaceholder: string;
  };
  interests: {
    title: string;
    description: string;
    label: string;
    placeholder: string;
    suggested: string;
  };
  skills: {
    title: string;
    description: string;
    label: string;
    placeholder: string;
    suggested: string;
  };
  experience: {
    title: string;
    description: string;
    label: string;
    placeholder: string;
  };
  essence: {
    title: string;
    description: string;
    label: string;
    placeholder: string;
  };
  preferences: {
    title: string;
    description: string;
    styleLabel: string;
    envLabel: string;
  };
  mbti: {
    title: string;
    description: string;
    energyLabel: string;
    energyOptions: { [key: string]: string };
    infoLabel: string;
    infoOptions: { [key: string]: string };
    decisionsLabel: string;
    decisionsOptions: { [key: string]: string };
    lifestyleLabel: string;
    lifestyleOptions: { [key: string]: string };
  };
  results: {
    title: (name: string) => string;
    description: (name: string) => string;
    activeProfile: string;
    essence: string;
    velocity: string;
    found: string;
    matchLogic: string;
    job: string;
    discoveryTitle: string;
    personalityTitle: string;
    hobbiesTitle: string;
    newSkillsTitle: string;
    matchLabel: string;
    scopeLabel: string;
    salaryLabel: string;
    contextLabel: string;
    traitsIdentified: string;
    psychologicalBlueprint: string;
    footerTagline: string;
  };
  genders: { [key: string]: string };
  ages: { [key: string]: string };
  educations: { [key: string]: string };
}

export const translations: Record<Language, Translation> = {
  en: {
    title: "Simt AI",
    subtitle: "Career Strategic Engine",
    startOver: "New Analysis",
    back: "Back",
    continue: "Continue",
    discover: "Analyze My Career",
    loading: "Designing your future...",
    stepCount: (current, total) => `Step ${current} of ${total}`,
    personal: {
      title: "Let's Get Started",
      description: "First, what should we call you?",
      nameLabel: "Your Name",
      namePlaceholder: "What is your name?",
    },
    demographics: {
      title: "A Bit About You",
      description: "This helps us contextualize your career path.",
      genderLabel: "Gender Identity",
      ageLabel: "Age Bracket",
    },
    education: {
      title: "Academic Background",
      description: "Tell us about your educational foundation.",
      eduLabel: "Highest Education",
      fieldLabel: "Field of Study / Major",
      fieldPlaceholder: "e.g. Pre-Engineering, Computer Science, Finance...",
    },
    interests: {
      title: "Industry & Inclination",
      description: "Pick fields that fascinate you and traits that define your nature.",
      label: "Fields & Behaviors",
      placeholder: "e.g. Technology, empathy, logic...",
      suggested: "Suggested Fields",
    },
    skills: {
      title: "Core Competencies",
      description: "What strengths or professional abilities do you bring to the table?",
      label: "Professional Skills",
      placeholder: "e.g. Leadership, analytical thinking...",
      suggested: "Top Strengths",
    },
    experience: {
      title: "Experience Trail",
      description: "A brief overview of your professional journey.",
      label: "Professional Journey",
      placeholder: "e.g. Spent 2 years in retail management where I mastered inventory logic and customer psychology, then moved to freelance writing...",
    },
    essence: {
      title: "Professional Essence",
      description: "Describe your core abilities and unique perspective.",
      label: "Personal Philosophy",
      placeholder: "What makes you 'you'? Don't just list jobs; tell us about your personal philosophy. Do you believe in radical transparency? Are you obsessed with efficiency?",
    },
    preferences: {
      title: "Work Style & Culture",
      description: "Where and how do you do your best work?",
      styleLabel: "Preferred Professional Setting",
      envLabel: "Pace & Environment",
    },
    mbti: {
      title: "Personality Blueprint",
      description: "Understand your core behavioral preferences.",
      energyLabel: "Energy Source (Where do you get your energy?)",
      energyOptions: { 
        E: "Extroversion (Acting/Interacting)", 
        I: "Introversion (Reflecting/Solitude)" 
      },
      infoLabel: "Information Processing (How do you perceive?)",
      infoOptions: { 
        S: "Sensing (Facts/Details)", 
        N: "Intuition (Patterns/Possibilities)" 
      },
      decisionsLabel: "Decision Making (How do you decide?)",
      decisionsOptions: { 
        T: "Thinking (Logic/Objective)", 
        F: "Feeling (Values/Subjective)" 
      },
      lifestyleLabel: "Life Organization (How do you live?)",
      lifestyleOptions: { 
        J: "Judging (Structure/Plans)", 
        P: "Perceiving (Flexibility/Spontaneity)" 
      },
    },
    results: {
      title: (name) => `Career Strategic Analysis: ${name}`,
      description: (name) => `Connecting your specific profile to high-trajectory opportunities in the Pakistani market.`,
      activeProfile: "Active Profile",
      essence: "Essence",
      velocity: "Career Match Velocity",
      found: "Optimized Path Found",
      matchLogic: "Match Logic",
      job: "Job",
      discoveryTitle: "Strategic Career Matches",
      personalityTitle: "Personality Analysis",
      hobbiesTitle: "New Hobbies to Explore",
      newSkillsTitle: "Skills for Growth",
      matchLabel: "Strategic Match",
      scopeLabel: "Market Outlook",
      salaryLabel: "Est. Monthly Salary (PKR)",
      contextLabel: "Pakistani Market Info",
      traitsIdentified: "Traits You Identified",
      psychologicalBlueprint: "These indicators are significant markers of your psychological blueprint. We use these to bypass social expectation and target your genuine nature.",
      footerTagline: "Connect Passion to Profession",
    },
    genders: { 'Male': 'Male', 'Female': 'Female', 'Non-binary': 'Non-binary', 'Prefer not to say': 'Prefer not to say' },
    ages: { 'Under 18': 'Under 18', '18-24': '18-24', '25-34': '25-34', '35-44': '35-44', '45-54': '45-54', '55+': '55+' },
    educations: {
      'High School': 'High School',
      'Associate Degree': 'Associate Degree',
      'Bachelor\'s Degree': 'Bachelor\'s Degree',
      'Master\'s Degree': 'Master\'s Degree',
      'PhD / Doctorate': 'PhD / Doctorate',
      'Self-taught / Other': 'Self-taught / Other'
    }
  },
  ur: {
    title: "سمت AI",
    subtitle: "کیریئر گائیڈنس انجن",
    startOver: "نیا تجزیہ",
    back: "پیچھے",
    continue: "جاری رکھیں",
    discover: "میرا تجزیہ کریں",
    loading: "آپ کا مستقبل ڈیزائن کیا جا رہا ہے...",
    stepCount: (current, total) => `مرحلہ ${current} از ${total}`,
    personal: {
      title: "آئیے شروع کریں",
      description: "سب سے پہلے، ہم آپ کو کس نام سے پکاریں؟",
      nameLabel: "آپ کا نام",
      namePlaceholder: "آپ کا نام کیا ہے؟",
    },
    demographics: {
      title: "آپ کے بارے میں کچھ معلومات",
      description: "یہ ہمیں آپ کے کیریئر کے راستے کو سمجھنے میں مدد دیتا ہے۔",
      genderLabel: "جنس",
      ageLabel: "عمر کا گروپ",
    },
    education: {
      title: "تعلیمی پس منظر",
      description: "ہمیں اپنی تعلیمی بنیاد کے بارے میں بتائیں۔",
      eduLabel: "اعلیٰ ترین تعلیم",
      fieldLabel: "تعلیمی شعبہ / میجر",
      fieldPlaceholder: "مثلاً انجینئرنگ، کمپیوٹر سائنس، کامرس...",
    },
    interests: {
      title: "صنعت اور رجحانات",
      description: "وہ شعبے منتخب کریں جو آپ کو متاثر کرتے ہیں اور وہ خوبیاں جو آپ کی فطرت کو بیان کرتی ہیں۔",
      label: "شعبے اور طرز عمل",
      placeholder: "مثلاً ٹیکنالوجی، ہمدردی، منطق...",
      suggested: "تجویز کردہ شعبے",
    },
    skills: {
      title: "بنیادی صلاحیتیں",
      description: "آپ اپنے ساتھ کون سی طاقتیں یا پیشہ ورانہ صلاحیتیں لاتے ہیں؟",
      label: "پیشہ ورانہ مہارتیں",
      placeholder: "مثلاً قیادت، تجزیاتی سوچ...",
      suggested: "نمایاں طاقتیں",
    },
    experience: {
      title: "تجربے کی تفصیلات",
      description: "آپ کے پیشہ ورانہ سفر کا ایک مختصر جائزہ۔",
      label: "پیشہ ورانہ سفر",
      placeholder: "مثلاً میں نے 2 سال ریٹیل مینجمنٹ میں گزارے جہاں میں نے انوینٹری لاجک اور کسٹمر سائیکالوجی میں مہارت حاصل کی...",
    },
    essence: {
      title: "پیشہ ورانہ جوہر",
      description: "اپنی بنیادی صلاحیتوں اور منفرد نقطہ نظر کو بیان کریں۔",
      label: "ذاتی فلسفہ",
      placeholder: "کون سی بات آپ کو دوسروں سے الگ کرتی ہے؟ صرف ملازمتوں کی فہرست نہ دیں؛ اپنی ذاتی فلسفے کے بارے میں بتائیں۔ کیا آپ شفافیت پر یقین رکھتے ہیں؟ یا آپ کارکردگی کے جنون میں مبتلا ہیں؟",
    },
    preferences: {
      title: "کام کا انداز اور ماحول",
      description: "آپ کہاں اور کیسے سب سے اچھا کام کرتے ہیں؟",
      styleLabel: "ترجیحی پیشہ ورانہ ترتیب",
      envLabel: "رفتار اور ماحول",
    },
    mbti: {
      title: "شخصیت کا خاکہ",
      description: "اپنے طرزِ عمل کی بنیادی ترجیحات کو سمجھیں۔",
      energyLabel: "توانائی کا ذریعہ (آپ توانائی کہاں سے حاصل کرتے ہیں؟)",
      energyOptions: { 
        E: "ایکسٹروورژن (عمل اور میل جول)", 
        I: "انٹروورژن (غور و فکر اور تنہائی)" 
      },
      infoLabel: "معلومات کی جانچ (آپ کیسے ادراک کرتے ہیں؟)",
      infoOptions: { 
        S: "سینسنگ (حقائق اور تفصیلات)", 
        N: "انٹویشن (پیٹرن اور امکانات)" 
      },
      decisionsLabel: "فیصلہ سازی (آپ فیصلے کیسے کرتے ہیں؟)",
      decisionsOptions: { 
        T: "تھنکنگ (منطق اور معروضیت)", 
        F: "فیلنگ (اقدار اور موضوعیت)" 
      },
      lifestyleLabel: "تنظیمِ زندگی (آپ کیسے رہتے ہیں؟)",
      lifestyleOptions: { 
        J: "ججنگ (ڈھانچہ اور منصوبے)", 
        P: "پرسیونگ (لچک اور بے ساختگی)" 
      },
    },
    results: {
      title: (name) => `کیریئر کا اسٹریٹجک تجزیہ: ${name}`,
      description: (name) => `آپ کے پروفائل کو پاکستانی مارکیٹ کے بہترین مواقع سے جوڑنا۔`,
      activeProfile: "فعال پروفائل",
      essence: "جوہر",
      velocity: "کیریئر کی رفتار",
      found: "بہترین راستہ مل گیا",
      matchLogic: "میچ لاجک",
      job: "ملازمت",
      discoveryTitle: "اسٹریٹجک کیریئر میچز",
      personalityTitle: "شخصیت کا تجزیہ",
      hobbiesTitle: "نئے مشاغل",
      newSkillsTitle: "ترقی کے لیے مہارتیں",
      matchLabel: "اسٹریٹجک میچ",
      scopeLabel: "مارکیٹ آؤٹ لک",
      salaryLabel: "تخمینہ ماہانہ تنخواہ (PKR)",
      contextLabel: "مقامی معلومات",
      traitsIdentified: "آپ کی منتخب کردہ خصوصیات",
      psychologicalBlueprint: "یہ اشارے آپ کے نفسیاتی خاکے کے اہم نشانات ہیں۔ ہم ان کا استعمال سماجی توقعات کو نظر انداز کرنے اور آپ کی حقیقی فطرت کو تلاش کرنے کے لیے کرتے ہیں۔",
      footerTagline: "شوق کو پیشے سے جوڑیں",
    },
    genders: { 'Male': 'مرد', 'Female': 'خواتین', 'Non-binary': 'غیر بائنری', 'Prefer not to say': 'بتا نا پسند نہیں' },
    ages: { 'Under 18': '18 سے کم', '18-24': '18-24', '25-34': '25-34', '35-44': '35-44', '45-54': '45-54', '55+': '55+' },
    educations: {
      'High School': 'ہائیر سیکنڈری',
      'Associate Degree': 'ایسوسی ایٹ ڈگری',
      'Bachelor\'s Degree': 'بیچلرز ڈگری',
      'Master\'s Degree': 'ماسٹرز ڈگری',
      'PhD / Doctorate': 'پی ایچ ڈی / ڈاکٹریٹ',
      'Self-taught / Other': 'خود ساختہ / دیگر'
    }
  }
};
