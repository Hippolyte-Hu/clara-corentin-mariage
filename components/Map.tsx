import React from 'react';
import { MapPin } from 'lucide-react';

export const Map: React.FC = () => {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
        
        <div className="w-full md:w-1/2" data-aos="fade-right">
            <h2 className="font-serif text-4xl text-sage-800 mb-6">Le Lieu</h2>
            <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={24} />
                <div>
                    <h3 className="text-xl font-bold text-stone-800">Domaine de Longchamp</h3>
                    <p className="text-stone-600 mt-2">
                        1 Carrefour de Longchamp<br/>
                        75116 Paris, France
                    </p>
                </div>
            </div>
            <p className="text-stone-600 leading-relaxed mb-8">
                Nous avons choisi un lieu magique au cœur du Bois de Boulogne. 
                Un espace de nature préservé à Paris pour célébrer notre union. 
                Des places de parking sont disponibles sur place, et le lieu est accessible en navette depuis la Porte Maillot.
            </p>
            <a 
                href="https://www.google.com/maps/dir//Fondation+GoodPlanet+Domaine+de+Longchamp" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block px-8 py-3 border-2 border-sage-500 text-sage-600 font-semibold rounded hover:bg-sage-500 hover:text-white transition-colors uppercase tracking-wider text-sm"
            >
                Itinéraire
            </a>
        </div>

        <div className="w-full md:w-1/2 h-[400px] shadow-2xl rounded-lg overflow-hidden border-4 border-white" data-aos="fade-left">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.237255140556!2d2.253685276376882!3d48.87279177133399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6653069151623%3A0xc39f9976c6c4c053!2sFondation%20GoodPlanet%20-%20Domaine%20de%20Longchamp!5e0!3m2!1sfr!2sfr!4v1709664583120!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte du lieu"
            ></iframe>
        </div>

      </div>
    </section>
  );
};