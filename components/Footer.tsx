import React from 'react';

interface FooterProps {
  t: any;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <footer className="bg-sage-900 text-white py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl mb-6">Clara & Corentin</h2>
        <p className="text-sage-200 mb-8 italic">{t.footer.message}</p>
        
        <div className="flex justify-center gap-6 text-sm tracking-wider uppercase opacity-70 mb-8">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-gold-400 transition-colors">{t.nav.home}</a>
            <a href="#program" onClick={(e) => scrollToSection(e, 'program')} className="hover:text-gold-400 transition-colors">{t.nav.program}</a>
            <a href="#rsvp" onClick={(e) => scrollToSection(e, 'rsvp')} className="hover:text-gold-400 transition-colors">RSVP</a>
        </div>

        <p className="text-xs text-sage-400">
          © {new Date().getFullYear()} - {t.footer.madeWithLove}
        </p>
      </div>
    </footer>
  );
};