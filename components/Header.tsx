import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export const Header: React.FC = () => {
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
    { name: 'Accueil', id: 'home' },
    { name: 'Programme', id: 'program' },
    { name: 'Lieu', id: 'map' },
    { name: 'RSVP', id: 'rsvp' },
    { name: 'Infos', id: 'faq' },
  ];

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
          <span className={`font-serif text-2xl md:text-3xl font-bold tracking-wide transition-colors ${isScrolled ? 'text-sage-800' : 'text-sage-800 md:text-white'}`}>
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
          <a
            href="#rsvp"
            onClick={(e) => scrollToSection(e, 'rsvp')}
            className="px-5 py-2 bg-gold-500 text-white font-serif italic rounded-full hover:bg-gold-600 transition-transform transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Répondre
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-sage-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#324541' : '#324541'} />}
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
        <Heart className="text-gold-500 mt-8" size={32} fill="#d4af37" />
      </div>
    </header>
  );
};