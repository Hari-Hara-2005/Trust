import React, { useState } from 'react';
import { X, Droplet, Heart, Phone, Hospital, UserCheck, CheckCircle } from 'lucide-react';

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
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-200">
                Maruthuvam Kalanjiyam • 24/7 Blood Network
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                {lang === 'en' ? 'Emergency Blood Helpline' : 'அவசர குருதிக்கொடை உதவி'}
              </h3>
            </div>
          </div>

          {/* Toggle between Request & Register */}
          <div className="flex items-center gap-2 mt-4 bg-black/20 p-1 rounded-xl">
            <button
              onClick={() => { setTab('request'); setSubmitted(false); }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                tab === 'request' ? 'bg-white text-rose-700 shadow-xs' : 'text-white/80 hover:text-white'
              }`}
            >
              {lang === 'en' ? '🚨 Request Blood' : '🚨 ரத்தம் தேவை'}
            </button>
            <button
              onClick={() => { setTab('register'); setSubmitted(false); }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                tab === 'register' ? 'bg-white text-rose-700 shadow-xs' : 'text-white/80 hover:text-white'
              }`}
            >
              {lang === 'en' ? '❤️ Register as Donor' : '❤️ கொடையாளராக இணைய'}
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">
                {tab === 'request' ? 'Emergency Blood Request Broadcasted!' : 'Registered to Youth Donor Network!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                {tab === 'request'
                  ? 'Our Chennai volunteer coordinators have alerted registered matching donors across nearby areas. A coordinator will call you immediately.'
                  : 'Thank you for stepping forward! When a matching patient in Chennai government hospitals requires your blood group, we will alert you via WhatsApp/Call.'}
              </p>
              <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-900 font-semibold">
                Direct Emergency Contact: +91 94441 23456 (24/7 Volunteers)
              </div>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-3 px-6 py-2.5 bg-[#18144b] text-white font-bold text-xs rounded-xl shadow-xs"
              >
                Close
              </button>
            </div>
          ) : tab === 'request' ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Patient Name"
                    value={requestForm.patientName}
                    onChange={(e) => setRequestForm({ ...requestForm, patientName: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Required Blood Group *
                  </label>
                  <select
                    value={requestForm.bloodGroup}
                    onChange={(e) => setRequestForm({ ...requestForm, bloodGroup: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                  >
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Rare / Bombay Group'].map(bg => (
                      <option key={bg}>{bg}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Hospital Name & Location in Chennai *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Stanley Hospital / Rajiv Gandhi GH / Kilpauk"
                  value={requestForm.hospitalName}
                  onChange={(e) => setRequestForm({ ...requestForm, hospitalName: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Units Required
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2 Units"
                    value={requestForm.unitsRequired}
                    onChange={(e) => setRequestForm({ ...requestForm, unitsRequired: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Attender Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 00000"
                    value={requestForm.attenderPhone}
                    onChange={(e) => setRequestForm({ ...requestForm, attenderPhone: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                Broadcast Urgent Blood Request
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="p-2.5 bg-rose-50 border border-rose-100 rounded-xl text-xs text-rose-800">
                Join 600+ youth blood donors across Chennai ready to respond during critical hospital emergencies.
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={donorForm.donorName}
                    onChange={(e) => setDonorForm({ ...donorForm, donorName: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Blood Group *</label>
                  <select
                    value={donorForm.bloodGroup}
                    onChange={(e) => setDonorForm({ ...donorForm, bloodGroup: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                  >
                    {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Rare / Bombay'].map(bg => (
                      <option key={bg}>{bg}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={donorForm.phone}
                    onChange={(e) => setDonorForm({ ...donorForm, phone: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Area in Chennai</label>
                  <input
                    type="text"
                    placeholder="e.g. Velachery / Adyar / Tambaram"
                    value={donorForm.area}
                    onChange={(e) => setDonorForm({ ...donorForm, area: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                Register as Standby Blood Donor
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

