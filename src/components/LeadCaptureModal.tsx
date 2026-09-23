import React, { useState } from 'react';
import { X, CheckCircle2, Shield, ArrowRight, Mail, User } from 'lucide-react';
import { useLanguage } from '../i18n';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    deploymentType: 'saas',
    agentUse: 'legal_finance',
    comments: '',
  });

  const { t } = useLanguage();
  const m = t.leadModal;

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      deploymentType: 'saas',
      agentUse: 'legal_finance',
      comments: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0E14]/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#121722] border border-[#1E2638] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-[#0B0E14] border border-[#1E2638] cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>SafeCompute Enterprise · HK & SG</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">
              {m.title}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {m.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  {m.nameLabel}
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    placeholder={m.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1E2638] text-sm text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  {m.emailLabel}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    required
                    placeholder={m.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1E2638] text-sm text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    {m.companyLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={m.companyPlaceholder}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1E2638] text-sm text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    {m.deploymentLabel}
                  </label>
                  <select
                    value={formData.deploymentType}
                    onChange={(e) => setFormData({ ...formData, deploymentType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1E2638] text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="saas">{m.deploymentSaas}</option>
                    <option value="appliance">{m.deploymentAppliance}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  {m.useCaseLabel}
                </label>
                <select
                  value={formData.agentUse}
                  onChange={(e) => setFormData({ ...formData, agentUse: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B0E14] border border-[#1E2638] text-sm text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="legal_finance">{m.useCaseLegalFinance}</option>
                  <option value="healthcare">{m.useCaseHealthcare}</option>
                  <option value="general">{m.useCaseGeneral}</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 mt-2 text-sm font-bold text-[#0B0E14] bg-gradient-to-r from-cyan-400 to-[#10B981] hover:from-cyan-300 hover:to-[#34D399] rounded-xl shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{m.submitBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-white">
              {m.successTitle}
            </h3>
            
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              {m.successDesc}
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-slate-300 bg-[#0B0E14] border border-[#1E2638] rounded-xl hover:text-white cursor-pointer"
              >
                {m.doneBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
