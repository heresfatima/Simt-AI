import React, { useState, KeyboardEvent } from 'react';
import { X, Plus } from 'lucide-react';

interface TagInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
  placeholder: string;
}

const TagInput: React.FC<TagInputProps> = ({ tags, setTags, placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-sm animate-in fade-in zoom-in duration-200"
          >
            {tag}
            <button
              onClick={() => removeTag(index)}
              className="p-0.5 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={12} />
            </button>
          </span>
        ))}
      </div>
      <div className="relative group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium transition-all pr-12"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white border border-slate-100 text-slate-400 group-focus-within:text-indigo-600 group-focus-within:border-indigo-100 transition-all">
          <Plus size={16} />
        </div>
      </div>
    </div>
  );
};

export default TagInput;
