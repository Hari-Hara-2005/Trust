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
  ArrowRight,
  ArrowUpRight
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
    <section id="stories" className="py-20 sm:py-28 bg-[#f1f4ee] relative overflow-hidden border-b border-[#cdd5c9]/60 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Careunity Section Header */}
        <div className="max-w-3xl mb-12" data-aos="fade-up">
          <div className="pill-label-text mb-2">
            / VOICES FROM THE GROUND /
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172d25] font-display tracking-tight leading-tight">
            {lang === 'en' ? 'Real stories. Real change.' : 'சுயமரியாதையோடு கூடிய மாற்றத்தின் சான்றுகள்.'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#526158] leading-relaxed">
            {lang === 'en'
              ? "Every initiative is rooted in direct brotherhood and respect. Here are real glimpses from our ground work across Tamil Nadu."
              : "புகைப்பட வெளிச்சங்களுக்காக அல்லாமல், உள்ளத்து அன்போடு களப்பணியாற்றிய தருணங்களின் உண்மைப் பதிவுகள்."}
          </p>
        </div>

        {/* Filter Pills with Careunity Aesthetic */}
        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
              selectedFilter === 'all'
                ? 'bg-[#172d25] text-white border-[#172d25]'
                : 'bg-white text-[#172d25] border-[#cdd5c9] hover:bg-[#cdd5c9]/40'
            }`}
          >
            {lang === 'en' ? 'All Stories' : 'அனைத்து பிரிவுகள்'}
          </button>

          {['kalvi', 'pasumai', 'unavu', 'tugil', 'maruthuvam'].map(id => {
            const labels = {
              kalvi: 'Education',
              pasumai: 'Environment',
              unavu: 'Food Relief',
              tugil: 'Clothing & Dignity',
              maruthuvam: 'Healthcare'
            };
            const isSelected = selectedFilter === id;
            return (
              <button
                key={id}
                onClick={() => setSelectedFilter(id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#172d25] text-white border-[#172d25]'
                    : 'bg-white text-[#172d25] border-[#cdd5c9] hover:bg-[#cdd5c9]/40'
                }`}
              >
                <span>{labels[id]}</span>
              </button>
            );
          })}
        </div>

        {/* Stories Grid in Careunity Card Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story, idx) => {
            const Icon = wingIcons[story.wingId] || Sparkles;
            return (
              <div
                key={story.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="care-card p-7 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  {/* Top Tag & Metric Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172d25] bg-[#f1f4ee] border border-[#cdd5c9] px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-[#173f32]"></span>
                      <span>{story.wing}</span>
                    </span>
                    <span className="text-[11px] font-bold text-[#173f32] bg-[#f1f4ee] border border-[#cdd5c9] px-2.5 py-0.5 rounded-full">
                      {story.metricBadge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#172d25] group-hover:text-[#173f32] transition-colors leading-snug">
                    {lang === 'en' ? story.title : story.titleTamil}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-[#526158] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#173f32] shrink-0" />
                    <span>{story.location}</span>
                  </div>

                  {/* Quote */}
                  <div className="relative pt-1">
                    <p className="text-xs sm:text-sm text-[#526158] italic leading-relaxed">
                      "{lang === 'en' ? story.quote : story.quoteTamil}"
                    </p>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-[#cdd5c9]/60 flex items-center justify-between">
                  <button
                    onClick={() => onSelectWing(story.wingId)}
                    className="text-xs font-bold text-[#172d25] hover:text-[#173f32] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Learn about this wing' : 'இப்பிரிவை பற்றி அறிய'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenSupportModal}
                    className="text-xs font-bold text-[#173f32] hover:underline cursor-pointer"
                  >
                    {lang === 'en' ? 'Support' : 'ஆதரவளிக்க'}
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
