import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Program } from './components/Program';
import { Map } from './components/Map';
import { RSVP } from './components/RSVP';
import { Registry } from './components/Registry';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

// Declare AOS global for TypeScript since we loaded it via CDN
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
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
      <Header />
      <main className="flex-grow">
        <Hero />
        <Program />
        <Map />
        <RSVP />
        <Registry />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;