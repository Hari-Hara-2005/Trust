import React, { useState } from 'react';
import { X, Users, CheckCircle, Sparkles, MapPin, Heart, ArrowRight } from 'lucide-react';
import { wingsData } from '../data/trustData';

export default function VolunteerFormModal({ isOpen, onClose, lang }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Chennai',
    occupation: 'Student / Young Professional',
    selectedWings: ['kalvi', 'pasumai'],
    availability: 'Weekends (Saturday/Sunday)',
    notes: ''
  });

  if (!isOpen) return null;

  const toggleWing = (wingId) => {
    if (formData.selectedWings.includes(wingId)) {
      setFormData({
        ...formData,
        selectedWings: formData.selectedWings.filter(id => id !== wingId)
      });
    } else {
      setFormData({
        ...formData,
        selectedWings: [...formData.selectedWings, wingId]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-[28px] shadow-2xl border border-[#cdd5c9] overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header (Careunity Timber Green) */}
        <div className="bg-[#172d25] text-white p-5 sm:p-7 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 sm:top-5 right-4 sm:right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#ebc766] text-[#172d25] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#ebc766]">
                / 100% VOLUNTEER-LED COLLECTIVE /
              </span>
              <h3 className="text-lg sm:text-2xl font-extrabold font-display text-white mt-0.5 leading-snug">
                {lang === 'en' ? 'Join Sevai Kalanjiyam Youth Collective' : 'சேவை களஞ்சியத்தில் இணையுங்கள்'}
              </h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 sm:mt-2.5 leading-relaxed">
            {lang === 'en'
              ? 'No administrative salaries. No overhead bureaucracy. Just direct, hands-on community service with dignity.'
              : 'எந்தவித ஊதிய எதிர்பார்ப்பும் இன்றி, சக மனிதர்களின் சுயமரியாதையைக் காக்கும் தூய தன்னார்வப் பணி.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto">
          {submitted ? (
            <div className="py-6 sm:py-8 text-center space-y-3.5 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-[#173f32] flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-[#172d25] font-display">
                {lang === 'en' ? 'Welcome to the Family of Volunteers!' : 'நல்வரவு! பதிவு வெற்றிகரமாக முடிந்தது!'}
              </h4>
              <p className="text-xs sm:text-sm text-[#526158] max-w-md mx-auto leading-relaxed">
                {lang === 'en'
                  ? 'Thank you for stepping forward! A volunteer coordinator will add you to our orientation WhatsApp group and invite you to our upcoming weekend activity.'
                  : 'உங்களின் சமூக அக்கறைக்கு நன்றி! எங்களின் தன்னார்வலர் ஒருங்கிணைப்பாளர் உங்களை வாட்ஸ்அப் குழுவில் இணைத்து அடுத்த வார களப்பணிக்கு அழைப்பார்.'}
              </p>
              <div className="p-3.5 sm:p-4 bg-[#f1f4ee] text-[#172d25] rounded-2xl border border-[#cdd5c9] text-xs sm:text-sm font-bold">
                Upcoming activity: Saturday Evening Study Circle & Sunday Sapling Watering Drive.
              </div>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-2 px-8 py-3 bg-[#172d25] text-white font-extrabold text-sm rounded-full cursor-pointer hover:bg-[#173f32] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Raman"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">Phone / WhatsApp *</label>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">City / Area in Chennai</label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai (Mylapore, Tambaram, etc.)"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>
              </div>

              {/* Wing Selection */}
              <div>
                <label className="block text-xs font-bold text-[#172d25] mb-2">
                  Which Wing(s) Would You Like to Contribute To? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {wingsData.map((wing) => {
                    const isSelected = formData.selectedWings.includes(wing.id);
                    return (
                      <div
                        key={wing.id}
                        onClick={() => toggleWing(wing.id)}
                        className={`flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl border cursor-pointer transition-all text-xs sm:text-sm font-bold ${
                          isSelected 
                            ? 'bg-[#172d25] border-[#172d25] text-white' 
                            : 'bg-white border-[#cdd5c9] text-[#172d25] hover:bg-[#f1f4ee]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}}
                          className="rounded text-[#ebc766] focus:ring-0 w-4 h-4 cursor-pointer"
                        />
                        <span>{wing.name}</span>
                        <span className={`text-[11px] sm:text-xs ${isSelected ? 'text-[#ebc766]' : 'text-[#526158]'}`}>({wing.title})</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">Your Availability</label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-white"
                  >
                    <option>Weekends (Saturday / Sunday)</option>
                    <option>Weekday Evenings</option>
                    <option>On-Call Emergency (Food / Blood)</option>
                    <option>Remote / Digital Mentorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">Background / Profession</label>
                  <select
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-white"
                  >
                    <option>College / University Student</option>
                    <option>IT / Software Professional</option>
                    <option>Educator / Teacher</option>
                    <option>Healthcare / Medical Professional</option>
                    <option>Entrepreneur / Self-Employed</option>
                    <option>Other Passionate Citizen</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172d25] mb-1">
                  How would you like to help? (Special skills, interests)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Interested in teaching mathematics to 10th graders, or helping water saplings on Sundays."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#172d25] hover:bg-[#173f32] text-white font-extrabold text-xs sm:text-sm rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 font-display"
              >
                <span>Submit Volunteer Registration</span>
                <ArrowRight className="w-4 h-4 text-[#ebc766]" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
