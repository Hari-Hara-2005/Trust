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
  Award
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
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Badging with AOS */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-indigo-50 text-[#18144b] border border-indigo-100 mb-4">
            <Sparkles className="w-4 h-4 text-[#ea580c]" />
            <span>{lang === 'en' ? 'Our Roots & Ethos' : 'எங்கள் தோற்றமும் கொள்கைகளும்'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#18144b] font-display">
            {lang === 'en' ? (
              <>A Living Granary of <span className="text-[#ea580c]">Grassroots Compassion</span></>
            ) : (
              <>கருணையின் களஞ்சியம்: <span className="text-[#ea580c]">சேவை களஞ்சியம்</span></>
            )}
          </h2>

          <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed font-normal">
            {lang === 'en'
              ? trustInfo.missionStatement
              : trustInfo.missionStatementTamil}
          </p>
        </div>

        {/* Narrative & Visual Concept of "Kalanjiyam" */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: The Story of Kalanjiyam with AOS */}
          <div className="lg:col-span-7 space-y-7" data-aos="fade-right" data-aos-duration="800">
            <div className="border-l-4 border-[#ea580c] pl-5 sm:pl-7 py-1.5">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18144b] tamil-title">
                {trustInfo.philosophy.title}
              </h3>
              <p className="text-base sm:text-lg font-bold text-[#ea580c] mt-1">
                {lang === 'en' ? 'Duty, Not Charity (கடமை, தானம் அல்ல)' : 'கடமை, தானம் அல்ல'}
              </p>
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {trustInfo.philosophy.description}
            </p>

            <div className="bg-[#faf9f5] rounded-3xl p-7 sm:p-8 border border-amber-200/80 space-y-5 shadow-2xs">
              <h4 className="font-extrabold text-base sm:text-lg text-[#18144b] flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#ea580c]"></span>
                {lang === 'en' ? 'Why We Stand Apart from Conventional NGOs:' : 'நாங்கள் எவ்வாறு தனித்து நிற்கிறோம்:'}
              </h4>
              
              <ul className="space-y-4 text-sm sm:text-base text-slate-800">
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>{lang === 'en' ? 'No Salaried Executives:' : 'ஊதியமில்லா நிர்வாகம்:'}</strong> {lang === 'en' ? 'Every coordinator works in a full-time professional career and volunteers weekends for the trust.' : 'அனைத்து ஒருங்கிணைப்பாளர்களும் தங்கள் ஓய்வு நேரத்தை முழுமையாக அர்ப்பணித்து களப்பணியாற்றுகின்றனர்.'}
                  </span>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>{lang === 'en' ? 'Preserving Beneficiary Pride:' : 'பயனாளியின் சுயமரியாதை:'}</strong> {lang === 'en' ? 'We do not humiliate receivers with intrusive publicity. Service is delivered as an elder brother or sister helping family.' : 'எந்தவொரு பயனாளியையும் புகைப்படங்களுக்காக சங்கடப்படுத்தாமல் குடும்ப உறுப்பினராக பாவித்து உதவுகிறோம்.'}
                  </span>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>
                    <strong>{lang === 'en' ? 'Direct Ground Verification:' : 'நேரடி கள ஆய்வு:'}</strong> {lang === 'en' ? 'Volunteers personally inspect schools, slum clusters, and hospitals before launching initiatives.' : 'தேவைப்படும் பள்ளிகள் மற்றும் ஏழைப் பகுதிகளை நேரில் ஆய்வு செய்த பின்பே திட்டங்கள் வகுக்கப்படுகின்றன.'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenVolunteerModal}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-base text-white bg-[#141042] hover:bg-[#20195e] transition-all shadow-md cursor-pointer"
              >
                <Users className="w-5 h-5 text-[#ea580c]" />
                <span>{lang === 'en' ? 'Meet the Youth Volunteers' : 'தன்னார்வக் குழுவில் இணைய'}</span>
              </button>
            </div>
          </div>

          {/* Right: Graphic Card with Pillars with AOS */}
          <div className="lg:col-span-5" data-aos="fade-left" data-aos-duration="800">
            <div className="relative rounded-3xl p-8 sm:p-9 bg-gradient-to-br from-[#141042] via-[#211663] to-[#2e1263] text-white shadow-2xl overflow-hidden border border-indigo-900/60">
              
              {/* Background ambient shine */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c]/15 rounded-full blur-2xl"></div>
              
              <div className="relative space-y-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400">
                      Core Values
                    </span>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                      The 4 Pillars of Sevai
                    </h4>
                  </div>
                  <img 
                    src="/sevai-logo.png" 
                    alt="Logo Badge" 
                    className="w-12 h-12 object-contain rounded-full bg-white p-0.5 shadow-md" 
                  />
                </div>

                <div className="space-y-4">
                  {trustInfo.philosophy.pillars.map((pillar, idx) => {
                    const PillarIcon = iconMap[pillar.icon] || HeartHandshake;
                    return (
                      <div 
                        key={idx} 
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-102"
                      >
                        <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
                          <PillarIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h5 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                            <span>{lang === 'en' ? pillar.title : pillar.titleTamil}</span>
                          </h5>
                          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Chennai Roots footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-slate-300">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-4 h-4 text-[#ea580c]" />
                    Chennai, Tamil Nadu
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    Active Since 2010
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
