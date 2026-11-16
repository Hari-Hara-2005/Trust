import React from 'react';
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  Trees, 
  UtensilsCrossed, 
  Shirt, 
  Stethoscope,
  MapPin,
  Calendar,
  CheckCircle2,
  Users
} from 'lucide-react';
import { trustInfo } from '../data/trustData';

export default function Hero({ 
  lang, 
  onOpenVolunteerModal, 
  onOpenSupportModal, 
  onSelectWing 
}) {
  const wingsQuick = [
    { id: 'kalvi', name: 'Kalvi', tamil: 'கல்வி', icon: GraduationCap, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { id: 'pasumai', name: 'Pasumai', tamil: 'பசுமை', icon: Trees, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { id: 'unavu', name: 'Unavu', tamil: 'உணவு', icon: UtensilsCrossed, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { id: 'tugil', name: 'Tugil', tamil: 'துகில்', icon: Shirt, color: 'text-pink-600 bg-pink-50 border-pink-200' },
    { id: 'maruthuvam', name: 'Maruthuvam', tamil: 'மருத்துவம்', icon: Stethoscope, color: 'text-teal-600 bg-teal-50 border-teal-200' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#141042] via-[#211663] to-[#141042] text-white pt-10 pb-20 lg:pt-14 lg:pb-28">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-25">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#ea580c] blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-64 -left-32 w-96 h-96 rounded-full bg-[#d91b5c] blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-24 w-80 h-80 rounded-full bg-[#059669] blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges with AOS */}
        <div 
          data-aos="fade-down"
          data-aos-duration="600"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Chennai, Tamil Nadu</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-200 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'en' ? 'Grassroots Action Since 2010' : '2010 முதல் சமூகப் பணி'}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'en' ? '0% Admin Overhead • 100% Volunteer-Led' : 'பூஜ்ஜிய நிர்வாகச் செலவு • 100% தன்னார்வம்'}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column with AOS */}
          <div 
            className="lg:col-span-7 text-center lg:text-left space-y-6"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            
            {/* Tamil & English Heading */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#ea580c] tamil-title drop-shadow-sm">
                <span>சேவை களஞ்சியம் சமூக நல அறக்கட்டளை</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="text-xs uppercase tracking-wider text-slate-300 font-sans font-semibold">Regd Trust</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-display">
                Turning Community Compassion Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400">Lasting Change</span>
              </h1>
            </div>

            {/* Foundational Principle Quote with ambient glow */}
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-slate-200 relative overflow-hidden shadow-inner group hover:border-amber-400/40 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>
              
              <div className="flex items-start gap-3 relative z-10">
                <span className="text-3xl sm:text-4xl text-amber-400 font-serif leading-none select-none">“</span>
                <div>
                  <p className="text-base sm:text-lg lg:text-xl font-medium italic text-amber-100 leading-relaxed">
                    {lang === 'en'
                      ? "Feeding and supporting those in genuine need is a duty rather than charity."
                      : "உண்மையான தேவையில் இருப்பவர்களுக்கு உணவளிப்பதும் ஆதரவளிப்பதும் நமது தலையாய கடமை, வெறும் தானம் அல்ல."}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-semibold">
                    — {lang === 'en' ? 'The Foundational Principle of Sevai Kalanjiyam' : 'சேவை களஞ்சியத்தின் அடிப்படைக் கொள்கை'}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Narrative */}
            <p className="text-sm sm:text-base lg:text-[17px] text-slate-300 leading-relaxed max-w-2xl font-normal">
              {lang === 'en' ? (
                <>
                  Drawing its identity from the Tamil word <em className="text-amber-300 font-semibold not-italic">Kalanjiyam</em>—meaning a granary or treasury—we operate through 5 specialized wings dedicated to education, green earth, hunger relief, dignity in clothing, and grassroots healthcare.
                </>
              ) : (
                <>
                  களஞ்சியம் என்ற தமிழ் சொல்லிற்கு ஏற்ப, மக்களின் அடிப்படைத் தேவைகளான கல்வி, சுற்றுச்சூழல், பசிப்பிணி நீக்கம், ஆடை கண்ணியம் மற்றும் நல்வாழ்வு ஆகியவற்றை உறுதி செய்ய 5 அர்ப்பணிப்புமிக்க களஞ்சியப் பிரிவுகளாக செயலாற்றுகிறோம்.
                </>
              )}
            </p>

            {/* Action Buttons */}
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1"
            >
              <button
                onClick={onOpenVolunteerModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#ea580c] to-[#d91b5c] hover:from-[#c2410c] hover:to-[#be123c] shadow-lg shadow-orange-950/40 hover:shadow-orange-900/60 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>{lang === 'en' ? 'Join as Youth Volunteer' : 'தன்னார்வலராக இணையுங்கள்'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSupportModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-100 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                <span>{lang === 'en' ? 'Support Our Wings' : 'களப்பணிக்கு உதவ'}</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Direct to Cause
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Beneficiary Dignity First
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Geo-Tagged Verification
              </span>
            </div>

          </div>

          {/* Right Logo & 5 Wings Quick Hub with AOS */}
          <div 
            className="lg:col-span-5 flex flex-col items-center"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            
            {/* Center Logo Showcase with Floating Badges */}
            <div className="relative w-70 h-70 sm:w-80 sm:h-80 flex items-center justify-center mb-6">
              
              {/* Outer rotating dashed ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/30 animate-[spin_45s_linear_infinite]"></div>
              <div className="absolute inset-3 rounded-full border border-indigo-400/20"></div>
              
              {/* Glow backdrop */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#ea580c] via-[#d91b5c] to-[#18144b] opacity-40 blur-2xl"></div>
              
              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-1 -left-2 z-20 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold text-amber-200 shadow-md animate-float-slow">
                🌾 Granary of Service
              </div>

              {/* Floating Badge 2 - Top Right */}
              <div className="absolute top-2 -right-4 z-20 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold text-emerald-200 shadow-md animate-float-reverse">
                🌱 2-Yr Tree Care
              </div>

              {/* Floating Badge 3 - Bottom Left */}
              <div className="absolute bottom-6 -left-6 z-20 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-bold text-rose-200 shadow-md animate-float-reverse">
                🍲 Surplus Food Rescue
              </div>

              {/* White Circular Badge holding the Trust Logo */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-white p-3.5 shadow-2xl flex items-center justify-center border-4 border-white/95 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/sevai-logo.png" 
                  alt="Sevai Kalanjiyam Crest Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              {/* Bottom Badge */}
              <div className="absolute -bottom-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-amber-300/40 z-20">
                100% Volunteer Led
              </div>
            </div>

            {/* Quick Interactive Selector for the 5 Wings */}
            <div 
              data-aos="zoom-in"
              data-aos-delay="200"
              className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 shadow-xl"
            >
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2.5 text-center flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{lang === 'en' ? 'Our 5 Dedicated Wings (களஞ்சியங்கள்)' : 'எங்கள் 5 சேவை களஞ்சியங்கள்'}</span>
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                {wingsQuick.map((wing) => {
                  const Icon = wing.icon;
                  return (
                    <button
                      key={wing.id}
                      onClick={() => onSelectWing(wing.id)}
                      className="flex flex-col items-center p-2 rounded-xl bg-white/5 hover:bg-white/20 border border-white/10 transition-all cursor-pointer group hover:scale-105"
                      title={wing.name}
                    >
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white text-white group-hover:text-[#18144b] transition-colors mb-1">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        {wing.name}
                      </span>
                      <span className="text-[10px] text-slate-300 font-medium">
                        {wing.tamil}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-center text-slate-300 mt-2.5 font-medium">
                {lang === 'en' ? 'Click any wing above to explore initiatives & metrics' : 'விவரங்களை அறிய மேலே உள்ள களஞ்சியத்தை அழுத்தவும்'}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-[#faf9f5] [clip-path:ellipse(65%_100%_at_50%_100%)]"></div>
    </div>
  );
}
