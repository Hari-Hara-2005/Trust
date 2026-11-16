import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, TrendingUp, Users, FileText, Lock, Sparkles } from 'lucide-react';
import { transparencyMetrics } from '../data/trustData';

export default function TransparencySection({ lang, onOpenSupportModal }) {
  const [demoAmount, setDemoAmount] = useState(1000);

  return (
    <section id="transparency" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      
      {/* Decorative ambient spots */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header with AOS */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Radical Transparency' : 'முழுமையான வெளிப்படைத்தன்மை'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#18144b] font-display">
            {lang === 'en' ? (
              <>Where Does <span className="text-emerald-600">Every Rupee</span> Go?</>
            ) : (
              <>உங்கள் பங்களிப்பு <span className="text-emerald-600">எவ்வாறு பயனளிக்கிறது?</span></>
            )}
          </h2>

          <p className="mt-4 text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed">
            {lang === 'en'
              ? "Unlike large charities where significant funds are consumed by managerial salaries, swanky offices, and marketing campaigns, Sevai Kalanjiyam operates with zero administrative overhead."
              : "பெரிய தொண்டு நிறுவனங்களைப் போல நிர்வாகச் செலவுகளுக்கோ, விளம்பரங்களுக்கோ எந்தப் பணமும் விரயமாவதில்லை. 100% பங்களிப்பும் நேரடியாக களப்பணிக்கே செல்கிறது."}
          </p>
        </div>

        {/* 4 Pillars of Transparency with AOS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-14">
          {transparencyMetrics.map((item, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="p-8 rounded-3xl bg-[#faf9f5] border border-amber-200/70 shadow-2xs hover-card-glow text-center space-y-3 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider block">
                {item.label}
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#18144b] font-display">
                {item.value}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pt-1 font-medium">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Comparative Model Card: Traditional NGO vs Sevai Kalanjiyam with AOS */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="700"
          className="rounded-3xl bg-gradient-to-br from-[#141042] via-[#211663] to-[#141042] text-white p-7 sm:p-12 shadow-2xl border border-indigo-900/60"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-300">
                {lang === 'en' ? 'The Grassroots Advantage' : 'தன்னார்வ மாதிரியின் வலிமை'}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display leading-tight">
                {lang === 'en' 
                  ? 'A Model Built on Duty, Powered by Youth Volunteers' 
                  : 'இளைஞர் சக்தியால் இயங்கும் தூய மக்கள் இயக்கம்'}
              </h3>
              <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                {lang === 'en'
                  ? 'From our founding in 2010 to date, our software engineers write the code, teachers lead the study circles, environmentalists survey native trees, and students distribute the meals. That is why 100% of community contributions go directly to the cause.'
                  : 'எங்கள் தன்னார்வலர்களில் மென்பொருள் பொறியாளர்கள், ஆசிரியர்கள், மருத்துவர்கள் மற்றும் கல்லூரி மாணவர்கள் தங்கள் சொந்த நேரத்தை மனமுவந்து அர்ப்பணிப்பதால் இடைத்தரகர்களோ நிர்வாக விரயங்களோ இல்லை.'}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Public audit trails</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Geo-tagged photo logs</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Direct beneficiary receipt</span>
                </div>
              </div>
            </div>

            {/* Visual Breakdown Comparison */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-7 border border-white/15 space-y-6">
              
              {/* Interactive Demo allocation */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="text-slate-200 font-medium">Simulate Contribution:</span>
                  <span className="font-extrabold text-amber-300 text-lg">₹{demoAmount}</span>
                </div>
                <input 
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={demoAmount}
                  onChange={(e) => setDemoAmount(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-2.5 bg-white/20 rounded-lg"
                />
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex justify-between text-sm sm:text-base font-bold">
                  <span className="text-amber-300">Sevai Kalanjiyam Allocation:</span>
                  <span className="text-emerald-400 font-black">₹{demoAmount} (100% to Cause)</span>
                </div>
                <div className="w-full bg-white/20 h-5 rounded-full overflow-hidden flex shadow-inner">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full w-full"></div>
                </div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-200 font-medium">
                  <span>₹0 Admin Salaries</span>
                  <span>100% Direct Kits, Meals & Saplings</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-5 space-y-2.5">
                <div className="flex justify-between text-sm text-slate-300 font-medium">
                  <span>Conventional Industry NGO Average:</span>
                  <span className="text-slate-300 font-bold">₹{Math.round(demoAmount * 0.65)} to Cause</span>
                </div>
                <div className="w-full bg-white/20 h-3.5 rounded-full overflow-hidden flex">
                  <div className="bg-slate-400 h-full w-[65%]"></div>
                  <div className="bg-rose-400/80 h-full w-[35%]"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>65% Program</span>
                  <span className="text-rose-300">₹{Math.round(demoAmount * 0.35)} (35% Overhead)</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={onOpenSupportModal}
                  className="w-full py-3.5 bg-gradient-to-r from-[#ea580c] to-[#d91b5c] hover:from-[#c2410c] hover:to-[#be123c] text-white font-bold text-sm sm:text-base rounded-2xl shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  {lang === 'en' ? 'Support Transparent Action Today' : 'இப்போதே களப்பணிக்கு ஆதரவளியுங்கள்'}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
