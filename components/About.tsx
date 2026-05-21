import React from 'react';
import { CheckCircle2, Sparkles, Target, Eye, BookOpen, ThumbsUp } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const About: React.FC = () => {
  const reveal = useReveal();

  return (
    <section id="about" className="py-32 text-white relative">
      <div 
        ref={reveal.ref as any}
        className={`container mx-auto px-6 relative z-10 reveal ${reveal.className}`}
      >
        {/* SECTION 1: Overview & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-24">
          <div className="relative group overflow-hidden rounded-[3rem] h-full min-h-[400px] lg:min-h-auto">
             <div className="absolute inset-0 bg-[#080808] rounded-[3rem] overflow-hidden border border-neutral-800/60 relative h-full">
               <img 
                 src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1000" 
                 alt="Creative Expression"
                 className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2000ms]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
               
               {/* Visual metaphor elements */}
               <div className="absolute top-[40%] left-[40%] animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-24 h-24 bg-brand-gold rounded-full blur-3xl opacity-30" />
                  <Sparkles className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6" />
               </div>
               <div className="absolute bottom-[30%] right-[30%] animate-bounce" style={{ animationDuration: '6s', animationDelay: '1.5s' }}>
                  <div className="w-20 h-20 bg-brand-gold rounded-full blur-3xl opacity-20" />
                  <Sparkles className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4" />
               </div>
             </div>
             
             <div className="absolute top-12 left-12 right-12 z-10">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Company Profile</span>
                <h3 className="text-4xl md:text-5xl font-serif tracking-tight text-white leading-tight">
                  Wonderland <br />Studio
                </h3>
             </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Company Overview</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight tracking-tight">
              Transforming ideas into <br />
              <span className="text-brand-gold italic">compelling</span> experiences.
            </h2>
            
            <div className="space-y-6 text-neutral-400 font-sans tracking-wide leading-relaxed font-light text-base md:text-lg">
              <p>
                Wonderland Studio is a creative digital agency focused on helping brands grow through strategic marketing, innovative technology solutions, impactful content creation, and modern digital experiences. The company combines creativity, strategy, and technology to deliver tailored solutions that strengthen brand identity, improve online visibility, and support business growth.
              </p>
              <p>
                Wonderland Studio believes that every business has a unique story worth telling. Through a collaborative and client-focused approach, the studio transforms ideas into compelling digital experiences that connect with audiences and create measurable results.
              </p>
              <p>
                The company serves startups, entrepreneurs, SMEs, and established businesses across multiple industries by providing integrated branding, marketing, design, and technology services under one creative ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 md:p-12 rounded-[2rem] bg-[#0c0c0c]/50 border border-white/5 hover:border-brand-gold/20 transition-all duration-500 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-8 border border-brand-gold/20">
              <Target size={20} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Mission</h3>
            <p className="text-neutral-400 font-sans tracking-wide leading-relaxed font-light">
              To empower businesses through innovative digital solutions, strategic creativity, and advanced technology that enhance brand visibility, improve customer engagement, and drive sustainable growth.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-[2rem] bg-[#0c0c0c]/50 border border-white/5 hover:border-brand-gold/20 transition-all duration-500 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-8 border border-brand-gold/20">
              <Eye size={20} />
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">Vision</h3>
            <p className="text-neutral-400 font-sans tracking-wide leading-relaxed font-light">
              To become a leading creative and technology partner recognized for delivering transformative digital experiences, innovative systems, and impactful brand solutions across Africa and beyond.
            </p>
          </div>
        </div>

        {/* SECTION 3: Company Philosophy & Client Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pb-16 border-b border-white/5 mb-24">
          <div>
            <div className="flex items-center gap-3 text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              <BookOpen size={14} />
              <span>Company Philosophy</span>
            </div>
            <div className="space-y-6 text-neutral-400 font-sans tracking-wide leading-relaxed font-light text-base md:text-lg">
              <p>
                Wonderland Studio combines creativity, strategy, and technology to build meaningful digital experiences that create lasting impact. The company values innovation, collaboration, authenticity, and excellence in every project delivered.
              </p>
              <p>
                Their approach focuses on understanding each client’s goals, audience, and vision before developing customized solutions that align with long-term business growth.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              <ThumbsUp size={14} />
              <span>Client Approach</span>
            </div>
            <div className="space-y-6 text-neutral-400 font-sans tracking-wide leading-relaxed font-light text-base md:text-lg">
              <p>
                Wonderland Studio works closely with clients throughout every stage of the project lifecycle — from strategy and planning to design, development, and ongoing support. Their collaborative process ensures that each solution is tailored to the client’s vision while delivering measurable business value.
              </p>
              <p>
                The company is committed to building long-term partnerships through reliability, creativity, innovation, and exceptional service delivery.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: Why Choose Us */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Proven Value</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 tracking-tight leading-tight">
              Why Choose Wonderland Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Creative and strategy-driven solutions',
              'Modern and responsive digital design',
              'Integrated branding and technology services',
              'Customized systems and applications',
              'Client-focused collaboration',
              'Results-oriented marketing strategies',
              'Scalable digital solutions',
              'Professional and innovative execution'
            ].map((reason, i) => (
              <div 
                key={i} 
                className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/30 hover:bg-[#0c0c0c]/70 transition-all duration-300 flex flex-col justify-between"
              >
                <CheckCircle2 className="text-brand-gold mb-6 shrink-0" size={24} />
                <p className="text-sm font-sans tracking-wide text-neutral-200 font-medium leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
