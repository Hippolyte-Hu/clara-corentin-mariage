import React from 'react';
import { Gift } from 'lucide-react';

interface RegistryProps {
  t: any;
}

export const Registry: React.FC<RegistryProps> = ({ t }) => {
  return (
    <section className="py-20 bg-cream border-t border-sage-100">
      <div className="container mx-auto px-4 text-center max-w-2xl" data-aos="fade-up">
        <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6 text-sage-600">
            <Gift size={32} />
        </div>
        <h2 className="font-serif text-3xl text-sage-800 mb-6">{t.registry.title}</h2>
        <p className="text-stone-600 mb-8 leading-relaxed">
          {t.registry.description}
        </p>
        <a 
          href="https://www.leetchi.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gold-400 text-gold-600 font-serif text-lg rounded-full hover:bg-gold-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
        >
          <span>{t.registry.cta}</span>
        </a>
      </div>
    </section>
  );
};