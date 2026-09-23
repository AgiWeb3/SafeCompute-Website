import React from 'react';

interface SectionSeparatorProps {
  className?: string;
}

/**
 * Ultra-clean, modern hairline section divider.
 * Designed to replace redundant multi-line borders and gaudy text badges.
 * Provides a subtle, professional separation without clutter.
 */
export const SectionSeparator: React.FC<SectionSeparatorProps> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none select-none ${className}`}>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#1A2336] to-transparent" />
    </div>
  );
};
