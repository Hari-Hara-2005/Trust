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
    <section id="about" className="py-20 sm:py-28 bg-[#f1f4ee] relative overflow-hidden border-b border-[#cdd5c9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Careunity Section Header */}
        <div className="max-w-3xl mb-14" data-aos="fade-up">
          <div className="pill-label-text mb-2">
            / THE SPIRIT OF KALANJIYAM /
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172d25] font-display tracking-tight leading-tight">
            {lang === 'en' ? (
              <>A modern granary of <span className="text-[#173f32]">compassion & civic duty.</span></>
            ) : (
              <>கருணையின் களஞ்சியம்: <span className="text-[#173f32]">சேவை களஞ்சியம்</span></>
            )}
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#526158] leading-relaxed">
            {lang === 'en'
              ? trustInfo.missionStatement
              : trustInfo.missionStatementTamil}
          </p>
        </div>

        {/* Narrative & Visual Concept */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
            <div className="border-l-3 border-[#173f32] pl-4 sm:pl-5 py-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#172d25] tamil-title">
                {trustInfo.philosophy.title}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#173f32] mt-0.5 uppercase tracking-wider">
                {lang === 'en' ? 'Duty, Not Charity (கடமை, தானம் அல்ல)' : 'கடமை, தானம் அல்ல'}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#526158] leading-relaxed">
              {trustInfo.philosophy.description}
            </p>

            {/* Careunity Stand Apart Card */}
            <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-[#cdd5c9] space-y-4 shadow-xs">
              <h4 className="font-extrabold text-sm sm:text-base text-[#172d25] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#173f32]"></span>
                {lang === 'en' ? 'Why We Stand Apart from Conventional NGOs:' : 'நாங்கள் எவ்வாறு தனித்து நிற்கிறோம்:'}
              </h4>
              
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#526158]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#173f32] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✓
                  </div>
                  <span>
                    <strong className="text-[#172d25]">{lang === 'en' ? 'No Salaried Executives:' : 'ஊதியமில்லா நிர்வாகம்:'}</strong> {lang === 'en' ? 'Every coordinator works in a full-time professional career and volunteers weekends for the trust.' : 'அனைத்து ஒருங்கிணைப்பாளர்களும் தங்கள் ஓய்வு நேரத்தை முழுமையாக அர்ப்பணித்து களப்பணியாற்றுகின்றனர்.'}
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#173f32] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✓
                  </div>
                  <span>
                    <strong className="text-[#172d25]">{lang === 'en' ? 'Preserving Beneficiary Pride:' : 'பயனாளியின் சுயமரியாதை:'}</strong> {lang === 'en' ? 'We do not humiliate receivers with intrusive publicity. Service is delivered as an elder brother or sister helping family.' : 'எந்தவொரு பயனாளியையும் புகைப்படங்களுக்காக சங்கடப்படுத்தாமல் குடும்ப உறுப்பினராக பாவித்து உதவுகிறோம்.'}
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#173f32] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✓
                  </div>
                  <span>
                    <strong className="text-[#172d25]">{lang === 'en' ? 'Direct Ground Verification:' : 'நேரடி கள ஆய்வு:'}</strong> {lang === 'en' ? 'Volunteers personally inspect schools, slum clusters, and hospitals before launching initiatives.' : 'தேவைப்படும் பள்ளிகள் மற்றும் ஏழைப் பகுதிகளை நேரில் ஆய்வு செய்த பின்பே திட்டங்கள் வகுக்கப்படுகின்றன.'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenVolunteerModal}
                className="btn-care-primary group"
              >
                <Users className="w-4 h-4 text-[#ebc766]" />
                <span>{lang === 'en' ? 'Meet the Youth Volunteers' : 'தன்னார்வக் குழுவில் இணைய'}</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Right: The 4 Pillars Card Grid */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="bg-[#172d25] text-white rounded-[32px] p-7 sm:p-8 space-y-6 shadow-md border border-[#234539]">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ebc766]">
                    Ethical Foundations
                  </span>
                  <h4 className="text-xl font-extrabold text-white font-display">
                    The 4 Pillars of Sevai
                  </h4>
                </div>
                <img 
                  src="/sevai-logo.png" 
                  alt="Logo Badge" 
                  className="w-10 h-10 object-contain rounded-full bg-white p-0.5" 
                />
              </div>

              <div className="space-y-3.5">
                {trustInfo.philosophy.pillars.map((pillar, idx) => {
                  const PillarIcon = iconMap[pillar.icon] || HeartHandshake;
                  return (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <div className="p-2 rounded-xl bg-[#ebc766]/20 text-[#ebc766] shrink-0 mt-0.5">
                        <PillarIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{lang === 'en' ? pillar.title : pillar.titleTamil}</span>
                        </h5>
                        <p className="text-xs text-white/70 mt-0.5 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Chennai Roots footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ebc766]" />
                  Chennai, Tamil Nadu
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#ebc766]" />
                  Active Since 2010
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
