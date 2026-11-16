import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle, Copy, Check, Sparkles } from 'lucide-react';

export default function SupportModal({ isOpen, onClose, lang }) {
  const [copiedField, setCopiedField] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('kit');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [step, setStep] = useState('select'); // 'select' or 'details'

  if (!isOpen) return null;

  const packages = [
    {
      id: 'kit',
      title: 'Puthaka Koodu Study Kit',
      wing: 'Kalvi Kalanjiyam',
      amount: 500,
      desc: '1 Full academic kit: School bag, notebooks, geometry box & writing material for 1 corporation school student.'
    },
    {
      id: 'tree',
      title: 'Native Tree + 2-Yr Care',
      wing: 'Pasumai Kalanjiyam',
      amount: 750,
      desc: '1 Indigenous sapling (Neem/Jamun/Pungai), protective tree guard, scheduled watering & 2-year geo-tagged tracking.'
    },
    {
      id: 'meal',
      title: '30 Wholesome Meals',
      wing: 'Unavu Kalanjiyam',
      amount: 1000,
      desc: 'Fresh, nutritious hot meals served to roadside destitute, pavement dwellers and destitute children.'
    },
    {
      id: 'blanket',
      title: '3 Dignity Winter Blankets',
      wing: 'Tugil Kalanjiyam',
      amount: 1200,
      desc: '3 Heavy warm blankets and rain sheets handed directly to pavement dwellers during monsoons and winter chill.'
    },
    {
      id: 'health',
      title: 'Elder Vision Glasses (5 People)',
      wing: 'Maruthuvam Kalanjiyam',
      amount: 2500,
      desc: 'Free eye diagnostic check-up and prescription spectacles for 5 daily-wage elderly workers.'
    }
  ];

  const currentPkg = packages.find(p => p.id === selectedPackage);
  const finalAmount = customAmount ? customAmount : currentPkg ? currentPkg.amount : 1000;

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#141042] via-[#ea580c] to-[#d91b5c] text-white p-7 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <Heart className="w-7 h-7 fill-white text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-200">
                  100% Direct to Cause
                </span>
                <span className="text-xs bg-emerald-500 text-white font-bold px-2.5 py-0.5 rounded-full">
                  Zero Admin Deductions
                </span>
              </div>
              <h3 className="text-2xl font-black font-display text-white">
                {lang === 'en' ? 'Support Sevai Kalanjiyam' : 'சேவை களஞ்சியத்திற்கு ஆதரவளிக்க'}
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-7 overflow-y-auto">
          {step === 'select' ? (
            <div className="space-y-6">
              
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 text-sm text-amber-950 flex items-center gap-3 font-medium">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>Our Zero Overhead Pledge:</strong> Not a single rupee is diverted to salaries or office rent. 100% of your contribution reaches the ground.
                </span>
              </div>

              {/* Package Selector */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Select a Direct Impact Initiative:
                </label>
                <div className="space-y-3">
                  {packages.map((pkg) => {
                    const isSelected = selectedPackage === pkg.id && !customAmount;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => {
                          setSelectedPackage(pkg.id);
                          setCustomAmount('');
                        }}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                          isSelected
                            ? 'bg-amber-50/50 border-[#ea580c] ring-2 ring-orange-500/20 shadow-xs'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2.5">
                            <span className="text-sm sm:text-base font-bold text-[#141042]">{pkg.title}</span>
                            <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full font-semibold">
                              {pkg.wing}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            {pkg.desc}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-lg sm:text-xl font-black text-[#ea580c] font-display">
                            ₹{pkg.amount}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="pt-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                  Or Enter a Custom Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-slate-500 font-bold text-sm">₹</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount e.g. 5000"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedPackage(null);
                    }}
                    className="w-full text-sm p-3 pl-8 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
                  />
                </div>
              </div>

              <button
                onClick={() => setStep('details')}
                className="w-full py-4 bg-gradient-to-r from-[#ea580c] to-[#d91b5c] hover:from-[#c2410c] hover:to-[#be123c] text-white font-bold text-base rounded-2xl shadow-md transition-all cursor-pointer"
              >
                Proceed with Contribution of ₹{finalAmount}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-sm text-emerald-950 flex items-center justify-between">
                <div>
                  <span className="font-extrabold text-base text-[#141042]">Contribution Amount: ₹{finalAmount}</span>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-0.5 font-medium">
                    {customAmount ? 'Custom Contribution' : currentPkg ? currentPkg.title : 'General Trust Fund'}
                  </p>
                </div>
                <button
                  onClick={() => setStep('select')}
                  className="text-xs sm:text-sm text-[#ea580c] font-bold underline cursor-pointer"
                >
                  Change
                </button>
              </div>

              {/* Bank Details Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3.5">
                <h4 className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Direct Trust Bank Account Transfer (NEFT / RTGS / IMPS)
                </h4>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 block">Account Name</span>
                      <strong className="text-slate-900 text-sm sm:text-base font-bold">SEVAI KALANJIYAM SOCIAL WELFARE TRUST</strong>
                    </div>
                    <button
                      onClick={() => copyToClipboard('SEVAI KALANJIYAM SOCIAL WELFARE TRUST', 'accName')}
                      className="text-slate-500 hover:text-slate-800 p-1.5"
                      title="Copy"
                    >
                      {copiedField === 'accName' ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-200">
                      <div>
                        <span className="text-xs text-slate-500 block">Account Number</span>
                        <strong className="text-slate-900 text-sm sm:text-base font-bold">3894 0001 0023 4567</strong>
                      </div>
                      <button
                        onClick={() => copyToClipboard('3894000100234567', 'accNum')}
                        className="text-slate-500 hover:text-slate-800 p-1.5"
                      >
                        {copiedField === 'accNum' ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-200">
                      <div>
                        <span className="text-xs text-slate-500 block">IFSC Code</span>
                        <strong className="text-slate-900 text-sm sm:text-base font-bold">SBIN0001234</strong>
                      </div>
                      <button
                        onClick={() => copyToClipboard('SBIN0001234', 'ifsc')}
                        className="text-slate-500 hover:text-slate-800 p-1.5"
                      >
                        {copiedField === 'ifsc' ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 block">UPI ID / VPA</span>
                      <strong className="text-slate-900 text-sm sm:text-base font-bold">sevaikalanjiyam@sbi</strong>
                    </div>
                    <button
                      onClick={() => copyToClipboard('sevaikalanjiyam@sbi', 'upi')}
                      className="text-slate-500 hover:text-slate-800 p-1.5"
                    >
                      {copiedField === 'upi' ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Inform volunteers about contribution */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-slate-700">
                  Notify Volunteers for Formal 80G Receipt & Ground Photo Log:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="text-sm p-3 rounded-2xl border border-slate-300"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="text-sm p-3 rounded-2xl border border-slate-300"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setStep('select')}
                  className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  onClick={() => {
                    alert('Thank you for supporting Sevai Kalanjiyam! A volunteer will verify the transaction and send the receipt and beneficiary impact updates to your WhatsApp.');
                    onClose();
                  }}
                  className="px-7 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm sm:text-base rounded-2xl shadow-md cursor-pointer"
                >
                  I Have Completed the Transfer
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
