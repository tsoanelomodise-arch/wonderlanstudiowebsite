
import React from 'react';
import { useReveal } from '../hooks/useReveal';
import DinoGame from './DinoGame';

interface HeroProps {
  onCtaClick: () => void;
}

const CLIENT_LOGOS = [
  { name: 'MERCURY', font: 'font-mono uppercase font-black text-xs md:text-sm tracking-widest' },
  { name: 'ramp ↗', font: 'font-sans font-black tracking-tighter text-sm md:text-base italic' },
  { name: 'HEX', font: 'font-mono font-black text-xs md:text-sm tracking-wider' },
  { name: '▲ Vercel', font: 'font-sans font-bold text-xs md:text-sm tracking-tight' },
  { name: 'descript', font: 'font-mono text-xs md:text-sm lowercase tracking-tight' },
  { name: 'S Cash App', font: 'font-sans font-black text-xs md:text-sm' },
  { name: 'RUNWAY', font: 'font-mono font-bold text-xs md:text-sm tracking-wider' },
];

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const reveal = useReveal();

  return (
    <section className="relative pt-28 sm:pt-40 md:pt-52 pb-10 flex flex-col items-center justify-between overflow-hidden bg-transparent">
      
      {/* Top Hero Container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-20">
        <div 
          ref={reveal.ref as any}
          className={`flex flex-col items-center reveal ${reveal.className}`}
        >
          {/* Main Editorial Oversized Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-black tracking-tight leading-[0.98] sm:leading-[0.95] max-w-4xl font-display mb-3 uppercase">
            Enter the World <br />
            Behind the Idea.
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-500 max-w-xl mx-auto font-normal leading-relaxed mb-2 px-2">
            Design begins with curiosity. We help modern brands craft digital stories that bend reality and inspire action.
          </p>
        </div>
      </div>

      {/* Interactive Google Chrome Dino Game */}
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 relative z-10 -mt-16 sm:-mt-32 md:-mt-44 mb-2 flex justify-center items-center">
        <DinoGame />
      </div>

      {/* Trusted Clients / Logos Section */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-20 pt-6">
        <div className="text-center mb-6">
          <p className="text-[11px] font-semibold tracking-widest text-neutral-400 uppercase">
            Trusted by teams of every scale
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {CLIENT_LOGOS.map((client, idx) => (
            <span key={idx} className={`${client.font} text-neutral-800 hover:text-black transition-colors`}>
              {client.name}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;

