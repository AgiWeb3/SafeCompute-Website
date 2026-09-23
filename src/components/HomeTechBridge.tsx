import React from 'react';
import { Cpu, ArrowRight, ShieldCheck, BarChart3, Layers, Terminal, Lock } from 'lucide-react';
import { useLanguage } from '../i18n';

interface HomeTechBridgeProps {
  onExploreTechnology: () => void;
  onOpenWhitepaper: () => void;
}

export const HomeTechBridge: React.FC<HomeTechBridgeProps> = ({ onExploreTechnology, onOpenWhitepaper }) => {
  const { t, language } = useLanguage();
  const bridge = t.homeBridge;

  const featureCards = [
    {
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      title: bridge.pill1,
      badge: 'CovarPri · EnclaveX · TrustGate',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      title: bridge.pill2,
      badge: 'vs Plaintext, FHE & TEE',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
      title: bridge.pill3,
      badge: 'Any Scale & Multimodal Ready',
    },
    {
      icon: <Terminal className="w-5 h-5 text-blue-400" />,
      title: bridge.pill4,
      badge: 'Python & TS SDK · 1U Appliance',
    },
  ];

  return (
    <section className="py-20 bg-[#060911] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-blue-600/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-[#090E1A]/90 border border-blue-900/40 p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Top subtle highlight line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/50 text-xs font-mono text-blue-300">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                <span>{bridge.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight text-balance">
                {bridge.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {bridge.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreTechnology}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-sky-200 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>{bridge.exploreBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  disabled
                  title={language.startsWith('zh') ? '白皮书暂不开放公开下载，请联系专属架构师申请' : 'Whitepaper restricted under NDA access'}
                  className="px-5 py-3.5 rounded-full text-xs font-mono text-slate-500 bg-[#121722]/50 border border-[#1E2638] cursor-not-allowed opacity-60 flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.nav.readWhitepaperPdf} ({language.startsWith('zh') ? '暂不公开' : 'Restricted'})</span>
                </button>
              </div>
            </div>

            {/* Right feature cards column */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {featureCards.map((feat, idx) => (
                <div
                  key={idx}
                  onClick={onExploreTechnology}
                  className="p-4 rounded-2xl bg-[#060B18]/80 border border-blue-950 hover:border-blue-500/50 hover:bg-[#0A1022] transition-all cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-950/50 border border-blue-900/50 group-hover:border-blue-400/40 flex items-center justify-center mb-2.5 transition-colors">
                    {feat.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400 mt-1">
                    {feat.badge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
