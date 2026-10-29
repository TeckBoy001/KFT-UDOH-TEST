import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = ''
}) => {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 ${alignmentStyles[align]} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-0.5 bg-[#D71920]"></span>
          <span className="text-xs uppercase tracking-widest font-bold text-[#D71920]">
            {eyebrow}
          </span>
          {align === 'center' && <span className="w-6 h-0.5 bg-[#D71920]"></span>}
        </div>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
        isDark ? 'text-white' : 'text-[#0B132B]'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg font-normal leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
