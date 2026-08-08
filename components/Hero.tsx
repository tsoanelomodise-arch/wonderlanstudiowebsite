
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
  const trustedReveal = useReveal();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShow = isScrolled && trustedReveal.isVisible;

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-36 pb-10 flex flex-col items-center justify-between overflow-hidden bg-transparent">
      
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
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 relative z-10 -mt-20 sm:-mt-40 md:-mt-52 mb-2 flex justify-center items-center">
        <DinoGame />
      </div>

      {/* Trusted Clients / Logos Section */}
      <div 
        ref={trustedReveal.ref as any}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-20 pt-6"
      >
        <div className="text-center mb-6">
          <p className={`text-[11px] font-semibold tracking-widest text-neutral-400 uppercase transition-all duration-700 ${
            shouldShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
          }`}>
            Trusted by companies of every scale
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-14 opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-opacity duration-500">
          {CLIENT_LOGOS.map((client, idx) => (
            <span 
              key={idx} 
              className={`${client.font} text-neutral-800 hover:text-black transition-all duration-700 ${
                shouldShow 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
              }`}
              style={{
                transitionDelay: shouldShow ? `${idx * 100 + 150}ms` : '0ms'
              }}
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;

