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
    placeholder: string;
    suggested: string;
  };
  skills: {
    title: string;
    description: string;
    placeholder: string;
    suggested: string;
  };
  experience: {
    title: string;
    description: string;
    placeholder: string;
  };
  essence: {
    title: string;
    description: string;
    placeholder: string;
  };
  preferences: {
    title: string;
    description: string;
    styleLabel: string;
    envLabel: string;
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
    scopeLabel: string;
    salaryLabel: string;
    contextLabel: string;
  };
  genders: { [key: string]: string };
  ages: { [key: string]: string };
  educations: { [key: string]: string };
}

export const translations: Record<Language, Translation> = {
  en: {
    title: "Simt AI",
    subtitle: "Career Pulse Engine",
    startOver: "New Analysis",
    back: "Back",
    continue: "Continue",
    discover: "Analyze My Pulse",
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
      placeholder: "e.g. Technology, empathy, logic...",
      suggested: "Fields & Tendencies",
    },
    skills: {
      title: "Core Competencies",
      description: "What strengths or professional abilities do you bring to the table?",
      placeholder: "e.g. Leadership, analytical thinking...",
      suggested: "Top Strengths",
    },
    experience: {
      title: "Experience Trail",
      description: "A brief overview of your professional journey.",
      placeholder: "e.g. Spent 2 years in retail management where I mastered inventory logic and customer psychology, then moved to freelance writing...",
    },
    essence: {
      title: "Professional Essence",
      description: "Describe your core abilities and unique perspective.",
      placeholder: "What makes you 'you'? Don't just list jobs; tell us about your personal philosophy. Do you believe in radical transparency? Are you obsessed with efficiency?",
    },
    preferences: {
      title: "Work Style & Culture",
      description: "Where and how do you do your best work?",
      styleLabel: "Preferred Professional Setting",
      envLabel: "Pace & Environment",
    },
    results: {
      title: (name) => `Pulse Analysis: ${name}`,
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
      scopeLabel: "Market Outlook",
      salaryLabel: "Est. Monthly Salary (PKR)",
      contextLabel: "Pakistani Market Info"
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
      placeholder: "مثلاً ٹیکنالوجی، ہمدردی، منطق...",
      suggested: "شعبے اور رجحانات",
    },
    skills: {
      title: "بنیادی صلاحیتیں",
      description: "آپ اپنے ساتھ کون سی طاقتیں یا پیشہ ورانہ صلاحیتیں لاتے ہیں؟",
      placeholder: "مثلاً قیادت، تجزیاتی سوچ...",
      suggested: "نمایاں طاقتیں",
    },
    experience: {
      title: "تجربے کی تفصیلات",
      description: "آپ کے پیشہ ورانہ سفر کا ایک مختصر جائزہ۔",
      placeholder: "مثلاً میں نے 2 سال ریٹیل مینجمنٹ میں گزارے جہاں میں نے انوینٹری لاجک اور کسٹمر سائیکالوجی میں مہارت حاصل کی...",
    },
    essence: {
      title: "پیشہ ورانہ جوہر",
      description: "اپنی بنیادی صلاحیتوں اور منفرد نقطہ نظر کو بیان کریں۔",
      placeholder: "کون سی بات آپ کو دوسروں سے الگ کرتی ہے؟ صرف ملازمتوں کی فہرست نہ دیں؛ اپنی ذاتی فلسفے کے بارے میں بتائیں۔ کیا آپ شفافیت پر یقین رکھتے ہیں؟ یا آپ کارکردگی کے جنون میں مبتلا ہیں؟",
    },
    preferences: {
      title: "کام کا انداز اور ماحول",
      description: "آپ کہاں اور کیسے سب سے اچھا کام کرتے ہیں؟",
      styleLabel: "ترجیحی پیشہ ورانہ ترتیب",
      envLabel: "رفتار اور ماحول",
    },
    results: {
      title: (name) => `تجزیہ: ${name}`,
      description: (name) => `پروفائل کو پاکستانی مارکیٹ کے اعلیٰ مواقع سے جوڑنا۔`,
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
      scopeLabel: "مارکیٹ آؤٹ لک",
      salaryLabel: "تخمینہ ماہانہ تنخواہ (PKR)",
      contextLabel: "مقامی معلومات"
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
