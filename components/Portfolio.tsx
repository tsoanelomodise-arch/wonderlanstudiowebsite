
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, User, Tag, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useReveal } from '../hooks/useReveal';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const revealTitle = useReveal();
  
  const categories = ['All', 'Brand Design', 'Campaign', 'Web Design', 'Packaging'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const navigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (nextIndex >= PROJECTS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = PROJECTS.length - 1;
    
    setSelectedProject(PROJECTS[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowRight') navigateProject('next');
      if (e.key === 'ArrowLeft') navigateProject('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-black">
      {/* Animated Gradient Background - Dark/Mystery Theme */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-brand-gold/5 to-black animate-gradient-slow opacity-80 -z-10" />
      
      {/* Decorative Blur Element */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={revealTitle.ref as any}
          className={`flex flex-col md:flex-row justify-between items-center mb-16 gap-8 reveal ${revealTitle.className}`}
        >
          <div>
             <h2 className="text-4xl md:text-6xl font-serif text-white mb-4 tracking-tight">
               Selected <span className="text-brand-gold">Works</span>
             </h2>
             <p className="text-neutral-500 font-medium tracking-widest uppercase text-xs">Pushing boundaries across mediums</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all transform active:scale-95 ${
                  filter === cat 
                    ? 'bg-brand-gold text-black shadow-[0_0_20px_rgba(197,160,89,0.3)]' 
                    : 'bg-white/5 backdrop-blur-sm text-neutral-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-[2rem] overflow-hidden cursor-pointer bg-neutral-900/50 border border-white/5 transition-all duration-500 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <motion.img 
                    layoutId={`img-${project.id}`}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="inline-block px-3 py-1 bg-brand-gold/20 backdrop-blur-md rounded-full text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-4">
                    {project.category}
                  </span>
                  <motion.h3 
                    layoutId={`title-${project.id}`}
                    className="text-3xl font-serif text-white mb-3 tracking-tight"
                  >
                    {project.title}
                  </motion.h3>
                  <div className="flex items-center gap-2 text-brand-gold/0 group-hover:text-brand-gold transition-colors duration-500 text-xs font-bold uppercase tracking-widest">
                    <span>View Project</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 text-center">
          <button className="group px-12 py-5 border border-white/10 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:border-brand-gold transition-all relative overflow-hidden bg-transparent text-white">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Explore Archives</span>
            <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1] -z-0" />
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl max-h-full bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col md:flex-row shadow-2xl overflow-y-auto md:overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-black transition-all"
              >
                <X size={24} />
              </button>

              {/* Navigation Arrows */}
              <div className="absolute bottom-6 right-6 z-50 flex gap-4">
                <button 
                  onClick={(e) => { e.stopPropagation(); navigateProject('prev'); }}
                  className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-black transition-all border border-white/10"
                >
                  <motion.span whileTap={{ x: -4 }}>&larr;</motion.span>
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); navigateProject('next'); }}
                  className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-gold hover:text-black transition-all border border-white/10"
                >
                  <motion.span whileTap={{ x: 4 }}>&rarr;</motion.span>
                </button>
              </div>

              {/* Project Progress Indicator */}
              <div className="absolute top-8 left-8 z-50 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hidden md:block">
                 <p className="text-[10px] font-bold text-white tracking-widest uppercase">
                   Project {PROJECTS.findIndex(p => p.id === selectedProject.id) + 1} / {PROJECTS.length}
                 </p>
              </div>

              <div className="w-full md:w-3/5 h-[400px] md:h-auto relative">
                <motion.img 
                  layoutId={`img-${selectedProject.id}`}
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent hidden md:block" />
              </div>

              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-neutral-900">
                <div className="mb-8">
                  <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                    {selectedProject.category}
                  </span>
                  <motion.h2 
                    layoutId={`title-${selectedProject.id}`}
                    className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <p className="text-neutral-400 leading-relaxed mb-8 text-lg font-light">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-10 border-t border-white/5 pt-8">
                  <div>
                    <div className="flex items-center gap-2 text-neutral-500 mb-2">
                      <User size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Client</span>
                    </div>
                    <p className="text-white font-medium">{selectedProject.client}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-neutral-500 mb-2">
                      <Calendar size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Year</span>
                    </div>
                    <p className="text-white font-medium">{selectedProject.year}</p>
                  </div>
                </div>

                {selectedProject.results && (
                  <div className="mb-10">
                    <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
                      <Tag size={14} className="text-brand-gold" />
                      Key Results
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm">
                          <CheckCircle2 size={16} className="text-brand-gold shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] rounded-2xl hover:bg-brand-gold transition-colors">
                  View Full Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
