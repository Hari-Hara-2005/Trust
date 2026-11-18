import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, FileText, Lock, Sparkles, ArrowUpRight } from 'lucide-react';
import { transparencyMetrics } from '../data/trustData';

export default function TransparencySection({ lang, onOpenSupportModal }) {
  const [demoAmount, setDemoAmount] = useState(1000);

  const steps = [
    {
      step: '01',
      title: 'Direct Contribution',
      titleTamil: 'நேரடி பங்களிப்பு',
      desc: '100% of your donation is received without third-party commission or salary overhead.',
      descTamil: 'எவ்வித கமிஷனோ நிர்வாகக் கழிவோ இன்றி உங்கள் பங்களிப்பு நேரடியாக பெறப்படுகிறது.'
    },
    {
      step: '02',
      title: 'Ground Need Verification',
      titleTamil: 'நேரடி கள ஆய்வு',
      desc: 'Youth volunteers personally inspect corporation schools, orphanages, and slums in Chennai.',
      descTamil: 'தன்னார்வலர்கள் நேரில் சென்று ஆய்வு செய்து உண்மையான தேவையை உறுதி செய்கின்றனர்.'
    },
    {
      step: '03',
      title: 'Bulk Kit & Ration Procurement',
      titleTamil: 'மொத்த கொள்முதல்',
      desc: 'Books, saplings, groceries, and blankets are procured wholesale to maximize impact.',
      descTamil: 'புத்தகங்கள், மரக்கன்றுகள், மளிகை பொருட்கள் மொத்த விலையில் கொள்முதல் செய்யப்படுகின்றன.'
    },
    {
      step: '04',
      title: 'Dignified Handover & Audit',
      titleTamil: 'கண்ணியமான வழங்கல்',
      desc: 'Supplies and meals are handed over with respect; receipts and photos are shared with donors.',
      descTamil: 'பயனாளிகளுக்கு சுயமரியாதையுடன் வழங்கப்பட்டு, வரவு-செலவு கணக்குகள் பகிரப்படுகின்றன.'
    }
  ];

  return (
    <section id="transparency" className="py-20 sm:py-28 bg-[#f1f4ee] relative overflow-hidden border-b border-[#cdd5c9]/60 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Careunity Section Header */}
        <div className="max-w-3xl mb-14" data-aos="fade-up">
          <div className="pill-label-text mb-2">
            / ZERO OVERHEAD TRANSPARENCY /
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172d25] font-display tracking-tight leading-tight">
            {lang === 'en' 
              ? 'From your gift to a family’s table in four steps.' 
              : 'உங்கள் பங்களிப்பு மக்களை சென்றடையும் 4 படிகள்.'}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#526158] leading-relaxed">
            {lang === 'en'
              ? "Unlike traditional charities where 30-40% is lost to administrative overhead, Sevai Kalanjiyam delivers 100 paise of every rupee directly to the beneficiary."
              : "பெரிய தொண்டு நிறுவனங்களைப் போல நிர்வாகச் செலவுகளுக்கோ, விளம்பரங்களுக்கோ எந்தப் பணமும் விரயமாவதில்லை. 100% பங்களிப்பும் நேரடியாக களப்பணிக்கே செல்கிறது."}
          </p>
        </div>

        {/* 4 Steps Grid (Careunity Signature Section) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {steps.map((st, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="care-card p-5 sm:p-7 relative flex flex-col justify-between"
            >
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#173f32] font-display mb-2.5 sm:mb-3">
                  {st.step}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#172d25] mb-1.5 leading-snug">
                  {lang === 'en' ? st.title : st.titleTamil}
                </h3>
                <p className="text-xs sm:text-sm text-[#526158] leading-relaxed">
                  {lang === 'en' ? st.desc : st.descTamil}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 border-t border-[#cdd5c9]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#173f32]">
                <span>✓ Step Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Key Transparency Metrics (2x2 on Mobile, 4 Across on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-14">
          {transparencyMetrics.map((item, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="p-4 sm:p-6 rounded-2xl bg-white border border-[#cdd5c9] text-center space-y-1 sm:space-y-1.5 shadow-2xs"
            >
              <span className="text-[10px] sm:text-xs font-semibold text-[#526158] uppercase tracking-wider block">
                {item.label}
              </span>
              <div className="text-xl sm:text-2xl font-black text-[#172d25] font-display">
                {item.value}
              </div>
              <p className="text-[11px] sm:text-xs text-[#526158] leading-relaxed">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Careunity "See exactly what your gift can do" Simulation Card */}
        <div 
          data-aos="zoom-in"
          className="rounded-[24px] sm:rounded-[32px] bg-[#172d25] text-white p-5 sm:p-8 md:p-12 shadow-xl border border-[#234539]"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ebc766]">
                {lang === 'en' ? 'Direct Impact Simulator' : 'நேரடி பயனாளி ஒப்பீடு'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                {lang === 'en' 
                  ? 'See exactly what your gift can do.' 
                  : 'உங்கள் பங்களிப்பு எவ்வாறு முழுமையாக சேர்கிறது.'}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                {lang === 'en'
                  ? 'Because our trustees, coordinators, software engineers, and volunteers contribute their time pro-bono, 100 paise of every rupee buys education kits, meals, saplings, or emergency healthcare.'
                  : 'அனைத்து பணிகளையும் இளைஞர்கள் ஊதியமின்றி முன்னெடுப்பதால், நிர்வாக விரயம் பூஜ்ஜியம்.'}
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 text-xs sm:text-sm text-white/80 font-medium">
                <span className="flex items-center gap-1.5">✓ Public invoices</span>
                <span className="flex items-center gap-1.5">✓ Geo-tagged photos</span>
                <span className="flex items-center gap-1.5">✓ Direct distribution</span>
              </div>
            </div>

            {/* Simulation Slider Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 border border-white/15 space-y-4 sm:space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-white/80">Simulate Contribution:</span>
                  <span className="font-extrabold text-[#ebc766] text-base sm:text-lg">₹{demoAmount}</span>
                </div>
                <input 
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={demoAmount}
                  onChange={(e) => setDemoAmount(Number(e.target.value))}
                  className="w-full accent-[#ebc766] cursor-pointer h-2 bg-white/20 rounded-lg"
                />
              </div>

              {/* Sevai Kalanjiyam Allocation */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs sm:text-sm font-bold">
                  <span className="text-[#ebc766]">Sevai Kalanjiyam (100% to Cause):</span>
                  <span className="text-white font-black">₹{demoAmount}</span>
                </div>
                <div className="w-full bg-white/20 h-3 sm:h-3.5 rounded-full overflow-hidden flex">
                  <div className="bg-[#ebc766] h-full w-full"></div>
                </div>
                <div className="flex justify-between text-[10px] sm:text-[11px] text-white/70">
                  <span>₹0 Admin Salaries</span>
                  <span>100% Direct Kits & Meals</span>
                </div>
              </div>

              {/* Standard NGO Comparison */}
              <div className="border-t border-white/10 pt-3.5 sm:pt-4 space-y-1.5">
                <div className="flex justify-between text-xs text-white/70">
                  <span>Standard NGO Industry (~65%):</span>
                  <span className="text-white font-semibold">₹{Math.round(demoAmount * 0.65)}</span>
                </div>
                <div className="w-full bg-white/20 h-2 sm:h-2.5 rounded-full overflow-hidden flex">
                  <div className="bg-white/60 h-full w-[65%]"></div>
                  <div className="bg-rose-400/80 h-full w-[35%]"></div>
                </div>
                <div className="flex justify-between text-[9px] sm:text-[10px] text-white/60">
                  <span>65% Program</span>
                  <span className="text-rose-300">₹{Math.round(demoAmount * 0.35)} (35% Overhead)</span>
                </div>
              </div>

              <button
                onClick={onOpenSupportModal}
                className="w-full btn-care-gold text-xs sm:text-sm py-3 mt-2 justify-center"
              >
                <span>{lang === 'en' ? 'Support Transparent Action' : 'இப்போதே ஆதரவளிக்க'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
