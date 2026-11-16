import React, { useState } from 'react';
import { X, Utensils, MapPin, Clock, Phone, AlertCircle, CheckCircle } from 'lucide-react';

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
    setTimeout(() => {
      // auto close or keep open with success screen
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200">
                Unavu Kalanjiyam • Rapid Response
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                {lang === 'en' ? 'Surplus Food Rescue Alert' : 'உபரி உணவு மீட்பு தகவல்'}
              </h3>
            </div>
          </div>
          <p className="text-xs text-amber-100 mt-2">
            {lang === 'en'
              ? 'Got untouched, hygienic excess food from weddings or functions in Chennai? Alert our youth volunteer network.'
              : 'திருமணம் மற்றும் குடும்ப விழாக்களில் மீதமான உணவை வீணாக்காமல் ஏழை எளியோரின் பசி தீர்க்க உதவுங்கள்.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">
                {lang === 'en' ? 'Food Rescue Alert Dispatched!' : 'தகவல் பெறப்பட்டது!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                {lang === 'en'
                  ? 'Our Chennai volunteer pickup squad has received your alert. A nearby volunteer will call you within 15 minutes to coordinate collection and transport to the closest shelter.'
                  : 'எங்கள் சென்னை தன்னார்வலர் குழுவிற்கு தகவல் அனுப்பப்பட்டுள்ளது. அடுத்த 15 நிமிடங்களில் உங்களைத் தொடர்புகொண்டு உணவு சேகரிக்கப்படும்.'}
              </p>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-semibold">
                Emergency Hotline: +91 94440 00000 / 044-2456-7890
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 bg-[#18144b] text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Please ensure food is untouched, fresh, and properly covered. Minimum quantity: 25+ meal portions within Greater Chennai limits.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senthil Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Venue / Location in Chennai *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sri Krishna Mahal, T. Nagar / Tambaram"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Estimated Portions
                  </label>
                  <select
                    value={formData.approxPortions}
                    onChange={(e) => setFormData({ ...formData, approxPortions: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option>25 - 50 Portions</option>
                    <option>50 - 100 Portions</option>
                    <option>100 - 250 Portions</option>
                    <option>250+ Portions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Deadline / Time *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Before 3:30 PM today"
                    value={formData.availableUntil}
                    onChange={(e) => setFormData({ ...formData, availableUntil: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Food Details / Notes
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Sambar rice, curd rice, poriyal, sweets, packed in clean vessels."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                {lang === 'en' ? 'Submit Emergency Food Alert' : 'உணவு மீட்பு குழுவை அழைக்க'}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

