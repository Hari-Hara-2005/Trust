import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  Trees, 
  UtensilsCrossed, 
  Shirt, 
  Stethoscope,
  ArrowRight
} from 'lucide-react';
import { impactStories } from '../data/trustData';

export default function ImpactStoriesSection({ lang, onSelectWing, onOpenSupportModal }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const wingIcons = {
    kalvi: GraduationCap,
    pasumai: Trees,
    unavu: UtensilsCrossed,
    tugil: Shirt,
    maruthuvam: Stethoscope,
  };

  const filteredStories = selectedFilter === 'all'
    ? impactStories
    : impactStories.filter(s => s.wingId === selectedFilter);

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#faf9f5] via-white to-[#faf9f5] relative overflow-hidden">
      
      {/* Decorative ambient spots */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header with AOS */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-orange-100 text-[#ea580c] mb-4">
            <Heart className="w-4 h-4 text-[#ea580c]" />
            <span>{lang === 'en' ? 'Voices of Dignity' : 'களப்பணியின் உண்மை சாட்சிகள்'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#18144b] font-display">
            {lang === 'en' ? (
              <>Stories of Compassion, <span className="text-[#ea580c]">Preserved Dignity</span></>
            ) : (
              <>சுயமரியாதையோடு கூடிய <span className="text-[#ea580c]">மாற்றத்தின் சான்றுகள்</span></>
            )}
          </h2>

          <p className="mt-4 text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed">
            {lang === 'en'
              ? "Every initiative is rooted in direct brotherhood and respect. Here are real glimpses from our ground work across Tamil Nadu."
              : "புகைப்பட வெளிச்சங்களுக்காக அல்லாமல், உள்ளத்து அன்போடு களப்பணியாற்றிய தருணங்களின் உண்மைப் பதிவுகள்."}
          </p>
        </div>

        {/* Filter Pills with AOS */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12" data-aos="fade-up" data-aos-delay="100">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#141042] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {lang === 'en' ? 'All Wings' : 'அனைத்து பிரிவுகள்'}
          </button>

          {['kalvi', 'pasumai', 'unavu', 'tugil', 'maruthuvam'].map(id => {
            const Icon = wingIcons[id];
            const labels = {
              kalvi: 'Kalvi (Education)',
              pasumai: 'Pasumai (Green)',
              unavu: 'Unavu (Food)',
              tugil: 'Tugil (Clothing)',
              maruthuvam: 'Maruthuvam (Health)'
            };
            return (
              <button
                key={id}
                onClick={() => setSelectedFilter(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedFilter === id
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{labels[id]}</span>
              </button>
            );
          })}
        </div>

        {/* Stories Grid with AOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredStories.map((story, idx) => {
            const Icon = wingIcons[story.wingId] || Sparkles;
            return (
              <div
                key={story.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-2xs hover-card-glow flex flex-col justify-between relative group"
              >
                {/* Top Wing tag & Location */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#18144b] bg-slate-100 px-3.5 py-1 rounded-full">
                      <Icon className="w-4 h-4 text-[#ea580c]" />
                      <span>{story.wing}</span>
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      {story.metricBadge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug">
                    {lang === 'en' ? story.title : story.titleTamil}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-semibold">
                    <MapPin className="w-4 h-4 text-[#ea580c] shrink-0" />
                    <span>{story.location}</span>
                  </div>

                  {/* Quote with decorative icon */}
                  <div className="relative pt-3">
                    <Quote className="w-10 h-10 text-amber-200/60 absolute -top-1 -left-1 -z-0" />
                    <p className="text-sm sm:text-base lg:text-lg text-slate-700 italic leading-relaxed relative z-10 pl-3">
                      "{lang === 'en' ? story.quote : story.quoteTamil}"
                    </p>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectWing(story.wingId)}
                    className="text-xs sm:text-sm font-bold text-[#18144b] hover:text-[#ea580c] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Learn about this wing' : 'இப்பிரிவை பற்றி அறிய'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenSupportModal}
                    className="text-xs sm:text-sm font-bold text-[#ea580c] hover:underline cursor-pointer"
                  >
                    {lang === 'en' ? 'Support Cause' : 'ஆதரவளிக்க'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
