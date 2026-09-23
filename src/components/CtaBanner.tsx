import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { useLanguage } from '../i18n';

interface CtaBannerProps {
  onOpenDemo: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDemo: _onOpenDemo }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useLanguage();
  const cta = t.ctaBanner;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-24 bg-[#0B0E14] relative border-t border-[#1E2638] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-teal-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Glowing badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121722] border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-6">
          <Shield className="w-3.5 h-3.5 text-cyan-400" />
          <span>{cta.badge}</span>
        </div>

        {/* Closing Title (Slide 13) */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight text-balance leading-tight">
          {cta.titleTrust} <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">{cta.titleMath}</span>{cta.titleNot} <span className="text-slate-300 underline decoration-cyan-500/40 decoration-wavy">{cta.titleCloud}</span>
        </h2>

        {/* Narrative Closing Statement */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed text-pretty">
          {cta.desc}
        </p>

        {/* Interactive Lead Capture Form */}
        <div className="mt-10 max-w-xl mx-auto">
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={cta.emailPlaceholder}
                className="flex-1 px-5 py-3.5 rounded-full bg-white/[0.06] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 placeholder:text-slate-500 shadow-inner backdrop-blur-md"
              />
              <button
                type="submit"
                className="group px-7 py-3.5 text-sm font-semibold text-black bg-white hover:bg-emerald-300 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(52,211,153,0.4)] transition-all cursor-pointer whitespace-nowrap active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{cta.buttonText}</span>
                <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-black group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-sm flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>{cta.successMessage}</span>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
            <span>● {cta.guarantees.soc2}</span>
            <span>● {cta.guarantees.cryptoCore}</span>
            <span>● {cta.guarantees.nda}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
