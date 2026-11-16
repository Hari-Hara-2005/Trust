import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { faqs } from '../data/trustData';

export default function FAQSection({ lang, onOpenVolunteerModal, onOpenSupportModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header with AOS */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-[#ea580c] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'en' ? 'Frequently Asked Questions' : 'அடிக்கடி கேட்கப்படும் கேள்விகள்'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18144b] font-display">
            {lang === 'en' ? 'Clear Answers to Honest Questions' : 'உங்கள் கேள்விகளுக்கான தெளிவான பதில்கள்'}
          </h2>

          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            {lang === 'en'
              ? 'Everything you need to know about our volunteer model, operations, and ethics.'
              : 'எங்கள் தன்னார்வப் பணிகள் மற்றும் வெளிப்படைத்தன்மை குறித்த சந்தேகங்கள்.'}
          </p>
        </div>

        {/* Accordion List with AOS */}
        <div className="space-y-3.5" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-2xs hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-[#18144b] hover:text-[#ea580c] transition-colors cursor-pointer"
                >
                  <span className="pr-4 leading-snug">
                    {lang === 'en' ? faq.q : faq.qTamil}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#ea580c]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-[#faf9f5]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt with AOS */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 p-7 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3"
        >
          <h4 className="font-bold text-base text-[#18144b]">
            {lang === 'en' ? 'Have a different question or want to partner with us?' : 'வேறு கேள்விகள் உள்ளதா அல்லது இணைந்து பணியாற்ற விரும்புகிறீர்களா?'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            {lang === 'en'
              ? 'Our youth coordinators are always happy to speak with compassionate citizens, schools, and community leaders.'
              : 'எங்கள் தன்னார்வலர் குழுவை நேரடியாக வாட்ஸ்அப் அல்லது தொலைபேசியில் தொடர்பு கொள்ளலாம்.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenVolunteerModal}
              className="px-5 py-2.5 bg-[#141042] hover:bg-[#20195e] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs cursor-pointer transition-colors"
            >
              {lang === 'en' ? 'Talk to a Volunteer' : 'தன்னார்வலரிடம் பேச'}
            </button>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-white text-slate-700 hover:text-slate-900 border border-slate-300 font-bold text-xs sm:text-sm rounded-xl cursor-pointer transition-colors"
            >
              {lang === 'en' ? 'View Contact Info' : 'தொடர்பு முகவரி'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
