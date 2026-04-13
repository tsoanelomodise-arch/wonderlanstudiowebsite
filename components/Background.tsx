
import React from 'react';

interface BackgroundProps {
  activeSection: string;
}

interface BlobConfig {
  color: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  height: string;
  duration: string;
  delay: string;
}

interface SectionTheme {
  baseColor: string;
  blobs: BlobConfig[];
}

// Themes inspired by "Lovable" dark UI with glowing gradients
const THEMES: Record<string, SectionTheme> = {
  home: {
    baseColor: '#0a0a0a', // Moody Dark Grey
    blobs: [
      { color: '#C5A059', top: '30%', left: '20%', width: '600px', height: '600px', duration: '40s', delay: '0s' }, // Very subtle gold warmth
    ]
  },
  services: {
    baseColor: '#080808', 
    blobs: [
      { color: '#C5A059', top: '10%', left: '20%', width: '900px', height: '900px', duration: '20s', delay: '0s' },
    ]
  },
  portfolio: {
    baseColor: '#080808', 
    blobs: [
      { color: '#C5A059', top: '30%', right: '-15%', width: '1100px', height: '1100px', duration: '30s', delay: '0s' },
    ]
  },
  about: {
    baseColor: '#080808',
    blobs: [
      { color: '#C5A059', top: '40%', left: '40%', width: '1200px', height: '1200px', duration: '40s', delay: '0s' },
    ]
  },
  contact: {
    baseColor: '#080808',
    blobs: [
      { color: '#C5A059', bottom: '10%', left: '30%', width: '1000px', height: '1000px', duration: '30s', delay: '0s' },
    ]
  },
};

const Background: React.FC<BackgroundProps> = ({ activeSection }) => {
  const themeKey = activeSection === 'home' ? 'home' : activeSection;
  const currentTheme = THEMES[themeKey] || THEMES.home;

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none -z-50 transition-colors duration-[1.5s] ease-in-out"
      style={{ backgroundColor: currentTheme.baseColor }}
    >
      {/* Radial Vignette for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

      {currentTheme.blobs.map((blob, idx) => (
        <div 
          key={idx}
          className="mesh-blob"
          style={{
            backgroundColor: blob.color,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
            width: blob.width,
            height: blob.height,
            animationDuration: blob.duration,
            animationDelay: blob.delay,
            opacity: activeSection === 'home' ? 0.08 : 0.15, // Extremely subtle
            filter: 'blur(160px)',
            transform: `translate(${activeSection === 'home' ? '0%' : '5%'}, ${activeSection === 'home' ? '0%' : '-5%'})`
          }}
        />
      ))}
      
      {/* Moody Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-soft-light" 
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
          backgroundSize: '200px'
        }} 
      />
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }} 
      />
    </div>
  );
};

export default Background;
