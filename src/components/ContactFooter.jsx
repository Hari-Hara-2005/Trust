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
    <footer id="contact" className="bg-[#120f38] text-white pt-16 pb-10 border-t border-indigo-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form & Trust Info Grid */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-indigo-900/60">
          
          {/* Left Column: Trust Info & Hubs */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full bg-white p-1 shadow-lg shrink-0">
                <img 
                  src="/sevai-logo.png" 
                  alt="Sevai Kalanjiyam Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white font-display">
                  SEVAI KALANJIYAM
                </h3>
                <p className="text-sm font-bold text-[#ea580c] tamil-title">
                  சேவை களஞ்சியம் சமூக நல அறக்கட்டளை
                </p>
                <p className="text-[11px] text-slate-400">
                  Registered Social Welfare Trust • Founded 2010 • Chennai
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {lang === 'en'
                ? "Dedicated to transforming community compassion into lasting change without administrative overhead. Operating with beneficiary dignity as our supreme guide."
                : "பசியால் வாடும் ஒருவருக்கு உணவளிப்பதும், கல்விக்கு உதவுவதும் நமது கடமை. எவ்வித இடைத்தரகர்களுமின்றி தூய இளைஞர் தன்னார்வத்தால் இயங்கும் மக்கள் இயக்கம்."}
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-[#ea580c] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">Headquarters & Volunteer Operations Hub:</strong>
                  <span className="text-slate-300 text-xs leading-relaxed">
                    Chennai, Tamil Nadu - 600 001, India (Coordinating drives across Chennai, Chengalpattu, Kanchipuram & Tiruvallur)
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">Surplus Food Alert Line:</span>
                    <strong className="text-white text-xs">+91 94440 00000</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">Blood Helpline (24/7):</span>
                    <strong className="text-white text-xs">+91 94441 23456</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Email for Partnerships & Volunteering:</span>
                  <strong className="text-white text-xs">contact@sevaikalanjiyam.org</strong>
                </div>
              </div>
            </div>

            {/* Quote badge */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs italic font-medium tamil-title">
              "வாடிய பயிரைக் கண்டபோதெல்லாம் வாடினேன் • பசிப்பிணி தீர்த்தல் தலையாய கடமை"
            </div>

          </div>

          {/* Right Column: Interactive Message Box */}
          <div className="lg:col-span-6 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10">
            <h4 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <Send className="w-4 h-4 text-[#ea580c]" />
              <span>{lang === 'en' ? 'Send a Message to Youth Coordinators' : 'எங்களை தொடர்பு கொள்ள'}</span>
            </h4>
            <p className="text-xs text-slate-300 mb-5">
              {lang === 'en'
                ? 'Looking to conduct an education kit drive, tree plantation, or sponsor food in your area?'
                : 'உங்கள் பகுதியில் மரக்கன்று நடவோ, கல்வி உபகரணங்கள் வழங்கவோ விரும்பினால் தகவல் அனுப்பவும்.'}
            </p>

            {formSent ? (
              <div className="p-6 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="font-bold text-white text-sm">Message Sent Successfully!</h5>
                <p className="text-xs text-emerald-200">
                  Thank you! Our volunteer coordinator will respond to your phone/email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="WhatsApp Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Interest / Purpose</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl bg-[#1d195c] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
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
                  <label className="block text-[11px] font-bold text-slate-300 mb-1">Your Message *</label>
                  <textarea 
                    rows="3"
                    required
                    placeholder="Share brief details of your request or how you'd like to collaborate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#ea580c] to-[#d91b5c] hover:from-[#c2410c] hover:to-[#be123c] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Team</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* 5 Wings Quick Access in Footer */}
        <div className="py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 border-b border-indigo-900/60 text-xs">
          <div 
            onClick={() => onSelectWing('kalvi')}
            className="flex items-center gap-2 text-slate-300 hover:text-blue-400 cursor-pointer transition-colors"
          >
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Kalvi (கல்வி களஞ்சியம்)</span>
          </div>

          <div 
            onClick={() => onSelectWing('pasumai')}
            className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 cursor-pointer transition-colors"
          >
            <Trees className="w-4 h-4 text-emerald-400" />
            <span>Pasumai (பசுமை களஞ்சியம்)</span>
          </div>

          <div 
            onClick={() => onSelectWing('unavu')}
            className="flex items-center gap-2 text-slate-300 hover:text-amber-400 cursor-pointer transition-colors"
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-400" />
            <span>Unavu (உணவு களஞ்சியம்)</span>
          </div>

          <div 
            onClick={() => onSelectWing('tugil')}
            className="flex items-center gap-2 text-slate-300 hover:text-pink-400 cursor-pointer transition-colors"
          >
            <Shirt className="w-4 h-4 text-pink-400" />
            <span>Tugil (துகில் களஞ்சியம்)</span>
          </div>

          <div 
            onClick={() => onSelectWing('maruthuvam')}
            className="flex items-center gap-2 text-slate-300 hover:text-teal-400 cursor-pointer transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-teal-400" />
            <span>Maruthuvam (மருத்துவம்)</span>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left space-y-0.5">
            <p>© 2010 – 2026 Sevai Kalanjiyam (சேவை களஞ்சியம்) Social Welfare Trust.</p>
            <p className="text-[11px] text-slate-500">
              100% Volunteer-Led Non-Profit Organization • Chennai, Tamil Nadu • All Rights Reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

