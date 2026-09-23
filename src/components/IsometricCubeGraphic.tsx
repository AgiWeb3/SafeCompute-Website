import React, { useState } from 'react';
import { Shield, Lock, Cpu, Layers, ArrowRight, CheckCircle2, Activity, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n';

type LayerKey = 'all' | 'crypto' | 'tee' | 'trust';

interface LayerInfo {
  tag: string;
  badgeTop: string;
  badgeBottom: string;
  title: string;
  role: string;
  desc: string;
  metrics: { label: string; value: string }[];
  actionAnchor: string;
  actionText: string;
}

export const IsometricCubeGraphic: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<LayerKey>('all');
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();

  const isZhCN = language === 'zh-CN';
  const isZhTW = language === 'zh-TW';

  const layerData: Record<LayerKey, LayerInfo> = {
    all: {
      tag: isZhCN ? '三层一体纵深防御' : isZhTW ? '三層一體縱深防禦' : 'TRIPLE-LAYER SOVEREIGN DEFENSE',
      badgeTop: isZhCN ? '全栈协同生效 · 100% 零信任' : isZhTW ? '全棧協同生效 · 100% 零信任' : 'FULL STACK ACTIVE: ZERO CLOUD TRUST',
      badgeBottom: isZhCN ? '同态代数 + 硬件飞地 + 行为防火墙' : isZhTW ? '同態代數 + 硬體飛地 + 行為防火牆' : 'COVARPRI + ENCLAVEX + TRUSTGATE',
      title: isZhCN ? '端到端全栈主权闭环' : isZhTW ? '端到端全棧主權閉環' : 'Full-Stack Sovereign Enclave',
      role: isZhCN ? '核心定位：打破安全、速度与精度的“不可能三角”' : isZhTW ? '核心定位：打破安全、速度與精度的「不可能三角」' : 'Architectural Role: Universal Sovereign Defense',
      desc: isZhCN 
        ? '三大防线协同运作：输入张量在端侧代数混淆（CovarPri），GPU 运算全程置于硬件飞地（EnclaveX），智能体的每一次外部调用均受行为防火墙（TrustGate）毫秒级审查。'
        : isZhTW
        ? '三大防線協同運作：輸入張量在端側代數混淆（CovarPri），GPU 運算全程置於硬體飛地（EnclaveX），智能體的每一次外部調用均受行為防火牆（TrustGate）毫秒級審查。'
        : 'All 3 layers working in concert: Input tensors are algebraically obfuscated at the client, cloud execution is bound to hardware TEEs, and every autonomous agent action is vetted by TrustGate in real time.',
      metrics: [
        { label: isZhCN ? '明文泄露率' : isZhTW ? '明文洩漏率' : 'Plaintext Risk', value: '0.0%' },
        { label: isZhCN ? '全流程延迟' : isZhTW ? '全流程延遲' : 'Total Latency', value: '< 10%' },
        { label: isZhCN ? '安全合规性' : isZhTW ? '安全合規性' : 'Compliance', value: 'Privilege Ready' },
      ],
      actionAnchor: '#onion-architecture',
      actionText: isZhCN ? '深入解析洋葱纵深架构' : isZhTW ? '深入解析洋蔥縱深架構' : 'Explore Onion Architecture',
    },
    crypto: {
      tag: isZhCN ? '第3层：张量与权重内核' : isZhTW ? '第3層：張量與權重核心' : 'LAYER 3: TENSOR & WEIGHT CORE',
      badgeTop: isZhCN ? 'COVARPRI 代数协变变换生效' : isZhTW ? 'COVARPRI 代數協變變換生效' : 'COVARPRI ALGEBRAIC CORE ACTIVE',
      badgeBottom: isZhCN ? '云端显存中完全无原始明文' : isZhTW ? '雲端顯存中完全無原始明文' : 'ZERO PLAINTEXT IN CLOUD VRAM',
      title: isZhCN ? 'CovarPri 代数协变张量混淆' : isZhTW ? 'CovarPri 代數協變張量混淆' : 'CovarPri Covariant Tensor Obfuscation',
      role: isZhCN ? '数学防线：云端 GPU 只能看到高熵扰动矩阵' : isZhTW ? '數學防線：雲端 GPU 只能看到高熵擾動矩陣' : 'Mathematical Proof: Zero-Plaintext Attention Invariant',
      desc: isZhCN
        ? '利用西尔维斯特酉矩阵与等距置换变换，对自注意力机制的 Q 与 K 矩阵注入受控代数扰动。云端 GPU 进行点积运算时自动抵消扰动，既无需模型重训，又彻底抹除明文信息。'
        : isZhTW
        ? '利用西爾維斯特酉矩陣與等距置換變換，對自注意力機制的 Q 與 K 矩陣注入受控代數擾動。雲端 GPU 進行點積運算時自動抵消擾動，既無需模型重訓，又徹底抹除明文資訊。'
        : 'Transforms LLM linear projections and KV-cache using isometric permutation matrices. Cloud servers compute on high-entropy noise; dot products naturally cancel the obfuscation inside attention layers with sub-10% overhead.',
      metrics: [
        { label: isZhCN ? '明文暴露度' : isZhTW ? '明文暴露度' : 'Plaintext VRAM', value: '0 Bytes' },
        { label: isZhCN ? '精度保留率' : isZhTW ? '精度保留率' : 'Accuracy Kept', value: '99.5%+' },
        { label: isZhCN ? '硬件隔离' : isZhTW ? '硬體隔離' : 'Hardware Isolation', value: isZhCN ? '芯片级 TEE' : isZhTW ? '晶片級 TEE' : 'Chip-Level TEE' },
      ],
      actionAnchor: '#benchmarks',
      actionText: isZhCN ? '查看生产级实测基准' : isZhTW ? '查看生產級實測基準' : 'View Production Benchmarks',
    },
    tee: {
      tag: isZhCN ? '第2层：硬件隔离与内存屏障' : isZhTW ? '第2層：硬體隔離與記憶體屏障' : 'LAYER 2: HARDWARE ISOLATION & TEE',
      badgeTop: isZhCN ? 'AMD SEV-SNP / TDX 远程度量通过' : isZhTW ? 'AMD SEV-SNP / TDX 遠程度量通過' : 'HARDWARE ENCLAVEX ATTESTED',
      badgeBottom: isZhCN ? '物理总线与宿主管理员完全隔离' : isZhTW ? '實體匯流排與主機管理員完全隔離' : 'ROOT HYPERVISOR BLOCKED',
      title: isZhCN ? 'EnclaveX 芯片级硬件机密飞地' : isZhTW ? 'EnclaveX 晶片級硬體機密飛地' : 'EnclaveX Confidential Hardware Enclave',
      role: isZhCN ? '硬件防线：根除宿主机越权与侧信道嗅探' : isZhTW ? '硬體防線：根除主機越權與側信道嗅探' : 'Hardware Defense: Cryptographic Root of Trust',
      desc: isZhCN
        ? '深度集成 AMD SEV-SNP 与 Intel TDX 芯片级机密计算指令集。通过硬件内存页加密与密码学度量哈希，即使用户直接把代码跑在不受信的公有云上，云厂商特权管理员与宿主虚拟化层也无法读取内存数据。'
        : isZhTW
        ? '深度集成 AMD SEV-SNP 與 Intel TDX 晶片級機密計算指令集。透過硬體記憶體分頁加密與密碼學度量雜湊，即使用戶直接把程式碼跑在不受信的公有雲上，雲端廠商特權管理員與虛擬化層也無法讀取記憶體資料。'
        : 'Confines runtime execution inside hardware-encrypted CPU/GPU enclaves. Dedicated co-processors enforce cryptographic remote attestation, preventing memory dump attacks, DMA interception, and cloud provider snooping.',
      metrics: [
        { label: isZhCN ? '内存加密' : isZhTW ? '記憶體加密' : 'Encryption', value: 'AES-256-XTS' },
        { label: isZhCN ? '硬件证明' : isZhTW ? '硬體證明' : 'Attestation', value: 'Remote HW Root' },
        { label: isZhCN ? '损耗控制' : isZhTW ? '損耗控制' : 'Hardware Lag', value: '< 2.5%' },
      ],
      actionAnchor: '#onion-architecture',
      actionText: isZhCN ? '查阅 EnclaveX 硬件技术规范' : isZhTW ? '查閱 EnclaveX 硬體技術規範' : 'Inspect EnclaveX Hardware Specs',
    },
    trust: {
      tag: isZhCN ? '第1层：自主行为与指令防火墙' : isZhTW ? '第1層：自主行為與指令防火牆' : 'LAYER 1: INTENT & TOOL ACTION FIREWALL',
      badgeTop: isZhCN ? 'TRUSTGATE 行为防火墙已激活' : isZhTW ? 'TRUSTGATE 行為防火牆已啟動' : 'TRUSTGATE FIREWALL: INLINE ACTIVE',
      badgeBottom: isZhCN ? '1.8ms 极速拦截越狱与越权 API 调用' : isZhTW ? '1.8ms 極速攔截越獄與越權 API 調用' : 'SUB-2MS DETERMINISTIC VETO',
      title: isZhCN ? 'TrustGate 实时行为风控网关' : isZhTW ? 'TrustGate 即時行為風控閘道' : 'TrustGate Autonomous Action Firewall',
      role: isZhCN ? '行为防线：拦截恶意越狱、Prompt注入与越权工具调用' : isZhTW ? '行為防線：攔截惡意越獄、Prompt注入與越權工具調用' : 'Execution Defense: Inline Tool & Policy Gatekeeper',
      desc: isZhCN
        ? '专门针对 Autonomous Agent 打造的实时执行风控网关。在智能体发起外部工具调用（转账、查询数据库、外发邮件等）前，在 2 毫秒内完成意图核验、IAM 权限校验与对抗性 Prompt 注入检测，坚决否决异常行动。'
        : isZhTW
        ? '專門針對 Autonomous Agent 打造的即時執行風控閘道。在智能體發起外部工具調用（轉帳、查詢資料庫、外發郵件等）前，在 2 毫秒內完成意圖核驗、IAM 權限校驗與對抗性 Prompt 注入檢測，堅決否決異常行動。'
        : 'The inline security gateway for autonomous agents: Evaluates prompt injections, jailbreaks, and checks every outbound tool dispatch against strict enterprise IAM and RBAC schemas in under 2.0ms before execution.',
      metrics: [
        { label: isZhCN ? '审查耗时' : isZhTW ? '審查耗時' : 'Veto Latency', value: '1.8 ms' },
        { label: isZhCN ? '越狱拦截率' : isZhTW ? '越獄攔截率' : 'Injection Block', value: '99.98%' },
        { label: isZhCN ? '风控机制' : isZhTW ? '風控機制' : 'Policy Engine', value: 'Deterministic' },
      ],
      actionAnchor: '#onion-architecture',
      actionText: isZhCN ? '体验实时防火墙拦截演示' : isZhTW ? '體驗即時防火牆攔截展示' : 'Test Live Action Simulator',
    },
  };

  const current = layerData[activeLayer];

  return (
    <div className="w-full max-w-[580px] mx-auto flex flex-col items-center">
      {/* 3D Isometric Lattice Interactive Graphic Box */}
      <div 
        className="relative w-full aspect-square flex items-center justify-center p-3 select-none rounded-3xl bg-[#0e131d]/60 border border-[#1E2638] shadow-2xl overflow-hidden backdrop-blur-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dynamic Background Radial Glow based on active layer */}
        <div 
          className={`absolute inset-0 opacity-70 pointer-events-none filter blur-3xl transition-colors duration-700 ${
            activeLayer === 'crypto' 
              ? 'bg-cyan-500/20' 
              : activeLayer === 'tee' 
              ? 'bg-emerald-500/20' 
              : activeLayer === 'trust' 
              ? 'bg-amber-500/20' 
              : 'bg-gradient-to-tr from-emerald-500/15 via-cyan-500/15 to-teal-500/15'
          }`} 
        />

        {/* Matrix Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 500 500">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10B981" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
          
          {/* Concentric rotating radar rings */}
          <circle 
            cx="250" 
            cy="250" 
            r="185" 
            fill="none" 
            stroke={activeLayer === 'trust' ? '#F59E0B' : '#00F2FE'} 
            strokeWidth={activeLayer === 'trust' ? '2' : '1'} 
            strokeDasharray="4 8" 
            className="animate-spin" 
            style={{ animationDuration: '40s' }} 
          />
          <circle 
            cx="250" 
            cy="250" 
            r="225" 
            fill="none" 
            stroke={activeLayer === 'tee' ? '#34D399' : '#10B981'} 
            strokeWidth={activeLayer === 'tee' ? '2' : '1'} 
            strokeDasharray="6 12" 
            className="animate-spin" 
            style={{ animationDuration: '60s', animationDirection: 'reverse' }} 
          />
        </svg>

        {/* 3D Isometric Lattice Cube Render */}
        <div className={`relative z-10 w-full h-full flex items-center justify-center transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          <svg viewBox="0 0 400 400" className="w-full h-full filter drop-shadow-[0_0_35px_rgba(16,185,129,0.3)]">
            <defs>
              <linearGradient id="beamGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#065F46" />
              </linearGradient>
              <linearGradient id="beamCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#67E8F9" />
                <stop offset="100%" stopColor="#0891B2" />
              </linearGradient>
              <linearGradient id="beamAmber" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
              <linearGradient id="coreGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
              </linearGradient>
              <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Central Protected Core Sphere (CovarPri Tensors) */}
            <g 
              className={`transition-all duration-500 ${
                activeLayer === 'crypto' 
                  ? 'scale-115 transform-origin-center filter drop-shadow-[0_0_30px_#00F2FE]' 
                  : activeLayer === 'all' 
                  ? 'animate-pulse' 
                  : 'opacity-40'
              }`}
              style={{ transformOrigin: '200px 200px', animationDuration: '3s' }}
            >
              <circle 
                cx="200" 
                cy="200" 
                r={activeLayer === 'crypto' ? '54' : '46'} 
                fill="url(#coreGlow)" 
              />
              <circle 
                cx="200" 
                cy="200" 
                r={activeLayer === 'crypto' ? '64' : '54'} 
                fill="none" 
                stroke={activeLayer === 'crypto' ? '#00F2FE' : '#34D399'} 
                strokeWidth={activeLayer === 'crypto' ? '2.5' : '1.5'} 
                strokeDasharray={activeLayer === 'crypto' ? '5 5' : '3 3'} 
                className="animate-spin"
                style={{ transformOrigin: '200px 200px', animationDuration: '12s' }}
              />
              
              {/* Algebraic Invariant Symbol */}
              <text 
                x="200" 
                y="206" 
                textAnchor="middle" 
                fill="#FFFFFF" 
                fontSize={activeLayer === 'crypto' ? '18' : '16'} 
                fontFamily="JetBrains Mono, monospace" 
                fontWeight="bold"
              >
                {activeLayer === 'crypto' ? 'P·X·Pᵀ' : 'Q·Kᵀ'}
              </text>
            </g>

            {/* Outer Hardware Cage (EnclaveX Layer) */}
            <g className={`transition-opacity duration-500 ${activeLayer === 'crypto' ? 'opacity-30' : activeLayer === 'tee' ? 'opacity-100' : 'opacity-85'}`}>
              {/* Top Face */}
              <path
                d="M 200 80 L 310 144 L 200 208 L 90 144 Z"
                fill={activeLayer === 'tee' ? 'rgba(16,185,129,0.15)' : 'none'}
                stroke={activeLayer === 'tee' ? '#34D399' : 'url(#beamGreen)'}
                strokeWidth={activeLayer === 'tee' ? '4.5' : '3.5'}
                strokeLinejoin="round"
                filter="url(#glowEffect)"
              />
              {/* Top Internal Lattice Grid */}
              <path d="M 145 112 L 255 176" stroke="#34D399" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 255 112 L 145 176" stroke="#34D399" strokeWidth="1.5" strokeOpacity="0.7" />
              <path d="M 200 80 L 200 208" stroke="#34D399" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.5" />
              <path d="M 90 144 L 310 144" stroke="#34D399" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.5" />

              {/* Left Face */}
              <path
                d="M 90 144 L 200 208 L 200 336 L 90 272 Z"
                fill={activeLayer === 'tee' ? 'rgba(16,185,129,0.1)' : 'none'}
                stroke={activeLayer === 'tee' ? '#10B981' : 'url(#beamGreen)'}
                strokeWidth={activeLayer === 'tee' ? '4.5' : '3.5'}
                strokeLinejoin="round"
                filter="url(#glowEffect)"
              />
              {/* Left Face Internal Grid */}
              <path d="M 90 208 L 200 272" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.6" />
              <path d="M 145 176 L 145 304" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.6" />

              {/* Right Face */}
              <path
                d="M 200 208 L 310 144 L 310 272 L 200 336 Z"
                fill={activeLayer === 'tee' ? 'rgba(0,242,254,0.1)' : 'none'}
                stroke={activeLayer === 'tee' ? '#00F2FE' : 'url(#beamCyan)'}
                strokeWidth={activeLayer === 'tee' ? '4.5' : '3.5'}
                strokeLinejoin="round"
                filter="url(#glowEffect)"
              />
              {/* Right Face Internal Grid */}
              <path d="M 200 272 L 310 208" stroke="#00F2FE" strokeWidth="1.5" strokeOpacity="0.6" />
              <path d="M 255 176 L 255 304" stroke="#00F2FE" strokeWidth="1.5" strokeOpacity="0.6" />

              {/* Depth Lattice Struts */}
              <line x1="200" y1="80" x2="200" y2="150" stroke="#6EE7B7" strokeWidth="2.5" />
              <line x1="90" y1="144" x2="150" y2="180" stroke="#6EE7B7" strokeWidth="2.5" />
              <line x1="310" y1="144" x2="250" y2="180" stroke="#6EE7B7" strokeWidth="2.5" />
              <line x1="90" y1="272" x2="150" y2="240" stroke="#6EE7B7" strokeWidth="2.5" />
              <line x1="310" y1="272" x2="250" y2="240" stroke="#6EE7B7" strokeWidth="2.5" />
              <line x1="200" y1="336" x2="200" y2="265" stroke="#6EE7B7" strokeWidth="2.5" />
            </g>

            {/* Perimeter Action Firewall (TrustGate Ring) */}
            <g className={`transition-all duration-500 ${activeLayer === 'trust' ? 'opacity-100' : activeLayer === 'all' ? 'opacity-60' : 'opacity-20'}`}>
              <polygon
                points="200,50 335,128 335,285 200,365 65,285 65,128"
                fill={activeLayer === 'trust' ? 'rgba(245,158,11,0.08)' : 'none'}
                stroke={activeLayer === 'trust' ? '#F59E0B' : '#00F2FE'}
                strokeWidth={activeLayer === 'trust' ? '3' : '1.5'}
                strokeDasharray={activeLayer === 'trust' ? '8 4' : '4 6'}
                className={activeLayer === 'trust' ? 'animate-pulse' : ''}
              />
              {activeLayer === 'trust' && (
                <>
                  <circle cx="200" cy="50" r="6" fill="#F59E0B" className="animate-ping" />
                  <circle cx="335" cy="128" r="6" fill="#F59E0B" className="animate-ping" />
                  <circle cx="65" cy="128" r="6" fill="#F59E0B" className="animate-ping" />
                </>
              )}
            </g>

            {/* Active Geometric Nodes */}
            <circle cx="200" cy="80" r="5" fill="#00F2FE" className="animate-ping" style={{ animationDuration: '4s' }} />
            <circle cx="200" cy="80" r="5" fill="#00F2FE" />
            <circle cx="310" cy="144" r="4.5" fill="#10B981" />
            <circle cx="90" cy="144" r="4.5" fill="#10B981" />
            <circle cx="200" cy="336" r="5" fill="#00F2FE" />
            <circle cx="90" cy="272" r="4.5" fill="#10B981" />
            <circle cx="310" cy="272" r="4.5" fill="#10B981" />

            {/* Live Data Flow Particles */}
            <path
              d="M 90 144 L 200 208 L 310 144"
              fill="none"
              stroke={activeLayer === 'trust' ? '#F59E0B' : '#00F2FE'}
              strokeWidth="2.5"
              strokeDasharray="8 12"
              className="animate-pulse"
            />
          </svg>

          {/* Floating Live Telemetry Badges */}
          <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-[#121722]/95 border border-[#1E2638] text-xs font-mono backdrop-blur-md shadow-xl flex items-center gap-2 transition-all">
            <span className={`w-2 h-2 rounded-full animate-ping ${
              activeLayer === 'crypto' 
                ? 'bg-cyan-400' 
                : activeLayer === 'tee' 
                ? 'bg-emerald-400' 
                : activeLayer === 'trust' 
                ? 'bg-amber-400' 
                : 'bg-emerald-400'
            }`} />
            <span className={
              activeLayer === 'crypto' 
                ? 'text-cyan-300 font-semibold' 
                : activeLayer === 'tee' 
                ? 'text-emerald-300 font-semibold' 
                : activeLayer === 'trust' 
                ? 'text-amber-300 font-semibold' 
                : 'text-emerald-300 font-semibold'
            }>
              {current.badgeTop}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-[#121722]/95 border border-[#1E2638] text-xs font-mono backdrop-blur-md shadow-xl flex items-center gap-2 transition-all">
            {activeLayer === 'crypto' && <Lock className="w-3.5 h-3.5 text-cyan-400" />}
            {activeLayer === 'tee' && <Cpu className="w-3.5 h-3.5 text-emerald-400" />}
            {activeLayer === 'trust' && <Shield className="w-3.5 h-3.5 text-amber-400" />}
            {activeLayer === 'all' && <Activity className="w-3.5 h-3.5 text-teal-400" />}
            <span className="text-slate-300 text-[11px]">
              {current.badgeBottom}
            </span>
          </div>
        </div>

        {/* 4 Clickable Layer Selector Tabs */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-20">
          <span className="sr-only">Layer Selector</span>
        </div>
      </div>

      {/* Layer Inspection Tabs Switcher */}
      <div className="w-full mt-4 p-1.5 rounded-2xl bg-[#121722] border border-[#1E2638] grid grid-cols-4 gap-1.5 shadow-lg">
        <button
          onClick={() => setActiveLayer('all')}
          className={`py-2 px-2.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeLayer === 'all'
              ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">Full Stack</span>
        </button>

        <button
          onClick={() => setActiveLayer('crypto')}
          className={`py-2 px-2.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeLayer === 'crypto'
              ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-400/60 shadow-[0_0_15px_rgba(0,242,254,0.25)]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
          }`}
        >
          <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="truncate">CovarPri</span>
        </button>

        <button
          onClick={() => setActiveLayer('tee')}
          className={`py-2 px-2.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeLayer === 'tee'
              ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/60 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
          }`}
        >
          <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">EnclaveX</span>
        </button>

        <button
          onClick={() => setActiveLayer('trust')}
          className={`py-2 px-2.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
            activeLayer === 'trust'
              ? 'bg-amber-500/25 text-amber-300 border border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
          }`}
        >
          <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">TrustGate</span>
        </button>
      </div>

      {/* Layer Deep-Dive Telemetry Card (Directly responds to clicks!) */}
      <div className={`w-full mt-3 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
        activeLayer === 'crypto' 
          ? 'bg-[#0f1724]/90 border-cyan-500/40 shadow-[0_0_25px_rgba(0,242,254,0.12)]' 
          : activeLayer === 'tee' 
          ? 'bg-[#0e1a17]/90 border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.12)]' 
          : activeLayer === 'trust' 
          ? 'bg-[#1a1710]/90 border-amber-500/40 shadow-[0_0_25px_rgba(245,158,11,0.12)]' 
          : 'bg-[#121722]/90 border-[#1E2638] shadow-lg'
      }`}>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
              activeLayer === 'crypto'
                ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                : activeLayer === 'tee'
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                : activeLayer === 'trust'
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                : 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
            }`}>
              {current.tag}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              ● {current.role}
            </span>
          </div>

          <a 
            href={current.actionAnchor}
            className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer group"
          >
            <span>{current.actionText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-2">
          <span>{current.title}</span>
          <Sparkles className="w-4 h-4 text-cyan-400" />
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed mb-3.5">
          {current.desc}
        </p>

        {/* Dynamic Key Performance Indicators for the Selected Layer */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-xs font-mono">
          {current.metrics.map((m, idx) => (
            <div key={idx} className="p-2 rounded-xl bg-[#0B0E14] border border-[#1E2638] flex flex-col justify-center">
              <span className="text-slate-400 text-[10px] uppercase truncate">{m.label}</span>
              <span className="font-bold text-white mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">{m.value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
