import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Language, languageLabels } from './i18n';

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: any;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.program, id: 'program' },
    { name: t.nav.map, id: 'map' },
    { name: t.nav.rsvp, id: 'rsvp' },
    { name: t.nav.faq, id: 'faq' },
  ];

  const languageOptions: Language[] = ['fr', 'en', 'it'];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo / Names */}
        <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center gap-2 group"
        >
          <span className={`font-serif text-2xl md:text-3xl font-bold tracking-wide transition-colors drop-shadow-sm ${
            isScrolled ? 'text-sage-800' : 'text-white md:text-white'
          }`}>
            Clara <span className="text-gold-500">&</span> Corentin
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-sm uppercase tracking-widest font-semibold hover:text-gold-500 transition-colors ${
                isScrolled ? 'text-stone-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-2 py-1 backdrop-blur-sm">
            {languageOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                className={`rounded-full px-3 py-1 text-xs font-bold tracking-[0.2em] transition-colors ${
                  language === option
                    ? 'bg-gold-500 text-white'
                    : isScrolled
                      ? 'text-stone-600 hover:bg-sage-100'
                      : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {languageLabels[option]}
              </button>
            ))}
          </div>

          <a
            href="#rsvp"
            onClick={(e) => scrollToSection(e, 'rsvp')}
            className="px-5 py-2 bg-gold-500 text-white font-serif italic rounded-full hover:bg-gold-600 transition-transform transform hover:scale-105 shadow-lg cursor-pointer"
          >
            {t.nav.reply}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-sage-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={t.nav.menu}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#324541' : '#ffffff'} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-sage-800"
        >
            <X size={32} />
        </button>
        
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            onClick={(e) => scrollToSection(e, link.id)}
            className="text-2xl font-serif text-sage-800 hover:text-gold-500 transition-colors"
          >
            {link.name}
          </a>
        ))}

        <div className="flex items-center gap-3 mt-2">
          {languageOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLanguage(option)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold tracking-[0.2em] ${
                language === option
                  ? 'border-gold-500 bg-gold-500 text-white'
                  : 'border-sage-200 text-sage-700'
              }`}
            >
              {languageLabels[option]}
            </button>
          ))}
        </div>

        <Heart className="text-gold-500 mt-8" size={32} fill="#d4af37" />
      </div>
    </header>
  );
};