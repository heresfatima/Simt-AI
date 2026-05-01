export interface Interest {
  id: string;
  en: string;
  ur: string;
}

export const COMMON_INTERESTS: Interest[] = [
  // Industrial / Field Focus
  { id: 'tech', en: 'Technology & Digital Systems', ur: 'ٹیکنالوجی اور ڈیجیٹل سسٹم' },
  { id: 'creative', en: 'Arts, Design & Media', ur: 'فنون، ڈیزائن اور میڈیا' },
  { id: 'business', en: 'Business, Finance & Trade', ur: 'کاروبار، مالیات اور تجارت' },
  { id: 'science', en: 'Scientific Research & Engineering', ur: 'سائنسی تحقیق اور انجینئرنگ' },
  { id: 'health', en: 'Health, Medicine & Wellness', ur: 'صحت، طب اور تندرستی' },
  { id: 'social-impact', en: 'Social Work & Community Service', ur: 'سماجی بہبود اور خدمتِ خلق' },
  { id: 'education', en: 'Teaching & Knowledge Sharing', ur: 'تعلیم اور علم کا فروغ' },
  { id: 'env', en: 'Environment & Sustainability', ur: 'ماحول اور استحکام' },
  { id: 'law', en: 'Law & Legal Systems', ur: 'عدالتی اور قانونی نظام' },
  { id: 'agri', en: 'Agriculture & Food Security', ur: 'زراعت اور خوراک کی حفاظت' },
  { id: 'policy', en: 'Public Policy & Governance', ur: 'عوامی پالیسی اور حکمرانی' },
  { id: 'fashion', en: 'Luxury, Fashion & Lifestyle', ur: 'لگژری، فیشن اور طرزِ زندگی' },
  { id: 'space', en: 'Space, Astronomy & Logistics', ur: 'خلا، فلکیات اور لاجسٹکس' },
  { id: 'security', en: 'Security & Defense', ur: 'سیکورٹی اور دفاع' },
  { id: 'sports', en: 'Sports & Athletics', ur: 'کھیل اور ایتھلیٹکس' },
  { id: 'realestate', en: 'Construction & Real Estate', ur: 'تعمیرات اور رئیل اسٹیٹ' },
  { id: 'media', en: 'Journalism & Content Production', ur: 'صحافت اور مواد کی تیاری' },
  { id: 'energy', en: 'Renewable Energy & Power', ur: 'قابلِ تجدید توانائی اور بجلی' },
  { id: 'tourism', en: 'Hospitality & Tourism', ur: 'سیاحت اور مہمان نوازی' },
  { id: 'manufacturing', en: 'Industrial Manufacturing', ur: 'صنعتی مینوفیکچرنگ' },
  
  // Behavioral / Personality Focus
  { id: 'problem-solver', en: 'Deciphering Complex Puzzles', ur: 'پیچیدہ گتھیوں کو سلجھانا' },
  { id: 'empathy', en: 'Understanding Human Emotions', ur: 'انسانی جذبات کو سمجھنا' },
  { id: 'structure', en: 'Organizing Chaos into Order', ur: 'بے ترتیبی کو ترتیب دینا' },
  { id: 'strategy', en: 'Visionary Long-term Planning', ur: 'طویل مدتی منصوبہ بندی' },
  { id: 'micro', en: 'Focusing on Tiny Details', ur: 'چھوٹی تفصیلات پر توجہ' },
  { id: 'exploration', en: 'Seeking New Horizons', ur: 'نئے افق کی تلاش' },
  { id: 'justice', en: 'Advocating for Fairness', ur: 'انصاف کی وکالت' },
  { id: 'solitude', en: 'Solitary Deep Work', ur: 'تنہائی میں گہرا کام' },
  { id: 'high-stakes', en: 'High-Stakes Decision Making', ur: 'ہائی اسٹیک فیصلہ سازی' },
  { id: 'harmony', en: 'Harmonizing Diverse Teams', ur: 'ٹیموں میں ہم آہنگی' },
  { id: 'risk', en: 'Calculated Risk Taking', ur: 'حساب شدہ خطرہ مول لینا' },
  { id: 'data', en: 'Data-Driven Insights', ur: 'ڈیٹا پر مبنی بصیرت' },
];

export const COMMON_SKILLS: Interest[] = [
  { id: 'leadership', en: 'Strategic Leadership', ur: 'حکمتِ عملی کی قیادت' },
  { id: 'analytical', en: 'Critical Analytical Thinking', ur: 'تنقیدی اور تجزیاتی سوچ' },
  { id: 'creative-writing', en: 'Persuasive Communication', ur: 'قائل کرنے والا مواصلات' },
  { id: 'tech-savvy', en: 'Rapid Software Adoption', ur: 'سافٹ ویئر کو تیزی سے اپنانا' },
  { id: 'collaborative', en: 'Thrives in Group Dynamics', ur: 'گروپ میں بہتر کام کرنا' },
  { id: 'disciplined', en: 'Self-Motivated & Disciplined', ur: 'خود نظم و ضبط' },
  { id: 'curiosity', en: 'Innate Intellectual Curiosity', ur: 'علمی تجسس' },
  { id: 'emotional-intel', en: 'High Emotional Intelligence', ur: 'جذباتی ذہانت' },
  { id: 'negotiation', en: 'Persuasive Negotiation', ur: 'پرکشش گفت و شنید' },
  { id: 'technical-prob', en: 'Technical Problem Solving', ur: 'تکنیکی مسائل کا حل' },
  { id: 'methodical', en: 'Methodical Execution', ur: 'طریقہ کار سے عمل درآمد' },
  { id: 'public-speaking', en: 'Public Speaking & Presence', ur: 'عوامی خطابت' },
  { id: 'rapid-learning', en: 'Rapid New Concept Learning', ur: 'تیزی سے سیکھنا' },
  { id: 'resilience', en: 'Stress Resilience', ur: 'ذہنی دباؤ کا مقابلہ' },
  { id: 'design-thinking', en: 'User-Centric Design Thinking', ur: 'صارف پر مبنی ڈیزائن کی سوچ' },
  { id: 'financial-lit', en: 'Financial Literacy', ur: 'مالیاتی خواندگی' },
];

export const WORK_STYLE_OPTIONS: Interest[] = [
  { id: 'remote', en: 'Remote / Work from Home', ur: 'ریموٹ / گھر سے کام' },
  { id: 'office', en: 'Co-working / Lively Office', ur: 'دفتر / متحرک ماحول' },
  { id: 'hybrid', en: 'Hybrid / Flexible Balance', ur: 'ہائبرڈ / لچکدار توازن' },
  { id: 'startup', en: 'High-Growth Startup', ur: 'تیزی سے ابھرتا ہوا اسٹارٹ اپ' },
  { id: 'corporate', en: 'Stable Corporate Structure', ur: 'مستحکم کارپوریٹ ڈھانچہ' },
  { id: 'freelance', en: 'Independent Freelancing', ur: 'آزاد فری لانسنگ' },
];

export const ENVIRONMENT_OPTIONS: Interest[] = [
  { id: 'fast', en: 'Rapid & Changing', ur: 'تیز رفتار اور بدلتا ہوا' },
  { id: 'calm', en: 'Steady & Predictable', ur: 'پرسکون اور مستحکم' },
  { id: 'competitive', en: 'Competitive & Performance Driven', ur: 'مسابقتی اور کارکردگی پر مبنی' },
  { id: 'collaborative', en: 'Supportive & Collaborative', ur: 'تعاون پر مبنی' },
];
