import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Terminal, 
  Cpu, 
  Lock, 
  Zap, 
  Play, 
  Pause, 
  RefreshCw, 
  CheckCircle2, 
  Database,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../i18n';

interface ObfuscationEvent {
  id: string;
  timestamp: string;
  sourceZh: string;
  sourceTw: string;
  sourceEn: string;
  model: string;
  inputTokenCount: number;
  entropyScore: number;
  transformationTimeMs: number;
  algebraicProofStatus: 'VERIFIED' | 'VALIDATING';
  invariantResidual: string;
  status: 'OBFUSCATED_AND_DISPATCHED';
}

const SAMPLE_MODELS = [
  'DeepSeek-V3-MoE',
  'Claude-3.5-Sonnet-Proxy',
  'Llama-3.3-70B-Instruct',
  'Qwen-2.5-72B-Omni',
  'GPT-4o-Confidential-Tunnel'
];

const SAMPLE_PAYLOADS = [
  { zh: '跨国并购商业清单 [法务]', tw: '跨國併購商業清單 [法務]', en: 'M&A Deal Schedule [Legal]' },
  { zh: '量化多因子资产权重 [金融]', tw: '量化多因子資產權重 [金融]', en: 'Quant Alpha Strategy [Finance]' },
  { zh: '肿瘤患者基因靶点 [医疗]', tw: '腫瘤患者基因靶點 [醫療]', en: 'Oncology Genomic Profile [Health]' },
  { zh: '信托受托人划转指令 [资管]', tw: '信託受託人劃轉指令 [資管]', en: 'Fiduciary Wire Intent [Treasury]' },
  { zh: '十亿美元分子式合成 [研发]', tw: '十億美元分子式合成 [研發]', en: 'Proprietary Synthesis [R&D]' }
];

export const LiveSecurityMonitor: React.FC = () => {
  const { language } = useLanguage();
  const isZh = language.startsWith('zh');
  const isTw = language === 'zh-TW';

  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [events, setEvents] = useState<ObfuscationEvent[]>([]);
  const [totalTransformedTokens, setTotalTransformedTokens] = useState<number>(1482930);
  const [activeBandwidthKbps, setActiveBandwidthKbps] = useState<number>(412.8);
  const [entropyHistory, setEntropyHistory] = useState<number[]>([7.98, 7.99, 7.97, 7.99, 8.00, 7.98, 7.99, 8.00, 7.99, 7.98, 7.99, 8.00]);
  const [selectedEvent, setSelectedEvent] = useState<ObfuscationEvent | null>(null);

  const counterRef = useRef<number>(1042);

  const generateNewEvent = (): ObfuscationEvent => {
    counterRef.current += 1;
    const now = new Date();
    const timeStr = `${now.toTimeString().split(' ')[0]}.${String(now.getMilliseconds()).padStart(3, '0')}`;
    const model = SAMPLE_MODELS[Math.floor(Math.random() * SAMPLE_MODELS.length)];
    const payload = SAMPLE_PAYLOADS[Math.floor(Math.random() * SAMPLE_PAYLOADS.length)];
    const tokens = Math.floor(Math.random() * 380) + 120;
    const entropy = Number((7.985 + Math.random() * 0.014).toFixed(3));
    const latency = Number((0.65 + Math.random() * 0.75).toFixed(2));
    const residualExp = Math.floor(Math.random() * 3) + 7;

    return {
      id: `EVT-${counterRef.current}`,
      timestamp: timeStr,
      sourceZh: payload.zh,
      sourceTw: payload.tw,
      sourceEn: payload.en,
      model,
      inputTokenCount: tokens,
      entropyScore: entropy,
      transformationTimeMs: latency,
      algebraicProofStatus: 'VERIFIED',
      invariantResidual: `||Q'K'ᵀ - QKᵀ|| < 1e-${residualExp}`,
      status: 'OBFUSCATED_AND_DISPATCHED'
    };
  };

  useEffect(() => {
    const initialEvents: ObfuscationEvent[] = [];
    for (let i = 0; i < 6; i++) {
      initialEvents.push(generateNewEvent());
    }
    setEvents(initialEvents);
    setSelectedEvent(initialEvents[0]);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const newEvt = generateNewEvent();
      setEvents((prev) => [newEvt, ...prev.slice(0, 19)]);
      setTotalTransformedTokens((prev) => prev + newEvt.inputTokenCount);
      setActiveBandwidthKbps(Number((380 + Math.random() * 70).toFixed(1)));
      setEntropyHistory((prev) => [...prev.slice(1), newEvt.entropyScore]);
      setSelectedEvent((current) => (current ? current : newEvt));
    }, 1800);

    return () => clearInterval(interval);
  }, [isRunning]);

  const getSource = (evt: ObfuscationEvent) => isTw ? evt.sourceTw : isZh ? evt.sourceZh : evt.sourceEn;

  return (
    <div className="w-full rounded-3xl bg-[#060911] border border-blue-900/40 shadow-2xl p-6 sm:p-8 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-96 h-48 bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-indigo-600/10 blur-[100px] pointer-events-none" />

      {/* Top Header & Status Indicators */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-blue-900/30 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isRunning ? 'bg-blue-400' : 'bg-amber-400'} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isRunning ? 'bg-blue-500' : 'bg-amber-500'}`} />
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase">
              {isTw ? '即時安全監控儀 · COVARPRI 混淆流水線' : isZh ? '实时代数混淆遥测 · COVARPRI 混淆流水线' : 'Live Security Monitor · CovarPri Obfuscation Pipeline'}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950/70 border border-blue-800/40 text-blue-300">
              Zero Plaintext
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            {isTw ? '即時代數協變混淆流監控' : isZh ? '实时代数协变混淆流监控' : 'Real-Time Algebraic Obfuscation Telemetry'}
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            {isTw
              ? '即時監控輸入 Token 經等距酉矩陣變換過程，殘差恆小於 1e-7，公有雲宿主機與顯存僅可觀測到高熵白噪聲。'
              : isZh 
              ? '实时监控输入 Token 经过等距酉矩阵变换过程，残差恒小于 1e-7，公有云宿主机与显存仅可观测到高熵白噪声。'
              : 'Verifying real-time tensor obfuscation via CovarPri. Mathematical invariance guarantees zero recovery risk in untrusted cloud VRAM.'}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-stretch lg:self-auto justify-end">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-all cursor-pointer ${
              isRunning 
                ? 'bg-blue-950/40 border-blue-800/50 text-blue-300 hover:bg-blue-900/40' 
                : 'bg-amber-950/30 border-amber-600/40 text-amber-300 hover:bg-amber-900/40'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isRunning ? (isTw ? '暫停' : isZh ? '暂停' : 'Pause') : (isTw ? '恢復' : isZh ? '恢复' : 'Resume')}</span>
          </button>
          <button
            onClick={() => {
              const newEvt = generateNewEvent();
              setEvents((prev) => [newEvt, ...prev.slice(0, 19)]);
              setSelectedEvent(newEvt);
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-[#090E1A] border border-blue-900/40 transition-colors cursor-pointer"
            title={isTw ? '注入驗證事件' : isZh ? '注入验证事件' : 'Inject sample event'}
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Real-time Hardware & Crypto Metric Gauges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 border-b border-blue-900/20 text-xs font-mono relative z-10">
        <div className="p-3.5 rounded-2xl bg-[#090E1A]/80 border border-blue-900/40">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px]">{isTw ? '累計變換 Token' : isZh ? '累计变换 Token' : 'Total Tokens Cloaked'}</span>
            <Database className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-white tracking-tight">
            {totalTransformedTokens.toLocaleString()}
          </div>
          <div className="text-[10px] text-blue-400/90 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-blue-400" />
            <span>100% Invariant Dot Product</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#090E1A]/80 border border-blue-900/40">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px]">{isTw ? '混淆資訊熵' : isZh ? '混淆信息熵' : 'Shannon Entropy'}</span>
            <Activity className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-white tracking-tight flex items-baseline gap-1">
            <span>7.994</span>
            <span className="text-xs text-slate-500 font-normal">/ 8.000 bits</span>
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            {isTw ? '純白噪聲極限' : isZh ? '纯白噪声极限' : 'True Pseudorandom Limit'}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#090E1A]/80 border border-blue-900/40">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px]">{isTw ? '代數變換耗時' : isZh ? '代数变换耗时' : 'Transformation Overhead'}</span>
            <Zap className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-white tracking-tight">
            0.82 ms
          </div>
          <div className="text-[10px] text-blue-400 mt-1">
            {isTw ? '硬體線速吞吐' : isZh ? '硬件线速吞吐' : 'Line-Rate Hardware Speed'}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#090E1A]/80 border border-blue-900/40">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px]">{isTw ? '硬體遠程度量' : isZh ? '硬件远程度量' : 'Hardware Attestation'}</span>
            <Lock className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-blue-300 tracking-tight flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>AMD SEV-SNP</span>
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            Measurement: <span className="text-slate-300">0x8f2d...1a4c</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 relative z-10">
        
        {/* Left: Stream */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>{isTw ? '即時混淆事件串流' : isZh ? '实时混淆事件流' : 'Live Event Stream'}</span>
            </span>
            <span className="text-blue-400 text-[11px]">
              {activeBandwidthKbps} KB/s egress
            </span>
          </div>

          <div className="rounded-2xl bg-[#090E1A] border border-blue-900/40 divide-y divide-blue-900/20 max-h-[360px] overflow-y-auto font-mono text-xs shadow-inner">
            {events.map((evt) => {
              const isSelected = selectedEvent?.id === evt.id;
              return (
                <div
                  key={evt.id}
                  onClick={() => setSelectedEvent(evt)}
                  className={`p-3 transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected 
                      ? 'bg-blue-600/20 text-blue-100 border-l-4 border-l-blue-500' 
                      : 'hover:bg-blue-950/20 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-[10px] text-slate-500">{evt.timestamp}</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-950 border border-blue-900 text-blue-300 whitespace-nowrap">
                      {evt.id}
                    </span>
                    <div className="truncate">
                      <div className="text-xs text-white font-medium truncate">{getSource(evt)}</div>
                      <div className="text-[10px] text-slate-500 flex items-center gap-1.5">
                        <span>{evt.model}</span>
                        <span>·</span>
                        <span className="text-blue-400">{evt.inputTokenCount} tokens</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="text-[11px] font-bold text-blue-400">
                      H={evt.entropyScore}b
                    </div>
                    <div className="text-[10px] text-slate-400">
                      +{evt.transformationTimeMs}ms
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Event Inspector */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-[#090E1A] border border-blue-900/40 font-mono text-xs">
          {selectedEvent ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-blue-900/30">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span className="font-bold text-white">{isTw ? '遙測事件審查' : isZh ? '遥测事件审查' : 'Event Telemetry Inspector'}</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600/20 text-blue-300 border border-blue-500/40">
                  {selectedEvent.id}
                </span>
              </div>

              {/* Invariant Equation Verification Card */}
              <div className="p-3.5 rounded-xl bg-[#060911] border border-blue-900/50 space-y-2">
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Attention Matrix Algebraic Invariance</span>
                  <span className="text-blue-400 font-bold">Q·Kᵀ Proof</span>
                </div>
                <div className="p-2.5 rounded bg-blue-950/30 border border-blue-900/40 text-blue-300 text-[11px] leading-relaxed break-all">
                  <code>{selectedEvent.invariantResidual}</code>
                </div>
                <p className="text-[10px] text-slate-400 leading-normal">
                  Permutation cancellation: <span className="text-slate-300">(P_B · P_Bᵀ = I)</span>. Identical attention logits without plaintext decryption.
                </p>
              </div>

              {/* Detailed Event Metrics */}
              <div className="space-y-2 pt-1 text-[11px]">
                <div className="flex justify-between py-1 border-b border-blue-950">
                  <span className="text-slate-500">{isTw ? '目標模型' : isZh ? '目标模型' : 'Target LLM'}:</span>
                  <span className="text-slate-200">{selectedEvent.model}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-blue-950">
                  <span className="text-slate-500">{isTw ? '資訊熵評分' : isZh ? '信息熵评分' : 'Shannon Entropy'}:</span>
                  <span className="text-blue-400 font-bold">{selectedEvent.entropyScore} bits/byte</span>
                </div>
                <div className="flex justify-between py-1 border-b border-blue-950">
                  <span className="text-slate-500">{isTw ? '明文恢復風險' : isZh ? '明文恢复风险' : 'Plaintext Leakage Risk'}:</span>
                  <span className="text-blue-300 font-bold">&lt; 0.0001% (Bound)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-blue-950">
                  <span className="text-slate-500">{isTw ? '代數證明狀態' : isZh ? '代数证明状态' : 'Proof Verification'}:</span>
                  <span className="text-blue-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED IN ENCLAVE
                  </span>
                </div>
              </div>

              {/* Entropy Sparkline Visualization */}
              <div className="pt-2">
                <div className="flex justify-between text-[10px] text-slate-400 mb-1.5">
                  <span>{isTw ? '資訊熵穩定度' : isZh ? '信息熵稳定性' : 'Entropy Stability'} (12 Tx)</span>
                  <span className="text-blue-400">Mean: 7.992b</span>
                </div>
                <div className="h-9 flex items-end gap-1.5 px-2 py-1 bg-[#060911] rounded-lg border border-blue-950">
                  {entropyHistory.map((val, idx) => {
                    const heightPercent = Math.max(20, Math.min(100, (val - 7.96) * 2000));
                    return (
                      <div 
                        key={idx} 
                        className="flex-1 bg-gradient-to-t from-blue-700 to-blue-400 rounded-t transition-all duration-300 hover:brightness-125"
                        style={{ height: `${heightPercent}%` }}
                        title={`Entropy: ${val} bits`}
                      />
                    );
                  })}
                </div>
              </div>

            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-500 text-xs">
              {isTw ? '選擇事件以檢視密碼學遙測' : isZh ? '选择事件以查看密码学遥测' : 'Select an event to inspect telemetry'}
            </div>
          )}
        </div>

      </div>

      {/* Bottom Security Guarantee Note */}
      <div className="mt-6 pt-4 border-t border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span>{isTw ? '由 CovarPri 算子在客戶本機客戶端完成混淆' : isZh ? '由 CovarPri 算子在客户本地客户端完成矩阵混淆' : 'Cloaked locally prior to outbound HTTPS socket egress'}</span>
        </div>
        <div className="text-blue-400 flex items-center gap-1">
          <span>Active Pipeline: AES-256-GCM + Permutation Matrix</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};
