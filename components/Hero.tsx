
import React from 'react';
import { Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const reveal = useReveal();

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={reveal.ref as any}
          className={`max-w-5xl mx-auto text-center reveal ${reveal.className}`}
        >
          {/* Animated Badge */}
          <div className="inline-flex relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity animate-gradient-x"></div>
            <div className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-neutral-200 mb-12 hover:bg-white/20 transition-all cursor-default shadow-sm">
              <Sparkles size={14} className="text-brand-magenta" />
              <span className="tracking-widest uppercase">The future of creative production</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter leading-[0.95] mb-12 text-white">
            Let's build something <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x pb-2">Magical</span>
          </h1>

          <p className="text-lg md:text-2xl text-neutral-400 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            Tired of generic agencies? Wonderland Studio uses AI-native workflows to deliver premium branding and content at <span className="text-white font-bold">10x speed</span>.
          </p>
          
          <div className="flex justify-center gap-8 mt-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {['Strategy', 'Branding', 'Digital', 'Production'].map(tag => (
              <span key={tag} className="text-xs font-bold uppercase tracking-widest text-neutral-300">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
