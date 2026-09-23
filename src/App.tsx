/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { TechnologyPage } from './pages/TechnologyPage';
import { Footer } from './components/Footer';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { WhitepaperModal } from './components/WhitepaperModal';

type PageType = 'home' | 'technology';

function MainApp() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isWhitepaperModalOpen, setIsWhitepaperModalOpen] = useState(false);

  // Initialize page state: ALWAYS default to home (Business Page) unless explicitly requested
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Listen for hash changes when user clicks browser back/forward or explicit links
  useEffect(() => {
    // If the browser loaded with a stale technology hash on first visit or refresh, reset to root
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#technology') || hash.startsWith('#/technology')) {
        // Clean the hash so refresh won't get stuck on technology page
        history.replaceState(null, '', window.location.pathname);
        setCurrentPage('home');
      }
    }

    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#technology') || hash.startsWith('#/technology')) {
        setCurrentPage('technology');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType, sectionId?: string) => {
    setCurrentPage(page);

    if (page === 'technology') {
      window.location.hash = sectionId ? `#technology/${sectionId}` : '#technology';
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            const yOffset = -90;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Home page navigation
      window.location.hash = sectionId ? `#${sectionId}` : '#';
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-slate-100 font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top Navigation Bar with Dynamic Page Tab & Language Switcher */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
      />

      {/* Main Content Router */}
      <main>
        {currentPage === 'home' ? (
          <HomePage
            onOpenDemo={() => setIsDemoModalOpen(true)}
            onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            onNavigateToTechnology={() => handleNavigate('technology')}
          />
        ) : (
          <TechnologyPage
            onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
            onOpenDemo={() => setIsDemoModalOpen(true)}
            onNavigateToHome={() => handleNavigate('home')}
          />
        )}
      </main>

      {/* Intelligent Multi-page Footer */}
      <Footer
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenWhitepaper={() => setIsWhitepaperModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Enterprise Dialogs & Modals */}
      <LeadCaptureModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <WhitepaperModal
        isOpen={isWhitepaperModalOpen}
        onClose={() => setIsWhitepaperModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
