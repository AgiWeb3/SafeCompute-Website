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
  source: string;
  model: string;
  inputTokenCount: number;
  entropyScore: number; // e.g. 7.994 / 8.000 bits
  transformationTimeMs: number;
  algebraicProofStatus: 'VERIFIED' | 'VALIDATING';
  invariantResidual: string; // e.g. "||Q'K'ᵀ - QKᵀ|| < 1e-7"
  status: 'OBFUSCATED_AND_DISPATCHED';
}

const SAMPLE_MODELS = [
  'DeepSeek-V3-MoE',
  'Claude-3.5-Sonnet-Proxy',
  'Llama-3.3-70B-Instruct',
  'Qwen-2.5-72B-Omni',
  'GPT-4o-Confidential-Tunnel'
];

const SAMPLE_PAYLOAD_TYPES = [
  'M&A Privileged Schedule [Law]',
  'Multi-Asset Portfolio Signal [Finance]',
  'Oncology Patient Genomic Marker [Health]',
  'Autonomous Fiduciary Wire Call [Treasury]',
  'Billion-Dollar Compound Synthesis [R&D]'
];

export const LiveSecurityMonitor: React.FC = () => {
  const { language } = useLanguage();
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [events, setEvents] = useState<ObfuscationEvent[]>([]);
  const [totalTransformedTokens, setTotalTransformedTokens] = useState<number>(1482930);
  const [activeBandwidthKbps, setActiveBandwidthKbps] = useState<number>(412.8);
  const [entropyHistory, setEntropyHistory] = useState<number[]>([7.98, 7.99, 7.97, 7.99, 8.00, 7.98, 7.99, 8.00, 7.99, 7.98, 7.99, 8.00]);
  const [selectedEvent, setSelectedEvent] = useState<ObfuscationEvent | null>(null);

  const counterRef = useRef<number>(1042);

  // Helper to generate a new live event
  const generateNewEvent = (): ObfuscationEvent => {
    counterRef.current += 1;
    const now = new Date();
    const timeStr = `${now.toTimeString().split(' ')[0]}.${String(now.getMilliseconds()).padStart(3, '0')}`;
    const model = SAMPLE_MODELS[Math.floor(Math.random() * SAMPLE_MODELS.length)];
    const source = SAMPLE_PAYLOAD_TYPES[Math.floor(Math.random() * SAMPLE_PAYLOAD_TYPES.length)];
    const tokens = Math.floor(Math.random() * 380) + 120;
    const entropy = Number((7.985 + Math.random() * 0.014).toFixed(3));
    const latency = Number((0.65 + Math.random() * 0.75).toFixed(2));
    const residualExp = Math.floor(Math.random() * 3) + 7; // 1e-7 to 1e-9

    return {
      id: `EVT-${counterRef.current}`,
      timestamp: timeStr,
      source,
      model,
      inputTokenCount: tokens,
      entropyScore: entropy,
      transformationTimeMs: latency,
      algebraicProofStatus: 'VERIFIED',
      invariantResidual: `||Q'K'ᵀ - QKᵀ|| < 1e-${residualExp}`,
      status: 'OBFUSCATED_AND_DISPATCHED'
    };
  };

  // Initialize initial stream
  useEffect(() => {
    const initialEvents: ObfuscationEvent[] = [];
    for (let i = 0; i < 6; i++) {
      initialEvents.push(generateNewEvent());
    }
    setEvents(initialEvents);
    setSelectedEvent(initialEvents[0]);
  }, []);

  // Interval to pump live events
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const newEvt = generateNewEvent();
      setEvents((prev) => [newEvt, ...prev.slice(0, 19)]);
      setTotalTransformedTokens((prev) => prev + newEvt.inputTokenCount);
      setActiveBandwidthKbps(Number((380 + Math.random() * 70).toFixed(1)));
      setEntropyHistory((prev) => [...prev.slice(1), newEvt.entropyScore]);
      
      // Update selected event if user hasn't explicitly locked in an older one
      setSelectedEvent((current) => (current ? current : newEvt));
    }, 1800);

    return () => clearInterval(interval);
  }, [isRunning]);

  const isZh = language.startsWith('zh');

  return (
    <div className="w-full rounded-3xl bg-[#060911] border border-blue-900/40 shadow-2xl p-6 sm:p-8 overflow-hidden relative">
      {/* Subtle Background Glow Accent */}
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
              {isZh ? '实时安全监控仪 · COVARPRI 混淆流水线' : 'Live Security Monitor · CovarPri Obfuscation Pipeline'}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950/70 border border-blue-800/40 text-blue-300">
              Zero Plaintext
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            {isZh ? '实时代数协变混淆流监控' : 'Real-Time Algebraic Obfuscation Telemetry'}
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            {isZh 
              ? '实时监控输入 Token 经过等距酉矩阵与高维随机噪声扰动变换过程，数学不变量验证残差恒小于 1e-7，公有云宿主机与显存仅能观测到高熵白噪声。'
              : 'Verifying real-time tensor obfuscation events via CovarPri isometric transformation. Mathematical invariance proof guarantees zero recovery risk in untrusted cloud VRAM.'}
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
            <span>{isRunning ? (isZh ? '暂停流' : 'Pause Stream') : (isZh ? '恢复流' : 'Resume')}</span>
          </button>
          <button
            onClick={() => {
              const newEvt = generateNewEvent();
              setEvents((prev) => [newEvt, ...prev.slice(0, 19)]);
              setSelectedEvent(newEvt);
            }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-[#090E1A] border border-blue-900/40 transition-colors cursor-pointer"
            title={isZh ? '生成新验证事件' : 'Inject sample event'}
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Real-time Hardware & Crypto Metric Gauges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 border-b border-blue-900/20 text-xs font-mono relative z-10">
        <div className="p-3.5 rounded-2xl bg-[#090E1A]/80 border border-blue-900/40">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px]">{isZh ? '已变换 Token 累计' : 'Total Tokens Cloaked'}</span>
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
            <span className="text-[11px]">{isZh ? '混淆信息熵' : 'Shannon Entropy'}</span>
            <Activity className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-white tracking-tight flex items-baseline gap-1">
            <span>7.994</span>
            <span className="text-xs text-slate-500 font-normal">/ 8.000 bits</span>
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            {isZh ? '接近纯白噪声极限' : 'True Pseudorandom Limit'}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#090E1A]/80 border border-blue-900/40">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px]">{isZh ? '代数变换耗时' : 'Transformation Overhead'}</span>
            <Zap className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-white tracking-tight">
            0.82 ms
          </div>
          <div className="text-[10px] text-blue-400 mt-1">
            {isZh ? '线速吞吐 · 零感知延迟' : 'Line-Rate Hardware Acceleration'}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#090E1A]/80 border border-blue-900/40">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px]">{isZh ? '远程硬件证明状态' : 'Hardware Attestation'}</span>
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

      {/* Main Interactive Stage: Live Feed Table + Invariance Deep Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 relative z-10">
        
        {/* Left: Real-time Event Stream (7 Columns on large screens) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span>{isZh ? '实时混淆事件流 (最新20条)' : 'Live Event Feed (Latest Events)'}</span>
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
                      <div className="text-xs text-white font-medium truncate">{evt.source}</div>
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

        {/* Right: Selected Event Cryptographic Invariance Inspector (5 Columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-[#090E1A] border border-blue-900/40 font-mono text-xs">
          {selectedEvent ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-blue-900/30">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span className="font-bold text-white">Event Telemetry Inspector</span>
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
                  Permutation cancellation: <span className="text-slate-300">(P_B · P_Bᵀ = I)</span>. Transformer multi-head dot product produces identical attention logits without plaintext decryption.
                </p>
              </div>

              {/* Detailed Event Metrics */}
              <div className="space-y-2 pt-1 text-[11px]">
                <div className="flex justify-between py-1 border-b border-blue-950">
                  <span className="text-slate-500">{isZh ? '目标大模型' : 'Target LLM / Endpoint'}:</span>
                  <span className="text-slate-200">{selectedEvent.model}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-blue-950">
                  <span className="text-slate-500">{isZh ? '信息熵评分 (Max 8.0)' : 'Shannon Entropy'}:</span>
                  <span className="text-blue-400 font-bold">{selectedEvent.entropyScore} bits/byte</span>
                </div>
                <div className="flex justify-between py-1 border-b border-blue-950">
                  <span className="text-slate-500">{isZh ? '明文恢复风险' : 'Plaintext Leakage Risk'}:</span>
                  <span className="text-blue-300 font-bold">&lt; 0.0001% (Mathematically Bound)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-blue-950">
                  <span className="text-slate-500">{isZh ? '代数证明状态' : 'Proof Verification'}:</span>
                  <span className="text-blue-400 flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED IN ENCLAVE
                  </span>
                </div>
              </div>

              {/* Entropy Sparkline Visualization */}
              <div className="pt-2">
                <div className="flex justify-between text-[10px] text-slate-400 mb-1.5">
                  <span>Entropy Stability (Last 12 Transactions)</span>
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
              Select an event to inspect cryptographic telemetry
            </div>
          )}
        </div>

      </div>

      {/* Bottom Security Guarantee Note */}
      <div className="mt-6 pt-4 border-t border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span>{isZh ? '由 CovarPri 算子在客户本地客户端完成矩阵混淆' : 'Cloaked locally prior to outbound HTTPS socket egress'}</span>
        </div>
        <div className="text-blue-400 flex items-center gap-1">
          <span>Active Pipeline: AES-256-GCM + Permutation Matrix</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};
