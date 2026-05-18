/**
 * Reusable UI components with premium styling
 */
import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
  className?: string;
  icon?: LucideIcon;
  disabled?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  disabled 
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group tracking-wider text-xs uppercase";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 active:scale-[0.98] shadow-[0_2px_8px_rgba(79,70,229,0.15),_0_10px_20px_-8px_rgba(79,70,229,0.3),_inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_12px_rgba(79,70,229,0.25),_0_16px_24px_-8px_rgba(79,70,229,0.4),_inset_0_1px_1px_rgba(255,255,255,0.3)] cursor-pointer",
    secondary: "bg-white text-text-primary hover:bg-background-elevated border border-border-subtle shadow-xs hover:shadow-sm active:scale-[0.98] cursor-pointer",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-background-elevated/60 active:scale-[0.98] cursor-pointer",
    glass: "glass-panel text-text-primary hover:bg-white/90 active:scale-[0.98] cursor-pointer"
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ y: 1 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </motion.button>
  );
}

export function Card({ children, className = "", onClick, hover = true }: { children: ReactNode, className?: string, onClick?: () => void, hover?: boolean }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } } : {}}
      onClick={onClick}
      className={`premium-card p-8 flex flex-col ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Input({ label, ...props }: { label?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-2">
      {label && <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-secondary ml-1">{label}</label>}
      <input
        {...props}
        className="w-full px-5 py-3.5 bg-white border border-border-subtle rounded-2xl focus:outline-none focus:border-accent/40 focus:bg-background-primary/10 focus:shadow-[0_8px_20px_-8px_rgba(79,70,229,0.08)] transition-all text-text-primary placeholder:text-text-secondary/40 font-light text-sm shadow-xs"
      />
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold text-base text-text-primary uppercase tracking-[0.2em] ${className}`}>LUMA</span>
  );
}
