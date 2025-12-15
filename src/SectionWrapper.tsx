import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  number: string;
  title: string;
  isDarkMode: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, number, title, isDarkMode }) => (
  <section id={id} className="mb-20 scroll-mt-20 technical-article-section">
    <div className="section-number">{number}</div>
    <h2 className={`text-2xl font-bold mb-8 tracking-tight mono-accent transition-colors duration-300 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
      {title}
    </h2>
    <div className="max-w-none">
      {children}
    </div>
  </section>
);

interface TextProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  className?: string;
  variant?: 'base' | 'sm' | 'xs';
}

export const Text: React.FC<TextProps> = ({ children, isDarkMode, className = '', variant = 'base' }) => {
  const sizeClass = variant === 'sm' ? 'text-sm' : variant === 'xs' ? 'text-xs' : 'text-base';
  return (
    <p className={`${sizeClass} leading-relaxed font-light transition-colors duration-300 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'} ${className}`}>
      {children}
    </p>
  );
};

export const Heading: React.FC<TextProps> = ({ children, isDarkMode, className = '' }) => (
  <h3 className={`text-base font-bold mb-6 tracking-wide mono-accent transition-colors duration-300 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'} ${className}`}>
    {children}
  </h3>
);

interface CardProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  variant?: 'border' | 'accent';
}

export const Card: React.FC<CardProps> = ({ children, isDarkMode, variant = 'border' }) => (
  <div className={`p-6 research-card transition-colors duration-300 ${
    variant === 'accent'
      ? isDarkMode
        ? 'border-l-2 border-l-slate-500'
        : 'border-l-2 border-l-slate-900'
      : isDarkMode
        ? 'border border-slate-700'
        : 'border border-slate-200'
  }`}>
    {children}
  </div>
);
