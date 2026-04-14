
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { useReveal } from '../hooks/useReveal';

const Services: React.FC = () => {
  const revealTitle = useReveal();
  const revealCards = useReveal();

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Deep Textured Background (Matching Hero) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#080808]" />
        <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none" 
          style={{ 
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
            backgroundSize: '400px'
          }} 
        />
        {/* Gold Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.03)_0%,transparent_70%)]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={revealTitle.ref as any}
          className={`max-w-3xl mb-20 reveal ${revealTitle.className}`}
        >
          <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Everything you need to <span className="text-brand-gold italic">scale.</span>
          </h2>
          <p className="text-lg text-neutral-400 font-sans tracking-wide leading-relaxed max-w-2xl">
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
              className="group glass-card p-8 md:p-10 rounded-3xl md:rounded-4xl transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(197,160,89,0.05)] border-white/5 hover:border-brand-gold/20"
            >
              <div className={`w-16 h-16 rounded-3xl bg-white/5 text-brand-gold flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-white/10 group-hover:border-brand-gold/30`}>
                {ICON_MAP[service.icon]}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-neutral-500 leading-relaxed mb-8 font-sans text-sm tracking-wide">
                {service.description}
              </p>
              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em]">Available now</span>
                <div className="w-10 h-10 rounded-full bg-brand-gold text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0 -translate-x-4">
                  <span className="text-lg">&rarr;</span>
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
