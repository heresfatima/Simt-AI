import React, { useState } from 'react';
import { Star, Send, CheckCircle2 } from 'lucide-react';
import { submitFeedback } from '../services/feedbackService';

interface FeedbackWidgetProps {
  lang: 'en' | 'ur';
  userName: string;
  topMatch: string;
}

export default function FeedbackWidget({ lang, userName, topMatch }: FeedbackWidgetProps) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const text = {
    en: {
      title: 'How accurate did these matches feel?',
      subtitle: 'Your feedback helps us improve Simt AI for everyone.',
      commentPlaceholder: 'Anything you want to add? (optional)',
      submit: 'Submit Feedback',
      thanks: 'Thank you for your feedback!',
    },
    ur: {
      title: 'یہ تجاویز کتنی درست لگیں؟',
      subtitle: 'آپ کی رائے سمت AI کو سب کے لیے بہتر بنانے میں مدد دیتی ہے۔',
      commentPlaceholder: 'کچھ اور کہنا چاہیں؟ (اختیاری)',
      submit: 'رائے جمع کروائیں',
      thanks: 'آپ کی رائے کا شکریہ!',
    },
  }[lang];

  const handleSubmit = async () => {
    if (rating === 0) return;
    setSubmitting(true);
    try {
      await submitFeedback({ rating, comment, userName, topMatch });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit feedback', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bento-card border-emerald-200 bg-emerald-50 p-10 flex flex-col items-center text-center gap-3">
        <CheckCircle2 className="text-emerald-500" size={32} />
        <p className="font-bold text-emerald-800">{text.thanks}</p>
      </div>
    );
  }

  return (
    <div className={`bento-card border-slate-200 p-10 flex flex-col items-center text-center gap-5 ${lang === 'ur' ? 'text-right' : ''}`}>
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-1">{text.title}</h3>
        <p className="text-sm text-slate-500">{text.subtitle}</p>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="transition-transform active:scale-90"
          >
            <Star
              size={32}
              className={(hovered || rating) >= star ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
            />
          </button>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder={text.commentPlaceholder}
        className="w-full max-w-md h-20 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm resize-none"
      />
      <button
        onClick={handleSubmit}
        disabled={rating === 0 || submitting}
        className="px-8 py-3 bg-indigo-600 text-white font-bold uppercase tracking-wider rounded-2xl flex items-center gap-2 hover:bg-indigo-700 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <Send size={16} />
        {text.submit}
      </button>
    </div>
  );
}