import React, { useState } from 'react';
import { Layers, ShieldCheck, Cpu, ArrowDown } from 'lucide-react';
import { useLanguage } from '../i18n';

export const SovereigntyLayer: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number>(1); // 0: App, 1: SafeCompute (default active), 2: Infra
  const { t } = useLanguage();

  const tiers = t.sovereigntyLayer.tiers;
  const thesis = t.sovereigntyLayer.thesis;

  return (
    <section id="sovereignty-layer" className="py-24 bg-[#0B0E14] relative border-t border-[#1E2638]">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            {t.sovereigntyLayer.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            {t.sovereigntyLayer.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.sovereigntyLayer.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Visual 3-Tier Stack on Left, The Thesis & Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive 3-Tier Visual Stack */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div className="w-full max-w-lg space-y-4">
              
              {/* Tier 1: Application Layer */}
              <div 
                onClick={() => setSelectedTier(0)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative border ${
                  selectedTier === 0 
                    ? 'bg-[#151C2C] border-cyan-400/80 shadow-[0_0_30px_rgba(0,242,254,0.15)] ring-1 ring-cyan-400/50' 
                    : 'bg-[#121722]/80 border-[#1E2638] hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">{tiers.app.tag}</div>
                      <h3 className="text-lg font-bold text-white">{tiers.app.title}</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {tiers.app.badge}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mt-3">
                  {tiers.app.desc}
                </p>
                
                {/* Active flow connector */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#121722] border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-xs">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Tier 2: SafeCompute Sovereignty Layer (Hero / Center) */}
              <div 
                onClick={() => setSelectedTier(1)}
                className={`p-7 rounded-2xl cursor-pointer transition-all duration-300 relative border-2 ${
                  selectedTier === 1 
                    ? 'bg-gradient-to-br from-[#121E2A] via-[#102422] to-[#121722] border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)] ring-2 ring-emerald-400/40' 
                    : 'bg-emerald-950/20 border-emerald-500/40 hover:border-emerald-400'
                }`}
              >
                {/* Glow pill */}
                <div className="absolute -top-3.5 right-6 px-3 py-0.5 rounded-full bg-emerald-500 text-[#0B0E14] text-xs font-bold font-mono tracking-wide shadow-md">
                  {tiers.safecompute.banner}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-emerald-400 uppercase tracking-wide">{tiers.safecompute.tag}</div>
                      <h3 className="text-xl font-extrabold text-white">
                        {tiers.safecompute.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-200 mt-3 font-medium">
                  {tiers.safecompute.desc}
                </p>

                {/* Micro Invariants tags */}
                <div className="mt-4 pt-3 border-t border-emerald-500/20 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-1.5 rounded bg-emerald-900/30 text-emerald-300 border border-emerald-500/30">
                    {tiers.safecompute.invariants[0]}
                  </div>
                  <div className="p-1.5 rounded bg-cyan-900/30 text-cyan-300 border border-cyan-500/30">
                    {tiers.safecompute.invariants[1]}
                  </div>
                  <div className="p-1.5 rounded bg-teal-900/30 text-teal-300 border border-teal-500/30">
                    {tiers.safecompute.invariants[2]}
                  </div>
                </div>

                {/* Active flow connector */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#121722] border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xs">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Tier 3: Compute & Model Layer */}
              <div 
                onClick={() => setSelectedTier(2)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative border ${
                  selectedTier === 2 
                    ? 'bg-[#151C2C] border-cyan-400/80 shadow-[0_0_30px_rgba(0,242,254,0.15)] ring-1 ring-cyan-400/50' 
                    : 'bg-[#121722]/80 border-[#1E2638] hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">{tiers.infra.tag}</div>
                      <h3 className="text-lg font-bold text-white">{tiers.infra.title}</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                    {tiers.infra.badge}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mt-3">
                  {tiers.infra.desc}
                </p>
              </div>

            </div>

            <p className="text-xs text-slate-400 mt-4 text-center font-mono">
              {t.sovereigntyLayer.clickToInspect}
            </p>
          </div>

          {/* Right: The Thesis Statement */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Thesis Card */}
            <div className="p-8 rounded-3xl bg-[#121722]/90 border border-emerald-500/40 relative overflow-hidden shadow-2xl backdrop-blur-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold tracking-wider mb-4 border border-emerald-500/30">
                {thesis.badge}
              </div>

              <blockquote className="space-y-4 text-slate-200 leading-relaxed font-normal text-base sm:text-lg">
                <p className="text-white font-semibold text-xl">
                  {thesis.quote}
                </p>
                
                <p className="text-slate-300">
                  {thesis.lead}
                </p>

                <div className="space-y-2 pt-2 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>{thesis.point1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    <span>{thesis.point2}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1E2638] text-emerald-300 font-medium">
                  {thesis.conclusion}
                </div>
              </blockquote>
            </div>

            {/* Contextual Tier Inspector */}
            <div className="p-5 rounded-2xl bg-[#121722]/60 border border-[#1E2638] text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-400 font-mono">
                <span>INSPECTION STATE</span>
                <span className="text-cyan-400">
                  {selectedTier === 0 ? tiers.app.title.toUpperCase() : selectedTier === 1 ? tiers.safecompute.title.toUpperCase() : tiers.infra.title.toUpperCase()}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {selectedTier === 0 && tiers.app.inspect}
                {selectedTier === 1 && tiers.safecompute.inspect}
                {selectedTier === 2 && tiers.infra.inspect}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
