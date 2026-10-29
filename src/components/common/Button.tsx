import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'navy' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  asLink = false,
  href = '#',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-md"
  };

  const variantStyles = {
    primary: "bg-[#D71920] hover:bg-[#B8141A] text-white focus:ring-[#D71920] shadow-sm hover:shadow-lg hover:shadow-red-500/20",
    navy: "bg-[#0A3982] hover:bg-[#082F6B] text-white focus:ring-[#0A3982] shadow-sm hover:shadow-lg hover:shadow-blue-500/20",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800 focus:ring-slate-300",
    outline: "border-2 border-[#0A3982] text-[#0A3982] hover:bg-[#0A3982] hover:text-white focus:ring-[#0A3982]",
    white: "bg-white hover:bg-slate-50 text-[#0A3982] font-bold shadow-md hover:shadow-xl focus:ring-white"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={combinedClasses}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
