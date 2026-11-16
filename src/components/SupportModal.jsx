import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';

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
      <div className="relative w-full max-w-xl bg-white rounded-[28px] shadow-2xl border border-[#cdd5c9] overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header (Careunity Timber Green) */}
        <div className="bg-[#172d25] text-white p-6 sm:p-7 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#ebc766] text-[#172d25] flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 fill-[#172d25]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ebc766]">
                  / 100% DIRECT TO CAUSE /
                </span>
                <span className="text-[10px] bg-[#173f32] border border-[#ebc766]/30 text-[#ebc766] font-bold px-2 py-0.5 rounded-full">
                  Zero Overhead
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-white">
                {lang === 'en' ? 'Support Sevai Kalanjiyam' : 'சேவை களஞ்சியத்திற்கு ஆதரவளிக்க'}
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto">
          {step === 'select' ? (
            <div className="space-y-5">
              
              <div className="p-3.5 bg-[#f1f4ee] rounded-2xl border border-[#cdd5c9] text-xs text-[#526158] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#173f32] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#172d25]">Our Zero Overhead Pledge:</strong> Not a single rupee is diverted to administrative salaries or office rent. 100% of your contribution directly funds grassroots kits, meals, and saplings.
                </span>
              </div>

              {/* Package Selector */}
              <div>
                <label className="block text-xs font-bold text-[#172d25] uppercase tracking-wider mb-2 font-display">
                  Select a Direct Impact Initiative:
                </label>
                <div className="space-y-2.5">
                  {packages.map((pkg) => {
                    const isSelected = selectedPackage === pkg.id && !customAmount;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => {
                          setSelectedPackage(pkg.id);
                          setCustomAmount('');
                        }}
                        className={`p-3.5 sm:p-4 rounded-[20px] border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#f1f4ee] border-[#172d25] shadow-sm'
                            : 'bg-white border-[#cdd5c9] hover:border-[#172d25]/50'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-extrabold text-[#172d25] font-display">{pkg.title}</span>
                            <span className="text-[10px] text-[#526158] bg-white border border-[#cdd5c9] px-2 py-0.5 rounded-full font-semibold">
                              {pkg.wing}
                            </span>
                          </div>
                          <p className="text-xs text-[#526158] leading-relaxed">
                            {pkg.desc}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-base sm:text-lg font-black text-[#172d25] font-display">
                            ₹{pkg.amount}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="pt-1">
                <label className="block text-xs font-bold text-[#172d25] mb-1">
                  Or Enter a Custom Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3 text-[#526158] font-bold text-xs sm:text-sm">₹</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount e.g. 5000"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedPackage(null);
                    }}
                    className="w-full text-xs sm:text-sm p-3 pl-8 rounded-xl border border-[#cdd5c9] focus:outline-none focus:border-[#172d25] bg-[#f1f4ee]/30"
                  />
                </div>
              </div>

              <button
                onClick={() => setStep('details')}
                className="w-full py-3.5 bg-[#172d25] hover:bg-[#173f32] text-white font-extrabold text-sm rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 font-display"
              >
                <span>Proceed with Contribution of ₹{finalAmount}</span>
                <ArrowRight className="w-4 h-4 text-[#ebc766]" />
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="p-4 bg-[#f1f4ee] rounded-2xl border border-[#cdd5c9] text-xs sm:text-sm text-[#172d25] flex items-center justify-between">
                <div>
                  <span className="font-extrabold text-sm sm:text-base text-[#172d25] font-display">Contribution Amount: ₹{finalAmount}</span>
                  <p className="text-xs text-[#526158] mt-0.5">
                    {customAmount ? 'Custom Contribution' : currentPkg ? currentPkg.title : 'General Trust Fund'}
                  </p>
                </div>
                <button
                  onClick={() => setStep('select')}
                  className="text-xs text-[#173f32] font-extrabold underline cursor-pointer hover:text-[#172d25]"
                >
                  Change
                </button>
              </div>

              {/* Bank Details Card */}
              <div className="p-4 rounded-[22px] bg-[#f1f4ee] border border-[#cdd5c9] space-y-3">
                <h4 className="text-xs font-extrabold text-[#172d25] uppercase tracking-wider font-display">
                  Direct Trust Bank Account Transfer (NEFT / RTGS / IMPS)
                </h4>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#cdd5c9]">
                    <div>
                      <span className="text-[10px] text-[#526158] block">Account Name</span>
                      <strong className="text-[#172d25] text-xs sm:text-sm font-bold">SEVAI KALANJIYAM SOCIAL WELFARE TRUST</strong>
                    </div>
                    <button
                      onClick={() => copyToClipboard('SEVAI KALANJIYAM SOCIAL WELFARE TRUST', 'accName')}
                      className="text-slate-500 hover:text-slate-800 p-1 cursor-pointer"
                      title="Copy"
                    >
                      {copiedField === 'accName' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#cdd5c9]">
                      <div>
                        <span className="text-[10px] text-[#526158] block">Account Number</span>
                        <strong className="text-[#172d25] text-xs sm:text-sm font-bold">3894 0001 0023 4567</strong>
                      </div>
                      <button
                        onClick={() => copyToClipboard('3894000100234567', 'accNum')}
                        className="text-slate-500 hover:text-slate-800 p-1 cursor-pointer"
                      >
                        {copiedField === 'accNum' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#cdd5c9]">
                      <div>
                        <span className="text-[10px] text-[#526158] block">IFSC Code</span>
                        <strong className="text-[#172d25] text-xs sm:text-sm font-bold">SBIN0001234</strong>
                      </div>
                      <button
                        onClick={() => copyToClipboard('SBIN0001234', 'ifsc')}
                        className="text-slate-500 hover:text-slate-800 p-1 cursor-pointer"
                      >
                        {copiedField === 'ifsc' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#cdd5c9]">
                    <div>
                      <span className="text-[10px] text-[#526158] block">UPI ID / VPA</span>
                      <strong className="text-[#172d25] text-xs sm:text-sm font-bold">sevaikalanjiyam@sbi</strong>
                    </div>
                    <button
                      onClick={() => copyToClipboard('sevaikalanjiyam@sbi', 'upi')}
                      className="text-slate-500 hover:text-slate-800 p-1 cursor-pointer"
                    >
                      {copiedField === 'upi' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Inform volunteers about contribution */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#172d25]">
                  Notify Volunteers for Formal 80G Receipt & Ground Photo Log:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] bg-[#f1f4ee]/30 focus:outline-none focus:border-[#172d25]"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="text-xs sm:text-sm p-3 rounded-xl border border-[#cdd5c9] bg-[#f1f4ee]/30 focus:outline-none focus:border-[#172d25]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setStep('select')}
                  className="px-4 py-2 text-xs sm:text-sm font-bold text-[#526158] hover:text-[#172d25] cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  onClick={() => {
                    alert('Thank you for supporting Sevai Kalanjiyam! A volunteer will verify the transaction and send the receipt and beneficiary impact updates to your WhatsApp.');
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#172d25] hover:bg-[#173f32] text-white font-extrabold text-xs sm:text-sm rounded-full shadow-md cursor-pointer transition-colors"
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
