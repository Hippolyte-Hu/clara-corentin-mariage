import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Program } from './components/Program';
import { Map } from './components/Map';
import { RSVP } from './components/RSVP';
import { Registry } from './components/Registry';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Language, translations } from './components/i18n';

// Declare AOS global for TypeScript since we loaded it via CDN
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fr');
  const t = translations[language];

  useEffect(() => {
    // Initialize Animate On Scroll
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-sage-200 selection:text-sage-900">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main className="flex-grow">
        <Hero t={t} />
        <Program t={t} />
        <Map t={t} />
        <RSVP t={t} />
        <Registry t={t} />
        <FAQ t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default App;