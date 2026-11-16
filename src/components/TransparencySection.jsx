import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, TrendingUp, Users, FileText, Lock, Sparkles } from 'lucide-react';
import { transparencyMetrics } from '../data/trustData';

export default function TransparencySection({ lang, onOpenSupportModal }) {
  const [demoAmount, setDemoAmount] = useState(1000);

  return (
    <section id="transparency" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      
      {/* Decorative ambient spots */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header with AOS */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Radical Transparency' : 'முழுமையான வெளிப்படைத்தன்மை'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18144b] font-display">
            {lang === 'en' ? (
              <>Where Does <span className="text-emerald-600">Every Rupee</span> Go?</>
            ) : (
              <>உங்கள் பங்களிப்பு <span className="text-emerald-600">எவ்வாறு பயனளிக்கிறது?</span></>
            )}
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? "Unlike large charities where significant funds are consumed by managerial salaries, swanky offices, and marketing campaigns, Sevai Kalanjiyam operates with zero administrative overhead."
              : "பெரிய தொண்டு நிறுவனங்களைப் போல நிர்வாகச் செலவுகளுக்கோ, விளம்பரங்களுக்கோ எந்தப் பணமும் விரயமாவதில்லை. 100% பங்களிப்பும் நேரடியாக களப்பணிக்கே செல்கிறது."}
          </p>
        </div>

        {/* 4 Pillars of Transparency with AOS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {transparencyMetrics.map((item, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="p-7 rounded-3xl bg-[#faf9f5] border border-amber-200/70 shadow-2xs hover-card-glow text-center space-y-2 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                {item.label}
              </span>
              <div className="text-2xl font-black text-[#18144b] font-display">
                {item.value}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Comparative Model Card: Traditional NGO vs Sevai Kalanjiyam with AOS */}
        <div 
          data-aos="zoom-in"
          data-aos-duration="700"
          className="rounded-3xl bg-gradient-to-br from-[#141042] via-[#211663] to-[#141042] text-white p-6 sm:p-10 shadow-2xl border border-indigo-900/60"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                {lang === 'en' ? 'The Grassroots Advantage' : 'தன்னார்வ மாதிரியின் வலிமை'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {lang === 'en' 
                  ? 'A Model Built on Duty, Powered by Youth Volunteers' 
                  : 'இளைஞர் சக்தியால் இயங்கும் தூய மக்கள் இயக்கம்'}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {lang === 'en'
                  ? 'From our founding in 2010 to date, our software engineers write the code, teachers lead the study circles, environmentalists survey native trees, and students distribute the meals. That is why 100% of community contributions go directly to the cause.'
                  : 'எங்கள் தன்னார்வலர்களில் மென்பொருள் பொறியாளர்கள், ஆசிரியர்கள், மருத்துவர்கள் மற்றும் கல்லூரி மாணவர்கள் தங்கள் சொந்த நேரத்தை மனமுவந்து அர்ப்பணிப்பதால் இடைத்தரகர்களோ நிர்வாக விரயங்களோ இல்லை.'}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Public audit trails</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Geo-tagged photo logs</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Direct beneficiary receipt</span>
                </div>
              </div>
            </div>

            {/* Visual Breakdown Comparison */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 space-y-5">
              
              {/* Interactive Demo allocation */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">Simulate Contribution:</span>
                  <span className="font-bold text-amber-300">₹{demoAmount}</span>
                </div>
                <input 
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={demoAmount}
                  onChange={(e) => setDemoAmount(Number(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer"
                />
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-amber-300">Sevai Kalanjiyam Allocation:</span>
                  <span className="text-emerald-400 font-extrabold">₹{demoAmount} (100% to Cause)</span>
                </div>
                <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden flex">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full w-full"></div>
                </div>
                <div className="flex justify-between text-[11px] text-slate-300">
                  <span>₹0 Admin Salaries</span>
                  <span>100% Direct Kits, Meals & Saplings</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex justify-between text-xs font-semibold text-slate-300">
                  <span>Conventional Industry NGO Average:</span>
                  <span className="text-slate-400">₹{Math.round(demoAmount * 0.65)} to Cause</span>
                </div>
                <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden flex">
                  <div className="bg-slate-400 h-full w-[65%]"></div>
                  <div className="bg-rose-400/80 h-full w-[35%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>65% Program</span>
                  <span className="text-rose-300">₹{Math.round(demoAmount * 0.35)} (35% Overhead)</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={onOpenSupportModal}
                  className="w-full py-3 bg-gradient-to-r from-[#ea580c] to-[#d91b5c] hover:from-[#c2410c] hover:to-[#be123c] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
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
