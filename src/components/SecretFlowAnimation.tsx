import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Lock, EyeOff } from 'lucide-react';
import { useLanguage } from '../i18n';

interface SecretFlowAnimationProps {
  onExploreTechnology?: () => void;
}

export const SecretFlowAnimation: React.FC<SecretFlowAnimationProps> = ({ onExploreTechnology }) => {
  const [stage, setStage] = useState<number>(0);
  const { language } = useLanguage();
  const isZh = language === 'zh-CN' || language === 'zh-TW';

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[500px] mx-auto select-none">
      <div className="rounded-3xl bg-[#090D15] border border-[#1E2638] shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-6 relative overflow-hidden backdrop-blur-xl">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* 2 Visual Nodes: Local Vault vs Cloud AI */}
        <div className="grid grid-cols-2 gap-4 relative py-2">
          
          {/* Node 1: Local Vault */}
          <div className="rounded-2xl bg-[#091020] border border-blue-500/30 p-5 flex flex-col items-center justify-between min-h-[220px]">
            <div className="w-full flex items-center justify-between text-xs text-sky-400 font-mono">
              <span className="font-bold">{isZh ? '企业本地' : 'Local Vault'}</span>
              <ShieldCheck className="w-4 h-4" />
            </div>

            {/* Document Box Graphic */}
            <div className="my-auto flex flex-col items-center">
              <div className="relative w-16 h-20 rounded-xl bg-[#0F1B30] border-2 border-sky-400/80 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                <div className="w-10 h-1.5 bg-sky-400/80 rounded mb-1" />
                <div className="w-8 h-1 bg-slate-400/50 rounded mb-1" />
                <div className="w-6 h-1 bg-slate-400/30 rounded" />
                <Lock className="w-3.5 h-3.5 text-sky-300 mt-2" />
              </div>
              <span className="text-xs font-semibold text-white mt-3">{isZh ? '真实数据资产' : 'Raw Data'}</span>
            </div>

            <div className="text-[11px] font-mono text-sky-400/90 text-center">
              {isZh ? '永不出本地边界' : 'Never leaves perimeter'}
            </div>
          </div>

          {/* Central Math Barrier Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#080B14] border border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center justify-center text-[10px] font-mono font-bold text-sky-300">
              P·X
            </div>
          </div>

          {/* Node 2: Cloud AI */}
          <div className="rounded-2xl bg-[#0D1326] border border-indigo-500/30 p-5 flex flex-col items-center justify-between min-h-[220px]">
            <div className="w-full flex items-center justify-between text-xs text-blue-400 font-mono">
              <span className="font-bold">{isZh ? '云端 AI 核心' : 'Cloud AI'}</span>
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            </div>

            {/* Neural Matrix Graphic */}
            <div className="my-auto flex flex-col items-center">
              <div className="w-16 h-20 rounded-xl bg-[#141E38] border-2 border-blue-400/80 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.25)]">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-sky-400" />
                  ))}
                </div>
              </div>
              <span className="text-xs font-semibold text-white mt-3">{isZh ? '100% 满血推理' : 'Full Reasoning'}</span>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-mono text-sky-400 text-center">
              <EyeOff className="w-3.5 h-3.5" />
              <span className="font-bold">0 BYTES</span>
              <span>{isZh ? '交出' : 'surrendered'}</span>
            </div>
          </div>

        </div>

        {/* 1-Line Status ticker */}
        <div className="mt-4 pt-4 border-t border-[#1E2638] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="font-medium">
              {stage === 0 && (isZh ? '① 数据留在本地金库，明文绝不离开边界' : '① Data remains local; raw inputs never transmitted')}
              {stage === 1 && (isZh ? '② 经过单向代数扰动，密态在云端盲算' : '② Scrambled into mathematical noise for blind cloud inference')}
              {stage === 2 && (isZh ? '③ AI 满血输出，云端无法偷窥到任何字节' : '③ Full model reasoning completed with 0 bytes surrendered')}
            </span>
          </div>

          {onExploreTechnology && (
            <button
              onClick={onExploreTechnology}
              className="text-sky-400 hover:text-sky-300 text-xs font-mono font-medium flex items-center gap-0.5 cursor-pointer shrink-0 ml-3"
            >
              <span>{isZh ? '架构' : 'Tech'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
