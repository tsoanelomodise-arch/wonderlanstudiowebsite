
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Studio', id: 'about' },
    { name: 'Work', id: 'portfolio' },
    { name: 'Our Expertise', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 md:pt-6 px-3 sm:px-4 md:px-8 max-w-7xl mx-auto transition-all duration-300">
      <nav 
        className={`w-full mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 glass-nav flex items-center justify-between border border-neutral-200/80 shadow-lg shadow-black/[0.03] ${
          isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-md border-neutral-300/80' : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        {/* Brand Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2.5 text-black text-left"
        >
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white text-xs font-black tracking-tighter shrink-0">
            W
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xs font-black tracking-widest uppercase text-black font-display">WONDERLAND<sup>®</sup></span>
            <span className="text-[9px] font-semibold tracking-widest text-neutral-400 uppercase mt-0.5">STUDIO</span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-xs font-medium tracking-wide transition-all relative py-1 ${
                activeSection === link.id ? 'text-black font-bold' : 'text-neutral-500 hover:text-black'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-medium tracking-wide rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-sm flex items-center gap-1.5"
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-black hover:opacity-70 transition-opacity rounded-full active:bg-neutral-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#FAFAF8]/98 backdrop-blur-2xl z-50 flex flex-col items-center justify-center gap-8 p-6 md:hidden animate-in fade-in duration-200">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-black p-3 rounded-full border border-neutral-200 bg-white shadow-sm active:scale-95 transition-transform"
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>

          <div className="flex flex-col items-center gap-6 w-full max-w-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMenuOpen(false);
                }}
                className={`text-2xl font-bold tracking-tight text-black py-2 hover:opacity-70 transition-opacity ${
                  activeSection === link.id ? 'underline underline-offset-8' : ''
                }`}
              >
                {link.name}
              </button>
            ))}

            <button 
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
              }}
              className="mt-4 w-full py-4 bg-black text-white text-sm font-bold tracking-wider uppercase rounded-full shadow-lg flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

