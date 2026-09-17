/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Rocket, GraduationCap, MapPin, Brain, Languages, Lightbulb, Compass, Sparkles, ChevronRight, ChevronLeft, Globe, Briefcase, User, Info, ArrowRight, RotateCcw, Search, Loader2, Heart, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Step, UserProfile, GeminiRecommendationResponse } from './types';
import { getRecommendations } from './services/geminiService';
import { Language, translations } from './translations';
import { COMMON_INTERESTS, COMMON_SKILLS, WORK_STYLE_OPTIONS, ENVIRONMENT_OPTIONS } from './data';
import TagInput from './components/TagInput';
import FeedbackWidget from './components/FeedbackWidget';

const GENDER_OPTIONS = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];
const AGE_OPTIONS = ['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'];
const EDUCATION_OPTIONS = [
  'High School',
  'Associate Degree',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'PhD / Doctorate',
  'Self-taught / Other'
];

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [step, setStep] = useState<Step>(Step.PERSONAL);
  const t = translations[lang];

  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    gender: '',
    age: '',
    education: '',
    studyField: '',
    mbtiPrefs: {
      energy: '',
      info: '',
      decisions: '',
      lifestyle: '',
    },
    workStyle: [],
    environment: '',
    interests: [],
    skills: [],
    experience: '',
    essence: '',
  });
  const [result, setResult] = useState<GeminiRecommendationResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const stepsOrder = [
    Step.PERSONAL, 
    Step.DEMOGRAPHICS, 
    Step.EDUCATION, 
    Step.MBTI,
    Step.PREFERENCES,
    Step.INTERESTS, 
    Step.SKILLS, 
    Step.EXPERIENCE, 
    Step.ESSENCE
  ];

  const nextStep = () => {
    const currentIndex = stepsOrder.indexOf(step);
    if (currentIndex < stepsOrder.length - 1) {
      setStep(stepsOrder[currentIndex + 1]);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    const currentIndex = stepsOrder.indexOf(step);
    if (currentIndex > 0) {
      setStep(stepsOrder[currentIndex - 1]);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setStep(Step.RESULTS);
    const data = await getRecommendations(profile, lang);
    setResult(data);
    setLoading(false);
  };

  const reset = () => {
    setStep(Step.PERSONAL);
    setProfile({
      name: '',
      gender: '',
      age: '',
      education: '',
      studyField: '',
      mbtiPrefs: {
        energy: '',
        info: '',
        decisions: '',
        lifestyle: '',
      },
      workStyle: [],
      environment: '',
      interests: [],
      skills: [],
      experience: '',
      essence: '',
    });
    setResult(null);
  };

  const togglePick = (field: 'skills' | 'interests', value: string) => {
    setProfile(prev => {
      const current = prev[field];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(v => v !== value) };
      }
      return { ...prev, [field]: [...current, value] };
    });
  };

  const currentStepInfo = {
    [Step.PERSONAL]: {
      title: t.personal.title,
      description: t.personal.description,
      icon: <Search className="text-indigo-600" size={32} />,
    },
    [Step.DEMOGRAPHICS]: {
      title: t.demographics.title,
      description: t.demographics.description,
      icon: <Brain className="text-blue-500" size={32} />,
    },
    [Step.EDUCATION]: {
      title: t.education.title,
      description: t.education.description,
      icon: <GraduationCap className="text-emerald-500" size={32} />,
    },
    [Step.MBTI]: {
      title: t.mbti.title,
      description: t.mbti.description,
      icon: <Brain className="text-pink-500" size={32} />,
    },
    [Step.PREFERENCES]: {
      title: t.preferences.title,
      description: t.preferences.description,
      icon: <Languages className="text-cyan-500" size={32} />,
    },
    [Step.INTERESTS]: {
      title: t.interests.title,
      description: t.interests.description,
      icon: <Heart className="text-rose-500" size={32} />,
    },
    [Step.SKILLS]: {
      title: t.skills.title,
      description: t.skills.description,
      icon: <Trophy className="text-amber-500" size={32} />,
    },
    [Step.EXPERIENCE]: {
      title: t.experience.title,
      description: t.experience.description,
      icon: <Briefcase className="text-purple-500" size={32} />,
    },
    [Step.ESSENCE]: {
      title: t.essence.title,
      description: t.essence.description,
      icon: <Sparkles className="text-yellow-600" size={32} />,
    },
    [Step.RESULTS]: {
      title: t.results.title(profile.name),
      description: t.results.description(profile.name),
      icon: <Sparkles className="text-indigo-500" size={32} />,
    }
  };

  const canContinue = () => {
    switch (step) {
      case Step.PERSONAL: return !!profile.name.trim();
      case Step.DEMOGRAPHICS: return !!profile.gender && !!profile.age;
      case Step.EDUCATION: return !!profile.education && !!profile.studyField.trim();
      case Step.MBTI: return !!profile.mbtiPrefs.energy && !!profile.mbtiPrefs.info && !!profile.mbtiPrefs.decisions && !!profile.mbtiPrefs.lifestyle;
      case Step.PREFERENCES: return profile.workStyle.length > 0 && !!profile.environment;
      case Step.INTERESTS: return profile.interests.length > 0;
      case Step.SKILLS: return profile.skills.length > 0;
      case Step.EXPERIENCE: return !!profile.experience.trim();
      case Step.ESSENCE: return !!profile.essence.trim();
      default: return true;
    }
  };


  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-6 md:p-12 overflow-x-hidden" dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-500/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-500/5 blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl flex justify-between items-center z-10 mb-12">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={reset}>
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 transition-transform group-hover:scale-105 active:scale-95">
            <Search size={22} />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">{t.title}</h1>
            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest leading-none">{t.subtitle}</p>
          </div>
        </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-1.5 mr-4">
               {stepsOrder.map((s, i) => (
                 <div 
                   key={s} 
                   className={`w-8 h-1.5 rounded-full transition-all duration-500 ${
                     stepsOrder.indexOf(step) >= i 
                     ? 'bg-indigo-600' 
                     : 'bg-slate-200'
                   }`}
                 />
               ))}
            </div>
          <div className="flex bg-white rounded-xl p-1 shadow-sm border border-slate-200">
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${lang === 'en' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('ur')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${lang === 'ur' ? 'bg-indigo-600 text-white shadow-sm font-sans' : 'text-slate-400 hover:text-slate-600'}`}
            >
              اردو
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-1 w-full max-w-7xl flex-grow flex flex-col items-center">
        <AnimatePresence mode="wait">
          {step === Step.RESULTS ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="w-full flex flex-col gap-8"
            >
              <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 py-8 border-b border-slate-200">
                  <div className="text-center md:text-left">
                    <h2 className="text-5xl font-black text-slate-900 mb-2 markdown-content">
                      <ReactMarkdown>{t.results.title(profile.name)}</ReactMarkdown>
                    </h2>
                    <div className="text-slate-500 max-w-xl text-lg font-medium italic markdown-content">
                      <ReactMarkdown>{t.results.description(profile.name)}</ReactMarkdown>
                    </div>
                  </div>
                <button 
                  onClick={reset}
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-800 font-bold uppercase tracking-wider rounded-2xl flex items-center gap-3 hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                >
                  <RotateCcw size={18} />
                  {t.startOver}
                </button>
              </div>
              {loading || !result ? (
                <div className="flex flex-col items-center justify-center py-32 gap-6">
                  <div className="relative">
                    <Loader2 className="animate-spin text-indigo-600" size={64} />
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-400" size={24} />
                  </div>
                  <p className="font-sans font-bold text-slate-400 uppercase tracking-widest animate-pulse">{t.loading}</p>
                </div>
              ) : (
                <div className="flex flex-col gap-10 pb-24">
                  {/* Career Matches Announcement */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {result.careerPaths.map((path, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-8 shadow-xl flex flex-col border border-slate-800"
                      >
                        <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-20">
                          <Rocket size={40} className="text-indigo-400" />
                        </div>
                        <div className="relative z-10 flex-grow">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-6 border border-white/5">
                            <Trophy size={12} />
                            {path.matchPercentage}% {t.results.matchLabel}
                          </div>
                          <h3 className="text-3xl font-bold mb-4 leading-tight text-white markdown-content">
                            <ReactMarkdown>{path.title}</ReactMarkdown>
                          </h3>
                          <div className="text-slate-400 text-sm leading-relaxed italic mb-6 font-medium markdown-content">
                            <ReactMarkdown>{"\"" + path.description + "\""}</ReactMarkdown>
                          </div>
                          
                          <div className="space-y-5 pt-5 border-t border-white/10">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-1.5">{t.results.scopeLabel}</p>
                              <div className="text-sm font-bold text-white markdown-content">
                                <ReactMarkdown>{path.scope}</ReactMarkdown>
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1.5">{t.results.salaryLabel}</p>
                              <div className="text-base font-bold text-emerald-400 markdown-content">
                                <ReactMarkdown>{path.salaryRange}</ReactMarkdown>
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1.5">{t.results.contextLabel}</p>
                              <div className="text-xs text-slate-300 leading-relaxed font-bold markdown-content">
                                <ReactMarkdown>{path.marketContext}</ReactMarkdown>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Deep Dive Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Choice Analysis */}
                    <div className="bento-card border-slate-200 p-10 flex flex-col">
                      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <Heart size={24} className="text-rose-500" />
                        {t.results.activeProfile}
                      </h3>
                      <div className="space-y-6 flex-grow">
                        <div>
                          <p className={`text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ${lang === 'ur' ? 'text-right' : ''}`}>{t.results.traitsIdentified}</p>
                          <div className={`flex flex-wrap gap-2 ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
                             {[...profile.interests, ...profile.skills].map(tag => (
                               <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-bold">{tag}</span>
                             ))}
                          </div>
                        </div>
                        <div className={`text-sm text-slate-500 leading-relaxed italic border-slate-200 py-1 markdown-content ${lang === 'ur' ? 'border-r-2 pr-4 text-right' : 'border-l-2 pl-4'}`}>
                          <ReactMarkdown>{"\"" + t.results.psychologicalBlueprint + "\""}</ReactMarkdown>
                        </div>
                      </div>
                    </div>

                    {/* Personality Note */}
                    <div className="bento-card bg-indigo-50 border-indigo-100 p-10 h-full flex flex-col">
                      <h3 className={`text-2xl font-black text-indigo-900 mb-6 flex items-center gap-3 ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
                        <Sparkles size={28} className="text-indigo-600" />
                        {t.results.personalityTitle}
                      </h3>
                      <div className={`text-lg text-indigo-800 leading-relaxed font-medium markdown-content ${lang === 'ur' ? 'text-right' : ''}`}>
                         <ReactMarkdown>{result.personalityNote}</ReactMarkdown>
                      </div>
                    </div>

                    {/* Growth & Hobbies */}
                    <div className="bento-card border-slate-200 p-10 h-full flex flex-col">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                          <Rocket size={24} className="text-emerald-500" />
                          {t.results.newSkillsTitle}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {result.growthAdvice.newSkills.map(s => (
                            <span key={s} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100">{s}</span>
                          ))}
                        </div>
                      </div>
                                            <div className="mt-auto">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                          <Heart size={24} className="text-rose-500" />
                          {t.results.hobbiesTitle}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {result.growthAdvice.hobbies.map(h => (
                            <span key={h} className="px-3 py-1.5 bg-rose-50 text-rose-700 text-xs font-bold rounded-lg border border-rose-100">{h}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <FeedbackWidget 
                    lang={lang} 
                    userName={profile.name} 
                    topMatch={result.careerPaths[0]?.title || ''} 
                  />
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full flex justify-center"
            >
              <div className="w-full max-w-2xl bento-card p-10 md:p-12 shadow-xl shadow-slate-200/50">
                <div className="flex items-center gap-6 mb-6">
                  <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 text-indigo-600 shadow-inner">
                    {currentStepInfo[step].icon}
                  </div>
                  <div className={lang === 'ur' ? 'text-right' : 'text-left'}>
                    <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-1 markdown-content">
                      <ReactMarkdown>{currentStepInfo[step].title}</ReactMarkdown>
                    </h2>
                    <div className={`text-slate-500 font-medium markdown-content ${lang === 'ur' ? 'text-lg' : 'text-sm'}`}>
                      <ReactMarkdown>{currentStepInfo[step].description}</ReactMarkdown>
                    </div>
                  </div>
                </div>

                <div 
                  className="mb-6 space-y-6"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && canContinue()) {
                      e.preventDefault();
                      nextStep();
                    }
                  }}
                >
                  {step === Step.PERSONAL && (
                    <div className="space-y-6">
                      <div className="flex flex-col gap-2">
                        <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.personal.nameLabel}</label>
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                          placeholder={t.personal.namePlaceholder}
                          className={`w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium transition-all ${lang === 'ur' ? 'text-right' : 'text-left'}`}
                        />
                      </div>
                    </div>
                  )}

                  {step === Step.DEMOGRAPHICS && (
                    <div className="space-y-8">
                       <div className="flex flex-col gap-4">
                        <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.demographics.genderLabel}</label>
                        <div className="grid grid-cols-2 gap-3">
                          {GENDER_OPTIONS.map(opt => (
                            <button
                              key={opt}
                              onClick={() => setProfile({...profile, gender: opt})}
                              className={`px-4 py-4 rounded-2xl border font-bold text-sm transition-all ${
                                profile.gender === opt 
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100' 
                                : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-400'
                              }`}
                            >
                              {t.genders[opt] || opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.demographics.ageLabel}</label>
                        <div className="grid grid-cols-3 gap-3">
                          {AGE_OPTIONS.map(opt => (
                            <button
                              key={opt}
                              onClick={() => setProfile({...profile, age: opt})}
                              className={`px-4 py-4 rounded-2xl border font-bold text-sm transition-all ${
                                profile.age === opt 
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100' 
                                : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-400'
                              }`}
                            >
                              {t.ages[opt] || opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === Step.EDUCATION && (
                    <div className="space-y-8">
                      <div className="flex flex-col gap-4">
                        <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.education.eduLabel}</label>
                        <div className="grid grid-cols-1 gap-3">
                          {EDUCATION_OPTIONS.map(opt => (
                            <button
                              key={opt}
                              onClick={() => setProfile({...profile, education: opt})}
                              className={`px-6 py-4 rounded-2xl border font-bold text-sm text-left flex items-center justify-between transition-all ${lang === 'ur' ? 'flex-row-reverse text-right' : ''} ${
                                profile.education === opt 
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100' 
                                : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-400'
                              }`}
                            >
                              {t.educations[opt] || opt}
                              {profile.education === opt && <Trophy size={16} />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.education.fieldLabel}</label>
                        <input
                          type="text"
                          value={profile.studyField}
                          onChange={(e) => setProfile({...profile, studyField: e.target.value})}
                          placeholder={t.education.fieldPlaceholder}
                          className={`w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium transition-all ${lang === 'ur' ? 'text-right' : 'text-left'}`}
                        />
                      </div>
                    </div>
                  )}

                  {step === Step.MBTI && (
                    <div className="space-y-6">
                      {[
                        { key: 'energy', label: t.mbti.energyLabel, options: t.mbti.energyOptions },
                        { key: 'info', label: t.mbti.infoLabel, options: t.mbti.infoOptions },
                        { key: 'decisions', label: t.mbti.decisionsLabel, options: t.mbti.decisionsOptions },
                        { key: 'lifestyle', label: t.mbti.lifestyleLabel, options: t.mbti.lifestyleOptions },
                      ].map(category => (
                        <div key={category.key} className="flex flex-col gap-3">
                          <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{category.label}</label>
                          <div className="grid grid-cols-2 gap-2">
                            {Object.entries(category.options).map(([code, label]) => (
                              <button
                                key={code}
                                onClick={() => setProfile({
                                  ...profile, 
                                  mbtiPrefs: { ...profile.mbtiPrefs, [category.key]: code }
                                })}
                                className={`px-4 py-3 rounded-xl border text-xs font-bold transition-all ${
                                  profile.mbtiPrefs[category.key as keyof typeof profile.mbtiPrefs] === code 
                                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' 
                                  : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-400'
                                }`}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {step === Step.PREFERENCES && (
                    <div className="space-y-8">
                       <div className="flex flex-col gap-4">
                        <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.preferences.styleLabel}</label>
                        <div className="grid grid-cols-2 gap-3">
                          {WORK_STYLE_OPTIONS.map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                const exists = profile.workStyle.includes(opt.en);
                                if (exists) {
                                  setProfile({...profile, workStyle: profile.workStyle.filter(s => s !== opt.en)});
                                } else {
                                  setProfile({...profile, workStyle: [...profile.workStyle, opt.en]});
                                }
                              }}
                              className={`px-4 py-4 rounded-2xl border font-bold text-xs transition-all ${
                                profile.workStyle.includes(opt.en) 
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100' 
                                : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-400'
                              }`}
                            >
                              {opt[lang]}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.preferences.envLabel}</label>
                        <div className="grid grid-cols-2 gap-3">
                          {ENVIRONMENT_OPTIONS.map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => setProfile({...profile, environment: opt.en})}
                              className={`px-4 py-4 rounded-2xl border font-bold text-xs transition-all ${
                                profile.environment === opt.en 
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100' 
                                : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-400'
                              }`}
                            >
                              {opt[lang]}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === Step.INTERESTS && (
                    <div className="space-y-6">
                       <div className="flex flex-col gap-2">
                        <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.interests.label}</label>
                        <TagInput 
                          tags={profile.interests} 
                          setTags={(tags) => setProfile({...profile, interests: tags})} 
                          placeholder={t.interests.placeholder} 
                        />
                       </div>
                        <div className="flex flex-wrap gap-2 pt-4">
                          <p className={`w-full text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 mb-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.interests.suggested}</p>
                          <div className={`flex flex-wrap gap-2 ${lang === 'ur' ? 'justify-end' : 'justify-start'}`}>
                            {COMMON_INTERESTS.map(opt => (
                              <button
                                key={opt.id}
                                onClick={() => togglePick('interests', opt.en)}
                                className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                                  profile.interests.includes(opt.en)
                                  ? 'bg-rose-500 border-rose-500 text-white shadow-sm'
                                  : 'bg-white border-slate-200 text-slate-500 hover:bg-rose-50'
                                }`}
                              >
                                {opt[lang]}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  {step === Step.SKILLS && (
                    <div className="space-y-6">
                       <div className="flex flex-col gap-2">
                        <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.skills.label}</label>
                        <TagInput 
                          tags={profile.skills} 
                          setTags={(tags) => setProfile({...profile, skills: tags})} 
                          placeholder={t.skills.placeholder} 
                        />
                       </div>
                      <div className="flex flex-wrap gap-2 pt-4">
                        <p className={`w-full text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 mb-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.skills.suggested}</p>
                        <div className={`flex flex-wrap gap-2 ${lang === 'ur' ? 'justify-end' : ''}`}>
                          {COMMON_SKILLS.map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => togglePick('skills', opt.en)}
                              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                                profile.skills.includes(opt.en)
                                ? 'bg-amber-500 border-amber-500 text-white shadow-sm'
                                : 'bg-white border-slate-200 text-slate-500 hover:bg-amber-50'
                              }`}
                            >
                              {opt[lang]}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === Step.EXPERIENCE && (
                    <div className="flex flex-col gap-4">
                      <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.experience.label}</label>
                       <textarea
                        value={profile.experience}
                        onChange={(e) => setProfile({...profile, experience: e.target.value})}
                        placeholder={t.experience.placeholder}
                        className={`w-full h-56 px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium resize-none transition-all ${lang === 'ur' ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                  )}

                  {step === Step.ESSENCE && (
                    <div className="flex flex-col gap-4">
                      <label className={`text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-2 ${lang === 'ur' ? 'text-right' : 'text-left'}`}>{t.essence.label}</label>
                       <textarea
                        value={profile.essence}
                        onChange={(e) => setProfile({...profile, essence: e.target.value})}
                        placeholder={t.essence.placeholder}
                        className={`w-full h-56 px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium resize-none transition-all ${lang === 'ur' ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                  )}
                </div>

                <div className={`flex justify-between items-center pt-6 border-t border-slate-100 ${lang === 'ur' ? 'flex-row-reverse' : ''}`}>
                   <button
                    onClick={prevStep}
                    disabled={step === Step.PERSONAL}
                    className={`px-8 py-3 flex items-center gap-2 font-bold uppercase text-slate-400 tracking-widest text-xs transition-all ${
                      step === Step.PERSONAL 
                      ? 'opacity-0 pointer-events-none' 
                      : 'hover:text-slate-900 cursor-pointer'
                    } ${lang === 'ur' ? 'flex-row-reverse' : ''}`}
                  >
                    {lang === 'ur' ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                    {t.back}
                  </button>
                  
                  <button
                    onClick={nextStep}
                    disabled={!canContinue()}
                    className={`px-10 py-4 bg-indigo-600 text-white flex items-center gap-3 font-bold uppercase tracking-wider rounded-2xl hover:bg-indigo-700 h-14 shadow-lg shadow-indigo-100 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none ${lang === 'ur' ? 'flex-row-reverse' : ''}`}
                  >
                    {step === Step.ESSENCE ? t.discover : t.continue}
                    {lang === 'ur' ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className={`w-full max-w-7xl mt-12 py-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em] border-t border-slate-200/60 ${lang === 'ur' ? 'md:flex-row-reverse' : ''}`}>
        <p>&copy; 2026 Simt AI Engine v3.0.0 // AIS CORE</p>
        <p className="mt-4 md:mt-0">{t.results.footerTagline}</p>
      </footer>
    </div>
  );
}

