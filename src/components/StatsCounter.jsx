import React from 'react';
import { 
  GraduationCap, 
  Trees, 
  UtensilsCrossed, 
  Shirt, 
  Stethoscope, 
  Clock,
  Award
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
    <section id="impact" className="py-16 sm:py-20 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#ea580c] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Verified Field Outcomes' : 'உண்மையான களப்பணி தாக்கம்'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18144b] font-display">
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustInfo.stats.map((stat) => {
            const Icon = iconMap[stat.id] || Award;
            const wingKey = wingIdMap[stat.id];

            return (
              <div
                key={stat.id}
                onClick={() => wingKey && onSelectWing(wingKey)}
                className={`relative group bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  wingKey ? 'cursor-pointer' : ''
                }`}
              >
                {/* Accent Top Border */}
                <div className={`absolute top-0 left-6 right-6 h-1 rounded-t bg-gradient-to-r ${stat.color}`}></div>

                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors border border-slate-100">
                    <Icon className="w-7 h-7 text-[#18144b] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    {stat.wing}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#18144b] tracking-tight font-display">
                    {stat.number}
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-800">
                    {lang === 'en' ? stat.label : stat.labelTamil}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {stat.sub}
                  </p>
                </div>

                {wingKey && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#ea580c] group-hover:text-[#c2410c]">
                    <span>{lang === 'en' ? 'View Wing Details' : 'விவரங்களை அறிய'}</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Micro Banner Under Stats */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-[#18144b] via-[#211663] to-[#18144b] text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <span className="text-xl font-bold text-amber-300">0%</span>
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">
                {lang === 'en' ? 'Zero Overhead Financial Policy' : '100% நேரடி பயனாளி சென்றடைவு'}
              </h4>
              <p className="text-xs text-slate-300">
                {lang === 'en' 
                  ? 'All administrative and software tools are supported freely by volunteers. 100 paise of every rupee goes directly to cause.'
                  : 'அனைத்து நிர்வாக பணிகளையும் இளைஞர்கள் ஊதியமின்றி முன்னெடுப்பதால், உங்கள் பங்களிப்பு நேரடியாக மக்களைச் சென்றடைகிறது.'}
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <a 
              href="#transparency" 
              className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors shadow-sm"
            >
              {lang === 'en' ? 'Verify Transparency' : 'வெளிப்படைத்தன்மை'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

