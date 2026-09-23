import React from 'react';
import { Hero } from '../components/Hero';
import { HowItWorksSimple } from '../components/HowItWorksSimple';
import { ProblemAbyss } from '../components/ProblemAbyss';
import { SolutionsSection } from '../components/SolutionsSection';
import { HomeTechBridge } from '../components/HomeTechBridge';
import { CtaBanner } from '../components/CtaBanner';
import { SectionSeparator } from '../components/SectionSeparator';
import { useLanguage } from '../i18n';

interface HomePageProps {
  onOpenDemo: () => void;
  onOpenWhitepaper: () => void;
  onNavigateToTechnology: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenDemo,
  onOpenWhitepaper,
  onNavigateToTechnology,
}) => {
  const { language } = useLanguage();
  const isZh = language.startsWith('zh');

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <Hero
        onOpenDemo={onOpenDemo}
        onExploreHowItWorks={scrollToHowItWorks}
        onExploreTechnology={onNavigateToTechnology}
      />

      <SectionSeparator label={isZh ? '工作原理' : 'HOW IT WORKS'} variant="cyan" />

      {/* 2. 3-Step Flow */}
      <HowItWorksSimple onExploreTechnology={onNavigateToTechnology} />

      <SectionSeparator label={isZh ? '行业痛点' : 'THE DILEMMA'} variant="amber" />

      {/* 3. The 4 Enterprise Blockers */}
      <ProblemAbyss />

      <SectionSeparator label={isZh ? '行业方案' : 'SOLUTIONS'} variant="emerald" />

      {/* 4. Industry Solutions */}
      <SolutionsSection onOpenDemo={onOpenDemo} />

      <SectionSeparator label={isZh ? '技术架构' : 'ARCHITECTURE'} variant="cyan" />

      {/* 5. Tech Bridge */}
      <HomeTechBridge
        onExploreTechnology={onNavigateToTechnology}
        onOpenWhitepaper={onOpenWhitepaper}
      />

      <SectionSeparator variant="neutral" />

      {/* 6. Closing CTA */}
      <CtaBanner onOpenDemo={onOpenDemo} />
    </div>
  );
};
