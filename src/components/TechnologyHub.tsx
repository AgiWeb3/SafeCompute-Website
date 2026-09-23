import React, { useState } from 'react';
import { Shield, Cpu, Activity, Code2, FileText, Layers } from 'lucide-react';
import { OnionArchitecture } from './OnionArchitecture';
import { ComparisonMatrix } from './ComparisonMatrix';
import { BenchmarksSection } from './BenchmarksSection';
import { DeveloperExperience } from './DeveloperExperience';
import { useLanguage } from '../i18n';

interface TechnologyHubProps {
  onOpenWhitepaper: () => void;
}

export const TechnologyHub: React.FC<TechnologyHubProps> = ({ onOpenWhitepaper }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'onion' | 'matrix' | 'benchmarks' | 'sdk'>('all');
  const { t } = useLanguage();

  const tech = t.technologyHub;

  return (
    <section id="technology" className="py-24 bg-[#060911] relative border-t-2 border-blue-600/30 overflow-hidden">
      {/* Background ambient lighting for deep tech section */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/80 to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Technology Header Banner */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/50 text-xs font-mono text-blue-300 mb-4">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>{tech.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            {tech.titleLine1} <br />
            <span className="bg-gradient-to-r from-white via-sky-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]">
              {tech.titleLine2}
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
            {tech.subtitle}
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={onOpenWhitepaper}
              className="px-4 py-2 text-xs font-mono text-blue-300 bg-[#090E1A] hover:bg-[#0E1526] border border-blue-500/40 hover:border-blue-400 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>{tech.readSpecBtn}</span>
            </button>
          </div>
        </div>

        {/* Tech Module Quick Selector Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-blue-600/25 text-blue-300 border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.25)] font-bold'
                : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/40'
            }`}
          >
            {tech.tabs.all}
          </button>

          <button
            onClick={() => setActiveTab('onion')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'onion'
                ? 'bg-blue-600/25 text-blue-300 border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.25)] font-bold'
                : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/40'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{tech.tabs.onion}</span>
          </button>

          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'matrix'
                ? 'bg-blue-600/25 text-blue-300 border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.25)] font-bold'
                : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/40'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{tech.tabs.matrix}</span>
          </button>

          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'benchmarks'
                ? 'bg-blue-600/25 text-blue-300 border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.25)] font-bold'
                : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/40'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>{tech.tabs.benchmarks}</span>
          </button>

          <button
            onClick={() => setActiveTab('sdk')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'sdk'
                ? 'bg-blue-600/25 text-blue-300 border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.25)] font-bold'
                : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/40'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{tech.tabs.sdk}</span>
          </button>
        </div>

        {/* Dynamic Display of Technical Sub-Modules */}
        <div className="space-y-16">
          {(activeTab === 'all' || activeTab === 'onion') && (
            <div className="rounded-3xl border border-[#1E2638] bg-[#0B0E14]/70 p-2 sm:p-4">
              <OnionArchitecture />
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'matrix') && (
            <div className="rounded-3xl border border-[#1E2638] bg-[#0B0E14]/70 p-2 sm:p-4">
              <ComparisonMatrix />
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'benchmarks') && (
            <div className="rounded-3xl border border-[#1E2638] bg-[#0B0E14]/70 p-2 sm:p-4">
              <BenchmarksSection />
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'sdk') && (
            <div className="rounded-3xl border border-[#1E2638] bg-[#0B0E14]/70 p-2 sm:p-4">
              <DeveloperExperience />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
