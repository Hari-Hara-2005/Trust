import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';
import { faqs } from '../data/trustData';

export default function FAQSection({ lang, onOpenVolunteerModal, onOpenSupportModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-[#cdd5c9]/60 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Careunity Header with AOS */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="pill-label-text mb-3">
            / {lang === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : 'அடிக்கடி கேட்கப்படும் கேள்விகள்'} /
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172d25] font-display tracking-tight">
            {lang === 'en' ? 'Giving, made clear.' : 'உங்கள் கேள்விகளுக்கான தெளிவான பதில்கள்'}
          </h2>

          <p className="mt-3 text-[#526158] text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Everything you need to know about our 100% volunteer model, operations, and zero-overhead ethics.'
              : 'எங்கள் தன்னார்வப் பணிகள், நேரடி உதவி முறை மற்றும் வெளிப்படைத்தன்மை குறித்த சந்தேகங்கள்.'}
          </p>
        </div>

        {/* Accordion List with Careunity Styling */}
        <div className="space-y-3.5 sm:space-y-4" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-[18px] sm:rounded-[22px] transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#172d25] shadow-sm bg-white' 
                    : 'border-[#cdd5c9] hover:border-[#172d25]/60 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left font-extrabold text-sm sm:text-base text-[#172d25] font-display hover:text-[#173f32] transition-colors cursor-pointer gap-2"
                >
                  <span className="pr-2 leading-snug">
                    {lang === 'en' ? faq.q : faq.qTamil}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen ? 'bg-[#172d25] text-white rotate-180' : 'bg-[#f1f4ee] text-[#172d25]'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-[#526158] leading-relaxed border-t border-[#cdd5c9]/40 pt-3.5 sm:pt-4 bg-[#f1f4ee]/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt (Careunity Box) */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-[24px] sm:rounded-[30px] bg-[#f1f4ee] border border-[#cdd5c9] text-center space-y-3.5 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#cdd5c9] text-xs font-bold text-[#172d25]">
            <MessageSquare className="w-3.5 h-3.5 text-[#173f32]" />
            <span>{lang === 'en' ? 'Direct Youth Coordinator Access' : 'நேரடி தன்னார்வலர் உதவி'}</span>
          </div>

          <h4 className="font-extrabold text-base sm:text-lg md:text-xl text-[#172d25] font-display">
            {lang === 'en' ? 'Have a different question or want to collaborate?' : 'வேறு கேள்விகள் உள்ளதா அல்லது இணைந்து பணியாற்ற விரும்புகிறீர்களா?'}
          </h4>

          <p className="text-xs sm:text-sm text-[#526158] max-w-lg mx-auto leading-relaxed">
            {lang === 'en'
              ? 'Our youth volunteer coordinators are always ready to speak with compassionate citizens, schools, college NSS units, and community leaders.'
              : 'எங்கள் தன்னார்வலர் குழுவை நேரடியாக வாட்ஸ்அப் அல்லது தொலைபேசியில் தொடர்பு கொள்ளலாம்.'}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenVolunteerModal}
              className="btn-care-primary cursor-pointer text-xs sm:text-sm py-3 px-6 w-full sm:w-auto justify-center"
            >
              <span>{lang === 'en' ? 'Talk to a Volunteer' : 'தன்னார்வலரிடம் பேச'}</span>
              <div className="btn-care-icon">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
            <a
              href="#contact"
              className="btn-care-secondary text-xs sm:text-sm py-3 px-6 w-full sm:w-auto justify-center text-center"
            >
              <span>{lang === 'en' ? 'View Contact Info' : 'தொடர்பு முகவரி'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
