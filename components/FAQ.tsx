import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-sage-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-serif font-medium text-sage-900">{question}</span>
        {isOpen ? <ChevronUp className="text-gold-500" /> : <ChevronDown className="text-sage-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-stone-600 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Y a-t-il un dress code ?",
      answer: "Nous souhaitons une ambiance 'Élégance Champêtre'. Costumes décontractés chics pour les hommes (la cravate n'est pas obligatoire), robes colorées ou fleuries pour les dames. Évitez simplement le blanc !"
    },
    {
      question: "Les enfants sont-ils invités ?",
      answer: "Nous adorons vos enfants, mais nous avons choisi de célébrer notre mariage entre adultes pour que tout le monde puisse profiter pleinement de la soirée. Merci de votre compréhension."
    },
    {
      question: "Où se garer ?",
      answer: "Le Domaine dispose d'un parking privé gratuit de 50 places. Nous vous encourageons néanmoins à privilégier le covoiturage ou les taxis pour profiter de la fête en toute sécurité."
    },
    {
      question: "Peut-on prendre des photos ?",
      answer: "Pendant la cérémonie, nous souhaitons une ambiance 'déconnectée' : rangez vos téléphones et profitez du moment avec nous ! Notre photographe s'occupe de tout. Pour la soirée, faites-vous plaisir !"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-4xl text-center text-sage-800 mb-12" data-aos="fade-up">Questions Fréquentes</h2>
        
        <div className="bg-sage-50 rounded-xl p-6 md:p-10" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};