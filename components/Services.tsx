
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ChevronRight, ArrowUpRight } from 'lucide-react';
import { SERVICES, ICON_MAP } from '../constants';
import { useReveal } from '../hooks/useReveal';
import { Service } from '../types';

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
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          ref={revealTitle.ref as any}
          className={`max-w-3xl mb-16 reveal ${revealTitle.className}`}
        >
          <span className="text-black text-xs font-bold uppercase tracking-widest mb-3 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black font-display text-black mb-6 leading-tight uppercase tracking-tight">
            Everything you need to scale.
          </h2>
          <p className="text-base md:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl">
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
              className="group bg-white p-8 md:p-10 rounded-3xl border border-neutral-200/80 shadow-xl shadow-black/[0.03] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-neutral-400 cursor-pointer flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 text-black flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300 border border-neutral-200/60">
                  {ICON_MAP[service.icon]}
                </div>
                <h3 className="text-2xl font-black font-display text-black mb-3 tracking-tight">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-8 text-sm line-clamp-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-neutral-500 group-hover:text-black transition-colors uppercase tracking-wider">
                  View Capabilities
                </span>
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-neutral-800 transition-all transform group-hover:translate-x-0.5 duration-300">
                  <ArrowUpRight size={16} />
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
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl h-full max-h-[90vh] bg-white rounded-3xl border border-neutral-200 flex flex-col shadow-2xl p-5 sm:p-8 md:p-12 overflow-hidden z-20 text-black"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-9 h-9 sm:w-10 sm:h-10 bg-neutral-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center text-black transition-all shadow-sm"
              >
                <X size={18} />
              </button>

              <div className="overflow-y-auto pr-2 md:pr-4 h-full scrollbar-thin">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-4">
                  {/* Left Column: Core Info */}
                  <div className="lg:col-span-5 flex flex-col justify-start">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-100 text-black flex items-center justify-center mb-6 border border-neutral-200">
                      {ICON_MAP[selectedService.icon]}
                    </div>
                    <span className="text-black font-bold uppercase tracking-widest text-[10px] mb-2 block">
                      Capabilities Domain
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black font-display text-black mb-4 tracking-tight leading-tight">
                      {selectedService.title}
                    </h2>
                    <p className="text-neutral-600 leading-relaxed font-normal mb-6 text-sm">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Right Column: Bullets or Subsections List */}
                  <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-neutral-100 pt-8 lg:pt-0 lg:pl-10">
                    {/* Bullets lists */}
                    {selectedService.bullets && !selectedService.subsections && (
                      <div>
                        <h4 className="text-black font-bold uppercase tracking-widest text-xs mb-6 block">
                          Core Offerings
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {selectedService.bullets.map((bullet, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.04 }}
                              className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-black transition-all"
                            >
                              <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                                <Check size={11} />
                              </div>
                              <span className="text-xs font-semibold text-neutral-800">
                                {bullet}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Subsections list */}
                    {selectedService.subsections && (
                      <div>
                        <h4 className="text-black font-bold uppercase tracking-widest text-xs mb-6 block">
                          Systems & Applications
                        </h4>
                        <div className="space-y-3">
                          {selectedService.subsections.map((subsec, sIdx) => {
                            const isExpanded = activeSubSec === sIdx;
                            return (
                              <div 
                                key={sIdx}
                                className={`rounded-2xl border transition-all overflow-hidden ${
                                  isExpanded 
                                    ? 'bg-neutral-50 border-black shadow-sm' 
                                    : 'bg-white border-neutral-200 hover:border-neutral-400 cursor-pointer'
                                }`}
                                onClick={() => setActiveSubSec(sIdx)}
                              >
                                <div className="p-5 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${isExpanded ? 'bg-black' : 'bg-neutral-400'}`} />
                                    <h5 className="font-bold text-base text-black">{subsec.title}</h5>
                                  </div>
                                  <div className={`w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-black transition-transform duration-300 ${isExpanded ? 'rotate-90 bg-black text-white border-black' : ''}`}>
                                    <ChevronRight size={13} />
                                  </div>
                                </div>

                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.25 }}
                                      className="border-t border-neutral-200 overflow-hidden"
                                    >
                                      <div className="p-5 bg-neutral-100/60">
                                        <p className="text-neutral-600 leading-relaxed font-normal mb-4 text-xs">
                                          {subsec.description}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                          {subsec.bullets.map((b, bIdx) => (
                                            <div key={bIdx} className="flex items-center gap-2">
                                              <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                              <span className="text-xs text-neutral-800 font-medium">{b}</span>
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

