
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-black/80 backdrop-blur-md' : 'py-6 md:py-10 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-10 md:px-16">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-3 text-white"
          >
            <div className="flex items-center justify-center w-8 h-10 border-2 border-brand-gold relative">
              <div className="w-[1px] h-6 bg-brand-gold" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-sm font-bold tracking-[0.2em] uppercase">Wonderland</span>
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-neutral-400">Studio</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all relative group ${
                  activeSection === link.id ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMenuOpen(false);
              }}
              className="text-2xl font-serif text-white tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-10 right-10 text-white"
          >
            <X size={32} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
