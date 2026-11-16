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
  CheckCircle2
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
    <section id="impact" className="py-16 sm:py-24 bg-[#faf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with AOS */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#ea580c] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Verified Field Outcomes' : 'உண்மையான களப்பணி தாக்கம்'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18144b] font-display">
            {lang === 'en' ? (
              <>Numbers That Echo Our <span className="text-[#ea580c]">Grassroots Dedication</span></>
            ) : (
              <>சொற்களைத் தாண்டிய <span className="text-[#ea580c]">உண்மையான களப்பணி</span></>
            )}
          </h2>
          
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? "Every metric represents real lives touched, saplings nurtured through summers, and warm meals delivered without administrative leakages."
              : "ஒவ்வொரு எண்ணிக்கையும் ஒரு மாணவனின் புன்னகை, இரண்டு ஆண்டுகள் வளர்த்தெடுக்கப்பட்ட மரங்கள் மற்றும் கண்ணியத்துடன் வழங்கப்பட்ட உணவின் சாட்சி."}
          </p>
        </div>

        {/* Stats Grid with AOS Stagger */}
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
                className={`relative group bg-white rounded-3xl p-7 border border-slate-200/90 shadow-2xs hover-card-glow ${
                  wingKey ? 'cursor-pointer' : ''
                }`}
              >
                {/* Accent Top Gradient Line */}
                <div className={`absolute top-0 left-8 right-8 h-1.5 rounded-t-full bg-gradient-to-r ${stat.color}`}></div>

                <div className="flex items-start justify-between mb-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 group-hover:bg-slate-100 transition-colors border border-slate-100">
                    <Icon className="w-7 h-7 text-[#18144b] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full group-hover:bg-amber-50 group-hover:text-[#ea580c] transition-colors">
                    {stat.wing}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-black text-[#18144b] tracking-tight font-display flex items-baseline gap-1">
                    <span>{stat.number}</span>
                    <Sparkles className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-[#ea580c] transition-colors">
                    {lang === 'en' ? stat.label : stat.labelTamil}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {stat.sub}
                  </p>
                </div>

                {wingKey && (
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#ea580c] group-hover:text-[#c2410c]">
                    <span>{lang === 'en' ? 'View Wing Details & Initiatives' : 'விவரங்களை அறிய'}</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Micro Banner Under Stats with AOS */}
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#141042] via-[#211663] to-[#141042] text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl border border-indigo-900/50"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0">
              <span className="text-2xl font-black text-amber-300">0%</span>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-white flex items-center gap-2 justify-center md:justify-start">
                <span>{lang === 'en' ? 'Zero Overhead Financial Policy' : '100% நேரடி பயனாளி சென்றடைவு'}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              </h4>
              <p className="text-xs text-slate-300 max-w-xl">
                {lang === 'en' 
                  ? 'All administrative and software tools are supported freely by volunteers. 100 paise of every rupee goes directly to cause.'
                  : 'அனைத்து நிர்வாக பணிகளையும் இளைஞர்கள் ஊதியமின்றி முன்னெடுப்பதால், உங்கள் பங்களிப்பு நேரடியாக மக்களைச் சென்றடைகிறது.'}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a 
              href="#transparency" 
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-all shadow-md cursor-pointer"
            >
              {lang === 'en' ? 'Verify Transparency' : 'வெளிப்படைத்தன்மை'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
