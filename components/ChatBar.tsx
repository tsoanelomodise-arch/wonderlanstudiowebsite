
import React from 'react';
import { Plus, Paperclip, Palette, MessageSquare, Mic, ArrowUp } from 'lucide-react';

const ChatBar: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 relative group">
      <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-3 md:p-4 flex flex-col gap-3 shadow-2xl shadow-black/10 border border-neutral-200/90 transition-all duration-300 hover:border-black/30">
        <div className="px-3 pt-1">
          <input 
            type="text" 
            placeholder="Ask Wonderland to design your next project..."
            className="w-full bg-transparent border-none outline-none text-black placeholder:text-neutral-400 text-base md:text-lg font-medium"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors">
              <Plus size={16} />
            </button>
            <button className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors">
              <Paperclip size={14} />
              <span>Attach</span>
            </button>
            <button className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors">
              <Palette size={14} />
              <span>Theme</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 text-xs font-bold text-black hover:bg-neutral-200 transition-colors">
              <MessageSquare size={14} />
              <span className="hidden sm:inline">Chat</span>
            </button>
            <button className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 hover:text-black transition-colors">
              <Mic size={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 hover:scale-105 transition-all shadow-md">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;

