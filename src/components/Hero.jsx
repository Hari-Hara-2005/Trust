import React, { useState } from 'react';
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  Trees, 
  UtensilsCrossed, 
  Shirt, 
  Stethoscope,
  MapPin,
  Calendar,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ChevronRight,
  Droplet,
  Check,
  Zap,
  Activity
} from 'lucide-react';
import { trustInfo, liveUpdates } from '../data/trustData';

export default function Hero({ 
  lang, 
  onOpenVolunteerModal, 
  onOpenSupportModal, 
  onOpenFoodModal,
  onOpenBloodModal,
  onSelectWing 
}) {
  const [activeHighlight, setActiveHighlight] = useState('unavu');

  const liveFieldActions = [
    { wing: 'Tugil', text: 'Gifting 120 new festive dresses to rural school children', tag: 'Clothing', color: 'text-pink-600', dot: 'bg-pink-500' },
    { wing: 'Unavu', text: 'Rescued 85 untouched wedding meals in T. Nagar & served at night shelters', tag: 'Food Relief', color: 'text-amber-600', dot: 'bg-amber-500' },
    { wing: 'Pasumai', text: '40 native Neem saplings watered & geotagged along Madhavaram canal', tag: 'Environment', color: 'text-emerald-600', dot: 'bg-emerald-500' },
    { wing: 'Maruthuvam', text: 'Emergency B+ blood donor dispatched to Rajiv Gandhi Govt General Hospital', tag: 'Blood Helpline', color: 'text-rose-600', dot: 'bg-rose-500' },
    { wing: 'Kalvi', text: '350 "Puthaka Koodu" school kits & notebooks packed for primary students', tag: 'Education', color: 'text-blue-600', dot: 'bg-blue-500' }
  ];

  const wingsDataSummary = {
    unavu: {
      id: 'unavu',
      name: 'Unavu Kalanjiyam',
      tamil: 'உணவு களஞ்சியம்',
      count: '25,000+ Meals',
      badge: '90-Min Rescue Network',
      color: '#ea580c',
      bgLight: 'bg-amber-50',
      borderLight: 'border-amber-200',
      textColor: 'text-amber-700',
      desc: 'Daily fresh hot meals for pavement dwellers & real-time surplus wedding food rescue in Chennai.',
      cta: lang === 'en' ? 'Rescue Food 🍲' : 'உணவு மீட்பு 🍲',
      action: onOpenFoodModal
    },
    pasumai: {
      id: 'pasumai',
      name: 'Pasumai Kalanjiyam',
      tamil: 'பசுமை களஞ்சியம்',
      count: '3,800+ Native Trees',
      badge: '92% 2-Yr Geotagged Survival',
      color: '#059669',
      bgLight: 'bg-emerald-50',
      borderLight: 'border-emerald-200',
      textColor: 'text-emerald-700',
      desc: 'Planting indigenous Neem & Jamun saplings with weekly volunteer watering rosters across Chennai.',
      cta: lang === 'en' ? 'Adopt Tree 🌳' : 'மரம் தத்தெடுக்க 🌳',
      action: onOpenSupportModal
    },
    kalvi: {
      id: 'kalvi',
      name: 'Kalvi Kalanjiyam',
      tamil: 'கல்வி களஞ்சியம்',
      count: '1,250+ School Kits',
      badge: 'Zero Dropout Target',
      color: '#2563eb',
      bgLight: 'bg-blue-50',
      borderLight: 'border-blue-200',
      textColor: 'text-blue-700',
      desc: 'Annual school bags, notebooks, geometry sets & mentorship for Corporation school students.',
      cta: lang === 'en' ? 'Sponsor Kit 🎒' : 'கல்வி உதவி 🎒',
      action: onOpenSupportModal
    },
    maruthuvam: {
      id: 'maruthuvam',
      name: 'Maruthuvam Kalanjiyam',
      tamil: 'மருத்துவம் களஞ்சியம்',
      count: '24/7 Blood Line',
      badge: 'Rapid Hospital Dispatch',
      color: '#0d9488',
      bgLight: 'bg-teal-50',
      borderLight: 'border-teal-200',
      textColor: 'text-teal-700',
      desc: 'Immediate voluntary blood donor response for emergency patients across Chennai hospitals.',
      cta: lang === 'en' ? 'Blood Helpline 🩸' : 'குருதிக்கொடை 🩸',
      action: onOpenBloodModal
    },
    tugil: {
      id: 'tugil',
      name: 'Tugil Kalanjiyam',
      tamil: 'துகில் களஞ்சியம்',
      count: '5,000+ Attire & Blankets',
      badge: 'Weather & Human Dignity',
      color: '#db2777',
      bgLight: 'bg-pink-50',
      borderLight: 'border-pink-200',
      textColor: 'text-pink-700',
      desc: 'Festive traditional clothing for underprivileged children & monsoon blankets for the homeless.',
      cta: lang === 'en' ? 'Gift Blankets 👕' : 'ஆடை வழங்க 👕',
      action: onOpenSupportModal
    }
  };

  const currentHighlight = wingsDataSummary[activeHighlight] || wingsDataSummary.unavu;

  return (
    <section className="relative overflow-hidden bg-[#f1f4ee] pt-6 sm:pt-8 pb-12 lg:pb-16 border-b border-[#cdd5c9]/70">
      
      {/* Textured Atmospheric Canvas: Geometric Dots + Radiant Aura Spots */}
      <div className="absolute inset-0 bg-[radial-gradient(#cdd5c9_1px,transparent_1px)] [background-size:24px_24px] opacity-45 pointer-events-none"></div>
      
      {/* Dynamic Ambient Radiant Glows */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#ebc766]/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-[#173f32]/12 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Human Story, Editorial Craft & Action CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6" data-aos="fade-right">
            
            {/* Live Verification Beacon Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#cdd5c9] shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-extrabold tracking-widest text-[#172d25] uppercase font-display">
                100% Volunteer Trust • Chennai Since 2010 • ₹0 Overhead
              </span>
            </div>

            {/* Main Headline with Handcrafted SVG Brush Stroke */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-[#172d25] font-display leading-[1.18] sm:leading-[1.16]">
                Stronger Communities. <br className="hidden sm:inline" />
                <span className="relative inline-block text-[#173f32]">
                  Dignified Futures.
                  {/* Handcrafted Curved SVG Underline Accent */}
                  <svg 
                    className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3.5 sm:h-4 text-[#ebc766]" 
                    viewBox="0 0 260 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M3 10C65 3.5 190 2.5 257 8.5" 
                      stroke="currentColor" 
                      strokeWidth="5" 
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              
              {/* Tamil Identity Subheading with Radiant Pip */}
              <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#173f32] tamil-title leading-relaxed pt-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ebc766] shrink-0 shadow-2xs"></span>
                <span>சேவை களஞ்சியம் • சமூக மாற்றத்திற்கான இளைஞர் களம்</span>
              </div>
            </div>

            {/* Scope Badge Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#cdd5c9] text-xs sm:text-sm text-[#172d25] font-semibold shadow-2xs">
              <div className="w-4 h-4 rounded-full bg-[#173f32] text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                ✓
              </div>
              <span>
                {lang === 'en'
                  ? "Education • Environment • Food Relief • Clothing • Healthcare"
                  : "கல்வி • பசுமை • பசிப்பிணி நீக்கம் • ஆடை கண்ணியம் • நல்வாழ்வு"}
              </span>
            </div>

            {/* Mission Narrative */}
            <p className="text-xs sm:text-sm text-[#526158] leading-[1.8] sm:leading-relaxed">
              {lang === 'en' ? (
                <>
                  Founded in 2010 in Chennai, Tamil Nadu, by a collective of youth volunteers, 
                  <strong className="text-[#172d25] font-bold"> Sevai Kalanjiyam (சேவை களஞ்சியம்)</strong> turns 
                  community compassion into lasting change without administrative overhead. Drawing its identity from the Tamil word <em className="text-[#173f32] font-semibold not-italic">Kalanjiyam</em>—meaning a granary or treasury—we store and share resources with complete beneficiary dignity.
                </>
              ) : (
                <>
                  2010 ஆம் ஆண்டு சென்னையில் இளைஞர் தன்னார்வலர்களால் தொடங்கப்பட்ட 'சேவை களஞ்சியம்', 
                  எந்தவித நிர்வாகச் செலவும் இன்றி சமூகத்தின் கருணையை நிலையான மாற்றமாக மாற்றும் 100% தன்னார்வ தொண்டு அமைப்பாகும்.
                </>
              )}
            </p>

            {/* The Sacred Principle: Engraved Granary Seal Card */}
            <div className="p-4 sm:p-5 rounded-[22px] bg-gradient-to-r from-white via-white to-[#faf8f0] border border-[#cdd5c9] shadow-xs relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#173f32]"></div>
              <div className="pl-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#ebc766] font-display flex items-center gap-1.5">
                    <span>★</span>
                    <span>{lang === 'en' ? 'OUR GUIDING ETHOS' : 'அடிப்படை கொள்கை'}</span>
                  </span>
                  <span className="text-[10px] font-extrabold text-[#173f32] bg-[#f1f4ee] px-2 py-0.5 rounded-full border border-[#cdd5c9]">
                    கடமை, தானம் அல்ல
                  </span>
                </div>
                <p className="text-xs sm:text-[14px] font-bold text-[#172d25] italic leading-relaxed">
                  “{lang === 'en'
                    ? "Feeding and supporting those in genuine need is our civic obligation, never condescending charity."
                    : "உண்மையான தேவையில் இருப்பவர்களுக்கு உணவளிப்பதும் ஆதரவளிப்பதும் நமது தலையாய கடமை, வெறும் தானம் அல்ல."}”
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#526158] font-medium pt-0.5">
                  <span>— Duty, Not Charity</span>
                  <span className="text-[#173f32] font-semibold">100% Volunteer Execution</span>
                </div>
              </div>
            </div>

            {/* Action Buttons with Magnetic Micro-Interactions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenVolunteerModal}
                className="btn-care-primary group text-xs sm:text-sm py-3 px-6 cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                <span>{lang === 'en' ? 'Join as Youth Volunteer' : 'தன்னார்வலராக இணையுங்கள்'}</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#ebc766] group-hover:text-[#172d25] transition-colors shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>

              <button
                onClick={onOpenSupportModal}
                className="btn-care-secondary text-xs sm:text-sm py-3 px-6 cursor-pointer shadow-2xs hover:shadow-xs bg-white"
              >
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600 shrink-0" />
                <span>{lang === 'en' ? 'Support Our Wings' : 'களப்பணிக்கு உதவ'}</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 text-[11px] sm:text-xs text-[#526158] font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-[#cdd5c9]/70 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173f32] shrink-0" />
                100% Direct to Cause
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-[#cdd5c9]/70 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173f32] shrink-0" />
                0% Admin Salaries
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-[#cdd5c9]/70 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#173f32] shrink-0" />
                Public Audit Trails
              </span>
            </div>

          </div>

          {/* Right Column: "The Kinetic Granary Hub" (Interactive Floating Satellites & Live Radar) */}
          <div className="lg:col-span-5 relative" data-aos="fade-left" data-aos-delay="150">
            
            {/* The Main Interactive Kinetic Showcase Card */}
            <div className="relative bg-white/95 backdrop-blur-md rounded-[32px] p-5 sm:p-6 border border-[#cdd5c9] shadow-xl shadow-[#172d25]/5 hover:shadow-2xl transition-all">
              
              {/* Card Header: Live Beacon & Badge */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#cdd5c9]/60">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-radar-pulse"></div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#172d25] font-display">
                    {lang === 'en' ? 'Interactive Grassroots Hub' : 'நேரடி மக்கள் களப்பணி மையம்'}
                  </span>
                </div>
                <span className="text-[10px] font-extrabold text-[#172d25] bg-[#ebc766] border border-[#d8b555] px-2.5 py-0.5 rounded-full font-display shadow-2xs">
                  Est. 2010 • Chennai
                </span>
              </div>

              {/* Central Kinetic Stage with Floating Satellites */}
              <div className="relative my-6 py-6 flex items-center justify-center min-h-[260px] sm:min-h-[280px]">
                
                {/* Background Rotating Dashed Constellation Rings */}
                <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-dashed border-[#172d25]/20 animate-spin-slow pointer-events-none flex items-center justify-center">
                  <span className="absolute -top-1.5 w-2.5 h-2.5 rounded-full bg-[#ebc766] border-2 border-white shadow-xs"></span>
                  <span className="absolute -bottom-1.5 w-2.5 h-2.5 rounded-full bg-[#173f32] border-2 border-white shadow-xs"></span>
                  <span className="absolute -left-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white shadow-xs"></span>
                  <span className="absolute -right-1.5 w-2.5 h-2.5 rounded-full bg-rose-500 border-2 border-white shadow-xs"></span>
                </div>

                <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-[#ebc766]/30 animate-spin-reverse pointer-events-none"></div>

                {/* Central Crest Emblem with Shimmer Beam */}
                <div className="relative z-10 animate-float-logo group cursor-pointer" onClick={() => onSelectWing('kalvi')}>
                  
                  {/* Aura Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#ebc766]/30 via-[#173f32]/20 to-[#ebc766]/30 blur-xl animate-pulse-glow pointer-events-none"></div>

                  {/* Circular Crest Badge */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1.5 bg-[#f1f4ee] border-2 border-[#173f32]/30 shadow-lg group-hover:scale-108 transition-all flex items-center justify-center relative overflow-hidden ring-4 ring-white">
                    {/* Light Beam Shimmer */}
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] animate-shimmer pointer-events-none z-10"></div>
                    <img 
                      src="/sevai-logo.png" 
                      alt="Sevai Emblem" 
                      className="w-full h-full object-cover scale-110 rounded-full"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#cdd5c9] text-[10px] font-bold text-[#172d25] shadow-2xs">
                    Sevai Kalanjiyam
                  </div>
                </div>

                {/* 4 Interactive Floating Satellite Nodes */}
                
                {/* 1. Unavu Satellite (Top Left) */}
                <div 
                  onClick={() => setActiveHighlight('unavu')}
                  className={`absolute top-0 left-0 z-20 cursor-pointer animate-float-node-1 transition-all ${
                    activeHighlight === 'unavu' ? 'scale-110 z-30' : 'hover:scale-105'
                  }`}
                >
                  <div className={`p-2.5 sm:p-3 rounded-2xl bg-white border shadow-md transition-all ${
                    activeHighlight === 'unavu' ? 'border-amber-500 ring-2 ring-amber-300' : 'border-[#cdd5c9] hover:border-amber-400'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-xl bg-amber-100 text-amber-700">
                        <UtensilsCrossed className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black text-[#172d25] block leading-none font-display">25,000+</span>
                        <span className="text-[9px] font-bold text-amber-700">Hot Meals</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Pasumai Satellite (Top Right) */}
                <div 
                  onClick={() => setActiveHighlight('pasumai')}
                  className={`absolute top-0 right-0 z-20 cursor-pointer animate-float-node-2 transition-all ${
                    activeHighlight === 'pasumai' ? 'scale-110 z-30' : 'hover:scale-105'
                  }`}
                >
                  <div className={`p-2.5 sm:p-3 rounded-2xl bg-white border shadow-md transition-all ${
                    activeHighlight === 'pasumai' ? 'border-emerald-500 ring-2 ring-emerald-300' : 'border-[#cdd5c9] hover:border-emerald-400'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-xl bg-emerald-100 text-emerald-700">
                        <Trees className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black text-[#172d25] block leading-none font-display">3,800+</span>
                        <span className="text-[9px] font-bold text-emerald-700">Native Trees</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Kalvi Satellite (Bottom Left) */}
                <div 
                  onClick={() => setActiveHighlight('kalvi')}
                  className={`absolute bottom-0 left-0 z-20 cursor-pointer animate-float-node-3 transition-all ${
                    activeHighlight === 'kalvi' ? 'scale-110 z-30' : 'hover:scale-105'
                  }`}
                >
                  <div className={`p-2.5 sm:p-3 rounded-2xl bg-white border shadow-md transition-all ${
                    activeHighlight === 'kalvi' ? 'border-blue-500 ring-2 ring-blue-300' : 'border-[#cdd5c9] hover:border-blue-400'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-xl bg-blue-100 text-blue-700">
                        <GraduationCap className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black text-[#172d25] block leading-none font-display">1,250+</span>
                        <span className="text-[9px] font-bold text-blue-700">School Kits</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Maruthuvam & Tugil Satellite (Bottom Right) */}
                <div 
                  onClick={() => setActiveHighlight('maruthuvam')}
                  className={`absolute bottom-0 right-0 z-20 cursor-pointer animate-float-node-4 transition-all ${
                    activeHighlight === 'maruthuvam' ? 'scale-110 z-30' : 'hover:scale-105'
                  }`}
                >
                  <div className={`p-2.5 sm:p-3 rounded-2xl bg-white border shadow-md transition-all ${
                    activeHighlight === 'maruthuvam' ? 'border-teal-500 ring-2 ring-teal-300' : 'border-[#cdd5c9] hover:border-teal-400'
                  }`}>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-xl bg-teal-100 text-teal-700">
                        <Droplet className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black text-[#172d25] block leading-none font-display">24/7 Blood</span>
                        <span className="text-[9px] font-bold text-teal-700">Emergency</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Dynamic Interactive Spotlight Banner based on active satellite */}
              <div className={`p-4 rounded-2xl border transition-all duration-300 ${currentHighlight.bgLight} ${currentHighlight.borderLight}`}>
                
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: currentHighlight.color }}
                    ></span>
                    <h4 className="font-extrabold text-sm text-[#172d25] font-display">
                      {currentHighlight.name} <span className="text-xs text-[#173f32] font-tamil">({currentHighlight.tamil})</span>
                    </h4>
                  </div>
                  
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-white border border-current shadow-2xs" style={{ color: currentHighlight.color }}>
                    {currentHighlight.badge}
                  </span>
                </div>

                <p className="text-xs text-[#526158] leading-relaxed mb-3">
                  {currentHighlight.desc}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={currentHighlight.action}
                    className="flex-1 py-2 px-3 rounded-xl text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: currentHighlight.color }}
                  >
                    <span>{currentHighlight.cta}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onSelectWing(currentHighlight.id)}
                    className="py-2 px-3 rounded-xl bg-white text-[#172d25] border border-[#cdd5c9] font-bold text-xs hover:border-[#172d25] transition-colors cursor-pointer whitespace-nowrap shadow-2xs"
                  >
                    {lang === 'en' ? 'Explore Wing ↓' : 'விவரங்கள் ↓'}
                  </button>
                </div>

              </div>

              {/* Verified Trust Strip */}
              <div className="mt-3.5 pt-3 border-t border-[#cdd5c9]/60 flex items-center justify-between text-[10px] font-bold text-[#526158]">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#173f32] stroke-[3]" />
                  <span>Geotagged Audits</span>
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#173f32] stroke-[3]" />
                  <span>24/7 Chennai Dispatch</span>
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#173f32] stroke-[3]" />
                  <span>100% Volunteer Energy</span>
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Live Grassroots Marquee Activity Ticker (Real, Moving, Authentic) */}
        <div className="mt-10 pt-6 border-t border-[#cdd5c9]/60" data-aos="fade-up">
          <div className="flex items-center gap-3 overflow-hidden bg-white/80 backdrop-blur-xs rounded-full py-2.5 px-4 border border-[#cdd5c9] shadow-2xs">
            
            <div className="flex items-center gap-2 shrink-0 pr-3 border-r border-[#cdd5c9]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#172d25] font-display whitespace-nowrap">
                {lang === 'en' ? 'Live Ground Updates:' : 'நேரடி கள நிலவரம்:'}
              </span>
            </div>

            {/* Continuous Horizontal Ticker */}
            <div className="overflow-hidden flex-1 relative mask-fade-edges">
              <div className="animate-marquee gap-8 items-center text-xs text-[#526158]">
                {[...liveFieldActions, ...liveFieldActions].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 shrink-0">
                    <span className={`w-2 h-2 rounded-full ${item.dot}`}></span>
                    <strong className={`font-bold ${item.color}`}>{item.wing}:</strong>
                    <span>{item.text}</span>
                    <span className="text-[#cdd5c9] px-2">•</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}