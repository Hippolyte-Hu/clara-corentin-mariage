import React from 'react';
import { Landmark, Church, Wine, Music } from 'lucide-react';

interface ProgramProps {
  t: any;
}

export const Program: React.FC<ProgramProps> = ({ t }) => {
  const events = t.program.events;
  const eventIcons = {
    landmark: <Landmark className="w-8 h-8 text-sage-500" />,
    church: <Church className="w-8 h-8 text-sage-500" />,
    wine: <Wine className="w-8 h-8 text-sage-500" />,
    music: <Music className="w-8 h-8 text-sage-500" />,
  };
  return (
    <section id="program" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-serif text-4xl md:text-5xl text-sage-800 mb-4">{t.program.title}</h2>
          <p className="text-stone-500 italic font-serif text-lg">{t.program.subtitle}</p>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-sage-200 hidden md:block"></div>

            <div className="space-y-12">
                {events.map((event, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                        }`}
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                        {/* Time & Content */}
                        <div className={`flex-1 text-center ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                            <span className="inline-block py-1 px-3 bg-sage-100 text-sage-800 rounded-full text-sm font-bold tracking-widest mb-2">
                                {event.time}
                            </span>
                            <h3 className="font-serif text-2xl text-stone-800 font-semibold mb-2">{event.title}</h3>
                            <p className="text-stone-600 leading-relaxed max-w-xs mx-auto md:mx-0 inline-block">
                                {event.description}
                            </p>
                        </div>

                        {/* Icon Bubble */}
                        <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-gold-400 shadow-md transform hover:scale-110 transition-transform duration-300">
                            {eventIcons[event.icon as keyof typeof eventIcons]}
                        </div>

                        {/* Spacer for Flex Balance */}
                        <div className="flex-1 hidden md:block"></div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};