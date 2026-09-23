import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, ArrowRight, Lock, CheckCircle2, XCircle, Sparkles, Database, Bot, CloudOff, Cloud, RefreshCw } from 'lucide-react';
import { useLanguage } from '../i18n';

interface SecretSovereigntyVisualProps {
  onExploreTechnology?: () => void;
}

export const SecretSovereigntyVisual: React.FC<SecretSovereigntyVisualProps> = ({ onExploreTechnology }) => {
  const [mode, setMode] = useState<'safecompute' | 'traditional'>('safecompute');
  const [activeSecret, setActiveSecret] = useState<0 | 1 | 2>(0);
  const { language } = useLanguage();

  const isZh = language === 'zh-CN' || language === 'zh-TW';

  const secrets = [
    {
      titleEn: '$1.4B M&A Agreement',
      titleZh: '14 亿美元并购底稿',
      tagEn: 'Legal & Privilege',
      tagZh: '绝密特免权',
    },
    {
      titleEn: 'Alpha Trading Model',
      titleZh: '自研量化阿尔法策略',
      tagEn: 'Proprietary IP',
      tagZh: '核心知识产权',
    },
    {
      titleEn: 'Patient Genomic Records',
      titleZh: '患者临床基因组档案',
      tagEn: 'HIPAA Confidential',
      tagZh: '医疗极度隐私',
    },
  ];

  return (
    <div className="w-full max-w-[560px] mx-auto select-none">
      {/* Frame Container */}
      <div className="rounded-3xl bg-[#0C101A] border border-[#1E2638] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden relative backdrop-blur-xl">
        
        {/* Subtle Ambient Glow */}
        <div 
          className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-colors duration-700 ${
            mode === 'safecompute' ? 'bg-cyan-500/15' : 'bg-red-500/15'
          }`} 
        />

        {/* Top Control Bar: SafeCompute vs Traditional Mode */}
        <div className="p-4 sm:p-5 border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3 bg-[#090D15]/80">
          <div className="inline-flex p-1 rounded-xl bg-[#05080E] border border-[#1E2638]">
            <button
              onClick={() => setMode('safecompute')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                mode === 'safecompute'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,242,254,0.25)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isZh ? 'SafeCompute 主权保障' : 'With SafeCompute'}</span>
            </button>

            <button
              onClick={() => setMode('traditional')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                mode === 'traditional'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.25)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <span>{isZh ? '传统公有云 (无保护)' : 'Traditional Cloud'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              {isZh ? '测试案例:' : 'Sample:'}
            </span>
            <div className="flex items-center gap-1 bg-[#05080E] p-0.5 rounded-lg border border-[#1E2638]">
              {secrets.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSecret(idx as 0 | 1 | 2)}
                  className={`w-6 h-6 rounded-md text-[11px] font-mono transition-all cursor-pointer flex items-center justify-center ${
                    activeSecret === idx
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Central Visual Architecture Flow: The Headline in Action */}
        <div className="p-5 sm:p-6 space-y-5">
          
          {/* Headline Visual Banner */}
          <div className={`p-3 rounded-2xl border text-center transition-all ${
            mode === 'safecompute'
              ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-200'
              : 'bg-red-500/10 border-red-500/30 text-red-200'
          }`}>
            <div className="text-[11px] font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5">
              {mode === 'safecompute' ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>{isZh ? '主权承诺：AI 获得完整分析权 · 绝不向云端交出一个字节' : 'THE PROMISE: FULL AI ACCESS · 0 BYTES SURRENDERED'}</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  <span>{isZh ? '传统风险：为使用 AI 分析，必须将原始机密全盘提交给云端' : 'THE TRADEOFF: SURRENDERING RAW SECRETS TO GET AI ACCESS'}</span>
                </>
              )}
            </div>
          </div>

          {/* Interactive 3-Stage Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
            
            {/* STAGE 1: YOUR SECRETS */}
            <div className="p-3.5 rounded-2xl bg-[#070A10] border border-[#1E2638] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {isZh ? '① 企业机密' : '① Your Secrets'}
                  </span>
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-xs font-bold text-white line-clamp-1">
                  {isZh ? secrets[activeSecret].titleZh : secrets[activeSecret].titleEn}
                </div>
                <div className="text-[10px] font-mono text-cyan-400/90 mt-0.5">
                  {isZh ? secrets[activeSecret].tagZh : secrets[activeSecret].tagEn}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#1E2638]/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>{isZh ? '边界状态' : 'Boundary'}</span>
                <span className="text-emerald-400 font-semibold">{isZh ? '本地隔离' : 'Local Enclave'}</span>
              </div>
            </div>

            {/* STAGE 2: AI REASONING */}
            <div className={`p-3.5 rounded-2xl border flex flex-col justify-between transition-all ${
              mode === 'safecompute'
                ? 'bg-gradient-to-b from-[#0B1522] to-[#070E18] border-cyan-500/40 shadow-[0_0_18px_rgba(0,242,254,0.15)]'
                : 'bg-[#0E1017] border-[#1E2638]'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                    {isZh ? '② AI 全权推理' : '② AI Reasoning'}
                  </span>
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{isZh ? '云端前沿大模型' : 'Frontier Cloud AI'}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-[10px] text-slate-300 mt-0.5 font-medium">
                  {isZh ? '100% 满血推理能力' : '100% Intelligence Unlocked'}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#1E2638]/70 flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-400">{isZh ? 'AI 访问权' : 'AI Access'}</span>
                <span className="text-cyan-300 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>Full Access</span>
                </span>
              </div>
            </div>

            {/* STAGE 3: SURRENDERED TO CLOUD */}
            <div className={`p-3.5 rounded-2xl border flex flex-col justify-between transition-all ${
              mode === 'safecompute'
                ? 'bg-[#071318] border-emerald-500/40'
                : 'bg-[#180A0D] border-red-500/40'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {isZh ? '③ 交出给云端' : '③ Surrendered'}
                  </span>
                  {mode === 'safecompute' ? (
                    <CloudOff className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Cloud className="w-3.5 h-3.5 text-red-400" />
                  )}
                </div>

                <div className="text-base font-extrabold font-mono tracking-tight">
                  {mode === 'safecompute' ? (
                    <span className="text-emerald-400 text-lg">0 BYTES</span>
                  ) : (
                    <span className="text-red-400 text-sm">{isZh ? '全部原始明文' : '100% Plaintext'}</span>
                  )}
                </div>

                <div className="text-[10px] font-mono mt-0.5">
                  {mode === 'safecompute' ? (
                    <span className="text-emerald-300/80">{isZh ? '零字节泄露 · 无法解密' : 'Zero Plaintext · Sealed'}</span>
                  ) : (
                    <span className="text-red-400/80">{isZh ? '显存全盘裸露 · 可被偷窥' : 'Exposed in Cloud VRAM'}</span>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#1E2638]/70 flex items-center justify-between text-[10px] font-mono">
                <span className="text-slate-400">{isZh ? '特免权/NDA' : 'Privilege'}</span>
                {mode === 'safecompute' ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{isZh ? '100% 完整' : 'Protected'}</span>
                  </span>
                ) : (
                  <span className="text-red-400 font-bold flex items-center gap-1">
                    <XCircle className="w-3 h-3" />
                    <span>{isZh ? '失效/放弃' : 'Waived/Lost'}</span>
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* Dynamic Technical Verification Snippet */}
          <div className="p-3.5 rounded-2xl bg-[#070A10] border border-[#1E2638] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <div className={`w-2.5 h-2.5 rounded-full ${mode === 'safecompute' ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
              <div className="font-mono text-[11px]">
                {mode === 'safecompute' ? (
                  <span className="text-slate-300">
                    {isZh 
                      ? '云端显存只接收混淆张量：' 
                      : 'Cloud VRAM only sees obfuscated tensors: '}
                    <span className="text-cyan-300 font-semibold font-mono">P · X · Pᵀ (No Plaintext)</span>
                  </span>
                ) : (
                  <span className="text-red-300">
                    {isZh 
                      ? '云端运维人员可直接读取原始明文并缓存于服务器' 
                      : 'Cloud operators can directly inspect raw prompt plaintext'}
                  </span>
                )}
              </div>
            </div>

            {onExploreTechnology && (
              <button
                onClick={onExploreTechnology}
                className="text-cyan-400 hover:text-cyan-300 text-[11px] font-mono font-medium flex items-center gap-1 shrink-0 ml-3 transition-colors cursor-pointer"
              >
                <span>{isZh ? '查看数学证明' : 'View Proof'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
