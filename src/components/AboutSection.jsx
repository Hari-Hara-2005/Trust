import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  HeartHandshake, 
  Sprout, 
  Check, 
  MapPin, 
  Calendar,
  Sparkles
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
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badging */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 text-[#18144b] border border-indigo-100 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>{lang === 'en' ? 'Our Roots & Ethos' : 'எங்கள் தோற்றமும் கொள்கைகளும்'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18144b] font-display">
            {lang === 'en' ? (
              <>A Living Granary of <span className="text-[#ea580c]">Grassroots Compassion</span></>
            ) : (
              <>கருணையின் களஞ்சியம்: <span className="text-[#ea580c]">சேவை களஞ்சியம்</span></>
            )}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {lang === 'en'
              ? trustInfo.missionStatement
              : trustInfo.missionStatementTamil}
          </p>
        </div>

        {/* Narrative & Visual Concept of "Kalanjiyam" */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: The Story of Kalanjiyam */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-4 border-[#ea580c] pl-4 sm:pl-6 py-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#18144b] tamil-title">
                {trustInfo.philosophy.title}
              </h3>
              <p className="text-sm font-semibold text-[#ea580c]">
                {lang === 'en' ? 'Duty, Not Charity (கடமை, தானம் அல்ல)' : 'கடமை, தானம் அல்ல'}
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {trustInfo.philosophy.description}
            </p>

            <div className="bg-[#faf9f5] rounded-2xl p-6 border border-amber-200/60 space-y-3.5">
              <h4 className="font-bold text-sm text-[#18144b] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ea580c]"></span>
                {lang === 'en' ? 'Why We Stand Apart from Conventional NGOs:' : 'நாங்கள் எவ்வாறு தனித்து நிற்கிறோம்:'}
              </h4>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>{lang === 'en' ? 'No Salaried Executives:' : 'ஊதியமில்லா நிர்வாகம்:'}</strong> {lang === 'en' ? 'Every coordinator works in a full-time professional career and volunteers weekends for the trust.' : 'அனைத்து ஒருங்கிணைப்பாளர்களும் தங்கள் ஓய்வு நேரத்தை முழுமையாக அர்ப்பணித்து களப்பணியாற்றுகின்றனர்.'}
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong>{lang === 'en' ? 'Preserving Beneficiary Pride:' : 'பயனாளியின் சுயமரியாதை:'}</strong> {lang === 'en' ? 'We do not humiliate receivers with intrusive publicity. Service is delivered as an elder brother or sister helping family.' : 'எந்தவொரு பயனாளியையும் புகைப்படங்களுக்காக சங்கடப்படுத்தாமல் குடும்ப உறுப்பினராக பாவித்து உதவுகிறோம்.'}
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-[#18144b] bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors cursor-pointer"
              >
                <Users className="w-4 h-4 text-[#ea580c]" />
                <span>{lang === 'en' ? 'Meet the Youth Volunteers' : 'தன்னார்வக் குழுவில் இணைய'}</span>
              </button>
            </div>
          </div>

          {/* Right: Graphic Card with Pillars */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#18144b] to-[#2b1875] text-white shadow-xl overflow-hidden">
              {/* Background ambient shine */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c]/10 rounded-full blur-2xl"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Core Values
                    </span>
                    <h4 className="text-lg font-bold text-white">
                      The 4 Pillars of Sevai
                    </h4>
                  </div>
                  <img 
                    src="/sevai-logo.png" 
                    alt="Logo Badge" 
                    className="w-10 h-10 object-contain rounded-full bg-white p-0.5" 
                  />
                </div>

                <div className="space-y-4">
                  {trustInfo.philosophy.pillars.map((pillar, idx) => {
                    const PillarIcon = iconMap[pillar.icon] || HeartHandshake;
                    return (
                      <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                        <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
                          <PillarIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-white flex items-center gap-2">
                            <span>{lang === 'en' ? pillar.title : pillar.titleTamil}</span>
                          </h5>
                          <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Chennai Roots footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                    Chennai, Tamil Nadu
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
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

