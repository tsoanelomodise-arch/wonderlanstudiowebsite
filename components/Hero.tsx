
import React from 'react';
import { Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const reveal = useReveal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020202]">
      {/* Deep Textured Background - Matching the Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        {/* Stone/Concrete Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none" 
          style={{ 
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
            backgroundSize: '500px'
          }} 
        />
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      <div className="container mx-auto px-10 md:px-20 relative z-20">
        <div 
          ref={reveal.ref as any}
          className={`flex flex-col md:flex-row items-center justify-start gap-16 md:gap-40 reveal ${reveal.className}`}
        >
          {/* Precise Golden Doorway from Image */}
          <div className="relative w-48 h-[360px] md:w-64 md:h-[480px] flex-shrink-0 group">
            {/* The Doorway Frame - Thin Glowing Line */}
            <div className="absolute inset-0 z-20">
              {/* Sharp 1px Gold Line */}
              <div className="absolute inset-0 border-[1px] border-brand-gold/80 shadow-[0_0_10px_rgba(197,160,89,0.3)]" />
              {/* Inner Glow */}
              <div className="absolute inset-0 border-[1px] border-brand-gold/10 blur-[1px]" />
            </div>
            
            {/* Outer Bloom Glow */}
            <div className="absolute -inset-4 bg-brand-gold/5 blur-[40px] z-10 opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />

            {/* Floor Reflection / Light Spill at Base - Matching Image */}
            <div className="absolute -bottom-4 left-0 right-0 h-12 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.25)_0%,transparent_70%)] z-10 blur-md" />
            <div className="absolute -bottom-1 left-1/4 right-1/4 h-2 bg-brand-gold/20 z-20 blur-sm" />
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
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20 hover:opacity-50 transition-opacity">
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-[1px] h-2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
