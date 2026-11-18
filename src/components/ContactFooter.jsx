import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  Send, 
  ShieldCheck, 
  Clock, 
  CheckCircle, 
  ArrowUp, 
  ArrowRight,
  GraduationCap, 
  Trees, 
  UtensilsCrossed, 
  Shirt, 
  Stethoscope 
} from 'lucide-react';

export default function ContactFooter({ lang, onSelectWing, onOpenSupportModal }) {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry / Collaboration',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry / Collaboration', message: '' });
    }, 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#172d25] text-white pt-20 pb-12 border-t border-[#173f32] relative overflow-hidden scroll-mt-28">
      
      {/* Decorative ambient spots */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ebc766]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#173f32]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Pre-Footer Banner in Careunity Style */}
        <div className="mb-12 sm:mb-16 pb-8 sm:pb-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6" data-aos="fade-up">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#ebc766] text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
              <span>/ {lang === 'en' ? 'STAY CLOSE TO THE WORK' : 'மக்கள் பணியில் இணைந்திருங்கள்'} /</span>
            </div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white leading-snug">
              {lang === 'en' ? 'Direct grassroots help. Zero bureaucracy.' : 'நேரடி மக்கள் சேவை. இடைத்தரகர்கள் இல்லாத இயக்கம்.'}
            </h2>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenSupportModal()}
              className="btn-care-gold text-xs sm:text-sm py-3 px-6 cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>{lang === 'en' ? 'Support a Cause' : 'பங்களிக்க'}</span>
              <div className="btn-care-icon">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Contact Form & Trust Info Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-14 border-b border-white/10">
          
          {/* Left Column: Trust Info & Hubs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6" data-aos="fade-right">
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white p-1 shadow-lg shrink-0">
                <img 
                  src="/sevai-logo.png" 
                  alt="Sevai Kalanjiyam Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-black tracking-tight text-white font-display">
                  SEVAI KALANJIYAM
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#ebc766] font-tamil">
                  சேவை களஞ்சியம் சமூக நல அறக்கட்டளை
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300 font-medium">
                  Registered Social Welfare Trust • Founded 2010 • Chennai
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {lang === 'en'
                ? "Dedicated to transforming community compassion into lasting change without administrative overhead. Operating with beneficiary dignity as our supreme guide across education, green cover, food security, clothing, and health."
                : "பசியால் வாடும் ஒருவருக்கு உணவளிப்பதும், கல்விக்கு உதவுவதும் நமது கடமை. எவ்வித இடைத்தரகர்களுமின்றி தூய இளைஞர் தன்னார்வத்தால் இயங்கும் மக்கள் இயக்கம்."}
            </p>

            {/* Direct Contact Cards in Careunity Style */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#173f32] flex items-center justify-center shrink-0 mt-0.5 text-[#ebc766]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-bold text-xs sm:text-sm font-display">
                    Headquarters & Volunteer Operations Hub:
                  </strong>
                  <span className="text-slate-300 text-xs leading-relaxed block mt-1">
                    Chennai, Tamil Nadu - 600 001, India (Coordinating drives across Chennai, Chengalpattu, Kanchipuram & Tiruvallur)
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-emerald-900/60 flex items-center justify-center shrink-0 text-emerald-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Surplus Food Alert Line:</span>
                    <strong className="text-white text-xs sm:text-sm font-display">+91 94440 00000</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-rose-900/60 flex items-center justify-center shrink-0 text-rose-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Blood Helpline (24/7):</span>
                    <strong className="text-white text-xs sm:text-sm font-display">+91 94441 23456</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#ebc766]/20 flex items-center justify-center shrink-0 text-[#ebc766]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Email for Partnerships & Volunteering:</span>
                  <strong className="text-white text-xs sm:text-sm font-display">contact@sevaikalanjiyam.org</strong>
                </div>
              </div>
            </div>

            {/* Tamil Quote badge */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#ebc766]/10 border border-[#ebc766]/25 text-[#ebc766] text-xs sm:text-sm italic font-bold font-tamil leading-relaxed">
              "வாடிய பயிரைக் கண்டபோதெல்லாம் வாடினேன் • பசிப்பிணி தீர்த்தல் தலையாய கடமை"
            </div>

          </div>

          {/* Right Column: Interactive Message Box (Careunity Timber Green Box) */}
          <div className="lg:col-span-6 bg-white/5 backdrop-blur-md p-5 sm:p-8 rounded-[24px] sm:rounded-[28px] border border-white/10" data-aos="fade-left">
            <h4 className="text-base sm:text-xl font-extrabold text-white mb-1.5 flex items-center gap-2 font-display">
              <Send className="w-4 h-4 text-[#ebc766]" />
              <span>{lang === 'en' ? 'Send a Message to Youth Coordinators' : 'எங்களை தொடர்பு கொள்ள'}</span>
            </h4>
            <p className="text-xs text-slate-300 mb-4 sm:mb-5 leading-relaxed">
              {lang === 'en'
                ? 'Looking to conduct an education kit drive, tree plantation, or sponsor food in your area?'
                : 'உங்கள் பகுதியில் மரக்கன்று நடவோ, கல்வி உபகரணங்கள் வழங்கவோ விரும்பினால் தகவல் அனுப்பவும்.'}
            </p>

            {formSent ? (
              <div className="p-6 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h5 className="font-extrabold text-white text-base font-display">Message Sent Successfully!</h5>
                <p className="text-xs text-slate-200">
                  Thank you! Our volunteer coordinator will respond to your phone/email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-[#ebc766] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="WhatsApp Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-[#ebc766] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-[#ebc766] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Interest / Purpose</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl bg-[#13261f] border border-white/15 text-white focus:outline-none focus:border-[#ebc766] transition-colors"
                  >
                    <option>Volunteer with a Wing</option>
                    <option>Sponsor Study Kits (Kalvi Kalanjiyam)</option>
                    <option>Plant Trees in Our School / Community (Pasumai)</option>
                    <option>Conduct Free Health or Blood Camp (Maruthuvam)</option>
                    <option>Wedding Surplus Food Tie-up (Unavu)</option>
                    <option>Clothing / Blanket Donation (Tugil)</option>
                    <option>General Support / CSR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Your Message *</label>
                  <textarea 
                    rows="3"
                    required
                    placeholder="Share brief details of your request or how you'd like to collaborate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-[#ebc766] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#ebc766] hover:bg-[#d8b555] text-[#172d25] font-extrabold text-xs sm:text-sm rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 font-display"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Team</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 5 Wings Quick Access in Careunity Pill Style (Adaptive 2-col + Span on mobile) */}
        <div className="py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 border-b border-white/10 text-xs sm:text-sm font-semibold">
          <div 
            onClick={() => onSelectWing('kalvi')}
            className="flex items-center gap-2 p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-[#ebc766] hover:border-[#ebc766]/50 cursor-pointer transition-colors"
          >
            <GraduationCap className="w-4 h-4 text-[#ebc766] shrink-0" />
            <span className="truncate">Kalvi (கல்வி)</span>
          </div>

          <div 
            onClick={() => onSelectWing('pasumai')}
            className="flex items-center gap-2 p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-emerald-300 hover:border-emerald-300/50 cursor-pointer transition-colors"
          >
            <Trees className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">Pasumai (பசுமை)</span>
          </div>

          <div 
            onClick={() => onSelectWing('unavu')}
            className="flex items-center gap-2 p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-amber-300 hover:border-amber-300/50 cursor-pointer transition-colors"
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate">Unavu (உணவு)</span>
          </div>

          <div 
            onClick={() => onSelectWing('tugil')}
            className="flex items-center gap-2 p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-pink-300 hover:border-pink-300/50 cursor-pointer transition-colors"
          >
            <Shirt className="w-4 h-4 text-pink-400 shrink-0" />
            <span className="truncate">Tugil (துகில்)</span>
          </div>

          <div 
            onClick={() => onSelectWing('maruthuvam')}
            className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-start gap-2 p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-teal-300 hover:border-teal-300/50 cursor-pointer transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-teal-400 shrink-0" />
            <span className="truncate">Maruthuvam (மருத்துவம்)</span>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="font-semibold text-slate-300">© 2010 – 2026 Sevai Kalanjiyam (சேவை களஞ்சியம்) Social Welfare Trust.</p>
            <p className="text-slate-400">
              100% Volunteer-Led Non-Profit Organization • Chennai, Tamil Nadu • All Rights Reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs font-bold font-display"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
