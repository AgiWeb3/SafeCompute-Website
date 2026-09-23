import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight, 
  AlertTriangle, 
  Lock, 
  Eye, 
  EyeOff, 
  RefreshCw, 
  Zap, 
  Scale, 
  Cpu, 
  FileText,
  Radio,
  Server
} from 'lucide-react';
import { useLanguage } from '../i18n';

interface CaseScenario {
  id: string;
  titleZh: string;
  titleEn: string;
  categoryZh: string;
  categoryEn: string;
  rawPlaintext: string;
  obfuscatedTensor: string;
  traditionalLeak: string;
  safeComputeResult: string;
  legalImplicationZh: string;
  legalImplicationEn: string;
}

const DEMO_CASES: CaseScenario[] = [
  {
    id: 'legal-ma',
    titleZh: '50 亿美元跨国标的并购协议谈判清单',
    titleEn: '$5.0B Cross-Border M&A Purchase Negotiation Schedule',
    categoryZh: '律所非诉 / 律师客户特免权 (Privilege)',
    categoryEn: 'Law Firm / Attorney-Client Privilege',
    rawPlaintext: `CONFIDENTIAL M&A DISCOVERY SCHEDULE - TARGET CODE: "PHOENIX-BETA"
Acquiring Entity: Apex Global Holdings (SG)
Target Entity: BioGen Horizon Ltd (HK/US Dual Listed)
Key Deal Point: Section 4.2 Liability Cap is capped at $450,000,000. 
Secret Walk-away Price: Any offer above $38.50/share must be rejected by Lead Partner.
Antitrust Risk Exposure: High risk in DG COMP & SAMR review for EU/Asia distribution overlap.`,
    obfuscatedTensor: `[COVARPRI MONOMIAL ORTHOGONAL PROJECTION // SEED: 0x8F94D2...]:
T_proj[0..63] = [-0.8491, +0.2104, -0.9982, +0.0134, -0.4519, +0.7781, -0.3129, +0.0094...]
T_proj[64..127] = [+0.1189, -0.6652, +0.4419, -0.2289, +0.9810, -0.1983, +0.0041, -0.8172...]
Residual Invariance: ||Q'K'ᵀ - QKᵀ|| = 4.21e-8 (Information Entropy: 7.996 bits/byte)
Zero-Knowledge Hash: 0x4e9c7b812f10aa982c730e1599d14a51b9e2883f80c6114`,
    traditionalLeak: `[PACKET SNIFFER TRACE // TLS PROXY DUMP]
HOST: api.openai.com | STATUS: 200 OK | LOGGED IN CLOUD REPOSITORY
REQUEST BODY (PLAINTEXT EXPOSED TO CLOUD RAM & OPERATORS):
"Acquiring Entity: Apex Global Holdings (SG)... Target: BioGen Horizon Ltd... Walk-away Price: $38.50/share... Section 4.2 Liability Cap: $450M..."
⚠️ 司法判定结果：
1. 商业底牌（最高受让价$38.50）在公有云机房明文驻留并进入模型训练/推理缓存；
2. 构成对第三方的自愿披露，根据美联邦证据法 FRE 502，判定放弃律师-客户保密特权；
3. 遭遇法庭传票时云厂商可直接调取明文底稿，律所面临重大失职赔偿诉讼。`,
    safeComputeResult: `[SAFECOMPUTE ENCLAVE INFERENCE // END-TO-END CONFIDENTIALITY]
HOST: sovereign.safecompute.internal | VERIFIED HARDWARE ATTESTATION: PASS
CLOUD OBSERVABILITY:
In-transit payload: 100% Blind high-dimensional orthogonal tensor (Zero text tokens)
Enclave execution: Memory ciphertext blind reasoning with hardware encryption
Client-side restitution: Clean legal discrepancy checklist decrypted only in local KMS.
✅ 司法合规判定：
1. 0 字节明文离开客户专有边界，无任何第三方知悉真实标的与商业底线；
2. 满足 ABA Model Rule 1.6 合理保密注意义务与 FRE 502 特免权不可撤销标准；
3. 出具法院级密码学硬件度量存证凭证（Judicial Proof of Non-Exposure）。`,
    legalImplicationZh: '传统模式直接导致客户核心底价曝光与特权永久丧失；SafeCompute 阻断明文出境，100% 捍卫司法特权。',
    legalImplicationEn: 'Direct cloud leads to waiver of privilege & deal leakage; SafeCompute keeps 0 bytes plaintexts surrendered.'
  },
  {
    id: 'finance-quant',
    titleZh: '千亿级高频量化基金专有多因子回测权重',
    titleEn: 'Proprietary Alpha Multi-Factor Backtest Weights ($20B AUM)',
    categoryZh: '对冲基金 / 核心知识产权 (IP)',
    categoryEn: 'Quantitative Finance / Core IP',
    rawPlaintext: `ALPHA SIGNAL REBALANCING MATRIX v4.8 [HIGHLY RESTRICTED]
Factor 1: Order-Book Imbalance Delta (Weight: +0.3418)
Factor 2: Cross-Exchange Crypto-Fiat Spread Arbitrage (Weight: -0.1982)
Execution Latency Gate: Drop trade if tick delta > 1.2ms on CME Aurora
Risk Constraint: Max draw-down parameter set strictly to 2.4% before circuit breaker.`,
    obfuscatedTensor: `[COVARPRI SPECTRAL DECOMPOSITION // LATENCY OVERHEAD: 18.2ms]:
Eigenvalues λ[1..16] = [14.281, 9.841, 6.102, 3.882, 2.119, 1.450, 0.982, 0.441...]
Perturbation Matrix: Randomized Unitary Transform U · S · Vᵀ (Orthogonal Preservation)
Information Leakage: Mutual Information I(X; Z) < 0.0001 (Negligible Bound)
Telemetry Signature: sha256:d88921cf0e998b4c37e5...`,
    traditionalLeak: `[PUBLIC CLOUD INFERENCE LOG // INTERNAL ADMIN VISIBLE]
HOST: api.anthropic.com / api.openai.com
PROMPT STORED IN HOSTING PROVIDER LOGS:
"Factor 1: Order-Book Imbalance Delta (Weight: +0.3418)... Factor 2: Cross-Exchange..."
⚠️ 商业风险评估：
1. 价值数亿美元的核心阿尔法策略明文沉淀于外部 GPU 集群；
2. 受到云厂商员工窥视、内鬼窃取、或被后续基础大模型提取记忆攻击（Extraction Attack）；
3. 违反量化基金 LP 托管合规审查，可能面临投资人撤资。`,
    safeComputeResult: `[SAFECOMPUTE BLIND COGNITION // ZERO STRATEGY LEAK]
HOST: isolated-mesh.safecompute.internal
TENSOR METRIC:
Cloud Provider sees only randomized mathematical noise with zero financial semantics.
Model delivers optimized execution scheduling code without knowing what factors represent.
✅ 资产安全判定：
1. 基金独门阿尔法因子权重绝不泄露，数学证明互信息量 I(X;Z) 趋近于零；
2. 满足 SEC / HK SFC 对对冲基金算法知识产权保护的最高等级审计标准；
3. 保留大模型顶尖代码生成与调度能力，速度开销低于 20ms。`,
    legalImplicationZh: '防止核心算法因子被云端或提取攻击克隆，守住百亿资产的独家护城河。',
    legalImplicationEn: 'Guarantees proprietary alpha factors are mathematically hidden from cloud telemetry and extraction.'
  }
];

export const InteractiveComparisonDemo: React.FC = () => {
  const { language } = useLanguage();
  const isZh = language.startsWith('zh');
  const [activeCase, setActiveCase] = useState<CaseScenario>(DEMO_CASES[0]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationProgress, setSimulationProgress] = useState<number>(100);

  const handleSwitchCase = (c: CaseScenario) => {
    setActiveCase(c);
    setIsSimulating(true);
    setSimulationProgress(0);
    const interval = setInterval(() => {
      setSimulationProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          return 100;
        }
        return prev + 25;
      });
    }, 120);
  };

  return (
    <div className="rounded-3xl bg-[#090D18] border border-blue-900/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-blue-900/30">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-xs font-mono text-sky-300 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <Radio className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>{isZh ? '真实抓包与法庭对抗模拟' : 'LIVE PACKET & JURISDICTIONAL SIMULATOR'}</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white font-display">
            {isZh ? '传统直连云端 vs SafeCompute 保护模式 双轨实证' : 'Direct Cloud vs. SafeCompute Dual-Stream Verification'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            {isZh 
              ? '观察同一份高保密商业输入在网络线缆（Wire）、云端内存（RAM）与法庭抗辩（Court）中的两种截然不同命运。' 
              : 'Observe the divergence of identical sensitive data on the wire, in cloud memory, and during judicial discovery.'}
          </p>
        </div>

        {/* Case Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {DEMO_CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => handleSwitchCase(c)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeCase.id === c.id
                  ? 'bg-blue-600 text-white font-bold shadow-[0_0_18px_rgba(37,99,235,0.5)] border border-blue-400/60'
                  : 'bg-[#0E1528] text-slate-400 hover:text-white border border-blue-900/30'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isZh ? c.titleZh.split(' ')[0] : c.titleEn.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scenario Title Banner */}
      <div className="my-6 p-4 rounded-2xl bg-[#0C1222] border border-blue-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <Scale className="w-4 h-4 text-sky-400" />
          <span className="text-white font-bold">{isZh ? activeCase.titleZh : activeCase.titleEn}</span>
        </div>
        <div className="text-sky-300/80">
          <span>{isZh ? activeCase.categoryZh : activeCase.categoryEn}</span>
        </div>
      </div>

      {/* Main Dual-Column Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* LEFT COLUMN: Traditional Direct Cloud (Flawed) */}
        <div className="rounded-2xl bg-[#110D12]/90 border-2 border-red-500/30 p-6 flex flex-col justify-between relative shadow-xl">
          <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-red-950 border border-red-500/40 text-[11px] font-mono text-red-300 font-bold flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
            <span>{isZh ? '传统直连云端 (传统 API / Copilot)' : 'TRADITIONAL DIRECT CLOUD'}</span>
          </div>

          <div>
            {/* Plaintext Wire Tap */}
            <div className="mt-2 mb-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                <span>网络与云端抓包明文 (Raw Wire Dump)</span>
                <span className="text-red-400 font-bold flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {isZh ? '完全暴露' : 'Full Exposure'}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#090507] border border-red-900/30 font-mono text-[11px] text-red-300/90 leading-relaxed overflow-x-auto whitespace-pre-wrap max-h-48">
                {activeCase.rawPlaintext}
              </div>
            </div>

            {/* Verdict Box */}
            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 font-mono">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>{isZh ? '司法特权与资产泄密判定：' : 'Privilege & IP Leakage Verdict:'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">
                {activeCase.traditionalLeak}
              </p>
            </div>
          </div>

          {/* Bottom Stamp */}
          <div className="mt-6 pt-4 border-t border-red-900/30 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">STATUS:</span>
            <span className="text-red-400 font-bold">
              {isZh ? '❌ 特免权丧失 / 存在长臂管辖暴露' : '❌ PRIVILEGE WAIVED / SUBPOENA RISK'}
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: SafeCompute Sovereign Mode (Bulletproof) */}
        <div className="rounded-2xl bg-[#081220]/90 border-2 border-sky-400/50 p-6 flex flex-col justify-between relative shadow-[0_0_35px_rgba(56,189,248,0.15)]">
          <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-blue-950 border border-sky-400 text-[11px] font-mono text-sky-300 font-bold flex items-center gap-1.5 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>{isZh ? 'SafeCompute 主权计算模式' : 'SAFECOMPUTE SOVEREIGN COMPUTE'}</span>
          </div>

          <div>
            {/* Obfuscated Wire Tap */}
            <div className="mt-2 mb-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                <span>网络与云端抓包密态 (CovarPri Algebraic Wire)</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <EyeOff className="w-3 h-3" />
                  {isZh ? '0 字节明文出境' : '0 Bytes Plaintext'}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#040810] border border-blue-900/40 font-mono text-[11px] text-sky-300/90 leading-relaxed overflow-x-auto whitespace-pre-wrap max-h-48">
                {activeCase.obfuscatedTensor}
              </div>
            </div>

            {/* Verdict Box */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-sky-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{isZh ? '司法特权与技术合规判定：' : 'Privilege & Compliance Verification:'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">
                {activeCase.safeComputeResult}
              </p>
            </div>
          </div>

          {/* Bottom Stamp */}
          <div className="mt-6 pt-4 border-t border-blue-900/30 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">STATUS:</span>
            <span className="text-emerald-400 font-bold">
              {isZh ? '✅ 100% 保留保密特权 / 司法级存证' : '✅ 100% PRIVILEGE INTACT / AUDIT READY'}
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-8 pt-6 border-t border-blue-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2 text-white">
          <Zap className="w-4 h-4 text-sky-400" />
          <span>{isZh ? activeCase.legalImplicationZh : activeCase.legalImplicationEn}</span>
        </div>
        <div className="text-sky-400">
          <span>{isZh ? '延迟开销 < 20ms · 智能无损' : 'Latency < 20ms · 100% Intelligence Retained'}</span>
        </div>
      </div>
    </div>
  );
};
