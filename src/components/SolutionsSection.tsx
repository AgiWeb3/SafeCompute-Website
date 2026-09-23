import React, { useState } from 'react';
import { 
  Scale, 
  Landmark, 
  HeartPulse, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert, 
  ShieldCheck, 
  FileCheck, 
  Cpu, 
  Lock, 
  Layers,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../i18n';

interface SolutionsSectionProps {
  onOpenDemo: () => void;
}

type IndustryKey = 'legal' | 'finance' | 'healthcare' | 'government';

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenDemo }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryKey>('legal');
  const { language } = useLanguage();
  const isZh = language === 'zh-CN' || language === 'zh-TW';

  const industries: Record<IndustryKey, {
    label: string;
    icon: React.ReactNode;
    color: string;
    accentBg: string;
    borderAccent: string;
    badge: string;
    tagline: string;
    decisionMaker: string;
    challengeTitle: string;
    challengeDesc: string;
    riskPoints: string[];
    solutionTitle: string;
    solutionDesc: string;
    architecturePillars: { title: string; desc: string }[];
    quantifiableRoi: { metric: string; label: string }[];
    complianceBadge: string;
  }> = {
    legal: {
      label: isZh ? '顶尖律所与法务部' : 'Law Firms & General Counsel',
      icon: <Scale className="w-4 h-4" />,
      color: 'text-emerald-400',
      accentBg: 'bg-emerald-500/10',
      borderAccent: 'border-emerald-500/40',
      badge: isZh ? '律师执业特免权 100% 留存' : 'Attorney-Client Privilege Preserved',
      tagline: isZh 
        ? '在绝不放弃保密特免权 (Privilege) 的司法底线下，释放自主 Agent 审查数万页并购与诉讼卷宗' 
        : 'Deploy autonomous agent workflows for M&A due diligence and e-discovery with zero privilege waiver.',
      decisionMaker: isZh ? '决策人：管理合伙人、总法律顾问 (GC)、信息安全负责人' : 'For: Managing Partners, General Counsel & Practice Chairs',
      challengeTitle: isZh ? '当前致命阻碍：公有云直连即构成“自愿泄密”' : 'The Core Dilemma: Plaintext Upload Waives Privilege',
      challengeDesc: isZh 
        ? '英美法系与主流司法辖区均确立：将客户未加密案卷上传至第三方商业云 API，在证据法上极易被认定为主观放弃“律师-客户保密特权”，且直接撕毁严苛的客户保密协议 (NDA)，面临数千万元赔偿风险。' 
        : 'Under federal and common law evidence rules, transmitting unencrypted client work product to commercial third-party cloud APIs risks waiving attorney-client and work-product doctrine privileges, triggering devastating client NDA breaches.',
      riskPoints: [
        isZh ? '司法特免权丧失：公开云转储使诉讼证据直接暴露给对方律师审查' : 'Irrevocable waiver of attorney-client and work-product protection',
        isZh ? '客户 NDA 违约风险：跨国企业巨头对核心并购信息的第三方存储实行一票否决' : 'Fortune 500 audit committees forbid raw transmission to third-party GPUs',
        isZh ? '本地小模型算力匮乏：无法理解复杂多层法律跨引用条款' : 'On-premise small models lack reasoning power for complex multi-jurisdiction clauses',
      ],
      solutionTitle: isZh ? 'SafeCompute 破局方案：零明文协变张量审查' : 'The SafeCompute Solution: Mathematical Tensor Privilege Enclave',
      solutionDesc: isZh 
        ? '通过 CovarPri 单向代数混淆技术，所有卷宗在离所前已置换为高维不可逆矩阵。公有云顶尖大模型仅执行密态语义推理，完成深度条款矛盾比对后返回本地解密，云端 0 字节明文驻留。' 
        : 'CovarPri mathematically scrambles contracts into irreversible high-dimensional manifolds before egress. Cloud GPUs reason blindly, returning verified clause contradictions to your internal DMS with cryptographic proof.',
      architecturePillars: [
        {
          title: isZh ? '原生对接行业文档系统' : 'Native DMS & eDiscovery Integration',
          desc: isZh ? '通过 API 零代码无缝连通 iManage、NetDocuments、Relativity 与内部安全网盘。' : 'Plug-and-play middleware for iManage, NetDocuments, and Relativity environments.',
        },
        {
          title: isZh ? '可提交法院的密码学审计凭证' : 'Judicially Verifiable Proof of Zero Plaintext',
          desc: isZh ? '每次任务自动生成包含硬件度量哈希与无明文证明的合规存证，供审计委员会与法庭核验。' : 'Hardware attestation logs proving no unencrypted text ever touched cloud GPU VRAM.',
        },
      ],
      quantifiableRoi: [
        { metric: '100%', label: isZh ? '保密特权司法有效性' : 'Privilege Enforceability' },
        { metric: '90%+', label: isZh ? '并购合同初审耗时节省' : 'M&A First-Pass Time Saved' },
        { metric: '0 Bytes', label: isZh ? '云端明文留存与外泄' : 'Plaintext Cloud Residue' },
      ],
      complianceBadge: isZh ? '符合 ABA Model Rule 1.6 / 司法保密特权存续标准' : 'Compliant with ABA Model Rule 1.6 & Federal Rule of Evidence 502',
    },

    finance: {
      label: isZh ? '对冲基金与一级金融' : 'Hedge Funds & Tier-1 Banks',
      icon: <Landmark className="w-4 h-4" />,
      color: 'text-cyan-400',
      accentBg: 'bg-cyan-500/10',
      borderAccent: 'border-cyan-500/40',
      badge: isZh ? '独家 Alpha 零泄漏 · 毫秒级硬风控' : 'Zero Alpha Leakage · Sub-2ms Action Control',
      tagline: isZh 
        ? '在绝不暴露核心投资策略与高净值持仓底牌的前提下，调度公有云超大规模模型执行全球研报深度挖掘' 
        : 'Leverage frontier hyperscale cloud intelligence for real-time market sentiment without leaking proprietary alpha factors or portfolio holdings.',
      decisionMaker: isZh ? '决策人：首席投资官 (CIO)、首席风险官 (CRO)、量化总监' : 'For: Chief Investment Officers, Quant Trading Leads & Head of Risk',
      challengeTitle: isZh ? '当前致命阻碍：模型逆向与自主 Agent 越权交易' : 'The Core Dilemma: Proprietary Factor Theft & Rogue API Execution',
      challengeDesc: isZh 
        ? '百亿量化因子的微调权重与投资组合持仓属于对冲基金的立身之本，上传公有云易遭跨租户侧信道嗅探；同时，被赋予资金划转与下单权限的自主交易 Agent，极易受到恶意提示词注入而造成灾难性调仓。' 
        : 'Multi-million dollar alpha factors and live order books face extraction in multi-tenant cloud environments. Furthermore, autonomous execution agents risk catastrophic flash trades if prompt-injected.',
      riskPoints: [
        isZh ? '核心量化因子外流：第三方平台利用用户输入微调通用模型，侵蚀独家超额收益' : 'Extraction of proprietary factors and predictive signals into public foundation models',
        isZh ? 'Agent 提示词越狱：外来数据输入诱导智能体触发高危下单与跨账户转账 API' : 'Prompt injection triggering unauthorized broker routing or ledger settlements',
        isZh ? '监管穿透审计困难：缺乏每一次 Agent 外部动作前硬隔离检验的确定性证据' : 'Inability to provide deterministic pre-execution proof for SEC and FINRA examinations',
      ],
      solutionTitle: isZh ? 'SafeCompute 破局方案：TrustGate 行为防火墙 + 权重飞地保护' : 'The SafeCompute Solution: TrustGate Action Firewall & Weight Enclave',
      solutionDesc: isZh 
        ? '金融机构的专属模型权重被置于硬件可信执行环境 (EnclaveX) 严密封装；自主交易 Agent 发出的每一道 API 调用，均需在 1.8 毫秒内通过 TrustGate 动态有限状态机验证，硬编码风控红线物理阻断越权指令。' 
        : 'Proprietary weights execute inside hardware enclaves. Every tool invocation and trade routing intent is deterministically verified within 1.8ms by TrustGate before reaching broker gateways.',
      architecturePillars: [
        {
          title: isZh ? '亚毫秒级确定性行为拦截' : 'Sub-2ms Deterministic Action Firewall',
          desc: isZh ? '实时阻止未授权转账、仓位超出风险限额或非标接口调用，物理阻断异常行为。' : 'Statically bound state machines intercept rogue API calls before execution.',
        },
        {
          title: isZh ? '全链路高频穿透审计轨迹' : 'FINRA & SOC2 Type II Native Audit Trails',
          desc: isZh ? '自动记录不可篡改的加密执行日志，支持高频量化与大额头寸的穿透式事后回溯。' : 'Immutable, cryptographically signed ledger of every agent perception and proposal.',
        },
      ],
      quantifiableRoi: [
        { metric: '< 2ms', label: isZh ? 'TrustGate 风控核验延迟' : 'Firewall Verification Latency' },
        { metric: '0 笔', label: isZh ? '未授权/越权交易触发' : 'Unauthorized Trade Invocations' },
        { metric: '99.5%+', label: isZh ? '量化策略模型精度保留' : 'Strategy Model Fidelity' },
      ],
      complianceBadge: isZh ? '符合 SOC2 Type II / SEC Rule 17a-4 / FINRA 算法合规标准' : 'Compliant with SOC2 Type II, SEC 17a-4, and FINRA Algorithmic Trading Rules',
    },

    healthcare: {
      label: isZh ? '医疗集团与生物科技' : 'Healthcare Systems & BioTech',
      icon: <HeartPulse className="w-4 h-4" />,
      color: 'text-teal-400',
      accentBg: 'bg-teal-500/10',
      borderAccent: 'border-teal-500/40',
      badge: isZh ? '符合 HIPAA / PHI 零明文外泄' : '100% HIPAA & PHI Compliant',
      tagline: isZh 
        ? '盲态挖掘数百万电子病历 (EHR) 与数十亿美元在研药物靶点，彻底消除隐私侵权与知识产权流失风险' 
        : 'Analyze millions of electronic health records (EHR) and billion-dollar molecular structures with mathematical PHI isolation.',
      decisionMaker: isZh ? '决策人：首席医疗信息官 (CMIO)、研发副总裁、数据合规总监' : 'For: Chief Medical Information Officers, Heads of R&D & Privacy Officers',
      challengeTitle: isZh ? '当前致命阻碍：HIPAA 巨额罚单与未公开药物专利流失' : 'The Core Dilemma: Catastrophic HIPAA Penalties & Molecule Scraping',
      challengeDesc: isZh 
        ? '患者电子病历包含极其敏感的个人健康数据 (PHI)，未经脱敏上传云端面临每年最高千万美元的民事和刑事重罚；但传统规则脱敏会破坏医学上下文语义；而药企未公开的新药分子式一旦被云模型吸收，将带来数十亿美元专利损失。' 
        : 'Uploading raw PHI to external clouds triggers severe HIPAA fines and de-identification rules destroy medical context. BioTech patent candidates face accidental leakage into cloud LLM training sets.',
      riskPoints: [
        isZh ? '传统脱敏破坏医学语义：抹去年龄、病程与数值后，AI 无法做出准确诊断分析' : 'Regex maskers strip vital diagnostic context, crippling clinical trial matching accuracy',
        isZh ? '新药分子式知识产权失窃：高价值在研肿瘤靶点被公有云厂商作为语料沉淀' : 'Patent candidates and drug formulations scraped by cloud inference intermediaries',
        isZh ? '患者隐私泄露公关灾难：任何显存转储漏洞都将导致医疗机构声誉毁灭' : 'Hospital system reputational destruction following any cloud provider memory breach',
      ],
      solutionTitle: isZh ? 'SafeCompute 破局方案：全流程盲态医学推理' : 'The SafeCompute Solution: Blind Clinical EHR Inference',
      solutionDesc: isZh 
        ? 'SafeCompute 在本地边界完成协变张量混淆，完整保留患者生化指标与病程的时间演进关系，却不含任何可直接定位个体的明文字符。云端顶尖大模型与多模态基座满血执行临床试验匹配，全程零 PHI 离开企业受控边界。' 
        : 'Clinical time-series and laboratory metrics are cryptographically obfuscated. Cloud models perform deep clinical reasoning without receiving an identifiable byte, ensuring flawless HIPAA compliance.',
      architecturePillars: [
        {
          title: isZh ? '保留完整医学语义的高维混淆' : 'Semantic-Preserving High-Dimensional Noise',
          desc: isZh ? '无需生硬抹除数据字段，临床指标关联度完好保留，推理准确率高达 99.8%。' : 'Retains biochemical correlations for trial matching while eliminating individual re-identification.',
        },
        {
          title: isZh ? '双向隔离的专有化学结构保护' : 'Proprietary Molecule & Target Shielding',
          desc: isZh ? '在公有云执行逆合成孔径推理，药物分子关键官能团经过代数变换，无法被云端逆向。' : 'Drug candidates transformed into blind graph manifolds impervious to cloud extraction.',
        },
      ],
      quantifiableRoi: [
        { metric: '0 例', label: isZh ? '可识别 PHI 违规流出' : 'PHI Violations / Breaches' },
        { metric: '8x', label: isZh ? '罕见病临床入组筛选提速' : 'Clinical Trial Screening Speedup' },
        { metric: '99.8%', label: isZh ? '病历推理诊断精准度' : 'Diagnostic Reasoning Accuracy' },
      ],
      complianceBadge: isZh ? '严格遵循 HIPAA Security Rule / HITECH / 欧盟 GDPR Article 9' : 'Strictly HIPAA Security Rule, HITECH, & EU GDPR Article 9 Certified',
    },

    government: {
      label: isZh ? '政府国防与关键基建' : 'Government & Public Sector',
      icon: <Building2 className="w-4 h-4" />,
      color: 'text-amber-400',
      accentBg: 'bg-amber-500/10',
      borderAccent: 'border-amber-500/40',
      badge: isZh ? '国家级数据主权 · 物理机房不可信假设' : 'National Data Sovereignty · Zero Cloud Trust',
      tagline: isZh 
        ? '在算力节点位于不可信公有云或第三方集群的极端对抗假设下，依然保障国家涉密政务与国防研报的绝对主权' 
        : 'Deliver state-level AI intelligence over sovereign policy documents and public records even across untrusted physical compute infrastructure.',
      decisionMaker: isZh ? '决策人：政企信息主管、国家保密技术部门、智慧城市总工' : 'For: Agency CIOs, National Cyber Security Directors & Defense IT Leadership',
      challengeTitle: isZh ? '当前致命阻碍：云厂商“内部人威胁”与境外法权长臂管辖' : 'The Core Dilemma: Cloud Insider Threats & Jurisdictional Coercion',
      challengeDesc: isZh 
        ? '涉密政务、城市关键基础设施调度与国防防务文档，绝不能受制于云厂商管理员的物理审查或外方法律的传票调取；而纯离线自建算力成本高昂，且算力集群代际落后数年，无法享用全球最先进的顶尖云端大模型基座。' 
        : 'National security briefs and critical infrastructure controls cannot be subjected to foreign subpoena or hypervisor root administrators. Yet air-gapped clusters lag years behind frontier cloud models.',
      riskPoints: [
        isZh ? '云厂商超级管理员权限滥用：Root 账号可无感知嗅探容器内存与挂载盘' : 'Cloud hypervisor superusers can silently inspect virtual machine memory dumps',
        isZh ? '数据跨境与长臂管辖冲突：跨国云服务商可能被迫依照境外法令移交托管数据' : 'Foreign legal discovery demands can legally compel cloud vendors to turn over keys',
        isZh ? '算力鸿沟制约：自建机房昂贵且显卡供应受限，难以跟进最新一代大模型' : 'On-premise hardware shortages leave agencies stuck on outdated, underpowered models',
      ],
      solutionTitle: isZh ? 'SafeCompute 破局方案：数学主权屏障 + 物理硬件隔离' : 'The SafeCompute Solution: Cryptographic Sovereignty Across Untrusted Cloud',
      solutionDesc: isZh 
        ? '建立“算力在公网、主权在内网”的颠覆性架构。哪怕公有云服务器已被敌对势力物理攻占，其显存与网络抓包中也只有纯粹的数学单向混淆噪声。国家核心数据主权由企业/机构本地硬件密钥唯一锁定。' 
        : 'Decouples computational muscle from data sovereignty. Even if cloud physical nodes are compromised, raw memory captures reveal only high-entropy mathematical noise decipherable only by sovereign on-prem HSMs.',
      architecturePillars: [
        {
          title: isZh ? '抗国家级攻击者的数学证明' : 'Cryptographic Proof Against Nation-State Threat Actors',
          desc: isZh ? '代数扰动矩阵基于高维不可逆置换，数学证明在无私钥条件下逆向复杂度超宇宙寿命。' : 'Permutation matrices provably secure against polynomial-time reverse engineering.',
        },
        {
          title: isZh ? '内网硬件安全模块 (HSM/KMS) 根信任' : 'On-Premises HSM & KMS Root-of-Trust Integration',
          desc: isZh ? '支持国家商密与本地专用安全模块无缝桥接，加解密私钥物理封存于机构内网，不接触外部云。' : 'Keys managed within local enterprise HSMs and secure key management systems outside cloud reach.',
        },
      ],
      quantifiableRoi: [
        { metric: '0%', label: isZh ? '对公有云物理安全依赖' : 'Cloud Infrastructure Trust' },
        { metric: '100%', label: isZh ? '自主受控国家数据主权' : 'Sovereign Control Retained' },
        { metric: '10x', label: isZh ? '相较纯自建集群成本缩减' : 'Cost Reduction vs Air-Gap' },
      ],
      complianceBadge: isZh ? '满足国家网络安全等级保护 / 涉密数据主权与物理机房零信任要求' : 'Designed for National Data Sovereignty & Zero-Trust Cloud Compute Requirements',
    },
  };

  const current = industries[selectedIndustry];

  return (
    <section id="solutions" className="py-24 bg-[#080B12] border-t border-[#1E2638] relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121722] border border-[#1E2638] text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isZh ? '高安全行业的生产力破局' : 'ENTERPRISE INDUSTRY SOLUTIONS'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            {isZh ? '为最苛刻的高保密行业，打破 AI 落地禁区' : 'Engineered for High-Stakes Industries Where Plaintext Leaks Are Fatal'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
            {isZh 
              ? '法律特免权、金融对冲量化、患者绝密病历与涉密政务，过去因合规死锁被彻底排除在公有云 AI 之外。SafeCompute 让高权限智能体在零信任算力上安全狂奔。' 
              : 'Unlock frontier AI capabilities for law, finance, healthcare, and public sector organizations without surrendering confidentiality or violating legal mandates.'}
          </p>
        </div>

        {/* 4 Industry Selector Navigation Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {(Object.keys(industries) as IndustryKey[]).map((key) => {
            const ind = industries[key];
            const isActive = selectedIndustry === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedIndustry(key)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#131C2E] border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.15)] ring-1 ring-cyan-400/40'
                    : 'bg-[#0E131E] border-[#1E2638] hover:border-slate-600 hover:bg-[#121724]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800/80 text-slate-400'}`}>
                    {ind.icon}
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>
                <div>
                  <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {ind.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5 truncate">
                    {ind.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Strategic Solution Showcase Box */}
        <div className="rounded-3xl bg-[#0B0F19] border border-[#1E2638] p-6 sm:p-10 shadow-2xl space-y-10">
          
          {/* Top Banner: Decision Maker & Executive Value Prop */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#1E2638]">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-mono px-3 py-1 rounded-full ${current.accentBg} ${current.borderAccent} ${current.color} font-bold border`}>
                  {current.badge}
                </span>
                <span className="text-xs font-mono text-slate-400 bg-[#121722] px-3 py-1 rounded-full border border-[#1E2638]">
                  {current.decisionMaker}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {current.tagline}
              </h3>
              <div className="text-xs font-mono text-emerald-400/90 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4" />
                <span>{current.complianceBadge}</span>
              </div>
            </div>

            {/* Quick Consultation Button */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3.5 text-xs font-bold text-[#0B0E14] bg-gradient-to-r from-cyan-400 to-[#10B981] hover:from-cyan-300 hover:to-[#34D399] rounded-xl shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>{isZh ? '预约该行业场景闭门演示' : 'Request Industry Proof of Concept'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2-Column Deep Architecture: Pain vs Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Why Current Cloud AI is Banned (The Pain) */}
            <div className="lg:col-span-6 rounded-2xl bg-[#120F16] border border-rose-500/20 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-3">
                  <ShieldAlert className="w-4 h-4" />
                  <span>{isZh ? '行业合规死局（为何以往一票否决）' : 'The Status Quo Roadblock'}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {current.challengeTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {current.challengeDesc}
                </p>

                <div className="space-y-3 pt-2 border-t border-rose-500/20">
                  {current.riskPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-500/20 text-[11px] font-mono text-rose-300/80 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>{isZh ? '总法律顾问与合规委员会的既往结论：禁止在公网直接接入大模型' : 'Outcome: Total executive ban on cloud LLM deployment'}</span>
              </div>
            </div>

            {/* Right Column: How SafeCompute Solves It (The Architecture) */}
            <div className="lg:col-span-6 rounded-2xl bg-[#0C1520] border border-emerald-500/30 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isZh ? 'SafeCompute 破局工程实现' : 'The SafeCompute Architectural Unlock'}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {current.solutionTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {current.solutionDesc}
                </p>

                <div className="grid grid-cols-1 gap-4 pt-2 border-t border-emerald-500/20">
                  {current.architecturePillars.map((pillar, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-[#081018] border border-emerald-500/20">
                      <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{pillar.title}</span>
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed pl-5">
                        {pillar.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-500/20 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>{isZh ? '无需更换现有业务工作流，作为安全网关无感接入' : 'Zero rip-and-replace: Deployed as inline sovereign proxy'}</span>
              </div>
            </div>

          </div>

          {/* Bottom ROI & Quantifiable Metric Bar */}
          <div className="p-6 rounded-2xl bg-[#090D15] border border-[#1E2638] grid grid-cols-1 sm:grid-cols-3 gap-6">
            {current.quantifiableRoi.map((roi, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-2xl sm:text-3xl font-black font-mono text-white bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  {roi.metric}
                </span>
                <span className="text-xs text-slate-400 font-medium mt-1">
                  {roi.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
