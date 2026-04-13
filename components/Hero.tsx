import React, { useState, useEffect } from 'react';
import { Countdown } from './Countdown';

interface HeroProps {
  t: any;
}

const backgroundImages = [
  'linear-gradient(135deg, rgba(44, 58, 55, 0.92), rgba(94, 130, 122, 0.72)), radial-gradient(circle at top left, rgba(212, 175, 55, 0.25), transparent 35%), url("https://images.unsplash.com/photo-1503913702591-64d8583487d6?auto=format&fit=crop&w=1600&q=80")',
  'linear-gradient(135deg, rgba(44, 58, 55, 0.9), rgba(118, 83, 35, 0.42)), radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 30%), url("https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1600&q=80")',
  'linear-gradient(135deg, rgba(44, 58, 55, 0.9), rgba(212, 175, 55, 0.2)), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.08), transparent 30%), url("https://images.unsplash.com/photo-1555986510-9c2b8c560e29?auto=format&fit=crop&w=1600&q=80")',
];

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToProgram = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('program');
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-sage-900">
      {/* Background Slideshow */}
      {backgroundImages.map((backgroundImage, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out bg-center bg-cover ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage }}
          aria-label={`${t.hero.backgroundAlt} ${index + 1}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white"
      >
        <p className="text-lg md:text-2xl uppercase tracking-[0.3em] mb-4 font-light text-white/90 drop-shadow-sm">
          {t.hero.announcement}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-6 font-medium drop-shadow-lg">
          Clara <span className="text-gold-400 italic">&</span> Corentin
        </h1>
        
        {/* Heritage Subtitle */}
        <p className="font-serif italic text-xl md:text-2xl text-white/90 mb-8 tracking-wide drop-shadow-sm">
          {t.hero.subtitle}
        </p>

        <div className="flex items-center justify-center gap-4 text-xl md:text-3xl font-light tracking-wide mb-12 text-white/95 drop-shadow-sm">
          <span className="border-t border-white/50 w-12 md:w-24"></span>
          <span>{t.hero.date}</span>
          <span className="border-t border-white/50 w-12 md:w-24"></span>
        </div>

        {/* Countdown Component */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 inline-block shadow-2xl">
          <Countdown targetDate="2026-06-20T14:00:00" labels={t.hero.countdownLabels} />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#program"
        onClick={scrollToProgram}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80 hover:text-white transition-colors cursor-pointer z-20"
        aria-label={t.hero.scrollLabel}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
};