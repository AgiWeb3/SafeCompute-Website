import React, { useState } from 'react';
import { Cloud, Server, Copy, Check } from 'lucide-react';
import { DeploymentModel } from '../types';
import { useLanguage } from '../i18n';

export const DeveloperExperience: React.FC = () => {
  const [deliveryMode, setDeliveryMode] = useState<DeploymentModel>('saas');
  const [codeLanguage, setCodeLanguage] = useState<'python' | 'typescript' | 'langchain'>('python');
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  const dev = t.developerExperience;

  const codeSnippets = {
    python: `# 1. Install SafeCompute Sovereign SDK
# pip install safecompute

import safecompute
from anthropic import Anthropic  # Or OpenAI, DeepSeek, vLLM

# Wrap your autonomous agent with mathematical sovereignty
client = safecompute.wrap(
    agent_id="enterprise-legal-auditor",
    sovereignty_tier="covarpri_plus_tee",
    action_firewall=True,
    target_cluster="https://vllm.internal.corp"
)

# Run full-permission agent execution
# Prompts are encrypted locally; cloud GPU processes zero plaintext
response = client.run(
    task="Review M&A indemnity liabilities in Exhibit 4B",
    tools=["dms_search", "sec_edgar", "redline_generator"]
)

print(response.attestation_hash)
# -> "0x89f2a71b... [Verified SEV-SNP + CovarPri Invariant]"`,

    typescript: `// 1. Install SafeCompute Node SDK
// npm install @safecompute/sdk

import { wrapAgent, TrustGateMode } from '@safecompute/sdk';
import { AgentRunner } from '@crewai/core';

// One-line sovereign wrapper
const sovereignAgent = wrapAgent(new AgentRunner(), {
  trustGate: TrustGateMode.STRICT_RBAC,
  algebraicObfuscation: true,
  enclaveAttestation: 'require-hw-proof',
  cloudEndpoint: process.env.UNTRUSTED_CLOUD_URL
});

// Execute agent with zero-plaintext guarantees
const result = await sovereignAgent.dispatch({
  intent: 'Analyze confidential customer telemetry',
  permittedTools: ['database_query', 'metrics_aggregate']
});

console.log(result.securityAudit);`,

    langchain: `# SafeCompute LangChain / LlamaIndex Integration
from langchain.agents import initialize_agent, AgentType
from safecompute.adapters.langchain import SovereignAgentExecutor

# Native LangChain Agent wrapper
raw_agent = initialize_agent(tools, llm, agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION)

# Enforce SafeCompute Action Firewall & CovarPri Tensor Obfuscation
sovereign_executor = SovereignAgentExecutor.from_agent(
    raw_agent,
    policy_engine="strict-law-firm-nda",
    audit_log_stream=True
)

output = sovereign_executor.invoke({"input": "Perform discovery on unreleased patents"})`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[codeLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developer" className="py-24 bg-[#0B0E14] relative border-t border-[#1E2638]">
      {/* Background soft glow */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            {dev.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            {dev.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
            {dev.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Dual Delivery on Left, Code Editor on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Dual Delivery Toggle & Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Delivery Switcher Cards */}
            <div className="space-y-4">
              
              {/* Option A: SafeCompute Gateway (SaaS) */}
              <div 
                onClick={() => setDeliveryMode('saas')}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  deliveryMode === 'saas' 
                    ? 'bg-[#151C2C] border-cyan-400/80 shadow-[0_0_25px_rgba(0,242,254,0.15)] ring-1 ring-cyan-400/50' 
                    : 'bg-[#121722]/80 border-[#1E2638] hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{dev.deliveryModes.saas.title}</h4>
                      <span className="text-xs text-slate-400 font-mono">{dev.deliveryModes.saas.badge}</span>
                    </div>
                  </div>
                  {deliveryMode === 'saas' && (
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  )}
                </div>

                <p className="text-xs text-slate-300 mb-3">{dev.deliveryModes.saas.desc}</p>
                
                <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                  {dev.activeModeDetails.saasPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Option B: SafeCompute Appliance (Hardware) */}
              <div 
                onClick={() => setDeliveryMode('appliance')}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  deliveryMode === 'appliance' 
                    ? 'bg-[#12221E] border-emerald-400/80 shadow-[0_0_25px_rgba(16,185,129,0.15)] ring-1 ring-emerald-400/50' 
                    : 'bg-[#121722]/80 border-[#1E2638] hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{dev.deliveryModes.appliance.title}</h4>
                      <span className="text-xs text-slate-400 font-mono">{dev.deliveryModes.appliance.badge}</span>
                    </div>
                  </div>
                  {deliveryMode === 'appliance' && (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  )}
                </div>

                <p className="text-xs text-slate-300 mb-3">{dev.deliveryModes.appliance.desc}</p>

                <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
                  {dev.activeModeDetails.appliancePoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Quick spec badge */}
            <div className="p-4 rounded-xl bg-[#121722]/60 border border-[#1E2638] text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>ZERO INVASIVE CODE CHANGES</span>
              <span className="text-emerald-400">100% vLLM / SGLang Drop-in</span>
            </div>

          </div>

          {/* Right Column: Dark Code Editor */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0E131E] border border-[#1E2638] overflow-hidden flex flex-col shadow-2xl">
            
            {/* Window Top Bar with Language Tabs */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#080B10] border-b border-[#1E2638]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                  safecompute_agent_wrap.{codeLanguage === 'python' ? 'py' : codeLanguage === 'typescript' ? 'ts' : 'py'}
                </span>
              </div>

              {/* Language Selection Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCodeLanguage('python')}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                    codeLanguage === 'python' ? 'bg-[#1E2638] text-cyan-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Python
                </button>
                <button
                  onClick={() => setCodeLanguage('typescript')}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                    codeLanguage === 'typescript' ? 'bg-[#1E2638] text-cyan-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  TypeScript
                </button>
                <button
                  onClick={() => setCodeLanguage('langchain')}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                    codeLanguage === 'langchain' ? 'bg-[#1E2638] text-cyan-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  LangChain
                </button>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="ml-2 p-1.5 rounded bg-[#121722] hover:bg-slate-700 text-slate-300 hover:text-white border border-[#1E2638] transition-all cursor-pointer"
                  title="Copy code"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 flex-1 font-mono text-xs overflow-x-auto text-slate-300 leading-relaxed bg-[#0E131E]">
              <pre className="whitespace-pre">
                <code>{codeSnippets[codeLanguage]}</code>
              </pre>
            </div>

            {/* Terminal Output Footer */}
            <div className="px-5 py-3 bg-[#080B10]/80 border-t border-[#1E2638] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-3.5 h-3.5" />
                <span>Zero Plaintext Verified · TrustGate Active</span>
              </span>
              <span className="text-slate-500">Latency: +1.2ms (99.8% retained)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
