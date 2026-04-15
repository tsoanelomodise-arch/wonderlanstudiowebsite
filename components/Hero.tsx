
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
      {/* Recreated Background with CSS */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        {/* Wall Texture */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay" 
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")' }} 
        />
        
        {/* The Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#030303]"
          style={{ 
            backgroundImage: 'radial-gradient(ellipse at 20% 0%, rgba(197, 160, 89, 0.08) 0%, transparent 70%)',
          }}
        >
           <div className="absolute inset-0 opacity-[0.1]" 
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} 
          />
          {/* Floor Shadow/Perspective */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        </div>

        {/* The Doorway */}
        <div className="absolute left-[8%] md:left-[15%] bottom-[38%] w-[160px] md:w-[220px] h-[320px] md:h-[440px] animate-doorway">
          {/* The Frame (Thin Golden Line) */}
          <div className="absolute inset-0 border-[1.5px] border-brand-gold/90 shadow-[0_0_15px_rgba(197,160,89,0.5),0_0_40px_rgba(197,160,89,0.2)]">
            {/* Inner Darkness */}
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          {/* Floor Light Spill (Subtle Glow) */}
          <div className="absolute -bottom-[80px] left-1/2 -translate-x-1/2 w-[280px] h-[120px] bg-brand-gold/10 blur-[50px] rounded-full opacity-60" />
          <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[160px] h-[30px] bg-brand-gold/20 blur-[15px] rounded-full" />
        </div>

        {/* Vignette for depth and readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.95)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-6 md:px-20 relative z-20">
        <div 
          ref={reveal.ref as any}
          className={`flex flex-col md:flex-row items-center justify-center md:justify-end gap-12 md:gap-40 reveal ${reveal.className}`}
        >
          {/* Spacer for the doorway in the background image - adjusted for better alignment */}
          <div className="hidden md:block w-1/3 lg:w-1/2 h-[480px] flex-shrink-0" />

          {/* Hero Text */}
          <div className="text-center md:text-left max-w-2xl pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif leading-tight mb-6 md:mb-8 text-white tracking-tight">
              Enter the World <br />
              Behind the Idea
            </h1>
            
            <p className="text-base md:text-xl text-neutral-400 font-sans tracking-wide mb-10 max-w-md mx-auto md:mx-0">
              Design begins with curiosity. We build digital experiences that bend reality.
            </p>

            <button 
              onClick={onCtaClick}
              className="group flex items-center justify-center md:justify-start gap-4 text-xs font-bold tracking-[0.4em] uppercase text-brand-gold hover:text-white transition-all mx-auto md:mx-0"
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
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-20 hover:opacity-50 transition-opacity">
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
          <div className="w-[1px] h-2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
