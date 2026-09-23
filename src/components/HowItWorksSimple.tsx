import React, { useState } from 'react';
import { ArrowRight, Lock, EyeOff } from 'lucide-react';
import { useLanguage } from '../i18n';

interface HowItWorksSimpleProps {
  onExploreTechnology?: () => void;
}

export const HowItWorksSimple: React.FC<HowItWorksSimpleProps> = ({ onExploreTechnology }) => {
  const [activeTab, setActiveTab] = useState<'safecompute' | 'traditional'>('safecompute');
  const { language } = useLanguage();
  const isZh = language === 'zh-CN' || language === 'zh-TW';

  return (
    <section id="how-it-works" className="py-20 bg-[#070A10] border-t border-[#1E2638] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
            {isZh ? '直观运作机制' : 'How It Works'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            {isZh ? '3 步实现：AI 获得全部机密，云端 0 字节泄漏' : '3 Steps to Sovereign AI'}
          </h2>
        </div>

        {/* 3 Large Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-[#0C111C] border border-[#1E2638] hover:border-emerald-500/40 transition-all">
            <div className="text-2xl font-black font-mono text-emerald-400 mb-4">01</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {isZh ? '机密留在企业内网' : 'Secrets Stay Local'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isZh 
                ? '合同底稿、量化因子与客户档案仅在企业受控设备内读取，原始文件永不上网。' 
                : 'Raw contracts, trading alpha, and client data never leave your internal boundary.'}
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-[#0C111C] border border-[#1E2638] hover:border-cyan-500/40 transition-all">
            <div className="text-2xl font-black font-mono text-cyan-400 mb-4">02</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {isZh ? '外发前瞬时数学混淆' : 'Instant Math Scrambling'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isZh 
                ? 'SafeCompute 网关将数据置换为不可逆数学矩阵，拦截到也只是一堆无序噪声。' 
                : 'Data is transformed into irreversible high-entropy noise before touching the cloud.'}
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-[#0C111C] border border-[#1E2638] hover:border-emerald-500/40 transition-all">
            <div className="text-2xl font-black font-mono text-emerald-400 mb-4">03</div>
            <h3 className="text-lg font-bold text-white mb-2">
              {isZh ? '云端盲算，本地秒级还原' : 'Blind Cloud Compute'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isZh 
                ? '云端前沿大模型在密文张量上执行前向推理，唯有企业本地私钥能瞬间解密出最终结论。' 
                : 'Cloud models reason directly over cipher matrices; only your local key can decode the final output.'}
            </p>
          </div>

        </div>

        {/* Live Contrast Strip */}
        <div className="rounded-2xl bg-[#0B0F19] border border-[#1E2638] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('safecompute')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'safecompute'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isZh ? 'SafeCompute 视角' : 'SafeCompute View'}
            </button>
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'traditional'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isZh ? '传统公有云视角' : 'Traditional Cloud View'}
            </button>
          </div>

          <div className="text-xs font-mono">
            {activeTab === 'safecompute' ? (
              <span className="text-emerald-400 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>{isZh ? '云端显存仅见无序数学噪声 (0 字节泄漏 · 保密特权 100% 留存)' : 'Cloud VRAM sees only noise (0 bytes leaked)'}</span>
              </span>
            ) : (
              <span className="text-rose-400 flex items-center gap-1.5">
                <EyeOff className="w-3.5 h-3.5" />
                <span>{isZh ? '云厂商与运维人员可直接读取显存中的原始明文合同与提示词' : 'Cloud operators can view raw text in GPU memory'}</span>
              </span>
            )}
          </div>

          {onExploreTechnology && (
            <button
              onClick={onExploreTechnology}
              className="text-cyan-400 hover:text-cyan-300 text-xs font-mono font-medium flex items-center gap-1 transition-colors cursor-pointer shrink-0"
            >
              <span>{isZh ? '技术实现' : 'Technical Details'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
