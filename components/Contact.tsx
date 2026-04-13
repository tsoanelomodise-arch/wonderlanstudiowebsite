
import React from 'react';
import { Mail, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const Contact: React.FC = () => {
  const reveal = useReveal();

  return (
    <section id="contact" className="py-24">
      <div 
        ref={reveal.ref as any}
        className={`container mx-auto px-6 reveal ${reveal.className}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8">
              Let's create something <span className="text-brand-gold">magical</span>.
            </h2>
            <p className="text-lg text-neutral-400 mb-12">
              Ready to elevate your brand? Drop us a line and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8 mb-12">
              <div className="group flex items-center gap-6 cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:rotate-3 transition-all border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Email Us</p>
                  <p className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">support@wonderlandstudio.co.za</p>
                </div>
              </div>
              <div className="group flex items-center gap-6 cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center text-neutral-400 group-hover:scale-110 group-hover:-rotate-3 transition-all border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Visit Us</p>
                  <p className="text-xl font-bold text-white group-hover:text-neutral-300 transition-colors">1 Jacobs Ave, Fairway, Johannesburg</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
               {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white hover:scale-110 transition-all transform active:scale-95">
                     <Icon size={20} />
                  </button>
               ))}
            </div>
          </div>

          <div className="glass-card p-10 rounded-[3rem] shadow-2xl shadow-black/20 hover:shadow-brand-gold/10 transition-all duration-500">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-500 uppercase tracking-widest mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/40 outline-none transition-all text-white placeholder:text-neutral-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-500 uppercase tracking-widest mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/40 outline-none transition-all text-white placeholder:text-neutral-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-500 uppercase tracking-widest mb-2">Service</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/40 outline-none transition-all appearance-none cursor-pointer text-white">
                    <option className="bg-neutral-900">Brand Identity</option>
                    <option className="bg-neutral-900">Campaign Creative</option>
                    <option className="bg-neutral-900">Web Design</option>
                    <option className="bg-neutral-900">Other</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-500 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold/40 outline-none transition-all resize-none text-white placeholder:text-neutral-600"
                />
              </div>
              <button className="group w-full bg-white text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all transform active:scale-95 overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-96 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl grayscale group relative bg-neutral-900">
          <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
          <iframe
            title="Studio Map"
            width="100%" height="100%" style={{border:0, filter: 'invert(90%) hue-rotate(180deg)'}} loading="lazy" allowFullScreen
            src="https://maps.google.com/maps?q=1%20Jacobs%20Ave%2C%20Fairway%2C%20Johannesburg%2C%202196&output=embed"
            className="group-hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-100 opacity-60 group-hover:opacity-100"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
