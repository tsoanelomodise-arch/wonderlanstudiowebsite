
import React from 'react';
import { Mail, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const Contact: React.FC = () => {
  const reveal = useReveal();

  return (
    <section id="contact" className="py-24 relative bg-transparent">
      <div 
        ref={reveal.ref as any}
        className={`max-w-7xl mx-auto px-6 reveal ${reveal.className}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-black text-xs font-bold uppercase tracking-widest mb-3 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-black font-display text-black mb-6 uppercase tracking-tight leading-none">
              Let's create something <span className="underline underline-offset-8">extraordinary</span>.
            </h2>
            <p className="text-base md:text-lg text-neutral-600 mb-12 max-w-lg leading-relaxed">
              Ready to elevate your brand? Drop us a line and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-6 mb-10">
              <div className="group flex items-center gap-5 cursor-pointer bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-black transition-all">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-black group-hover:scale-105 transition-all border border-neutral-200 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Email Us</p>
                  <p className="text-base md:text-lg font-bold text-black transition-colors break-all md:break-normal">support@wonderlandstudio.co.za</p>
                </div>
              </div>

              <div className="group flex items-center gap-5 cursor-pointer bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-sm hover:border-black transition-all">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-black group-hover:scale-105 transition-all border border-neutral-200 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Visit Us</p>
                  <p className="text-base md:text-lg font-bold text-black transition-colors">1 Jacobs Ave, Fairway, Johannesburg</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
               {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <button key={i} className="w-11 h-11 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black hover:scale-105 transition-all active:scale-95 shadow-sm">
                     <Icon size={18} />
                  </button>
               ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-neutral-200/80 shadow-xl shadow-black/[0.03]">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:border-black focus:bg-white outline-none transition-all text-black placeholder:text-neutral-400 text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:border-black focus:bg-white outline-none transition-all text-black placeholder:text-neutral-400 text-sm font-medium"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">Service</label>
                <div className="relative">
                  <select className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:border-black focus:bg-white outline-none transition-all appearance-none cursor-pointer text-black text-sm font-medium">
                    <option className="bg-white">Website Design & Development</option>
                    <option className="bg-white">Branding & Visual Identity</option>
                    <option className="bg-white">Social Media Management</option>
                    <option className="bg-white">Content Creation</option>
                    <option className="bg-white">Digital Advertising</option>
                    <option className="bg-white">Systems & Software Development</option>
                    <option className="bg-white">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:border-black focus:bg-white outline-none transition-all resize-none text-black placeholder:text-neutral-400 text-sm font-medium"
                />
              </div>
              <button className="group w-full bg-black text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all transform active:scale-95 shadow-lg shadow-black/10">
                <span className="flex items-center gap-2 uppercase tracking-wider text-xs">
                  Send Message
                  <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-80 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xl shadow-black/[0.03] group relative bg-neutral-100">
          <iframe
            title="Studio Map"
            width="100%" height="100%" style={{border:0, filter: 'grayscale(100%) contrast(1.1) brightness(0.95)'}} loading="lazy" allowFullScreen
            src="https://maps.google.com/maps?q=1%20Jacobs%20Ave%2C%20Fairway%2C%20Johannesburg%2C%202196&output=embed"
            className="transition-all duration-700 opacity-90 group-hover:opacity-100"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

