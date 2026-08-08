
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="px-4 sm:px-8 py-6 sm:py-8 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/80 shadow-xl shadow-black/[0.03] flex flex-col items-center justify-center hover:translate-y-[-2px] transition-all cursor-default text-center"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-black mb-1 tracking-tight">
                {stat.value}
              </span>
              <span className="text-neutral-500 font-medium tracking-wider uppercase text-[10px] sm:text-xs">
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

