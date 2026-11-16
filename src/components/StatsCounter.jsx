import React from 'react';
import { 
  GraduationCap, 
  Trees, 
  UtensilsCrossed, 
  Shirt, 
  Stethoscope, 
  Clock, 
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { trustInfo } from '../data/trustData';

export default function StatsCounter({ lang, onSelectWing }) {
  const iconMap = {
    students: GraduationCap,
    trees: Trees,
    meals: UtensilsCrossed,
    wardrobes: Shirt,
    health: Stethoscope,
    years: Clock,
  };

  const wingIdMap = {
    students: 'kalvi',
    trees: 'pasumai',
    meals: 'unavu',
    wardrobes: 'tugil',
    health: 'maruthuvam',
    years: null
  };

  return (
    <section id="impact" className="py-20 sm:py-28 bg-[#f1f4ee] relative border-b border-[#cdd5c9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Careunity Section Header */}
        <div className="max-w-3xl mb-14" data-aos="fade-up">
          <div className="pill-label-text mb-2">
            / VERIFIED FIELD IMPACT /
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172d25] font-display tracking-tight leading-tight">
            {lang === 'en' ? 'A decade of help, measured honestly.' : 'சொற்களைத் தாண்டிய உண்மையான களப்பணி.'}
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-[#526158] leading-relaxed">
            {lang === 'en'
              ? "Every metric represents real lives touched, saplings nurtured through summers, and warm meals delivered without administrative leakages."
              : "ஒவ்வொரு எண்ணிக்கையும் ஒரு மாணவனின் புன்னகை, இரண்டு ஆண்டுகள் வளர்த்தெடுக்கப்பட்ட மரங்கள் மற்றும் கண்ணியத்துடன் வழங்கப்பட்ட உணவின் சாட்சி."}
          </p>
        </div>

        {/* Stats Grid with Careunity Card Aesthetics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustInfo.stats.map((stat, idx) => {
            const Icon = iconMap[stat.id] || Award;
            const wingKey = wingIdMap[stat.id];

            return (
              <div
                key={stat.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                onClick={() => wingKey && onSelectWing(wingKey)}
                className={`care-card p-7 sm:p-8 flex flex-col justify-between group ${
                  wingKey ? 'cursor-pointer' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#f1f4ee] border border-[#cdd5c9] flex items-center justify-center group-hover:bg-[#172d25] transition-colors">
                      <Icon className="w-6 h-6 text-[#172d25] group-hover:text-[#ebc766] transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-[#526158] bg-[#f1f4ee] border border-[#cdd5c9] px-3 py-1 rounded-full">
                      {stat.wing}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-4xl sm:text-5xl font-black text-[#172d25] tracking-tight font-display">
                      {stat.number}
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-extrabold text-[#172d25] group-hover:text-[#173f32] transition-colors">
                      {lang === 'en' ? stat.label : stat.labelTamil}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#526158] leading-relaxed">
                      {stat.sub}
                    </p>
                  </div>
                </div>

                {wingKey && (
                  <div className="mt-6 pt-4 border-t border-[#cdd5c9]/60 flex items-center justify-between text-xs font-bold text-[#172d25] group-hover:text-[#173f32]">
                    <span>{lang === 'en' ? 'Explore Wing' : 'விவரங்களை அறிய'}</span>
                    <div className="w-5 h-5 rounded-full bg-[#f1f4ee] flex items-center justify-center group-hover:bg-[#172d25] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Micro Banner Under Stats with Careunity Dark Timber Green Styling */}
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-12 p-7 sm:p-8 rounded-[28px] bg-[#172d25] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#ebc766]/20 border border-[#ebc766]/30 flex items-center justify-center shrink-0">
              <span className="text-2xl font-black text-[#ebc766]">0%</span>
            </div>
            <div>
              <h4 className="font-extrabold text-base sm:text-lg text-white flex items-center gap-2 justify-center md:justify-start">
                <span>{lang === 'en' ? 'Zero Overhead Guarantee' : 'பூஜ்ஜிய நிர்வாகச் செலவு உறுதி'}</span>
                <ShieldCheck className="w-4 h-4 text-[#ebc766]" />
              </h4>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl mt-0.5">
                {lang === 'en' 
                  ? 'All administrative and software tools are supported freely by volunteers. 100 paise of every rupee goes directly to cause.'
                  : 'அனைத்து நிர்வாக பணிகளையும் இளைஞர்கள் ஊதியமின்றி முன்னெடுப்பதால், உங்கள் பங்களிப்பு நேரடியாக மக்களைச் சென்றடைகிறது.'}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a 
              href="#transparency" 
              className="btn-care-gold text-xs sm:text-sm"
            >
              {lang === 'en' ? 'Verify Transparency' : 'வெளிப்படைத்தன்மை'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
