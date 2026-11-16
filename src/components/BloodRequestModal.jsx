import React, { useState } from 'react';
import { X, Droplet, Heart, Phone, Hospital, UserCheck, CheckCircle, ArrowRight } from 'lucide-react';

export default function BloodRequestModal({ isOpen, onClose, lang }) {
  const [tab, setTab] = useState('request'); // 'request' or 'register'
  const [submitted, setSubmitted] = useState(false);

  const [requestForm, setRequestForm] = useState({
    patientName: '',
    bloodGroup: 'O+ Positive',
    unitsRequired: '2 Units',
    hospitalName: 'Rajiv Gandhi Govt General Hospital, Chennai',
    attenderPhone: '',
    urgencyTime: 'Immediate / Within 3 Hours',
  });

  const [donorForm, setDonorForm] = useState({
    donorName: '',
    bloodGroup: 'O+ Positive',
    phone: '',
    area: 'Anna Nagar / Central Chennai',
    lastDonated: 'More than 3 months ago / First time',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-[28px] shadow-2xl border border-[#cdd5c9] overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#172d25] text-white p-7 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#ebc766] text-[#172d25] flex items-center justify-center shrink-0">
              <Droplet className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ebc766]">
                / MARUTHUVAM KALANJIYAM • 24/7 HELPLINE /
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white mt-0.5">
                {lang === 'en' ? 'Emergency Blood Support' : 'அவசர குருதிக்கொடை உதவி'}
              </h3>
            </div>
          </div>

          {/* Toggle between Request & Register */}
          <div className="flex items-center gap-2 mt-5 bg-white/10 p-1.5 rounded-full border border-white/15">
            <button
              onClick={() => { setTab('request'); setSubmitted(false); }}
              className={`flex-1 py-2 text-xs font-extrabold rounded-full transition-all cursor-pointer font-display ${
                tab === 'request' ? 'bg-[#ebc766] text-[#172d25] shadow-xs' : 'text-white/80 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'Request Blood' : 'ரத்தம் தேவை'}
            </button>
            <button
              onClick={() => { setTab('register'); setSubmitted(false); }}
              className={`flex-1 py-2 text-xs font-extrabold rounded-full transition-all cursor-pointer font-display ${
                tab === 'register' ? 'bg-[#ebc766] text-[#172d25] shadow-xs' : 'text-white/80 hover:text-white'
              }`}
            >
              {lang === 'en' ? 'Register as Donor' : 'கொடையாளராக இணைய'}
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-7">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#173f32] flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#172d25] font-display">
                {tab === 'request' ? 'Emergency Blood Request Broadcasted!' : 'Registered to Youth Donor Network!'}
              </h4>
              <p className="text-sm text-[#526158] max-w-sm mx-auto leading-relaxed">
                {tab === 'request'
                  ? 'Our Chennai volunteer coordinators have alerted registered matching donors across nearby areas. A coordinator will call you immediately.'
                  : 'Thank you for stepping forward! When a matching patient in Chennai government hospitals requires your blood group, we will alert you via WhatsApp/Call.'}
              </p>
              <div className="p-4 bg-[#f1f4ee] rounded-2xl border border-[#cdd5c9] text-xs sm:text-sm text-[#172d25] font-bold">
                Direct Emergency Contact: +91 94441 23456 (24/7 Volunteers)
              </div>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-2 px-8 py-3 bg-[#172d25] text-white font-extrabold text-sm rounded-full cursor-pointer hover:bg-[#173f32] transition-colors"
              >
                Close
              </button>
            </div>
          ) : tab === 'request' ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Patient Name"
                    value={requestForm.patientName}
                    onChange={(e) => setRequestForm({ ...requestForm, patientName: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">
                    Required Blood Group *
                  </label>
                  <select
                    value={requestForm.bloodGroup}
                    onChange={(e) => setRequestForm({ ...requestForm, bloodGroup: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-white"
                  >
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Rare / Bombay Group'].map(bg => (
                      <option key={bg}>{bg}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#172d25] mb-1">
                  Hospital Name & Location in Chennai *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Stanley Hospital / Rajiv Gandhi GH / Kilpauk"
                  value={requestForm.hospitalName}
                  onChange={(e) => setRequestForm({ ...requestForm, hospitalName: e.target.value })}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">
                    Units Required
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2 Units"
                    value={requestForm.unitsRequired}
                    onChange={(e) => setRequestForm({ ...requestForm, unitsRequired: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">
                    Attender Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={requestForm.attenderPhone}
                    onChange={(e) => setRequestForm({ ...requestForm, attenderPhone: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#172d25] hover:bg-[#173f32] text-white font-extrabold text-sm rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 font-display"
              >
                <span>Broadcast Urgent Blood Request</span>
                <ArrowRight className="w-4 h-4 text-[#ebc766]" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="p-3 bg-[#f1f4ee] border border-[#cdd5c9] rounded-2xl text-xs text-[#526158]">
                Join 600+ youth blood donors across Chennai ready to respond during critical hospital emergencies.
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={donorForm.donorName}
                    onChange={(e) => setDonorForm({ ...donorForm, donorName: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">Blood Group *</label>
                  <select
                    value={donorForm.bloodGroup}
                    onChange={(e) => setDonorForm({ ...donorForm, bloodGroup: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-white"
                  >
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Rare / Bombay'].map(bg => (
                      <option key={bg}>{bg}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">Phone (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={donorForm.phone}
                    onChange={(e) => setDonorForm({ ...donorForm, phone: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172d25] mb-1">Area in Chennai</label>
                  <input
                    type="text"
                    placeholder="e.g. Velachery / Adyar / Tambaram"
                    value={donorForm.area}
                    onChange={(e) => setDonorForm({ ...donorForm, area: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#ebc766] hover:bg-[#d8b555] text-[#172d25] font-extrabold text-sm rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 font-display"
              >
                <span>Register as Standby Blood Donor</span>
                <ArrowRight className="w-4 h-4 text-[#172d25]" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
