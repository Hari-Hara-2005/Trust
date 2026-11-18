import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Menu, 
  X, 
  Globe, 
  Utensils, 
  Droplet, 
  Users, 
  ArrowUpRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { liveUpdates } from '../data/trustData';

export default function Navbar({ 
  lang, 
  setLang, 
  onOpenFoodModal, 
  onOpenVolunteerModal, 
  onOpenSupportModal, 
  onOpenBloodModal
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [updateIndex, setUpdateIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setUpdateIndex(prev => (prev + 1) % liveUpdates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: lang === 'en' ? 'About' : 'எங்களை பற்றி', href: '#about' },
    { name: lang === 'en' ? 'Causes' : '5 களஞ்சியங்கள்', href: '#wings' },
    { name: lang === 'en' ? 'Impact' : 'களப்பணி தாக்கம்', href: '#impact' },
    { name: lang === 'en' ? 'Transparency' : 'நம்பகத்தன்மை', href: '#transparency' },
    { name: lang === 'en' ? 'Stories' : 'களக்கதைகள்', href: '#stories' },
    { name: lang === 'en' ? 'Journey' : 'வரலாறு', href: '#journey' },
    { name: lang === 'en' ? 'Contact' : 'தொடர்புக்கு', href: '#contact' },
  ];

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div 
        id="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Permanently Fixed Navigation Bar Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        
        {/* Top Utility Announcement Bar (Smoothly collapses on scroll to maximize reading area) */}
        <div className={`bg-[#172d25] text-white px-3 sm:px-6 text-xs font-medium transition-all duration-300 overflow-hidden ${
          isScrolled 
            ? 'max-h-0 py-0 opacity-0 border-none pointer-events-none' 
            : 'max-h-12 py-1.5 border-b border-[#234539] opacity-100 shadow-2xs'
        }`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
            
            {/* Left: Ticker label & Live field ticker */}
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-hidden shrink min-w-0">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-[#ebc766] uppercase font-display shrink-0 whitespace-nowrap">
                <span className="hidden sm:inline">/ SEVAI KALANJIYAM • </span>CHENNAI EST. 2010<span className="hidden sm:inline"> /</span>
              </span>
              <span className="hidden lg:inline text-white/30">•</span>
              <div className="hidden lg:flex items-center gap-1.5 text-slate-300 text-xs truncate max-w-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#ebc766] shrink-0" />
                <span className="truncate">{liveUpdates[updateIndex]}</span>
              </div>
            </div>

            {/* Right: Emergency Quick Actions & Language Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button 
                onClick={onOpenFoodModal}
                className="hidden xs:flex items-center gap-1 sm:gap-1.5 text-[#ebc766] hover:text-white transition-colors cursor-pointer text-[11px] sm:text-xs font-semibold whitespace-nowrap"
              >
                <Utensils className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span>{lang === 'en' ? 'Food Rescue' : 'உணவு'}</span>
              </button>

              <span className="hidden xs:inline text-white/20">|</span>

              <button 
                onClick={onOpenBloodModal}
                className="hidden md:flex items-center gap-1 sm:gap-1.5 text-rose-300 hover:text-white transition-colors cursor-pointer text-[11px] sm:text-xs font-semibold whitespace-nowrap"
              >
                <Droplet className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400 shrink-0" />
                <span>{lang === 'en' ? 'Blood Helpline' : 'குருதிக்கொடை'}</span>
              </button>

              <span className="hidden md:inline text-white/20">|</span>

              <button
                onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
                className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold text-white transition-all cursor-pointer border border-white/15 whitespace-nowrap"
                title="Switch Language (மொழி மாற்று)"
              >
                <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#ebc766] shrink-0" />
                <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Careunity Navigation Header */}
        <header className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#f1f4ee]/95 backdrop-blur-md shadow-md border-b border-[#cdd5c9] py-2 sm:py-2.5' 
            : 'bg-[#f1f4ee] py-2 sm:py-3 border-b border-[#cdd5c9]/80 shadow-2xs'
        }`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 sm:gap-4">
            
            {/* Logo & Brand Identity (Optimized for zero-wrapping & crisp display) */}
            <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
              
              {/* Perfectly Proportioned Logo Circle */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white p-0.5 border-2 border-[#173f32] shadow-xs group-hover:scale-105 group-hover:border-[#ebc766] transition-all flex items-center justify-center shrink-0 ring-2 ring-[#cdd5c9]/60 overflow-hidden">
                <img 
                  src="/sevai-logo.png" 
                  alt="Sevai Kalanjiyam Crest Logo" 
                  className="w-full h-full object-cover scale-110 rounded-full transform group-hover:rotate-2 transition-transform duration-300"
                />
              </div>
              
              {/* Brand Typography (Ensures no awkward word wrapping & generous line spacing) */}
              <div className="flex flex-col justify-center shrink-0">
                <span className="text-sm sm:text-lg md:text-xl font-black tracking-tight text-[#172d25] font-display leading-tight group-hover:text-[#173f32] transition-colors whitespace-nowrap">
                  Sevai Kalanjiyam
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-[#173f32] tamil-title leading-tight mt-0.5 sm:mt-1 whitespace-nowrap">
                  சேவை களஞ்சியம் <span className="text-[#526158] font-medium text-[9px] sm:text-[11px] hidden sm:inline">• Social Welfare Trust</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Single-line layout, tailored spacing) */}
            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-bold text-[#172d25] hover:text-[#173f32] hover:bg-white/80 rounded-full transition-colors font-display"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action CTAs in Careunity Pill Style */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Volunteer CTA (Desktop full view) */}
              <button
                onClick={onOpenVolunteerModal}
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs xl:text-sm font-bold text-[#172d25] bg-white border border-[#cdd5c9] hover:border-[#172d25] rounded-full transition-all cursor-pointer font-display shadow-2xs whitespace-nowrap"
              >
                <Users className="w-4 h-4 text-[#526158]" />
                <span>{lang === 'en' ? 'Volunteer' : 'இணையுங்கள்'}</span>
              </button>

              {/* Single Adaptive Donate Button (Never duplicates, responsive text & padding) */}
              <button
                onClick={onOpenSupportModal}
                className="btn-care-primary group text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 md:px-5 cursor-pointer whitespace-nowrap shadow-xs"
              >
                <span>{lang === 'en' ? 'Donate' : 'ஆதரவு'}</span>
                <span className="hidden sm:inline">{lang === 'en' ? ' Now' : 'ளிக்க'}</span>
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#ebc766] group-hover:text-[#172d25] transition-colors shrink-0">
                  <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
              </button>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#172d25] hover:bg-white rounded-full transition-colors cursor-pointer border border-[#cdd5c9] shrink-0"
                aria-label="Open mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </header>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#172d25]/60 backdrop-blur-xs flex justify-end animate-fadeIn">
          <div className="w-4/5 max-w-sm bg-[#f1f4ee] h-full shadow-2xl flex flex-col p-6 overflow-y-auto border-l border-[#cdd5c9]">
            <div className="flex items-center justify-between pb-4 border-b border-[#cdd5c9]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white p-0.5 border-2 border-[#173f32] shadow-xs flex items-center justify-center overflow-hidden shrink-0">
                  <img src="/sevai-logo.png" alt="Logo" className="w-full h-full object-cover scale-110 rounded-full" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-[#172d25] font-display">SEVAI KALANJIYAM</h3>
                  <p className="text-xs text-[#173f32] font-bold tamil-title">சேவை களஞ்சியம்</p>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#526158] hover:text-[#172d25] rounded-full cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Language Switch */}
            <div className="my-4 p-3 bg-white rounded-2xl flex items-center justify-between border border-[#cdd5c9]">
              <span className="text-xs font-semibold text-[#526158]">
                {lang === 'en' ? 'Display Language' : 'மொழி தேர்வு'}
              </span>
              <button
                onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#f1f4ee] border border-[#cdd5c9] rounded-full text-xs font-bold text-[#172d25] cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#173f32]" />
                <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-1 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-[#172d25] hover:bg-white rounded-xl transition-colors font-display"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#526158]" />
                </a>
              ))}
            </nav>

            {/* Emergency Action Buttons */}
            <div className="mt-6 space-y-2.5 pt-4 border-t border-[#cdd5c9]">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenFoodModal(); }}
                className="w-full flex items-center gap-3 p-3 text-left bg-white border border-[#cdd5c9] rounded-2xl cursor-pointer hover:border-[#172d25] transition-all"
              >
                <div className="p-2 bg-[#ebc766] text-[#172d25] rounded-xl font-bold">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#172d25]">
                    {lang === 'en' ? 'Surplus Food Rescue' : 'உணவு மீட்பு'}
                  </div>
                  <div className="text-[11px] text-[#526158]">
                    {lang === 'en' ? 'Prevent wedding food waste' : 'திருமண உணவு வீணாகாமல் காப்போம்'}
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBloodModal(); }}
                className="w-full flex items-center gap-3 p-3 text-left bg-white border border-[#cdd5c9] rounded-2xl cursor-pointer hover:border-[#172d25] transition-all"
              >
                <div className="p-2 bg-rose-100 text-rose-700 rounded-xl font-bold">
                  <Droplet className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#172d25]">
                    {lang === 'en' ? 'Emergency Blood Request' : 'அவசர குருதிக்கொடை'}
                  </div>
                  <div className="text-[11px] text-[#526158]">
                    {lang === 'en' ? '24/7 volunteer response' : 'சென்னை மருத்துவமனை அவசர உதவி'}
                  </div>
                </div>
              </button>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto pt-6 space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenVolunteerModal(); }}
                className="w-full py-3 text-sm font-bold text-[#172d25] bg-white border border-[#cdd5c9] hover:border-[#172d25] rounded-full text-center cursor-pointer font-display transition-colors"
              >
                {lang === 'en' ? 'Join as Youth Volunteer' : 'தன்னார்வலராக இணைய'}
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSupportModal(); }}
                className="w-full py-3 text-sm font-bold text-white bg-[#172d25] hover:bg-[#173f32] rounded-full text-center shadow-md flex items-center justify-center gap-2 cursor-pointer font-display transition-colors"
              >
                <span>{lang === 'en' ? 'Support Our Cause' : 'ஆதரவு அளிக்க'}</span>
                <ArrowUpRight className="w-4 h-4 text-[#ebc766]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}