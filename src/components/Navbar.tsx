import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight, Globe, Check, Cpu } from 'lucide-react';
import { useLanguage } from '../i18n';
import { SupportedLanguage } from '../i18n/types';
import { SafeComputeLogo } from './SafeComputeLogo';

interface NavbarProps {
  currentPage: 'home' | 'technology';
  onNavigate: (page: 'home' | 'technology', sectionId?: string) => void;
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenDemo,
  onOpenWhitepaper,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const { language, setLanguage, t, languages, currentLanguageOption } = useLanguage();

  // Scroll listener to smoothly transition navbar from transparent to solid dark when scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      // If we scroll beyond 70px (or on non-home page), activate dark mode navbar
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLang = (code: SupportedLanguage) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  const handleNavClick = (page: 'home' | 'technology', sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  // Whether navbar should have dark background: if scrolled, or if mobile menu is open, or if not on home page
  const showSolidBackground = isScrolled || mobileMenuOpen || currentPage !== 'home';

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        showSolidBackground
          ? 'bg-[#0B0E14]/90 backdrop-blur-xl border-b border-[#1E2638] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single element Brand Zone (No .com in logo) */}
        <button 
          onClick={() => handleNavClick('home')}
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg cursor-pointer text-left transition-transform active:scale-[0.98]"
        >
          <SafeComputeLogo size="md" />
        </button>

        {/* Zone 2: 4 Clean, spacious high-level Nav Links (Localized) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button 
            onClick={() => handleNavClick('home')}
            className={`transition-all py-1.5 px-3 rounded-full cursor-pointer ${
              currentPage === 'home'
                ? showSolidBackground 
                  ? 'text-blue-300 font-semibold bg-blue-600/15 border border-blue-500/30' 
                  : 'text-white font-semibold bg-white/10 backdrop-blur-md border border-white/15'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {t.nav.home}
          </button>

          <button 
            onClick={() => handleNavClick('home', 'how-it-works')}
            className="hover:text-blue-400 text-slate-300 hover:text-white transition-colors cursor-pointer py-1.5 px-3 rounded-full hover:bg-white/5"
          >
            {t.nav.howItWorks}
          </button>

          <button 
            onClick={() => handleNavClick('home', 'solutions')}
            className="hover:text-blue-400 text-slate-300 hover:text-white transition-colors cursor-pointer py-1.5 px-3 rounded-full hover:bg-white/5"
          >
            {t.nav.solutions}
          </button>

          {/* Dedicated Technology Page Switcher with deep tech pill */}
          <button 
            onClick={() => handleNavClick('technology')}
            className={`transition-all flex items-center gap-2 py-1.5 px-3.5 rounded-full cursor-pointer ${
              currentPage === 'technology'
                ? 'bg-blue-600/25 text-blue-200 font-semibold border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.25)]'
                : showSolidBackground
                  ? 'text-slate-300 hover:text-blue-400 hover:bg-[#0E1526] border border-transparent'
                  : 'text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.nav.technology}</span>
            <span className="px-1.5 py-0.2 text-[10px] font-mono rounded bg-blue-600/20 text-blue-300 border border-blue-500/40">
              {t.nav.deepTechBadge}
            </span>
          </button>
        </nav>

        {/* Zone 3: Language Selector + Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`px-3 py-2 text-xs font-mono text-slate-300 hover:text-white rounded-full transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md ${
                showSolidBackground
                  ? 'bg-[#0E1526] hover:bg-[#131D33] border border-blue-900/40 hover:border-blue-700/60'
                  : 'bg-white/[0.06] hover:bg-white/[0.12] border border-white/15'
              }`}
              title={t.nav.selectLanguage}
              aria-label={t.nav.selectLanguage}
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold text-slate-200">{currentLanguageOption.shortLabel}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-[#090E1A] border border-blue-900/50 shadow-2xl p-1.5 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[10px] font-mono text-slate-400 px-2 py-1 uppercase tracking-wider">
                  {t.nav.language}
                </div>
                {languages.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => handleSelectLang(opt.code)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer text-left ${
                      language === opt.code
                        ? 'bg-blue-600/25 text-blue-200 font-semibold border border-blue-500/40'
                        : 'text-slate-300 hover:text-white hover:bg-blue-950/40'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                    </span>
                    {language === opt.code && <Check className="w-3.5 h-3.5 text-blue-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            disabled
            title={language.startsWith('zh') ? '白皮书暂时仅限企业受邀客户在 NDA 下借阅' : 'Technical whitepaper restricted under NDA access'}
            className={`px-3.5 py-2 text-xs font-semibold text-slate-400 rounded-full flex items-center gap-1.5 whitespace-nowrap cursor-not-allowed opacity-70 backdrop-blur-md ${
              showSolidBackground
                ? 'bg-[#121722]/50 border border-[#1E2638]'
                : 'bg-white/[0.04] border border-white/10'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>{t.nav.techSpec}</span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono ml-0.5">
              {language.startsWith('zh') ? '暂不公开' : 'Restricted'}
            </span>
          </button>
          
          <button 
            onClick={onOpenDemo}
            className="group px-5 py-2.5 text-xs font-semibold text-black bg-white hover:bg-sky-200 rounded-full shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer active:scale-95"
          >
            <span>{t.nav.bookDemo}</span>
            <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-black">
              <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Quick mobile language toggle button */}
          <div className="flex bg-[#0E1526] border border-blue-900/40 rounded-lg p-0.5">
            {languages.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLanguage(opt.code)}
                className={`px-1.5 py-1 text-[11px] font-mono rounded transition-colors ${
                  language === opt.code
                    ? 'bg-blue-600/30 text-blue-200 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {opt.shortLabel}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenDemo}
            className="sm:hidden px-3 py-1.5 text-xs font-semibold text-black bg-white hover:bg-sky-200 rounded-lg cursor-pointer shadow-md"
          >
            {t.nav.bookDemo}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-xl border border-blue-900/40 bg-[#0E1526] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060911]/98 border-b border-blue-900/40 px-5 pt-4 pb-6 space-y-4 backdrop-blur-2xl">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
            <button 
              onClick={() => handleNavClick('home')}
              className={`w-full py-2.5 px-3 rounded-xl transition-colors text-left ${
                currentPage === 'home'
                  ? 'bg-blue-600/20 text-blue-200 font-semibold'
                  : 'hover:bg-blue-950/30'
              }`}
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => handleNavClick('home', 'how-it-works')}
              className="w-full py-2.5 px-3 hover:bg-blue-950/30 rounded-xl transition-colors text-left"
            >
              {t.nav.howItWorks}
            </button>
            <button 
              onClick={() => handleNavClick('home', 'solutions')}
              className="w-full py-2.5 px-3 hover:bg-blue-950/30 rounded-xl transition-colors text-left"
            >
              {t.nav.solutions}
            </button>
            <button 
              onClick={() => handleNavClick('technology')}
              className={`w-full py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between text-left ${
                currentPage === 'technology'
                  ? 'bg-blue-600/25 text-blue-200 font-bold border border-blue-500/40'
                  : 'hover:bg-blue-950/30'
              }`}
            >
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>{t.nav.technology}</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600/20 text-blue-300">
                {t.nav.deepTechBadge}
              </span>
            </button>
          </nav>

          {/* Mobile Language Switcher Group */}
          <div className="pt-3 border-t border-blue-900/30">
            <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.nav.selectLanguage}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => handleSelectLang(opt.code)}
                  className={`py-2 px-2 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                    language === opt.code
                      ? 'bg-blue-600/25 border-blue-500/50 text-blue-200 font-semibold'
                      : 'bg-[#0E1526] border-blue-900/40 text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="mr-1">{opt.flag}</span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-blue-900/30 flex flex-col gap-2.5">
            <button 
              disabled
              className="w-full py-2.5 text-xs font-semibold text-slate-500 bg-[#0E1526]/50 border border-blue-900/30 rounded-xl text-center flex items-center justify-center gap-2 cursor-not-allowed opacity-60"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>{t.nav.readWhitepaperPdf} ({language.startsWith('zh') ? '暂不公开' : 'Restricted'})</span>
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full py-3 text-xs font-semibold text-black bg-white hover:bg-sky-200 rounded-full text-center flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>{t.nav.bookDemo}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
