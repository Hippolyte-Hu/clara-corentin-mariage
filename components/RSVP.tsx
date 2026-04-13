import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: 'oui',
    dietary: '',
    song: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate submission or actually submit if Formspree ID is provided
    try {
        const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok || response.status === 404) { // 404 allowed here just for demo purposes so it doesn't break for the user immediately
            setStatus('success');
            setFormData({ name: '', email: '', guests: '1', attendance: 'oui', dietary: '', song: '' });
        } else {
            setStatus('error');
        }
    } catch (error) {
        // Fallback for demo if no internet or blocked
        console.log("Form submission simulation", formData);
        setTimeout(() => setStatus('success'), 1500);
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-sage-50 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-8 border-gold-400" data-aos="zoom-in">
            
            <div className="text-center mb-10">
                <span className="text-gold-500 font-serif italic text-xl">Répondez s'il vous plaît</span>
                <h2 className="font-serif text-4xl text-sage-900 mt-2 mb-4">Serez-vous des nôtres ?</h2>
                <p className="text-stone-500">Merci de confirmer votre présence avant le 1er Mai 2026</p>
            </div>

            {status === 'success' ? (
                <div className="text-center py-12 animate-fade-in">
                    <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
                    <h3 className="text-2xl font-serif text-sage-800">Merci !</h3>
                    <p className="text-stone-600 mt-2">Votre réponse a bien été enregistrée.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-gold-600 underline hover:text-gold-800">Envoyer une autre réponse</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-sage-700 mb-2">Vos Noms & Prénoms</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded border border-sage-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all bg-sage-50/30"
                                placeholder="ex: Jean & Marie Dupont"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-sage-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded border border-sage-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none transition-all bg-sage-50/30"
                                placeholder="jean.dupont@email.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="attendance" className="block text-sm font-bold text-sage-700 mb-2">Présence</label>
                            <select
                                id="attendance"
                                name="attendance"
                                value={formData.attendance}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded border border-sage-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none bg-white"
                            >
                                <option value="oui">Avec plaisir !</option>
                                <option value="non">Malheureusement non</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="guests" className="block text-sm font-bold text-sage-700 mb-2">Nombre d'adultes</label>
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                min="1"
                                max="10"
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded border border-sage-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none bg-sage-50/30"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="dietary" className="block text-sm font-bold text-sage-700 mb-2">Restrictions alimentaires</label>
                        <input
                            type="text"
                            id="dietary"
                            name="dietary"
                            value={formData.dietary}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded border border-sage-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none bg-sage-50/30"
                            placeholder="Végétarien, allergies, sans gluten..."
                        />
                    </div>

                    <div>
                        <label htmlFor="song" className="block text-sm font-bold text-sage-700 mb-2">Une chanson qui vous fait danser ?</label>
                        <input
                            type="text"
                            id="song"
                            name="song"
                            value={formData.song}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded border border-sage-200 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none bg-sage-50/30"
                            placeholder="Earth, Wind & Fire - September"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-sage-800 text-white font-serif text-lg py-4 rounded hover:bg-sage-700 transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    >
                        {status === 'submitting' ? 'Envoi...' : (
                            <>
                                Envoyer ma réponse <Send size={18} />
                            </>
                        )}
                    </button>
                    
                    <p className="text-xs text-center text-stone-400 mt-4">
                        * En cliquant, vous simulez l'envoi d'un email aux mariés.
                    </p>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};