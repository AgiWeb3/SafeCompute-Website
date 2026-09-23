import React from 'react';
import { ArrowRight, Lock, Zap, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FluidShaderCanvas } from './FluidShaderCanvas';
import { SecretFlowAnimation } from './SecretFlowAnimation';
import { useLanguage } from '../i18n';

interface HeroProps {
  onOpenDemo: () => void;
  onExploreHowItWorks: () => void;
  onExploreTechnology: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenDemo, 
  onExploreHowItWorks, 
  onExploreTechnology 
}) => {
  const { t, language } = useLanguage();
  const isZh = language.startsWith('zh');

  return (
    <section id="overview" className="relative min-h-[95vh] flex flex-col justify-between pt-24 pb-14 md:pt-32 md:pb-18 overflow-hidden bg-[#06080E]">
      {/* Authentic Capital & Code Fluid Swirl Canvas & Silky Film Grain */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
        style={{
          WebkitMask: 'linear-gradient(to bottom, #000 0%, #000 85%, transparent 100%)',
          mask: 'linear-gradient(to bottom, #000 0%, #000 85%, transparent 100%)'
        }}
      >
        <FluidShaderCanvas 
          className="w-full h-full"
          color1="rgb(10, 14, 26)"     // Deep void midnight navy
          color2="rgb(28, 43, 255)"    // Authentic Capital & Code Electric Royal Blue (RGB 28, 43, 255)
          color3="rgb(255, 255, 255)"   // Crisp silk white highlight
          speed={0.45}
          scale={0.45}
          swirl={0.31}
          swirlIterations={10}
          grainOpacity={0.25}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        
        {/* Hero Top Bar: Clean Meta Badge & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_#3B82F6]" />
            <span className="text-white font-medium">{t.hero.badgePre}</span>
            <span className="text-white/20">/</span>
            <span className="text-slate-400 hidden sm:inline">{t.hero.badgePost}</span>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="text-slate-300 font-semibold">HK · SG</span>
            <span className="text-white/20">•</span>
            <span>ENTERPRISE CRYPTOGRAPHIC SOVEREIGNTY</span>
          </div>
        </div>

        {/* 2-Column Hero Grid: Left Content + Right Flow Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Business Value, Typography & Luxury Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.12] text-balance">
              {t.hero.titleLine1}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-blue-400 drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]">
                {t.hero.titleLine2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl font-light leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* CTAs in Capital & Code luxury pill / rounded pill style */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenDemo}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-sky-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.22)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] cursor-pointer active:scale-95"
              >
                <span>{t.hero.bookDemoBtn}</span>
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-black/90 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                onClick={onExploreHowItWorks}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-medium text-sm backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                <span>{t.hero.seeHowItWorksBtn}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </button>
            </div>

            {/* Trust checkmarks in plain business language */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.hero.checks.zeroPlaintext}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.hero.checks.actionFirewall}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.hero.checks.preservePrivilege}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.hero.checks.subSecondSpeed}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Restored Interactive SecretFlowAnimation + Rotating Tech Emblem */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* The Restored Interactive Secret Flow Visual */}
            <div className="w-full relative">
              <SecretFlowAnimation onExploreTechnology={onExploreTechnology} />
              
              {/* Floating Spinning Mini-Badge at bottom-right corner for tech discovery */}
              <div className="absolute -bottom-5 -right-3 hidden sm:block select-none pointer-events-auto z-20">
                <button
                  onClick={onExploreTechnology}
                  className="group relative w-24 h-24 rounded-full border border-white/20 bg-[#06080E]/85 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:border-blue-400/60 transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
                  title={isZh ? '探索技术底层' : 'Explore Tech Architecture'}
                >
                  <svg 
                    className="absolute inset-0 w-full h-full animate-[spin_16s_linear_infinite] group-hover:animate-[spin_8s_linear_infinite] transition-all"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id="textCircleSmall"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text className="text-[7.5px] font-mono tracking-[0.2em] uppercase fill-slate-300 group-hover:fill-sky-300 transition-colors">
                      <textPath href="#textCircleSmall">
                        {isZh ? '• 代数混淆 • 零明文 • 机密计算 ' : '• ZERO-PLAINTEXT • SAFE COMPUTE '}
                      </textPath>
                    </text>
                  </svg>
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#10B981] transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                  </div>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Bottom Clean Metrics (Universal Any-Scale & Multimodal Model Support) */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Lock className="w-3.5 h-3.5 text-[#10B981]" />
              <span>{t.hero.metrics.confidentiality.label}</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-display">
              {t.hero.metrics.confidentiality.value}
            </div>
            <div className="text-xs text-slate-400 font-light">
              {t.hero.metrics.confidentiality.desc}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.hero.metrics.speedOverhead.label}</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono">
              {t.hero.metrics.speedOverhead.value}
            </div>
            <div className="text-xs text-slate-400 font-light">
              {t.hero.metrics.speedOverhead.desc}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.hero.metrics.toolSafety.label}</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-display">
              {t.hero.metrics.toolSafety.value}
            </div>
            <div className="text-xs text-slate-400 font-light">
              {t.hero.metrics.toolSafety.desc}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Cpu className="w-3.5 h-3.5 text-cyan-300" />
              <span>{t.hero.metrics.enterpriseScale.label}</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono">
              {t.hero.metrics.enterpriseScale.value}
            </div>
            <div className="text-xs text-slate-400 font-light">
              {t.hero.metrics.enterpriseScale.desc}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
