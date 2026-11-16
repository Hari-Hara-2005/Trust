import React, { useState } from 'react';
import { X, Users, CheckCircle, Sparkles, MapPin, Heart } from 'lucide-react';
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
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#18144b] via-[#24176d] to-[#401977] text-white p-6 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                100% Volunteer-Led Organization
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                {lang === 'en' ? 'Join Sevai Kalanjiyam Youth Collective' : 'சேவை களஞ்சியத்தில் இணையுங்கள்'}
              </h3>
            </div>
          </div>
          <p className="text-xs text-indigo-100 mt-2">
            {lang === 'en'
              ? 'No administrative salaries. No bureaucracy. Just direct, hands-on community service with dignity.'
              : 'எந்தவித ஊதிய எதிர்பார்ப்பும் இன்றி, சக மனிதர்களின் சுயமரியாதையைக் காக்கும் தூய தன்னார்வப் பணி.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">
                {lang === 'en' ? 'Welcome to the Family of Volunteers!' : 'நல்வரவு! பதிவு வெற்றிகரமாக முடிந்தது!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {lang === 'en'
                  ? 'Thank you for stepping forward! A volunteer coordinator will add you to our orientation WhatsApp group and invite you to our upcoming weekend activity.'
                  : 'உங்களின் சமூக அக்கறைக்கு நன்றி! எங்களின் தன்னார்வலர் ஒருங்கிணைப்பாளர் உங்களை வாட்ஸ்அப் குழுவில் இணைத்து அடுத்த வார களப்பணிக்கு அழைப்பார்.'}
              </p>
              <div className="p-3 bg-indigo-50 text-indigo-900 rounded-xl text-xs font-semibold">
                Upcoming activity: Saturday Evening Study Circle & Sunday Sapling Watering Drive.
              </div>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-4 px-6 py-2.5 bg-[#18144b] text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Raman"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#18144b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#18144b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#18144b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City / Area in Chennai</label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai (Mylapore, Tambaram, etc.)"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#18144b]"
                  />
                </div>
              </div>

              {/* Wing Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Which Wing(s) Would You Like to Contribute To? (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {wingsData.map((wing) => {
                    const isSelected = formData.selectedWings.includes(wing.id);
                    return (
                      <div
                        key={wing.id}
                        onClick={() => toggleWing(wing.id)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all text-xs font-bold ${
                          isSelected 
                            ? 'bg-indigo-50/80 border-[#18144b] text-[#18144b]' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}} // controlled via parent div
                          className="rounded text-[#18144b] focus:ring-0"
                        />
                        <span>{wing.name}</span>
                        <span className="text-[10px] text-slate-400 font-normal">({wing.title})</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Availability</label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#18144b] bg-white"
                  >
                    <option>Weekends (Saturday / Sunday)</option>
                    <option>Weekday Evenings</option>
                    <option>On-Call Emergency (Food / Blood)</option>
                    <option>Remote / Digital Mentorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Background / Profession</label>
                  <select
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#18144b] bg-white"
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
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  How would you like to help? (Special skills, interests)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Interested in teaching mathematics to 10th graders, or helping water saplings on Sundays."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#18144b]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#ea580c] to-[#d91b5c] hover:from-[#c2410c] hover:to-[#be123c] text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                Submit Volunteer Registration
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

