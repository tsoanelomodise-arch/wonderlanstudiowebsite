
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
             <h4 className="text-xl font-display font-extrabold tracking-tight mb-2 text-white">The Wonderland <span className="text-brand-pink">Studio</span></h4>
             <p className="text-neutral-500 text-sm">Design that bends reality (just a little).</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-sm font-semibold text-neutral-400 hover:text-brand-pink transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-semibold text-neutral-400 hover:text-brand-pink transition-colors">Terms of Service</a>
            <a href="#" className="text-sm font-semibold text-neutral-400 hover:text-brand-pink transition-colors">Careers</a>
          </div>

          <div className="text-neutral-600 text-sm">
            &copy; {new Date().getFullYear()} The Wonderland Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
