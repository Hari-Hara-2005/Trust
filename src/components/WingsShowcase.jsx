import React, { useState } from 'react';
import { 
  GraduationCap, 
  Trees, 
  UtensilsCrossed, 
  Shirt, 
  Stethoscope,
  CheckCircle,
  Heart,
  Droplet,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { wingsData } from '../data/trustData';

export default function WingsShowcase({ 
  lang, 
  activeWingId, 
  setActiveWingId,
  onOpenFoodModal,
  onOpenBloodModal,
  onOpenSupportModal,
  onOpenVolunteerModal
}) {
  const iconMap = {
    kalvi: GraduationCap,
    pasumai: Trees,
    unavu: UtensilsCrossed,
    tugil: Shirt,
    maruthuvam: Stethoscope,
  };

  const wingCategories = {
    kalvi: 'Education',
    pasumai: 'Environment',
    unavu: 'Food Relief',
    tugil: 'Clothing & Dignity',
    maruthuvam: 'Community Health'
  };

  const currentWing = wingsData.find(w => w.id === activeWingId) || wingsData[0];
  const CurrentIcon = iconMap[currentWing.id] || Sparkles;

  const handleWingAction = (wingId) => {
    if (wingId === 'unavu') {
      onOpenFoodModal();
    } else if (wingId === 'maruthuvam') {
      onOpenBloodModal();
    } else {
      onOpenSupportModal();
    }
  };

  return (
    <section id="wings" className="py-20 sm:py-28 bg-[#f1f4ee] relative overflow-hidden border-b border-[#cdd5c9]/60 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Careunity Section Header */}
        <div className="max-w-3xl mb-12" data-aos="fade-up">
          <div className="pill-label-text mb-2">
            / SPECIALIZED WINGS /
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172d25] font-display tracking-tight leading-tight">
            {lang === 'en' ? 'Choose a cause that matters to you.' : 'உங்களுக்கு விருப்பமான சேவையைத் தேர்ந்தெடுங்கள்.'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#526158] leading-relaxed">
            {lang === 'en'
              ? "Each specialized wing addresses a fundamental human or ecological need with laser focus, long-term commitment, and 100% volunteer energy without administrative leakages."
              : "ஒவ்வொரு களஞ்சியமும் மக்களின் அடிப்படைத் தேவைகளான கல்வி, சுற்றுச்சூழல், உணவு, ஆடை மற்றும் மருத்துவத்தை தன்னிறைவு செய்ய தீவிரமாக உழைக்கிறது."}
          </p>
        </div>

        {/* Tab Filter Selector in Careunity Pill Style */}
        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex items-center justify-start overflow-x-auto pb-4 mb-10 gap-2 sm:gap-2.5 scrollbar-none"
        >
          {wingsData.map((wing) => {
            const Icon = iconMap[wing.id];
            const isActive = wing.id === currentWing.id;

            return (
              <button
                key={wing.id}
                onClick={() => setActiveWingId(wing.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#172d25] text-white border-[#172d25] shadow-xs'
                    : 'bg-white text-[#172d25] hover:bg-[#cdd5c9]/40 border-[#cdd5c9]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#ebc766]' : 'text-[#526158]'}`} />
                <span>{wing.name}</span>
                <span className={`text-[10px] ${isActive ? 'text-[#ebc766]' : 'text-[#526158]'}`}>
                  ({wing.nameTamil})
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Wing Spotlight Hero Card in Careunity Style */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-[32px] border border-[#cdd5c9] p-6 sm:p-10 shadow-sm transition-all mb-12"
        >
          {/* Card Top Pill & Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#cdd5c9]/60">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f1f4ee] border border-[#cdd5c9] text-[#172d25] uppercase tracking-wider">
                {wingCategories[currentWing.id]}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#173f32] text-[#ebc766]">
                {currentWing.statBadge}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#526158]">
              <span className="w-2 h-2 rounded-full bg-[#173f32] animate-pulse"></span>
              <span>100% Volunteer Driven</span>
            </div>
          </div>

          {/* Wing Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 my-8 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#f1f4ee] border border-[#cdd5c9] flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-6 h-6 text-[#172d25]" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172d25] font-display">
                    {currentWing.name} <span className="text-[#173f32] tamil-title text-xl sm:text-2xl">({currentWing.nameTamil})</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526158] italic font-medium mt-1.5">
                    "{lang === 'en' ? currentWing.motto : currentWing.mottoTamil}"
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#526158] leading-[1.75] pt-2">
                {lang === 'en' ? currentWing.description : currentWing.descriptionTamil}
              </p>

              {/* Progress bar in Careunity style */}
              <div className="p-4 bg-[#f1f4ee] rounded-2xl border border-[#cdd5c9] space-y-2 mt-4">
                <div className="flex justify-between text-xs font-bold text-[#172d25]">
                  <span>Field Milestone: {currentWing.statBadge}</span>
                  <span className="text-[#173f32]">Direct Grassroots Impact</span>
                </div>
                <div className="w-full bg-white h-3 rounded-full overflow-hidden border border-[#cdd5c9]">
                  <div className="bg-gradient-to-r from-[#173f32] to-[#ebc766] h-full w-[85%] rounded-full"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => handleWingAction(currentWing.id)}
                  className="btn-care-primary group"
                >
                  <Heart className="w-4 h-4 text-[#ebc766] fill-[#ebc766]" />
                  <span>
                    {currentWing.id === 'unavu' ? (lang === 'en' ? 'Rescue Food' : 'உணவு மீட்பு') :
                     currentWing.id === 'maruthuvam' ? (lang === 'en' ? 'Blood Helpline' : 'குருதிக்கொடை') :
                     (lang === 'en' ? 'Support This Wing' : 'ஆதரவளிக்க')}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </button>

                <button
                  onClick={onOpenVolunteerModal}
                  className="btn-care-secondary"
                >
                  <span>{lang === 'en' ? 'Volunteer with this Wing' : 'இணைந்து பணியாற்ற'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: 4 Key Initiatives Cards */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#526158] block">
                {lang === 'en' ? 'Core Initiatives on the Ground:' : 'முக்கிய களப்பணிகள்:'}
              </span>

              <div className="grid gap-3">
                {currentWing.initiatives.map((init, i) => (
                  <div 
                    key={i}
                    className="p-4 rounded-2xl bg-[#f1f4ee] border border-[#cdd5c9] hover:border-[#172d25] transition-all space-y-1.5 group"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="font-extrabold text-sm text-[#172d25] group-hover:text-[#173f32] transition-colors leading-snug">
                        {init.title}
                      </h5>
                      <span className="text-[10px] font-bold text-[#172d25] bg-white border border-[#cdd5c9] px-2 py-0.5 rounded-full shrink-0">
                        {init.highlight}
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#526158] leading-relaxed">
                      {init.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Accomplishments Footer */}
          <div className="pt-6 border-t border-[#cdd5c9]/60 flex flex-wrap items-center justify-between gap-4 text-xs text-[#526158]">
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
              {currentWing.impactHighlights.map((hi, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#173f32] stroke-[3]" />
                  <span>{hi}</span>
                </span>
              ))}
            </div>
            
            <button
              onClick={onOpenSupportModal}
              className="text-xs font-bold text-[#172d25] hover:text-[#173f32] underline cursor-pointer"
            >
              {lang === 'en' ? 'Sponsor supplies for this wing →' : 'தேவையான பொருட்களை வழங்க →'}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
