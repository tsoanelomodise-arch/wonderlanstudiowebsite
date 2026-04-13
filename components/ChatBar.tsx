
import React from 'react';
import { Plus, Paperclip, Palette, MessageSquare, Mic, ArrowUp } from 'lucide-react';

const ChatBar: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 relative group">
      {/* Gradient Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold/60 via-white/20 to-brand-gold/60 rounded-[2.6rem] opacity-30 blur-lg group-hover:opacity-50 transition duration-500 animate-gradient-x"></div>
      
      {/* Gradient Border Container */}
      <div className="relative p-[1px] rounded-[2.6rem] bg-gradient-to-r from-brand-gold/30 via-white/10 to-brand-gold/30 group-hover:from-brand-gold/60 group-hover:via-white/20 group-hover:to-brand-gold/60 transition-colors duration-500">
        <div className="bg-[#0f0f0f]/90 backdrop-blur-xl rounded-[2.5rem] p-4 flex flex-col gap-4 shadow-2xl shadow-brand-gold/5">
          <div className="px-4 py-3">
            <input 
              type="text" 
              placeholder="Ask Wonderland to design your next project..."
              className="w-full bg-transparent border-none outline-none text-white placeholder:text-neutral-500 text-xl font-medium"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-white/10 hover:text-white transition-colors">
                <Plus size={18} />
              </button>
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm font-semibold text-neutral-400 hover:bg-white/10 hover:text-white transition-colors">
                <Paperclip size={16} />
                <span>Attach</span>
              </button>
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm font-semibold text-neutral-400 hover:bg-white/10 hover:text-white transition-colors">
                <Palette size={16} />
                <span>Theme</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-bold text-neutral-200 hover:bg-white/20 transition-colors">
                <MessageSquare size={16} />
                <span className="hidden sm:inline">Chat</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-neutral-400 hover:bg-white/20 hover:text-white transition-colors">
                <Mic size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 hover:scale-105 transition-all shadow-lg shadow-white/10">
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
