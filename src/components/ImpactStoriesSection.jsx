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
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#faf9f5] via-white to-[#faf9f5] relative overflow-hidden">
      
      {/* Decorative ambient spots */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#ea580c] mb-3">
            <Heart className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>{lang === 'en' ? 'Voices of Dignity' : 'களப்பணியின் உண்மை சாட்சிகள்'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18144b] font-display">
            {lang === 'en' ? (
              <>Stories of Compassion, <span className="text-[#ea580c]">Preserved Dignity</span></>
            ) : (
              <>சுயமரியாதையோடு கூடிய <span className="text-[#ea580c]">மாற்றத்தின் சான்றுகள்</span></>
            )}
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? "Every initiative is rooted in direct brotherhood and respect. Here are real glimpses from our ground work across Tamil Nadu."
              : "புகைப்பட வெளிச்சங்களுக்காக அல்லாமல், உள்ளத்து அன்போடு களப்பணியாற்றிய தருணங்களின் உண்மைப் பதிவுகள்."}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" data-aos="fade-up" data-aos-delay="100">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#18144b] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
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
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === id
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{labels[id]}</span>
              </button>
            );
          })}
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story, idx) => {
            const Icon = wingIcons[story.wingId] || Sparkles;
            return (
              <div
                key={story.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-2xs hover-card-glow flex flex-col justify-between relative group"
              >
                {/* Top Wing tag & Location */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18144b] bg-slate-100 px-3 py-1 rounded-full">
                      <Icon className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>{story.wing}</span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      {story.metricBadge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug">
                    {lang === 'en' ? story.title : story.titleTamil}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                    <span>{story.location}</span>
                  </div>

                  {/* Quote with decorative icon */}
                  <div className="relative pt-2">
                    <Quote className="w-8 h-8 text-amber-200/60 absolute -top-1 -left-1 -z-0" />
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed relative z-10 pl-2">
                      "{lang === 'en' ? story.quote : story.quoteTamil}"
                    </p>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectWing(story.wingId)}
                    className="text-xs font-bold text-[#18144b] hover:text-[#ea580c] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Learn about this wing' : 'இப்பிரிவை பற்றி அறிய'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenSupportModal}
                    className="text-[11px] font-bold text-[#ea580c] hover:underline cursor-pointer"
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
