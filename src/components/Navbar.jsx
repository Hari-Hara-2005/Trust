import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Menu, 
  X, 
  Phone, 
  Globe, 
  Utensils, 
  Droplet, 
  Users, 
  ShieldCheck,
  ChevronRight,
  Sparkles
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
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cycle live field updates every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setUpdateIndex(prev => (prev + 1) % liveUpdates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: lang === 'en' ? 'About Us' : 'எங்களை பற்றி', href: '#about' },
    { name: lang === 'en' ? '5 Wings' : '5 களஞ்சியங்கள்', href: '#wings' },
    { name: lang === 'en' ? 'Our Impact' : 'களப்பணி தாக்கம்', href: '#impact' },
    { name: lang === 'en' ? 'Zero Overhead' : 'நம்பகத்தன்மை', href: '#transparency' },
    { name: lang === 'en' ? 'Journey' : 'வரலாறு', href: '#journey' },
    { name: lang === 'en' ? 'Contact' : 'தொடர்புக்கு', href: '#contact' },
  ];

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div 
        id="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Notification & Live Activity Bar */}
      <div className="bg-[#141042] text-white py-2 px-4 sm:px-6 border-b border-indigo-900/60 transition-colors z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 sm:gap-3">
          
          {/* Left: Origin & Cycling Live Activity */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              {lang === 'en' ? 'Est. 2010 • Chennai' : '2010 முதல் • சென்னை'}
            </span>

            {/* Live Ticker */}
            <div className="hidden md:flex items-center gap-1.5 text-slate-300 text-xs transition-all duration-500 truncate max-w-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{liveUpdates[updateIndex]}</span>
            </div>
          </div>

          {/* Right: Quick Rescue & Language Switch */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Surplus Food Rescue Button */}
            <button 
              onClick={onOpenFoodModal}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors cursor-pointer group text-xs font-semibold"
              title="Surplus Food Alert Chennai"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <Utensils className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>{lang === 'en' ? 'Food Rescue' : 'உணவு மீட்பு'}</span>
            </button>

            <span className="text-indigo-800">|</span>

            {/* Blood Support Button */}
            <button 
              onClick={onOpenBloodModal}
              className="flex items-center gap-1.5 text-rose-300 hover:text-rose-200 transition-colors cursor-pointer group text-xs font-semibold"
              title="Emergency Blood Donor Request"
            >
              <Droplet className="w-3.5 h-3.5 text-rose-400 group-hover:scale-110 transition-transform" />
              <span>{lang === 'en' ? 'Blood Support' : 'அவசர குருதிக்கொடை'}</span>
            </button>

            <span className="text-indigo-800">|</span>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2.5 py-0.5 rounded-md text-xs font-bold text-white transition-all cursor-pointer border border-white/20"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5' 
          : 'bg-white py-3 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#1d195c] via-[#ea580c] to-[#d91b5c] shadow-md group-hover:shadow-lg transition-all flex items-center justify-center">
                <img 
                  src="/sevai-logo.png" 
                  alt="Sevai Kalanjiyam Logo" 
                  className="w-full h-full object-contain rounded-full bg-white p-0.5 group-hover:scale-105 transition-transform"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-[#18144b] font-display">
                  SEVAI KALANJIYAM
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-bold text-[#ea580c] tamil-title">
                  சேவை களஞ்சியம்
                </span>
                <span className="text-[11px] text-slate-500 hidden md:inline font-medium">• Social Welfare Trust</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#18144b] hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenVolunteerModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs md:text-sm font-bold text-[#18144b] bg-slate-100 hover:bg-slate-200 rounded-lg transition-all cursor-pointer"
            >
              <Users className="w-4 h-4 text-[#ea580c]" />
              <span>{lang === 'en' ? 'Volunteer' : 'இணையுங்கள்'}</span>
            </button>

            <button
              onClick={onOpenSupportModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-[#ea580c] to-[#d91b5c] hover:from-[#c2410c] hover:to-[#be123c] rounded-lg shadow-xs hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{lang === 'en' ? 'Support Cause' : 'ஆதரவு அளிக்க'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSupportModal}
              className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#ea580c] to-[#d91b5c] rounded-md shadow-xs cursor-pointer"
            >
              {lang === 'en' ? 'Support' : 'ஆதரவு'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#18144b] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img src="/sevai-logo.png" alt="Logo" className="w-10 h-10 object-contain rounded-full" />
                <div>
                  <h3 className="font-extrabold text-sm text-[#18144b]">SEVAI KALANJIYAM</h3>
                  <p className="text-xs text-[#ea580c] font-bold">சேவை களஞ்சியம்</p>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Language Switch in Mobile Menu */}
            <div className="my-3.5 p-3 bg-slate-50 rounded-xl flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">
                {lang === 'en' ? 'Display Language' : 'மொழி தேர்வு'}
              </span>
              <button
                onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
                className="flex items-center gap-1 px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-[#18144b]"
              >
                <Globe className="w-3.5 h-3.5 text-[#ea580c]" />
                {lang === 'en' ? 'தமிழ் (Tamil)' : 'English'}
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-1 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            {/* Quick emergency action cards */}
            <div className="mt-5 space-y-2.5 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFoodModal();
                }}
                className="w-full flex items-center gap-3 p-3 text-left bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80 rounded-xl transition-colors cursor-pointer"
              >
                <div className="p-2 bg-amber-500 text-white rounded-lg">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-950">
                    {lang === 'en' ? 'Surplus Food Rescue' : 'உபரி உணவு மீட்பு'}
                  </div>
                  <div className="text-[11px] text-amber-800">
                    {lang === 'en' ? 'Prevent food waste in Chennai' : 'திருமண உணவு வீணாகாமல் காப்போம்'}
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBloodModal();
                }}
                className="w-full flex items-center gap-3 p-3 text-left bg-rose-50 hover:bg-rose-100/80 border border-rose-200/80 rounded-xl transition-colors cursor-pointer"
              >
                <div className="p-2 bg-rose-500 text-white rounded-lg">
                  <Droplet className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-rose-950">
                    {lang === 'en' ? 'Emergency Blood Request' : 'அவசர குருதிக்கொடை'}
                  </div>
                  <div className="text-[11px] text-rose-800">
                    {lang === 'en' ? '24/7 volunteer donor response' : 'சென்னை மருத்துவமனை அவசர உதவி'}
                  </div>
                </div>
              </button>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto pt-5 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVolunteerModal();
                }}
                className="w-full py-2.5 text-sm font-bold text-[#18144b] bg-slate-100 hover:bg-slate-200 rounded-lg text-center cursor-pointer"
              >
                {lang === 'en' ? 'Join as Youth Volunteer' : 'தன்னார்வலராக இணைய'}
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSupportModal();
                }}
                className="w-full py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#ea580c] to-[#d91b5c] rounded-lg text-center shadow-md cursor-pointer"
              >
                {lang === 'en' ? 'Support Our Initiatives' : 'ஆதரவு அளிக்க'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
