import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'navy' | 'charcoal' | 'outline' | 'slate';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'navy',
  className = ''
}) => {
  const variantStyles = {
    navy: 'bg-[#0A3982]/10 text-[#0A3982] border border-[#0A3982]/20',
    red: 'bg-[#D71920]/10 text-[#D71920] border border-[#D71920]/20',
    charcoal: 'bg-slate-800 text-slate-100 border border-slate-700',
    outline: 'bg-transparent text-slate-600 border border-slate-300',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
