import React, { useState } from 'react';
import { Anchor, Phone, Mail, Globe, Menu, X, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenQuote: (defaultService?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, isRtl } = useLanguage();

  const navLinks = [
    { id: 'logistics', label: lang === 'AR' ? 'الشحن واللوجستيات' : 'Logistics & Freight', href: '#logistics' },
    { id: 'sourcing', label: lang === 'AR' ? 'التوريد من الصين' : 'China Sourcing', href: '#sourcing' },
    { id: 'inspection', label: lang === 'AR' ? 'فحص الجودة' : 'Quality Inspection (AQL)', href: '#inspection' },
    { id: 'company-china', label: lang === 'AR' ? 'تأسيس شركة صينية' : 'China WFOE Setup', href: '#company-china' },
    { id: 'company-hk', label: lang === 'AR' ? 'شركة هونغ كونغ' : 'Hong Kong Company', href: '#company-hk' },
    { id: 'offices', label: lang === 'AR' ? 'مكاتبنا' : 'China Hubs', href: '#offices' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top micro-bar: Verified operational status & hotline */}
      <header className="w-full bg-[#111622] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{lang === 'AR' ? 'العمليات نشطة: شنتشن • هونغ كونغ • نينغبو • ييوو' : 'Operations Live: Shenzhen • Hong Kong • Ningbo • Yiwu'}</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{lang === 'AR' ? 'توقيت بكين: GMT+8 (ساعات العمل)' : 'Beijing Time: GMT+8 (Business Hours Open)'}</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <a href="https://wa.me/8618567413851" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">{lang === 'AR' ? 'واتساب / هاتف:' : 'WhatsApp / Phone:'}</span> <span dir="ltr">+86 18567413851</span>
            </a>
            <button
              onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold flex items-center gap-1 transition-all"
            >
              <Globe className="w-3 h-3 text-blue-400" />
              <span>{lang === 'EN' ? 'English / العربية' : 'العربية / English'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Primary Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/main/sourcing%20(Logo)%20(1).png" alt="Logo" className="h-12 w-auto object-contain" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 font-['Space_Grotesk']">
                  {lang === 'AR' ? 'بوابة الصين' : 'SINO GATE'}
                </span>
                
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                {lang === 'AR' ? 'بوابتك للتجارة واللوجستيات في الصين' : 'China Trade & Logistics Gateway'}
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-normal transition-all duration-150 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA Group */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollTo('#logistics')}
              className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {lang === 'AR' ? 'مخطط المسار' : 'Route Planner'}
            </button>
            <button
              onClick={() => onOpenQuote()}
              id="nav-quote-btn"
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold shadow-md shadow-blue-600/25 transition-all flex items-center gap-1.5"
            >
              <span>{lang === 'AR' ? 'طلب تسعير' : 'Instant Quote / RFQ'}</span>
              <span className={`text-blue-200 font-normal ${isRtl ? 'rotate-180' : ''}`}>›››</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuote()}
              className="sm:hidden px-3.5 py-2 rounded-full bg-blue-600 text-white text-xs font-bold"
            >
              {lang === 'AR' ? 'تسعير' : 'Quote'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl bg-blue-600 text-white text-sm font-bold text-center shadow-sm"
              >
                {lang === 'AR' ? 'طلب استشارة / عرض سعر' : 'Request Consultation / Formal RFQ'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
