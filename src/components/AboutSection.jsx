import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  HeartHandshake, 
  Sprout, 
  Check, 
  MapPin, 
  Calendar,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { trustInfo } from '../data/trustData';

export default function AboutSection({ lang, onOpenVolunteerModal }) {
  const iconMap = {
    Users,
    ShieldCheck,
    HeartHandshake,
    Sprout
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f1f4ee] relative overflow-hidden border-b border-[#cdd5c9]/60 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14" data-aos="fade-up">
          <div className="pill-label-text mb-3 tracking-widest">
            / THE SPIRIT OF KALANJIYAM /
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172d25] font-display tracking-tight leading-[1.24] sm:leading-[1.2]">
            {lang === 'en' ? (
              <>A modern granary of <br className="hidden sm:inline" /><span className="text-[#173f32]">compassion & civic duty.</span></>
            ) : (
              <>கருணையின் களஞ்சியம்: <br className="hidden sm:inline" /><span className="text-[#173f32]">சேவை களஞ்சியம்</span></>
            )}
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-[#526158] leading-[1.78] max-w-3xl">
            {lang === 'en'
              ? "In ancient Tamil heritage, a Kalanjiyam was a village granary—preserving excess harvest during abundant seasons to sustain and protect every family during lean times. We carry this sacred tradition forward into social welfare, storing community compassion, youth time, and resources to distribute them with supreme dignity."
              : "பண்டைய தமிழர் மரபில் களஞ்சியம் என்பது விளைச்சல் மிகுந்த காலத்தில் தானியங்களைச் சேமித்து, பற்றாக்குறை காலத்தில் அனைத்து மக்களுக்கும் பகிர்ந்தளிக்கும் கிராமத்து அரணாகும். அந்த தூய அறநெறியையே நாம் மக்கள் சேவையில் முன்னெடுக்கிறோம்."}
          </p>
        </div>

        {/* Row 1: Narrative & Stand-Apart Card (Equal Height Balanced Columns) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12 sm:mb-14">
          
          {/* Left: Philosophy & Ethos */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6" data-aos="fade-right">
            <div className="space-y-4">
              <div className="border-l-4 border-[#173f32] pl-4 sm:pl-5 py-1.5 space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#172d25] font-display tracking-tight leading-snug">
                  {trustInfo.philosophy.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#173f32] uppercase tracking-wider">
                  {lang === 'en' ? 'Duty, Not Charity (கடமை, தானம் அல்ல)' : 'கடமை, தானம் அல்ல'}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#526158] leading-[1.8]">
                {trustInfo.philosophy.description}
              </p>
            </div>

            {/* Meet Youth Volunteers CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenVolunteerModal}
                className="btn-care-primary group text-xs sm:text-sm py-3 px-6 cursor-pointer shadow-xs inline-flex w-full sm:w-auto justify-center"
              >
                <Users className="w-4 h-4 text-[#ebc766]" />
                <span>{lang === 'en' ? 'Meet the Youth Volunteers' : 'தன்னார்வக் குழுவில் இணைய'}</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#ebc766] group-hover:text-[#172d25] transition-colors shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Right: Why We Stand Apart Card */}
          <div className="lg:col-span-6" data-aos="fade-left">
            <div className="h-full bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-7 border border-[#cdd5c9] space-y-4 shadow-xs flex flex-col justify-between">
              <h4 className="font-extrabold text-sm sm:text-base text-[#172d25] flex items-center gap-2.5 font-display pb-2 border-b border-[#cdd5c9]/50">
                <span className="w-2.5 h-2.5 rounded-full bg-[#173f32] shrink-0"></span>
                <span>{lang === 'en' ? 'Why We Stand Apart from Conventional NGOs:' : 'நாங்கள் எவ்வாறு தனித்து நிற்கிறோம்:'}</span>
              </h4>
              
              <ul className="space-y-4 text-xs sm:text-sm text-[#526158]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#173f32] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-2xs">
                    ✓
                  </div>
                  <div className="leading-[1.6]">
                    <strong className="text-[#172d25] font-bold block sm:inline">
                      {lang === 'en' ? 'No Salaried Executives: ' : 'ஊதியமில்லா நிர்வாகம்: '}
                    </strong>
                    <span>
                      {lang === 'en' 
                        ? 'Every coordinator works in a full-time professional career and volunteers weekends for the trust.' 
                        : 'அனைத்து ஒருங்கிணைப்பாளர்களும் தங்கள் ஓய்வு நேரத்தை முழுமையாக அர்ப்பணித்து களப்பணியாற்றுகின்றனர்.'}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#173f32] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-2xs">
                    ✓
                  </div>
                  <div className="leading-[1.6]">
                    <strong className="text-[#172d25] font-bold block sm:inline">
                      {lang === 'en' ? 'Preserving Beneficiary Pride: ' : 'பயனாளியின் சுயமரியாதை: '}
                    </strong>
                    <span>
                      {lang === 'en' 
                        ? 'We do not humiliate receivers with intrusive publicity. Service is delivered as an elder brother or sister helping family.' 
                        : 'எந்தவொரு பயனாளியையும் புகைப்படங்களுக்காக சங்கடப்படுத்தாமல் குடும்ப உறுப்பினராக பாவித்து உதவுகிறோம்.'}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#173f32] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-2xs">
                    ✓
                  </div>
                  <div className="leading-[1.6]">
                    <strong className="text-[#172d25] font-bold block sm:inline">
                      {lang === 'en' ? 'Direct Ground Verification: ' : 'நேரடி கள ஆய்வு: '}
                    </strong>
                    <span>
                      {lang === 'en' 
                        ? 'Volunteers personally inspect schools, slum clusters, and hospitals before launching initiatives.' 
                        : 'தேவைப்படும் பள்ளிகள் மற்றும் ஏழைப் பகுதிகளை நேரில் ஆய்வு செய்த பின்பே திட்டங்கள் வகுக்கப்படுகின்றன.'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Row 2: The 4 Pillars of Sevai (Full Width Horizontal Showcase — No Overhang!) */}
        <div 
          data-aos="fade-up"
          className="bg-[#172d25] text-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 lg:p-9 border border-[#234539] shadow-md relative overflow-hidden"
        >
          {/* Subtle ambient light glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ebc766]/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Banner Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 border-b border-white/10 gap-4 mb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ebc766] block font-display">
                / ETHICAL FOUNDATIONS /
              </span>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-display tracking-tight">
                {lang === 'en' ? 'The 4 Pillars of Sevai Kalanjiyam' : 'சேவை களஞ்சியத்தின் 4 தூண்கள்'}
              </h4>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 shrink-0">
              <div className="text-left sm:text-right">
                <span className="text-xs text-[#ebc766] font-bold block">100% Volunteer Model</span>
                <span className="text-[11px] text-white/60">Active Since 2010 • Chennai</span>
              </div>
              <img 
                src="/sevai-logo.png" 
                alt="Sevai Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white p-1 border-2 border-[#ebc766] shadow-sm object-contain shrink-0" 
              />
            </div>
          </div>

          {/* 4 Pillars Grid: 4 Clean Columns Across Screen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {trustInfo.philosophy.pillars.map((pillar, idx) => {
              const PillarIcon = iconMap[pillar.icon] || HeartHandshake;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#ebc766]/40 transition-all group shadow-2xs"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#ebc766]/20 text-[#ebc766] flex items-center justify-center shrink-0 group-hover:bg-[#ebc766] group-hover:text-[#172d25] transition-colors">
                      <PillarIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <h5 className="text-sm sm:text-base font-bold text-white font-display leading-snug">
                        {lang === 'en' ? pillar.title : pillar.titleTamil}
                      </h5>
                      <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-bold text-[#ebc766]">
                    <span>✓ Step Verified Ethos</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}