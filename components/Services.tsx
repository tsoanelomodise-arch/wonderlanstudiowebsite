
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ChevronRight, Play } from 'lucide-react';
import { SERVICES, ICON_MAP } from '../constants';
import { useReveal } from '../hooks/useReveal';
import { Service, SubSection } from '../types';

const Services: React.FC = () => {
  const revealTitle = useReveal();
  const revealCards = useReveal();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeSubSec, setActiveSubSec] = useState<number>(0);

  // Close service modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

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
            We provide a full spectrum of branding, marketing, creative, and technology solutions tailored under one integrated ecosystem.
          </p>
        </div>

        <div 
          ref={revealCards.ref as any}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-reveal ${revealCards.className}`}
        >
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => {
                setSelectedService(service);
                setActiveSubSec(0);
              }}
              className="group glass-card p-8 md:p-10 rounded-3xl md:rounded-4xl transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(197,160,89,0.05)] border-white/5 hover:border-brand-gold/20 cursor-pointer flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-16 h-16 rounded-3xl bg-white/5 text-brand-gold flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-white/10 group-hover:border-brand-gold/30">
                  {ICON_MAP[service.icon]}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed mb-8 font-sans text-sm tracking-wide line-clamp-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-neutral-400 group-hover:text-brand-gold transition-colors uppercase tracking-[0.3em]">
                  View Services
                </span>
                <div className="w-10 h-10 rounded-full bg-brand-gold text-black flex items-center justify-center group-hover:bg-white transition-all transform group-hover:translate-x-1 duration-350">
                  <span className="text-lg">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-full max-h-[85vh] bg-[#0c0c0c] rounded-[2.5rem] border border-white/10 flex flex-col shadow-2xl p-6 md:p-12 overflow-hidden z-20"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/5 hover:bg-brand-gold hover:text-black rounded-full flex items-center justify-center text-white transition-all border border-white/10"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto pr-2 md:pr-4 h-full scrollbar-thin">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-4">
                  {/* Left Column: Core Info */}
                  <div className="lg:col-span-5 flex flex-col justify-start">
                    <div className="w-16 h-16 rounded-3xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6 border border-brand-gold/20">
                      {ICON_MAP[selectedService.icon]}
                    </div>
                    <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">
                      Core Service Block
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 tracking-tight leading-tight">
                      {selectedService.title}
                    </h2>
                    <p className="text-neutral-400 font-sans tracking-wide leading-relaxed font-light mb-8">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Right Column: Bullets or Subsections List */}
                  <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-12">
                    {/* Bullets lists */}
                    {selectedService.bullets && !selectedService.subsections && (
                      <div>
                        <h4 className="text-white font-bold uppercase tracking-[0.22em] text-[10px] mb-6 block">
                          Explore Offerings
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedService.bullets.map((bullet, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/20 hover:bg-white/[0.08] transition-all"
                            >
                              <div className="w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0">
                                <Check size={12} />
                              </div>
                              <span className="text-sm font-sans tracking-wide text-neutral-300 font-medium">
                                {bullet}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Subsections list (like Sys & Software) */}
                    {selectedService.subsections && (
                      <div>
                        <h4 className="text-white font-bold uppercase tracking-[0.22em] text-[10px] mb-6 block">
                          Systems & Applications Ecosystem
                        </h4>
                        <div className="space-y-4">
                          {selectedService.subsections.map((subsec, sIdx) => {
                            const isExpanded = activeSubSec === sIdx;
                            return (
                              <div 
                                key={sIdx}
                                className={`rounded-3xl border transition-all overflow-hidden ${
                                  isExpanded 
                                    ? 'bg-[#121212] border-brand-gold/30 shadow-lg' 
                                    : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-[#0e0e0e] cursor-pointer'
                                }`}
                                onClick={() => setActiveSubSec(sIdx)}
                              >
                                <div className="p-6 flex items-center justify-between">
                                  <div className="flex items-center gap-4">
                                    <div className={`w-2 h-2 rounded-full ${isExpanded ? 'bg-brand-gold' : 'bg-neutral-600'}`} />
                                    <h5 className="font-serif text-lg text-white font-medium">{subsec.title}</h5>
                                  </div>
                                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white transition-transform duration-300 ${isExpanded ? 'rotate-90 text-brand-gold border-brand-gold/30' : ''}`}>
                                    <ChevronRight size={14} />
                                  </div>
                                </div>

                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="border-t border-white/5 overflow-hidden"
                                    >
                                      <div className="p-6 bg-black/30">
                                        <p className="text-neutral-400 font-sans tracking-wide leading-relaxed font-light mb-6 text-sm">
                                          {subsec.description}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                          {subsec.bullets.map((b, bIdx) => (
                                            <div key={bIdx} className="flex items-center gap-3">
                                              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/80" />
                                              <span className="text-xs font-sans text-neutral-300 tracking-wide font-medium">{b}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
