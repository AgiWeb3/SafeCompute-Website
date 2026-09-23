import React from 'react';
import { Lock } from 'lucide-react';
import { useLanguage } from '../i18n';
import { SafeComputeLogo } from './SafeComputeLogo';

interface FooterProps {
  onOpenWhitepaper: () => void;
  onOpenDemo: () => void;
  onNavigate: (page: 'home' | 'technology', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhitepaper, onOpenDemo, onNavigate }) => {
  const { t, language } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-[#05070B] border-t border-[#1E2638] text-slate-400 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[#1E2638]">
          
          {/* Brand Info (No .com in logo) */}
          <div className="md:col-span-2 space-y-4">
            <button 
              onClick={() => onNavigate('home')}
              className="cursor-pointer text-left group transition-transform active:scale-[0.98]"
            >
              <SafeComputeLogo size="md" />
            </button>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {f.tagline}
            </p>

            <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>{f.cities.join(' · ')}</span>
            </div>
          </div>

          {/* Col 1: Overview & Business Solutions (Goes to Home Page) */}
          <div className="space-y-3">
            <div className="text-white font-semibold font-mono text-xs uppercase tracking-wider">
              {f.productCol}
            </div>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.overview}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('home', 'how-it-works')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.howItWorks}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('home', 'sovereignty-layer')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.sovereigntyLayer}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('home', 'solutions')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.lawFirms}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('home', 'solutions')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.financialServices}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Deep Technology (Goes to Technology Page) */}
          <div className="space-y-3">
            <div className="text-white font-semibold font-mono text-xs uppercase tracking-wider">
              {f.techCol}
            </div>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('technology', 'onion-architecture')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.onionDefense}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('technology', 'onion-architecture')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.actionFirewall}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('technology', 'product-matrix')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.productMatrix}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('technology', 'benchmarks')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.universalBenchmarks}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('technology', 'developer-experience')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.sdk}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Enterprise & Compliance */}
          <div className="space-y-3">
            <div className="text-white font-semibold font-mono text-xs uppercase tracking-wider">
              {f.enterpriseCol}
            </div>
            <ul className="space-y-2">
              <li>
                <span 
                  title={language.startsWith('zh') ? '技术白皮书目前仅限企业受邀客户签署 NDA 后提供' : 'Whitepaper restricted under NDA access'}
                  className="text-slate-500 font-mono text-left flex items-center gap-1.5 cursor-not-allowed opacity-60 text-xs"
                >
                  <Lock className="w-3 h-3 text-slate-500" />
                  <span>{f.links.whitepaperPdf}</span>
                  <span className="text-[9px] px-1 py-0.2 rounded bg-slate-800 border border-slate-700 text-slate-400">
                    {language.startsWith('zh') ? '受限' : 'Locked'}
                  </span>
                </span>
              </li>
              <li>
                <button 
                  onClick={onOpenDemo}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.scheduleDemo}
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenWhitepaper}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.soc2Audit}
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenWhitepaper}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left"
                >
                  {f.links.securityArchitecture}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & legal disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <p>
            {f.rights}
          </p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenWhitepaper} className="hover:text-slate-300 cursor-pointer">
              {f.termsOfService}
            </button>
            <button onClick={onOpenWhitepaper} className="hover:text-slate-300 cursor-pointer">
              {f.privacyPolicy}
            </button>
            <button onClick={onOpenWhitepaper} className="hover:text-slate-300 cursor-pointer">
              {f.securityDisclosures}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
