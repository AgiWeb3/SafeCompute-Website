import React from 'react';
import { 
  KeyRound, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Lock,
  FileCheck
} from 'lucide-react';
import { useLanguage } from '../i18n';

export const EnterpriseTrustPillars: React.FC = () => {
  const { language } = useLanguage();

  const isZhTW = language === 'zh-TW';
  const isZhCN = language === 'zh-CN';
  const isZh = isZhTW || isZhCN;

  return (
    <section className="py-16 bg-[#06080E] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simple & Punchy Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-xs font-mono text-sky-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>
              {isZhTW 
                ? '企業合規與主權底線' 
                : isZhCN 
                  ? '企业合规与主权底线' 
                  : 'DATA SOVEREIGNTY & COMPLIANCE'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
            {isZhTW 
              ? '法務與安全合規，只看這兩條' 
              : isZhCN 
                ? '法务与安全合规，只看这两条' 
                : 'Two Core Guarantees for Legal & Compliance'}
          </h2>

          <p className="mt-2 text-sm text-slate-300">
            {isZhTW 
              ? '不玩文字遊戲，直接解答企業 CIO 與總法律顧問最在意的兩大核心問題。' 
              : isZhCN 
                ? '不玩文字游戏，直接解答企业 CIO 与总法律顾问（GC）最在意的两个问题。' 
                : 'Direct and transparent answers to the top two questions asked by Enterprise CIOs and General Counsels.'}
          </p>
        </div>

        {/* 2 Clear Side-by-Side Cards (Zero Over-engineering) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: Key Custody */}
          <div className="rounded-2xl bg-[#090F1C]/90 border border-blue-900/40 p-6 flex flex-col justify-between shadow-xl hover:border-blue-700/50 transition-colors">
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-sky-400">
                  <KeyRound className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  {isZhTW ? '私鑰 100% 客戶獨占' : isZhCN ? '私钥 100% 客户独占' : '100% Client-Owned Keys'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {isZhTW 
                  ? '① 誰拿著解密密鑰？—— 只有您自己' 
                  : isZhCN 
                    ? '① 谁拿着解密密钥？—— 只有您自己' 
                    : '① Who Holds The Decryption Keys? — Only You'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {isZhTW 
                  ? 'SafeCompute 絕不託管、絕不接觸客戶的主密鑰。混淆參數僅駐留在貴企業的本地內部網路與 KMS 中，雲端沒有任何人（包括我們）能反向還原出原文。' 
                  : isZhCN 
                    ? 'SafeCompute 绝不托管、绝不接触客户的主密钥。混淆参数只驻留在您企业的本地内网与 KMS 中，云端没有任何人（包括我们）能反向解密出原文。' 
                    : 'SafeCompute never manages or accesses your keys. Transformation parameters stay entirely in your internal KMS. No cloud entity can reverse-engineer your data.'}
              </p>

              {/* Contrast Bullets */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300 p-2.5 rounded-lg bg-[#0C1426] border border-blue-900/30">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>
                    {isZhTW 
                      ? '傳統中介網關：將密鑰委託給第三方中間商，存在內部外洩風險' 
                      : isZhCN 
                        ? '其他网关：将密钥托付给中间商，存在内部泄密风险' 
                        : 'Other proxies: Centralize keys, posing insider breach risk'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sky-200 p-2.5 rounded-lg bg-sky-950/30 border border-sky-500/30 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {isZhTW 
                      ? 'SafeCompute：零密鑰託管，完全保留律師委託人保密特權' 
                      : isZhCN 
                        ? 'SafeCompute：零密钥托管，完全保留律师客户保密特权' 
                        : 'SafeCompute: Zero-custody, attorney-client privilege 100% intact'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-blue-950 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-sky-400" />
                <span>{isZhTW ? '合規依據：' : isZhCN ? '合规依据：' : 'Standard:'}</span>
              </span>
              <span className="text-sky-300 font-semibold">{isZh ? '美联邦证据法 FRE 502 · ISO 27001' : 'FRE 502 · ISO 27001'}</span>
            </div>
          </div>

          {/* Card 2: Cross-Border Safe Harbor */}
          <div className="rounded-2xl bg-[#090F1C]/90 border border-blue-900/40 p-6 flex flex-col justify-between shadow-xl hover:border-blue-700/50 transition-colors">
            <div>
              {/* Badge & Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-sky-400">
                  <Globe2 className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
                  {isZhTW ? '0 位元組明文出境' : isZhCN ? '0 字节明文出境' : '0 Bytes Plaintext Exported'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {isZhTW 
                  ? '② 跨境數據算不算違規？—— 不構成原始數據出境' 
                  : isZhCN 
                    ? '② 跨境数据算不算违规？—— 不构成原始数据出境' 
                    : '② Does Cross-Border AI Break Rules? — Legally Safe Harbor'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {isZhTW 
                  ? '底稿原件 100% 留在本地伺服器。出境呼叫海外算力的僅是不可逆的代數雜訊張量，符合 GDPR 與數據安全法的「不可逆去識別化」安全港標準，免除繁雜的跨國申報阻礙。' 
                  : isZhCN 
                    ? '底稿原件 100% 留在本地服务器。出境调用美欧顶尖算力的只是不可逆的代数噪声张量，符合 GDPR 与数据安全法的“不可逆去标识化”标准，免去繁琐的跨境申报死锁。' 
                    : 'Original files stay strictly on-premise. Only irreversibly anonymized tensors travel abroad for cloud reasoning, complying with GDPR Recital 26 and local data security laws.'}
              </p>

              {/* Contrast Bullets */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300 p-2.5 rounded-lg bg-[#0C1426] border border-blue-900/30">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>
                    {isZhTW 
                      ? '傳統方式：明文合約離境出海，面臨高額合規罰鍰' 
                      : isZhCN 
                        ? '传统方式：明文合同离境出海，面临巨额合规罚单' 
                        : 'Direct Cloud: Plaintexts exported, risking heavy regulatory fines'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sky-200 p-2.5 rounded-lg bg-sky-950/30 border border-sky-500/30 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {isZhTW 
                      ? 'SafeCompute：密態特徵出境，免受雲端法案長臂管轄' 
                      : isZhCN 
                        ? 'SafeCompute：密态特征出境，免受云法案长臂管辖' 
                        : 'SafeCompute: Blind tensors only, immune to foreign subpoena'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-blue-950 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>{isZhTW ? '適用法域：' : isZhCN ? '适用法域：' : 'Jurisdictions:'}</span>
              </span>
              <span className="text-sky-300 font-semibold">{isZh ? 'GDPR · 香港 PDPO · 新加坡 PDPA' : 'GDPR · HK PDPO · SG PDPA'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
