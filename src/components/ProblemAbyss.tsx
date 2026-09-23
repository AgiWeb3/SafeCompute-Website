import React from 'react';
import { ShieldAlert, EyeOff, Scale, Cpu } from 'lucide-react';
import { useLanguage } from '../i18n';

export const ProblemAbyss: React.FC = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh-CN' || language === 'zh-TW';

  const items = [
    {
      icon: <EyeOff className="w-5 h-5 text-blue-400" />,
      title: isZh ? '显存偷窥与明文截留' : 'VRAM Plaintext Leaks',
      desc: isZh 
        ? '公有云运维与多租户漏洞可直接转储 GPU 显存，商业机密与思维链推理全盘裸露。' 
        : 'Cloud operators and multi-tenant bugs expose raw prompts and memory dumps.',
    },
    {
      icon: <Scale className="w-5 h-5 text-blue-400" />,
      title: isZh ? '保密特权永久丧失' : 'Privilege Waiver',
      desc: isZh 
        ? '明文上传至公有云 API 将被司法认定为放弃特免权，严重违反客户 NDA 面临巨额索赔。' 
        : 'Uploading plaintext waives attorney-client privilege and violates strict NDAs.',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-blue-400" />,
      title: isZh ? '失控 Agent 越权调用' : 'Rogue Tool Execution',
      desc: isZh 
        ? '恶意提示词注入即可诱导自主 Agent 误调转账接口或破坏生产数据库，缺乏物理拦截阻断。' 
        : 'Prompt injection tricks autonomous agents into executing unauthorized actions.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      title: isZh ? '核心量化资产外流' : 'Proprietary IP Theft',
      desc: isZh 
        ? '自研微调权重与垂直核心算法在云端易遭中间激活逆向提取与剽窃。' 
        : 'Proprietary weights and embeddings are vulnerable to cloud-side extraction.',
    },
  ];

  return (
    <section className="py-20 bg-[#060911] border-t border-[#1E2638]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
            {isZh ? '阻碍企业使用 AI 的核心症结' : 'The Blockers'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
            {isZh ? '为什么企业不敢让高权限 Agent 处理核心业务？' : 'Why Enterprises Block Agentic AI'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-[#0A0E18] border border-blue-950 hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(28,43,255,0.08)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
