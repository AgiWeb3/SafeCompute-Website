import React, { useState } from 'react';
import { ShieldAlert, Cpu, Lock, CheckCircle2, Shield } from 'lucide-react';
import { useLanguage } from '../i18n';

export const OnionArchitecture: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'trustgate' | 'enclavex' | 'covarpri'>('covarpri');
  const { t } = useLanguage();
  const on = t.onion;

  // TrustGate Action Firewall Interactive Demo State
  const [firewallTestPrompt, setFirewallTestPrompt] = useState<string>('transfer_funds');
  const [testResult, setTestResult] = useState<{
    action: string;
    verdict: 'APPROVED' | 'REJECTED';
    reason: string;
    latency: number;
  }>({
    action: 'POST /v1/wire/dispatch {"amount": 5000000, "dest": "offshore_acct"}',
    verdict: 'REJECTED',
    reason: 'Adversarial Jailbreak Detected: Action exceeds temporary IAM scope. Malicious prompt injection severed.',
    latency: 1.8,
  });

  const handleTestFirewall = (testCase: string) => {
    setFirewallTestPrompt(testCase);
    if (testCase === 'transfer_funds') {
      setTestResult({
        action: 'POST /v1/wire/dispatch {"amount": 5000000, "dest": "offshore_acct"}',
        verdict: 'REJECTED',
        reason: on.interactiveSim.verdictBlock,
        latency: 1.8,
      });
    } else if (testCase === 'read_docs') {
      setTestResult({
        action: 'GET /v1/dms/contracts/nda-7749.pdf (Attestation Verified)',
        verdict: 'APPROVED',
        reason: on.interactiveSim.verdictPass,
        latency: 1.2,
      });
    } else {
      setTestResult({
        action: 'PUT /v1/hypervisor/memory/dump',
        verdict: 'REJECTED',
        reason: on.interactiveSim.verdictBlock,
        latency: 0.9,
      });
    }
  };

  const currentPillarData = on.pillars[activePillar];

  return (
    <section id="onion-architecture" className="py-24 bg-[#0B0E14] relative border-t border-[#1E2638]">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            {on.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            {on.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
            {on.subtitle}
          </p>
        </div>

        {/* Concentric Onion Radar Visual + Interactive Pillar Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Concentric 3-Layer Onion Radar SVG */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-3xl bg-[#121722]/60 border border-[#1E2638]">
            <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
              
              {/* Outer Layer: TrustGate (Prompt & API) */}
              <button
                onClick={() => setActivePillar('trustgate')}
                className={`absolute inset-0 rounded-full border-2 transition-all duration-300 flex items-start justify-center pt-2 cursor-pointer ${
                  activePillar === 'trustgate' 
                    ? 'border-amber-400 bg-amber-500/10 shadow-[0_0_25px_rgba(245,158,11,0.25)]' 
                    : 'border-amber-500/30 hover:border-amber-400/60'
                }`}
                title="Layer 1: TrustGate"
              >
                <span className="text-[11px] font-mono text-amber-300 font-semibold uppercase tracking-wider">
                  {on.pillars.trustgate.ringTitle}
                </span>
              </button>

              {/* Middle Layer: EnclaveX (Hardware & Memory) */}
              <button
                onClick={() => setActivePillar('enclavex')}
                className={`absolute inset-8 rounded-full border-2 transition-all duration-300 flex items-start justify-center pt-2 cursor-pointer ${
                  activePillar === 'enclavex' 
                    ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_25px_rgba(0,242,254,0.25)]' 
                    : 'border-cyan-500/30 hover:border-cyan-400/60'
                }`}
                title="Layer 2: EnclaveX"
              >
                <span className="text-[11px] font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                  {on.pillars.enclavex.ringTitle}
                </span>
              </button>

              {/* Inner Core: CovarPri (Tensors & Weights) */}
              <button
                onClick={() => setActivePillar('covarpri')}
                className={`absolute inset-18 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer p-4 text-center ${
                  activePillar === 'covarpri' 
                    ? 'border-emerald-400 bg-emerald-500/20 shadow-[0_0_35px_rgba(16,185,129,0.35)]' 
                    : 'border-emerald-500/40 bg-emerald-950/20 hover:border-emerald-400'
                }`}
                title="Layer 3: CovarPri"
              >
                <div>
                  <div className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider">
                    {on.pillars.covarpri.ringTitle}
                  </div>
                  <div className="text-[10px] text-slate-300 font-mono mt-0.5">
                    Math Sovereignty
                  </div>
                </div>
              </button>

            </div>

            <p className="text-xs text-slate-400 font-mono mt-4">
              {on.radarHint}
            </p>
          </div>

          {/* Right: Pillar Tabs & High-Level Summary */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Tab Buttons */}
            <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-[#121722] border border-[#1E2638]">
              <button
                onClick={() => setActivePillar('trustgate')}
                className={`py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activePillar === 'trustgate' 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Shield className="w-4 h-4 text-amber-400" />
                <span>{on.pillars.trustgate.tabTitle}</span>
              </button>

              <button
                onClick={() => setActivePillar('enclavex')}
                className={`py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activePillar === 'enclavex' 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>{on.pillars.enclavex.tabTitle}</span>
              </button>

              <button
                onClick={() => setActivePillar('covarpri')}
                className={`py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activePillar === 'covarpri' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>{on.pillars.covarpri.tabTitle}</span>
              </button>
            </div>

            {/* Active Pillar Card */}
            <div className="p-8 rounded-3xl bg-[#121722]/80 border border-[#1E2638] space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  {activePillar === 'trustgate' && <Shield className="w-4 h-4 text-amber-400" />}
                  {activePillar === 'enclavex' && <Cpu className="w-4 h-4 text-cyan-400" />}
                  {activePillar === 'covarpri' && <Lock className="w-4 h-4 text-emerald-400" />}
                  <span className={activePillar === 'trustgate' ? 'text-amber-400' : activePillar === 'enclavex' ? 'text-cyan-400' : 'text-emerald-400'}>
                    {currentPillarData.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentPillarData.specTitle}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {currentPillarData.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  {currentPillarData.specs.map((s, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#0B0E14] border border-[#1E2638] flex justify-between items-center">
                      <span className="text-slate-400">{s.label}</span>
                      <span className="text-emerald-300 font-bold">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Simulator */}
        <div className="p-8 rounded-3xl bg-[#121722]/80 border border-[#1E2638] max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#1E2638]">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">{on.interactiveSim.testingScenarios}</div>
              <h4 className="text-lg font-bold text-white">{on.interactiveSim.title}</h4>
            </div>
            
            <div className="flex items-center gap-1.5 p-1 bg-[#0B0E14] rounded-xl border border-[#1E2638] flex-wrap">
              <button
                onClick={() => handleTestFirewall('transfer_funds')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                  firewallTestPrompt === 'transfer_funds' 
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {on.interactiveSim.scenarioMalicious}
              </button>
              <button
                onClick={() => handleTestFirewall('read_docs')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                  firewallTestPrompt === 'read_docs' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {on.interactiveSim.scenarioBenign}
              </button>
              <button
                onClick={() => handleTestFirewall('dump_memory')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                  firewallTestPrompt === 'dump_memory' 
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {on.interactiveSim.scenarioPromptInjection}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 items-center">
            
            <div className="p-4 rounded-xl bg-[#0B0E14] border border-[#1E2638] font-mono text-xs space-y-2">
              <div className="text-slate-400 flex items-center justify-between">
                <span>{on.interactiveSim.promptInputLabel}</span>
                <span className="text-cyan-400 text-[11px]">{on.interactiveSim.logTitle}</span>
              </div>
              <p className="text-slate-200 bg-[#121722] p-2.5 rounded border border-slate-800 break-all">
                {testResult.action}
              </p>
              <div className="text-[11px] text-slate-500 flex items-center justify-between">
                <span>{on.interactiveSim.gate1}</span>
                <span className="text-amber-400">{testResult.latency} ms</span>
              </div>
            </div>

            <div className={`p-4 rounded-xl border text-xs font-mono space-y-2 ${
              testResult.verdict === 'APPROVED' 
                ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300' 
                : 'bg-rose-950/20 border-rose-500/40 text-rose-300'
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-bold tracking-wider">VERDICT:</span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1 ${
                  testResult.verdict === 'APPROVED' 
                    ? 'bg-emerald-500/30 text-emerald-200' 
                    : 'bg-rose-500/30 text-rose-200'
                }`}>
                  {testResult.verdict === 'APPROVED' ? (
                    <><CheckCircle2 className="w-3.5 h-3.5" /> APPROVED</>
                  ) : (
                    <><ShieldAlert className="w-3.5 h-3.5" /> REJECTED</>
                  )}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed">
                {testResult.reason}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
