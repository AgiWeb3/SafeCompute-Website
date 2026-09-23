import React, { useState } from 'react';
import { ShieldCheck, Lock, Cpu, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

interface SovereignVaultVisualProps {
  onExploreTechnology?: () => void;
}

export const SovereignVaultVisual: React.FC<SovereignVaultVisualProps> = ({ onExploreTechnology }) => {
  const [activeTab, setActiveTab] = useState<'sovereign' | 'traditional'>('sovereign');
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();

  const isZh = language === 'zh-CN' || language === 'zh-TW';

  return (
    <div className="w-full max-w-[540px] mx-auto flex flex-col items-center">
      {/* Visual Canvas Box */}
      <div 
        className="relative w-full aspect-square max-h-[460px] flex items-center justify-center p-4 select-none rounded-3xl bg-gradient-to-b from-[#0E1422] to-[#070A10] border border-[#1E2638] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ambient Backlight Glow */}
        <div 
          className={`absolute inset-0 opacity-60 pointer-events-none filter blur-3xl transition-colors duration-700 ${
            activeTab === 'sovereign' ? 'bg-gradient-to-tr from-cyan-500/25 via-teal-500/20 to-emerald-500/20' : 'bg-red-500/15'
          }`} 
        />

        {/* Cyber Circuit Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 500 500">
          <defs>
            <pattern id="vaultGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10B981" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vaultGrid)" />
        </svg>

        {/* Mode Comparison Pill Tabs */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
          <div className="inline-flex p-1 rounded-xl bg-[#090D15]/90 border border-[#1E2638] backdrop-blur-md">
            <button
              onClick={() => setActiveTab('sovereign')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'sovereign'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isZh ? 'SafeCompute 密闭金库' : 'SafeCompute Vault'}</span>
            </button>
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'traditional'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span>{isZh ? '传统公有云 (明文暴露)' : 'Traditional Cloud (Exposed)'}</span>
            </button>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0B0E14]/80 border border-[#1E2638] text-[11px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isZh ? '零明文泄露' : 'Zero Plaintext'}</span>
          </div>
        </div>

        {/* Central Graphic */}
        <div className={`relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          {activeTab === 'sovereign' ? (
            /* SafeCompute: High-tech Triple Concentric Vault */
            <svg viewBox="0 0 400 400" className="w-[85%] h-[85%] filter drop-shadow-[0_0_30px_rgba(0,242,254,0.3)]">
              <defs>
                <linearGradient id="vaultCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="100%" stopColor="#0891B2" />
                </linearGradient>
                <linearGradient id="vaultEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <radialGradient id="kernelGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#0B0E14" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Rotating Outer Radar Rings */}
              <circle cx="200" cy="200" r="160" fill="none" stroke="#00F2FE" strokeWidth="1" strokeDasharray="6 8" opacity="0.4" className="animate-spin" style={{ animationDuration: '60s' }} />
              <circle cx="200" cy="200" r="140" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="12 12" opacity="0.6" className="animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />

              {/* Layer 1: Outer Shield Hexagon (TrustGate) */}
              <polygon
                points="200,60 320,130 320,270 200,340 80,270 80,130"
                fill="#0B132B"
                fillOpacity="0.4"
                stroke="url(#vaultCyan)"
                strokeWidth="2.5"
              />

              {/* Layer 2: Mid Enclave Ring (EnclaveX) */}
              <polygon
                points="200,90 295,145 295,255 200,310 105,255 105,145"
                fill="#0A1C1D"
                fillOpacity="0.5"
                stroke="url(#vaultEmerald)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Orbiting Security Guard Nodes */}
              <circle cx="200" cy="60" r="4.5" fill="#22D3EE" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="200" cy="60" r="4.5" fill="#22D3EE" />
              <circle cx="320" cy="270" r="4" fill="#34D399" />
              <circle cx="80" cy="270" r="4" fill="#34D399" />

              {/* Layer 3: Central Mathematical Core (CovarPri Core) */}
              <circle cx="200" cy="200" r="65" fill="url(#kernelGlow)" />
              <circle cx="200" cy="200" r="50" fill="#0E1E28" stroke="#22D3EE" strokeWidth="2" />
              
              {/* Central Lock Icon & Invariant Equation */}
              <g transform="translate(186, 172)">
                <path d="M4 11a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V11z" fill="none" stroke="#22D3EE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 9V6a6 6 0 0 1 12 0v3" fill="none" stroke="#34D399" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Data stream beam */}
              <path
                d="M 105 145 Q 200 120 295 145"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-pulse"
              />
            </svg>
          ) : (
            /* Traditional Cloud: Exposed Risk Visualization */
            <svg viewBox="0 0 400 400" className="w-[85%] h-[85%] filter drop-shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              {/* Broken perimeter */}
              <circle cx="200" cy="200" r="140" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="10 15" opacity="0.6" />
              
              {/* Exposed Server Box */}
              <rect x="100" y="110" width="200" height="180" rx="16" fill="#1A0D10" stroke="#EF4444" strokeWidth="2" opacity="0.8" />
              
              {/* Plaintext VRAM Leak Warning */}
              <text x="200" y="165" textAnchor="middle" fill="#FCA5A5" fontSize="13" fontFamily="monospace" fontWeight="bold">
                ⚠️ PLAINTEXT IN VRAM
              </text>
              <text x="200" y="195" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontFamily="sans-serif">
                Cloud Admins Can Read Data
              </text>
              <text x="200" y="215" textAnchor="middle" fill="#EF4444" fontSize="11" fontFamily="sans-serif">
                Attorney-Client Privilege Lost
              </text>
              <text x="200" y="245" textAnchor="middle" fill="#F87171" fontSize="10" fontFamily="monospace">
                Prompt Injection Risk: HIGH
              </text>
            </svg>
          )}
        </div>

        {/* Bottom Floating Guarantee Pill */}
        <div className="absolute bottom-4 inset-x-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#090D15]/90 border border-[#1E2638] text-xs font-mono text-slate-300 backdrop-blur-md">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{activeTab === 'sovereign' ? (isZh ? '端到端隔离 · 云端无明文' : 'End-to-End Client Isolation') : (isZh ? '明文暴露在云端内存中' : 'Plaintext Exposed in VRAM')}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090D15]/90 border border-[#1E2638] text-xs font-mono text-cyan-300 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>&lt; 10% {isZh ? '损耗' : 'Lag'}</span>
          </div>
        </div>
      </div>

      {/* Simplified, Clean Summary Caption */}
      <div className="w-full mt-3 p-3 rounded-2xl bg-[#0E131E] border border-[#1E2638] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            {isZh 
              ? '数学扰动 + 芯片飞地 + 行为防火墙三大屏障一体协同' 
              : 'Triple-layer sovereign protection: Math, Chip Enclave & Action Firewall'}
          </span>
        </div>

        {onExploreTechnology && (
          <button
            onClick={onExploreTechnology}
            className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 transition-colors cursor-pointer shrink-0 ml-2"
          >
            <span>{isZh ? '技术架构' : 'Tech Specs'}</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};
