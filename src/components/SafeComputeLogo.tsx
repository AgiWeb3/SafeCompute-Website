import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SafeComputeLogo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const dimensions = {
    sm: { box: 'w-7 h-7', text: 'text-base', badge: 'text-[9px] px-1 py-0.2' },
    md: { box: 'w-9 h-9', text: 'text-xl', badge: 'text-[10px] px-1.5 py-0.5' },
    lg: { box: 'w-11 h-11', text: 'text-2xl', badge: 'text-xs px-2 py-0.5' },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Precision Geometric Monogram Vault Symbol */}
      <div className={`relative ${dimensions.box} flex items-center justify-center select-none group`}>
        {/* Ambient Subtle Cobalt Glow Behind Symbol */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-indigo-500/20 rounded-xl blur-md group-hover:scale-110 group-hover:bg-blue-500/40 transition-all duration-500" />
        
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        >
          <defs>
            {/* Outer Hex Vault Gradient */}
            <linearGradient id="scHexGrad" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="45%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>

            {/* Facet Fill for 3D Optical Illusion */}
            <linearGradient id="scFacetGrad" x1="20" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.04" />
            </linearGradient>

            {/* Core Secure Monogram S Gradient */}
            <linearGradient id="scCoreGrad" x1="12" y1="11" x2="28" y2="29" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>

            {/* Glowing Center Core */}
            <radialGradient id="scCenterDot" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Hexagonal Shield Facet Background (Enclave Boundary) */}
          <path
            d="M20 4.5 L33.5 12.2 V27.8 L20 35.5 L6.5 27.8 V12.2 Z"
            fill="url(#scFacetGrad)"
            stroke="url(#scHexGrad)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />

          {/* Isometric Inner Security Facets */}
          <path
            d="M20 4.5 V20 M33.5 27.8 L20 20 M6.5 27.8 L20 20"
            stroke="#3B82F6"
            strokeWidth="0.8"
            strokeOpacity="0.35"
            strokeDasharray="2 2"
          />

          {/* 
            Monogram Ribbon "S" + "C" Interlock (SafeCompute / Shield & Compute Matrix)
            Minimal, architectural, continuous isometric ribbon path
          */}
          <path
            d="M26.5 13.5 H16.5 C14.5 13.5 13.5 14.8 13.5 16.5 C13.5 18.2 14.5 19.5 16.5 19.5 H23.5 C25.5 19.5 26.5 20.8 26.5 22.5 C26.5 24.2 25.5 25.5 23.5 25.5 H13.5"
            stroke="url(#scCoreGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Attestation Micro Quantum Nodes */}
          <circle cx="20" cy="4.5" r="1.3" fill="#93C5FD" />
          <circle cx="33.5" cy="12.2" r="1.3" fill="#60A5FA" />
          <circle cx="33.5" cy="27.8" r="1.3" fill="#3B82F6" />
          <circle cx="20" cy="35.5" r="1.3" fill="#2563EB" />
          <circle cx="6.5" cy="27.8" r="1.3" fill="#3B82F6" />
          <circle cx="6.5" cy="12.2" r="1.3" fill="#60A5FA" />

          {/* Central Protected Kernel Spark */}
          <circle cx="20" cy="19.5" r="2.2" fill="url(#scCenterDot)" />
          <circle cx="20" cy="19.5" r="1" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Wordmark & Territorial Micro-badge */}
      <div className="flex items-center gap-2">
        <span className={`${dimensions.text} font-bold tracking-tight text-white font-display select-none transition-colors group-hover:text-blue-200`}>
          SafeCompute
        </span>
        <span className={`hidden sm:inline-flex items-center gap-1 ${dimensions.badge} rounded font-mono text-slate-400 bg-slate-800/60 border border-slate-700/60 select-none`}>
          <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
          HK · SG
        </span>
      </div>
    </div>
  );
};
