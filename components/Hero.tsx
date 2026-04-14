
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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/input_file_0.png" 
          alt="Wonderland Studio Background" 
          className="w-full h-full object-cover md:object-center object-left opacity-80"
          referrerPolicy="no-referrer"
        />
        {/* Vignette for depth and readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
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
