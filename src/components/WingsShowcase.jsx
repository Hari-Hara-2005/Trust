import React from 'react';
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
  ShieldCheck,
  MapPin,
  Calendar
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
    <section id="wings" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative ambient glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header with AOS */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#ea580c] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Pillars of Social Upliftment' : '5 அர்ப்பணிப்புமிக்க களஞ்சியங்கள்'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18144b] font-display">
            {lang === 'en' ? (
              <>The Specialized Wings of <span className="text-[#ea580c]">Sevai Kalanjiyam</span></>
            ) : (
              <>மக்கள் நலம் காக்கும் <span className="text-[#ea580c]">5 சேவைப் பிரிவுகள்</span></>
            )}
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? "Each specialized wing addresses a fundamental human or ecological need with laser focus, long-term commitment, and 100% volunteer energy."
              : "ஒவ்வொரு களஞ்சியமும் மக்களின் அடிப்படைத் தேவைகளான கல்வி, சுற்றுச்சூழல், உணவு, ஆடை மற்றும் மருத்துவத்தை தன்னிறைவு செய்ய தீவிரமாக உழைக்கிறது."}
          </p>
        </div>

        {/* Tab Selector Buttons with AOS */}
        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 sm:gap-3 scrollbar-none"
        >
          {wingsData.map((wing) => {
            const Icon = iconMap[wing.id];
            const isActive = wing.id === currentWing.id;

            return (
              <button
                key={wing.id}
                onClick={() => setActiveWingId(wing.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#141042] text-white shadow-xl border-[#141042] scale-102 ring-2 ring-orange-500/50'
                    : 'bg-white text-slate-700 hover:text-[#18144b] hover:bg-slate-100 border-slate-200 shadow-2xs'
                }`}
              >
                <div className={`p-1.5 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#ea580c]'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="leading-tight font-display">{wing.name}</div>
                  <div className={`text-[10px] font-normal ${isActive ? 'text-amber-300 font-semibold' : 'text-slate-400'}`}>
                    {wing.nameTamil}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Wing Detailed Showcase Box with AOS */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden transition-all duration-300"
        >
          
          {/* Header Banner */}
          <div className={`p-6 sm:p-8 md:p-10 bg-gradient-to-r ${currentWing.headerBg} text-white relative overflow-hidden`}>
            
            {/* Background ambient shine */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/15 backdrop-blur-md p-3.5 flex items-center justify-center border border-white/20 shadow-inner shrink-0">
                  <CurrentIcon className="w-9 h-9 sm:w-11 sm:h-11 text-white animate-pulse-slow" />
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs uppercase font-extrabold tracking-wider bg-white/20 px-3 py-0.5 rounded-full backdrop-blur-xs">
                      {lang === 'en' ? currentWing.title : currentWing.titleTamil}
                    </span>
                    <span className="text-xs font-bold bg-amber-400 text-slate-950 px-3 py-0.5 rounded-full shadow-xs">
                      {currentWing.statBadge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display">
                    {currentWing.name} <span className="text-amber-300 font-semibold text-xl sm:text-2xl tamil-title">({currentWing.nameTamil})</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-indigo-100 italic">
                    "{lang === 'en' ? currentWing.motto : currentWing.mottoTamil}"
                  </p>
                </div>
              </div>

              {/* Action Buttons in Banner */}
              <div className="flex flex-wrap sm:flex-nowrap gap-2.5 shrink-0">
                <button
                  onClick={() => handleWingAction(currentWing.id)}
                  className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white text-slate-900 hover:bg-slate-100 shadow-md transition-all cursor-pointer flex items-center gap-2 transform hover:scale-102"
                >
                  <Heart className="w-4 h-4 text-[#ea580c] fill-[#ea580c]" />
                  <span>
                    {currentWing.id === 'unavu' ? (lang === 'en' ? 'Rescue Food' : 'உணவு மீட்பு') :
                     currentWing.id === 'maruthuvam' ? (lang === 'en' ? 'Blood Helpline' : 'குருதிக்கொடை') :
                     (lang === 'en' ? 'Support This Wing' : 'ஆதரவளிக்க')}
                  </span>
                </button>

                <button
                  onClick={onOpenVolunteerModal}
                  className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white/15 hover:bg-white/25 border border-white/20 text-white transition-all cursor-pointer flex items-center gap-2 transform hover:scale-102"
                >
                  <span>{lang === 'en' ? 'Volunteer Here' : 'இணைந்து பணியாற்ற'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Wing Content Body */}
          <div className="p-6 sm:p-8 md:p-10 space-y-8">
            
            {/* Description Paragraph */}
            <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed bg-[#faf9f5] p-5 sm:p-7 rounded-3xl border border-amber-200/60 shadow-2xs">
              <p className="font-medium text-slate-800">
                {lang === 'en' ? currentWing.description : currentWing.descriptionTamil}
              </p>
            </div>

            {/* Initiatives Grid */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-lg sm:text-xl font-bold text-[#18144b] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c]"></span>
                  {lang === 'en' ? 'Core Initiatives & Field Operations' : 'முக்கிய களப்பணி திட்டங்கள்'}
                </h4>
                <span className="text-xs text-slate-600 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                  {lang === 'en' ? '100% Ground Verified' : 'நேரடி மக்கள் திட்டம்'}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {currentWing.initiatives.map((init, i) => (
                  <div 
                    key={i}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all space-y-2.5 relative group hover:border-amber-300"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h5 className="font-bold text-sm sm:text-base text-[#18144b] group-hover:text-[#ea580c] transition-colors">
                        {init.title}
                      </h5>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg shrink-0 border border-emerald-200/60">
                        {init.highlight}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {init.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Highlights Bar */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  {lang === 'en' ? 'Key Field Accomplishments:' : 'களப்பணி சாதனைகள்:'}
                </span>
                <ul className="flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-slate-700 font-medium">
                  {currentWing.impactHighlights.map((hi, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{hi}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0 flex items-center gap-2.5">
                {currentWing.id === 'unavu' && (
                  <button
                    onClick={onOpenFoodModal}
                    className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Alert Surplus Food Pickup' : 'உபரி உணவு தகவல் தெரிவிக்க'}</span>
                  </button>
                )}
                {currentWing.id === 'maruthuvam' && (
                  <button
                    onClick={onOpenBloodModal}
                    className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Droplet className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Request Emergency Blood' : 'அவசர ரத்ததான உதவி'}</span>
                  </button>
                )}
                <button
                  onClick={onOpenSupportModal}
                  className="px-5 py-2.5 bg-[#141042] hover:bg-[#20195e] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Contribute to this Wing' : 'இப்பிரிவுக்கு ஆதரவளிக்க'}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
