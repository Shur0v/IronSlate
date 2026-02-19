
import React from 'react';
import { COLORS } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative flex items-center justify-center font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:active:scale-100 rounded-[14px] h-12 px-6 w-full";
  
  const variants = {
    primary: `bg-[#3db6fe] text-white shadow-lg shadow-[#3db6fe]/10 hover:bg-[#1F6FDB]`,
    secondary: `border border-[#3db6fe] text-[#3db6fe] hover:bg-[#3db6fe]/5`,
    ghost: `text-[#9AA4B2] hover:text-[#E6EDF3] hover:bg-[#1A222E]`,
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : children}
    </button>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-[#121821] border border-[#242E3D] rounded-[16px] p-5 ${className}`}>
    {children}
  </div>
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string }> = ({ label, className = '', ...props }) => (
  <div className="flex flex-col gap-2 w-full">
    {label && <label className="text-[12px] font-semibold text-[#6B7280] uppercase tracking-wider">{label}</label>}
    <input 
      className={`bg-[#1A222E] border border-[#242E3D] text-[#E6EDF3] rounded-[12px] h-12 px-4 focus:outline-none focus:border-[#3db6fe] focus:ring-1 focus:ring-[#3db6fe]/50 transition-all ${className}`}
      {...props}
    />
  </div>
);

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Fixed: Defined as React.FC to ensure children prop is correctly recognized in JSX usage
const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`text-3xl font-black text-[#E6EDF3] tracking-tight uppercase ${className}`}>{children}</h1>
);

const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`text-xl font-bold text-[#E6EDF3] tracking-tight ${className}`}>{children}</h2>
);

// Added H3 component to fix the "Property 'H3' does not exist on type 'Typography'" error
const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-bold text-[#E6EDF3] tracking-tight ${className}`}>{children}</h3>
);

const NumberComp: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <span className={`text-4xl font-black text-[#E6EDF3] tabular-nums tracking-tighter ${className}`}>{children}</span>
);

const Body: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-[15px] leading-relaxed text-[#9AA4B2] ${className}`}>{children}</p>
);

export const Typography = {
  H1,
  H2,
  H3,
  Number: NumberComp,
  Body,
};
