
import React from 'react';

interface BackgroundProps {
  activeSection: string;
}

const Background: React.FC<BackgroundProps> = ({ activeSection }) => {
  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#FAFAF8] transition-colors duration-1000"
    >
      {/* Soft Vignette / Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1)_0%,rgba(242,242,238,0.6)_100%)]" />

      {/* Halftone Fine Dot Texture Overlay */}
      <div className="absolute inset-0 halftone-overlay opacity-[0.22] mix-blend-multiply" />

      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 grain-pattern opacity-[0.6] pointer-events-none" />

      {/* Soft Monochrome Vignette Edge */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.03)_100%)]" />
    </div>
  );
};

export default Background;

