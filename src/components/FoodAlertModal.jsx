import React, { useState } from 'react';
import { X, Utensils, MapPin, Clock, Phone, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

export default function FoodAlertModal({ isOpen, onClose, lang }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    foodType: 'Cooked Veg Meals (Wedding / Function)',
    approxPortions: '50-100 People',
    availableUntil: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-[28px] shadow-2xl border border-[#cdd5c9] overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Careunity Modal Header */}
        <div className="bg-[#172d25] text-white p-6 sm:p-7 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#ebc766] text-[#172d25] flex items-center justify-center shrink-0">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ebc766]">
                / UNAVU KALANJIYAM • RAPID RESPONSE /
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mt-0.5">
                {lang === 'en' ? 'Surplus Food Rescue Alert' : 'உபரி உணவு மீட்பு தகவல்'}
              </h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
            {lang === 'en'
              ? 'Got untouched, hygienic excess food from weddings or functions in Chennai? Alert our youth volunteer network.'
              : 'திருமணம் மற்றும் குடும்ப விழாக்களில் மீதமான உணவை வீணாக்காமல் ஏழை எளியோரின் பசி தீர்க்க உதவுங்கள்.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#173f32] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#172d25] font-display">
                {lang === 'en' ? 'Food Rescue Alert Dispatched!' : 'தகவல் பெறப்பட்டது!'}
              </h4>
              <p className="text-sm text-[#526158] max-w-sm mx-auto leading-relaxed">
                {lang === 'en'
                  ? 'Our Chennai volunteer pickup squad has received your alert. A nearby volunteer will call you within 15 minutes to coordinate collection and transport to the closest shelter.'
                  : 'எங்கள் சென்னை தன்னார்வலர் குழுவிற்கு தகவல் அனுப்பப்பட்டுள்ளது. அடுத்த 15 நிமிடங்களில் உங்களைத் தொடர்புகொண்டு உணவு சேகரிக்கப்படும்.'}
              </p>
              <div className="p-4 bg-[#f1f4ee] rounded-2xl border border-[#cdd5c9] text-xs sm:text-sm text-[#172d25] font-bold">
                Emergency Hotline: +91 94440 00000 / 044-2456-7890
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-2 px-8 py-3 bg-[#172d25] text-white font-extrabold text-sm rounded-full cursor-pointer hover:bg-[#173f32] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="p-3.5 bg-[#f1f4ee] rounded-2xl border border-[#cdd5c9] flex items-start gap-2.5 text-xs text-[#526158]">
                <AlertCircle className="w-4 h-4 text-[#173f32] shrink-0 mt-0.5" />
                <span>
                  Please ensure food is untouched, fresh, and properly covered. Minimum quantity: 25+ meal portions within Greater Chennai limits.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senthil Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">
                    Phone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172d25] mb-1">
                  Venue / Location in Chennai *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sri Krishna Mahal, T. Nagar / Tambaram"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">
                    Estimated Portions
                  </label>
                  <select
                    value={formData.approxPortions}
                    onChange={(e) => setFormData({ ...formData, approxPortions: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-white"
                  >
                    <option>25 - 50 Portions</option>
                    <option>50 - 100 Portions</option>
                    <option>100 - 250 Portions</option>
                    <option>250+ Portions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">
                    Pickup Deadline / Time *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Before 3:30 PM today"
                    value={formData.availableUntil}
                    onChange={(e) => setFormData({ ...formData, availableUntil: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172d25] mb-1">
                  Food Details / Notes
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Sambar rice, curd rice, poriyal, sweets, packed in clean vessels."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#172d25] hover:bg-[#173f32] text-white font-extrabold text-sm rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 font-display"
              >
                <span>{lang === 'en' ? 'Submit Emergency Food Alert' : 'உணவு மீட்பு குழுவை அழைக்க'}</span>
                <ArrowRight className="w-4 h-4 text-[#ebc766]" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
