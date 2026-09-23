import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { SupportedLanguage, LanguageOption, TranslationSchema } from './types';
import { en } from './translations/en';
import { zhCN } from './translations/zh-CN';
import { zhTW } from './translations/zh-TW';

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English', shortLabel: 'EN', flag: '🇺🇸' },
  { code: 'zh-TW', label: '繁體中文', shortLabel: '繁', flag: '🇭🇰' },
  { code: 'zh-CN', label: '简体中文', shortLabel: '简', flag: '🇨🇳' },
];

const STORAGE_KEY = 'safecompute_lang_preference';

export function detectBrowserLanguage(): SupportedLanguage {
  // 1. Check local storage
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'zh-TW' || stored === 'zh-CN') {
        return stored;
      }
    } catch {
      // Ignore localStorage read issues
    }
  }

  // 2. Check browser languages list
  if (typeof navigator !== 'undefined') {
    const candidateLanguages = navigator.languages && navigator.languages.length > 0 
      ? navigator.languages 
      : [navigator.language || ''];

    for (const rawLang of candidateLanguages) {
      if (!rawLang) continue;
      const lang = rawLang.toLowerCase();

      // Traditional Chinese regions (Taiwan, Hong Kong, Macau, Traditional script)
      if (
        lang.includes('zh-tw') ||
        lang.includes('zh-hk') ||
        lang.includes('zh-mo') ||
        lang.includes('zh-hant') ||
        lang.includes('hant')
      ) {
        return 'zh-TW';
      }

      // Simplified Chinese regions (Mainland China, Singapore, Simplified script, general zh)
      if (
        lang.includes('zh-cn') ||
        lang.includes('zh-sg') ||
        lang.includes('zh-hans') ||
        lang.startsWith('zh')
      ) {
        return 'zh-CN';
      }

      if (lang.startsWith('en')) {
        return 'en';
      }
    }
  }

  return 'en';
}

interface LanguageContextValue {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationSchema;
  languages: LanguageOption[];
  currentLanguageOption: LanguageOption;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => detectBrowserLanguage());

  const setLanguage = (newLang: SupportedLanguage) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
        // Ignore localStorage write errors
      }
      // Update HTML lang attribute for accessibility & SEO
      const htmlLang = newLang === 'zh-TW' ? 'zh-Hant' : newLang === 'zh-CN' ? 'zh-Hans' : 'en';
      document.documentElement.lang = htmlLang;
    }
  };

  useEffect(() => {
    // Initial sync of html lang attribute
    const htmlLang = language === 'zh-TW' ? 'zh-Hant' : language === 'zh-CN' ? 'zh-Hans' : 'en';
    document.documentElement.lang = htmlLang;
  }, [language]);

  const t = useMemo<TranslationSchema>(() => {
    switch (language) {
      case 'zh-TW':
        return zhTW;
      case 'zh-CN':
        return zhCN;
      case 'en':
      default:
        return en;
    }
  }, [language]);

  const currentLanguageOption = useMemo<LanguageOption>(() => {
    return LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languages: LANGUAGE_OPTIONS,
        currentLanguageOption,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
