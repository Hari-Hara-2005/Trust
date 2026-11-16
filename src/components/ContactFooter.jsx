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
    <footer id="contact" className="bg-[#100c31] text-white pt-20 pb-12 border-t border-indigo-950 relative overflow-hidden">
      
      {/* Decorative ambient spots */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Contact Form & Trust Info Grid */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-indigo-900/60">
          
          {/* Left Column: Trust Info & Hubs with AOS */}
          <div className="lg:col-span-6 space-y-7" data-aos="fade-right">
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg shrink-0">
                <img 
                  src="/sevai-logo.png" 
                  alt="Sevai Kalanjiyam Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display">
                  SEVAI KALANJIYAM
                </h3>
                <p className="text-base sm:text-lg font-bold text-[#ea580c] tamil-title">
                  சேவை களஞ்சியம் சமூக நல அறக்கட்டளை
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  Registered Social Welfare Trust • Founded 2010 • Chennai
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              {lang === 'en'
                ? "Dedicated to transforming community compassion into lasting change without administrative overhead. Operating with beneficiary dignity as our supreme guide."
                : "பசியால் வாடும் ஒருவருக்கு உணவளிப்பதும், கல்விக்கு உதவுவதும் நமது கடமை. எவ்வித இடைத்தரகர்களுமின்றி தூய இளைஞர் தன்னார்வத்தால் இயங்கும் மக்கள் இயக்கம்."}
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 text-sm sm:text-base">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <MapPin className="w-5 h-5 text-[#ea580c] shrink-0 mt-1" />
                <div>
                  <strong className="block text-white font-bold text-sm sm:text-base">Headquarters & Volunteer Operations Hub:</strong>
                  <span className="text-slate-300 text-xs sm:text-sm leading-relaxed block mt-0.5">
                    Chennai, Tamil Nadu - 600 001, India (Coordinating drives across Chennai, Chengalpattu, Kanchipuram & Tiruvallur)
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Surplus Food Alert Line:</span>
                    <strong className="text-white text-sm sm:text-base">+91 94440 00000</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-rose-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Blood Helpline (24/7):</span>
                    <strong className="text-white text-sm sm:text-base">+91 94441 23456</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Email for Partnerships & Volunteering:</span>
                  <strong className="text-white text-sm sm:text-base">contact@sevaikalanjiyam.org</strong>
                </div>
              </div>
            </div>

            {/* Tamil Quote badge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-sm sm:text-base italic font-bold tamil-title leading-relaxed">
              "வாடிய பயிரைக் கண்டபோதெல்லாம் வாடினேன் • பசிப்பிணி தீர்த்தல் தலையாய கடமை"
            </div>

          </div>

          {/* Right Column: Interactive Message Box with AOS */}
          <div className="lg:col-span-6 bg-white/5 backdrop-blur-md p-7 sm:p-9 rounded-3xl border border-white/10" data-aos="fade-left">
            <h4 className="text-xl sm:text-2xl font-black text-white mb-1.5 flex items-center gap-2.5">
              <Send className="w-5 h-5 text-[#ea580c]" />
              <span>{lang === 'en' ? 'Send a Message to Youth Coordinators' : 'எங்களை தொடர்பு கொள்ள'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 font-medium">
              {lang === 'en'
                ? 'Looking to conduct an education kit drive, tree plantation, or sponsor food in your area?'
                : 'உங்கள் பகுதியில் மரக்கன்று நடவோ, கல்வி உபகரணங்கள் வழங்கவோ விரும்பினால் தகவல் அனுப்பவும்.'}
            </p>

            {formSent ? (
              <div className="p-7 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h5 className="font-bold text-white text-base sm:text-lg">Message Sent Successfully!</h5>
                <p className="text-sm text-emerald-200">
                  Thank you! Our volunteer coordinator will respond to your phone/email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-300 mb-1.5">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm p-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-300 mb-1.5">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="WhatsApp Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm p-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-300 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-sm p-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-300 mb-1.5">Interest / Purpose</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-sm p-3 rounded-2xl bg-[#141042] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
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
                  <label className="block text-xs sm:text-sm font-bold text-slate-300 mb-1.5">Your Message *</label>
                  <textarea 
                    rows="3"
                    required
                    placeholder="Share brief details of your request or how you'd like to collaborate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm p-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#ea580c] to-[#d91b5c] hover:from-[#c2410c] hover:to-[#be123c] text-white font-bold text-sm sm:text-base rounded-2xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Team</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 5 Wings Quick Access in Footer */}
        <div className="py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 border-b border-indigo-900/60 text-sm font-semibold">
          <div 
            onClick={() => onSelectWing('kalvi')}
            className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 cursor-pointer transition-colors"
          >
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span>Kalvi (கல்வி களஞ்சியம்)</span>
          </div>

          <div 
            onClick={() => onSelectWing('pasumai')}
            className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 cursor-pointer transition-colors"
          >
            <Trees className="w-5 h-5 text-emerald-400" />
            <span>Pasumai (பசுமை களஞ்சியம்)</span>
          </div>

          <div 
            onClick={() => onSelectWing('unavu')}
            className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 cursor-pointer transition-colors"
          >
            <UtensilsCrossed className="w-5 h-5 text-amber-400" />
            <span>Unavu (உணவு களஞ்சியம்)</span>
          </div>

          <div 
            onClick={() => onSelectWing('tugil')}
            className="flex items-center gap-2.5 text-slate-300 hover:text-pink-400 cursor-pointer transition-colors"
          >
            <Shirt className="w-5 h-5 text-pink-400" />
            <span>Tugil (துகில் களஞ்சியம்)</span>
          </div>

          <div 
            onClick={() => onSelectWing('maruthuvam')}
            className="flex items-center gap-2.5 text-slate-300 hover:text-teal-400 cursor-pointer transition-colors"
          >
            <Stethoscope className="w-5 h-5 text-teal-400" />
            <span>Maruthuvam (மருத்துவம்)</span>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div className="text-center sm:text-left space-y-1">
            <p className="font-medium">© 2010 – 2026 Sevai Kalanjiyam (சேவை களஞ்சியம்) Social Welfare Trust.</p>
            <p className="text-slate-500">
              100% Volunteer-Led Non-Profit Organization • Chennai, Tamil Nadu • All Rights Reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs sm:text-sm font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
