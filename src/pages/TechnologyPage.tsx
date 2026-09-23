import React, { useState } from 'react';
import { 
  Cpu, 
  ArrowLeft, 
  FileText, 
  ShieldCheck, 
  Layers, 
  BarChart3, 
  Code2, 
  Calendar,
  Sparkles,
  ArrowUpRight,
  Lock,
  Activity,
  Radio
} from 'lucide-react';
import { OnionArchitecture } from '../components/OnionArchitecture';
import { ComparisonMatrix } from '../components/ComparisonMatrix';
import { BenchmarksSection } from '../components/BenchmarksSection';
import { DeveloperExperience } from '../components/DeveloperExperience';
import { SectionSeparator } from '../components/SectionSeparator';
import { LiveSecurityMonitor } from '../components/LiveSecurityMonitor';
import { InteractiveComparisonDemo } from '../components/InteractiveComparisonDemo';
import { useLanguage } from '../i18n';

interface TechnologyPageProps {
  onOpenWhitepaper: () => void;
  onOpenDemo: () => void;
  onNavigateToHome: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({
  onOpenWhitepaper,
  onOpenDemo,
  onNavigateToHome,
}) => {
  const [activeSection, setActiveSection] = useState<'all' | 'sim' | 'monitor' | 'onion' | 'matrix' | 'benchmarks' | 'sdk'>('all');
  const { t, language } = useLanguage();
  const tech = t.technologyPage;

  const scrollToAnchor = (id: string, sectionKey: 'sim' | 'monitor' | 'onion' | 'matrix' | 'benchmarks' | 'sdk') => {
    setActiveSection(sectionKey);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#060911] pt-24 pb-20">
      {/* Top Breadcrumb & Return to Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={onNavigateToHome}
          className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors py-2 px-3 rounded-lg bg-[#090E1A] border border-blue-900/40 cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>{tech.backToHome}</span>
        </button>
      </div>

      {/* Deep Tech Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-14">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-600/15 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/40 text-xs font-mono text-blue-300 mb-5 shadow-[0_0_20px_rgba(37,99,235,0.25)]">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span>{tech.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.15] text-balance">
            {tech.title}{' '}
            <span className="block sm:inline bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              {tech.titleHighlight}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto text-pretty font-normal">
            {tech.subtitle}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              disabled
              title={language.startsWith('zh') ? '白皮书暂不开放公开下载，请联系专属架构师申请' : 'Whitepaper restricted under NDA access'}
              className="px-6 py-3.5 rounded-xl text-xs font-mono text-slate-500 bg-[#090E1A]/50 border border-blue-950 flex items-center gap-2 cursor-not-allowed opacity-60 font-semibold"
            >
              <Lock className="w-4 h-4 text-slate-500" />
              <span>{tech.whitepaperBtn} ({language.startsWith('zh') ? '暂不公开' : 'Restricted'})</span>
            </button>

            <button
              onClick={onOpenDemo}
              className="px-6 py-3.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-sky-200 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>{tech.talkToArchitectBtn}</span>
            </button>
          </div>
        </div>

        {/* Quick Navigation Sticky Bar for Deep Tech Sections */}
        <div className="sticky top-20 z-40 mt-12 py-3 bg-[#060911]/90 backdrop-blur-xl border-y border-blue-900/30">
          <div className="max-w-5xl mx-auto px-4 flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap text-xs font-mono">
            <button
              onClick={() => { setActiveSection('all'); window.scrollTo({ top: 250, behavior: 'smooth' }); }}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeSection === 'all'
                  ? 'bg-blue-600/25 text-blue-200 border border-blue-500/50 shadow-md font-bold'
                  : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/30'
              }`}
            >
              {tech.pills.all}
            </button>

            <button
              onClick={() => scrollToAnchor('interactive-simulation', 'sim')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'sim'
                  ? 'bg-blue-600/25 text-blue-200 border border-blue-500/50 shadow-md font-bold'
                  : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/30'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-blue-400" />
              <span>{tech.pills.sim}</span>
            </button>

            <button
              onClick={() => scrollToAnchor('live-security-monitor', 'monitor')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'monitor'
                  ? 'bg-blue-600/25 text-blue-200 border border-blue-500/50 shadow-md font-bold'
                  : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/30'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-blue-400" />
              <span>{tech.pills.monitor}</span>
            </button>

            <button
              onClick={() => scrollToAnchor('onion-architecture', 'onion')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'onion'
                  ? 'bg-blue-600/25 text-blue-200 border border-blue-500/50 shadow-md font-bold'
                  : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/30'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>{tech.pills.onion}</span>
            </button>

            <button
              onClick={() => scrollToAnchor('product-matrix', 'matrix')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'matrix'
                  ? 'bg-blue-600/25 text-blue-200 border border-blue-500/50 shadow-md font-bold'
                  : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/30'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>{tech.pills.matrix}</span>
            </button>

            <button
              onClick={() => scrollToAnchor('benchmarks', 'benchmarks')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'benchmarks'
                  ? 'bg-blue-600/25 text-blue-200 border border-blue-500/50 shadow-md font-bold'
                  : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/30'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
              <span>{tech.pills.benchmarks}</span>
            </button>

            <button
              onClick={() => scrollToAnchor('developer-experience', 'sdk')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSection === 'sdk'
                  ? 'bg-blue-600/25 text-blue-200 border border-blue-500/50 shadow-md font-bold'
                  : 'bg-[#090E1A] text-slate-400 hover:text-white border border-blue-900/30'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{tech.pills.sdk}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Technical Modules */}
      <div className="space-y-16">
        {/* Module -1: Dual-Stream Verification Simulation (Traditional Cloud vs SafeCompute) */}
        {(activeSection === 'all' || activeSection === 'sim') && (
          <div id="interactive-simulation" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InteractiveComparisonDemo />
          </div>
        )}

        {activeSection === 'all' && <SectionSeparator />}

        {/* Module 0: Live Security Monitor Telemetry Widget */}
        {(activeSection === 'all' || activeSection === 'monitor') && (
          <div id="live-security-monitor" className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LiveSecurityMonitor />
          </div>
        )}

        {activeSection === 'all' && <SectionSeparator />}

        {/* Module 1: The 3-Layer Onion Architecture & Attack Simulator */}
        {(activeSection === 'all' || activeSection === 'onion') && (
          <div id="onion-architecture" className="scroll-mt-32">
            <OnionArchitecture />
          </div>
        )}

        {activeSection === 'all' && <SectionSeparator />}

        {/* Module 2: 4D Comparative Product Matrix */}
        {(activeSection === 'all' || activeSection === 'matrix') && (
          <div id="product-matrix" className="scroll-mt-32">
            <ComparisonMatrix />
          </div>
        )}

        {activeSection === 'all' && <SectionSeparator />}

        {/* Module 3: Universal Scale Benchmarks & Multimodal Validation */}
        {(activeSection === 'all' || activeSection === 'benchmarks') && (
          <div id="benchmarks" className="scroll-mt-32">
            <BenchmarksSection />
          </div>
        )}

        {activeSection === 'all' && <SectionSeparator />}

        {/* Module 4: Developer Experience, 1-Line SDK & Hardware Appliance */}
        {(activeSection === 'all' || activeSection === 'sdk') && (
          <div id="developer-experience" className="scroll-mt-32">
            <DeveloperExperience />
          </div>
        )}
      </div>

      {/* Bottom Architectural Consultation Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-3xl bg-gradient-to-r from-[#060B16] via-[#091122] to-[#060B16] border border-blue-900/40 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
              {tech.banner.tag}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              {tech.banner.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {tech.banner.desc}
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-full text-xs font-semibold text-black bg-white hover:bg-sky-200 transition-colors shadow-lg cursor-pointer active:scale-95"
              >
                {tech.banner.ctaBtn}
              </button>
              <button
                disabled
                title={language === 'zh-TW' ? '白皮書暫不開放公開下載，請聯繫專屬架構師申請' : language === 'zh-CN' ? '白皮书暂不开放公开下载，请联系专属架构师申请' : 'Whitepaper restricted under NDA access'}
                className="px-5 py-3 rounded-xl text-xs font-mono text-slate-500 bg-[#060911] border border-blue-950 cursor-not-allowed opacity-60 flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span>{tech.banner.whitepaperBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
