
import React from 'react';
import { Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const reveal = useReveal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Deep Textured Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#080808]" />
        {/* Stone/Concrete Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
          style={{ 
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
            backgroundSize: '400px'
          }} 
        />
        {/* Radial Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_60%)]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="container mx-auto px-10 md:px-16 relative z-20">
        <div 
          ref={reveal.ref as any}
          className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 reveal ${reveal.className}`}
        >
          {/* Precise Golden Doorway from Image */}
          <div className="relative w-64 h-[400px] md:w-80 md:h-[520px] flex-shrink-0 group">
            {/* The Doorway Frame */}
            <div className="absolute inset-0 z-20">
              {/* Sharp 1px Gold Line */}
              <div className="absolute inset-0 border-[1.5px] border-brand-gold/90 shadow-[0_0_15px_rgba(197,160,89,0.4)]" />
              {/* Soft Inner Glow */}
              <div className="absolute inset-0 border-[1px] border-brand-gold/20 blur-[2px]" />
            </div>
            
            {/* Outer Bloom Glow */}
            <div className="absolute -inset-8 bg-brand-gold/5 blur-[60px] z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />

            {/* Internal Void */}
            <div className="absolute inset-0 bg-[#020202] z-10 overflow-hidden shadow-inner">
              {/* Subtle Internal Light Spill */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-gold/5 to-transparent" />
            </div>

            {/* Floor Reflection / Light Spill at Base */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[140%] h-24 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.2)_0%,transparent_70%)] z-0 blur-xl" />
          </div>

          {/* Hero Text */}
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 text-white tracking-tight">
              Enter the World <br />
              Behind the Idea
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 font-sans tracking-wide mb-10 max-w-md">
              Design begins with curiosity. We build digital experiences that bend reality.
            </p>

            <button 
              onClick={onCtaClick}
              className="group flex items-center gap-4 text-xs font-bold tracking-[0.4em] uppercase text-brand-gold hover:text-white transition-all"
            >
              <span className="relative">
                Explore Studio
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
              </span>
              <div className="w-12 h-[1px] bg-brand-gold/50 group-hover:bg-white transition-all group-hover:w-20" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 hover:opacity-60 transition-opacity">
        <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1.5">
          <div className="w-[1px] h-2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
