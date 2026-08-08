
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, User, Tag, CheckCircle2, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';
import { useReveal } from '../hooks/useReveal';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const { projects } = useProjects();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const revealTitle = useReveal();

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedProject]);
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const navigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (nextIndex >= projects.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = projects.length - 1;
    
    setSelectedProject(projects[nextIndex]);
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
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          ref={revealTitle.ref as any}
          className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 reveal ${revealTitle.className}`}
        >
          <div>
             <h2 className="text-4xl md:text-6xl font-black font-display text-black mb-4 tracking-tight uppercase">
               Selected Works
             </h2>
             <p className="text-neutral-500 font-medium tracking-wider uppercase text-xs">Pushing boundaries across digital mediums</p>
          </div>
          
          <div className="flex flex-wrap gap-2 max-w-full overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all transform active:scale-95 ${
                  filter === cat 
                    ? 'bg-black text-white shadow-md' 
                    : 'bg-white text-neutral-600 hover:text-black border border-neutral-200/90 shadow-sm hover:border-neutral-400'
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
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-neutral-200/80 shadow-xl shadow-black/[0.03] transition-all duration-500 hover:shadow-2xl hover:border-neutral-400 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] overflow-hidden bg-neutral-100 relative">
                  <motion.img 
                    layoutId={`img-${project.id}`}
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-[1.25] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>
                
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-3">
                    {project.category}
                  </span>
                  <motion.h3 
                    layoutId={`title-${project.id}`}
                    className="text-2xl md:text-3xl font-black font-display text-white mb-2 tracking-tight"
                  >
                    {project.title}
                  </motion.h3>
                  <div className="flex items-center gap-1.5 text-white/80 group-hover:text-white transition-colors duration-300 text-xs font-semibold">
                    <span>Explore Project</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-white border border-neutral-300 hover:border-black rounded-full font-semibold uppercase tracking-widest text-xs text-black transition-all hover:bg-black hover:text-white shadow-sm hover:shadow-md">
            Explore Archives
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
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden border border-neutral-200/80 flex flex-col md:flex-row shadow-2xl overflow-y-auto md:overflow-hidden text-black z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 w-10 h-10 bg-neutral-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center text-black transition-all shadow-sm"
              >
                <X size={20} />
              </button>

              {/* Navigation Arrows */}
              <div className="absolute bottom-6 right-6 z-50 flex gap-3">
                <button 
                  onClick={(e) => { e.stopPropagation(); navigateProject('prev'); }}
                  className="w-10 h-10 bg-neutral-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center text-black transition-all border border-neutral-200"
                >
                  <motion.span whileTap={{ x: -3 }}>&larr;</motion.span>
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); navigateProject('next'); }}
                  className="w-10 h-10 bg-neutral-100 hover:bg-black hover:text-white rounded-full flex items-center justify-center text-black transition-all border border-neutral-200"
                >
                  <motion.span whileTap={{ x: 3 }}>&rarr;</motion.span>
                </button>
              </div>

              {/* Project Indicator */}
              <div className="absolute top-6 left-6 z-50 px-4 py-1.5 bg-neutral-100 rounded-full border border-neutral-200 hidden md:block">
                 <p className="text-[10px] font-bold text-neutral-700 tracking-widest uppercase">
                   Project {projects.findIndex(p => p.id === selectedProject.id) + 1} / {projects.length}
                 </p>
              </div>

              {/* Image Preview Left Area */}
              <div className="w-full md:w-3/5 h-[260px] sm:h-[340px] md:h-auto relative bg-neutral-100 flex items-center justify-center overflow-hidden min-h-[240px] md:min-h-[360px] shrink-0">
                {(() => {
                  const projectImages = selectedProject.images && selectedProject.images.length > 0
                    ? selectedProject.images
                    : [selectedProject.image];
                  
                  const nextImage = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev + 1) % projectImages.length);
                  };

                  const prevImage = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
                  };

                  return (
                    <>
                      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.img 
                            key={activeImageIndex}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            src={projectImages[activeImageIndex]} 
                            alt={`${selectedProject.title} view ${activeImageIndex + 1}`}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover filter contrast-[1.1] absolute inset-0"
                          />
                        </AnimatePresence>
                      </div>

                      {/* Image Arrow Controls */}
                      {projectImages.length > 1 && (
                        <>
                          <button 
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-black hover:text-white rounded-full flex items-center justify-center text-black transition-all shadow-md z-20"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button 
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-black hover:text-white rounded-full flex items-center justify-center text-black transition-all shadow-md z-20"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </>
                      )}

                      {/* Thumbnails Bar */}
                      {projectImages.length > 1 && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-35 bg-white/90 backdrop-blur-md px-3 py-2 rounded-2xl border border-neutral-200 max-w-[90%] overflow-x-auto shadow-lg">
                          {projectImages.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => { e.stopPropagation(); setActiveImageIndex(idx); }}
                              className={`relative w-11 h-11 rounded-xl overflow-hidden border-2 transition-all shrink-0 hover:scale-105 ${
                                idx === activeImageIndex 
                                  ? 'border-black scale-105 shadow-md opacity-100' 
                                  : 'border-transparent opacity-60 hover:opacity-100'
                              }`}
                            >
                              <img 
                                src={img} 
                                alt={`thumbnail ${idx + 1}`} 
                                className="w-full h-full object-cover" 
                                referrerPolicy="no-referrer"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* Text Info Right Area */}
              <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-between bg-white">
                <div>
                  <span className="text-black font-bold uppercase tracking-widest text-[11px] mb-3 block">
                    {selectedProject.category}
                  </span>
                  <motion.h2 
                    layoutId={`title-${selectedProject.id}`}
                    className="text-3xl md:text-4xl font-black font-display text-black mb-4 tracking-tight"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <p className="text-neutral-600 leading-relaxed mb-6 text-sm font-normal">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-6 border-t border-b border-neutral-100 py-6">
                    <div>
                      <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                        <User size={13} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Client</span>
                      </div>
                      <p className="text-black font-semibold text-sm">{selectedProject.client}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                        <Calendar size={13} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Year</span>
                      </div>
                      <p className="text-black font-semibold text-sm">{selectedProject.year}</p>
                    </div>
                  </div>

                  {selectedProject.results && (
                    <div className="mb-6">
                      <h4 className="text-black font-bold uppercase tracking-widest text-[10px] mb-3 flex items-center gap-2">
                        <Tag size={13} className="text-black" />
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-neutral-600 text-xs">
                            <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-neutral-800 transition-colors shadow-md">
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

