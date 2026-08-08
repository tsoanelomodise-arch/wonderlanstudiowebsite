
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import WorkCMS from './components/WorkCMS';
import { Sliders } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isCmsOpen, setIsCmsOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold/30 text-neutral-200">
      <Background activeSection={activeSection} />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <Hero onCtaClick={() => handleNavigate('portfolio')} />
        <Stats />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>

      {/* Floating CMS Actions Console Key */}
      <button
        onClick={() => setIsCmsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-black hover:bg-neutral-800 text-white font-bold tracking-wider text-[10px] sm:text-[11px] uppercase rounded-full border border-neutral-700 shadow-2xl transition-all duration-300 group cursor-pointer active:scale-95"
        title="Open Studio Case Studies CMS operations console"
      >
        <Sliders size={13} className="group-hover:rotate-45 transition-transform duration-500 text-white" />
        <span>Manage Works</span>
      </button>

      <WorkCMS isOpen={isCmsOpen} onClose={() => setIsCmsOpen(false)} />
      <Footer onCmsClick={() => setIsCmsOpen(true)} />
    </div>
  );
};

export default App;
