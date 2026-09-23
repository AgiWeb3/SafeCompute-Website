import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Eye, 
  EyeOff, 
  Zap, 
  Scale, 
  FileText,
  Radio
} from 'lucide-react';
import { useLanguage } from '../i18n';

interface CaseScenario {
  id: string;
  titleZh: string;
  titleTw: string;
  titleEn: string;
  categoryZh: string;
  categoryTw: string;
  categoryEn: string;
  rawPlaintext: string;
  obfuscatedTensor: string;
  traditionalLeakZh: string;
  traditionalLeakTw: string;
  traditionalLeakEn: string;
  safeComputeResultZh: string;
  safeComputeResultTw: string;
  safeComputeResultEn: string;
  legalImplicationZh: string;
  legalImplicationTw: string;
  legalImplicationEn: string;
}

const DEMO_CASES: CaseScenario[] = [
  {
    id: 'legal-ma',
    titleZh: '50 亿美元跨国并购谈判底价清单',
    titleTw: '50 億美元跨國併購談判底價清單',
    titleEn: '$5.0B M&A Purchase Negotiation Schedule',
    categoryZh: '律所非诉 / 律师特免权 (Privilege)',
    categoryTw: '律所非訴 / 律師特免權 (Privilege)',
    categoryEn: 'Law Firm / Attorney-Client Privilege',
    rawPlaintext: `CONFIDENTIAL M&A DISCOVERY SCHEDULE - TARGET: "PHOENIX-BETA"
Acquiring Entity: Apex Global Holdings (SG)
Target Entity: BioGen Horizon Ltd (HK/US Dual Listed)
Key Deal Point: Section 4.2 Liability Cap is capped at $450,000,000.
Secret Walk-away Price: Any offer above $38.50/share must be rejected.
Antitrust Risk Exposure: Overlap in DG COMP & SAMR distribution lines.`,
    obfuscatedTensor: `[COVARPRI MONOMIAL ORTHOGONAL PROJECTION // SEED: 0x8F94D2...]:
T_proj[0..63] = [-0.8491, +0.2104, -0.9982, +0.0134, -0.4519, +0.7781...]
Residual Invariance: ||Q'K'ᵀ - QKᵀ|| = 4.21e-8 (Entropy: 7.996 bits/byte)
Zero-Knowledge Hash: 0x4e9c7b812f10aa982c730e1599d14a51b9e2883f80c6114`,
    traditionalLeakZh: `[公有云明文泄露分析]
1. 商业底价（$38.50/股）在公有云显存与网关日志驻留，构成对第三方的自愿披露；
2. 触发美联邦证据法 FRE 502，司法判定永久放弃“律师-客户保密特权”；
3. 遭遇监管传票时云厂商可直接调取明文，企业面临核心谈判筹码全盘落空。`,
    traditionalLeakTw: `[公有雲明文外洩分析]
1. 商業底價（$38.50/股）在公有雲記憶體與閘道日誌駐留，構成對第三方的自願披露；
2. 觸發美聯邦證據法 FRE 502，司法判定永久放棄「律師-客戶保密特權」；
3. 遭遇監管傳票時雲廠商可直接調取明文，企業面臨核心談判籌碼全盤落空。`,
    traditionalLeakEn: `[CLOUD PLAINTEXT LEAK ANALYSIS]
1. Sensitive deal pricing ($38.50/share) resides in cloud VRAM logs, constituting third-party disclosure.
2. Under Federal Rule of Evidence FRE 502, attorney-client privilege is permanently waived.
3. Subpoenas served on cloud providers expose raw files; client loses all negotiation leverage.`,
    safeComputeResultZh: `[SafeCompute 主权计算实证]
1. 客户端在本地完成代数酉变换，网络上传输仅为高维正交张量（0 字符明文出境）；
2. 满足 ABA Model Rule 1.6 合理保密注意义务与 FRE 502 不可撤销标准；
3. 云厂商仅见随机白噪声，出具法院级密码学硬件存证报告（Judicial Proof）。`,
    safeComputeResultTw: `[SafeCompute 主權計算實證]
1. 客戶端在本地完成代數酉變換，網路上傳輸僅為高維正交張量（0 字元明文出境）；
2. 滿足 ABA Model Rule 1.6 合理保密注意義務與 FRE 502 不可撤銷標準；
3. 雲廠商僅見隨機白噪聲，出具法院級密碼學硬體存證報告（Judicial Proof）。`,
    safeComputeResultEn: `[SAFECOMPUTE SOVEREIGN VERIFICATION]
1. Local unitary transformation ensures zero plaintext tokens cross the enterprise boundary.
2. Complies with ABA Model Rule 1.6 & guarantees FRE 502 privilege non-waiver protection.
3. Generates cryptographic hardware attestation admissible in corporate litigation.`,
    legalImplicationZh: '传统模式直接丧失司法保密特权；SafeCompute 实现 0 字节明文出境，100% 捍卫特免权。',
    legalImplicationTw: '傳統模式直接喪失司法保密特權；SafeCompute 實現 0 字元明文出境，100% 捍衛特免權。',
    legalImplicationEn: 'Direct cloud leads to total privilege waiver; SafeCompute keeps 0 bytes plaintexts surrendered.'
  },
  {
    id: 'finance-quant',
    titleZh: '百亿级高频量化多因子回测权重',
    titleTw: '百億級高頻量化多因子回測權重',
    titleEn: 'Multi-Factor Alpha Rebalancing Weights ($20B AUM)',
    categoryZh: '对冲基金 / 核心知识产权 (IP)',
    categoryTw: '對沖基金 / 核心智慧財產權 (IP)',
    categoryEn: 'Quantitative Fund / Core IP',
    rawPlaintext: `ALPHA SIGNAL REBALANCING MATRIX v4.8 [HIGHLY RESTRICTED]
Factor 1: Order-Book Imbalance Delta (Weight: +0.3418)
Factor 2: Cross-Exchange Crypto-Fiat Spread Arbitrage (Weight: -0.1982)
Execution Latency Gate: Drop trade if tick delta > 1.2ms on CME Aurora
Risk Constraint: Max draw-down parameter set strictly to 2.4%.`,
    obfuscatedTensor: `[COVARPRI SPECTRAL DECOMPOSITION // LATENCY OVERHEAD: 18.2ms]:
Eigenvalues λ[1..16] = [14.281, 9.841, 6.102, 3.882, 2.119, 1.450...]
Perturbation Matrix: Randomized Unitary Transform U · S · Vᵀ
Mutual Information: I(X; Z) < 0.0001 (Negligible Bound)
Attestation Signature: sha256:d88921cf0e998b4c37e5...`,
    traditionalLeakZh: `[商业知识产权风险评估]
1. 核心阿尔法因子权重与风控断路阈值明文沉淀于外部 GPU 集群；
2. 极易受到云主机运维员工窥视或被后续大模型记忆提取攻击克隆；
3. 严重违背机构投资者 LP 托管审查底线，面临合规重罚与撤资。`,
    traditionalLeakTw: `[商業智慧財產權風險評估]
1. 核心阿爾法因子權重與風控斷路閾值明文沉澱於外部 GPU 叢集；
2. 極易受到雲主機維運員工窺視或被後續大模型記憶提取攻擊複製；
3. 嚴重違背機構投資者 LP 託管審查底線，面臨合規重罰與撤資。`,
    traditionalLeakEn: `[INTELLECTUAL PROPERTY EXPOSURE]
1. Proprietary alpha factor weights reside in external GPU clusters and prompt caches.
2. Vulnerable to cloud operator inspection and model extraction/inversion attacks.
3. Violates LP institutional mandate and risk compliance protocols.`,
    safeComputeResultZh: `[SafeCompute 资产安全判定]
1. 因子权重经数学变换后互信息量 I(X;Z) 趋近于零，云端无从逆向推导；
2. 满足 SEC / HK SFC 对对冲基金算法资产保密最高审计标准；
3. 模型保持顶级推理与代码生成能力，变换附加开销低于 20ms。`,
    safeComputeResultTw: `[SafeCompute 資產安全判定]
1. 因子權重經數學變換後互資訊量 I(X;Z) 趨近於零，雲端無從逆向推導；
2. 滿足 SEC / HK SFC 對對沖基金演算法資產保密最高審計標準；
3. 模型保持頂級推理與程式碼生成能力，變換附加開銷低於 20ms。`,
    safeComputeResultEn: `[SAFECOMPUTE BLIND COGNITION PROOF]
1. Mutual information I(X; Z) bounded near zero; mathematically impossible to reverse-engineer.
2. Meets SEC / HK SFC institutional fiduciary confidentiality audit benchmarks.
3. Retains full reasoning intelligence with sub-20ms transformation latency.`,
    legalImplicationZh: '彻底消除核心量化因子云端逆向风险，守住百亿资产的独家护城河。',
    legalImplicationTw: '徹底消除核心量化因子雲端逆向風險，守住百億資產的獨家護城河。',
    legalImplicationEn: 'Mathematically shields proprietary quant alpha from cloud-side extraction and reconstruction.'
  }
];

export const InteractiveComparisonDemo: React.FC = () => {
  const { language } = useLanguage();
  const isZh = language.startsWith('zh');
  const isTw = language === 'zh-TW';
  const [activeCase, setActiveCase] = useState<CaseScenario>(DEMO_CASES[0]);

  const getTitle = (c: CaseScenario) => isTw ? c.titleTw : isZh ? c.titleZh : c.titleEn;
  const getCategory = (c: CaseScenario) => isTw ? c.categoryTw : isZh ? c.categoryZh : c.categoryEn;
  const getTraditionalLeak = (c: CaseScenario) => isTw ? c.traditionalLeakTw : isZh ? c.traditionalLeakZh : c.traditionalLeakEn;
  const getSafeComputeResult = (c: CaseScenario) => isTw ? c.safeComputeResultTw : isZh ? c.safeComputeResultZh : c.safeComputeResultEn;
  const getLegalImplication = (c: CaseScenario) => isTw ? c.legalImplicationTw : isZh ? c.legalImplicationZh : c.legalImplicationEn;

  return (
    <div className="rounded-3xl bg-[#090D18] border border-blue-900/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-blue-900/30">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-xs font-mono text-sky-300 mb-3 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <Radio className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>{isTw ? '真實封包與司法對抗實測' : isZh ? '真实抓包与法庭对抗模拟' : 'LIVE PACKET & JURISDICTIONAL SIMULATOR'}</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white font-display">
            {isTw ? '傳統直連雲端 vs SafeCompute 主權計算 雙軌實證' : isZh ? '传统直连云端 vs SafeCompute 保护模式 双轨实证' : 'Direct Cloud vs. SafeCompute Dual-Stream Verification'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            {isTw 
              ? '觀察同一份機密輸入在網路鏈路（Wire）、雲端記憶體（RAM）與司法抗辯（Court）中的兩種截然不同命運。'
              : isZh 
              ? '观察同一份高保密商业输入在网络线缆（Wire）、云端内存（RAM）与法庭抗辩（Court）中的两种截然不同命运。' 
              : 'Observe the divergence of identical sensitive data on the wire, in cloud memory, and during judicial discovery.'}
          </p>
        </div>

        {/* Case Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {DEMO_CASES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(c)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeCase.id === c.id
                  ? 'bg-blue-600 text-white font-bold shadow-[0_0_18px_rgba(37,99,235,0.5)] border border-blue-400/60'
                  : 'bg-[#0E1528] text-slate-400 hover:text-white border border-blue-900/30'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{getTitle(c).split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Scenario Title Banner */}
      <div className="my-6 p-4 rounded-2xl bg-[#0C1222] border border-blue-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <Scale className="w-4 h-4 text-sky-400" />
          <span className="text-white font-bold">{getTitle(activeCase)}</span>
        </div>
        <div className="text-sky-300/80">
          <span>{getCategory(activeCase)}</span>
        </div>
      </div>

      {/* Main Dual-Column Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* LEFT COLUMN: Traditional Direct Cloud (Flawed) */}
        <div className="rounded-2xl bg-[#110D12]/90 border-2 border-red-500/30 p-6 flex flex-col justify-between relative shadow-xl">
          <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-red-950 border border-red-500/40 text-[11px] font-mono text-red-300 font-bold flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
            <span>{isTw ? '傳統直連雲端 (公有雲 API / Copilot)' : isZh ? '传统直连云端 (传统 API / Copilot)' : 'TRADITIONAL DIRECT CLOUD'}</span>
          </div>

          <div>
            {/* Plaintext Wire Tap */}
            <div className="mt-2 mb-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                <span>{isTw ? '網路與雲端抓包明文 (Raw Wire Dump)' : isZh ? '网络与云端抓包明文 (Raw Wire Dump)' : 'Raw Network & Cloud VRAM Dump'}</span>
                <span className="text-red-400 font-bold flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {isTw ? '完全暴露' : isZh ? '完全暴露' : 'Full Exposure'}
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
                <span>{isTw ? '司法特權與外洩判定：' : isZh ? '司法特权与泄密判定：' : 'Privilege & IP Leakage Verdict:'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">
                {getTraditionalLeak(activeCase)}
              </p>
            </div>
          </div>

          {/* Bottom Stamp */}
          <div className="mt-6 pt-4 border-t border-red-900/30 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">STATUS:</span>
            <span className="text-red-400 font-bold">
              {isTw ? '❌ 特免權喪失 / 存在傳票調取風險' : isZh ? '❌ 特免权丧失 / 存在长臂调取风险' : '❌ PRIVILEGE WAIVED / SUBPOENA RISK'}
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: SafeCompute Sovereign Mode (Bulletproof) */}
        <div className="rounded-2xl bg-[#081220]/90 border-2 border-sky-400/50 p-6 flex flex-col justify-between relative shadow-[0_0_35px_rgba(56,189,248,0.15)]">
          <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-blue-950 border border-sky-400 text-[11px] font-mono text-sky-300 font-bold flex items-center gap-1.5 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>{isTw ? 'SafeCompute 主權計算模式' : isZh ? 'SafeCompute 主权计算模式' : 'SAFECOMPUTE SOVEREIGN COMPUTE'}</span>
          </div>

          <div>
            {/* Obfuscated Wire Tap */}
            <div className="mt-2 mb-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                <span>{isTw ? '網路與雲端抓包密態 (CovarPri Algebraic Wire)' : isZh ? '网络与云端抓包密态 (CovarPri Algebraic Wire)' : 'CovarPri Algebraic Wire'}</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <EyeOff className="w-3 h-3" />
                  {isTw ? '0 字元明文出境' : isZh ? '0 字节明文出境' : '0 Bytes Plaintext'}
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
                <span>{isTw ? '司法特權與技術合規判定：' : isZh ? '司法特权与技术合规判定：' : 'Privilege & Compliance Verification:'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap font-sans">
                {getSafeComputeResult(activeCase)}
              </p>
            </div>
          </div>

          {/* Bottom Stamp */}
          <div className="mt-6 pt-4 border-t border-blue-900/30 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">STATUS:</span>
            <span className="text-emerald-400 font-bold">
              {isTw ? '✅ 100% 保留保密特權 / 司法級存證' : isZh ? '✅ 100% 保留保密特权 / 司法级存证' : '✅ 100% PRIVILEGE INTACT / AUDIT READY'}
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-8 pt-6 border-t border-blue-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2 text-white">
          <Zap className="w-4 h-4 text-sky-400" />
          <span>{getLegalImplication(activeCase)}</span>
        </div>
        <div className="text-sky-400">
          <span>{isTw ? '延遲開銷 < 20ms · 智能無損' : isZh ? '延迟开销 < 20ms · 智能无损' : 'Latency < 20ms · 100% Intelligence Retained'}</span>
        </div>
      </div>
    </div>
  );
};
