
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { useReveal } from '../hooks/useReveal';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const revealTitle = useReveal();
  const revealGrid = useReveal();
  
  const categories = ['All', 'Brand Design', 'Campaign', 'Web Design', 'Packaging'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background - Dark/Mystery Theme */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-emerald-950/40 to-black animate-gradient-slow opacity-80 -z-10" />
      
      {/* Decorative Blur Element */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={revealTitle.ref as any}
          className={`flex flex-col md:flex-row justify-between items-center mb-16 gap-8 reveal ${revealTitle.className}`}
        >
          <div>
             <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-4">
               Selected Works
             </h2>
             <p className="text-neutral-400 font-medium">Pushing boundaries across mediums</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all transform active:scale-95 ${
                  filter === cat 
                    ? 'bg-white text-black shadow-lg scale-105' 
                    : 'bg-white/5 backdrop-blur-sm text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div 
          ref={revealGrid.ref as any}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-reveal ${revealGrid.className}`}
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer bg-neutral-900 border border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:translate-x-1 transition-transform duration-500">{project.title}</h3>
                <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Explore case study &rarr;
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="group px-10 py-4 border-2 border-white rounded-full font-bold hover:bg-white hover:text-black transition-all transform hover:scale-105 active:scale-95 relative overflow-hidden bg-transparent text-white">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
