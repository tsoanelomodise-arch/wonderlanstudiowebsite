
import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const About: React.FC = () => {
  const reveal = useReveal();

  return (
    <section id="about" className="py-32 text-white relative">
      <div 
        ref={reveal.ref as any}
        className={`container mx-auto px-6 relative z-10 reveal ${reveal.className}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group overflow-hidden rounded-[3rem]">
             <div className="aspect-square bg-neutral-900 rounded-[3rem] overflow-hidden border border-neutral-800 relative">
               <img 
                 src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1000" 
                 alt="Creative Expression"
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
               
               {/* Visual metaphor elements */}
               <div className="absolute top-[30%] left-[40%] animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-20 h-20 bg-brand-gold rounded-full blur-2xl opacity-50" />
                  <Sparkles className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
               </div>
               <div className="absolute bottom-[40%] right-[30%] animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <div className="w-16 h-16 bg-brand-gold rounded-full blur-2xl opacity-40" />
                  <Sparkles className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4" />
               </div>
             </div>
             
             <div className="absolute top-10 left-10">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Introducing</span>
                <h3 className="text-6xl font-display font-extrabold tracking-tighter">The Bonus</h3>
             </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-[1.1]">
              Elevate your brand beyond the <span className="text-brand-gold italic">ordinary</span>.
            </h2>
            <p className="text-xl text-neutral-400 mb-12 leading-relaxed font-medium">
              We combine human intuition with cutting-edge technology to craft experiences that resonate. Our bonuses aren't just perks—they are the core of how we deliver value.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Enhanced Speed', desc: 'Campaigns launched in days, not months.' },
                { title: 'Dynamic Identity', desc: 'Visual systems that adapt to every platform.' },
                { title: 'Global Reach', desc: 'Localized storytelling for diverse audiences.' },
                { title: 'Unmatched Detail', desc: 'Pixel-perfect execution from concept to final frame.' }
              ].map((item, i) => (
                <div key={i} className="group p-6 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-brand-gold/50 transition-all">
                  <CheckCircle2 className="text-brand-gold mb-4" size={24} />
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
