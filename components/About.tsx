import React from 'react';
import { CheckCircle2, Target, Eye, BookOpen, ThumbsUp } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const About: React.FC = () => {
  const reveal = useReveal();

  return (
    <section id="about" className="py-24 md:py-32 text-black relative bg-transparent">
      <div 
        ref={reveal.ref as any}
        className={`max-w-7xl mx-auto px-6 relative z-10 reveal ${reveal.className}`}
      >
        {/* SECTION 1: Overview & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-24">
          <div className="relative group overflow-hidden rounded-3xl h-full min-h-[380px] lg:min-h-auto border border-neutral-200/80 shadow-xl shadow-black/[0.03]">
             <div className="absolute inset-0 bg-neutral-900 rounded-3xl overflow-hidden relative h-full">
               <img 
                 src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1000" 
                 alt="Creative Expression"
                 className="w-full h-full object-cover filter grayscale contrast-125 opacity-40 group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
             </div>
             
             <div className="absolute top-10 left-10 right-10 z-10 text-white">
                <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3 block">Company Profile</span>
                <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight">
                  Wonderland <br />Studio
                </h3>
             </div>
          </div>

          <div className="flex flex-col justify-center bg-white p-8 md:p-12 rounded-3xl border border-neutral-200/80 shadow-xl shadow-black/[0.03]">
            <span className="text-black text-xs font-bold uppercase tracking-widest mb-3 block">Company Overview</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-black mb-6 leading-tight tracking-tight uppercase">
              Transforming ideas into compelling experiences.
            </h2>
            
            <div className="space-y-5 text-neutral-600 font-normal leading-relaxed text-base md:text-lg">
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
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-neutral-200/80 shadow-xl shadow-black/[0.03] hover:-translate-y-1 hover:border-neutral-400 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-black flex items-center justify-center mb-6 border border-neutral-200">
              <Target size={20} />
            </div>
            <h3 className="text-2xl font-black font-display text-black mb-3">Mission</h3>
            <p className="text-neutral-600 font-normal leading-relaxed text-base">
              To empower businesses through innovative digital solutions, strategic creativity, and advanced technology that enhance brand visibility, improve customer engagement, and drive sustainable growth.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-white border border-neutral-200/80 shadow-xl shadow-black/[0.03] hover:-translate-y-1 hover:border-neutral-400 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-black flex items-center justify-center mb-6 border border-neutral-200">
              <Eye size={20} />
            </div>
            <h3 className="text-2xl font-black font-display text-black mb-3">Vision</h3>
            <p className="text-neutral-600 font-normal leading-relaxed text-base">
              To become a leading creative and technology partner recognized for delivering transformative digital experiences, innovative systems, and impactful brand solutions across Africa and beyond.
            </p>
          </div>
        </div>

        {/* SECTION 3: Company Philosophy & Client Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-16 mb-24">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-neutral-200/80 shadow-xl shadow-black/[0.03]">
            <div className="flex items-center gap-2.5 text-black font-bold uppercase tracking-widest text-xs mb-4">
              <BookOpen size={16} />
              <span>Company Philosophy</span>
            </div>
            <div className="space-y-4 text-neutral-600 leading-relaxed font-normal text-base">
              <p>
                Wonderland Studio combines creativity, strategy, and technology to build meaningful digital experiences that create lasting impact. The company values innovation, collaboration, authenticity, and excellence in every project delivered.
              </p>
              <p>
                Their approach focuses on understanding each client’s goals, audience, and vision before developing customized solutions that align with long-term business growth.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-3xl bg-white border border-neutral-200/80 shadow-xl shadow-black/[0.03]">
            <div className="flex items-center gap-2.5 text-black font-bold uppercase tracking-widest text-xs mb-4">
              <ThumbsUp size={16} />
              <span>Client Approach</span>
            </div>
            <div className="space-y-4 text-neutral-600 leading-relaxed font-normal text-base">
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
            <span className="text-black text-xs font-bold uppercase tracking-widest mb-3 block">Proven Value</span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-black tracking-tight uppercase">
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
                className="group p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-md hover:border-black transition-all duration-300 flex flex-col justify-between"
              >
                <CheckCircle2 className="text-black mb-5 shrink-0" size={22} />
                <p className="text-sm tracking-wide text-neutral-800 font-medium leading-relaxed">
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

