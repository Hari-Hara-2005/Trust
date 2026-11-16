import React from 'react';
import { History, Calendar, CheckCircle2 } from 'lucide-react';
import { trustTimeline } from '../data/trustData';

export default function TimelineSection({ lang }) {
  return (
    <section id="journey" className="py-20 sm:py-28 bg-[#f1f4ee] relative overflow-hidden border-t border-[#cdd5c9]/60">
      
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ebc766]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#173f32]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Careunity Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="pill-label-text mb-3">
            / {lang === 'en' ? 'OUR 15-YEAR MILESTONES' : '15 ஆண்டுகால களப்பயணம்'} /
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172d25] font-display tracking-tight leading-tight">
            {lang === 'en' ? (
              <>A decade and a half of <span className="text-[#173f32] underline decoration-[#ebc766] decoration-4 underline-offset-6">grassroots action</span>.</>
            ) : (
              <>சென்னையில் தொடங்கிய <span className="text-[#173f32] underline decoration-[#ebc766] decoration-4 underline-offset-6">15 ஆண்டுகால மக்கள் பணி</span></>
            )}
          </h2>

          <p className="mt-4 text-[#526158] text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? "From a humble weekend tuition and meal circle in North Chennai to a multi-wing social welfare movement spanning education, trees, food relief, clothing, and community healthcare."
              : "ஒரு சில இளைஞர்களின் வார இறுதி டியூஷன் மற்றும் உணவு வழங்கலில் தொடங்கி, இன்று 5 பிரதான களஞ்சியங்களாக விரிவடைந்த தன்னார்வ வரலாறு."}
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l-2 border-[#cdd5c9] ml-4 sm:ml-32 md:ml-40 space-y-12">
          {trustTimeline.map((item, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 90}
              className="relative pl-6 sm:pl-10 group"
            >
              
              {/* Year Badge on the left for medium+ screens */}
              <div className="hidden sm:flex absolute -left-36 md:-left-40 top-1 items-center justify-end w-28 md:w-32 pr-4">
                <span className="text-xs font-black text-[#172d25] bg-[#ebc766] border border-[#d8b555] px-3.5 py-1 rounded-full shadow-2xs font-display tracking-wider group-hover:scale-105 transition-transform">
                  {item.year}
                </span>
              </div>

              {/* Dot on the timeline line */}
              <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-[#172d25] border-2 border-[#ebc766] shadow-xs group-hover:scale-125 group-hover:bg-[#173f32] transition-transform"></div>

              {/* Content Card (Careunity Style) */}
              <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-[#cdd5c9] shadow-xs hover:shadow-md transition-all group-hover:border-[#172d25]">
                
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="sm:hidden inline-block text-[11px] font-black text-[#172d25] bg-[#ebc766] px-3 py-0.5 rounded-full font-display">
                    {item.year}
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#526158]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#173f32]" />
                    <span>Verified Milestone</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#172d25] font-display group-hover:text-[#173f32] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[#526158] leading-relaxed">
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
