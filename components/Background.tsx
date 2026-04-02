
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
    baseColor: '#050505', // Deep Black
    blobs: [
      { color: '#d946ef', top: '-10%', left: '-10%', width: '900px', height: '900px', duration: '25s', delay: '0s' }, // Fuchsia / Magenta
      { color: '#6366f1', bottom: '-10%', right: '-5%', width: '800px', height: '800px', duration: '18s', delay: '-5s' }, // Indigo
      { color: '#3b82f6', top: '20%', right: '10%', width: '600px', height: '600px', duration: '22s', delay: '-10s' }, // Blue
      { color: '#ec4899', bottom: '10%', left: '5%', width: '700px', height: '700px', duration: '30s', delay: '-15s' }, // Hot Pink
    ]
  },
  services: {
    baseColor: '#050505', 
    blobs: [
      { color: '#06b6d4', top: '10%', left: '20%', width: '900px', height: '900px', duration: '20s', delay: '0s' }, // Cyan
      { color: '#8b5cf6', top: '-10%', right: '-5%', width: '800px', height: '800px', duration: '28s', delay: '-3s' }, // Violet
      { color: '#2563eb', bottom: '0%', left: '-10%', width: '700px', height: '700px', duration: '22s', delay: '-7s' }, // Blue
      { color: '#f472b6', bottom: '-20%', right: '10%', width: '600px', height: '600px', duration: '15s', delay: '-12s' }, // Pink
    ]
  },
  portfolio: {
    baseColor: '#050505', 
    blobs: [
      { color: '#10b981', top: '30%', right: '-15%', width: '1100px', height: '1100px', duration: '30s', delay: '0s' }, // Emerald
      { color: '#0ea5e9', bottom: '-15%', left: '5%', width: '800px', height: '800px', duration: '25s', delay: '-5s' }, // Sky Blue
      { color: '#8b5cf6', top: '5%', left: '10%', width: '700px', height: '700px', duration: '20s', delay: '-10s' }, // Violet
      { color: '#34d399', bottom: '20%', right: '20%', width: '500px', height: '500px', duration: '35s', delay: '-15s' }, // Green
    ]
  },
  about: {
    baseColor: '#050505',
    blobs: [
      { color: '#ef4444', top: '40%', left: '40%', width: '1200px', height: '1200px', duration: '40s', delay: '0s' }, // Red
      { color: '#f59e0b', top: '-15%', left: '-15%', width: '900px', height: '900px', duration: '20s', delay: '-5s' }, // Amber
      { color: '#db2777', bottom: '-10%', right: '-5%', width: '800px', height: '800px', duration: '25s', delay: '-10s' }, // Pink
      { color: '#7c3aed', top: '15%', right: '15%', width: '600px', height: '600px', duration: '18s', delay: '-15s' }, // Purple
    ]
  },
  contact: {
    baseColor: '#050505',
    blobs: [
      { color: '#f97316', bottom: '10%', left: '30%', width: '1000px', height: '1000px', duration: '30s', delay: '0s' }, // Orange
      { color: '#e11d48', top: '-5%', right: '5%', width: '800px', height: '800px', duration: '25s', delay: '-8s' }, // Rose
      { color: '#db2777', bottom: '-15%', left: '-5%', width: '700px', height: '700px', duration: '22s', delay: '-15s' }, // Pink
      { color: '#a855f7', top: '25%', right: '-5%', width: '600px', height: '600px', duration: '35s', delay: '-20s' }, // Purple
    ]
  },
};

const Background: React.FC<BackgroundProps> = ({ activeSection }) => {
  // Map normalized section ID to theme
  const themeKey = activeSection === 'home' ? 'home' : activeSection;
  const currentTheme = THEMES[themeKey] || THEMES.home;

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none -z-50 transition-colors duration-[1.5s] ease-in-out"
      style={{ backgroundColor: currentTheme.baseColor }}
    >
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
            transform: `translate(${activeSection === 'home' ? '0%' : '10%'}, ${activeSection === 'home' ? '0%' : '-10%'}) scale(${activeSection === 'home' ? 1 : 1.1})`
          }}
        />
      ))}
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")' }} 
      />
    </div>
  );
};

export default Background;
