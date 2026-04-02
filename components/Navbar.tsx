
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
    { name: 'Solutions', id: 'services' },
    { name: 'Discover', id: 'portfolio' },
    { name: 'Community', id: 'about' },
    { name: 'Pricing', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between rounded-full px-8 py-3 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg' 
            : 'bg-transparent'
        }`}>
          <button 
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-2 text-xl font-display font-extrabold tracking-tighter text-white"
          >
            <div className="w-6 h-6 bg-brand-pink rounded-lg transform rotate-12 group-hover:rotate-0 transition-transform shadow-lg shadow-brand-pink/20" />
            <span>Wonderland</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-sm font-semibold transition-all hover:text-brand-magenta ${
                    activeSection === link.id ? 'text-brand-magenta' : 'text-neutral-300'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3 border-l border-white/10 pl-8 ml-4">
              <button className="text-sm font-bold text-neutral-300 hover:text-white px-4">Log in</button>
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-neutral-200 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
              >
                Get started
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
