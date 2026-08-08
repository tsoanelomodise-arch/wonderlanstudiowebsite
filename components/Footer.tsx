
import React from 'react';

interface FooterProps {
  onCmsClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCmsClick }) => {
  return (
    <footer className="py-12 bg-white border-t border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
             <h4 className="text-xl font-black font-display tracking-tight mb-1 text-black uppercase">The Wonderland Studio</h4>
             <p className="text-neutral-500 text-xs">Design that bends reality (just a little).</p>
          </div>
          
          <div className="flex gap-6 items-center">
            <a href="#" className="text-xs font-bold text-neutral-600 hover:text-black transition-colors uppercase tracking-wider">Privacy Policy</a>
            <a href="#" className="text-xs font-bold text-neutral-600 hover:text-black transition-colors uppercase tracking-wider">Terms of Service</a>
            {onCmsClick && (
              <button 
                onClick={onCmsClick}
                className="text-xs font-bold text-black hover:bg-black hover:text-white transition-all uppercase tracking-wider flex items-center gap-1 bg-neutral-100 border border-neutral-300 px-3.5 py-1.5 rounded-full"
              >
                Studio CMS
              </button>
            )}
          </div>

          <div className="text-neutral-500 text-xs font-medium">
            &copy; {new Date().getFullYear()} The Wonderland Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

