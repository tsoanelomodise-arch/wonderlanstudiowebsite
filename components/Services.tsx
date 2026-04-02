
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { useReveal } from '../hooks/useReveal';

const Services: React.FC = () => {
  const revealTitle = useReveal();
  const revealCards = useReveal();

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Animated Gradient Background - Vibrant/Light Theme (relative to dark) */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 animate-gradient-slow opacity-60 -z-10" />
      
      {/* Decorative Blur Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={revealTitle.ref as any}
          className={`max-w-3xl mb-20 reveal ${revealTitle.className}`}
        >
          <span className="text-brand-magenta text-xs font-bold uppercase tracking-widest mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Everything you need to <span className="text-purple-300">scale.</span>
          </h2>
          <p className="text-lg text-neutral-300 font-medium leading-relaxed">
            We provide a full-spectrum of design and production services that help brands move faster and look better.
          </p>
        </div>

        <div 
          ref={revealCards.ref as any}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-reveal ${revealCards.className}`}
        >
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="group glass-card p-10 rounded-4xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/10 border-white/5"
            >
              <div className={`w-16 h-16 rounded-3xl bg-white/10 text-white flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-white/10 ${service.accent}`}>
                {ICON_MAP[service.icon]}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed mb-8 font-medium">
                {service.description}
              </p>
              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Available now</span>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 -translate-x-4">
                  &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
