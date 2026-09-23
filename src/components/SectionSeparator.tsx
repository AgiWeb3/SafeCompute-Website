import React from 'react';

interface SectionSeparatorProps {
  label?: string;
  variant?: 'blue' | 'cyan' | 'emerald' | 'amber' | 'neutral';
}

export const SectionSeparator: React.FC<SectionSeparatorProps> = ({ 
  label, 
  variant = 'blue' 
}) => {
  const glowStyles = {
    blue: 'from-blue-600/0 via-blue-500/25 to-blue-600/0',
    cyan: 'from-blue-500/0 via-blue-400/25 to-blue-500/0',
    emerald: 'from-blue-600/0 via-blue-500/20 to-blue-600/0',
    amber: 'from-blue-600/0 via-blue-500/20 to-blue-600/0',
    neutral: 'from-[#1E2638]/0 via-[#1E2638] to-[#1E2638]/0',
  }[variant];

  return (
    <div className="relative w-full py-4 flex items-center justify-center overflow-hidden pointer-events-none select-none">
      {/* Precision hairline divider */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#1E2638] to-transparent" />
      <div className={`absolute inset-x-24 sm:inset-x-48 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r ${glowStyles}`} />

      {/* Ultra-clean micro label if provided */}
      {label && (
        <span className="relative z-10 px-3 py-0.5 rounded-full bg-[#060911] border border-blue-900/40 text-[10px] font-mono tracking-widest uppercase text-blue-400/70">
          {label}
        </span>
      )}
    </div>
  );
};
