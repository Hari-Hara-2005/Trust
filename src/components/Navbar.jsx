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

  useEffect(() => {
    const timer = setInterval(() => {
      setUpdateIndex(prev => (prev + 1) % liveUpdates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: lang === 'en' ? 'About' : 'எங்களை பற்றி', href: '#about' },
    { name: lang === 'en' ? 'Causes (5 Wings)' : '5 களஞ்சியங்கள்', href: '#wings' },
    { name: lang === 'en' ? 'Impact' : 'களப்பணி தாக்கம்', href: '#impact' },
    { name: lang === 'en' ? 'Transparency' : 'நம்பகத்தன்மை', href: '#transparency' },
    { name: lang === 'en' ? 'Stories' : 'களக்கதைகள்', href: '#stories' },
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

      {/* Top Utility Announcement Bar (Careunity Style) */}
      <div className="bg-[#172d25] text-white py-2 px-4 sm:px-6 border-b border-[#234539] text-xs font-medium z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          {/* Left: Pill label & Live ticker */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="text-[11px] font-bold tracking-widest text-[#ebc766] uppercase">
              / SEVAI KALANJIYAM • CHENNAI EST. 2010 /
            </span>
            <span className="hidden lg:inline text-white/30">•</span>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300 text-xs truncate max-w-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#ebc766] shrink-0" />
              <span className="truncate">{liveUpdates[updateIndex]}</span>
            </div>
          </div>

          {/* Right: Emergency Quick Actions & Language Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={onOpenFoodModal}
              className="flex items-center gap-1.5 text-[#ebc766] hover:text-white transition-colors cursor-pointer text-xs font-semibold"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Surplus Food Rescue' : 'உணவு மீட்பு'}</span>
            </button>

            <span className="text-white/20">|</span>

            <button 
              onClick={onOpenBloodModal}
              className="flex items-center gap-1.5 text-rose-300 hover:text-white transition-colors cursor-pointer text-xs font-semibold"
            >
              <Droplet className="w-3.5 h-3.5 text-rose-400" />
              <span>{lang === 'en' ? 'Blood Helpline' : 'குருதிக்கொடை'}</span>
            </button>

            <span className="text-white/20">|</span>

            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2.5 py-0.5 rounded-full text-xs font-bold text-white transition-all cursor-pointer border border-white/15"
            >
              <Globe className="w-3.5 h-3.5 text-[#ebc766]" />
              <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Careunity Sticky Navigation Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f1f4ee]/95 backdrop-blur-md shadow-sm border-b border-[#cdd5c9] py-3' 
          : 'bg-[#f1f4ee] py-4 border-b border-[#cdd5c9]/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white p-1 border border-[#cdd5c9] shadow-xs group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
              <img 
                src="/sevai-logo.png" 
                alt="Sevai Kalanjiyam Crest Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#172d25] font-display">
                  Sevai Kalanjiyam
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-bold text-[#173f32] tamil-title">
                  சேவை களஞ்சியம்
                </span>
                <span className="text-[11px] text-[#526158] hidden sm:inline">• Social Welfare Trust</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-[#172d25] hover:text-[#173f32] hover:bg-white/80 rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs in Careunity Pill Style */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVolunteerModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#172d25] bg-white border border-[#cdd5c9] hover:border-[#172d25] rounded-full transition-all cursor-pointer"
            >
              <Users className="w-4 h-4 text-[#526158]" />
              <span>{lang === 'en' ? 'Volunteer' : 'இணையுங்கள்'}</span>
            </button>

            {/* Careunity Signature Primary Button */}
            <button
              onClick={onOpenSupportModal}
              className="btn-care-primary group"
            >
              <span>{lang === 'en' ? 'Donate Now' : 'ஆதரவளிக்க'}</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#ebc766] group-hover:text-[#172d25] transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSupportModal}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-[#172d25] rounded-full shadow-xs cursor-pointer"
            >
              {lang === 'en' ? 'Donate' : 'ஆதரவு'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#172d25] hover:bg-white rounded-full transition-colors cursor-pointer border border-[#cdd5c9]"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#172d25]/60 backdrop-blur-xs flex justify-end animate-fadeIn">
          <div className="w-4/5 max-w-sm bg-[#f1f4ee] h-full shadow-2xl flex flex-col p-6 overflow-y-auto border-l border-[#cdd5c9]">
            <div className="flex items-center justify-between pb-4 border-b border-[#cdd5c9]">
              <div className="flex items-center gap-2.5">
                <img src="/sevai-logo.png" alt="Logo" className="w-10 h-10 object-contain rounded-full bg-white p-0.5" />
                <div>
                  <h3 className="font-extrabold text-sm text-[#172d25]">SEVAI KALANJIYAM</h3>
                  <p className="text-xs text-[#173f32] font-bold">சேவை களஞ்சியம்</p>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#526158] hover:text-[#172d25] rounded-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Language Switch */}
            <div className="my-4 p-3 bg-white rounded-2xl flex items-center justify-between border border-[#cdd5c9]">
              <span className="text-xs font-semibold text-[#526158]">
                {lang === 'en' ? 'Display Language' : 'மொழி தேர்வு'}
              </span>
              <button
                onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
                className="flex items-center gap-1 px-3 py-1 bg-[#f1f4ee] border border-[#cdd5c9] rounded-full text-xs font-bold text-[#172d25]"
              >
                <Globe className="w-3.5 h-3.5 text-[#173f32]" />
                {lang === 'en' ? 'தமிழ்' : 'English'}
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-1 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-bold text-[#172d25] hover:bg-white rounded-xl transition-colors"
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
                className="w-full flex items-center gap-3 p-3 text-left bg-white border border-[#cdd5c9] rounded-2xl"
              >
                <div className="p-2 bg-[#ebc766] text-[#172d25] rounded-xl font-bold">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#172d25]">
                    {lang === 'en' ? 'Surplus Food Rescue' : 'உபரி உணவு மீட்பு'}
                  </div>
                  <div className="text-[11px] text-[#526158]">
                    {lang === 'en' ? 'Prevent wedding food waste' : 'திருமண உணவு வீணாகாமல் காப்போம்'}
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBloodModal(); }}
                className="w-full flex items-center gap-3 p-3 text-left bg-white border border-[#cdd5c9] rounded-2xl"
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
                className="w-full py-3 text-sm font-bold text-[#172d25] bg-white border border-[#cdd5c9] rounded-full text-center"
              >
                {lang === 'en' ? 'Join as Youth Volunteer' : 'தன்னார்வலராக இணைய'}
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSupportModal(); }}
                className="w-full py-3 text-sm font-bold text-white bg-[#172d25] rounded-full text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>{lang === 'en' ? 'Support Our Cause' : 'ஆதரவு அளிக்க'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
