import React from 'react';
import { Scale, FileCheck, XCircle, CheckCircle2, Shield, Lock, ArrowRight, Building, Award } from 'lucide-react';

interface LegalSpotlightProps {
  onOpenDemo: () => void;
}

export const LegalSpotlight: React.FC<LegalSpotlightProps> = ({ onOpenDemo }) => {
  return (
    <section id="law-firms" className="py-24 bg-[#0B0E14] relative border-t border-[#1E2638]">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            Beachhead Market Spotlight
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            The Beachhead: Top-Tier Law Firms
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
            We are not boiling the ocean. We are targeting the sector with the highest data sensitivity, the highest willingness to pay, and the most acute existential pain point.
          </p>
        </div>

        {/* Side-by-Side Comparison: The Dead-End vs The SafeCompute Wedge (Slide 10) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: The Dead-End */}
          <div className="p-8 rounded-3xl bg-[#121722]/80 border border-rose-500/30 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-rose-400 uppercase tracking-wide">The Status Quo Trap</span>
                  <h3 className="text-2xl font-bold text-white">The Dead-End</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono font-semibold">
                Fundamental Breach
              </span>
            </div>

            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Top-tier law firms want to use LLMs and autonomous Agents for high-value M&amp;A contract review, litigation RAG, and case law reasoning. 
              However, feeding highly sensitive client case files into public cloud APIs fundamentally breaches Non-Disclosure Agreements (NDAs) and destroys Attorney-Client Privilege.
            </p>

            <div className="space-y-3 pt-4 border-t border-[#1E2638] text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 text-rose-400">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>Plaintext discovery uploads waive evidentiary privilege in court</span>
              </div>
              <div className="flex items-center gap-2 text-rose-400">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>NDA indemnification clauses trigger multi-million dollar liabilities</span>
              </div>
              <div className="flex items-center gap-2 text-rose-400">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>General Counsel bans AI deployment across litigation practices</span>
              </div>
            </div>
          </div>

          {/* Card 2: The SafeCompute Wedge */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#121E2A] via-[#102422] to-[#121722] border-2 border-emerald-400/80 shadow-[0_0_35px_rgba(16,185,129,0.2)] relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wide">The Sovereign Solution</span>
                  <h3 className="text-2xl font-bold text-white">The SafeCompute Wedge</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold">
                Unlock AI Securely
              </span>
            </div>

            <p className="text-slate-200 text-base leading-relaxed mb-6 font-medium">
              We provide the only mathematically verifiable way to run industry-specific RAG pipelines without ever exposing plaintext data to the cloud provider. We unlock AI for the legal industry without modifying firm DMS or IT infrastructure.
            </p>

            <div className="space-y-3 pt-4 border-t border-emerald-500/30 text-xs font-mono text-slate-200">
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Zero-Plaintext inference preserves Attorney-Client Privilege</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Compatible with iManage, NetDocuments, and Thomson Reuters DMS</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Attested math-proof satisfies Fortune 500 audit committees</span>
              </div>
            </div>
          </div>

        </div>

        {/* Enterprise Compliance Callout & Quote */}
        <div className="p-8 rounded-3xl bg-[#121722]/80 border border-[#1E2638] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Legal Defense Certification
            </div>
            <h4 className="text-lg font-bold text-white">
              Ready for AmLaw 100 &amp; Magic Circle Practice Groups
            </h4>
            <p className="text-xs text-slate-400 max-w-2xl">
              SafeCompute provides verifiable cryptographic attestations suitable for submission to corporate clients and federal courts confirming no unencrypted tensor data ever resided on cloud hardware.
            </p>
          </div>

          <button
            onClick={onOpenDemo}
            className="px-6 py-3 text-xs font-bold text-[#0B0E14] bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all whitespace-nowrap cursor-pointer active:scale-95 shrink-0"
          >
            Request Legal Briefing
          </button>
        </div>

      </div>
    </section>
  );
};
