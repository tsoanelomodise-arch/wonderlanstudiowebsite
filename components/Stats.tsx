
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="px-10 py-8 rounded-4xl glass-card flex flex-col items-center hover:scale-105 transition-all cursor-default shadow-lg shadow-black/20"
            >
              <span className="text-4xl font-display font-extrabold text-white mb-1">
                {stat.value}
              </span>
              <span className="text-neutral-400 font-bold tracking-widest uppercase text-[10px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
