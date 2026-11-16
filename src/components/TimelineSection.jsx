import React from 'react';
import { History, Sparkles } from 'lucide-react';
import { trustTimeline } from '../data/trustData';

export default function TimelineSection({ lang }) {
  return (
    <section id="journey" className="py-20 sm:py-28 bg-[#faf9f5] relative overflow-hidden">
      
      {/* Decorative ambient spots */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header with AOS */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-orange-100 text-[#ea580c] mb-4">
            <History className="w-4 h-4" />
            <span>{lang === 'en' ? 'Our Milestones' : '15 ஆண்டுகால களப்பயணம்'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#18144b] font-display">
            {lang === 'en' ? (
              <>15 Years of <span className="text-[#ea580c]">Grassroots Compassion</span> in Tamil Nadu</>
            ) : (
              <>சென்னையில் தொடங்கிய <span className="text-[#ea580c]">15 ஆண்டுகால மக்கள் பணி</span></>
            )}
          </h2>

          <p className="mt-4 text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed">
            {lang === 'en'
              ? "From a weekend tuition circle in North Chennai to a multi-wing social welfare movement spanning five critical human and environmental areas."
              : "ஒரு சில இளைஞர்களின் வார இறுதி டியூஷன் மற்றும் உணவு வழங்கலில் தொடங்கி, இன்று 5 பிரதான களஞ்சியங்களாக விரிவடைந்த வரலாறு."}
          </p>
        </div>

        {/* Timeline Flow with AOS */}
        <div className="relative border-l-3 border-amber-300 ml-4 sm:ml-36 md:ml-44 space-y-14">
          {trustTimeline.map((item, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative pl-7 sm:pl-12 group"
            >
              
              {/* Year Badge on the left for medium+ screens */}
              <div className="hidden sm:flex absolute -left-40 md:-left-44 top-0 items-center justify-end w-32 md:w-36 pr-5">
                <span className="text-base sm:text-lg font-black text-[#18144b] bg-amber-100/90 border border-amber-300/80 px-4 py-1.5 rounded-2xl shadow-2xs font-display group-hover:scale-105 transition-transform">
                  {item.year}
                </span>
              </div>

              {/* Dot on the timeline line */}
              <div className="absolute -left-[10px] top-2 w-5 h-5 rounded-full bg-[#ea580c] border-3 border-white shadow-xs group-hover:scale-130 transition-transform"></div>

              {/* Content Card */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all group-hover:border-amber-300">
                <span className="sm:hidden inline-block text-xs sm:text-sm font-black text-[#ea580c] bg-amber-50 px-3.5 py-1 rounded-full mb-2.5 font-display">
                  {item.year}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#18144b] group-hover:text-[#ea580c] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
