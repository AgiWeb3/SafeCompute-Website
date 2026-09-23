import React, { useState } from 'react';
import { X, FileText, Lock } from 'lucide-react';
import { useLanguage } from '../i18n';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [activeSection, setActiveSection] = useState<'abstract' | 'covarpri_math' | 'attestation' | 'trustgate_spec'>('abstract');
  const { t, language } = useLanguage();
  const wp = t.whitepaperModal;

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0E14]/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl h-[85vh] flex flex-col rounded-3xl bg-[#121722] border border-[#1E2638] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-blue-900/40 bg-[#080C16]">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-base font-bold text-white font-display">
                {wp.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {wp.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div
              title={language === 'zh-TW' ? '白皮書全文受知識產權與保密協定保護，暫不開放公開下載' : language === 'zh-CN' ? '白皮书全文受知识产权与保密协议保护，暂不开放公开下载' : 'Technical whitepaper restricted under NDA access'}
              className="px-3.5 py-1.5 rounded-lg bg-[#060B16] border border-blue-950 text-xs font-mono text-slate-500 flex items-center gap-1.5 cursor-not-allowed opacity-75"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>{language === 'zh-TW' ? 'PDF 下載暫未開放 (NDA 受限)' : language === 'zh-CN' ? 'PDF 下载暂未开放 (NDA 受限)' : 'PDF Download Restricted (NDA)'}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-[#060B16] border border-blue-900/40 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-blue-900/30 bg-[#060B16] px-6 text-xs font-mono overflow-x-auto">
          <button
            onClick={() => setActiveSection('abstract')}
            className={`py-3 px-4 border-b-2 font-medium cursor-pointer transition-colors ${
              activeSection === 'abstract'
                ? 'border-blue-400 text-blue-300 bg-[#090E1A]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            {wp.tabs.abstract}
          </button>
          <button
            onClick={() => setActiveSection('covarpri_math')}
            className={`py-3 px-4 border-b-2 font-medium cursor-pointer transition-colors ${
              activeSection === 'covarpri_math'
                ? 'border-blue-400 text-blue-300 bg-[#090E1A]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            {wp.tabs.covarpri}
          </button>
          <button
            onClick={() => setActiveSection('attestation')}
            className={`py-3 px-4 border-b-2 font-medium cursor-pointer transition-colors ${
              activeSection === 'attestation'
                ? 'border-blue-400 text-blue-300 bg-[#090E1A]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            {wp.tabs.attestation}
          </button>
          <button
            onClick={() => setActiveSection('trustgate_spec')}
            className={`py-3 px-4 border-b-2 font-medium cursor-pointer transition-colors ${
              activeSection === 'trustgate_spec'
                ? 'border-blue-400 text-blue-300 bg-[#090E1A]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            {wp.tabs.trustgate}
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
          
          {activeSection === 'abstract' && (
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white font-display">
                {wp.abstractContent.title}
              </h4>
              <p>{wp.abstractContent.p1}</p>
              <p>{wp.abstractContent.p2}</p>
              <div className="p-4 rounded-xl bg-[#060B16] border border-blue-500/30 text-blue-300 text-xs font-mono shadow-[0_0_15px_rgba(28,43,255,0.1)]">
                SafeCompute resolves the trilemma of Security, Latency, and Accuracy by unifying algebraic covariant obfuscation (CovarPri) with verified hardware execution boundaries (EnclaveX).
              </div>
            </div>
          )}

          {activeSection === 'covarpri_math' && (
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white font-display">
                2. CovarPri: Algebraic Covariant Obfuscation
              </h4>
              <p>
                Traditional Fully Homomorphic Encryption (FHE) incurs a 1000×–10,000× computational slowdown, rendering agent tool execution unviable. CovarPri demonstrates that linear projections inside transformer multi-head attention can be protected through isometric permutation matrices.
              </p>
              <div className="p-4 rounded-2xl bg-[#060B16] border border-blue-900/40 font-mono text-xs text-blue-300 space-y-2">
                <p className="text-slate-400">// Token-level Covariant Transformation</p>
                <p>X' = X · P_A + N(0, σ²)</p>
                <p>W'_Q = P_A⁻¹ · W_Q · P_B</p>
                <p>W'_K = P_A⁻¹ · W_K · P_B</p>
                <p className="pt-2 text-slate-400">// Invariant Dot Product</p>
                <p>Q' · (K')ᵀ = (X' W'_Q) · (X' W'_K)ᵀ = Q · Kᵀ</p>
              </div>
              <p className="text-xs text-slate-400">
                Because P_B is unitary (P_B · P_Bᵀ = I), the permutation cancels inside the attention matrix dot-product. Untrusted GPU servers observe only high-entropy pseudorandom matrices.
              </p>
            </div>
          )}

          {activeSection === 'attestation' && (
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white font-display">
                3. EnclaveX: Hardware Isolation &amp; Remote Attestation
              </h4>
              <p>
                EnclaveX integrates AMD SEV-SNP and Intel TDX extensions to enforce strict memory encryption keys managed exclusively by secure co-processors.
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs text-slate-300 font-mono">
                <li>Non-repudiable cryptographic signature generated by hardware root-of-trust.</li>
                <li>Measurement hash verified client-side before symmetric keys are released.</li>
                <li>Zero-knowledge verification ensures the cloud provider cannot inspect payload schemas.</li>
              </ul>
            </div>
          )}

          {activeSection === 'trustgate_spec' && (
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white font-display">
                4. TrustGate: Real-Time Action Firewall
              </h4>
              <p>
                TrustGate functions as an inline proxy between the LLM output parser and the enterprise API execution gateway.
              </p>
              <div className="p-4 rounded-xl bg-[#060B16] border border-blue-500/30 text-xs text-slate-300 space-y-2">
                <span className="font-bold text-blue-400">Deterministic Enforcement:</span>
                <p>Every tool invocation is evaluated against a dynamic finite state machine (FSM). Unauthorized schema mutations, prompt injections, and privilege escalations are rejected in under 2.0 milliseconds.</p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#080C16] border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>SafeCompute Technical Whitepaper · Revision 1.04</span>
          <span className="text-blue-400">Status: Peer-Reviewed</span>
        </div>

      </div>
    </div>
  );
};
