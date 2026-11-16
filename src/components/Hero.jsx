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
  Users,
  ArrowUpRight
} from 'lucide-react';
import { trustInfo } from '../data/trustData';

export default function Hero({ 
  lang, 
  onOpenVolunteerModal, 
  onOpenSupportModal, 
  onSelectWing 
}) {
  const wingsQuick = [
    { id: 'kalvi', name: 'Kalvi', tamil: 'கல்வி', icon: GraduationCap },
    { id: 'pasumai', name: 'Pasumai', tamil: 'பசுமை', icon: Trees },
    { id: 'unavu', name: 'Unavu', tamil: 'உணவு', icon: UtensilsCrossed },
    { id: 'tugil', name: 'Tugil', tamil: 'துகில்', icon: Shirt },
    { id: 'maruthuvam', name: 'Maruthuvam', tamil: 'மருத்துவம்', icon: Stethoscope },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f1f4ee] pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#cdd5c9]/60">
      
      {/* Careunity Subtle Ambient Background */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#cdd5c9]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#ebc766]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Careunity Top Hero Section */}
        <div className="space-y-4 max-w-4xl" data-aos="fade-up">
          
          {/* Pill Label */}
          <div className="pill-label-text">
            / 100% VOLUNTEER-LED SOCIAL WELFARE TRUST • CHENNAI /
          </div>

          {/* Main Headline in Careunity Manrope */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#172d25] font-display leading-[1.12]">
              Stronger Communities. <span className="text-[#173f32]">Dignified Futures.</span>
            </h1>
            <div className="text-base sm:text-xl font-bold text-[#173f32] tamil-title">
              சேவை களஞ்சியம் • சமூக மாற்றத்திற்கான இளைஞர் களம்
            </div>
          </div>

          {/* Careunity Hero Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#cdd5c9] text-xs sm:text-sm text-[#172d25] font-medium shadow-xs">
            <div className="w-4 h-4 rounded-full bg-[#173f32] text-white flex items-center justify-center text-[10px]">
              ✓
            </div>
            <span>
              {lang === 'en'
                ? "Education, environment, food relief, clothing dignity & healthcare — together."
                : "கல்வி, பசுமை, பசிப்பிணி நீக்கம், ஆடை கண்ணியம் & நல்வாழ்வு — மக்கள் கரங்களால்."}
            </span>
          </div>

        </div>

        {/* Hero Bottom Split (Careunity 2-Column Structure) */}
        <div className="mt-10 lg:mt-12 grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative, Quote & CTAs */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-right" data-aos-delay="100">
            
            {/* Mission Statement in Davy Gray */}
            <p className="text-sm sm:text-base lg:text-lg text-[#526158] leading-relaxed">
              {lang === 'en' ? (
                <>
                  Founded in 2010 in Chennai, Tamil Nadu, by a collective of youth volunteers, 
                  <strong className="text-[#172d25] font-bold"> Sevai Kalanjiyam (சேவை களஞ்சியம்)</strong> turns 
                  community compassion into lasting change without administrative overhead. Drawing its identity from the Tamil word <em className="text-[#173f32] font-semibold not-italic">Kalanjiyam</em>—meaning a granary or treasury—we store and share resources with beneficiary dignity.
                </>
              ) : (
                <>
                  2010 ஆம் ஆண்டு சென்னையில் இளைஞர் தன்னார்வலர்களால் தொடங்கப்பட்ட 'சேவை களஞ்சியம்', 
                  எந்தவித நிர்வாகச் செலவும் இன்றி சமூகத்தின் கருணையை நிலையான மாற்றமாக மாற்றும் 100% தன்னார்வ தொண்டு அமைப்பாகும்.
                </>
              )}
            </p>

            {/* Foundational Principle Quote Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#cdd5c9] shadow-xs relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#173f32]"></div>
              <div className="pl-2">
                <span className="text-xs uppercase tracking-wider font-bold text-[#ebc766]">
                  {lang === 'en' ? 'Core Principle' : 'அடிப்படை கொள்கை'}
                </span>
                <p className="text-base sm:text-lg font-semibold text-[#172d25] italic mt-1 leading-snug">
                  “{lang === 'en'
                    ? "Feeding and supporting those in genuine need is a duty rather than charity."
                    : "உண்மையான தேவையில் இருப்பவர்களுக்கு உணவளிப்பதும் ஆதரவளிப்பதும் நமது தலையாய கடமை, வெறும் தானம் அல்ல."}”
                </p>
                <p className="text-xs text-[#526158] mt-1.5 font-medium">
                  — {lang === 'en' ? 'Duty, Not Charity (கடமை, தானம் அல்ல)' : 'கடமை, தானம் அல்ல'}
                </p>
              </div>
            </div>

            {/* Careunity Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={onOpenVolunteerModal}
                className="btn-care-primary group"
              >
                <span>{lang === 'en' ? 'Join as Youth Volunteer' : 'தன்னார்வலராக இணையுங்கள்'}</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#ebc766] group-hover:text-[#172d25] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>

              <button
                onClick={onOpenSupportModal}
                className="btn-care-secondary"
              >
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>{lang === 'en' ? 'Support Our Wings' : 'களப்பணிக்கு உதவ'}</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs sm:text-sm text-[#526158] font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#173f32]" />
                100% Direct to Cause
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#173f32]" />
                0% Admin Salaries
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#173f32]" />
                Public Audit Trails
              </span>
            </div>

          </div>

          {/* Right Column: Careunity Visual Showcase Card */}
          <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-[#cdd5c9] shadow-md relative overflow-hidden">
              
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-5 border-b border-[#cdd5c9]/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#173f32]"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#172d25]">
                    Active Grassroots Operations
                  </span>
                </div>
                <span className="text-xs font-extrabold text-[#172d25] bg-[#f1f4ee] border border-[#cdd5c9] px-3 py-1 rounded-full">
                  15+ Years Active
                </span>
              </div>

              {/* Center Logo Showcase with Careunity Earthy Frame */}
              <div className="my-6 flex flex-col items-center text-center">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-2 bg-[#f1f4ee] border border-[#cdd5c9] shadow-inner flex items-center justify-center mb-4">
                  <div className="w-full h-full rounded-full bg-white p-2 shadow-xs flex items-center justify-center">
                    <img 
                      src="/sevai-logo.png" 
                      alt="Sevai Kalanjiyam Emblem" 
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#172d25] font-display">
                  Sevai Kalanjiyam (சேவை களஞ்சியம்)
                </h3>
                <p className="text-xs text-[#526158] mt-1">
                  100% Volunteer-Led Non-Profit Organization • Chennai, Tamil Nadu
                </p>
              </div>

              {/* Quick 5 Wings Filter Grid inside Card */}
              <div className="space-y-2 pt-4 border-t border-[#cdd5c9]/60">
                <div className="flex items-center justify-between text-xs font-bold text-[#526158]">
                  <span>Explore Our 5 Wings</span>
                  <span className="text-[#173f32]">Click to jump ↓</span>
                </div>
                
                <div className="grid grid-cols-5 gap-1.5">
                  {wingsQuick.map((wing) => {
                    const Icon = wing.icon;
                    return (
                      <button
                        key={wing.id}
                        onClick={() => onSelectWing(wing.id)}
                        className="flex flex-col items-center p-2 rounded-xl bg-[#f1f4ee] hover:bg-[#172d25] hover:text-white border border-[#cdd5c9] transition-all cursor-pointer group"
                        title={wing.name}
                      >
                        <Icon className="w-4 h-4 text-[#172d25] group-hover:text-[#ebc766] transition-colors mb-1" />
                        <span className="text-[10px] font-bold tracking-tight">
                          {wing.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Metric Meter */}
              <div className="mt-5 p-3.5 bg-[#f1f4ee] rounded-2xl border border-[#cdd5c9] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#526158] uppercase block">Total Meals Served</span>
                  <span className="text-base font-extrabold text-[#172d25] font-display">25,000+ Meals</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-[#526158] uppercase block">Native Trees Sustained</span>
                  <span className="text-base font-extrabold text-[#173f32] font-display">3,800+ Trees</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
